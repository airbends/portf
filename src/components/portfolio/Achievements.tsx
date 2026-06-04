import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Boxes, Cpu, FileCode2, GitBranch, Languages } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1400; const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const stats = [
  { icon: FileCode2, value: 5, suffix: "+", label: "Industry Certifications" },
  { icon: Boxes, value: 3, suffix: "", label: "Full-Stack Apps Built" },
  { icon: Cpu, value: 10, suffix: "+", label: "AI Automation Workflows" },
  { icon: GitBranch, value: 15, suffix: "+", label: "REST APIs Designed" },
  { icon: Languages, value: 3, suffix: "", label: "Languages (EN · HI · MR)" },
];

export function Achievements() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Achievements" title="Output that compounds." />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-2xl p-5 hover-lift relative overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[#8B5CF6]/20 blur-2xl" />
              <s.icon size={18} className="text-[#06B6D4]" />
              <div className="mt-3 font-display text-3xl md:text-4xl font-bold text-gradient-primary">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs text-[#CBD5E1]/80">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
