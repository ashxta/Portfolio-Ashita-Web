import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { EASE, maskLine, rise, stagger, useCountUp } from "@/lib/motion";
import { metrics, profile } from "@/lib/content";

/* The plot line the hero sits on: four points, one per metric below. */
const POINTS = [
  { x: 125, y: 96 },
  { x: 375, y: 60 },
  { x: 625, y: 70 },
  { x: 875, y: 20 },
];
const PATH = `M ${POINTS.map((p) => `${p.x} ${p.y}`).join(" L ")}`;

const Metric = ({
  value,
  prefix,
  suffix,
  decimals,
  label,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}) => {
  const { ref, formatted } = useCountUp(value, decimals ?? 0);

  return (
    <motion.div variants={rise} className="border-t border-border pt-4">
      <p className="mono text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
        {prefix}
        <span ref={ref}>{formatted}</span>
        <span className="text-brass">{suffix}</span>
      </p>
      <p className="mt-2 max-w-[22ch] text-[13px] leading-snug text-muted-foreground">{label}</p>
    </motion.div>
  );
};

const Hero = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.p variants={rise} className="eyebrow">
            {profile.location} — open to analyst roles and internships
          </motion.p>

          <h1 className="mt-6 font-display text-[clamp(3.5rem,13vw,10rem)] font-semibold leading-[0.85] tracking-[-0.045em]">
            <span className="block overflow-hidden">
              <motion.span variants={maskLine} className="block">
                Ashita
              </motion.span>
            </span>
          </h1>

          <div className="mt-8 grid gap-10 border-t border-border pt-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="font-display text-[clamp(1.5rem,3.2vw,2.35rem)] font-medium leading-[1.15] tracking-[-0.03em]">
                <span className="block overflow-hidden">
                  <motion.span variants={maskLine} className="block">
                    I work where the model ends
                  </motion.span>
                </span>
                <span className="block overflow-hidden">
                  <motion.span variants={maskLine} className="block text-muted-foreground">
                    and the decision begins.
                  </motion.span>
                </span>
              </h2>
            </div>

            <div className="md:col-span-5">
              <motion.p variants={rise} className="text-[15px] leading-relaxed text-muted-foreground">
                {profile.positioning}
              </motion.p>

              <motion.div variants={rise} className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Mail className="h-4 w-4" />
                  Get in touch
                </a>
              </motion.div>

              <motion.div variants={rise} className="mt-6 flex items-center gap-5">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="GitHub"
                >
                  <Github className="h-[18px] w-[18px]" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-[18px] w-[18px]" />
                </a>
                <span className="mono text-[11px] text-muted-foreground">{profile.email}</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Signature: the line draws itself, then the readings settle underneath. */}
        <div className="mt-16 sm:mt-20">
          <svg
            viewBox="0 0 1000 120"
            fill="none"
            preserveAspectRatio="none"
            className="h-20 w-full sm:h-28"
            aria-hidden="true"
          >
            <line x1="0" y1="119" x2="1000" y2="119" stroke="hsl(var(--border))" strokeWidth="1" />
            <motion.path
              d={PATH}
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: reduce ? 1 : 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, ease: EASE, delay: 0.5 }}
            />
            {POINTS.map((p, i) => (
              <motion.g
                key={p.x}
                initial={{ opacity: reduce ? 1 : 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.35 }}
              >
                <line
                  x1={p.x}
                  y1={p.y}
                  x2={p.x}
                  y2={119}
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
                <circle cx={p.x} cy={p.y} r="4" fill="hsl(var(--background))" />
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="3.5"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                />
              </motion.g>
            ))}
          </svg>

          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            transition={{ delayChildren: 1 }}
            className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4"
          >
            {metrics.map((m) => (
              <Metric key={m.label} {...m} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
