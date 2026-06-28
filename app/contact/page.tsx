import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { ContactForm } from "@/components/sections/ContactForm";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "联系我们",
  description: "先聊一次，不急着做决定。提交行业、目标区域和当前阶段，励行出海将初步判断适合市场筛选、商务考察还是落地路径沟通。",
};

export default function ContactPage() {
  return (
    <>
      <HeroSection compact eyebrow="Contact" title="先聊一次，不急着做决定" subtitle="告诉我们你的行业、目标区域和当前阶段，我们会先判断你更适合市场筛选、商务考察、落地服务还是海外营销沟通。" image="/images/lixing/hero-consulting-generated.webp" primary="填写诊断需求" />
      <section className="py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <SectionHeader title="预约出海诊断" intro="留下你的行业、目标区域和当前问题，我们会先判断适合市场筛选、商务考察、资源对接还是落地路径沟通。" />
            <div className="mt-8 space-y-4 border border-line bg-rice p-5 text-sm leading-7 text-gray-700">
              <p className="flex gap-2"><MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" />{site.contact.address}</p>
              <p className="flex gap-2"><Phone className="mt-1 h-4 w-4 shrink-0 text-gold" />{site.contact.phone}</p>
              <p>微信：{site.contact.wechat}</p>
            </div>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}

