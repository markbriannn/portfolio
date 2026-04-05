import { portfolioData } from "@/data/portfolio";

import { Reveal } from "../layout/reveal";
import { SectionHeading } from "../layout/section-heading";
import { SectionShell } from "../layout/section-shell";

export function ExperienceSection() {
  return (
    <SectionShell id="experience" navKey="experience" innerClassName="glass-panel p-6 sm:p-8 lg:p-10">
      <Reveal>
        <SectionHeading
          eyebrow={portfolioData.experienceSection.eyebrow}
          title={portfolioData.experienceSection.title}
          description={portfolioData.experienceSection.intro}
        />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.26rem_1fr]">
        <div className="hidden rounded-full bg-gradient-to-b from-primary via-border to-transparent lg:block" />
        <div className="space-y-5">
          {portfolioData.experienceSection.items.map((item, index) => (
            <Reveal key={`${item.role}-${item.company}`} delay={index * 0.06}>
              <div className="rounded-[1.75rem] border border-border/60 bg-background/70 p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                      {item.period}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-foreground">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-base text-foreground/82">
                      {item.company} • {item.location}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/60 bg-surface-strong/70 px-3 py-1 text-xs font-medium text-foreground/85"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-6 text-sm leading-7 text-muted">{item.summary}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-[1.25rem] border border-border/60 bg-surface/70 p-4 text-sm leading-6 text-muted"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
