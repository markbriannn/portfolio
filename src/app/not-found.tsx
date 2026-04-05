import { ArrowLeft } from "lucide-react";

import { CtaLink } from "@/components/layout/cta-link";
import { SectionShell } from "@/components/layout/section-shell";

export default function NotFound() {
  return (
    <main className="pb-24 pt-28">
      <SectionShell innerClassName="rounded-[2rem] border border-border/60 bg-surface/75 p-10 shadow-premium backdrop-blur-2xl sm:p-14">
        <span className="inline-flex rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
          Not Found
        </span>
        <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
          The page you&apos;re looking for isn&apos;t available.
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
          The requested project or route could not be found. You can return to the
          homepage and continue browsing the portfolio from there.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <CtaLink href="/" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </CtaLink>
          <CtaLink href="/#projects" variant="secondary">
            View projects
          </CtaLink>
        </div>
      </SectionShell>
    </main>
  );
}
