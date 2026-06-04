import { motion } from "framer-motion";
import { Brain, Code2, Cloud, Cog, GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const focuses = [
  { icon: Code2, title: "Full Stack Development", text: "React, Node, Django end-to-end systems." },
  { icon: Cog, title: "Backend Engineering", text: "RESTful APIs and scalable architectures." },
  { icon: Brain, title: "AI Automation", text: "OpenAI APIs, LangChain, prompt engineering." },
  { icon: GraduationCap, title: "Agentic AI Systems", text: "Multi-agent workflows with tool use & memory." },
  { icon: Cloud, title: "Cloud Technologies", text: "Vercel, Render, Oracle Cloud foundations." },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="About"
          title="Engineering a craft, not just code."
          subtitle="BCA 2026 graduate from Pune. I build production-ready full-stack systems and intelligent AI workflows that turn business problems into shipping software."
        />

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="space-y-5 text-[#CBD5E1]/90 text-lg leading-relaxed"
          >
            <p>
              I'm a <span className="text-white font-medium">Full-Stack Developer</span> and <span className="text-white font-medium">AI Automation enthusiast</span>,
              currently completing my Bachelor of Computer Applications at the University of Pune.
            </p>
            <p>
              My focus is shipping software that <span className="text-gradient-primary font-medium">solves real problems</span> — from
              CRUD-heavy web apps to agentic AI pipelines built with LangChain and the OpenAI API.
            </p>
            <p>
              I care about clean architecture, SOLID principles, and the long boring parts: schema design, observability, and code that's still readable in twelve months.
            </p>
            <div className="grid grid-cols-3 gap-3 pt-4">
              {[
                { k: "2026", v: "BCA Graduate" },
                { k: "5+", v: "Certifications" },
                { k: "3", v: "Languages" },
              ].map((s) => (
                <div key={s.v} className="glass rounded-xl p-4">
                  <div className="text-2xl font-display font-bold text-gradient-primary">{s.k}</div>
                  <div className="text-xs text-[#CBD5E1]/70 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative pl-8">
            <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366F1] via-[#8B5CF6] to-transparent" />
            <div className="space-y-6">
              {focuses.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative glass rounded-2xl p-5 hover-lift"
                >
                  <span className="absolute -left-[1.65rem] top-6 w-3 h-3 rounded-full bg-[#8B5CF6] shadow-[0_0_14px_#8B5CF6]" />
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl grid place-items-center bg-white/5 border border-white/10">
                      <f.icon size={18} className="text-[#06B6D4]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{f.title}</h3>
                      <p className="text-sm text-[#CBD5E1]/80 mt-1">{f.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
