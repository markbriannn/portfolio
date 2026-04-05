import { portfolioData } from "@/data/portfolio";

import { Reveal } from "../layout/reveal";
import { SectionHeading } from "../layout/section-heading";
import { SectionShell } from "../layout/section-shell";

export function ServicesSection() {
  return (
    <SectionShell navKey="experience" innerClassName="glass-panel p-6 sm:p-8 lg:p-10">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow={portfolioData.servicesSection.eyebrow}
            title={portfolioData.servicesSection.title}
            description={portfolioData.servicesSection.intro}
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {portfolioData.servicesSection.items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.04}
              className="rounded-[1.5rem] border border-border/60 bg-background/70 p-5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
