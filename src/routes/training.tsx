import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Code2,
  Database,
  FileSpreadsheet,
  GraduationCap,
  Presentation,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Training — Datadom" },
      {
        name: "description",
        content:
          "Join Datadom's practical training programs in Excel, Python, SQL, Power BI, and Machine Learning. Built for real-world careers in data.",
      },
      { property: "og:title", content: "Training — Datadom" },
      {
        property: "og:description",
        content:
          "Join Datadom's practical training programs in Excel, Python, SQL, Power BI, and Machine Learning. Built for real-world careers in data.",
      },
      { property: "og:url", content: "/training" },
    ],
    links: [{ rel: "canonical", href: "/training" }],
  }),
  component: TrainingPage,
});

const courses = [
  {
    icon: FileSpreadsheet,
    level: "Beginner",
    title: "Microsoft Excel",
    outcome: "Build automated business reports & KPI dashboards from scratch.",
    topics: ["Data cleaning", "Formulas & functions", "Pivot tables", "Dashboards", "Reporting"],
  },
  {
    icon: Database,
    level: "Beginner",
    title: "SQL",
    outcome: "Query company databases confidently and extract clean datasets.",
    topics: ["Database concepts", "Querying & joins", "Data extraction", "Filtering", "Aggregation"],
  },
  {
    icon: Presentation,
    level: "Beginner – Inter.",
    title: "Power BI",
    outcome: "Design interactive executive dashboards that update automatically.",
    topics: ["Data modeling", "DAX basics", "Visual storytelling", "Interactive reporting"],
  },
  {
    icon: Code2,
    level: "Beginner – Inter.",
    title: "Python Programming",
    outcome: "Automate repetitive workflows and analyze large datasets.",
    topics: ["Programming fundamentals", "Pandas & NumPy", "Automation", "Analytical workflows"],
  },
  {
    icon: Brain,
    level: "Intermediate",
    title: "Machine Learning with Python",
    outcome: "Train, evaluate, and deploy predictive models on real data.",
    topics: ["Data preprocessing", "Model building", "Evaluation", "Predictive analytics", "ML projects"],
  },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

function TrainingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
          <GraduationCap className="h-3.5 w-3.5" />
          Learn with Datadom
        </span>
        <h1 className="mt-6 font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Practical training for{" "}
          <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
            data careers
          </span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Hands-on programs for students, graduates, career changers, and corporate teams — focused
          on the exact tools employers use every day.
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
        className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {courses.map((course) => (
          <motion.div
            key={course.title}
            variants={item}
            className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-7 transition-all hover:border-primary/40 hover:shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <course.icon className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {course.level}
                </span>
              </div>
              <h2 className="mt-6 font-mono text-lg font-bold text-foreground">{course.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{course.outcome}</p>
              <ul className="mt-5 space-y-2 border-t border-border/70 pt-4">
                {course.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-center gap-2 text-xs font-medium text-foreground/80"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center font-mono text-xs font-semibold text-primary transition-colors hover:text-foreground"
            >
              Enquire about {course.title}
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="mt-16 rounded-3xl border border-border bg-card p-8 md:p-12"
      >
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
              Our approach
            </p>
            <h2 className="mt-3 font-mono text-2xl font-bold text-foreground md:text-3xl">
              Why train with Datadom?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Our training is project-based, beginner-friendly, and focused on the skills employers
              actually ask for. You won't just watch slides — you'll clean real datasets, write
              queries, and build portfolio-ready dashboards.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-5">
              <p className="font-mono text-2xl font-bold text-primary">05</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Core tool tracks
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-5">
              <p className="font-mono text-2xl font-bold text-primary">100%</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Project-based learning
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-5">
              <p className="font-mono text-2xl font-bold text-foreground">1:1 &amp; Cohort</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Flexible formats
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-5">
              <p className="font-mono text-2xl font-bold text-foreground">Career</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Portfolio &amp; mentorship
              </p>
            </div>
          </div>
        </div>
      </motion.div>

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
            Ready to start learning or upskill your team?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-background/75 md:text-base">
            Reach out for upcoming cohort dates, private mentorship, or custom corporate training.
          </p>
          <Button asChild size="lg" className="mt-7 rounded-xl px-7">
            <Link to="/contact">
              Enquire about a course
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
