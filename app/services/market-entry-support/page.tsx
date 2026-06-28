import type { Metadata } from "next";
import { serviceDetails } from "@/data/services";
import { DetailBlocks } from "@/components/sections/DetailBlocks";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "落地服务",
  description: "考察之后，把机会变成路径。励行连接政务、税务、法务、人力、用地、物流、供应链等落地资源。",
};

export default function MarketEntrySupportPage() {
  const page = serviceDetails["market-entry-support"];
  return <><DetailBlocks eyebrow="Market Entry" title={page.hero} intro={page.intro} image={page.image} sections={page.sections} cta={page.cta} /><CTASection title="考察之后，需要把机会继续推进？" primary="预约落地路径沟通" /></>;
}

