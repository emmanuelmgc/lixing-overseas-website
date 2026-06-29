import Image from "next/image";
import type { CaseItem } from "@/data/cases";

export function CaseCard({ item }: { item: CaseItem }) {
  return (
    <article className="group overflow-hidden rounded-[10px] border border-line/40 bg-white transition duration-300 hover:border-gold/40 hover:shadow-md hover:-translate-y-0.5">
      <div className="relative aspect-[16/9] bg-navy">
        <Image
          src={item.image}
          alt={`${item.title}项目素材`}
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover opacity-90 transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/72 to-transparent" />
        <div className="absolute left-5 top-5 rounded bg-gold px-2.5 py-1 text-[11px] font-semibold text-ink">
          {item.stage}
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-[12px] text-white/60">{item.region} · {item.industry}</p>
          <h3 className="mt-1 font-serif text-[20px] font-semibold leading-snug text-white">
            {item.title}
          </h3>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-3.5 text-[14px] leading-7 text-gray-600">
          <p>
            <span className="font-semibold text-gray-900">客户问题　</span>
            {item.problem}
          </p>
          <p>
            <span className="font-semibold text-gray-900">励行动作　</span>
            {item.action}
          </p>
          <p>
            <span className="font-semibold text-gray-900">阶段性结果　</span>
            {item.result}
          </p>
        </div>
      </div>
    </article>
  );
}
