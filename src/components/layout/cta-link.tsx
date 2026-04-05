import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn, isExternalHref } from "@/lib/utils";

const variants = {
  primary:
    "border-transparent bg-foreground text-background shadow-glow hover:-translate-y-0.5 hover:bg-primary/90 hover:text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100",
  secondary:
    "border-border/70 bg-surface/75 text-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-strong/90",
  ghost:
    "border-transparent bg-transparent text-foreground/80 hover:-translate-y-0.5 hover:text-foreground",
};

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  download?: boolean;
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;

export function CtaLink({
  href,
  children,
  variant = "primary",
  className,
  download,
  external,
  ...props
}: CtaLinkProps) {
  const isExternal = external ?? isExternalHref(href);
  const classes = cn(
    "inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-medium tracking-[0.02em] transition duration-300",
    variants[variant],
    className,
  );

  if (download || isExternal) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        target={isExternal && !download ? "_blank" : undefined}
        rel={isExternal && !download ? "noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
