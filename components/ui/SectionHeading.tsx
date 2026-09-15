import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  heading,
  align = "left",
  light = false,
  as: HeadingTag = "h2",
}: {
  eyebrow: string;
  heading: string;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`font-display text-sm font-semibold tracking-[0.25em] uppercase ${
          light ? "text-gold-light" : "text-gold"
        }`}
      >
        {eyebrow}
      </p>
      <HeadingTag
        className={`mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight ${
          light ? "text-offwhite" : "text-navy-dark"
        }`}
      >
        {heading}
      </HeadingTag>
    </Reveal>
  );
}
