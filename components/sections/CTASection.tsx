import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function CTASection({
  title = "还不确定该去哪里？先做一次出海诊断",
  body = "告诉我们你的行业、目标区域和当前阶段，我们会帮你判断更适合先做市场筛选、商务考察，还是直接进入落地服务。",
  primary = "预约出海诊断",
  secondary = "联系我们",
}: {
  title?: string;
  body?: string;
  primary?: string;
  secondary?: string;
}) {
  return (
    <section className="bg-ink py-16 text-white md:py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Consultation</p>
            <h2 className="font-serif text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
            <p className="mt-5 max-w-3xl leading-8 text-white/72">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <ButtonLink href="/contact" ariaLabel={primary}>{primary}</ButtonLink>
            <ButtonLink href="/contact" variant="secondary" ariaLabel={secondary} className="border-white/20 bg-white/10 text-white hover:bg-white hover:text-ink">
              {secondary}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

