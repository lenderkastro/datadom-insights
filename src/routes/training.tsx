import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FileSpreadsheet, GraduationCap, Database, Presentation, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Training — Datadom" },
      { name: "description", content: "Join Datadom's practical training programs in Excel, Python, SQL, Power BI, and Machine Learning. Built for real-world careers in data." },
      { property: "og:title", content: "Training — Datadom" },
      { property: "og:description", content: "Join Datadom's practical training programs in Excel, Python, SQL, Power BI, and Machine Learning. Built for real-world careers in data." },
      { property: "og:url", content: "/training" },
    ],
    links: [{ rel: "canonical", href: "/training" }],
  }),
  component: TrainingPage,
});

const courses = [
  {
    icon: FileSpreadsheet,
    title: "Microsoft Excel",
    topics: ["Data cleaning", "Formulas & functions", "Pivot tables", "Dashboards", "Reporting"],
  },
  {
    icon: Database,
    title: "Python Programming",
    topics: ["Programming fundamentals", "Data manipulation", "Automation", "Analytical workflows"],
  },
  {
    icon: Database,
    title: "SQL",
    topics: ["Database concepts", "Querying", "Data extraction", "Filtering", "Aggregation"],
  },
  {
    icon: Presentation,
    title: "Power BI",
    topics: ["Data visualization", "Dashboard development", "Business intelligence", "Interactive reporting"],
  },
  {
    icon: Brain,
    title: "Machine Learning with Python",
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
        <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card px-3 py-1 font-mono text-xs font-medium text-primary">
          <GraduationCap className="h-3.5 w-3.5" />
          Learn with Datadom
        </span>
        <h1 className="mt-6 font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Practical training for <span className="text-primary">data careers</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Hands-on programs designed for students, graduates, professionals, and career changers who
          want to build real-world data skills.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
        className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {courses.map((course) => (
          <motion.div
            key={course.title}
            variants={item}
            className="group rounded-2xl border border-border/50 bg-card p-6 transition-colors hover:border-primary/30"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
              <course.icon className="h-6 w-6" />
            </div>
            <h2 className="mt-6 font-mono text-lg font-semibold text-foreground">{course.title}</h2>
            <ul className="mt-4 space-y-2">
              {course.topics.map((topic) => (
                <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {topic}
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
        className="mt-16 rounded-2xl border border-border/50 bg-card p-8 md:p-12"
      >
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-mono text-2xl font-semibold text-foreground md:text-3xl">
              Why train with Datadom?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our training is project-based, beginner-friendly, and focused on the skills employers
              actually ask for. You won't just learn theory — you'll work with real datasets and tools.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border/50 bg-background/60 p-4">
              <p className="font-mono text-2xl font-bold text-primary">5+</p>
              <p className="mt-1 text-sm text-muted-foreground">Training areas</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background/60 p-4">
              <p className="font-mono text-2xl font-bold text-primary">Hands-on</p>
              <p className="mt-1 text-sm text-muted-foreground">Project-based learning</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background/60 p-4">
              <p className="font-mono text-2xl font-bold text-primary">Beginner</p>
              <p className="mt-1 text-sm text-muted-foreground">Friendly approach</p>
            </div>
            <div className="rounded-xl border border-border/50 bg-background/60 p-4">
              <p className="font-mono text-2xl font-bold text-primary">Career</p>
              <p className="mt-1 text-sm text-muted-foreground">Relevant skills</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        className="mt-8 text-center"
      >
        <Button asChild size="lg">
          <Link to="/contact">Enquire about a course</Link>
        </Button>
      </motion.div>
    </div>
  );
}
