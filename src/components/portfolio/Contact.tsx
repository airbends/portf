import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, Github, Linkedin, Mail, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    // Open user's email client as a graceful, dependency-free fallback
    const subject = encodeURIComponent(`Portfolio Contact — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:irfaninamdar.work@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-40 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-0 aurora opacity-60 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something worth shipping."
          subtitle="Open to Full Stack Developer and AI Automation Engineer roles, freelance contracts, and serious collaborations."
        />

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "irfaninamdar.work@gmail.com", href: "mailto:irfaninamdar.work@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/irfan-i-121753281", href: "https://www.linkedin.com/in/irfan-i-121753281" },
              { icon: Github, label: "GitHub", value: "github.com/", href: "https://github.com/" },
            ].map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer noopener"
                className="group flex items-center gap-4 glass rounded-2xl p-5 hover-lift">
                <div className="w-11 h-11 rounded-xl grid place-items-center bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] glow-primary">
                  <c.icon size={18} className="text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-[0.2em] text-[#06B6D4]">{c.label}</div>
                  <div className="text-white truncate">{c.value}</div>
                </div>
              </a>
            ))}
            <div className="glass rounded-2xl p-5 text-sm text-[#CBD5E1]/80">
              Based in <span className="text-white">Pune, India</span> · Open to remote and on-site opportunities globally.
            </div>
          </div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-6 md:p-8 relative overflow-hidden"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="min-h-[380px] flex flex-col items-center justify-center text-center"
              >
                <div className="w-16 h-16 rounded-full grid place-items-center bg-gradient-to-br from-[#22C55E] to-[#06B6D4] glow-accent">
                  <CheckCircle2 size={28} className="text-white" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-white">Message ready to send</h3>
                <p className="mt-2 text-[#CBD5E1]/80 max-w-sm">Your email client just opened with the message pre-filled. I'll get back within 24 hours.</p>
              </motion.div>
            ) : (
              <div className="space-y-4">
                {[
                  { k: "name", label: "Your name", type: "text" },
                  { k: "email", label: "Email", type: "email" },
                ].map((f) => (
                  <div key={f.k}>
                    <label className="text-xs uppercase tracking-[0.2em] text-[#CBD5E1]/70">{f.label}</label>
                    <input
                      required maxLength={120}
                      type={f.type}
                      value={(form as any)[f.k]}
                      onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                      className="mt-2 w-full bg-white/5 border border-white/10 focus:border-[#8B5CF6] focus:bg-white/[0.07] rounded-xl px-4 py-3 text-white outline-none transition placeholder:text-white/30"
                      placeholder={f.label}
                    />
                  </div>
                ))}
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-[#CBD5E1]/70">Message</label>
                  <textarea
                    required rows={5} maxLength={1000}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full bg-white/5 border border-white/10 focus:border-[#8B5CF6] focus:bg-white/[0.07] rounded-xl px-4 py-3 text-white outline-none transition placeholder:text-white/30 resize-none"
                    placeholder="Tell me about the role or project…"
                  />
                </div>
                <button type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-medium text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] glow-primary hover:opacity-95 transition">
                  Send Message <Send size={16} />
                </button>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
