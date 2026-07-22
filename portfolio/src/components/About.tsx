import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { inViewSection, rise } from "@/lib/motion";
import { profile } from "@/lib/content";

const focus = [
  {
    label: "Predictive modelling",
    body: "Classification and clustering on business problems — attrition, risk, segmentation — with attention to imbalanced data.",
  },
  {
    label: "Business intelligence",
    body: "Power BI and SQL reporting built for the person reading it, not the person who wrote the query.",
  },
  {
    label: "Consulting workflows",
    body: "SAP implementation, process analysis and digital transformation, from certification through to client-facing practice.",
  },
];

const About = () => (
  <motion.section {...inViewSection} id="about" className="scroll-mt-24 py-24 sm:py-32">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading eyebrow="About" title="Analysis is only finished when someone can act on it." />

      <div className="grid gap-12 md:grid-cols-12">
        <div className="space-y-5 md:col-span-6">
          {profile.summary.map((para) => (
            <motion.p key={para} variants={rise} className="text-[17px] leading-relaxed">
              {para}
            </motion.p>
          ))}
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <motion.p variants={rise} className="eyebrow mb-5">
            What I focus on
          </motion.p>
          <dl className="space-y-5">
            {focus.map((item) => (
              <motion.div key={item.label} variants={rise} className="border-t border-border pt-4">
                <dt className="font-display text-base font-semibold">{item.label}</dt>
                <dd className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">
                  {item.body}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </motion.section>
);

export default About;
