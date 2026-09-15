export default function PortraitPanel({
  className = "",
  variant = "hero",
}: {
  className?: string;
  variant?: "hero" | "about";
}) {
  return (
    <div
      className={`group relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-gradient-to-br from-navy via-navy-dark to-charcoal ${className}`}
      role="img"
      aria-label="Portrait of Mai Dizon"
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <line x1="0" y1="0" x2="400" y2="500" stroke="#c6a15b" strokeWidth="1" />
        <line x1="400" y1="0" x2="0" y2="500" stroke="#c6a15b" strokeWidth="0.5" />
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={i}
            x1={i * 40}
            y1="0"
            x2={i * 40}
            y2="500"
            stroke="#f7f4ee"
            strokeOpacity="0.06"
            strokeWidth="1"
          />
        ))}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-[7rem] sm:text-[9rem] font-bold tracking-tight text-offwhite/10 select-none transition-transform duration-700 ease-out group-hover:scale-110">
          MD
        </span>
      </div>
      <div
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-offwhite/10 to-transparent"
        style={{ animation: "shimmer 6s ease-in-out infinite" }}
        aria-hidden="true"
      />
      <div
        className={`absolute ${
          variant === "hero" ? "-bottom-4 -right-4" : "-top-4 -left-4"
        } h-24 w-24 border-2 border-gold transition-transform duration-500 group-hover:scale-105`}
        aria-hidden="true"
      />
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-gold via-gold-light to-transparent" />
    </div>
  );
}
