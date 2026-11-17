import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Brain, GraduationCap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Datadom" },
      {
        name: "description",
        content:
          "Explore Datadom's core services: data analysis, business intelligence, machine learning solutions, and practical training programs.",
      },
      { property: "og:title", content: "Services — Datadom" },
      {
        property: "og:description",
        content:
          "Explore Datadom's core services: data analysis, business intelligence, machine learning solutions, and practical training programs.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: BarChart3,
    tag: "Analytics",
    title: "Data Analysis",
    audience: "For teams with raw spreadsheets, logs, or databases",
    description:
      "We collect, clean, analyze, and interpret your data to uncover trends, bottlenecks, and growth opportunities — delivered as clear recommendations.",
    outcomes: ["Data cleaning & structuring", "Trend & pattern analysis", "Opportunity mapping", "Executive summaries"],
  },
  {
    icon: TrendingUp,
    tag: "Reporting",
    title: "Business Intelligence & Reporting",
    audience: "For leaders who need live visibility into KPIs",
    description:
      "We design interactive Power BI and Excel dashboards so your team can monitor revenue, operations, and performance metrics in real time.",
    outcomes: ["Interactive Power BI dashboards", "Automated KPI tracking", "Weekly/monthly reports", "Self-serve views"],
  },
  {
    icon: Brain,
    tag: "AI & Forecasting",
    title: "Machine Learning Solutions",
    audience: "For organizations ready to predict and automate",
    description:
      "We build practical machine learning models for demand forecasting, customer segmentation, classification, and recommendation systems.",
    outcomes: ["Demand & sales forecasting", "Customer churn prediction", "Classification models", "Production deployment"],
  },
  {
    icon: GraduationCap,
    tag: "Upskilling",
    title: "Corporate & Team Training",
    audience: "For companies building internal data capability",
    description:
      "We train your staff on the exact tools they use every day — Excel, SQL, Power BI, and Python — using your own workflows and datasets.",
    outcomes: ["Custom team curricula", "Hands-on workshops", "Real dataset exercises", "Post-training support"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Understand your data",
    body: "We review your current spreadsheets, databases, and business questions to define clear, measurable goals.",
  },
  {
    step: "02",
    title: "Build & validate",
    body: "We clean the data, build your pipelines, dashboards, or models, and verify every metric with your team.",
  },
  {
    step: "03",
    title: "Handover & empower",
    body: "You get clean documentation, live tools, and team walkthroughs so nothing is a black box.",
  },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
          What we do
        </span>
        <h1 className="mt-6 font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Simple, measurable{" "}
          <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
            data solutions
          </span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          From cleaning messy spreadsheets to deploying machine learning models, we focus on
          practical outcomes your team can use right away.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.08 } },
        }}
        className="mt-16 grid gap-6 md:grid-cols-2"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={item}
            className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {service.tag}
                </span>
              </div>
              <h2 className="mt-6 font-mono text-xl font-bold text-foreground">{service.title}</h2>
              <p className="mt-1 font-mono text-xs font-medium text-primary">{service.audience}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-2 border-t border-border/70 pt-5 sm:grid-cols-2">
              {service.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-center gap-2 text-xs font-medium text-foreground/80"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {outcome}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {/* Simple 3-step process */}
      <section className="mt-20 rounded-3xl border border-border bg-card p-8 md:p-12">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            How it works
          </p>
          <h2 className="mt-3 font-mono text-2xl font-bold text-foreground md:text-3xl">
            From raw files to reliable answers in three steps
          </h2>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {processSteps.map((s) => (
            <div key={s.step} className="space-y-3 border-l-2 border-primary/30 pl-5">
              <span className="font-mono text-xs font-bold tracking-widest text-primary">
                STEP {s.step}
              </span>
              <h3 className="font-mono text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Consistent Dark Navy CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative mt-16 overflow-hidden rounded-3xl border border-border bg-foreground p-8 text-center md:p-14"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
        <div className="relative z-10">
          <h2 className="font-mono text-2xl font-bold text-background md:text-3xl">
            Not sure which service fits your needs?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-background/75 md:text-base">
            Tell us what data you have and what questions you want answered. We'll recommend the
            simplest, fastest path forward.
          </p>
          <Button asChild size="lg" className="mt-7 rounded-xl px-7">
            <Link to="/contact">
              Book a free consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
