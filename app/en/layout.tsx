import type { Metadata } from "next";
import { EnglishHeader, EnglishFooter } from "@/components/english/EnglishChrome";
import { getSiteOrigin } from "@/data/locales";
import "../globals.css";
import "../home.css";
import "./english.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteOrigin()),
  title: { default: "LEXON Overseas", template: "%s | LEXON Overseas" },
  description: "Market assessment, business visits and project support in Central Asia and Francophone markets.",
  icons: { icon: "/images/lixing/logo-mark.png", apple: "/images/lixing/logo-mark.png" },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="en-site font-sans antialiased">
        <a className="en-skip" href="#main">Skip to content</a>
        <EnglishHeader />
        {children}
        <EnglishFooter />
      </body>
    </html>
  );
}
