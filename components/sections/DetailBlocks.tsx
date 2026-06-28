import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/sections/SectionHeader";

export function DetailBlocks({
  eyebrow,
  title,
  intro,
  image,
  sections,
  cta,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  sections: readonly { title: string; items: readonly string[] }[];
  cta: string;
}) {
  return (
    <>
      <section className="bg-rice pt-32 pb-16 md:pt-40 md:pb-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-6xl">{title}</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">{intro}</p>
            <ButtonLink href="/contact" className="mt-8" ariaLabel={cta}>{cta}</ButtonLink>
          </div>
          <div className="border border-line bg-white p-3 shadow-dossier">
            <div className="relative aspect-[5/3] overflow-hidden">
              <Image src={image} alt={`${title}页面现场素材`} fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeader title="把判断写进每一步执行" intro="页面内容默认采用匿名项目表达，重点呈现问题、动作、风险提示和阶段性结果。" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <article key={section.title} className="border border-line bg-white p-6">
                <h2 className="font-serif text-2xl font-semibold text-navy">{section.title}</h2>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-600">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" />{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}


