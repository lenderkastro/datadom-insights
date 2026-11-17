import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Compass, Database, GraduationCap, Lightbulb, MapPin, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Datadom" },
      {
        name: "description",
        content:
          "Learn about Datadom's mission, vision, and data-driven approach to analytics, machine learning, and training in Uyo, Nigeria.",
      },
      { property: "og:title", content: "About — Datadom" },
      {
        property: "og:description",
        content:
          "Learn about Datadom's mission, vision, and data-driven approach to analytics, machine learning, and training in Uyo, Nigeria.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const pillars = [
  {
    icon: Building2,
    title: "Who we serve",
    body: "SMEs, enterprises, NGOs, and public-sector teams that need clean reporting, predictive modeling, and reliable business intelligence.",
  },
  {
    icon: GraduationCap,
    title: "Who we train",
    body: "Students, graduates, working professionals, and career changers building practical fluency in Excel, SQL, Python, Power BI, and ML.",
  },
  {
    icon: Compass,
    title: "How we work",
    body: "We combine business context with modern data tooling. Every engagement and course is built around real problems and measurable outcomes.",
  },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
          <Database className="h-3.5 w-3.5" />
          About Datadom
        </span>
        <h1 className="mt-6 font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Data-driven from{" "}
          <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
            Uyo
          </span>{" "}
          to everywhere
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Datadom is a data analytics, machine learning, and training company built to help
          organizations and individuals make confident decisions with data.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="mt-16 grid gap-6 md:grid-cols-2"
      >
        <motion.div variants={item} className="rounded-3xl border border-border bg-card p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Target className="h-6 w-6" />
          </div>
          <h2 className="mt-6 font-mono text-2xl font-bold text-foreground">Our mission</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            To empower businesses and individuals through data by providing high-quality analytics
            services, machine learning solutions, and industry-relevant training. We believe data
            should be accessible, understandable, and actionable for everyone.
          </p>
        </motion.div>

        <motion.div variants={item} className="rounded-3xl border border-border bg-card p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Lightbulb className="h-6 w-6" />
          </div>
          <h2 className="mt-6 font-mono text-2xl font-bold text-foreground">Our vision</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            To become a leading data analytics and machine learning company in Nigeria and beyond,
            helping organizations and professionals unlock the full value of data while building a
            community where data fluency drives growth.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="mt-8 grid gap-6 lg:grid-cols-3"
      >
        {pillars.map((p) => (
          <motion.div key={p.title} variants={item} className="rounded-3xl border border-border bg-card p-7">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-mono text-lg font-bold text-foreground">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative mt-16 overflow-hidden rounded-3xl border border-border bg-foreground p-8 text-center md:p-14"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary">
            <MapPin className="h-6 w-6" />
          </div>
          <h2 className="mt-5 font-mono text-2xl font-bold text-background md:text-3xl">
            Headquartered in Uyo, Nigeria
          </h2>
          <p className="mt-3 max-w-lg text-sm text-background/75 md:text-base">
            Serving organizations and learners across Nigeria and remotely worldwide.
          </p>
          <Button asChild size="lg" className="mt-7 rounded-xl px-7">
            <Link to="/contact">
              Work with us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
