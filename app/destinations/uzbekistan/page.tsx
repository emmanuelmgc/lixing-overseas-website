import type { Metadata } from "next";
import Image from "next/image";
import { destinationDetails } from "@/data/destinations";
import { cases } from "@/data/cases";
import { CaseCard } from "@/components/cards/CaseCard";
import { CTASection } from "@/components/sections/CTASection";
import { DetailBlocks } from "@/components/sections/DetailBlocks";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "乌兹别克斯坦 / 中亚",
  description: "进入中亚，从乌兹别克斯坦开始。适合制造业、新能源、农业畜牧、水务、物流、职业教育等行业的商务考察与落地路径判断。",
};

export default function UzbekistanPage() {
  const page = destinationDetails.uzbekistan;
  return (
    <>
      <DetailBlocks eyebrow="Central Asia" title={page.hero} intro={page.intro} image={page.image} sections={page.sections} cta={page.cta} />
      <section className="relative h-64 overflow-hidden bg-navy md:h-80">
        <Image src="/images/lixing/uz-tashkent-mosque.webp" alt="塔什干哈兹拉提伊玛目清真寺" fill sizes="100vw" className="object-cover opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-serif text-lg tracking-wide text-white/90 md:text-xl">塔什干 · 哈兹拉提伊玛目清真寺</p>
        </div>
      </section>
      <section className="bg-mist py-16 md:py-24">
        <Container>
          <SectionHeader title="匿名案例：先验证，再投入" intro="以项目档案形式呈现水务、光伏、园区合作等方向的判断路径。" />
          <div className="mt-10 grid gap-5 xl:grid-cols-2">{cases.slice(0, 2).map((item) => <CaseCard key={item.title} item={item} />)}</div>
        </Container>
      </section>
      <CTASection title="准备进入乌兹别克斯坦？先做一次诊断" primary="预约乌兹别克斯坦出海诊断" />
    </>
  );
}

