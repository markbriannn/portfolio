"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { useEffect, useState } from "react";

import { portfolioData } from "@/data/portfolio";

import { CtaLink } from "./cta-link";

export function StickyHireCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");

    if (!hero) {
      setIsVisible(true);
      return;
    }

    let frameId = 0;

    const updateVisibility = () => {
      const rect = hero.getBoundingClientRect();
      const hideThreshold = window.innerHeight * 0.72;
      const heroStillDominant = rect.bottom > hideThreshold;

      setIsVisible(!heroStillDominant);
    };

    const handleViewportChange = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();

    window.addEventListener("scroll", handleViewportChange, { passive: true });
    window.addEventListener("resize", handleViewportChange);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleViewportChange);
      window.removeEventListener("resize", handleViewportChange);
    };
  }, []);

  return (
    <motion.div
      initial={false}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 18,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 right-6 z-40 hidden xl:block"
      aria-hidden={!isVisible}
    >
      <div className="rounded-[28px] border border-border/60 bg-surface/85 p-4 shadow-premium backdrop-blur-2xl">
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground text-background dark:bg-white dark:text-slate-950">
            <BriefcaseBusiness className="h-5 w-5" />
          </div>
          <div className="max-w-[15rem]">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Hire Ready</p>
            <p className="mt-2 text-sm leading-6 text-foreground/90">
              {portfolioData.profile.availability}
            </p>
          </div>
        </div>
        <CtaLink href="/#contact" className="mt-4 w-full justify-between">
          Start a conversation
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </CtaLink>
      </div>
    </motion.div>
  );
}
