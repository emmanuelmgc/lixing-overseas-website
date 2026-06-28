"use client";

import { useState } from "react";
import type { CaseItem } from "@/data/cases";
import { CaseCard } from "@/components/cards/CaseCard";

const filters = ["全部", "中亚", "法语区", "商务考察", "落地服务", "营销咨询"] as const;

function matchesFilter(item: CaseItem, filter: string): boolean {
  if (filter === "全部") return true;
  return item.region.includes(filter) || item.service.includes(filter);
}

export function CaseGrid({ items }: { items: CaseItem[] }) {
  const [active, setActive] = useState<string>("全部");

  const filtered = active === "全部" ? items : items.filter((item) => matchesFilter(item, active));

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={
              "rounded border px-3 py-2 text-sm transition " +
              (active === filter
                ? "border-gold bg-gold text-ink font-semibold"
                : "border-line bg-white text-gray-700 hover:border-gold hover:text-navy")
            }
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-5 xl:grid-cols-2">
        {filtered.length > 0 ? (
          filtered.map((item) => <CaseCard key={item.title} item={item} />)
        ) : (
          <p className="col-span-full py-10 text-center text-sm text-gray-500">
            没有匹配该标签的案例，请尝试其他筛选条件。
          </p>
        )}
      </div>
    </>
  );
}
