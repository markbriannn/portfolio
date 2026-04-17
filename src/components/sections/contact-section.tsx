import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Globe,
  Mail,
  MapPin,
  NotebookPen,
} from "lucide-react";

import { portfolioData } from "@/data/portfolio";
import { normalizeText } from "@/lib/utils";

import { CtaLink } from "../layout/cta-link";
import { Reveal } from "../layout/reveal";
import { SectionHeading } from "../layout/section-heading";
import { SectionShell } from "../layout/section-shell";

const contactIcons = {
  mail: Mail,
  github: Code2,
  linkedin: BriefcaseBusiness,
  facebook: Globe,
};

export function ContactSection() {
  return (
    <SectionShell id="contact" navKey="contact" innerClassName="glass-panel p-6 sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow={portfolioData.contactSection.eyebrow}
            title={normalizeText(portfolioData.contactSection.title)}
            description={portfolioData.contactSection.intro}
          />
          <div className="mt-8 rounded-[1.75rem] border border-border/60 bg-background/70 p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background dark:bg-white dark:text-slate-950">
                <NotebookPen className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  Availability
                </p>
                <p className="mt-3 text-base leading-7 text-foreground/88">
                  {portfolioData.profile.availability}
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-muted">
              <MapPin className="h-4 w-4" />
              Based in the {portfolioData.profile.location}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="grid gap-4">
            {portfolioData.contactSection.links.map((link) => {
              const Icon = contactIcons[link.icon];
              const openInNewTab = link.href.startsWith("http");

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={openInNewTab ? "_blank" : undefined}
                  rel={openInNewTab ? "noreferrer" : undefined}
                  className="group rounded-[1.75rem] border border-border/60 bg-background/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/35"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-strong/80 text-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                          {link.label}
                        </p>
                        <p className="mt-2 text-base font-medium text-foreground">{link.display}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted transition group-hover:text-foreground" />
                  </div>
                </a>
              );
            })}

            <div className="rounded-[1.75rem] border border-border/60 bg-foreground px-6 py-7 text-background dark:bg-white dark:text-slate-950">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-background/70 dark:text-slate-500">
                Ready to connect
              </p>
              <p className="mt-4 text-lg leading-8 text-background/90 dark:text-slate-700">
                {portfolioData.contactSection.closingLine}
              </p>
              <CtaLink href="/documents/Mark_Brian_Cardoza_Resume_v4.docx" download className="mt-6 bg-background text-foreground dark:bg-slate-950 dark:text-white">
                Download CV
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
