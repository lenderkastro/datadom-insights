import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Datadom" },
      { name: "description", content: "Get in touch with Datadom in Uyo, Nigeria. Request data services, training, or a free consultation." },
      { property: "og:title", content: "Contact — Datadom" },
      { property: "og:description", content: "Get in touch with Datadom in Uyo, Nigeria. Request data services, training, or a free consultation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card px-3 py-1 font-mono text-xs font-medium text-primary">
          <Mail className="h-3.5 w-3.5" />
          Get in touch
        </span>
        <h1 className="mt-6 font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Let's talk <span className="text-primary">data</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Whether you need analytics support, machine learning solutions, or training for your team,
          we'd love to hear from you.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          className="space-y-4 lg:col-span-1"
        >
          <motion.div
            variants={item}
            className="rounded-2xl border border-border/50 bg-card p-6"
          >
            <Mail className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
              Email
            </h3>
            <a
              href="mailto:hello@datadom.ng"
              className="mt-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              hello@datadom.ng
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="rounded-2xl border border-border/50 bg-card p-6"
          >
            <Phone className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
              Phone
            </h3>
            <a
              href="tel:+2340000000000"
              className="mt-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              +234 000 000 0000
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="rounded-2xl border border-border/50 bg-card p-6"
          >
            <MapPin className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
              Location
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Uyo, Akwa Ibom State, Nigeria
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="rounded-2xl border border-border/50 bg-card p-6 lg:col-span-2 lg:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Your name"
                  className="bg-background/60"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="you@example.com"
                  className="bg-background/60"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                value={form.subject}
                onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                placeholder="Data analysis project / Training enquiry"
                className="bg-background/60"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="Tell us about your project or training goals..."
                rows={5}
                className="bg-background/60"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-destructive">
                Please fill in your name, email, and message before sending.
              </p>
            )}
            {status === "success" && (
              <p className="text-sm text-primary">
                Thank you for reaching out. We'll get back to you soon.
              </p>
            )}

            <Button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto"
            >
              <Send className="mr-2 h-4 w-4" />
              {status === "submitting" ? "Sending..." : "Send message"}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
