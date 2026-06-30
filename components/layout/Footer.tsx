import Link from "next/link";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navItems, site } from "@/data/site";

// Footer 链接分组：分别对应"重点市场/服务方法/资源/关于"四大导航意图
const footerColumns = [
  {
    title: "重点市场",
    links: [
      { label: "乌兹别克斯坦 / 中亚", href: "/destinations/uzbekistan" },
      { label: "法语区国家", href: "/destinations/francophone-markets" },
      { label: "市场筛选方法", href: "/destinations" },
    ],
  },
  {
    title: "服务方法",
    links: [
      { label: "商务考察", href: "/services/business-visit" },
      { label: "落地服务", href: "/services/market-entry-support" },
      { label: "海外营销咨询", href: "/services/overseas-marketing" },
      { label: "全部服务", href: "/services" },
    ],
  },
  {
    title: "资源与案例",
    links: [
      { label: "项目案例", href: "/cases" },
      { label: "资源网络", href: "/resources" },
      { label: "关于励行", href: "/about" },
      { label: "联系预约", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#071A2F] text-white">
      {/* 顶部装饰：1px 金色细线，与首屏 Hero 的金色 eyebrow 呼应 */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" />

      {/* 背景极淡径向光晕（仅 footer 顶部，营造"被包裹"感） */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(215,180,118,0.08),transparent_60%)]"
        aria-hidden="true"
      />

      {/* LAYER 1 · 品牌主区 */}
      <Container className="relative pb-12 pt-20 md:pb-16 md:pt-24">
        <div className="grid gap-12 md:grid-cols-[1.1fr_2fr] md:gap-16">
          {/* 左：品牌主区 */}
          <div>
            <Link href="/" aria-label="LEXON 励行出海首页" className="inline-flex">
              <img
                src="/images/lixing/logo-lexon-full.png"
                alt="LEXON 励行出海"
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm text-[14.5px] leading-[1.7] text-white/70">
              {site.description}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.18em] text-gold">
              <span className="h-px w-6 bg-gold/60" />
              {site.slogan}
            </p>
          </div>

          {/* 右：3 列链接 */}
          <div className="grid gap-10 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-gold/80">
                  {col.title}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[14px] text-white/75 transition hover:text-gold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* LAYER 2 · 1px 细线分隔 */}
      <div className="border-t border-white/10" />

      {/* LAYER 3 · 联系信息 */}
      <Container className="relative py-8">
        <div className="flex flex-col gap-4 text-[13.5px] text-white/70 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-2">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{site.contact.address}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{site.contact.phone}</span>
            </p>
            <p className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>微信：{site.contact.wechat}</span>
            </p>
          </div>
          {/* 主导航快速跳转（移动端隐藏） */}
          <nav aria-label="Footer 导航" className="hidden md:block">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[13px] text-white/55">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>

      {/* LAYER 4 · 备案 + 版权 */}
      <div className="border-t border-white/10">
        <Container className="py-6">
          <div className="flex flex-col gap-2 text-[12px] text-white/45 md:flex-row md:items-center md:justify-between">
            <p>{site.legal.copyright}</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>{site.legal.icp}</span>
              <span aria-hidden="true">·</span>
              <Link href="/legal/privacy" className="transition hover:text-gold">
                隐私条款
              </Link>
              <span aria-hidden="true">·</span>
              <Link href="/legal/cookie" className="transition hover:text-gold">
                Cookie 说明
              </Link>
            </div>
          </div>
          <p className="mt-3 text-[11.5px] text-white/35">
            案例涉及客户保密，官网默认采用匿名化项目表达 · 励行出海专注商务考察、项目落地与海外营销咨询
          </p>
        </Container>
      </div>
    </footer>
  );
}
