import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { seo, site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: seo.homeTitle,
    template: `%s｜${site.name}`,
  },
  description: seo.homeDescription,
  keywords: ["出海咨询", "商务考察", "乌兹别克斯坦出海", "中亚投资考察", "法语区市场", "北非市场进入", "西非市场进入", "海外落地服务", "海外营销咨询", "政府资源对接", "海外园区考察"],
  icons: {
    icon: "/images/lixing/logo-mark.png",
    apple: "/images/lixing/logo-mark.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}


