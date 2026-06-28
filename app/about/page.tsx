import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "关于励行",
  description: "励行出海关注的不只是一次出访，而是一次出海判断。了解公司定位、服务区域、方法论和适合客户。",
};

export default function AboutPage() {
  const blocks = [
    { title: "公司定位", body: "面向中国企业的出海咨询与落地服务机构，帮助客户在进入新兴市场前完成判断、验证、对接和路径设计。" },
    { title: "服务区域", body: "重点深耕乌兹别克斯坦/中亚与法语区国家两个核心市场。不做泛出海，只服务我们能交付的区域。" },
    { title: "方法论", body: "先诊断问题，再设计考察与资源对接，最后把现场信息转化为机会清单、风险提示和下一步建议。" },
    { title: "适合客户", body: "中国企业董事长、总经理、海外业务负责人、投资负责人、产业项目负责人、企业家团组、商学院与行业协会。" },
    { title: "为什么选择励行", body: "我们关注资源是否能被项目调用、信息是否能被交叉验证、考察之后是否能继续落地。" },
  ];
  return (
    <>
      <HeroSection compact eyebrow="About" title="我们关注的不只是一次出访，而是一次出海判断" subtitle="励行出海把目的地选择、资源对接、商务考察和落地服务放进同一个判断流程里，帮助企业更稳地进入新兴市场。" image="/images/lixing/ppt-delegation-formal.webp" primary="联系励行" />
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeader title="关于励行出海" intro="我们不把官网做成口号集合，而是说明我们如何进入项目、如何形成判断、如何帮助客户走下一步。" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blocks.map((block) => (
              <article key={block.title} className="border border-line bg-white p-6">
                <h2 className="font-serif text-2xl font-semibold text-navy">{block.title}</h2>
                <p className="mt-4 leading-7 text-gray-600">{block.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CTASection title="如果你正在做一次重要的出海判断" primary="预约出海诊断" />
    </>
  );
}

