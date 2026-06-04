import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { AnimatePresence, motion, useScroll, useSpring, useMotionValue, useTransform, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import { X, Menu, Sparkles, Download, ArrowRight, Github, Linkedin, Mail, Code2, Cog, Brain, GraduationCap, Cloud, Compass, Rocket, Target, Award, BadgeCheck, ExternalLink, FileCode2, Boxes, Cpu, GitBranch, Languages, Puzzle, Zap, Layers, GitMerge, Lightbulb, CheckCircle2, Send } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0, transition: { duration: 0.6 } },
      className: "fixed inset-0 z-[200] flex items-center justify-center bg-[#050816]",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-40" }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { scale: 0.8, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { duration: 0.6 },
            className: "relative",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "text-5xl md:text-6xl font-display font-bold text-gradient-primary tracking-tight", children: [
                "irfan",
                /* @__PURE__ */ jsx("span", { className: "text-white", children: "." })
              ] }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  animate: { width: "100%" },
                  transition: { duration: 1, ease: "easeInOut" },
                  className: "mt-3 h-[2px] bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#06B6D4]"
                }
              )
            ]
          }
        )
      ]
    }
  ) });
}
function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    let x = 0, y = 0, rx = 0, ry = 0;
    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
    };
    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (dot.current) dot.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      if (ring.current) ring.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(tick);
    };
    let raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  if (!enabled) return null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { ref: ring, className: "pointer-events-none fixed top-0 left-0 z-[99] w-9 h-9 rounded-full border border-[#8B5CF6]/60 mix-blend-difference" }),
    /* @__PURE__ */ jsx("div", { ref: dot, className: "pointer-events-none fixed top-0 left-0 z-[99] w-2 h-2 rounded-full bg-white mix-blend-difference" })
  ] });
}
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      style: { scaleX: x, transformOrigin: "0% 50%" },
      className: "fixed top-0 left-0 right-0 h-[2px] z-[100] bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#06B6D4]"
    }
  );
}
function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let raf = 0;
    const tick = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}
