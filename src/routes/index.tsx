import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTopographyCanvas } from "@/components/DataTopographyCanvas";

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

const heroDisciplines = [
  { label: "Data Architecture", to: "/services" as const },
  { label: "Business Intelligence", to: "/services" as const },
  { label: "Machine Learning", to: "/services" as const },
  { label: "Practical Training", to: "/training" as const },
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
      {/* Hero — open editorial layout with interactive 3D Data Topography */}
      <section className="relative overflow-hidden border-b border-border/70">
        {/* Interactive 3D point-cloud canvas */}
        <div className="absolute inset-0 z-0">
          <DataTopographyCanvas />
          {/* Soft left-to-right readability veil so left-column typography stays crisp */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10 sm:via-background/75 lg:w-[68%]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-24 lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-3.5 py-1.5 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-foreground/75">
                Uyo · Nigeria · Active Consulting
              </span>
            </div>

            <h1 className="font-mono text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Turn raw data into{" "}
              <span className="bg-gradient-to-r from-primary via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                clear decisions.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Datadom helps businesses clean their data, build live dashboards, and deploy machine
              learning — and trains individuals and teams in Excel, SQL, Python, and Power BI.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-xl px-7 shadow-sm">
                <Link to="/contact">
                  Start consulting
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl bg-card/90 px-7 backdrop-blur-sm"
              >
                <Link to="/training">View curriculum</Link>
              </Button>
            </div>
          </motion.div>

          {/* Hero footer bar: social proof & discipline tags */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="mt-16 flex flex-col gap-6 border-t border-border/70 pt-8 sm:mt-24 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="flex flex-wrap items-center gap-6">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-foreground/60">
                Trusted by
              </span>
              <div className="flex items-center gap-6">
                <img
                  src="/partners/nacos.png"
                  alt="NACOS Logo"
                  className="h-9 w-auto max-w-[100px] object-contain opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
                <img
                  src="/partners/okike.png"
                  alt="Okike Logo"
                  className="h-9 w-auto max-w-[100px] object-contain opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {heroDisciplines.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="rounded-full border border-border/80 bg-card/85 px-3.5 py-1.5 font-mono text-[11px] font-medium text-foreground/80 shadow-xs backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
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

      {/* Two clear paths: Consulting vs Training */}
      <section className="mx-auto max-w-7xl px-4 pt-20 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            to="/services"
            className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-sm"
          >
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                For Organizations
              </span>
              <h2 className="mt-3 font-mono text-2xl font-bold text-foreground">
                Data &amp; AI Consulting
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We organize messy spreadsheets and databases, build real-time Power BI dashboards,
                and create predictive models tailored to your operations.
              </p>
            </div>
            <div className="mt-6 inline-flex items-center font-mono text-xs font-semibold text-foreground transition-colors group-hover:text-primary">
              Explore consulting services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <Link
            to="/training"
            className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-sm"
          >
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                For Learners &amp; Teams
              </span>
              <h2 className="mt-3 font-mono text-2xl font-bold text-foreground">
                Practical Data Training
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Hands-on, project-based courses in Microsoft Excel, SQL, Python, Power BI, and
                Machine Learning — built for real careers and workplace teams.
              </p>
            </div>
            <div className="mt-6 inline-flex items-center font-mono text-xs font-semibold text-foreground transition-colors group-hover:text-primary">
              Browse training programs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
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
