import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function CTASection({
  title = "还不确定该去哪里？先做一次出海诊断",
  body = "告诉我们你的行业、目标市场和当前阶段，励行将帮助你判断是否值得出访、该见谁、该验证什么。",
  primary = "预约出海诊断",
  secondary = "联系我们",
}: {
  title?: string;
  body?: string;
  primary?: string;
  secondary?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      {/* 极淡的渐变光晕，烘托高端咨询氛围，不抢内容焦点 */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(184,138,74,0.08),transparent_55%)]" aria-hidden="true" />

      <Container className="relative">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-gold">Consultation</p>
          <h2 className="font-serif text-3xl font-semibold leading-[1.2] tracking-[-0.01em] md:text-[42px]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[15.5px] leading-[1.85] text-white/72">
            {body}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/contact" ariaLabel={primary}>{primary}</ButtonLink>
            <ButtonLink
              href="/contact"
              variant="secondary"
              ariaLabel={secondary}
              className="border-white/20 bg-white/[0.06] text-white hover:border-gold/60 hover:bg-white hover:text-ink"
            >
              {secondary}
            </ButtonLink>
          </div>
          <p className="mt-8 text-[12.5px] tracking-wide text-white/45">
            9 年出海服务经验 · 300+ 政企客户 · 聚焦中亚与法语区
          </p>
        </div>
      </Container>
    </section>
  );
}
