import { Network } from "lucide-react";

export function ResourceCard({ resource }: { resource: { type: string; problem: string; customer: string; deliverable: string } }) {
  return (
    <article className="border border-line bg-white p-5 shadow-sm transition hover:border-gold/70">
      <div className="mb-4 flex items-center gap-2 text-gold"><Network className="h-4 w-4" /><span className="text-xs font-semibold uppercase tracking-[0.18em]">Resource</span></div>
      <h3 className="font-serif text-xl font-semibold leading-snug text-navy">{resource.type}</h3>
      <dl className="mt-4 space-y-3 text-sm leading-6 text-gray-600">
        <div><dt className="font-semibold text-gray-900">能解决的问题</dt><dd>{resource.problem}</dd></div>
        <div><dt className="font-semibold text-gray-900">适合客户</dt><dd>{resource.customer}</dd></div>
        <div><dt className="font-semibold text-gray-900">可交付形式</dt><dd>{resource.deliverable}</dd></div>
      </dl>
    </article>
  );
}

