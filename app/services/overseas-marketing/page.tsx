import type { Metadata } from "next";
import { serviceDetails } from "@/data/services";
import { DetailBlocks } from "@/components/sections/DetailBlocks";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "海外营销咨询",
  description: "让品牌先被目标市场理解。面向法语区、北非、西非等市场提供境外媒体资源、活动策划与本土化品牌运营建议。",
};

export default function OverseasMarketingPage() {
  const page = serviceDetails["overseas-marketing"];
  return <><DetailBlocks eyebrow="Overseas Marketing" title={page.hero} intro={page.intro} image={page.image} sections={page.sections} cta={page.cta} /><CTASection title="准备先低成本测试海外市场？" primary="预约海外营销诊断" /></>;
}

