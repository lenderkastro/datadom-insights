import { Link } from "@tanstack/react-router";
import { Database, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/training", label: "Training" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-foreground">
              <Database className="h-5 w-5 text-primary" />
              <span className="font-mono text-lg font-bold tracking-tight">Datadom</span>
            </Link>
            <p className="max-w-sm text-sm text-muted-foreground">
              Empowering businesses and individuals through data analytics, machine learning, and
              industry-relevant training in Uyo, Nigeria.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>Uyo, Akwa Ibom State, Nigeria</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href="mailto:hello@datadom.ng"
                  className="transition-colors hover:text-foreground"
                >
                  hello@datadom.ng
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+2340000000000" className="transition-colors hover:text-foreground">
                  +234 000 000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Datadom. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Data-driven. Purpose-built. Nigeria-rooted.</p>
        </div>
      </div>
    </footer>
  );
}
