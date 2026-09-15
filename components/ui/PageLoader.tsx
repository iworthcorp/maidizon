"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), shouldReduceMotion ? 0 : 850);
    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-offwhite"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <span className="font-display text-2xl font-bold tracking-[0.3em] text-navy-dark">
              MAI <span className="text-gold">DIZON</span>
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="h-[2px] w-28 origin-left bg-gradient-to-r from-transparent via-gold to-transparent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
