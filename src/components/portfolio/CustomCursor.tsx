import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    let x = 0, y = 0, rx = 0, ry = 0;
    const onMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };
    const tick = () => {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
      if (dot.current) dot.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      if (ring.current) ring.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(tick);
    };
    let raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div ref={ring} className="pointer-events-none fixed top-0 left-0 z-[99] w-9 h-9 rounded-full border border-[#8B5CF6]/60 mix-blend-difference" />
      <div ref={dot} className="pointer-events-none fixed top-0 left-0 z-[99] w-2 h-2 rounded-full bg-white mix-blend-difference" />
    </>
  );
}
