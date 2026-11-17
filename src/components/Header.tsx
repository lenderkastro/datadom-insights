import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/training", label: "Training" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-foreground transition-opacity hover:opacity-85"
          aria-label="Datadom home"
        >
          <img src="/logo/logo.png" alt="Datadom" className="h-11 w-auto object-contain" />
        </Link>

        {/* Centered segmented pill navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 rounded-full border border-border/80 bg-card/90 p-1 shadow-xs backdrop-blur-md md:flex"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-foreground text-background shadow-xs"
                    : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild size="sm" className="rounded-full px-5 shadow-xs">
            <Link to="/contact">
              Start a project
              <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="inline-flex items-center justify-center rounded-full border border-border/80 bg-card p-2 text-foreground md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-lg md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button asChild className="mt-3 w-full rounded-full">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                Start a project
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
