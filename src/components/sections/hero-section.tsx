"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Download } from "lucide-react";
import { useLayoutEffect, useRef } from "react";

import { portfolioData } from "@/data/portfolio";

import { CtaLink } from "../layout/cta-link";
import { HeroPortraitCard } from "./hero-portrait-card";

export function HeroSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reduceMotion || !rootRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.to(".hero-decor-one", {
        yPercent: -22,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.to(".hero-decor-two", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.to(".hero-decor-three", {
        yPercent: -18,
        xPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      gsap.to(".hero-copy", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.75,
        },
      });

      gsap.to(".hero-visual-shell", {
        yPercent: -14,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.75,
        },
      });

      gsap.to(".hero-scroll-cue", {
        yPercent: -22,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 15%",
          end: "bottom top",
          scrub: 0.75,
        },
      });

      gsap.to(".hero-trust-strip", {
        yPercent: -14,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 20%",
          end: "bottom top",
          scrub: 0.75,
        },
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => context?.revert();
  }, [reduceMotion]);

  return (
    <section
      id="home"
      data-nav="home"
      ref={rootRef}
      className="relative overflow-hidden pb-14 pt-24 sm:pt-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-border/60 bg-hero-radial shadow-premium">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_44%),linear-gradient(135deg,rgba(255,255,255,0.035),transparent_42%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_44%),linear-gradient(135deg,rgba(255,255,255,0.035),transparent_42%)]" />
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_45%)] lg:block" />
          <div className="hero-decor-three absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.12),transparent_52%),radial-gradient(circle_at_76%_12%,rgba(56,189,248,0.12),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0))] opacity-80" />
          <div className="relative grid min-h-[calc(100svh-8rem)] gap-10 px-6 py-8 sm:px-8 md:px-10 lg:grid-cols-[1.02fr_0.98fr] lg:px-12 lg:py-10">
            <div className="hero-copy flex min-h-full flex-col">
              <div className="flex flex-1 flex-col justify-center">
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-flex w-fit rounded-full border border-border/60 bg-surface/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-muted backdrop-blur-xl"
                >
                  {portfolioData.hero.eyebrow}
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-foreground sm:text-6xl lg:text-7xl"
                >
                  {portfolioData.hero.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.72, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-5 max-w-3xl text-2xl font-medium leading-[1.25] text-foreground/88 sm:text-3xl"
                >
                  {portfolioData.profile.title}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.72, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-5 max-w-3xl text-lg leading-8 text-foreground/85 sm:text-xl"
                >
                  {portfolioData.hero.subtitle}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.72, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg"
                >
                  {portfolioData.hero.supportingText}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.72, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-8 flex flex-wrap gap-3"
                >
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
                </motion.div>
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="hero-visual-shell relative w-full max-w-[34rem]">
                <div className="hero-decor-one absolute -left-6 top-10 h-32 w-32 rounded-full bg-cyan-300/15 blur-3xl dark:bg-cyan-400/20" />
                <div className="hero-decor-two absolute -right-6 bottom-10 h-40 w-40 rounded-full bg-emerald-300/10 blur-3xl dark:bg-emerald-400/15" />
                <HeroPortraitCard />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hero-scroll-cue relative px-6 pb-8 sm:px-8 md:px-10 lg:px-12 lg:pb-10"
          >
            <motion.a
              href="#projects"
              whileHover={reduceMotion ? undefined : { x: 4 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="group inline-flex items-center gap-4 text-sm text-muted"
              aria-label="Scroll to featured projects"
            >
              <span className="relative flex h-[4.5rem] w-10 shrink-0 items-start justify-center">
                <span className="absolute left-1/2 top-0 flex h-[3.35rem] w-[1.85rem] -translate-x-1/2 justify-center rounded-full border-2 border-foreground/25 bg-surface/55 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                  <motion.span
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            y: [6, 18, 6],
                            opacity: [1, 0.3, 1],
                          }
                    }
                    transition={
                      reduceMotion
                        ? undefined
                        : {
                            duration: 1.8,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }
                    }
                    className="mt-2.5 h-3 w-1.5 rounded-full bg-foreground/70"
                  />
                </span>
                <span className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center">
                  {[0, 1].map((index) => (
                    <motion.span
                      key={index}
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              y: [0, 5, 0],
                              opacity: [0.18, 1, 0.18],
                            }
                      }
                      transition={
                        reduceMotion
                          ? undefined
                          : {
                              duration: 1.5,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                              delay: index * 0.18,
                            }
                      }
                      className={index === 0 ? "" : "-mt-1.5"}
                    >
                      <ChevronDown className="h-4 w-4 text-foreground/45 transition-colors duration-300 group-hover:text-primary" />
                    </motion.span>
                  ))}
                </span>
              </span>
              <motion.span
                animate={reduceMotion ? undefined : { opacity: [0.7, 1, 0.7] }}
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: 2.2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }
                }
              >
                Scroll to explore projects, proof, and hiring details.
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        <div className="hero-trust-strip mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {portfolioData.trustMetrics.map((metric, index) => (
            <motion.div
              key={metric.value}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass-panel p-5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {metric.value}
              </p>
              <p className="mt-3 text-lg font-semibold text-foreground">{metric.label}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{metric.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
