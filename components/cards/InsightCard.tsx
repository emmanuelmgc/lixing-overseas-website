import { ArrowUpRight } from "lucide-react";

export function InsightCard({ title, index }: { title: string; index: number }) {
  return (
    <article className="group flex items-start gap-5 border-b border-line/50 py-5 last:border-b-0 transition-colors duration-200 hover:border-gold/40">
      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/[0.06] font-serif text-[12px] font-semibold text-gold">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex-1">
        <h3 className="text-[16px] font-semibold leading-7 text-navy transition-colors duration-200 group-hover:text-gold">
          {title}
        </h3>
      </div>
      <ArrowUpRight className="mt-2 h-4 w-4 shrink-0 text-gray-400 transition-colors duration-200 group-hover:text-gold" aria-hidden="true" />
    </article>
  );
}
