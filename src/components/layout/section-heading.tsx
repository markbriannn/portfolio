"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { useMemo, useRef } from "react";

import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const titleWords = useMemo(() => title.split(" "), [title]);
  const hiddenStyle = reduceMotion ? undefined : { transform: "translateY(24px)" };

  useGSAP(
    () => {
      if (reduceMotion || !rootRef.current) {
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 82%",
          once: true,
        },
        defaults: {
          duration: 0.8,
          ease: "power3.out",
        },
      });

      timeline
        .fromTo(
          ".section-heading-eyebrow",
          { y: 22 },
          { y: 0, clearProps: "transform" },
        )
        .fromTo(
          ".section-heading-word",
          { y: 32, rotateX: 14 },
          { y: 0, rotateX: 0, stagger: 0.05, clearProps: "transform" },
          0.08,
        )
        .fromTo(
          ".section-heading-description",
          { y: 20 },
          { y: 0, clearProps: "transform" },
          0.22,
        );
    },
    {
      scope: rootRef,
      dependencies: [reduceMotion, title],
      revertOnUpdate: true,
    },
  );

  return (
    <div
      ref={rootRef}
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}
    >
      <span
        style={hiddenStyle}
        className="section-heading-eyebrow inline-flex rounded-full border border-border/70 bg-surface/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-muted backdrop-blur-xl"
      >
        {eyebrow}
      </span>
      <h2
        aria-label={title}
        className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl"
      >
        {titleWords.map((word, index) => (
          <span
            key={`${word}-${index}`}
            aria-hidden="true"
            style={hiddenStyle}
            className={cn(
              "section-heading-word inline-block",
              index !== titleWords.length - 1 && "mr-[0.22em]",
            )}
          >
            {word}
          </span>
        ))}
      </h2>
      <p
        style={hiddenStyle}
        className="section-heading-description mt-4 text-base leading-7 text-muted sm:text-lg"
      >
        {description}
      </p>
    </div>
  );
}
