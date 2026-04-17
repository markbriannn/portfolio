"use client";

import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion || !rootRef.current) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(rootRef.current);

    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <div
      ref={rootRef}
      className={className}
      style={
        reduceMotion
          ? undefined
          : {
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0px)" : `translateY(${y}px)`,
              transition: `opacity 720ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 720ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
              willChange: isVisible ? "auto" : "opacity, transform",
            }
      }
    >
      {children}
    </div>
  );
}
