"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHomeHero = pathname === "/" && !scrolled && !open;
  const logoSrc = isHomeHero ? "/images/lixing/logo-lexon-header-light.png" : "/images/lixing/logo-lexon-header.png";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isHomeHero
          ? "border-b border-white/10 bg-[#071A2F]/[0.74] text-white backdrop-blur-md"
          : "border-b border-line/70 bg-white/[0.92] text-navy shadow-sm backdrop-blur"
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between py-3">
        <Link href="/" aria-label="LEXON 励行出海首页" className="flex items-center">
          <img
            src={logoSrc}
            alt="LEXON 励行出海"
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="主导航">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-2 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-2 after:h-px after:bg-gold after:transition-transform ${
                  active ? "after:scale-x-100" : "after:scale-x-0"
                } ${
                  isHomeHero
                    ? active
                      ? "text-white"
                      : "text-white/[0.78] hover:text-white"
                    : active
                      ? "text-navy"
                      : "text-gray-700 hover:text-gold"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" ariaLabel="预约出海诊断">预约出海诊断</ButtonLink>
        </div>

        <button
          type="button"
          aria-label={open ? "关闭导航菜单" : "打开导航菜单"}
          onClick={() => setOpen((value) => !value)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded border transition-colors lg:hidden ${
            isHomeHero
              ? "border-white/20 bg-white/[0.08] text-white"
              : "border-line bg-white text-navy"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-line bg-white lg:hidden">
          <Container className="grid gap-2 py-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded px-2 py-3 text-base font-medium text-navy hover:bg-mist">
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/contact" ariaLabel="预约出海诊断" className="mt-2 justify-center">预约出海诊断</ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}