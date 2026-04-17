import { ArrowUpRight, Download } from "lucide-react";

import { portfolioData } from "@/data/portfolio";

import { CtaLink } from "../layout/cta-link";
import { Reveal } from "../layout/reveal";
import { SectionHeading } from "../layout/section-heading";
import { SectionShell } from "../layout/section-shell";

export function ProofSection() {
  return (
    <SectionShell navKey="experience" innerClassName="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
      <Reveal className="glass-panel p-6 sm:p-8">
        <SectionHeading
          eyebrow={portfolioData.proofSection.eyebrow}
          title={portfolioData.proofSection.title}
          description={portfolioData.proofSection.intro}
        />
        <div className="mt-8 rounded-[1.75rem] border border-border/60 bg-background/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            {portfolioData.proofSection.availabilityHeading}
          </p>
          <p className="mt-4 text-lg leading-8 text-foreground/88">
            {portfolioData.proofSection.availabilityBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href="#contact" className="gap-2">
              Contact Mark
              <ArrowUpRight className="h-4 w-4" />
            </CtaLink>
            <CtaLink href="/documents/Mark_Brian_Cardoza_Resume_v4.docx" variant="secondary" download className="gap-2">
              <Download className="h-4 w-4" />
              Download CV
            </CtaLink>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {portfolioData.proofSection.items.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 0.05}
            className="glass-panel p-5"
          >
            <p className="text-lg font-semibold text-foreground">{item.title}</p>
            <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
