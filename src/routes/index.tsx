import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Datadom — Enterprise Data Analytics & Machine Learning" },
      { name: "description", content: "Datadom delivers enterprise-grade data analytics, machine learning consulting, and specialized training for organizations in Nigeria and beyond." },
      { property: "og:title", content: "Datadom — Enterprise Data Analytics & Machine Learning" },
      { property: "og:description", content: "Datadom delivers enterprise-grade data analytics, machine learning consulting, and specialized training for organizations in Nigeria and beyond." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const services = [
  {
    title: "Data Architecture",
    subtitle: "SQL & Python pipeline engineering",
  },
  {
    title: "Intelligence Design",
    subtitle: "Power BI & advanced Excel dashboards",
  },
  {
    title: "Machine Learning",
    subtitle: "Predictive models & deployment",
  },
];

const metrics = [
  { value: "05", label: "Core disciplines" },
  { value: "100%", label: "Hands-on delivery" },
  { value: "1:1", label: "Consulting model" },
  { value: "NG", label: "Rooted in Nigeria" },
];

const capabilities = [
  {
    index: "01",
    title: "Analytics",
    body: "Clean, model and interpret complex datasets to expose the patterns your operations rely on.",
  },
  {
    index: "02",
    title: "Business intelligence",
    body: "Executive dashboards and self-serve reporting that make performance legible in real time.",
  },
  {
    index: "03",
    title: "Machine learning",
    body: "Forecasting, classification and recommendation systems designed for production, not slides.",
  },
  {
    index: "04",
    title: "Training",
    body: "Practical curricula in Excel, Python, SQL, Power BI and ML — for teams and individuals.",
  },
];

function HomePage() {
  return (
    <div className="bg-background">
      {/* Hero — architectural split */}
      <section className="mx-auto max-w-7xl px-4 pt-10 pb-16 sm:px-6 lg:px-8 lg:pt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-card shadow-sm lg:grid-cols-2"
        >
          {/* Left panel */}
          <div className="flex flex-col justify-center border-b border-border p-8 sm:p-12 lg:border-b-0 lg:border-r lg:p-16 xl:p-20">
            <div className="mb-8 inline-flex items-center gap-2 self-start">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Uyo · Nigeria
              </span>
            </div>

            <h1 className="font-mono text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Advanced analytics
              <br />
              <span className="text-primary">engineered</span> for growth.
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Enterprise-grade data science, ML consulting, and specialized training. We transform
              complex data into actionable strategic intelligence.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-xl px-7">
                <Link to="/contact">
                  Start consulting
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl px-7">
                <Link to="/training">View curriculum</Link>
              </Button>
            </div>
          </div>

          {/* Right panel */}
          <div className="flex flex-col justify-center gap-4 bg-secondary p-8 sm:p-12 lg:p-16 xl:p-20">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.2 + i * 0.08 }}
              >
                <Link
                  to="/services"
                  className="group flex items-center justify-between rounded-2xl border border-transparent bg-background/60 p-5 transition-all duration-300 hover:border-primary/20 hover:bg-background sm:p-6"
                >
                  <div>
                    <p className="font-mono text-lg font-bold text-foreground sm:text-xl">
                      {s.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.subtitle}</p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}

            <div className="mt-6 flex items-center gap-4 border-t border-border/70 pt-6">
              <div className="flex -space-x-2">
                <span className="h-8 w-8 rounded-full border-2 border-secondary bg-muted-foreground" />
                <span className="h-8 w-8 rounded-full border-2 border-secondary bg-primary" />
                <span className="h-8 w-8 rounded-full border-2 border-secondary bg-foreground" />
              </div>
              <p className="text-sm font-medium text-foreground">
                Trusted by leading organizations in Nigeria
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Metrics band */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-border px-4 sm:px-6 md:grid-cols-4 md:divide-x lg:px-8">
          {metrics.map((m) => (
            <div key={m.label} className="px-4 py-10 md:px-8">
              <p className="font-mono text-3xl font-bold tabular-nums text-foreground sm:text-4xl">
                {m.value}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="grid gap-12 md:grid-cols-12"
        >
          <div className="md:col-span-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
              Capabilities
            </p>
            <h2 className="mt-4 font-mono text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Purpose-built for teams that take data seriously.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Every engagement is scoped around measurable outcomes — no dashboards for dashboards'
              sake, no models without deployment.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:col-span-8 md:grid-cols-2">
            {capabilities.map((c) => (
              <div key={c.title} className="group bg-card p-8 transition-colors hover:bg-secondary/60">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs font-semibold tracking-widest text-primary">
                    {c.index}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <h3 className="mt-8 font-mono text-xl font-semibold text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-10 sm:p-16"
        >
          <div className="relative z-10 grid gap-10 md:grid-cols-2 md:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                Next step
              </p>
              <h2 className="mt-4 font-mono text-3xl font-bold leading-tight text-background sm:text-4xl lg:text-5xl">
                Ready to put your data to work?
              </h2>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <p className="max-w-sm text-background/70 md:text-right">
                Book a scoping call. We'll listen, assess, and outline the shortest path from
                question to answer.
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-xl bg-primary px-7 text-primary-foreground hover:bg-primary/90"
              >
                <Link to="/contact">
                  Book a call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        </motion.div>
      </section>
    </div>
  );
}
