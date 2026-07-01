import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
      {/* Hero — restructured layout, no outer card box border */}
      <section className="relative mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 overflow-hidden">
        {/* Subtle radial glow background behind the floating widget */}
        <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left column — Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 self-start shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Uyo · Nigeria · Active Consulting
              </span>
            </div>

            <h1 className="font-mono text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Advanced analytics <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">engineered</span> for growth.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Enterprise-grade data science, machine learning consulting, and specialized training. We transform complex data architectures into strategic intelligence.
            </p>

            <div className="mt-8 space-y-4 border-l border-border pl-6">
              <div className="space-y-1">
                <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-foreground">Data Architecture</h3>
                <p className="text-xs text-muted-foreground">Automated pipelines, SQL/Python engineering & lakehouse integration.</p>
              </div>
              <div className="space-y-1">
                <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-foreground">Intelligence Design</h3>
                <p className="text-xs text-muted-foreground">Power BI executive dashboards and self-serve reporting architectures.</p>
              </div>
              <div className="space-y-1">
                <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-foreground">Machine Learning</h3>
                <p className="text-xs text-muted-foreground">Forecasting, clustering and classification models deployed natively.</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-xl px-7 shadow-sm">
                <Link to="/contact">
                  Start consulting
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl px-7 bg-card">
                <Link to="/training">View curriculum</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right column — Floating Live Data Engine Simulator Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col justify-between rounded-3xl border border-border/80 bg-card/70 p-6 sm:p-8 shadow-lg backdrop-blur-md lg:col-span-5 hover:border-primary/20 transition-colors duration-500"
          >
            <div className="space-y-6">
              {/* Header of widget */}
              <div className="flex items-center justify-between border-b border-border/80 pb-4">
                <div className="space-y-1">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-primary">
                    Live Engine Simulator
                  </p>
                  <h3 className="font-mono text-sm font-bold text-foreground">
                    DATADOM ENGINE v1.2
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  ONLINE
                </div>
              </div>

              {/* Step 1: Data Pipeline Flow */}
              <div className="rounded-2xl border border-border/60 bg-background/85 p-5 shadow-sm">
                <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                  <span>PIPELINE ORCHESTRATOR</span>
                  <span className="text-emerald-500 font-semibold">Active</span>
                </div>
                {/* Visual flowchart */}
                <div className="mt-4 grid grid-cols-3 items-center gap-2">
                  <div className="rounded-lg border border-border bg-card p-2 text-center shadow-sm">
                    <p className="font-mono text-[9px] text-muted-foreground">SOURCE</p>
                    <p className="mt-1 font-mono text-[10px] font-bold text-foreground">PostgreSQL</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="h-0.5 w-full bg-gradient-to-r from-primary to-primary/40 relative">
                      <div className="absolute top-1/2 left-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-primary animate-[ping_1.5s_infinite]" />
                    </div>
                    <span className="mt-1 font-mono text-[8px] text-muted-foreground">ETL (24ms)</span>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-2 text-center shadow-sm">
                    <p className="font-mono text-[9px] text-muted-foreground">WAREHOUSE</p>
                    <p className="mt-1 font-mono text-[10px] font-bold text-foreground">BigQuery</p>
                  </div>
                </div>
              </div>

              {/* Step 2: Machine Learning Prediction Model */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-background/85 p-5 shadow-sm">
                  <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                    <span>ML PREDICTION</span>
                    <span className="text-primary font-semibold">98.4% Acc</span>
                  </div>
                  <div className="mt-3 flex items-end gap-2">
                    <div className="flex-1 space-y-1">
                      <div className="h-1 bg-border rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[98.4%]" />
                      </div>
                      <p className="font-mono text-[10px] text-muted-foreground">Loss: 0.012</p>
                    </div>
                    <span className="shrink-0 font-mono text-xs font-bold text-foreground">Classifier</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/60 bg-background/85 p-5 shadow-sm">
                  <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                    <span>INTELLIGENCE</span>
                    <span className="text-muted-foreground">Live Feed</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                      <span className="font-mono text-[10px] font-medium text-foreground">BI Dashboard</span>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Partners section */}
            <div className="mt-8 border-t border-border/70 pt-6">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Trusted by leading organizations
              </p>
              <div className="mt-4 flex items-center gap-6">
                <img
                  src="/partners/nacos.png"
                  alt="NACOS Logo"
                  className="h-10 w-auto object-contain max-w-[100px] filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
                <img
                  src="/partners/okike.png"
                  alt="Okike Logo"
                  className="h-10 w-auto object-contain max-w-[100px] filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
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
