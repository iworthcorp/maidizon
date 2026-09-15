"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import Reveal from "./ui/Reveal";
import type { Service } from "@/lib/data";

export default function ExpertiseCard({
  service,
  icon,
  delay = 0,
}: {
  service: Service;
  icon: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    ref.current?.style.setProperty("--x", `${e.clientX - rect.left}px`);
    ref.current?.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <Reveal delay={delay}>
      <div
        ref={ref}
        onMouseMove={handleMove}
        className="group relative h-full overflow-hidden rounded-sm border border-navy/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-xl hover:shadow-navy/5"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(220px circle at var(--x, 50%) var(--y, 50%), rgba(198,161,91,0.14), transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative w-fit text-gold transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <span className="relative mt-8 block font-display text-sm font-semibold tracking-widest text-slate">
          {service.number}
        </span>
        <h3 className="relative mt-2 font-display text-xl font-semibold text-navy-dark">
          {service.title}
        </h3>
        <p className="relative mt-3 text-sm leading-relaxed text-charcoal/70">
          {service.description}
        </p>
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
      </div>
    </Reveal>
  );
}
