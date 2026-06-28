import type { Metadata } from "next";
import { destinationDetails } from "@/data/destinations";
import { cases } from "@/data/cases";
import { CaseCard } from "@/components/cards/CaseCard";
import { CTASection } from "@/components/sections/CTASection";
import { DetailBlocks } from "@/components/sections/DetailBlocks";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "法语区国家",
  description: "以法国为窗口，测试北非、西非法语区市场。适合消费品牌、教育、文旅、健康产品和服务贸易客户。",
};

export default function FrancophonePage() {
  const page = destinationDetails.francophone;
  return (
    <>
      <DetailBlocks eyebrow="Francophone Markets" title={page.hero} intro={page.intro} image={page.image} sections={page.sections} cta={page.cta} />
      <section className="bg-rice py-16 md:py-24">
        <Container>
          <SectionHeader title="案例方向：从法国窗口测试法语区" intro="以活动、媒体、教育与文化资源切入，先验证品牌表达，再判断是否进入北非与西非市场。" />
          <div className="mt-10 grid gap-5 xl:grid-cols-2">{cases.slice(2, 4).map((item) => <CaseCard key={item.title} item={item} />)}</div>
        </Container>
      </section>
      <CTASection title="准备测试法语区市场？先明确进入路径" primary="查看法语区市场进入方案" />
    </>
  );
}

