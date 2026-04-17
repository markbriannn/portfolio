"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";
import type { ReactNode } from "react";

function LenisScrollSync() {
  useLenis(() => {
    ScrollTrigger.update();
  }, []);

  return null;
}

export function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.085,
        duration: 1.05,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 1,
      }}
    >
      <LenisScrollSync />
      {children}
    </ReactLenis>
  );
}
