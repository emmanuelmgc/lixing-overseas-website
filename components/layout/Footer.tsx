import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navItems, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-rice py-12 text-sm text-gray-600">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <Link href="/" aria-label="LEXON 励行出海首页" className="mb-5 inline-flex">
              <img
                src="/images/lixing/logo-lexon-full.png"
                alt="LEXON 励行出海"
                className="h-24 w-auto"
              />
            </Link>
            <p className="max-w-md leading-7">帮助中国企业在进入中亚、法语区、东南亚等新兴市场前，完成机会验证、资源对接与落地路径判断。</p>
          </div>

          <div>
            <p className="mb-4 font-semibold text-navy">网站导航</p>
            <div className="grid grid-cols-2 gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-gold">{item.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-semibold text-navy">联系信息</p>
            <div className="space-y-3 leading-7">
              <p className="flex gap-2"><MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" />{site.contact.address}</p>
              <p className="flex gap-2"><Phone className="mt-1 h-4 w-4 shrink-0 text-gold" />{site.contact.phone}</p>
              <p>微信：{site.contact.wechat}</p>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-line pt-6 text-xs text-gray-500">© 2026 励行出海。案例涉及客户保密，官网默认采用匿名化项目表达。</div>
      </Container>
    </footer>
  );
}
