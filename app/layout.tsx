import type { Metadata, Viewport } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";

import { SiteFooter, SiteHeader } from "@/components/site";
import { SITE } from "@/lib/site";

import "./globals.css";

const serif = Source_Serif_4({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-serif", display: "swap" });
const sans = Source_Sans_3({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: { default: SITE.name, template: `%s · ${SITE.name}` },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: { title: SITE.name, description: SITE.description, siteName: SITE.name, type: "website" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF8F4" },
    { media: "(prefers-color-scheme: dark)", color: "#14191F" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="wrap">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
