import { AlertTriangle, CheckCircle2 } from "lucide-react";

export function IssueCard({ issue, index }: { issue: { question: string; risk: string; action: string }; index: number }) {
  return (
    <article className="rounded-[10px] border border-line bg-white p-6 transition hover:border-gold/50">
      <div className="mb-5 flex items-center justify-between">
        <span className="font-serif text-[13px] font-semibold text-gold">
          {String(index + 1).padStart(2, "0")}
        </span>
        <AlertTriangle className="h-4 w-4 text-gold/60" />
      </div>
      <h3 className="font-serif text-[20px] font-semibold leading-snug text-navy">
        {issue.question}
      </h3>
      <div className="mt-5 space-y-3 text-[14px] leading-7 text-gray-600">
        <p>
          <span className="font-semibold text-gray-900">风险　</span>
          {issue.risk}
        </p>
        <p className="flex gap-2">
          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" />
          <span>
            <span className="font-semibold text-gray-900">励行动作　</span>
            {issue.action}
          </span>
        </p>
      </div>
    </article>
  );
}
