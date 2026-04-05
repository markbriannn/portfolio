import { portfolioData } from "@/data/portfolio";
import { groupByCategory } from "@/lib/utils";

import { Reveal } from "../layout/reveal";
import { SectionHeading } from "../layout/section-heading";
import { SectionShell } from "../layout/section-shell";

export function TechStackSection() {
  const grouped = groupByCategory(portfolioData.techStack.items);

  return (
    <SectionShell id="stack" navKey="stack" innerClassName="glass-panel p-6 sm:p-8 lg:p-10">
      <Reveal>
        <SectionHeading
          eyebrow={portfolioData.techStack.eyebrow}
          title={portfolioData.techStack.title}
          description={portfolioData.techStack.intro}
        />
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-4">
        {Object.entries(grouped).map(([category, items], index) => (
          <Reveal
            key={category}
            delay={index * 0.05}
            className="rounded-[1.75rem] border border-border/60 bg-background/70 p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              {category}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[1.25rem] border border-border/60 bg-surface-strong/70 px-3 py-2"
                >
                  <p className="text-sm font-medium text-foreground">{item.name}</p>
                  <p className="mt-1 text-xs text-muted">{item.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
