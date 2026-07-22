import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { EASE, inViewSection, rise } from "@/lib/motion";
import { projects, type Project } from "@/lib/content";

const Card = ({ project }: { project: Project }) => (
  <motion.article
    variants={rise}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.4, ease: EASE }}
    className="panel group flex flex-col p-6 sm:p-8"
  >
    <div className="flex items-start justify-between gap-4">
      <span className="mono text-[11px] text-muted-foreground">{project.index}</span>
      <span
        className={`mono rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] ${
          project.status === "In progress"
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground"
        }`}
      >
        {project.status} · {project.year}
      </span>
    </div>

    <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.03em]">{project.title}</h3>
    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{project.premise}</p>

    <ul className="mt-6 space-y-3 border-t border-border pt-5">
      {project.outcomes.map((outcome) => (
        <li key={outcome} className="flex gap-3 text-[14px] leading-relaxed">
          <span aria-hidden="true" className="mt-[9px] h-px w-3 shrink-0 bg-primary" />
          <span>{outcome}</span>
        </li>
      ))}
    </ul>

    <div className="mt-7 flex flex-wrap gap-x-3 gap-y-2">
      {project.stack.map((tech) => (
        <span key={tech} className="mono text-[11px] text-muted-foreground">
          {tech}
        </span>
      ))}
    </div>

    <div className="mt-6 flex items-center gap-5 border-t border-border pt-5">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Github className="h-4 w-4" />
          Source
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-primary"
        >
          Open it
          <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
    </div>
  </motion.article>
);

const Projects = () => (
  <motion.section {...inViewSection} id="work" className="scroll-mt-24 py-24 sm:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading
        eyebrow="Selected work"
        title="Five problems, and what changed after."
        intro="Each of these started with a question someone needed answered. The stack is listed, but the outcome is the point."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.index} project={project} />
        ))}
      </div>
    </div>
  </motion.section>
);

export default Projects;
