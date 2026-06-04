import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const courses = [
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Object-Oriented Programming",
  "Software Engineering",
  "Web Technologies",
  "Computer Networks",
];

export function Education() {
  return (
    <section id="education" className="relative py-28 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Education" title="Academic foundation." />

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="relative glass-strong rounded-3xl p-8 md:p-10 overflow-hidden"
        >
          <div className="absolute inset-0 aurora opacity-60 pointer-events-none" />
          <div className="relative grid md:grid-cols-[auto_1fr_auto] gap-8 items-start">
            <div className="w-14 h-14 rounded-2xl grid place-items-center bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] glow-primary">
              <GraduationCap size={22} className="text-white" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#06B6D4]">2023 — 2026</div>
              <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-white">Bachelor of Computer Applications</h3>
              <div className="mt-1 text-[#CBD5E1]">University of Pune · Pune, India</div>
              <p className="mt-4 text-[#CBD5E1]/80 max-w-2xl">
                Final-year project: a full-stack web application integrating AI APIs with a React frontend and Django backend.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {courses.map((c) => (
                  <span key={c} className="text-xs px-3 py-1.5 rounded-full glass text-[#CBD5E1] hover:text-white hover:bg-white/10 transition">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-5xl font-display font-bold text-gradient-primary">2026</div>
              <div className="text-xs text-[#CBD5E1]/70 mt-1">Graduating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
