"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, ScanFace } from "lucide-react";
import { useState } from "react";

import { portfolioData } from "@/data/portfolio";

export function HeroPortraitCard() {
  const [imageFailed, setImageFailed] = useState(false);
  const photo = portfolioData.profile.photo;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="glass-panel relative overflow-hidden p-4 sm:p-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.14),transparent_35%)]" />
      <div className="relative">
        <div className="rounded-[2rem] border border-border/60 bg-slate-950 p-4 text-white shadow-premium sm:p-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs uppercase tracking-[0.24em] text-slate-300/60">
              Profile Presentation
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-200/80">
              {photo.badge}
            </span>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.04fr_0.78fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04]">
              <div className="relative mx-auto aspect-[4/5] min-h-[24rem] max-w-[22rem] sm:min-h-[30rem] sm:max-w-[24rem] lg:h-full lg:min-h-[31rem] lg:max-w-none lg:aspect-auto">
                {!imageFailed ? (
                  <>
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      priority
                      sizes="(min-width: 1024px) 28rem, 100vw"
                      className="object-cover"
                      style={{ objectPosition: photo.objectPosition }}
                      onError={() => setImageFailed(true)}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.65),rgba(2,6,23,0.05)_50%,rgba(2,6,23,0.25))]" />
                  </>
                ) : (
                  <div className="flex h-full w-full flex-col justify-between bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_35%),linear-gradient(180deg,rgba(2,6,23,0.98),rgba(15,23,42,0.98))] p-5">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-300/75">
                        Portrait fallback
                      </span>
                      <ScanFace className="h-4 w-4 text-slate-300/65" />
                    </div>
                    <div>
                      <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 text-2xl font-semibold tracking-[0.16em] text-white shadow-glow">
                        {portfolioData.profile.initials}
                      </div>
                      <p className="mt-5 text-sm leading-6 text-slate-300/80">{photo.caption}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="absolute inset-x-0 bottom-0 p-3">
                <div className="max-w-[16rem] rounded-[1.25rem] border border-white/10 bg-slate-950/60 p-3 backdrop-blur-xl">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-300/60">
                    {portfolioData.profile.title}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-6 text-white sm:text-base">
                    {portfolioData.profile.name}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-3 sm:col-span-2 lg:col-span-1">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-300/60">
                  Visual note
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200/85">
                  {portfolioData.hero.visualCaption}
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <GraduationCap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-300/60">
                      Education
                    </p>
                    <p className="mt-2 text-sm font-medium leading-5 text-white">
                      Saint Joseph College - Maasin City, Southern Leyte
                    </p>
                    <p className="mt-1 text-sm leading-5 text-slate-300/80">
                      Bachelor of Science in Information Technology
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-2 rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-3">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-300/60">
                  {portfolioData.hero.visualTitle}
                </p>
                <div className="mt-3 grid gap-2">
                  {portfolioData.hero.visualHighlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1rem] border border-white/10 bg-white/[0.04] px-3 py-2 text-sm leading-5 text-slate-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
