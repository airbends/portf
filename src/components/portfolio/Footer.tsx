import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 aurora opacity-50 pointer-events-none" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-[#06B6D4]">— signing off</div>
              <h3 className="mt-3 font-display text-3xl md:text-5xl font-bold text-gradient leading-tight">
                Designed & Developed by<br />Irfan Inamdar
              </h3>
              <motion.div
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6 }}
                className="mt-5"
              >
                <svg viewBox="0 0 320 60" className="w-56 h-12">
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                    d="M5 40 C 40 5, 80 60, 120 30 S 200 50, 250 25 S 310 45, 315 30"
                    fill="none" stroke="url(#sig)" strokeWidth="2.5" strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="sig" x1="0" x2="1">
                      <stop offset="0" stopColor="#6366F1" />
                      <stop offset="0.5" stopColor="#8B5CF6" />
                      <stop offset="1" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </div>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: "https://github.com/", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/irfan-i-121753281", label: "LinkedIn" },
                { icon: Mail, href: "mailto:irfaninamdar.work@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer noopener" aria-label={label}
                  className="w-11 h-11 grid place-items-center rounded-full glass hover:bg-white/10 hover:-translate-y-0.5 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col md:flex-row justify-between text-xs text-[#CBD5E1]/60 gap-2">
          <div>© {new Date().getFullYear()} Irfan Inamdar. All rights reserved.</div>
          <div>Built with React · TanStack Start · Framer Motion · Tailwind</div>
        </div>
      </div>
    </footer>
  );
}
