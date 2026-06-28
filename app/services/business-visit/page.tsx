import type { Metadata } from "next";
import { serviceDetails } from "@/data/services";
import { DetailBlocks } from "@/components/sections/DetailBlocks";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "商务考察",
  description: "不做泛泛参观，只做带着问题的商务考察。覆盖政府、园区、企业、商协会、高校、展会与专业机构对接。",
};

export default function BusinessVisitPage() {
  const page = serviceDetails["business-visit"];
  return <><DetailBlocks eyebrow="Business Visit" title={page.hero} intro={page.intro} image={page.image} sections={page.sections} cta={page.cta} /><CTASection title="准备定制一次带问题的商务考察？" primary="定制考察方案" /></>;
}

