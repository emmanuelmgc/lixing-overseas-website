import type { Metadata } from "next";
import { serviceFaqs } from "@/data/faqs";
import { servicePaths } from "@/data/services";
import { cases } from "@/data/cases";
import { CaseCard } from "@/components/cards/CaseCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ServicePath, ServiceStageMatrix } from "@/components/sections/ServicePath";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "服务总览",
  description: "励行出海把出海拆成商务考察、落地服务与海外营销咨询三条路径，帮助企业形成可判断、可执行、可落地的步骤。",
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection compact eyebrow="Services" title="把出海拆成可判断、可执行、可落地的步骤" subtitle="从市场筛选、商务考察到落地服务和海外营销咨询，励行关注的是判断是否成立，以及下一步怎么推进。" image="/images/lixing/ppt-business-briefing.webp" primary="预约服务沟通" />
      <section className="py-16 md:py-24"><Container><ServicePath /></Container></section>
      <section className="bg-mist py-16 md:py-24">
        <Container>
          <SectionHeader title="服务适用阶段" intro="不同阶段需要不同服务，不急着把客户推向复杂方案。" />
          <div className="mt-10"><ServiceStageMatrix /></div>
        </Container>
      </section>
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeader title="三类服务详情" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {servicePaths.map((service) => <ServiceCard key={service.title} title={service.title} href={service.href} body={`目标是${service.target}，交付包括${service.deliverables}。`} />)}
          </div>
        </Container>
      </section>
      <section className="bg-rice py-16 md:py-24">
        <Container>
          <SectionHeader title="相关案例" />
          <div className="mt-10 grid gap-5 xl:grid-cols-2">{cases.slice(0, 2).map((item) => <CaseCard key={item.title} item={item} />)}</div>
        </Container>
      </section>
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeader title="FAQ" intro="常见问题围绕资源对接、保密、考察后承接和市场筛选展开。" />
          <div className="mt-10"><FAQAccordion items={serviceFaqs} /></div>
        </Container>
      </section>
      <CTASection title="不确定该选哪类服务？先聊当前阶段" primary="预约服务沟通" />
    </>
  );
}

