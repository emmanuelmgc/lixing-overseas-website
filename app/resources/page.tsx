import type { Metadata } from "next";
import { resources } from "@/data/resources";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { CTASection } from "@/components/sections/CTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ResourceNetwork } from "@/components/sections/ResourceNetwork";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "资源网络",
  description: "资源不是名单，而是能被项目调用的连接。查看励行出海如何把政府、园区、商协会、专业机构与媒体活动资源放入项目流程。",
};

export default function ResourcesPage() {
  return (
    <>
      <HeroSection compact eyebrow="Resources" title="资源不是名单，而是能被项目调用的连接" subtitle="我们不做普通 Logo 墙，而是把资源放进机会验证、合作方筛选、落地判断和市场测试流程里。" image="/images/lixing/ppt-boardroom-dialogue.webp" primary="告诉我们你需要哪类资源" />
      <section className="py-16 md:py-24"><Container><ResourceNetwork /></Container></section>
      <section className="bg-mist py-16 md:py-24">
        <Container>
          <SectionHeader title="资源类型分组" intro="每类资源都对应清晰的使用场景和可交付形式。" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{resources.map((resource) => <ResourceCard key={resource.type} resource={resource} />)}</div>
        </Container>
      </section>
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeader title="资源如何进入项目流程" />
          <div className="mt-10"><ProcessTimeline /></div>
        </Container>
      </section>
      <CTASection title="你需要哪一类在地资源？" primary="告诉我们你的资源需求" />
    </>
  );
}

