"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useLayoutEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  navKey?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

export function SectionShell({
  id,
  navKey,
  className,
  innerClassName,
  children,
}: SectionShellProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (reduceMotion || !rootRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const parallaxItems = gsap.utils.toArray<HTMLElement>("[data-parallax-speed]");

      parallaxItems.forEach((item) => {
        const speed = Number(item.dataset.parallaxSpeed ?? 0);

        gsap.to(item, {
          y: speed,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => context?.revert();
  }, [reduceMotion]);

  return (
    <section
      ref={rootRef}
      id={id}
      data-nav={navKey}
      className={cn("relative overflow-hidden py-24 sm:py-28 lg:py-32", className)}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          data-parallax-speed="-56"
          className="absolute left-[6%] top-10 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl dark:bg-cyan-400/12"
        />
        <div
          data-parallax-speed="72"
          className="absolute -right-12 top-1/3 h-52 w-52 rounded-full bg-emerald-300/8 blur-3xl dark:bg-emerald-400/10"
        />
        <div
          data-parallax-speed="-32"
          className="absolute inset-x-[12%] top-16 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent"
        />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className={cn("relative z-10", innerClassName)}>{children}</div>
      </div>
    </section>
  );
}
