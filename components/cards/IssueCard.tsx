import { AlertTriangle, CheckCircle2 } from "lucide-react";

export function IssueCard({ issue, index }: { issue: { question: string; risk: string; action: string }; index: number }) {
  return (
    <article className="border border-line bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-gold/70">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Decision {String(index + 1).padStart(2, "0")}</span>
        <AlertTriangle className="h-5 w-5 text-gold" />
      </div>
      <h3 className="font-serif text-xl font-semibold leading-snug text-navy">{issue.question}</h3>
      <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600">
        <p><span className="font-semibold text-gray-900">风险：</span>{issue.risk}</p>
        <p className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" /><span><span className="font-semibold text-gray-900">励行动作：</span>{issue.action}</span></p>
      </div>
    </article>
  );
}

