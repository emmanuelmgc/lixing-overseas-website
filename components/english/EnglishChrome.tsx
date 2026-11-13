"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";
import { sitePaths, type SitePath } from "@/data/locales";

const links = [
  ["/en/destinations", "Markets"],
  ["/en/services", "Services"],
  ["/en/cases", "Projects"],
  ["/en/resources", "Resources"],
  ["/en/about", "About"],
];

function EnglishBrand() {
  return (
    <Link href="/en" className="en-brand" aria-label="LEXON Overseas homepage">
      <img src="/images/lixing/lexon-mountain.png" width={124} height={54} alt="" />
      <span>LEXON Overseas</span>
    </Link>
  );
}

export function EnglishHeader() {
  const pathname = usePathname();
  const unprefixed = pathname.slice(3) || "/";
  const path = sitePaths.includes(unprefixed as SitePath) ? unprefixed as SitePath : "/";

  return (
    <header className="en-header">
      <div className="en-shell en-header-row">
        <EnglishBrand />
        <nav className="en-desktop-nav" aria-label="Main navigation">
          {links.map(([href, label]) => (
            <Link key={href} href={href} aria-current={pathname === href || pathname.startsWith(href + "/") ? "page" : undefined}>{label}</Link>
          ))}
        </nav>
        <div className="en-header-actions">
          <LanguageSwitch path={path} locale="en" />
          <Link href="/en/contact" className="en-header-contact">Contact us</Link>
          <details className="en-mobile-menu" key={pathname}>
            <summary aria-label="Navigation menu"><Menu size={21} aria-hidden="true" /></summary>
            <nav className="en-shell" aria-label="Mobile navigation">
              {links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
              <Link href="/en/contact">Contact us</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

export function EnglishFooter() {
  return (
    <footer className="en-footer">
      <div className="en-shell en-footer-grid">
        <div>
          <EnglishBrand />
          <p>Market assessment and project support in Central Asia and Francophone markets.</p>
        </div>
        <nav aria-label="Footer navigation">
          {links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/en/contact">Contact us</Link>
        </nav>
        <nav aria-label="Legal information">
          <Link href="/en/legal/privacy">Privacy policy</Link>
          <Link href="/en/legal/cookie">Cookie notice</Link>
        </nav>
      </div>
    </footer>
  );
}
