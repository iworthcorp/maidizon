import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-sm px-7 py-3.5 font-display text-sm font-semibold tracking-wide uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const variants: Record<string, string> = {
  primary:
    "bg-gold text-white hover:bg-gold-light shadow-[0_4px_20px_-4px_rgba(184,135,74,0.4)] hover:shadow-[0_6px_24px_-4px_rgba(184,135,74,0.55)]",
  outline:
    "border border-navy/25 text-navy-dark hover:border-gold hover:text-gold",
  ghost: "text-navy-dark hover:text-gold",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const shine = variant === "primary" ? <span className="shine-sweep" aria-hidden="true" /> : null;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {shine}
        <span className="relative">{children}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {shine}
      <span className="relative">{children}</span>
    </Link>
  );
}
