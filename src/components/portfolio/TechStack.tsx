import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

type Skill = { name: string; level: number };
const groups: { title: string; accent: string; skills: Skill[] }[] = [
  { title: "Frontend", accent: "from-[#6366F1] to-[#8B5CF6]", skills: [
    { name: "React.js", level: 90 },
    { name: "JavaScript (ES6+)", level: 92 },
    { name: "HTML5", level: 95 },
    { name: "CSS3 / Tailwind", level: 90 },
  ]},
  { title: "Backend", accent: "from-[#8B5CF6] to-[#06B6D4]", skills: [
    { name: "Node.js", level: 88 },
    { name: "Express.js", level: 85 },
    { name: "Django", level: 80 },
    { name: "FastAPI", level: 78 },
  ]},
  { title: "Database", accent: "from-[#06B6D4] to-[#22C55E]", skills: [
    { name: "MySQL", level: 88 },
    { name: "PostgreSQL", level: 82 },
    { name: "Schema Design", level: 85 },
  ]},
  { title: "AI & Automation", accent: "from-[#22C55E] to-[#6366F1]", skills: [
    { name: "OpenAI API", level: 90 },
    { name: "LangChain", level: 85 },
    { name: "Agentic AI", level: 82 },
    { name: "Prompt Engineering", level: 88 },
  ]},
  { title: "Tools", accent: "from-[#6366F1] to-[#06B6D4]", skills: [
    { name: "Git / GitHub", level: 92 },
    { name: "Postman", level: 88 },
    { name: "Linux CLI", level: 82 },
    { name: "VS Code", level: 95 },
  ]},
];

export function TechStack() {
  return (
    <section id="stack" className="relative py-28 md:py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I reach for, daily."
          subtitle="A pragmatic stack covering UI, APIs, data, and AI orchestration — picked for shipping, not hype."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
              className="group relative glass rounded-3xl p-6 hover-lift overflow-hidden"
            >
              <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${g.accent} opacity-20 blur-3xl group-hover:opacity-40 transition`} />
              <div className="flex items-center justify-between mb-5 relative">
                <h3 className="font-display text-xl font-semibold text-white">{g.title}</h3>
                <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-gradient-to-r ${g.accent} text-white/90`}>
                  {g.skills.length} skills
                </span>
              </div>
              <ul className="space-y-3 relative">
                {g.skills.map((s, i) => (
                  <li key={s.name}>
                    <div className="flex justify-between text-sm text-[#CBD5E1]">
                      <span>{s.name}</span>
                      <span className="text-white/60">{s.level}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 + i * 0.06, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${g.accent}`}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
