"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { portfolioData } from "@/data/portfolio";

export function HeroPortraitCard() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden rounded-[2.55rem] border border-border/60 bg-surface/82 p-5 shadow-premium sm:p-6 lg:min-h-[34rem] lg:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(255,255,255,0.58),transparent_26%),radial-gradient(circle_at_80%_18%,rgba(56,189,248,0.10),transparent_24%),radial-gradient(circle_at_74%_78%,rgba(56,189,248,0.08),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] dark:bg-[radial-gradient(circle_at_20%_16%,rgba(255,255,255,0.06),transparent_26%),radial-gradient(circle_at_80%_18%,rgba(56,189,248,0.10),transparent_24%),radial-gradient(circle_at_74%_78%,rgba(56,189,248,0.08),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(to_right,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.14)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="absolute left-[12%] top-[12%] h-60 w-60 rounded-full border border-sky-200/35 opacity-55 dark:border-white/10 dark:opacity-35" />
      <div className="absolute right-[10%] top-[14%] h-24 w-24 rounded-[1.8rem] border border-primary/25 bg-surface/42 backdrop-blur-xl" />
      <div className="absolute bottom-[12%] left-[10%] h-28 w-28 rounded-full bg-sky-300/10 blur-3xl dark:bg-sky-400/10" />
      <div className="absolute bottom-[10%] right-[12%] h-20 w-20 rounded-full border border-border/50 bg-surface/40 backdrop-blur-xl" />

      <div className="relative flex h-full min-h-[26rem] items-center justify-center">
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -8, 0],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 6.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }
          }
          whileHover={
            reduceMotion
              ? undefined
              : {
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 34px 90px -46px rgba(15,23,42,0.34)",
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 22,
                  },
                }
          }
          className="relative w-full max-w-[20rem] overflow-hidden rounded-[2.2rem] border border-border/60 bg-surface/92 p-3 shadow-[0_28px_80px_-46px_rgba(15,23,42,0.30)] sm:max-w-[22rem] lg:max-w-[23rem]"
        >
          <div className="absolute inset-x-3 top-3 z-10 flex items-center justify-between rounded-full border border-border/55 bg-surface/75 px-4 py-2 backdrop-blur-xl">
            <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] bg-surface-strong">
            <Image
              src={portfolioData.profile.photo.src}
              alt={portfolioData.profile.photo.alt}
              fill
              unoptimized
              sizes="(max-width: 1024px) 320px, 368px"
              className="object-cover"
              style={{ objectPosition: portfolioData.profile.photo.objectPosition }}
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.22),transparent_38%,transparent)]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
