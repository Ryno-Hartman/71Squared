import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";

const siteUrl = process.env.DEPLOY_PRIME_URL ?? process.env.URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "71Squared | Commercial specialists", template: "%s | 71Squared" },
  description: "Construction, flooring and plumbing for commercial environments built to move business forward.",
  openGraph: {
    title: "71Squared | Commercial specialists",
    description: "We build the spaces where business moves forward.",
    images: [{ url: "/og.png", width: 1536, height: 909, alt: "71Squared commercial architecture" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0C0D",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
