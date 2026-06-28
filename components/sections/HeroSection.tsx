import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: string;
  primary?: string;
  secondary?: string;
  secondaryHref?: string;
  compact?: boolean;
};

export function HeroSection({
  eyebrow,
  title,
  subtitle,
  image,
  primary = "预约出海诊断",
  secondary,
  secondaryHref = "/destinations",
  compact = false,
}: HeroSectionProps) {
  if (!compact) {
    return (
      <section className="relative isolate overflow-hidden bg-[#071A2F] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#071A2F_0%,#0E2748_100%)]" />

        {image ? (
          <>
            <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block" aria-hidden="true">
              <Image
                src={image}
                alt=""
                fill
                priority
                sizes="52vw"
                className="object-cover object-[50%_42%] saturate-[0.96] contrast-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#071A2F_0%,rgba(7,26,47,0.88)_20%,rgba(7,26,47,0.36)_52%,rgba(7,26,47,0.12)_80%,rgba(7,26,47,0.22)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,47,0.18)_0%,rgba(7,26,47,0.04)_40%,rgba(7,26,47,0.72)_100%)]" />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#071A2F_0%,rgba(7,26,47,0.97)_40%,rgba(7,26,47,0.52)_64%,rgba(7,26,47,0.16)_100%)]" aria-hidden="true" />
          </>
        ) : null}

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071A2F] to-transparent" />

        <Container className="relative flex min-h-[720px] max-w-[1160px] items-center pb-20 pt-28 md:pt-24">
          <div className="max-w-[560px]">
            <p className="mb-6 text-xs font-semibold tracking-[0.18em] text-[#D7B476]">
              {eyebrow}
            </p>
            <h1 className="whitespace-pre-line font-serif text-5xl font-semibold leading-[1.1] tracking-[-0.01em] text-white sm:text-6xl lg:text-[68px]">
              {title}
            </h1>
            <p className="mt-8 max-w-[520px] text-base leading-[1.85] text-white/72 md:text-[17px]">
              {subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                aria-label={primary}
                className="inline-flex items-center gap-1.5 rounded bg-gold px-7 py-3.5 text-[15px] font-semibold text-[#071A2F] transition hover:bg-gold/90"
              >
                {primary}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              {secondary ? (
                <Link
                  href={secondaryHref}
                  aria-label={secondary}
                  className="inline-flex items-center gap-1.5 rounded border border-white/25 bg-white/[0.04] px-7 py-3.5 text-[15px] font-semibold text-white/85 transition hover:border-gold/60 hover:bg-white/[0.08] hover:text-white"
                >
                  {secondary}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              ) : null}
            </div>
            <p className="mt-10 text-[13px] font-medium tracking-wide text-white/45">
              9 年出海服务经验 · 300+ 政企客户 · 聚焦中亚与法语区
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={"relative overflow-hidden bg-rice " + (compact ? "pt-32 pb-16" : "pt-32 pb-20 md:pt-40 md:pb-28")}>
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent" />
      <Container className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="mb-5 max-w-xl text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
          <h1 className="max-w-3xl whitespace-pre-line font-serif text-4xl font-semibold leading-[1.1] text-navy md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" ariaLabel={primary}>{primary}</ButtonLink>
            {secondary ? <ButtonLink href={secondaryHref} variant="secondary" ariaLabel={secondary}>{secondary}</ButtonLink> : null}
          </div>
        </div>
        <div className="relative min-h-[440px] lg:min-h-[540px]">
          <div className="absolute right-0 top-0 w-[86%] border border-white/20 bg-ink p-3 shadow-dossier">
            <div className="relative aspect-[4/3] overflow-hidden bg-slateblue">
              {image ? <Image src={image} alt="商务会议与项目考察现场" fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover opacity-90" /> : null}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
