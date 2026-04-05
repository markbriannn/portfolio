import { portfolioData } from "@/data/portfolio";

import { Reveal } from "../layout/reveal";
import { SectionHeading } from "../layout/section-heading";
import { SectionShell } from "../layout/section-shell";

export function WhyHireMeSection() {
  return (
    <SectionShell navKey="about" innerClassName="glass-panel p-6 sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <Reveal>
          <SectionHeading
            eyebrow={portfolioData.whyHireMe.eyebrow}
            title={portfolioData.whyHireMe.title}
            description={portfolioData.whyHireMe.intro}
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {portfolioData.whyHireMe.reasons.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.05}
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
