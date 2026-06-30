import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Database, Lightbulb, MapPin, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Datadom" },
      { name: "description", content: "Learn about Datadom's mission, vision, and data-driven approach to analytics, machine learning, and training in Uyo, Nigeria." },
      { property: "og:title", content: "About — Datadom" },
      { property: "og:description", content: "Learn about Datadom's mission, vision, and data-driven approach to analytics, machine learning, and training in Uyo, Nigeria." },
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

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card px-3 py-1 font-mono text-xs font-medium text-primary">
          <Database className="h-3.5 w-3.5" />
          About us
        </span>
        <h1 className="mt-6 font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Data-driven from <span className="text-primary">Uyo</span> to everywhere
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Datadom is a data-focused company built to help businesses and individuals in Nigeria make
          better decisions through analytics, machine learning, and practical training.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
        className="mt-16 grid gap-6 md:grid-cols-2"
      >
        <motion.div variants={item} className="rounded-2xl border border-border/50 bg-card p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Target className="h-6 w-6" />
          </div>
          <h2 className="mt-6 font-mono text-2xl font-semibold text-foreground">Our mission</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            To empower businesses and individuals through data by providing high-quality analytics
            services, machine learning solutions, and industry-relevant training. We believe data
            should be accessible, understandable, and actionable for everyone.
          </p>
        </motion.div>

        <motion.div variants={item} className="rounded-2xl border border-border/50 bg-card p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Lightbulb className="h-6 w-6" />
          </div>
          <h2 className="mt-6 font-mono text-2xl font-semibold text-foreground">Our vision</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            To become a leading data analytics and machine learning company in Nigeria and beyond,
            helping organizations and professionals unlock the full value of data. We are building a
            community where data fluency drives growth and innovation.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
        className="mt-16 grid gap-6 lg:grid-cols-3"
      >
        <motion.div variants={item} className="rounded-2xl border border-border/50 bg-card p-6">
          <h3 className="font-mono text-lg font-semibold text-foreground">Who we serve</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            SMEs, enterprises, NGOs, and government agencies that need analytics, reporting,
            predictive modeling, and business intelligence solutions.
          </p>
        </motion.div>
        <motion.div variants={item} className="rounded-2xl border border-border/50 bg-card p-6">
          <h3 className="font-mono text-lg font-semibold text-foreground">Who we train</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Students, graduates, professionals, and career changers looking to build practical skills
            in Excel, Python, SQL, Power BI, and machine learning.
          </p>
        </motion.div>
        <motion.div variants={item} className="rounded-2xl border border-border/50 bg-card p-6">
          <h3 className="font-mono text-lg font-semibold text-foreground">How we work</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            We combine domain understanding with modern tools. Every project and training program is
            designed around real business problems and measurable outcomes.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="mt-16 flex flex-col items-center justify-center gap-4 rounded-2xl border border-border/50 bg-card p-8 text-center"
      >
        <MapPin className="h-8 w-8 text-primary" />
        <p className="text-lg text-muted-foreground">
          <span className="font-medium text-foreground">Headquartered in Uyo, Nigeria</span>
          <br />
          Serving clients and learners across the country.
        </p>
        <Button asChild>
          <Link to="/contact">Work with us</Link>
        </Button>
      </motion.div>
    </div>
  );
}
