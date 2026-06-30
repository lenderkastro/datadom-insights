import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  Database,
  GraduationCap,
  Lightbulb,
  LineChart,
  MapPin,
  Rocket,
  Target,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Datadom — Data Analytics & Machine Learning" },
      { name: "description", content: "Datadom helps businesses and individuals turn raw data into actionable insights through analytics, machine learning, and practical training in Uyo, Nigeria." },
      { property: "og:title", content: "Datadom — Data Analytics & Machine Learning" },
      { property: "og:description", content: "Datadom helps businesses and individuals turn raw data into actionable insights through analytics, machine learning, and practical training in Uyo, Nigeria." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {/* Hero — large bento tile */}
        <motion.div
          variants={item}
          className="col-span-1 row-span-2 flex flex-col justify-between rounded-2xl border border-border/50 bg-card p-6 md:col-span-2 lg:p-8"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/60 px-3 py-1 font-mono text-xs font-medium text-primary">
              <Database className="h-3.5 w-3.5" />
              Data analytics · Machine learning · Training
            </span>
            <h1 className="mt-6 font-mono text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Turn raw data into{" "}
              <span className="text-primary">confident decisions</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Datadom helps businesses and individuals in Nigeria unlock the value of data through
              analytics, machine learning, and practical training programs built for real-world
              impact.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/services">Explore services</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/training">Start training</Link>
            </Button>
          </div>
        </motion.div>

        {/* Services tile */}
        <motion.div
          variants={item}
          className="group flex flex-col justify-between rounded-2xl border border-border/50 bg-card p-6 transition-colors hover:border-primary/30"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <BarChart3 className="h-5 w-5" />
          </div>
          <div>
            <h2 className="mt-4 font-mono text-lg font-semibold text-foreground">Core services</h2>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <LineChart className="h-3.5 w-3.5 text-primary" /> Data analysis
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="h-3.5 w-3.5 text-primary" /> Business intelligence
              </li>
              <li className="flex items-center gap-2">
                <Brain className="h-3.5 w-3.5 text-primary" /> Machine learning
              </li>
              <li className="flex items-center gap-2">
                <GraduationCap className="h-3.5 w-3.5 text-primary" /> Training
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Training tile */}
        <motion.div
          variants={item}
          className="group flex flex-col justify-between rounded-2xl border border-border/50 bg-card p-6 transition-colors hover:border-primary/30"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <h2 className="mt-4 font-mono text-lg font-semibold text-foreground">Training areas</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Excel · Python · SQL · Power BI · Machine Learning
            </p>
            <Button asChild variant="link" className="mt-2 h-auto p-0 font-mono text-sm">
              <Link to="/training">View programs</Link>
            </Button>
          </div>
        </motion.div>

        {/* Mission tile */}
        <motion.div
          variants={item}
          className="flex flex-col justify-between rounded-2xl border border-border/50 bg-card p-6"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Target className="h-5 w-5" />
          </div>
          <div>
            <h2 className="mt-4 font-mono text-lg font-semibold text-foreground">Mission</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Empower businesses and individuals through data with high-quality analytics,
              machine learning solutions, and industry-relevant training.
            </p>
          </div>
        </motion.div>

        {/* Vision tile */}
        <motion.div
          variants={item}
          className="flex flex-col justify-between rounded-2xl border border-border/50 bg-card p-6"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Lightbulb className="h-5 w-5" />
          </div>
          <div>
            <h2 className="mt-4 font-mono text-lg font-semibold text-foreground">Vision</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Become a leading data analytics and machine learning company in Nigeria and beyond,
              unlocking the full value of data.
            </p>
          </div>
        </motion.div>

        {/* CTA tile */}
        <motion.div
          variants={item}
          className="col-span-1 flex flex-col justify-between rounded-2xl border border-border/50 bg-primary p-6 md:col-span-2 lg:col-span-1"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 text-primary-foreground">
            <Rocket className="h-5 w-5" />
          </div>
          <div>
            <h2 className="mt-4 font-mono text-lg font-semibold text-primary-foreground">
              Ready to work with data?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
              Let's discuss your next analytics project or training program.
            </p>
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="mt-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Link to="/contact">Contact us</Link>
            </Button>
          </div>
        </motion.div>
      </motion.section>

      {/* Location strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 flex flex-col items-center justify-center gap-3 rounded-2xl border border-border/50 bg-card p-6 text-center sm:flex-row"
      >
        <MapPin className="h-5 w-5 text-primary" />
        <p className="text-sm text-muted-foreground">
          Based in <span className="font-medium text-foreground">Uyo, Nigeria</span> — serving
          businesses and learners across the country.
        </p>
      </motion.div>
    </div>
  );
}
