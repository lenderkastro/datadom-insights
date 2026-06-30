import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BarChart3, Brain, GraduationCap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Datadom" },
      { name: "description", content: "Explore Datadom's core services: data analysis, business intelligence, machine learning solutions, and practical training programs." },
      { property: "og:title", content: "Services — Datadom" },
      { property: "og:description", content: "Explore Datadom's core services: data analysis, business intelligence, machine learning solutions, and practical training programs." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: BarChart3,
    title: "Data Analysis",
    description:
      "We collect, clean, analyze, and interpret data to identify trends, patterns, opportunities, and challenges. Our goal is to support data-driven decision-making through meaningful insights.",
    outcomes: ["Trend identification", "Pattern analysis", "Opportunity mapping", "Risk highlighting"],
  },
  {
    icon: TrendingUp,
    title: "Business Intelligence & Reporting",
    description:
      "We develop dashboards, reports, and visualizations that allow organizations to monitor performance and understand key business metrics in real time.",
    outcomes: ["Interactive dashboards", "KPI tracking", "Performance reports", "Custom visualizations"],
  },
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    description:
      "We build machine learning models for prediction, classification, forecasting, recommendation systems, and other intelligent business applications.",
    outcomes: ["Predictive modeling", "Classification", "Forecasting", "Recommendation systems"],
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    description:
      "We provide practical training programs designed to equip learners with real-world data skills and hands-on experience using industry tools.",
    outcomes: ["Hands-on projects", "Industry tools", "Career-ready skills", "Certification support"],
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
        <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card px-3 py-1 font-mono text-xs font-medium text-primary">
          What we do
        </span>
        <h1 className="mt-6 font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Services built for <span className="text-primary">data-driven impact</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          From analytics to machine learning, we help organizations turn raw data into measurable
          business results.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
        className="mt-16 grid gap-6 md:grid-cols-2"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={item}
            className="group rounded-2xl border border-border/50 bg-card p-8 transition-colors hover:border-primary/30"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
              <service.icon className="h-6 w-6" />
            </div>
            <h2 className="mt-6 font-mono text-xl font-semibold text-foreground">{service.title}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {service.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {outcome}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="mt-16 rounded-2xl border border-border/50 bg-primary p-8 text-center md:p-12"
      >
        <h2 className="font-mono text-2xl font-semibold text-primary-foreground md:text-3xl">
          Not sure which service fits your needs?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
          Tell us about your data challenges and we'll recommend the right approach.
        </p>
        <Button
          asChild
          variant="secondary"
          size="lg"
          className="mt-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
        >
          <Link to="/contact">Book a free consultation</Link>
        </Button>
      </motion.div>
    </div>
  );
}
