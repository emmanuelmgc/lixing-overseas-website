import { ArrowUpRight } from "lucide-react";

export function InsightCard({ title, index }: { title: string; index: number }) {
  return (
    <article className="group flex items-start gap-4 border-b border-line/60 py-5 last:border-b-0 transition hover:border-gold/40">
      <span className="mt-0.5 font-serif text-[13px] font-semibold text-gold">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex-1">
        <h3 className="text-[16px] font-semibold leading-7 text-navy transition group-hover:text-gold">
          {title}
        </h3>
      </div>
      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-gray-400 transition group-hover:text-gold" />
    </article>
  );
}
