"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { ProjectCaseStudy } from "@/data/portfolio";
import { cn } from "@/lib/utils";

import { CtaLink } from "../layout/cta-link";
import { MockupFrame } from "./mockup-frame";

type ProjectCardProps = {
  project: ProjectCaseStudy;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const caseStudyLink = project.links.find((link) => link.kind === "case-study");
  const githubLink = project.links.find((link) => link.kind === "github");
  const demoLink = project.links.find((link) => link.kind === "demo");
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass-panel overflow-hidden p-6 sm:p-8"
    >
      <div
        className={cn(
          "grid gap-8 lg:items-center",
          isReversed ? "lg:grid-cols-[0.92fr_1.08fr]" : "lg:grid-cols-[1.08fr_0.92fr]",
        )}
      >
        <div className={cn(isReversed && "lg:order-2")}>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-border/60 bg-background/65 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              {project.category}
            </span>
            <span className="rounded-full border border-border/60 bg-surface-strong/65 px-3 py-1 text-xs font-medium text-foreground/80">
              {project.role}
            </span>
          </div>
          <h3 className="mt-6 text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 text-lg leading-8 text-foreground/85">{project.impactLine}</p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{project.description}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {project.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[1.5rem] border border-border/60 bg-background/60 p-4"
              >
                <p className="text-sm font-semibold text-foreground">{feature.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{feature.description}</p>
              </div>
            ))}
          </div>

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

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {caseStudyLink ? (
              <CtaLink href={caseStudyLink.href} className="gap-2">
                {caseStudyLink.label}
                <ArrowUpRight className="h-4 w-4" />
              </CtaLink>
            ) : null}
            {githubLink ? (
              <CtaLink href={githubLink.href} variant="secondary">
                {githubLink.label}
              </CtaLink>
            ) : null}
            {demoLink ? (
              <CtaLink href={demoLink.href} variant="secondary">
                {demoLink.label}
              </CtaLink>
            ) : null}
          </div>
        </div>

        <div className={cn(isReversed && "lg:order-1")}>
          <MockupFrame project={project} />
        </div>
      </div>
    </motion.article>
  );
}
