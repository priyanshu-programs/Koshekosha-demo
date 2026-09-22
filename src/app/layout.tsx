import type { Metadata } from "next";
import { DM_Mono, Fraunces } from "next/font/google";
import { site } from "@/data/site";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./globals.css";

/*
 * The origin uses licensed faces — Auger Mono (body/UI) and Exposure Trial
 * (display). Those files are not redistributable, so these are the closest
 * free stand-ins: a geometric mono and a soft-serif with a similar warmth.
 * Swapping in the real fonts means changing only these two declarations,
 * because everything downstream reads --font-primary / --font-secondary.
 */
const monoBrand = DM_Mono({
  variable: "--font-mono-brand",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const serifBrand = Fraunces({
  variable: "--font-serif-brand",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Koshe Kosha — Authentic Bengali Cuisine | Kolkata",
    template: "%s — Koshe Kosha",
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Koshe Kosha — Authentic Bengali Cuisine | Kolkata",
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA">
      <body className={`${monoBrand.variable} ${serifBrand.variable}`}>
        <SiteHeader />
        <div className="wrap">
          <main className="main">{children}</main>
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
