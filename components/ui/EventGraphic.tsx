import { Mic } from "lucide-react";

export default function EventGraphic({
  className = "",
  iconSize = 32,
}: {
  className?: string;
  iconSize?: number;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-sm bg-gradient-to-br from-mist to-gold-light/40 ${className}`}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-30 transition-transform duration-500 ease-out group-hover:scale-110"
        viewBox="0 0 400 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="240" x2="220" y2="0" stroke="#8b6fc9" strokeWidth="1" />
        <line x1="120" y1="240" x2="400" y2="40" stroke="#5c4d7a" strokeOpacity="0.15" strokeWidth="1" />
      </svg>
      <div className="shine-sweep" aria-hidden="true" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Mic
          size={iconSize}
          strokeWidth={1.25}
          className="text-gold/70 transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-gold via-gold-light to-transparent" />
    </div>
  );
}
