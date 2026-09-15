export default function PortraitPanel({
  className = "",
  variant = "hero",
}: {
  className?: string;
  variant?: "hero" | "about";
}) {
  return (
    <div className={`relative aspect-[4/5] w-full ${className}`}>
      <div
        className="animate-float pointer-events-none absolute -top-12 -right-14 z-0 h-52 w-52 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(139,111,201,0.75) 0%, rgba(139,111,201,0) 70%)" }}
        aria-hidden="true"
      />
      <div
        className="animate-float-reverse pointer-events-none absolute -bottom-14 -left-14 z-0 h-48 w-48 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(92,77,122,0.7) 0%, rgba(92,77,122,0) 70%)" }}
        aria-hidden="true"
      />

      <div
        className="group relative z-10 h-full w-full overflow-hidden rounded-sm bg-gradient-to-br from-mist via-gold-light/30 to-navy/10"
        style={{
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.5), 0 25px 50px -12px rgba(74,63,92,0.55), 0 0 70px -8px rgba(139,111,201,0.55)",
        }}
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
          <line x1="0" y1="0" x2="400" y2="500" stroke="#8b6fc9" strokeWidth="1" />
          <line x1="400" y1="0" x2="0" y2="500" stroke="#8b6fc9" strokeWidth="0.5" />
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={i}
              x1={i * 40}
              y1="0"
              x2={i * 40}
              y2="500"
              stroke="#5c4d7a"
              strokeOpacity="0.08"
              strokeWidth="1"
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[7rem] sm:text-[9rem] font-bold tracking-tight text-navy-dark/10 select-none transition-transform duration-700 ease-out group-hover:scale-110">
            MD
          </span>
        </div>
        <div
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
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
    </div>
  );
}
