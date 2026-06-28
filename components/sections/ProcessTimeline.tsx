import { processSteps } from "@/data/site";

export function ProcessTimeline() {
  return (
    <div className="grid gap-4 md:grid-cols-5">
      {processSteps.map((step, index) => (
        <article key={step.title} className="relative border border-line bg-white p-5">
          <span className="mb-6 inline-flex h-9 w-9 items-center justify-center rounded bg-navy text-sm font-semibold text-gold">{index + 1}</span>
          <h3 className="font-serif text-xl font-semibold text-navy">{step.title}</h3>
          <p className="mt-3 text-sm leading-7 text-gray-600">{step.body}</p>
        </article>
      ))}
    </div>
  );
}

