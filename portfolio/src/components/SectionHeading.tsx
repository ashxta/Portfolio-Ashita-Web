import { motion } from "framer-motion";
import { drawRule, rise } from "@/lib/motion";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
};

const SectionHeading = ({ eyebrow, title, intro }: Props) => (
  <div className="mb-12 sm:mb-16">
    <motion.div variants={rise} className="flex items-baseline justify-between gap-6">
      <span className="eyebrow">{eyebrow}</span>
    </motion.div>

    <motion.div variants={drawRule} className="axis-rule mt-3 origin-left" />

    <div className="mt-6 grid gap-6 md:grid-cols-12">
      <motion.h2
        variants={rise}
        className="font-display text-[clamp(1.9rem,4.5vw,3rem)] font-semibold md:col-span-6"
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p
          variants={rise}
          className="text-[15px] leading-relaxed text-muted-foreground md:col-span-5 md:col-start-8"
        >
          {intro}
        </motion.p>
      )}
    </div>
  </div>
);

export default SectionHeading;
