import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

export default function BrandStatement() {
  return (
    <section className="relative overflow-hidden bg-mist py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, #8b6fc9 0, #8b6fc9 1px, transparent 1px, transparent 80px)",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[140%] -translate-x-1/2 -translate-y-1/2 rotate-[6deg] bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="animate-float pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/15 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="font-display text-2xl font-medium leading-snug text-navy-dark sm:text-3xl lg:text-4xl">
            &ldquo;Every successful business starts with the{" "}
            <span className="text-gold">right strategy</span> in the{" "}
            <span className="text-gold">right hands.</span>&rdquo;
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
