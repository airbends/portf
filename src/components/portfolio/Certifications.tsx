import { motion } from "framer-motion";
import { Award, BadgeCheck, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const certs = [
  { title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate", issuer: "Oracle", id: "OCI 2025 AI", color: "from-[#FF4F00] to-[#8B5CF6]" },
  { title: "Claude Code in Action", issuer: "Anthropic", id: "af9w73wm4wmc", color: "from-[#8B5CF6] to-[#06B6D4]", url: "https://verify.skilljar.com/c/af9w73wm4wmc" },
  { title: "Agentic AI and Applications", issuer: "ExcelR EdTech", id: "120029/EXCELR/EDL/05082025", color: "from-[#06B6D4] to-[#22C55E]" },
  { title: "DSA for Product-Based Companies", issuer: "ExcelR EdTech", id: "131667/EXCELR/EDL/10032026", color: "from-[#22C55E] to-[#6366F1]" },
  { title: "Data Analytics Job Simulation", issuer: "Deloitte Australia · Forage", id: "6a17ebacfcdbc006f7cb3601", color: "from-[#6366F1] to-[#8B5CF6]" },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Certifications"
          title="Industry-recognized credentials."
          subtitle="Five verified certifications across AI foundations, agentic systems, software engineering, and data analytics."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group relative glass rounded-3xl p-6 hover-lift overflow-hidden"
            >
              <div className={`absolute -top-20 -right-20 w-52 h-52 rounded-full bg-gradient-to-br ${c.color} opacity-15 blur-3xl group-hover:opacity-30 transition`} />
              <div className="flex items-center justify-between relative">
                <div className={`w-11 h-11 rounded-xl grid place-items-center bg-gradient-to-br ${c.color} shadow-lg`}>
                  <Award size={18} className="text-white" />
                </div>
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#22C55E]">
                  <BadgeCheck size={14} /> Verified
                </div>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white leading-snug">{c.title}</h3>
              <div className="mt-2 text-sm text-[#CBD5E1]/80">{c.issuer}</div>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#CBD5E1]/60">
                <span className="truncate max-w-[60%]">ID · {c.id}</span>
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1 text-[#06B6D4] hover:text-white transition">
                    Verify <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="text-white/40">Credential</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
