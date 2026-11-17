import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Datadom" },
      {
        name: "description",
        content:
          "Get in touch with Datadom in Uyo, Nigeria. Request data services, training, or a free consultation.",
      },
      { property: "og:title", content: "Contact — Datadom" },
      {
        property: "og:description",
        content:
          "Get in touch with Datadom in Uyo, Nigeria. Request data services, training, or a free consultation.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const topics = [
  "Data Analysis",
  "Business Intelligence",
  "Machine Learning",
  "Training / Course",
  "General Enquiry",
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [selectedTopic, setSelectedTopic] = useState<string>("Data Analysis");
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
    }, 800);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
          <Mail className="h-3.5 w-3.5" />
          Get in touch
        </span>
        <h1 className="mt-6 font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Let's talk{" "}
          <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
            data
          </span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Tell us whether you need analytics consulting, dashboards, machine learning, or training —
          we'll respond with clear next steps.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="space-y-4 lg:col-span-1"
        >
          <motion.div variants={item} className="rounded-3xl border border-border bg-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Email
            </h3>
            <a
              href="mailto:hello@datadom.ng"
              className="mt-1 block text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              hello@datadom.ng
            </a>
          </motion.div>

          <motion.div variants={item} className="rounded-3xl border border-border bg-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Phone
            </h3>
            <a
              href="tel:+2340000000000"
              className="mt-1 block text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              +234 000 000 0000
            </a>
          </motion.div>

          <motion.div variants={item} className="rounded-3xl border border-border bg-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Location
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">Uyo, Akwa Ibom State, Nigeria</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="rounded-3xl border border-border bg-card p-6 lg:col-span-2 lg:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2.5">
              <Label>What can we help you with?</Label>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => {
                  const active = selectedTopic === topic;
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setSelectedTopic(topic)}
                      className={cn(
                        "rounded-full border px-3.5 py-1.5 font-mono text-xs font-medium transition-all",
                        active
                          ? "border-foreground bg-foreground text-background"
                          : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground",
                      )}
                    >
                      {topic}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Your name"
                  className="bg-background"
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
                  className="bg-background"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                value={form.subject}
                onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                placeholder={`${selectedTopic} enquiry`}
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="Briefly describe your project, dataset, or training goals..."
                rows={5}
                className="bg-background"
              />
            </div>

            {status === "error" && (
              <p className="text-sm font-medium text-destructive">
                Please fill in your name, email, and message before sending.
              </p>
            )}
            {status === "success" && (
              <p className="text-sm font-medium text-primary">
                Thank you for reaching out about {selectedTopic}. We'll get back to you soon.
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={status === "submitting"}
              className="w-full rounded-xl sm:w-auto"
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
