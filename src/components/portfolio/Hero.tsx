import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { ParticlesBg } from "./ParticlesBg";
import { MagneticButton } from "./MagneticButton";

const titles = ["Full Stack Developer", "AI Automation Engineer", "Agentic AI Builder"];
const orbitIcons = ["React", "Node", "Python", "Django", "MySQL", "OpenAI", "LangChain", "AWS"];

function useTypewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = titles[i];
    const tick = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDel(false); setI((i + 1) % titles.length); }
      }
    }, del ? 40 : 70);
    return () => clearTimeout(tick);
  }, [text, del, i]);
  return text;
}

export function Hero() {
  const typed = useTypewriter();
  const wrap = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 30 });

  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute inset-0">
          <ParticlesBg density={60} />
        </div>
        <div
          className="absolute inset-0 transition-[background] duration-200"
          style={{ background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, rgba(139,92,246,0.18), transparent 50%)` }}
        />
        <div className="absolute inset-0 noise opacity-[0.25] mix-blend-overlay" />
      </div>

      <div
        ref={wrap}
        onMouseMove={(e) => {
          const r = wrap.current?.getBoundingClientRect(); if (!r) return;
          setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
        }}
        className="relative w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-[#CBD5E1]"
          >
            <Sparkles size={12} className="text-[#06B6D4]" />
            Available for Full-Time roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display font-bold tracking-tight leading-[0.95] text-5xl md:text-7xl lg:text-[5.5rem]"
          >
            <span className="block text-white">Irfan</span>
            <span className="block text-gradient-primary">Inamdar</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="mt-5 text-xl md:text-2xl text-[#CBD5E1] font-medium h-8"
          >
            <span className="text-gradient">{typed}</span>
            <span className="inline-block w-[2px] h-6 align-middle ml-1 bg-[#06B6D4] animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
            className="mt-6 max-w-xl text-[#CBD5E1]/80 text-base md:text-lg leading-relaxed"
          >
            Building scalable web applications and intelligent AI-powered solutions
            that solve real-world business problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="/Irfan-Inamdar-Resume.pdf" download>
              <Download size={16} /> Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Contact Me <ArrowRight size={16} />
            </MagneticButton>
            <div className="flex items-center gap-2 ml-2">
              {[
                { icon: Github, href: "https://github.com/", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/irfan-i-121753281", label: "LinkedIn" },
                { icon: Mail, href: "mailto:irfaninamdar.work@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer noopener" aria-label={label}
                  className="w-10 h-10 grid place-items-center rounded-full glass hover:bg-white/10 hover:-translate-y-0.5 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Holographic 3D card with orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3 }}
          className="relative aspect-square max-w-md mx-auto w-full hidden md:block"
        >
          {/* Orbit rings */}
          <div className="absolute inset-0 rounded-full border border-white/10 animate-spin-slower" />
          <div className="absolute inset-8 rounded-full border border-[#6366F1]/30 animate-spin-slow" style={{ animationDirection: "reverse" }} />
          <div className="absolute inset-16 rounded-full border border-[#06B6D4]/25" />

          {/* Floating tech chips on outer orbit */}
          {orbitIcons.map((label, idx) => {
            const angle = (idx / orbitIcons.length) * Math.PI * 2;
            const r = 48; // percent
            const x = 50 + Math.cos(angle) * r;
            const y = 50 + Math.sin(angle) * r;
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 + idx * 0.05 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 glass-strong rounded-full px-3 py-1.5 text-xs text-white shadow-lg"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                {label}
              </motion.div>
            );
          })}

          {/* Center holo card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-[22%] rounded-3xl glass-strong glow-primary p-6 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-0 aurora opacity-80" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs text-[#CBD5E1]">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] shadow-[0_0_10px_#22C55E]" />
                online · Pune, IN
              </div>
              <div className="mt-4 font-display text-xl font-semibold">{"<irfan />"}</div>
              <div className="text-[#CBD5E1] text-xs mt-1">Full Stack · AI Automation</div>
            </div>
            <div className="relative z-10">
              <div className="text-[10px] uppercase tracking-widest text-[#CBD5E1]/70">Now building</div>
              <div className="text-sm mt-1">Agentic AI workflows + scalable REST APIs</div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#8B5CF6]/30 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#06B6D4]/30 blur-3xl" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-[#CBD5E1]/60">scroll</div>
    </section>
  );
}
