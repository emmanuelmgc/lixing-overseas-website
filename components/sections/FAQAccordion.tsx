"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-line border border-line bg-white">
      {items.map((item, index) => (
        <div key={item.q}>
          <button
            type="button"
            onClick={() => setOpen(open === index ? -1 : index)}
            className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-semibold text-navy"
            aria-expanded={open === index}
          >
            {item.q}
            <ChevronDown className={`h-5 w-5 shrink-0 text-gold transition ${open === index ? "rotate-180" : ""}`} />
          </button>
          {open === index ? <p className="px-5 pb-5 leading-7 text-gray-600">{item.a}</p> : null}
        </div>
      ))}
    </div>
  );
}

