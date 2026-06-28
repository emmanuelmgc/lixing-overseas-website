import Image from "next/image";
import { FileText } from "lucide-react";
import type { CaseItem } from "@/data/cases";

export function CaseCard({ item }: { item: CaseItem }) {
  return (
    <article className="grid overflow-hidden border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:border-gold/70 md:grid-cols-[0.42fr_0.58fr]">
      <div className="relative min-h-64 bg-navy">
        <Image src={item.image} alt={`${item.title}项目素材`} fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover opacity-90" />
        <div className="absolute left-4 top-4 rounded bg-gold px-3 py-1 text-xs font-semibold text-ink">{item.stage}</div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 pt-14 text-xs leading-5 text-white/78">
          匿名项目档案｜客户与敏感信息已脱敏
        </div>
      </div>
      <div className="p-5">
        <div className="mb-4 flex flex-wrap gap-2 text-xs text-gray-600">
          <span className="rounded border border-line px-2 py-1">{item.region}</span>
          <span className="rounded border border-line px-2 py-1">{item.industry}</span>
          <span className="rounded border border-line px-2 py-1">{item.service}</span>
        </div>
        <h3 className="font-serif text-xl font-semibold leading-snug text-navy">{item.title}</h3>
        <div className="mt-4 space-y-3 text-sm leading-6 text-gray-600">
          <p><span className="font-semibold text-gray-900">拜访 / 验证对象：</span>{item.scope}</p>
          <p><span className="font-semibold text-gray-900">客户问题：</span>{item.problem}</p>
          <p><span className="font-semibold text-gray-900">励行动作：</span>{item.action}</p>
          <p className="flex gap-2"><FileText className="mt-1 h-4 w-4 shrink-0 text-gold" /><span><span className="font-semibold text-gray-900">阶段性结果：</span>{item.result}</span></p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.deliverables.map((deliverable) => (
            <span key={deliverable} className="rounded border border-line bg-mist px-2.5 py-1 text-xs text-gray-700">{deliverable}</span>
          ))}
        </div>
      </div>
    </article>
  );
}