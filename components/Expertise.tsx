import { Compass, Target, Users2, LineChart } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import ExpertiseCard from "./ExpertiseCard";
import { services } from "@/lib/data";

const icons = [Compass, Users2, Target, LineChart];

export default function Expertise() {
  return (
    <section id="expertise" className="bg-offwhite py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="What I Do" heading="Built for founders who are ready to move." />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <ExpertiseCard
                key={service.number}
                service={service}
                icon={<Icon size={28} strokeWidth={1.5} aria-hidden="true" />}
                delay={i * 0.08}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
