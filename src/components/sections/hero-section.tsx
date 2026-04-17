"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Download, MapPin, Briefcase, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";

import { portfolioData } from "@/data/portfolio";
import { CtaLink } from "../layout/cta-link";

gsap.registerPlugin(useGSAP);

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (reduceMotion || !rootRef.current) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".h-fade",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.08, clearProps: "transform,opacity" },
      ).fromTo(
        ".h-visual",
        { opacity: 0, x: 32, scale: 0.96 },
        { opacity: 1, x: 0, scale: 1, duration: 0.9, clearProps: "transform,opacity" },
        0.2,
      );
    },
    { scope: rootRef, dependencies: [reduceMotion], revertOnUpdate: true },
  );

  const strengths = [
    "Full stack: React, Next.js, Node.js, PostgreSQL",
    "Real workflow systems — not just demo projects",
    "DENR PENRO internship · Capstone-defended",
  ];

  return (
    <section
      id="home"
      data-nav="home"
      ref={rootRef}
      className="relative overflow-hidden pb-16 pt-24 sm:pt-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-border/60 bg-hero-radial shadow-premium">

          {/* bg decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_65%_0%,rgba(56,189,248,0.15),transparent_65%)] dark:bg-[radial-gradient(ellipse_70%_55%_at_65%_0%,rgba(56,189,248,0.08),transparent_65%)]" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.15)_1px,transparent_1px)] [background-size:44px_44px]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,rgba(255,255,255,0.16),transparent)] opacity-60 dark:opacity-0" />
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.10),transparent_55%)]" />

          {/* grid */}
          <div className="relative grid min-h-[calc(100svh-8rem)] items-center gap-10 px-6 py-12 sm:px-8 md:px-10 lg:grid-cols-[1fr_auto] lg:gap-16 lg:px-14 lg:py-16 xl:px-16">

            {/* LEFT */}
            <div className="flex flex-col">

              <div className="h-fade inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.08] px-3.5 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                  Available for hire
                </span>
              </div>

              <h1 className="h-fade mt-6 text-[clamp(2.6rem,6.5vw,5.2rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-foreground">
                {portfolioData.hero.title}
              </h1>

              <div className="h-fade mt-4 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-surface/80 px-3.5 py-1.5 text-sm font-semibold text-foreground/80 backdrop-blur-xl">
                  <Briefcase className="h-3.5 w-3.5 text-primary" />
                  {portfolioData.hero.subtitle}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-surface/80 px-3.5 py-1.5 text-sm font-medium text-foreground/65 backdrop-blur-xl">
                  <MapPin className="h-3.5 w-3.5 text-muted" />
                  {portfolioData.profile.location}
                </span>
              </div>

              <p className="h-fade mt-6 max-w-[34rem] text-[1.05rem] leading-[1.75] text-foreground/70">
                {portfolioData.hero.supportingText}
              </p>

              <ul className="h-fade mt-5 flex flex-col gap-2">
                {strengths.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/65">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="h-fade mt-8 flex flex-wrap gap-3">
                <CtaLink href={portfolioData.hero.ctas.primary.href} className="gap-2">
                  {portfolioData.hero.ctas.primary.label}
                  <ArrowUpRight className="h-4 w-4" />
                </CtaLink>
                <CtaLink href={portfolioData.hero.ctas.secondary.href} variant="secondary">
                  {portfolioData.hero.ctas.secondary.label}
                </CtaLink>
                <CtaLink
                  href={portfolioData.hero.ctas.tertiary.href}
                  variant="secondary"
                  download={portfolioData.hero.ctas.tertiary.download}
                  className="gap-2"
                >
                  <Download className="h-4 w-4" />
                  {portfolioData.hero.ctas.tertiary.label}
                </CtaLink>
              </div>

              <div className="h-fade mt-8 flex flex-wrap gap-2">
                {portfolioData.hero.bottomPills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-border/55 bg-surface/75 px-3.5 py-1.5 text-xs font-medium text-foreground/65 backdrop-blur-xl"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="h-visual flex justify-center lg:justify-end">
              <div className="relative w-[17rem] shrink-0 sm:w-[19rem] lg:w-[21rem]">

                <div className="absolute -inset-6 rounded-[3rem] bg-[radial-gradient(circle,rgba(56,189,248,0.18),transparent_70%)] blur-2xl" />

                <div className="relative overflow-hidden rounded-[2.2rem] border border-border/60 bg-surface/90 p-4 shadow-premium backdrop-blur-xl">

                  <div className="mb-3 flex items-center justify-between rounded-full border border-border/50 bg-surface/70 px-4 py-2 backdrop-blur-xl">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary/80 shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                  </div>

                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-surface-strong">
                    <Image
                      src={portfolioData.profile.photo.src}
                      alt={portfolioData.profile.photo.alt}
                      fill
                      sizes="(max-width: 1024px) 304px, 336px"
                      className="object-cover"
                      style={{ objectPosition: portfolioData.profile.photo.objectPosition }}
                      priority
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.18),transparent_40%)]" />
                  </div>

                  <div className="mt-3 rounded-[1.2rem] border border-border/50 bg-surface/80 px-4 py-3 backdrop-blur-xl">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                      {portfolioData.hero.profileCard.eyebrow}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-foreground">
                      {portfolioData.profile.name}
                    </p>
                    <p className="mt-0.5 text-xs text-muted">
                      {portfolioData.hero.profileCard.description}
                    </p>
                  </div>
                </div>

                <div className="absolute -left-6 top-[22%] rounded-2xl border border-border/60 bg-surface/92 px-3.5 py-2.5 shadow-premium backdrop-blur-xl">
                  <p className="text-[11px] font-bold text-foreground">3 Systems</p>
                  <p className="text-[10px] text-muted">Built &amp; deployed</p>
                </div>
                <div className="absolute -right-6 bottom-[28%] rounded-2xl border border-border/60 bg-surface/92 px-3.5 py-2.5 shadow-premium backdrop-blur-xl">
                  <p className="text-[11px] font-bold text-foreground">Web + Mobile</p>
                  <p className="text-[10px] text-muted">Full stack</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
