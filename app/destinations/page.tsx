import type { Metadata } from "next";
import { cases } from "@/data/cases";
import { destinations, industryMatrix } from "@/data/destinations";
import { CaseCard } from "@/components/cards/CaseCard";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { CTASection } from "@/components/sections/CTASection";
import { DestinationMap } from "@/components/sections/DestinationMap";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "目的地总览",
  description: "选择市场，比盲目出海更重要。了解乌兹别克斯坦/中亚、法语区国家、东南亚及其他新兴市场的进入路径。",
};

export default function DestinationsPage() {
  return (
    <>
      <HeroSection compact eyebrow="Destinations" title="选择市场，比盲目出海更重要" subtitle="励行帮助企业先判断区域是否适合行业、预算和当前阶段，再设计商务考察、资源对接与落地路径。" image="/images/lixing/ppt-site-visit.webp" primary="预约市场筛选" />
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <DestinationMap />
            <div className="grid gap-4 sm:grid-cols-2">
              {destinations.map((destination) => <DestinationCard key={destination.title} destination={destination} />)}
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-mist py-16 md:py-24">
        <Container>
          <SectionHeader title="适合行业矩阵" intro="先把行业、区域和需要判断的问题放在一张表里，再决定是否进入现场考察。" />
          <div className="mt-10 overflow-hidden border border-line bg-white">
            {industryMatrix.map((row) => (
              <div key={row.join("-")} className="grid gap-4 border-b border-line p-5 last:border-b-0 md:grid-cols-3">
                {row.map((cell) => <p key={cell} className="text-gray-700 first:font-semibold first:text-navy">{cell}</p>)}
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeader title="相关案例" intro="案例默认匿名，重点呈现客户问题、励行动作和当前结果。" />
          <div className="mt-10 grid gap-5 xl:grid-cols-2">{cases.slice(0, 2).map((item) => <CaseCard key={item.title} item={item} />)}</div>
        </Container>
      </section>
      <CTASection title="还没有确定国家？先做市场筛选" primary="预约市场筛选" />
    </>
  );
}

