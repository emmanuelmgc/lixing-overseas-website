import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Cookie 说明",
  description: "励行出海 (LEXON Overseas) 关于在官网上使用 Cookie 与同类技术的说明。",
};

export default function CookiePage() {
  return (
    <>
      <section className="bg-[#FAFAF8] py-16 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <Link href="/" className="inline-flex items-center gap-1.5 text-[13px] text-gray-600 hover:text-gold">
              <ArrowLeft className="h-3.5 w-3.5" />
              返回首页
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Legal</p>
            <h1 className="mt-3 font-serif text-4xl font-semibold text-navy md:text-5xl">Cookie 说明</h1>
            <p className="mt-4 text-[14px] text-gray-500">最后更新：2026 年 1 月</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="prose prose-lg max-w-3xl space-y-6 text-[15px] leading-[1.85] text-gray-700">
            <p>
              本网站使用 Cookie 和同类技术为您提供更流畅、更安全的访问体验。本说明解释我们使用的 Cookie 类型及其用途。
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy">一、什么是 Cookie</h2>
            <p>
              Cookie 是您访问网站时存储在您设备上的小型文本文件。它们帮助我们识别您的浏览器、记住您的偏好，
              并为您提供更个性化的体验。
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy">二、我们使用的 Cookie 类型</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>必要 Cookie</strong>：保证网站基础功能（如页面路由、安全验证）的正常运行，无法关闭。
              </li>
              <li>
                <strong>分析 Cookie</strong>：用于了解访问者如何使用本网站，帮助我们持续改进内容质量与浏览体验。
                所有数据均为匿名聚合数据，不包含任何可识别个人身份的信息。
              </li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold text-navy">三、如何管理 Cookie</h2>
            <p>
              您可以通过浏览器设置随时清除已存储的 Cookie，或阻止网站存储新的 Cookie。请注意，
              如果您禁用部分 Cookie，可能导致网站部分功能无法正常使用。
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy">四、联系我们</h2>
            <p>如对本说明有任何疑问，请通过官网联系页面与我们取得联系。</p>
          </div>
        </Container>
      </section>
    </>
  );
}
