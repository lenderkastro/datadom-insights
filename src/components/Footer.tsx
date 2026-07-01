import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";


const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/training", label: "Training" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <Link to="/" className="inline-flex items-center text-foreground" aria-label="Datadom home">
              <img src="/logo/logo.png" alt="Datadom" className="h-14 w-auto object-contain" />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Enterprise-grade data science, machine learning, and specialized training. Turning
              complex data into strategic intelligence — from Uyo, Nigeria to the world.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-foreground/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Uyo, Akwa Ibom, Nigeria</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/80">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:hello@datadom.ng" className="transition-colors hover:text-primary">
                  hello@datadom.ng
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/80">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+2340000000000" className="transition-colors hover:text-primary">
                  +234 000 000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1 sm:gap-1.5">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Datadom. All rights reserved.
            </p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60">
              Site Built by <span className="font-semibold text-foreground/80">OKIKE ENTERPRISES</span>
            </p>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Engineered in Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
