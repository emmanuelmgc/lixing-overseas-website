import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

const priorityRegions = [
  { area: "乌兹别克斯坦 / 中亚", focus: "产业投资与项目验证" },
  { area: "法国 / 北非 / 西非", focus: "法语区品牌与市场测试" },
  { area: "东南亚", focus: "供应链与区域布局" },
  { area: "其他新兴市场", focus: "根据行业与阶段筛选" },
];

const capabilityTags = ["政府与园区对接", "商协会与企业拜访", "法税物流与落地支持"];

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
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#071A2F_0%,#102D57_100%)]" />

        {image ? (
          <>
            <div className="absolute inset-y-0 right-0 hidden w-[62%] lg:block" aria-hidden="true">
              <Image
                src={image}
                alt=""
                fill
                priority
                sizes="62vw"
                className="object-cover object-[62%_center] opacity-100 saturate-[0.98] contrast-[1.04]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#071A2F_0%,rgba(7,26,47,0.82)_18%,rgba(7,26,47,0.32)_45%,rgba(7,26,47,0.1)_78%,rgba(7,26,47,0.18)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,47,0.2)_0%,rgba(7,26,47,0.06)_42%,rgba(7,26,47,0.72)_100%)]" />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#071A2F_0%,rgba(7,26,47,0.98)_42%,rgba(7,26,47,0.54)_64%,rgba(7,26,47,0.18)_100%)]" aria-hidden="true" />
          </>
        ) : null}

        <svg
          viewBox="0 0 1440 820"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
          style={{ opacity: 0.022 }}
          aria-hidden="true"
        >
          <path d="M88 538 C238 392 390 364 548 438 C728 522 822 296 1046 246 C1194 214 1312 262 1382 330" fill="none" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="8 18" />
          <path d="M132 626 C318 706 510 682 712 588 C906 498 1052 520 1288 412" fill="none" stroke="#B88A4A" strokeWidth="1" strokeDasharray="4 16" />
          <path d="M234 246 C396 164 556 164 706 256 C876 360 1028 348 1218 196" fill="none" stroke="#FFFFFF" strokeWidth="0.9" strokeDasharray="6 20" />
          {[180, 420, 668, 928, 1160].map((x, index) => (
            <g key={x}>
              <circle cx={x} cy={index % 2 ? 382 : 474} r="3.6" fill="#B88A4A" />
              <circle cx={x} cy={index % 2 ? 382 : 474} r="14" fill="none" stroke="#FFFFFF" strokeWidth="0.8" />
            </g>
          ))}
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#071A2F] to-transparent" />

        <Container className="relative flex min-h-[780px] max-w-[1160px] items-center pb-16 pt-28 md:min-h-[820px] lg:min-h-[840px] lg:pt-24">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[54fr_46fr] xl:gap-14">
            <div className="max-w-[640px]">
              <p className="mb-5 max-w-xl text-xs font-semibold tracking-[0.18em] text-[#D7B476]">
                {eyebrow}
              </p>
              <h1 className="whitespace-pre-line font-serif text-5xl font-semibold leading-[0.98] tracking-[0] text-white sm:text-6xl lg:text-[72px] xl:text-[76px]">
                {title}
              </h1>
              <p className="mt-7 max-w-[600px] text-base leading-8 text-white/70 md:text-lg">
                {subtitle}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  aria-label={primary}
                  className="inline-flex items-center gap-2 rounded bg-gold px-6 py-3.5 text-sm font-semibold text-[#071A2F] transition hover:bg-[#C19656]"
                >
                  {primary}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                {secondary ? (
                  <Link
                    href={secondaryHref}
                    aria-label={secondary}
                    className="inline-flex items-center gap-2 rounded border border-white/25 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white/[0.88] transition hover:border-gold/70 hover:bg-white/[0.08] hover:text-white"
                  >
                    {secondary}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ) : null}
              </div>
            </div>

            <div className="relative min-h-[560px] w-full max-w-[500px] lg:justify-self-end lg:self-center">
              <div className="absolute inset-0 overflow-hidden rounded-[18px] border border-white/[0.16] bg-[#0B2544] shadow-[0_28px_90px_rgba(0,0,0,0.34)]">
                {image ? (
                  <Image
                    src={image}
                    alt="商务会议与园区考察现场"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-[58%_center]"
                  />
                ) : null}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,26,47,0.02)_0%,rgba(7,26,47,0.2)_44%,rgba(7,26,47,0.9)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,47,0.42)_0%,rgba(7,26,47,0.08)_50%,rgba(7,26,47,0.28)_100%)]" />
              </div>

              <div className="absolute bottom-5 left-5 right-5 overflow-hidden rounded-[16px] border border-white/[0.18] bg-[#061B31]/[0.78] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-lg sm:p-6">
                <div className="flex items-center justify-between gap-5 border-b border-white/[0.12] pb-4">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.2em] text-[#D7B476]">MARKET FOCUS</p>
                    <h2 className="mt-2 font-serif text-2xl font-semibold text-white">重点区域</h2>
                  </div>
                  <span className="h-px w-14 bg-gold/70" aria-hidden="true" />
                </div>

                <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {priorityRegions.map((region, index) => (
                    <li key={region.area} className="grid grid-cols-[28px_1fr] gap-3 border-b border-white/10 pb-3 last:border-b-0 last:pb-0 sm:last:border-b sm:last:pb-3 lg:last:border-b-0 lg:last:pb-0">
                      <span className="pt-1 text-xs font-semibold text-gold/90">{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <p className="text-[15px] font-semibold leading-6 text-white">{region.area}</p>
                        <p className="mt-0.5 text-sm leading-6 text-white/[0.64]">{region.focus}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-4 border-t border-white/[0.12] pt-4">
                  <div className="flex flex-wrap gap-2">
                    {capabilityTags.map((item) => (
                      <span key={item} className="rounded border border-white/[0.16] bg-white/[0.07] px-3 py-1.5 text-xs font-medium text-white/[0.78]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
          <h1 className="max-w-3xl whitespace-pre-line font-serif text-4xl font-semibold leading-[1.08] text-navy md:text-6xl">{title}</h1>
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
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {capabilityTags.map((item) => (
                  <span key={item} className="rounded border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute left-0 top-16 w-[58%] border border-gold/30 bg-white/90 p-5 shadow-dossier backdrop-blur">
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Regional Map</span>
              <MapPin className="h-4 w-4 text-gold" />
            </div>
            <svg viewBox="0 0 420 220" className="h-auto w-full" role="img" aria-label="重点区域地图示意">
              <path d="M35 154 C92 92 136 86 195 116 C246 141 282 80 370 66" fill="none" stroke="#1E344A" strokeWidth="2" strokeDasharray="6 6" />
              <path d="M72 166 C154 194 234 179 340 132" fill="none" stroke="#B88A4A" strokeWidth="1.4" opacity="0.7" />
              {[{x:102,y:126,t:"乌兹别克斯坦 / 中亚"},{x:235,y:92,t:"法国 / 北非 / 西非"},{x:330,y:154,t:"东南亚"}].map((node) => (
                <g key={node.t}>
                  <circle cx={node.x} cy={node.y} r="7" fill="#B88A4A" />
                  <circle cx={node.x} cy={node.y} r="17" fill="none" stroke="#B88A4A" opacity="0.24" />
                  <text x={node.x + 12} y={node.y + 4} fontSize="14" fill="#071A2F">{node.t}</text>
                </g>
              ))}
            </svg>
          </div>

          <div className="absolute bottom-0 right-8 w-[58%] border border-line bg-white p-5 shadow-dossier">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-navy"><FileText className="h-4 w-4 text-gold" /> 项目档案</div>
            <p className="text-sm leading-7 text-gray-600">从拜访名单、会议议题到风险提示，先形成可执行的判断材料，再决定下一步投入。</p>
            <div className="mt-4 flex items-center text-xs font-semibold uppercase tracking-[0.18em] text-gold">Dossier <ArrowUpRight className="ml-1 h-3.5 w-3.5" /></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
