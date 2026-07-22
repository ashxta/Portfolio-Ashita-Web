import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { EASE, inViewSection, rise } from "@/lib/motion";
import { skillGroups } from "@/lib/content";

const Skills = () => (
  <motion.section {...inViewSection} id="skills" className="scroll-mt-24 py-24 sm:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading
        eyebrow="Toolkit"
        title="The tools, grouped by the job they do."
        intro="Listed by what each set is actually used for, rather than as one long inventory."
      />

      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <motion.div key={group.label} variants={rise}>
            <div className="flex items-baseline justify-between border-t border-border pt-4">
              <h3 className="font-display text-lg font-semibold">{group.label}</h3>
              <span className="mono text-[11px] text-muted-foreground">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="rounded-sm border border-border bg-card px-3 py-1.5 text-[13px] transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default Skills;
