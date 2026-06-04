import { motion } from "framer-motion";
import { Brain, GitMerge, Layers, Lightbulb, Puzzle, Zap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const reasons = [
  { icon: Puzzle, title: "Problem Solving", text: "Frame ambiguous problems, decompose them, and ship the smallest correct solution." },
  { icon: Zap, title: "Quick Learner", text: "Five certifications and three full-stack apps in parallel with a full-time BCA degree." },
  { icon: Layers, title: "Full Stack Expertise", text: "Confident across React, Node/Django, REST APIs, and relational schema design." },
  { icon: Brain, title: "AI Integration Skills", text: "Hands-on with OpenAI APIs, LangChain, agentic workflows and prompt engineering." },
  { icon: GitMerge, title: "Production Mindset", text: "SOLID, modular architecture, REST best-practices and review-friendly code." },
  { icon: Lightbulb, title: "Scalable Architecture", text: "Designs that grow — clean separation of concerns and normalized data models." },
];

export function WhyHireMe() {
  return (
    <section id="hire" className="relative py-28 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Why Hire Me?"
          title="An engineer recruiters can bet on."
          subtitle="What you actually get when I join your team."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="group relative glass rounded-3xl p-6 hover-lift overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#6366F1]/10 via-transparent to-[#06B6D4]/10" />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl grid place-items-center bg-white/5 border border-white/10 group-hover:border-[#8B5CF6]/40 transition">
                  <r.icon size={18} className="text-[#06B6D4]" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{r.title}</h3>
                <p className="mt-2 text-sm text-[#CBD5E1]/80">{r.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
