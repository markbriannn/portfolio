import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { ProjectCaseStudy } from "@/data/portfolio";

import { CtaLink } from "../layout/cta-link";
import { Reveal } from "../layout/reveal";
import { SectionShell } from "../layout/section-shell";
import { MockupFrame } from "./mockup-frame";

type ProjectCaseStudyProps = {
  project: ProjectCaseStudy;
};

export function ProjectCaseStudyView({ project }: ProjectCaseStudyProps) {
  const githubLink = project.links.find((link) => link.kind === "github");
  const demoLink = project.links.find((link) => link.kind === "demo");

  return (
    <main className="pb-24 pt-28">
      <SectionShell
        navKey="projects"
        innerClassName="glass-panel overflow-hidden p-6 sm:p-8 lg:p-10"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <Reveal>
            <CtaLink href="/#projects" variant="ghost" className="mb-6 gap-2 px-0 text-sm">
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </CtaLink>
            <span className="inline-flex rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              {project.category}
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-9 text-foreground/85">
              {project.impactLine}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{project.description}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/60 bg-surface-strong/70 px-3 py-1 text-xs font-medium text-foreground/85"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {githubLink ? <CtaLink href={githubLink.href}>{githubLink.label}</CtaLink> : null}
              {demoLink ? (
                <CtaLink href={demoLink.href} variant="secondary">
                  {demoLink.label}
                </CtaLink>
              ) : null}
              <CtaLink href="/#contact" variant="secondary">
                Contact Me
              </CtaLink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <MockupFrame project={project} />
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell innerClassName="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="glass-panel p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Overview</p>
          <p className="mt-4 text-lg leading-8 text-foreground/88">{project.overview}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-border/60 bg-background/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">Role</p>
              <p className="mt-3 text-lg font-semibold text-foreground">{project.role}</p>
            </div>
            <div className="rounded-[1.5rem] border border-border/60 bg-background/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                Outcome
              </p>
              <p className="mt-3 text-lg font-semibold text-foreground">{project.result}</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.05} className="glass-panel p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Tools</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border/60 bg-surface-strong/70 px-3 py-1 text-xs font-medium text-foreground/85"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell innerClassName="grid gap-6 lg:grid-cols-2">
        <Reveal className="glass-panel p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Problem</p>
          <p className="mt-4 text-base leading-7 text-muted">{project.problem}</p>
        </Reveal>
        <Reveal delay={0.05} className="glass-panel p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Goal</p>
          <p className="mt-4 text-base leading-7 text-muted">{project.goal}</p>
        </Reveal>
      </SectionShell>

      <SectionShell innerClassName="glass-panel p-6 sm:p-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Process</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-4">
            {project.process.map((step, index) => (
              <div
                key={step}
                className="rounded-[1.5rem] border border-border/60 bg-background/70 p-5"
              >
                <p className="text-sm font-semibold text-foreground">0{index + 1}</p>
                <p className="mt-3 text-sm leading-6 text-muted">{step}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell innerClassName="glass-panel p-6 sm:p-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Key Features
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {project.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[1.5rem] border border-border/60 bg-background/70 p-5"
              >
                <h2 className="text-xl font-semibold text-foreground">{feature.title}</h2>
                <p className="mt-3 text-sm leading-6 text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell innerClassName="grid gap-6 lg:grid-cols-2">
        <Reveal className="glass-panel p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Challenges
          </p>
          <div className="mt-6 space-y-4">
            {project.challenges.map((challenge) => (
              <div
                key={challenge}
                className="rounded-[1.5rem] border border-border/60 bg-background/70 p-5 text-sm leading-6 text-muted"
              >
                {challenge}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.05} className="glass-panel p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Solution
          </p>
          <div className="mt-6 space-y-4">
            {project.solution.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-border/60 bg-background/70 p-5 text-sm leading-6 text-muted"
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell innerClassName="glass-panel p-6 sm:p-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Interface Showcase
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {project.media.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-border/60 bg-background/70 p-5"
              >
                <div className="mb-5 overflow-hidden rounded-[1.5rem] border border-border/60 bg-slate-950">
                  {item.imageSrc ? (
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt ?? item.title}
                        fill
                        sizes="(min-width: 1024px) 24rem, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.74),rgba(2,6,23,0.05)_55%,rgba(2,6,23,0.2))]" />
                    </div>
                  ) : (
                    <div
                      className="flex aspect-[16/10] items-end justify-between p-5 text-slate-100"
                      style={{
                        backgroundImage: `linear-gradient(145deg, ${project.accent.from}24, rgba(15, 23, 42, 0) 65%), linear-gradient(180deg, rgba(15, 23, 42, 0.96), rgba(10, 15, 26, 0.98))`,
                      }}
                    >
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.22em] text-slate-300/60">
                          {item.stat}
                        </p>
                        <p className="mt-3 text-lg font-semibold text-white">{item.title}</p>
                      </div>
                      <div
                        className="h-14 w-14 rounded-2xl border border-white/10"
                        style={{
                          background: `linear-gradient(135deg, ${project.accent.from}, ${project.accent.to})`,
                        }}
                      />
                    </div>
                  )}
                </div>
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                    {item.stat}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </SectionShell>

      <SectionShell innerClassName="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="glass-panel p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Outcome</p>
          <div className="mt-6 space-y-4">
            {project.outcome.map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-border/60 bg-background/70 p-5 text-sm leading-6 text-muted"
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.05} className="glass-panel p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Next Step</p>
          <h2 className="mt-4 text-3xl font-semibold text-foreground">
            Looking for a developer who can ship practical systems?
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">
            This case study reflects the kind of workflow-driven product work I want to keep
            building with teams, organizations, and clients.
          </p>
          <CtaLink href="/#contact" className="mt-8 gap-2">
            Start a hiring conversation
            <ArrowUpRight className="h-4 w-4" />
          </CtaLink>
        </Reveal>
      </SectionShell>
    </main>
  );
}
