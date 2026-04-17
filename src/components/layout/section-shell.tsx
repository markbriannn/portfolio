"use client";

import type { ReactNode } from "react";

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
  return (
    <section
      id={id}
      data-nav={navKey}
      className={cn("relative overflow-hidden py-24 sm:py-28 lg:py-32", className)}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-[6%] top-10 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl dark:bg-cyan-400/12"
        />
        <div
          className="absolute -right-12 top-1/3 h-52 w-52 rounded-full bg-emerald-300/8 blur-3xl dark:bg-emerald-400/10"
        />
        <div
          className="absolute inset-x-[12%] top-16 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent"
        />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className={cn("relative z-10", innerClassName)}>{children}</div>
      </div>
    </section>
  );
}
