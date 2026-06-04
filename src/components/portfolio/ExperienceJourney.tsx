import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Compass, Rocket, Sparkles, Target } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const milestones = [
  { icon: Compass, year: "2023", title: "Foundations", text: "Started BCA at University of Pune. Deep dive into DSA, OOP, and core web technologies." },
  { icon: Sparkles, year: "2024", title: "Full Stack Builder", text: "Shipped multiple full-stack apps: Recipe Platform, Timetable Generator, Code Sharing — React + Node + MySQL." },
  { icon: Rocket, year: "2025", title: "AI Automation Engineer", text: "Earned Oracle OCI AI, Anthropic Claude Code, and Agentic AI certifications. Building LangChain agentic pipelines." },
  { icon: Target, year: "2026", title: "Production Mindset", text: "Graduating BCA. Focused on scalable architectures, AI integration, and joining a top-tier engineering team." },
];

export function ExperienceJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="journey" className="relative py-28 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Journey"
          title="A trajectory built on output."
          subtitle="No noise — just the milestones that shaped how I build software today."
        />

        <div ref={ref} className="relative mt-12">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-[#6366F1] via-[#8B5CF6] to-[#06B6D4]"
          />

          <div className="space-y-12 md:space-y-20">
            {milestones.map((m, i) => {
              const right = i % 2 === 1;
              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${right ? "md:[&>*:first-child]:order-2" : ""}`}
                >
                  <div className={`pl-12 md:pl-0 ${right ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#06B6D4]">
                      <Sparkles size={12} /> {m.year}
                    </div>
                    <h3 className="mt-3 text-2xl md:text-3xl font-display font-bold text-white">{m.title}</h3>
                    <p className="mt-2 text-[#CBD5E1]/80 max-w-md md:inline-block">{m.text}</p>
                  </div>
                  <div className="hidden md:block" />

                  <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-9 h-9 rounded-full grid place-items-center glass-strong glow-primary">
                    <m.icon size={14} className="text-white" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
