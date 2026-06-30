import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "隐私条款",
  description: "励行出海 (LEXON Overseas) 隐私条款：说明我们如何收集、使用、存储与保护用户信息。",
};

export default function PrivacyPage() {
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
            <h1 className="mt-3 font-serif text-4xl font-semibold text-navy md:text-5xl">隐私条款</h1>
            <p className="mt-4 text-[14px] text-gray-500">最后更新：2026 年 1 月</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="prose prose-lg max-w-3xl space-y-6 text-[15px] leading-[1.85] text-gray-700">
            <p>
              励行出海（以下简称「我们」）非常重视您的隐私。本条款说明我们在您访问我们的网站、与我们联系或使用我们的服务时，
              如何收集、使用、存储和保护您的个人信息。
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy">一、信息收集范围</h2>
            <p>
              当您通过官网联系表单、邮件或电话与我们沟通时，我们可能收集以下信息：
              您的姓名、所在企业及职位、联系电话、邮箱、微信、咨询内容以及您主动提供的其他信息。
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy">二、信息使用方式</h2>
            <p>我们仅在以下范围内使用您的信息：</p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>回复您的咨询、提供对应的出海咨询与落地服务</li>
              <li>与您约定的市场筛选、商务考察、落地服务及海外营销咨询沟通</li>
              <li>履行法律法规规定的义务</li>
            </ul>
            <p>我们不会将您的信息用于未经您同意的其他目的，也不会向第三方出售或转让您的个人信息。</p>

            <h2 className="font-serif text-2xl font-semibold text-navy">三、信息存储与保护</h2>
            <p>
              我们使用业内通用的安全措施保护您的个人信息，避免未经授权的访问、披露或破坏。
              我们仅在为实现本条款所述目的所必需的最短期限内保留您的个人信息。
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy">四、您的权利</h2>
            <p>您有权随时联系我们查询、更正或删除我们持有的关于您的个人信息。</p>

            <h2 className="font-serif text-2xl font-semibold text-navy">五、条款更新</h2>
            <p>
              我们可能根据业务调整或法律法规变化更新本条款。更新后的条款一经在本网站发布即视为正式生效。
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy">六、联系我们</h2>
            <p>如对本条款有任何疑问，请通过以下方式联系我们：</p>
            <ul className="list-none space-y-1.5">
              <li>电话：（+86）13631333154</li>
              <li>地址：广州市天河区临江大道5号保利中心2302</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
