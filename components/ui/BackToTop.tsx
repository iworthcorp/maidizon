"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-white shadow-[0_8px_24px_-6px_rgba(184,135,74,0.5)] transition-colors hover:bg-gold-light sm:bottom-8 sm:right-8"
        >
          <ArrowUp size={20} strokeWidth={2.25} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
