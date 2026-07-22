import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { EASE } from "@/lib/motion";
import { profile } from "@/lib/content";

const links = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "background", label: "Background" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("work");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div style={{ scaleX: progress }} className="h-[2px] origin-left bg-primary" />

      <nav
        className={`transition-colors duration-300 ${
          scrolled
            ? "border-b border-border bg-background/85 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-baseline gap-2"
            aria-label="Back to top"
          >
            <span className="font-display text-lg font-semibold tracking-tight">Ashita</span>
            <span className="mono hidden text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:inline">
              {profile.role}
            </span>
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className="relative py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className={active === link.id ? "text-foreground" : undefined}>
                  {link.label}
                </span>
                {active === link.id && (
                  <motion.span
                    layoutId="nav-tick"
                    className="absolute -bottom-0.5 left-0 h-px w-full bg-primary"
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col px-6 py-3">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => go(link.id)}
                  className="border-b border-border/60 py-3 text-left text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
