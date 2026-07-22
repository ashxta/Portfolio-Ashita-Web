import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { drawRule, inViewSection, maskLine, rise } from "@/lib/motion";
import { profile } from "@/lib/content";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { label: "LinkedIn", value: "ashita-a", href: profile.linkedin },
  { label: "GitHub", value: "ashxta", href: profile.github },
];

const Contact = () => (
  <motion.section {...inViewSection} id="contact" className="scroll-mt-24 py-24 sm:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <motion.p variants={rise} className="eyebrow">
        Contact
      </motion.p>
      <motion.div variants={drawRule} className="axis-rule mt-3 origin-left" />

      <h2 className="mt-8 font-display text-[clamp(2.2rem,7vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
        <span className="block overflow-hidden">
          <motion.span variants={maskLine} className="block">
            Have a dataset that
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span variants={maskLine} className="block text-muted-foreground">
            needs a decision?
          </motion.span>
        </span>
      </h2>

      <motion.p variants={rise} className="mt-8 max-w-xl text-[16px] leading-relaxed text-muted-foreground">
        I'm looking for analyst and data science roles, internships, and consulting work. The fastest
        way to reach me is email — I reply to everything.
      </motion.p>

      <motion.div variants={rise} className="mt-10 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
        >
          Write to me
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </motion.div>

      <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
        {channels.map((c) => (
          <motion.div key={c.label} variants={rise} className="border-t border-border pt-4">
            <dt className="eyebrow">{c.label}</dt>
            <dd className="mt-2">
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="link-underline mono text-[13px] transition-colors hover:text-primary"
              >
                {c.value}
              </a>
            </dd>
          </motion.div>
        ))}
      </dl>
    </div>
  </motion.section>
);

export default Contact;
