"use client";

import Link from "next/link";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";
import { sitePaths, type SitePath } from "@/data/locales";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/site";
import { BrandLockup } from "@/components/layout/BrandLockup";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const languagePath = sitePaths.includes(pathname as SitePath) ? pathname as SitePath : "/";

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#061526] text-white">
      <Container className="site-header-row flex items-center justify-between gap-6">
        <BrandLockup />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="主导航">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative whitespace-nowrap py-2 text-[16px] transition-colors hover:text-white after:absolute after:inset-x-0 after:-bottom-2 after:h-px after:bg-gold ${active ? "text-white" : "text-white/80 after:hidden"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitch path={languagePath} locale="zh" />
          <div className="hidden lg:block">
            <ButtonLink href="/contact" ariaLabel="沟通出海需求">沟通出海需求</ButtonLink>
          </div>
          <button
            type="button"
            aria-label={open ? "关闭导航菜单" : "打开导航菜单"}
            onClick={() => setOpen(value => !value)}
            aria-expanded={open}
            aria-controls="inner-mobile-nav"
            className="inline-flex h-11 w-11 items-center justify-center border border-white/40 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-white/25 bg-[#061526] lg:hidden" id="inner-mobile-nav">
          <Container className="grid gap-2 py-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded px-2 py-3 text-base font-medium text-white hover:bg-white/10">
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/contact" ariaLabel="沟通出海需求" className="mt-2 justify-center">沟通出海需求</ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}