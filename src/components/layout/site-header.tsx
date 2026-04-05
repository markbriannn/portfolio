"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

import { CtaLink } from "./cta-link";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = useMemo(
    () =>
      portfolioData.navItems.map((item) => ({
        ...item,
        href: isHome ? item.href : `/${item.href}`,
      })),
    [isHome],
  );

  useEffect(() => {
    const updateState = () => {
      setScrolled(window.scrollY > 18);
    };

    updateState();
    window.addEventListener("scroll", updateState, { passive: true });

    return () => window.removeEventListener("scroll", updateState);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setActive("home");
      return;
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav]"),
    );

    const updateActiveSection = () => {
      const focusLine = window.innerHeight * 0.33;
      let nextActive = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const navKey = section.dataset.nav;

        if (!navKey) {
          return;
        }

        if (rect.top <= focusLine && rect.bottom >= focusLine) {
          nextActive = navKey;
        }
      });

      setActive(nextActive);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [isHome]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition duration-300 sm:px-5",
          scrolled
            ? "border-border/65 bg-surface/82 shadow-premium backdrop-blur-2xl"
            : "border-transparent bg-transparent",
        )}
      >
        <Link
          href={isHome ? "#home" : "/#home"}
          className="flex items-center gap-3 rounded-full"
          onClick={() => setOpen(false)}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-surface/80 text-sm font-semibold tracking-[0.18em] text-foreground shadow-glow">
            {portfolioData.profile.initials}
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-foreground">{portfolioData.profile.name}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              {portfolioData.profile.title}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition duration-300",
                active === item.navKey && isHome
                  ? "bg-foreground text-background dark:bg-white dark:text-slate-950"
                  : "text-muted hover:bg-surface/70 hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden sm:inline-flex" />
          <CtaLink href={isHome ? "#contact" : "/#contact"} className="hidden lg:inline-flex">
            Contact Me
          </CtaLink>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-surface/80 text-foreground backdrop-blur-xl lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-border/60 bg-surface/90 p-4 shadow-premium backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground/85 transition hover:bg-surface-strong/90"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex items-center gap-3">
              <ThemeToggle />
              <CtaLink href={isHome ? "#contact" : "/#contact"} className="flex-1">
                Contact Me
              </CtaLink>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
