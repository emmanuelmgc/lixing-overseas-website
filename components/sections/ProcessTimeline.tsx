import { processSteps, processIcons } from "@/data/site";
import type { LucideIcon } from "lucide-react";

export function ProcessTimeline() {
  return (
    <div className="grid gap-0 md:grid-cols-5">
      {processSteps.map((step, index) => {
        const Icon: LucideIcon | undefined = processIcons[index];
        return (
          <div
            key={step.title}
            className={`relative border-t border-line py-6 md:px-6 ${
              index > 0 ? "md:border-l md:border-t-0" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              {Icon ? (
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 bg-gold/[0.06] text-gold/70">
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden="true" />
                </span>
              ) : null}
              <span className="font-serif text-[13px] font-semibold text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-3 text-[15px] font-semibold text-navy">{step.title}</h3>
            <p className="mt-2 text-[13px] leading-6 text-gray-500">{step.body}</p>
          </div>
        );
      })}
    </div>
  );
}
