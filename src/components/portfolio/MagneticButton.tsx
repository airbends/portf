import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  className?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  onClick?: () => void;
};

export function MagneticButton({ className, children, variant = "primary", ...rest }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0); const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  return (
    <motion.a
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect(); if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={cn(
        "group relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-colors",
        variant === "primary"
          ? "text-white bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] glow-primary"
          : "text-white glass hover:bg-white/10",
        className,
      )}
      {...rest}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]" />
      )}
    </motion.a>
  );
}
