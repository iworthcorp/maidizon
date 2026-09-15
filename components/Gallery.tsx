"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import GalleryTile from "./ui/GalleryTile";
import { galleryImages, galleryCategories } from "@/lib/data";
import type { GalleryCategory } from "@/lib/data";

export default function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory | "All">("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = galleryImages.filter(
    (img) => filter === "All" || img.category === filter,
  );

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length));

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, filtered.length]);

  const active = activeIndex !== null ? filtered[activeIndex] : null;

  return (
    <section id="gallery" className="bg-charcoal py-24 sm:py-32">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="Gallery"
          heading="Moments From the Journey"
          light
        />

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {["All", ...galleryCategories].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat as GalleryCategory | "All")}
              className={`rounded-sm border px-4 py-2 font-display text-xs font-semibold uppercase tracking-wide transition-colors ${
                filter === cat
                  ? "border-gold bg-gold text-navy-dark"
                  : "border-offwhite/15 text-offwhite/70 hover:border-gold/60 hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {filtered.map((img, i) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setActiveIndex(i)}
              className="group block w-full break-inside-avoid focus-visible:outline-2 focus-visible:outline-gold"
              aria-label={`Open image: ${img.caption}`}
            >
              <div className="overflow-hidden rounded-sm transition-transform duration-300 group-hover:-translate-y-1">
                <GalleryTile category={img.category} tall={img.tall} />
              </div>
            </button>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-dark/95 p-4 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={active.caption}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close lightbox"
              className="absolute right-4 top-4 rounded-sm p-2 text-offwhite/80 hover:text-gold sm:right-8 sm:top-8"
            >
              <X size={28} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-sm p-2 text-offwhite/80 hover:text-gold sm:left-6"
            >
              <ChevronLeft size={32} />
            </button>

            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <GalleryTile
                category={active.category}
                iconSize={56}
                className="aspect-[4/3]"
              />
              <p className="mt-4 text-center text-sm text-offwhite/70">
                {active.caption}
              </p>
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm p-2 text-offwhite/80 hover:text-gold sm:right-6"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
