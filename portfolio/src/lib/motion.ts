import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion, type Variants } from "framer-motion";

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Parent that staggers its children into view. */
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

/** Standard rise-and-fade for a child of `stagger`. */
export const rise: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

/** Text line revealed from behind a mask — used in the hero. */
export const maskLine: Variants = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 0.9, ease: EASE },
  },
};

/** Hairline that draws itself left to right. */
export const drawRule: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

/** Props for a section that reveals once as it scrolls into frame. */
export const inViewSection = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-80px" },
  variants: stagger,
} as const;

/**
 * Counts from zero to `target` the first time the element is in view.
 * Returns the formatted string and the ref to attach.
 */
export function useCountUp(target: number, decimals = 0) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(target);
      return;
    }
    const controls = animate(0, target, {
      duration: 1.4,
      ease: EASE,
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, target, reduce]);

  const formatted = value.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return { ref, formatted };
}
