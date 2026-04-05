import { portfolioData } from "@/data/portfolio";

import { Reveal } from "../layout/reveal";
import { SectionHeading } from "../layout/section-heading";
import { SectionShell } from "../layout/section-shell";

export function AboutSection() {
  return (
    <SectionShell id="about" navKey="about" innerClassName="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <Reveal className="glass-panel p-6 sm:p-8">
        <SectionHeading
          eyebrow={portfolioData.about.eyebrow}
          title={portfolioData.about.title}
          description={portfolioData.about.intro}
        />
        <div className="mt-8 space-y-6 text-base leading-8 text-muted">
          {portfolioData.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.08} className="glass-panel p-6 sm:p-8">
        <div className="space-y-4">
          {portfolioData.about.highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-border/60 bg-background/70 p-5"
            >
              <p className="text-xl font-semibold text-foreground">{item.title}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}
