import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#stack", label: "Stack" },
  { href: "#certifications", label: "Certs" },
  { href: "#education", label: "Education" },
  { href: "#hire", label: "Hire Me" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <div className={`mx-auto max-w-6xl flex items-center justify-between rounded-full px-4 md:px-6 py-3 transition-all ${scrolled ? "glass-strong" : "glass"}`}>
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          <span className="text-gradient-primary">irfan</span>
          <span className="text-white">.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-[#CBD5E1]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative hover:text-white transition-colors group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#6366F1] to-[#06B6D4] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white glow-primary hover:opacity-90 transition">
          Let's Talk
        </a>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden mt-2 mx-auto max-w-6xl glass-strong rounded-2xl p-4 flex flex-col gap-3"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[#CBD5E1] hover:text-white py-1">{l.label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
