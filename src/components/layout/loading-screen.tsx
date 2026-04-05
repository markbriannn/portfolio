"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { portfolioData } from "@/data/portfolio";

export function LoadingScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = window.sessionStorage.getItem("portfolio-loader-seen");

    if (seen) {
      return;
    }

    setVisible(true);
    const timeout = window.setTimeout(() => {
      setVisible(false);
      window.sessionStorage.setItem("portfolio-loader-seen", "true");
    }, 1350);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
          className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-[#09111d] text-white"
        >
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-lg font-semibold tracking-[0.18em] text-white/90 shadow-glow">
                {portfolioData.profile.initials}
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                  Loading Portfolio
                </p>
                <p className="mt-2 text-lg font-medium tracking-[-0.03em]">
                  {portfolioData.profile.name}
                </p>
              </div>
            </div>
            <div className="h-px w-56 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.05, ease: "easeInOut" }}
                className="h-full w-24 bg-gradient-to-r from-cyan-400/0 via-cyan-300 to-emerald-300/0"
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
