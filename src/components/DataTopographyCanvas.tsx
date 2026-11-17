import { useEffect, useRef } from "react";

interface DataTopographyCanvasProps {
  className?: string;
}

interface PointerState {
  x: number;
  y: number;
  active: boolean;
  strength: number;
}

/**
 * Interactive 3D Data Topography / Point-Cloud Wave canvas.
 * Projects a 3D grid of data nodes onto 2D space with smooth wave motion
 * and cursor-reactive elevation + highlight ripples.
 */
export function DataTopographyCanvas({ className = "" }: DataTopographyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef<PointerState>({
    x: 0.65,
    y: 0.5,
    active: false,
    strength: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let rafId = 0;
    const startTime = performance.now();

    const cols = 42;
    const rows = 26;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      pointerRef.current.x = (e.clientX - rect.left) / rect.width;
      pointerRef.current.y = (e.clientY - rect.top) / rect.height;
      pointerRef.current.active = true;
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
    };

    const host = canvas.parentElement;
    host?.addEventListener("pointermove", handlePointerMove, { passive: true });
    host?.addEventListener("pointerleave", handlePointerLeave, { passive: true });

    const renderFrame = (now: number) => {
      const t = prefersReducedMotion ? 0 : (now - startTime) * 0.00075;
      const pointer = pointerRef.current;

      // Smoothly ease cursor influence in and out
      const targetStrength = pointer.active ? 1 : 0;
      pointer.strength += (targetStrength - pointer.strength) * 0.08;

      ctx.clearRect(0, 0, width, height);

      if (width === 0 || height === 0) {
        if (!prefersReducedMotion) {
          rafId = requestAnimationFrame(renderFrame);
        }
        return;
      }

      const isMobile = width < 768;
      // Anchor the wave slightly toward the right on desktop so it balances the left-aligned copy
      const originX = isMobile ? width * 0.5 : width * 0.66;
      const originY = isMobile ? height * 0.62 : height * 0.54;
      const spreadX = isMobile ? width * 1.15 : width * 0.82;
      const spreadZ = isMobile ? height * 0.65 : height * 0.85;

      const focal = 540;
      const tilt = 0.56; // Camera pitch

      const projected: {
        sx: number;
        sy: number;
        depth: number;
        elevation: number;
        cursorProx: number;
      }[][] = [];

      const pointerScreenX = pointer.x * width;
      const pointerScreenY = pointer.y * height;
      const influenceRadius = Math.max(120, Math.min(width, height) * 0.24);

      for (let r = 0; r < rows; r++) {
        const rowArr: (typeof projected)[number] = [];
        const nz = r / (rows - 1) - 0.5; // -0.5 to 0.5

        for (let c = 0; c < cols; c++) {
          const nx = c / (cols - 1) - 0.5; // -0.5 to 0.5

          // Multi-harmonic data topography wave
          const wave1 = Math.sin(nx * 5.2 + t * 1.4) * Math.cos(nz * 4.1 - t * 0.9);
          const wave2 = Math.sin((nx + nz) * 7.5 - t * 1.8) * 0.35;
          const ridge = Math.exp(-Math.pow(nx * 2.2 - 0.15, 2) * 1.5) * 0.45;
          const baseY = (wave1 + wave2 + ridge) * 34;

          const wx = nx * spreadX;
          const wz = nz * spreadZ;

          // Rotate around X axis for perspective tilt
          const ry = baseY * Math.cos(tilt) - wz * Math.sin(tilt);
          const rz = baseY * Math.sin(tilt) + wz * Math.cos(tilt) + 460;

          const scale = focal / Math.max(120, rz);
          let sx = originX + wx * scale;
          let sy = originY + ry * scale;

          // Cursor proximity in screen space -> lift & subtle radial ripple
          const dx = sx - pointerScreenX;
          const dy = sy - pointerScreenY;
          const dist = Math.hypot(dx, dy);
          let cursorProx = 0;

          if (pointer.strength > 0.01 && dist < influenceRadius) {
            const norm = 1 - dist / influenceRadius;
            cursorProx = norm * norm * pointer.strength;
            // Lift peak upward & gently push outward
            sy -= cursorProx * 28;
            if (dist > 0.5) {
              sx += (dx / dist) * cursorProx * 8;
            }
          }

          rowArr.push({
            sx,
            sy,
            depth: rz,
            elevation: wave1 + wave2,
            cursorProx,
          });
        }
        projected.push(rowArr);
      }

      // 1. Subtle structural mesh lines along rows (horizon contours in Datadom blue/navy)
      ctx.lineWidth = 0.85;
      for (let r = 0; r < rows; r += 2) {
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const p = projected[r][c];
          if (c === 0) ctx.moveTo(p.sx, p.sy);
          else ctx.lineTo(p.sx, p.sy);
        }
        const depthAlpha = 0.07 + (r / rows) * 0.14;
        ctx.strokeStyle = `rgba(37, 99, 235, ${depthAlpha.toFixed(3)})`;
        ctx.stroke();
      }

      // 2. Highlighted cool cyan-blue links near the cursor
      if (pointer.strength > 0.04) {
        ctx.lineWidth = 1.15;
        for (let r = 0; r < rows - 1; r++) {
          for (let c = 0; c < cols - 1; c++) {
            const p = projected[r][c];
            if (p.cursorProx < 0.06) continue;
            const right = projected[r][c + 1];
            const down = projected[r + 1][c];
            const alpha = Math.min(0.62, p.cursorProx * 0.7);
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(p.sx, p.sy);
            ctx.lineTo(right.sx, right.sy);
            ctx.moveTo(p.sx, p.sy);
            ctx.lineTo(down.sx, down.sy);
            ctx.stroke();
          }
        }
      }

      // 3. Draw data nodes: Deep Navy (#0f172a) -> Datadom Blue (#2563eb) -> Cool Cyan (#06b6d4)
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p = projected[r][c];
          const depthFactor = Math.max(0.3, Math.min(1, 1 - (p.depth - 220) / 560));
          const crest = Math.max(0, Math.min(1, p.elevation * 0.45 + 0.45));

          // Base wave color blends Deep Navy -> Datadom Royal Blue (#2563eb)
          const blueMix = Math.min(1, crest * 0.85 + p.cursorProx * 0.5);
          let red = Math.round(15 + (37 - 15) * blueMix);
          let green = Math.round(23 + (99 - 23) * blueMix);
          let blue = Math.round(42 + (235 - 42) * blueMix);

          // Near cursor or highest peaks, shift toward Cool Cyan (#06b6d4)
          const cyanMix = Math.min(1, p.cursorProx * 1.15 + (crest > 0.78 ? (crest - 0.78) * 1.6 : 0));
          red = Math.round(red + (6 - red) * cyanMix);
          green = Math.round(green + (182 - green) * cyanMix);
          blue = Math.round(blue + (212 - blue) * cyanMix);

          const alpha = Math.min(0.95, depthFactor * (0.36 + crest * 0.42) + p.cursorProx * 0.55);
          const radius = 1.5 + depthFactor * 1.35 + p.cursorProx * 2.1;

          ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        rafId = requestAnimationFrame(renderFrame);
      }
    };

    rafId = requestAnimationFrame(renderFrame);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      host?.removeEventListener("pointermove", handlePointerMove);
      host?.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none block h-full w-full ${className}`}
    />
  );
}
