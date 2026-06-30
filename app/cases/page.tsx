import type { Metadata } from "next";
import { cases } from "@/data/cases";
import { CaseGrid } from "@/components/sections/CaseGrid";
import { CTASection } from "@/components/sections/CTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "案例",
  description: "看见真实问题、动作和阶段性结果。励行出海案例默认匿名呈现，覆盖中亚、法语区、欧洲商务考察与海外营销。",
};

export default function CasesPage() {
  return (
    <>
      <HeroSection compact eyebrow="Cases" title="看见真实问题、动作和阶段性结果" subtitle="敏感项目默认匿名呈现，不展示客户 Logo 墙，只展示客户问题、励行动作和当前结果。" image="/images/lixing/case-uz-park.webp" primary="聊聊你的出海问题" />
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeader title="项目档案" intro="按区域或服务类型筛选案例，查看客户问题、励行动作和阶段性结果。" />
          <CaseGrid items={cases} />
        </Container>
      </section>
      <CTASection title="你的项目处在哪个判断阶段？" primary="聊聊你的出海问题" />
    </>
  );
}
