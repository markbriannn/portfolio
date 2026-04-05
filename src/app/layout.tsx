import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { SiteShell } from "@/components/layout/site-shell";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { portfolioData } from "@/data/portfolio";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolioData.siteMeta.url),
  title: portfolioData.siteMeta.title,
  description: portfolioData.siteMeta.description,
  keywords: portfolioData.siteMeta.keywords,
  openGraph: {
    title: portfolioData.siteMeta.title,
    description: portfolioData.siteMeta.description,
    url: portfolioData.siteMeta.url,
    siteName: portfolioData.profile.name,
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.siteMeta.title,
    description: portfolioData.siteMeta.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
