import { Quote } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-mist py-24 sm:py-32">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="Testimonials"
          heading="What Founders & Business Owners Are Saying"
        />

        <div className="mt-16 -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 3) * 0.08}
              className="w-[85%] shrink-0 snap-center sm:w-auto"
            >
              <figure className="group relative flex h-full flex-col rounded-sm border border-navy/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_40px_-20px_rgba(184,135,74,0.25)]">
                <Quote
                  className="text-gold transition-transform duration-300 group-hover:scale-110"
                  size={32}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-charcoal/75">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-navy/10 pt-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-mist font-display text-sm font-semibold text-gold">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-display text-sm font-semibold text-navy-dark">
                      {t.name}
                    </span>
                    <span className="block text-xs text-charcoal/50">
                      {t.position}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
