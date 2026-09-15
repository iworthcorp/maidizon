import { Calendar, MapPin } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import EventGraphic from "./ui/EventGraphic";
import { speakingEvents } from "@/lib/data";

export default function Speaking() {
  const [featured, ...rest] = speakingEvents;

  return (
    <section id="speaking" className="bg-offwhite py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            as="h1"
            eyebrow="Speaking"
            heading="Talks, Panels & Business Conversations"
          />
          <Reveal delay={0.1}>
            <Button href="/contact" variant="ghost" className="!px-0 whitespace-nowrap">
              Invite Mai to Speak →
            </Button>
          </Reveal>
        </div>

        {featured && (
          <Reveal delay={0.1} className="mt-16">
            <div className="group grid overflow-hidden rounded-sm border border-navy/10 bg-white transition-shadow duration-300 hover:shadow-xl lg:grid-cols-2">
              <EventGraphic className="aspect-[16/10] lg:aspect-auto" iconSize={56} />
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="w-fit rounded-sm bg-gold/10 px-3 py-1 font-display text-xs font-semibold uppercase tracking-widest text-gold">
                  Featured
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-navy-dark sm:text-3xl">
                  {featured.event}
                </h3>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={15} /> {featured.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={15} /> {featured.location}
                  </span>
                </div>
                <p className="mt-5 font-display text-sm font-semibold uppercase tracking-wide text-navy-dark">
                  {featured.topic}
                </p>
                <blockquote className="mt-3 border-l-2 border-gold pl-5 italic leading-relaxed text-charcoal/75">
                  &ldquo;{featured.description}&rdquo;
                </blockquote>
              </div>
            </div>
          </Reveal>
        )}

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((event, i) => (
            <Reveal key={event.event} delay={i * 0.08}>
              <div className="group h-full overflow-hidden rounded-sm border border-navy/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg">
                <EventGraphic className="aspect-[16/9]" iconSize={28} />
                <div className="p-6">
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={13} /> {event.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={13} /> {event.location}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-navy-dark">
                    {event.event}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gold">
                    {event.topic}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                    {event.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
