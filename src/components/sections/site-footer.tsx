import { ArrowUp } from "lucide-react";

import { portfolioData } from "@/data/portfolio";
import { normalizeText } from "@/lib/utils";

import { CtaLink } from "../layout/cta-link";

export function SiteFooter() {
  return (
    <footer className="pb-12 pt-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="glass-panel flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              {portfolioData.profile.name}
            </p>
            <p className="mt-3 text-base leading-7 text-muted">{portfolioData.footer.tagline}</p>
            <p className="mt-4 text-sm text-muted">
              {normalizeText(portfolioData.footer.copyright)}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {portfolioData.contactSection.links.slice(0, 2).map((link) => (
              <CtaLink key={link.label} href={link.href} variant="secondary">
                {link.label}
              </CtaLink>
            ))}
            <CtaLink href="/#contact" variant="secondary">
              Contact
            </CtaLink>
            <CtaLink href="/#home" className="gap-2">
              <ArrowUp className="h-4 w-4" />
              {portfolioData.footer.backToTopLabel}
            </CtaLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
