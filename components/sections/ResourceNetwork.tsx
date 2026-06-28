import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

const resourceNodes = [
  { label: "政府与投资促进", desc: "政策、投资方向、项目入口" },
  { label: "工业园区", desc: "用地、成本、产业配套" },
  { label: "商协会与中资企业", desc: "在地经验、合作样本" },
  { label: "法税物流专业机构", desc: "注册、用工、合规、跨境" },
  { label: "高校与职业培训", desc: "教育合作、人才本地化" },
  { label: "品牌活动与媒体", desc: "法语区市场测试入口" },
];

const outputs = [
  "市场判断",
  "合作方筛选",
  "拜访安排",
  "风险提示",
  "落地路径",
];

export function ResourceNetwork({ limit }: { limit?: number }) {
  return (
    <div>
      {/* Flow structure: 客户问题 → 资源网络 → 项目输出 */}
      <div className="grid gap-6 lg:grid-cols-[0.8fr_2fr_0.8fr] lg:items-center">
        {/* Left: Input */}
        <div className="rounded-[10px] border border-line bg-white p-6 text-center lg:text-left">
          <p className="text-[12px] font-semibold tracking-[0.16em] text-gold">INPUT</p>
          <p className="mt-2 font-serif text-[18px] font-semibold leading-7 text-navy">
            客户问题 / 出海目标
          </p>
          <p className="mt-2 text-[13px] leading-6 text-gray-500">
            判断市场、筛选合作方、设计落地路径
          </p>
        </div>

        {/* Middle: Resource nodes */}
        <div className="relative">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {resourceNodes.map((node) => (
              <div
                key={node.label}
                className="rounded-[8px] border border-line bg-mist/40 px-4 py-3.5 transition hover:border-gold/40 hover:bg-white"
              >
                <p className="text-[14px] font-semibold text-navy">{node.label}</p>
                <p className="mt-1 text-[12px] leading-5 text-gray-500">{node.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-[12px] font-semibold tracking-[0.16em] text-gold">
            励行调用资源网络
          </p>
        </div>

        {/* Right: Output */}
        <div className="rounded-[10px] border border-navy/15 bg-navy p-6 text-white">
          <p className="text-[12px] font-semibold tracking-[0.16em] text-gold">OUTPUT</p>
          <p className="mt-2 font-serif text-[18px] font-semibold leading-7">
            项目交付
          </p>
          <ul className="mt-3 space-y-1.5">
            {outputs.map((out) => (
              <li key={out} className="flex items-center gap-2 text-[13px] text-white/75">
                <span className="h-1 w-1 rounded-full bg-gold" />
                {out}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Arrow indicators (desktop only) */}
      <div className="mt-4 hidden items-center justify-center gap-2 text-[12px] text-gray-400 lg:flex">
        <span>资源不是名单</span>
        <ArrowRight className="h-3.5 w-3.5" />
        <span>而是能被项目调用的连接</span>
      </div>
    </div>
  );
}
