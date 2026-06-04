import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  useEffect(() => { const t = setTimeout(() => setShow(false), 1400); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#050816]"
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="text-5xl md:text-6xl font-display font-bold text-gradient-primary tracking-tight">
              irfan<span className="text-white">.</span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="mt-3 h-[2px] bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#06B6D4]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
