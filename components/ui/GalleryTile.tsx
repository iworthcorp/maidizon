import {
  Building2,
  Mic,
  Users2,
  Wrench,
  Camera,
  PartyPopper,
} from "lucide-react";
import type { GalleryCategory } from "@/lib/data";

const categoryIcons: Record<GalleryCategory, typeof Camera> = {
  Conferences: Building2,
  Speaking: Mic,
  "Coaching Sessions": Users2,
  Workshops: Wrench,
  "Behind the Scenes": Camera,
  Events: PartyPopper,
};

const categoryGradients: Record<GalleryCategory, string> = {
  Conferences: "from-navy to-navy-dark",
  Speaking: "from-navy-dark to-charcoal",
  "Coaching Sessions": "from-navy via-navy-dark to-charcoal",
  Workshops: "from-charcoal to-navy-dark",
  "Behind the Scenes": "from-navy-dark to-navy",
  Events: "from-navy to-charcoal",
};

export default function GalleryTile({
  category,
  tall = false,
  iconSize = 30,
  className = "",
}: {
  category: GalleryCategory;
  tall?: boolean;
  iconSize?: number;
  className?: string;
}) {
  const Icon = categoryIcons[category];

  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-sm bg-gradient-to-br ${categoryGradients[category]} ${
        tall ? "aspect-[3/4]" : "aspect-[4/3]"
      } ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20 transition-transform duration-500 ease-out group-hover:scale-110"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #c6a15b 0, #c6a15b 1px, transparent 1px, transparent 24px)",
        }}
      />
      <div className="shine-sweep" aria-hidden="true" />
      <Icon
        size={iconSize}
        strokeWidth={1.25}
        className="text-gold/60 transition-transform duration-500 ease-out group-hover:scale-125"
      />
      <div className="pointer-events-none absolute inset-0 bg-navy-dark/0 transition-colors duration-300 group-hover:bg-navy-dark/20" />
      <span className="absolute bottom-3 left-3 rounded-sm bg-navy-dark/70 px-2.5 py-1 font-display text-[0.65rem] font-semibold uppercase tracking-widest text-gold-light backdrop-blur">
        {category}
      </span>
    </div>
  );
}
