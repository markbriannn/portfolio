"use client";

import type { ReactNode } from "react";

import { LoadingScreen } from "./loading-screen";
import { ScrollProgress } from "./scroll-progress";
import { SiteHeader } from "./site-header";
import { StickyHireCta } from "./sticky-hire-cta";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <SiteHeader />
      <StickyHireCta />
      {children}
    </>
  );
}
