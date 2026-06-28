import { ArrowUpRight } from "lucide-react";

export function InsightCard({ title, index }: { title: string; index: number }) {
  return (
    <article className="border border-line bg-white p-5 transition hover:border-gold/70">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">Insight {String(index + 1).padStart(2, "0")}</p>
      <h3 className="min-h-20 font-serif text-xl font-semibold leading-snug text-navy">{title}</h3>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">阅读全文 <ArrowUpRight className="h-4 w-4" /></span>
    </article>
  );
}

