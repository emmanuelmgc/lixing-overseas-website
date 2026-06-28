import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { servicePaths } from "@/data/services";

export function ServicePath() {
  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
      {servicePaths.map((service) => (
        <article
          key={service.title}
          className="group overflow-hidden rounded-[10px] border border-line bg-white transition hover:border-gold/50"
        >
          <div className="relative aspect-[16/9] overflow-hidden bg-navy">
            <Image
              src={service.image}
              alt={`${service.title}现场素材`}
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover opacity-85 transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/72 to-transparent" />
            <div className="absolute left-5 top-5 rounded bg-gold px-2.5 py-1 text-[11px] font-semibold text-ink">
              {service.step}
            </div>
            <h3 className="absolute bottom-5 left-5 right-5 font-serif text-[22px] font-semibold text-white">
              {service.title}
            </h3>
          </div>
          <div className="p-6">
            <p className="text-[14px] leading-7 text-gray-600">{service.target}</p>
            <p className="mt-4 text-[13px] leading-6 text-gray-500">
              <span className="font-semibold text-gray-700">交付：</span>
              {service.deliverables}
            </p>
            <Link
              href={service.href}
              className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-gold"
              aria-label={`查看${service.title}服务`}
            >
              查看服务详情
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ServiceStageMatrix() {
  const rows = [
    ["还未确定目的地", "市场筛选 / 出海诊断", "判断哪个市场值得先投入"],
    ["准备组织考察", "商务考察", "把出访变成带问题的验证"],
    ["已有项目线索", "机会验证 / 合作方筛选", "降低信息不对称和合作风险"],
    ["准备注册或设点", "落地服务", "连接法税、人力、物流、用地等专业资源"],
    ["需要测试海外市场", "营销咨询", "先用低成本活动与内容验证表达"],
  ];
  return (
    <div className="overflow-hidden border border-line bg-white">
      {rows.map((row) => (
        <div key={row[0]} className="grid gap-4 border-b border-line p-5 last:border-b-0 md:grid-cols-[0.8fr_0.9fr_1.3fr]">
          <p className="font-semibold text-navy">{row[0]}</p>
          <p className="text-gray-700">{row[1]}</p>
          <p className="text-gray-600">{row[2]}</p>
        </div>
      ))}
    </div>
  );
}