const links = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#stack", label: "Stack" },
  { href: "#certifications", label: "Certs" },
  { href: "#education", label: "Education" },
  { href: "#hire", label: "Hire Me" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    motion.header,
    {
      initial: { y: -30, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, delay: 0.4 },
      className: "fixed top-4 left-0 right-0 z-50 px-4",
      children: [
        /* @__PURE__ */ jsxs("div", { className: `mx-auto max-w-6xl flex items-center justify-between rounded-full px-4 md:px-6 py-3 transition-all ${scrolled ? "glass-strong" : "glass"}`, children: [
          /* @__PURE__ */ jsxs("a", { href: "#top", className: "font-display font-bold text-lg tracking-tight", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gradient-primary", children: "irfan" }),
            /* @__PURE__ */ jsx("span", { className: "text-white", children: ".dev" })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-7 text-sm text-[#CBD5E1]", children: links.map((l) => /* @__PURE__ */ jsxs("a", { href: l.href, className: "relative hover:text-white transition-colors group", children: [
            l.label,
            /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#6366F1] to-[#06B6D4] group-hover:w-full transition-all duration-300" })
          ] }, l.href)) }),
          /* @__PURE__ */ jsx("a", { href: "#contact", className: "hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white glow-primary hover:opacity-90 transition", children: "Let's Talk" }),
          /* @__PURE__ */ jsx("button", { className: "md:hidden text-white", onClick: () => setOpen(!open), "aria-label": "Menu", children: open ? /* @__PURE__ */ jsx(X, { size: 22 }) : /* @__PURE__ */ jsx(Menu, { size: 22 }) })
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -8 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -8 },
            className: "md:hidden mt-2 mx-auto max-w-6xl glass-strong rounded-2xl p-4 flex flex-col gap-3",
            children: links.map((l) => /* @__PURE__ */ jsx("a", { href: l.href, onClick: () => setOpen(false), className: "text-[#CBD5E1] hover:text-white py-1", children: l.label }, l.href))
          }
        ) })
      ]
    }
  );
}
function ParticlesBg({ density = 70 }) {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let w = 0, h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const particles = Array.from({ length: density }, () => ({
      x: 0,
      y: 0,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.4,
      hue: Math.random() < 0.5 ? 250 : 280
    }));
    const resize = () => {
      w = c.clientWidth;
      h = c.clientHeight;
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.scale(dpr, dpr);
      particles.forEach((p) => {
        p.x = Math.random() * w;
        p.y = Math.random() * h;
      });
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, 0.8)`;
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 120 * 120) {
            ctx.strokeStyle = `rgba(139,92,246,${0.18 * (1 - Math.sqrt(d2) / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density]);
  return /* @__PURE__ */ jsx("canvas", { ref, className: "absolute inset-0 w-full h-full", "aria-hidden": true });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function MagneticButton({ className, children, variant = "primary", ...rest }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  return /* @__PURE__ */ jsxs(
    motion.a,
    {
      ref,
      style: { x: sx, y: sy },
      onMouseMove: (e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
      },
      onMouseLeave: () => {
        x.set(0);
        y.set(0);
      },
      className: cn(
        "group relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-colors",
        variant === "primary" ? "text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] glow-primary" : "text-white glass hover:bg-white/10",
        className
      ),
      ...rest,
      children: [
        /* @__PURE__ */ jsx("span", { className: "relative z-10 flex items-center gap-2", children }),
        variant === "primary" && /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]" })
      ]
    }
  );
}
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
        if (text.length - 1 === 0) {
          setDel(false);
          setI((i + 1) % titles.length);
        }
      }
    }, del ? 40 : 70);
    return () => clearTimeout(tick);
  }, [text, del, i]);
  return text;
}
function Hero() {
  const typed = useTypewriter();
  const wrap = useRef(null);
  const [pos, setPos] = useState({ x: 50, y: 30 });
  return /* @__PURE__ */ jsxs("section", { id: "top", className: "relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-50" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsx(ParticlesBg, { density: 60 }) }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 transition-[background] duration-200",
          style: { background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, rgba(139,92,246,0.18), transparent 50%)` }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 noise opacity-[0.25] mix-blend-overlay" })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: wrap,
        onMouseMove: (e) => {
          const r = wrap.current?.getBoundingClientRect();
          if (!r) return;
          setPos({ x: (e.clientX - r.left) / r.width * 100, y: (e.clientY - r.top) / r.height * 100 });
        },
        className: "relative w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6 },
                className: "inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-[#CBD5E1]",
                children: [
                  /* @__PURE__ */ jsx(Sparkles, { size: 12, className: "text-[#06B6D4]" }),
                  "Available for Full-Time roles"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.7, delay: 0.05 },
                className: "mt-6 font-display font-bold tracking-tight leading-[0.95] text-5xl md:text-7xl lg:text-[5.5rem]",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "block text-white", children: "Irfan" }),
                  /* @__PURE__ */ jsx("span", { className: "block text-gradient-primary", children: "Inamdar" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.4 },
                className: "mt-5 text-xl md:text-2xl text-[#CBD5E1] font-medium h-8",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-gradient", children: typed }),
                  /* @__PURE__ */ jsx("span", { className: "inline-block w-[2px] h-6 align-middle ml-1 bg-[#06B6D4] animate-pulse" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.55 },
                className: "mt-6 max-w-xl text-[#CBD5E1]/80 text-base md:text-lg leading-relaxed",
                children: "Building scalable web applications and intelligent AI-powered solutions that solve real-world business problems."
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 10 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.7 },
                className: "mt-9 flex flex-wrap items-center gap-4",
                children: [
                  /* @__PURE__ */ jsxs(MagneticButton, { href: "/Irfan-Inamdar-Resume.pdf", download: true, children: [
                    /* @__PURE__ */ jsx(Download, { size: 16 }),
                    " Download Resume"
                  ] }),
                  /* @__PURE__ */ jsxs(MagneticButton, { href: "#contact", variant: "ghost", children: [
                    "Contact Me ",
                    /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 ml-2", children: [
                    { icon: Github, href: "https://github.com/", label: "GitHub" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/irfan-i-121753281", label: "LinkedIn" },
                    { icon: Mail, href: "mailto:irfaninamdar.work@gmail.com", label: "Email" }
                  ].map(({ icon: Icon, href, label }) => /* @__PURE__ */ jsx(
                    "a",
                    {
                      href,
                      target: "_blank",
                      rel: "noreferrer noopener",
                      "aria-label": label,
                      className: "w-10 h-10 grid place-items-center rounded-full glass hover:bg-white/10 hover:-translate-y-0.5 transition-all",
                      children: /* @__PURE__ */ jsx(Icon, { size: 16 })
                    },
                    label
                  )) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.9, delay: 0.3 },
              className: "relative aspect-square max-w-md mx-auto w-full hidden md:block",
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border border-white/10 animate-spin-slower" }),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-8 rounded-full border border-[#6366F1]/30 animate-spin-slow", style: { animationDirection: "reverse" } }),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-16 rounded-full border border-[#06B6D4]/25" }),
                orbitIcons.map((label, idx) => {
                  const angle = idx / orbitIcons.length * Math.PI * 2;
                  const r = 48;
                  const x = 50 + Math.cos(angle) * r;
                  const y = 50 + Math.sin(angle) * r;
                  return /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { delay: 0.6 + idx * 0.05 },
                      className: "absolute -translate-x-1/2 -translate-y-1/2 glass-strong rounded-full px-3 py-1.5 text-xs text-white shadow-lg",
                      style: { left: `${x}%`, top: `${y}%` },
                      children: label
                    },
                    label
                  );
                }),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    animate: { y: [0, -10, 0] },
                    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    className: "absolute inset-[22%] rounded-3xl glass-strong glow-primary p-6 flex flex-col justify-between overflow-hidden",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 aurora opacity-80" }),
                      /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-[#CBD5E1]", children: [
                          /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-[#22C55E] shadow-[0_0_10px_#22C55E]" }),
                          "online · Pune, IN"
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "mt-4 font-display text-xl font-semibold", children: "<irfan />" }),
                        /* @__PURE__ */ jsx("div", { className: "text-[#CBD5E1] text-xs mt-1", children: "Full Stack · AI Automation" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-widest text-[#CBD5E1]/70", children: "Now building" }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm mt-1", children: "Agentic AI workflows + scalable REST APIs" })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#8B5CF6]/30 blur-3xl" }),
                      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#06B6D4]/30 blur-3xl" })
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-[#CBD5E1]/60", children: "scroll" })
  ] });
}
function SectionHeading({ eyebrow, title, subtitle }) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-14 md:mb-20 max-w-3xl", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.5 },
        className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-[0.2em] text-[#CBD5E1]",
        children: [
          /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_12px_#06B6D4]" }),
          eyebrow
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.h2,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6, delay: 0.05 },
        className: "mt-5 text-4xl md:text-6xl font-bold text-gradient leading-[1.05]",
        children: title
      }
    ),
    subtitle && /* @__PURE__ */ jsx(
      motion.p,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.15 },
        className: "mt-5 text-base md:text-lg text-[#CBD5E1]/80 max-w-2xl",
        children: subtitle
      }
    )
  ] });
}
const focuses = [
  { icon: Code2, title: "Full Stack Development", text: "React, Node, Django end-to-end systems." },
  { icon: Cog, title: "Backend Engineering", text: "RESTful APIs and scalable architectures." },
  { icon: Brain, title: "AI Automation", text: "OpenAI APIs, LangChain, prompt engineering." },
  { icon: GraduationCap, title: "Agentic AI Systems", text: "Multi-agent workflows with tool use & memory." },
  { icon: Cloud, title: "Cloud Technologies", text: "Vercel, Render, Oracle Cloud foundations." }
];
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "relative py-28 md:py-40 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "About",
        title: "Engineering a craft, not just code.",
        subtitle: "BCA 2026 graduate from Pune. I build production-ready full-stack systems and intelligent AI workflows that turn business problems into shipping software."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "space-y-5 text-[#CBD5E1]/90 text-lg leading-relaxed",
          children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "I'm a ",
              /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "Full-Stack Developer" }),
              " and ",
              /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "AI Automation enthusiast" }),
              ", currently completing my Bachelor of Computer Applications at the University of Pune."
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "My focus is shipping software that ",
              /* @__PURE__ */ jsx("span", { className: "text-gradient-primary font-medium", children: "solves real problems" }),
              " — from CRUD-heavy web apps to agentic AI pipelines built with LangChain and the OpenAI API."
            ] }),
            /* @__PURE__ */ jsx("p", { children: "I care about clean architecture, SOLID principles, and the long boring parts: schema design, observability, and code that's still readable in twelve months." }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3 pt-4", children: [
              { k: "2026", v: "BCA Graduate" },
              { k: "5+", v: "Certifications" },
              { k: "3", v: "Languages" }
            ].map((s) => /* @__PURE__ */ jsxs("div", { className: "glass rounded-xl p-4", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-display font-bold text-gradient-primary", children: s.k }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-[#CBD5E1]/70 mt-1", children: s.v })
            ] }, s.v)) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative pl-8", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366F1] via-[#8B5CF6] to-transparent" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: focuses.map((f, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-60px" },
            transition: { duration: 0.5, delay: i * 0.06 },
            className: "relative glass rounded-2xl p-5 hover-lift",
            children: [
              /* @__PURE__ */ jsx("span", { className: "absolute -left-[1.65rem] top-6 w-3 h-3 rounded-full bg-[#8B5CF6] shadow-[0_0_14px_#8B5CF6]" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "shrink-0 w-10 h-10 rounded-xl grid place-items-center bg-white/5 border border-white/10", children: /* @__PURE__ */ jsx(f.icon, { size: 18, className: "text-[#06B6D4]" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold", children: f.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-[#CBD5E1]/80 mt-1", children: f.text })
                ] })
              ] })
            ]
          },
          f.title
        )) })
      ] })
    ] })
  ] }) });
}
const milestones = [
  { icon: Compass, year: "2023", title: "Foundations", text: "Started BCA at University of Pune. Deep dive into DSA, OOP, and core web technologies." },
  { icon: Sparkles, year: "2024", title: "Full Stack Builder", text: "Shipped multiple full-stack apps: Recipe Platform, Timetable Generator, Code Sharing — React + Node + MySQL." },
  { icon: Rocket, year: "2025", title: "AI Automation Engineer", text: "Earned Oracle OCI AI, Anthropic Claude Code, and Agentic AI certifications. Building LangChain agentic pipelines." },
  { icon: Target, year: "2026", title: "Production Mindset", text: "Graduating BCA. Focused on scalable architectures, AI integration, and joining a top-tier engineering team." }
];
function ExperienceJourney() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  return /* @__PURE__ */ jsx("section", { id: "journey", className: "relative py-28 md:py-40 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Journey",
        title: "A trajectory built on output.",
        subtitle: "No noise — just the milestones that shaped how I build software today."
      }
    ),
    /* @__PURE__ */ jsxs("div", { ref, className: "relative mt-12", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10" }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          style: { height: lineHeight },
          className: "absolute left-4 md:left-1/2 top-0 w-px bg-gradient-to-b from-[#6366F1] via-[#8B5CF6] to-[#06B6D4]"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "space-y-12 md:space-y-20", children: milestones.map((m, i) => {
        const right = i % 2 === 1;
        return /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-80px" },
            transition: { duration: 0.6 },
            className: `relative md:grid md:grid-cols-2 md:gap-12 items-center ${right ? "md:[&>*:first-child]:order-2" : ""}`,
            children: [
              /* @__PURE__ */ jsxs("div", { className: `pl-12 md:pl-0 ${right ? "md:pl-12" : "md:pr-12 md:text-right"}`, children: [
                /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#06B6D4]", children: [
                  /* @__PURE__ */ jsx(Sparkles, { size: 12 }),
                  " ",
                  m.year
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "mt-3 text-2xl md:text-3xl font-display font-bold text-white", children: m.title }),
                /* @__PURE__ */ jsx("p", { className: "mt-2 text-[#CBD5E1]/80 max-w-md md:inline-block", children: m.text })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "hidden md:block" }),
              /* @__PURE__ */ jsx("div", { className: "absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-9 h-9 rounded-full grid place-items-center glass-strong glow-primary", children: /* @__PURE__ */ jsx(m.icon, { size: 14, className: "text-white" }) })
            ]
          },
          m.title
        );
      }) })
    ] })
  ] }) });
}
const groups = [
  { title: "Frontend", accent: "from-[#6366F1] to-[#8B5CF6]", skills: [
    { name: "React.js", level: 90 },
    { name: "JavaScript (ES6+)", level: 92 },
    { name: "HTML5", level: 95 },
    { name: "CSS3 / Tailwind", level: 90 }
  ] },
  { title: "Backend", accent: "from-[#8B5CF6] to-[#06B6D4]", skills: [
    { name: "Node.js", level: 88 },
    { name: "Express.js", level: 85 },
    { name: "Django", level: 80 },
    { name: "FastAPI", level: 78 }
  ] },
  { title: "Database", accent: "from-[#06B6D4] to-[#22C55E]", skills: [
    { name: "MySQL", level: 88 },
    { name: "PostgreSQL", level: 82 },
    { name: "Schema Design", level: 85 }
  ] },
  { title: "AI & Automation", accent: "from-[#22C55E] to-[#6366F1]", skills: [
    { name: "OpenAI API", level: 90 },
    { name: "LangChain", level: 85 },
    { name: "Agentic AI", level: 82 },
    { name: "Prompt Engineering", level: 88 }
  ] },
  { title: "Tools", accent: "from-[#6366F1] to-[#06B6D4]", skills: [
    { name: "Git / GitHub", level: 92 },
    { name: "Postman", level: 88 },
    { name: "Linux CLI", level: 82 },
    { name: "VS Code", level: 95 }
  ] }
];
function TechStack() {
  return /* @__PURE__ */ jsxs("section", { id: "stack", className: "relative py-28 md:py-40 px-6 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-30 pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto relative", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          eyebrow: "Tech Stack",
          title: "Tools I reach for, daily.",
          subtitle: "A pragmatic stack covering UI, APIs, data, and AI orchestration — picked for shipping, not hype."
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: groups.map((g, gi) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.5, delay: gi * 0.05 },
          className: "group relative glass rounded-3xl p-6 hover-lift overflow-hidden",
          children: [
            /* @__PURE__ */ jsx("div", { className: `absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${g.accent} opacity-20 blur-3xl group-hover:opacity-40 transition` }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-5 relative", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold text-white", children: g.title }),
              /* @__PURE__ */ jsxs("span", { className: `text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-gradient-to-r ${g.accent} text-white/90`, children: [
                g.skills.length,
                " skills"
              ] })
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3 relative", children: g.skills.map((s, i) => /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm text-[#CBD5E1]", children: [
                /* @__PURE__ */ jsx("span", { children: s.name }),
                /* @__PURE__ */ jsxs("span", { className: "text-white/60", children: [
                  s.level,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-1.5 h-1.5 rounded-full bg-white/5 overflow-hidden", children: /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { width: 0 },
                  whileInView: { width: `${s.level}%` },
                  viewport: { once: true },
                  transition: { duration: 1, delay: 0.1 + i * 0.06, ease: "easeOut" },
                  className: `h-full rounded-full bg-gradient-to-r ${g.accent}`
                }
              ) })
            ] }, s.name)) })
          ]
        },
        g.title
      )) })
    ] })
  ] });
}
const certs = [
  { title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate", issuer: "Oracle", id: "OCI 2025 AI", color: "from-[#FF4F00] to-[#8B5CF6]" },
  { title: "Claude Code in Action", issuer: "Anthropic", id: "af9w73wm4wmc", color: "from-[#8B5CF6] to-[#06B6D4]", url: "https://verify.skilljar.com/c/af9w73wm4wmc" },
  { title: "Agentic AI and Applications", issuer: "ExcelR EdTech", id: "120029/EXCELR/EDL/05082025", color: "from-[#06B6D4] to-[#22C55E]" },
  { title: "DSA for Product-Based Companies", issuer: "ExcelR EdTech", id: "131667/EXCELR/EDL/10032026", color: "from-[#22C55E] to-[#6366F1]" },
  { title: "Data Analytics Job Simulation", issuer: "Deloitte Australia · Forage", id: "6a17ebacfcdbc006f7cb3601", color: "from-[#6366F1] to-[#8B5CF6]" }
];
function Certifications() {
  return /* @__PURE__ */ jsx("section", { id: "certifications", className: "relative py-28 md:py-40 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Certifications",
        title: "Industry-recognized credentials.",
        subtitle: "Five verified certifications across AI foundations, agentic systems, software engineering, and data analytics."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: certs.map((c, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.55, delay: i * 0.06 },
        className: "group relative glass rounded-3xl p-6 hover-lift overflow-hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: `absolute -top-20 -right-20 w-52 h-52 rounded-full bg-gradient-to-br ${c.color} opacity-15 blur-3xl group-hover:opacity-30 transition` }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between relative", children: [
            /* @__PURE__ */ jsx("div", { className: `w-11 h-11 rounded-xl grid place-items-center bg-gradient-to-br ${c.color} shadow-lg`, children: /* @__PURE__ */ jsx(Award, { size: 18, className: "text-white" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#22C55E]", children: [
              /* @__PURE__ */ jsx(BadgeCheck, { size: 14 }),
              " Verified"
            ] })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-lg font-semibold text-white leading-snug", children: c.title }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-[#CBD5E1]/80", children: c.issuer }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#CBD5E1]/60", children: [
            /* @__PURE__ */ jsxs("span", { className: "truncate max-w-[60%]", children: [
              "ID · ",
              c.id
            ] }),
            c.url ? /* @__PURE__ */ jsxs("a", { href: c.url, target: "_blank", rel: "noreferrer noopener", className: "inline-flex items-center gap-1 text-[#06B6D4] hover:text-white transition", children: [
              "Verify ",
              /* @__PURE__ */ jsx(ExternalLink, { size: 12 })
            ] }) : /* @__PURE__ */ jsx("span", { className: "text-white/40", children: "Credential" })
          ] })
        ]
      },
      c.title
    )) })
  ] }) });
}
function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return /* @__PURE__ */ jsxs("span", { ref, children: [
    n,
    suffix
  ] });
}
const stats = [
  { icon: FileCode2, value: 5, suffix: "+", label: "Industry Certifications" },
  { icon: Boxes, value: 3, suffix: "", label: "Full-Stack Apps Built" },
  { icon: Cpu, value: 10, suffix: "+", label: "AI Automation Workflows" },
  { icon: GitBranch, value: 15, suffix: "+", label: "REST APIs Designed" },
  { icon: Languages, value: 3, suffix: "", label: "Languages (EN · HI · MR)" }
];
function Achievements() {
  return /* @__PURE__ */ jsx("section", { className: "relative py-24 md:py-32 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Achievements", title: "Output that compounds." }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-4", children: stats.map((s, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.06 },
        className: "glass rounded-2xl p-5 hover-lift relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-8 -right-8 w-24 h-24 rounded-full bg-[#8B5CF6]/20 blur-2xl" }),
          /* @__PURE__ */ jsx(s.icon, { size: 18, className: "text-[#06B6D4]" }),
          /* @__PURE__ */ jsx("div", { className: "mt-3 font-display text-3xl md:text-4xl font-bold text-gradient-primary", children: /* @__PURE__ */ jsx(Counter, { to: s.value, suffix: s.suffix }) }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs text-[#CBD5E1]/80", children: s.label })
        ]
      },
      s.label
    )) })
  ] }) });
}
const courses = [
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Object-Oriented Programming",
  "Software Engineering",
  "Web Technologies",
  "Computer Networks"
];
function Education() {
  return /* @__PURE__ */ jsx("section", { id: "education", className: "relative py-28 md:py-40 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Education", title: "Academic foundation." }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "relative glass-strong rounded-3xl p-8 md:p-10 overflow-hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 aurora opacity-60 pointer-events-none" }),
          /* @__PURE__ */ jsxs("div", { className: "relative grid md:grid-cols-[auto_1fr_auto] gap-8 items-start", children: [
            /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl grid place-items-center bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] glow-primary", children: /* @__PURE__ */ jsx(GraduationCap, { size: 22, className: "text-white" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-[#06B6D4]", children: "2023 — 2026" }),
              /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-2xl md:text-3xl font-bold text-white", children: "Bachelor of Computer Applications" }),
              /* @__PURE__ */ jsx("div", { className: "mt-1 text-[#CBD5E1]", children: "University of Pune · Pune, India" }),
              /* @__PURE__ */ jsx("p", { className: "mt-4 text-[#CBD5E1]/80 max-w-2xl", children: "Final-year project: a full-stack web application integrating AI APIs with a React frontend and Django backend." }),
              /* @__PURE__ */ jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: courses.map((c) => /* @__PURE__ */ jsx("span", { className: "text-xs px-3 py-1.5 rounded-full glass text-[#CBD5E1] hover:text-white hover:bg-white/10 transition", children: c }, c)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "hidden md:block text-right", children: [
              /* @__PURE__ */ jsx("div", { className: "text-5xl font-display font-bold text-gradient-primary", children: "2026" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-[#CBD5E1]/70 mt-1", children: "Graduating" })
            ] })
          ] })
        ]
      }
    )
  ] }) });
}
const reasons = [
  { icon: Puzzle, title: "Problem Solving", text: "Frame ambiguous problems, decompose them, and ship the smallest correct solution." },
  { icon: Zap, title: "Quick Learner", text: "Five certifications and three full-stack apps in parallel with a full-time BCA degree." },
  { icon: Layers, title: "Full Stack Expertise", text: "Confident across React, Node/Django, REST APIs, and relational schema design." },
  { icon: Brain, title: "AI Integration Skills", text: "Hands-on with OpenAI APIs, LangChain, agentic workflows and prompt engineering." },
  { icon: GitMerge, title: "Production Mindset", text: "SOLID, modular architecture, REST best-practices and review-friendly code." },
  { icon: Lightbulb, title: "Scalable Architecture", text: "Designs that grow — clean separation of concerns and normalized data models." }
];
function WhyHireMe() {
  return /* @__PURE__ */ jsx("section", { id: "hire", className: "relative py-28 md:py-40 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx(
      SectionHeading,
      {
        eyebrow: "Why Hire Me?",
        title: "An engineer recruiters can bet on.",
        subtitle: "What you actually get when I join your team."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: reasons.map((r, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.55, delay: i * 0.05 },
        className: "group relative glass rounded-3xl p-6 hover-lift overflow-hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#6366F1]/10 via-transparent to-[#06B6D4]/10" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-xl grid place-items-center bg-white/5 border border-white/10 group-hover:border-[#8B5CF6]/40 transition", children: /* @__PURE__ */ jsx(r.icon, { size: 18, className: "text-[#06B6D4]" }) }),
            /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-lg font-semibold text-white", children: r.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-[#CBD5E1]/80", children: r.text })
          ] })
        ]
      },
      r.title
    )) })
  ] }) });
}
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    const subject = encodeURIComponent(`Portfolio Contact — ${form.name}`);
    const body = encodeURIComponent(`${form.message}

— ${form.name} (${form.email})`);
    window.location.href = `mailto:irfaninamdar.work@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "relative py-28 md:py-40 px-6 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-40 pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 aurora opacity-60 pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto relative", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          eyebrow: "Contact",
          title: "Let's build something worth shipping.",
          subtitle: "Open to Full Stack Developer and AI Automation Engineer roles, freelance contracts, and serious collaborations."
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-[1fr_1.1fr] gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          [
            { icon: Mail, label: "Email", value: "irfaninamdar.work@gmail.com", href: "mailto:irfaninamdar.work@gmail.com" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/irfan-i-121753281", href: "https://www.linkedin.com/in/irfan-i-121753281" },
            { icon: Github, label: "GitHub", value: "github.com/", href: "https://github.com/" }
          ].map((c) => /* @__PURE__ */ jsxs(
            "a",
            {
              href: c.href,
              target: "_blank",
              rel: "noreferrer noopener",
              className: "group flex items-center gap-4 glass rounded-2xl p-5 hover-lift",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-xl grid place-items-center bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] glow-primary", children: /* @__PURE__ */ jsx(c.icon, { size: 18, className: "text-white" }) }),
                /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-[#06B6D4]", children: c.label }),
                  /* @__PURE__ */ jsx("div", { className: "text-white truncate", children: c.value })
                ] })
              ]
            },
            c.label
          )),
          /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-5 text-sm text-[#CBD5E1]/80", children: [
            "Based in ",
            /* @__PURE__ */ jsx("span", { className: "text-white", children: "Pune, India" }),
            " · Open to remote and on-site opportunities globally."
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          motion.form,
          {
            onSubmit: submit,
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "glass-strong rounded-3xl p-6 md:p-8 relative overflow-hidden",
            children: sent ? /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                className: "min-h-[380px] flex flex-col items-center justify-center text-center",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full grid place-items-center bg-gradient-to-br from-[#22C55E] to-[#06B6D4] glow-accent", children: /* @__PURE__ */ jsx(CheckCircle2, { size: 28, className: "text-white" }) }),
                  /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-2xl text-white", children: "Message ready to send" }),
                  /* @__PURE__ */ jsx("p", { className: "mt-2 text-[#CBD5E1]/80 max-w-sm", children: "Your email client just opened with the message pre-filled. I'll get back within 24 hours." })
                ]
              }
            ) : /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              [
                { k: "name", label: "Your name", type: "text" },
                { k: "email", label: "Email", type: "email" }
              ].map((f) => /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "text-xs uppercase tracking-[0.2em] text-[#CBD5E1]/70", children: f.label }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    required: true,
                    maxLength: 120,
                    type: f.type,
                    value: form[f.k],
                    onChange: (e) => setForm({ ...form, [f.k]: e.target.value }),
                    className: "mt-2 w-full bg-white/5 border border-white/10 focus:border-[#8B5CF6] focus:bg-white/[0.07] rounded-xl px-4 py-3 text-white outline-none transition placeholder:text-white/30",
                    placeholder: f.label
                  }
                )
              ] }, f.k)),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "text-xs uppercase tracking-[0.2em] text-[#CBD5E1]/70", children: "Message" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    required: true,
                    rows: 5,
                    maxLength: 1e3,
                    value: form.message,
                    onChange: (e) => setForm({ ...form, message: e.target.value }),
                    className: "mt-2 w-full bg-white/5 border border-white/10 focus:border-[#8B5CF6] focus:bg-white/[0.07] rounded-xl px-4 py-3 text-white outline-none transition placeholder:text-white/30 resize-none",
                    placeholder: "Tell me about the role or project…"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "submit",
                  className: "w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-medium text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] glow-primary hover:opacity-95 transition",
                  children: [
                    "Send Message ",
                    /* @__PURE__ */ jsx(Send, { size: 16 })
                  ]
                }
              )
            ] })
          }
        )
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "relative px-6 pb-10 pt-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 aurora opacity-50 pointer-events-none" }),
      /* @__PURE__ */ jsxs("div", { className: "relative grid md:grid-cols-[1fr_auto] gap-8 items-end", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-[#06B6D4]", children: "— signing off" }),
          /* @__PURE__ */ jsxs("h3", { className: "mt-3 font-display text-3xl md:text-5xl font-bold text-gradient leading-tight", children: [
            "Designed & Developed by",
            /* @__PURE__ */ jsx("br", {}),
            "Irfan Inamdar"
          ] }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { pathLength: 0 },
              whileInView: { pathLength: 1 },
              viewport: { once: true },
              transition: { duration: 1.6 },
              className: "mt-5",
              children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 320 60", className: "w-56 h-12", children: [
                /* @__PURE__ */ jsx(
                  motion.path,
                  {
                    initial: { pathLength: 0, opacity: 0 },
                    whileInView: { pathLength: 1, opacity: 1 },
                    viewport: { once: true },
                    transition: { duration: 1.8, ease: "easeInOut" },
                    d: "M5 40 C 40 5, 80 60, 120 30 S 200 50, 250 25 S 310 45, 315 30",
                    fill: "none",
                    stroke: "url(#sig)",
                    strokeWidth: "2.5",
                    strokeLinecap: "round"
                  }
                ),
                /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "sig", x1: "0", x2: "1", children: [
                  /* @__PURE__ */ jsx("stop", { offset: "0", stopColor: "#6366F1" }),
                  /* @__PURE__ */ jsx("stop", { offset: "0.5", stopColor: "#8B5CF6" }),
                  /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#06B6D4" })
                ] }) })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: [
          { icon: Github, href: "https://github.com/", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/irfan-i-121753281", label: "LinkedIn" },
          { icon: Mail, href: "mailto:irfaninamdar.work@gmail.com", label: "Email" }
        ].map(({ icon: Icon, href, label }) => /* @__PURE__ */ jsx(
          "a",
          {
            href,
            target: "_blank",
            rel: "noreferrer noopener",
            "aria-label": label,
            className: "w-11 h-11 grid place-items-center rounded-full glass hover:bg-white/10 hover:-translate-y-0.5 transition-all",
            children: /* @__PURE__ */ jsx(Icon, { size: 16 })
          },
          label
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col md:flex-row justify-between text-xs text-[#CBD5E1]/60 gap-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Irfan Inamdar. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("div", { children: "Built with React · TanStack Start · Framer Motion · Tailwind" })
    ] })
  ] }) });
}
function PortfolioPage() {
  return /* @__PURE__ */ jsxs("main", { className: "relative bg-background text-foreground antialiased", children: [
    /* @__PURE__ */ jsx(LoadingScreen, {}),
    /* @__PURE__ */ jsx(SmoothScroll, {}),
    /* @__PURE__ */ jsx(CustomCursor, {}),
    /* @__PURE__ */ jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(ExperienceJourney, {}),
    /* @__PURE__ */ jsx(TechStack, {}),
    /* @__PURE__ */ jsx(Certifications, {}),
    /* @__PURE__ */ jsx(Achievements, {}),
    /* @__PURE__ */ jsx(Education, {}),
    /* @__PURE__ */ jsx(WhyHireMe, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  PortfolioPage as component
};
