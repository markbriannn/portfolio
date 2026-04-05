"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { ProjectCaseStudy } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type MockupFrameProps = {
  project: ProjectCaseStudy;
  className?: string;
  compact?: boolean;
};

export function MockupFrame({
  project,
  className,
  compact = false,
}: MockupFrameProps) {
  const imageMedia = project.media.filter((item) => item.imageSrc);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeMedia = imageMedia[activeImageIndex] ?? imageMedia[0];
  const panels = project.media.slice(0, compact ? 2 : 3);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project.slug]);

  useEffect(() => {
    if (imageMedia.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % imageMedia.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [imageMedia.length]);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 text-slate-100 shadow-premium",
        className,
      )}
      style={{
        backgroundImage: `linear-gradient(145deg, ${project.accent.from}1F, rgba(15, 23, 42, 0) 55%), linear-gradient(180deg, rgba(15, 23, 42, 0.92), rgba(10, 15, 26, 0.98))`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_24%),linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:auto,32px_32px,32px_32px] opacity-30" />
      <div className="relative p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
          </div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-300/70">
            {project.category}
          </p>
        </div>

        <div className="mt-5 space-y-4">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-300/65">Live workflow</p>
            <div className="mt-3 flex items-end justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300/80">
                  {project.summary}
                </p>
              </div>
              {activeMedia?.imageSrc ? (
                <div className="relative hidden h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-slate-950 sm:block">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeMedia.imageSrc}
                      initial={{ opacity: 0.3, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0.2, scale: 0.98 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={activeMedia.imageSrc}
                        alt={activeMedia.imageAlt ?? activeMedia.title}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              ) : (
                <div
                  className="hidden h-16 w-16 rounded-2xl border border-white/10 sm:block"
                  style={{
                    background: `linear-gradient(135deg, ${project.accent.from}, ${project.accent.to})`,
                  }}
                />
              )}
            </div>
          </div>

          {activeMedia?.imageSrc ? (
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/80">
              <div className="relative aspect-[16/10]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMedia.imageSrc}
                    initial={{ opacity: 0.3, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.18, scale: 0.985 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeMedia.imageSrc}
                      alt={activeMedia.imageAlt ?? activeMedia.title}
                      fill
                      sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 30rem, 100vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.72),rgba(2,6,23,0.06)_55%,rgba(2,6,23,0.16))]" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/55 p-4 backdrop-blur-xl">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-300/60">
                      {activeMedia.stat}
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">{activeMedia.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300/80">
                      {activeMedia.caption}
                    </p>
                  </div>
                </div>
                {imageMedia.length > 1 ? (
                  <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/45 px-3 py-1.5 backdrop-blur-xl">
                    {imageMedia.map((item, index) => (
                      <span
                        key={item.title}
                        className={cn(
                          "h-1.5 rounded-full transition-all duration-300",
                          index === activeImageIndex ? "w-5 bg-white" : "w-1.5 bg-white/40",
                        )}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}

          <div className={cn("grid gap-3", compact ? "sm:grid-cols-2" : "sm:grid-cols-3")}>
            {panels.map((panel) => (
              <div
                key={panel.title}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4"
              >
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-300/55">
                  {panel.stat}
                </p>
                <p className="mt-3 text-sm font-medium text-white">{panel.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300/75">{panel.caption}</p>
              </div>
            ))}
          </div>

          {!compact ? (
            <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-300/55">
                  Role
                </p>
                <p className="mt-3 text-base font-medium text-white">{project.role}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300/75">{project.result}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-300/55">
                  Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200/85"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
