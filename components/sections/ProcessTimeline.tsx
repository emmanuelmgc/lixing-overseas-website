import { processSteps } from "@/data/site";

export function ProcessTimeline() {
  return (
    <div className="grid gap-0 md:grid-cols-5">
      {processSteps.map((step, index) => (
        <div
          key={step.title}
          className={`relative border-t border-line py-6 md:px-6 ${
            index > 0 ? "md:border-l md:border-t-0" : ""
          }`}
        >
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-[13px] font-semibold text-gold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-[15px] font-semibold text-navy">{step.title}</h3>
          </div>
          <p className="mt-2 text-[13px] leading-6 text-gray-500">{step.body}</p>
        </div>
      ))}
    </div>
  );
}
