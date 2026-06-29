import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const markets = [
  {
    title: "乌兹别克斯坦 / 中亚",
    subtitle: "在地政商资源协助项目落地",
    description:
      "面向制造业、新能源、农业畜牧、水务环保等行业，依托政府园区与在地资源网络，先验证项目机会，再设计进入路径。",
    industries: ["制造业", "新能源", "农业畜牧", "水务环保", "物流与园区", "职业教育"],
    image: "/images/lixing/uz-destinations-hero.webp",
    href: "/destinations/uzbekistan",
    cta: "查看乌兹别克斯坦方案",
  },
  {
    title: "法国 / 欧洲 / 非洲法语区",
    subtitle: "依托法国品牌，赋能企业打开新兴市场",
    description:
      "以法国为窗口，连接品牌活动、媒体资源与文化场景，测试欧洲与非洲法语区市场的受众反馈与渠道机会。",
    industries: ["消费品牌", "教育合作", "健康产品", "服务贸易", "法语区市场测试"],
    image: "/images/lixing/ppt-francophone-city.webp",
    href: "/destinations/francophone-markets",
    cta: "查看法语区方案",
  },
];

export function KeyMarkets() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
      {markets.map((market) => (
        <article
          key={market.title}
          className="group overflow-hidden rounded-[10px] border border-line/40 bg-white transition duration-300 hover:border-gold/40 hover:shadow-md hover:-translate-y-0.5"
        >
          <div className="relative aspect-[16/9] overflow-hidden bg-navy">
            <Image
              src={market.image}
              alt={market.title}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover opacity-90 transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <div className="absolute bottom-5 left-6 right-6">
              <p className="text-[12px] font-semibold tracking-[0.16em] text-gold">MARKET FOCUS</p>
              <h3 className="mt-1.5 font-serif text-2xl font-semibold text-white lg:text-[26px]">
                {market.title}
              </h3>
            </div>
          </div>
          <div className="p-6 lg:p-7">
            <p className="text-[15px] font-semibold text-navy">{market.subtitle}</p>
            <p className="mt-3 text-[14.5px] leading-[1.65] text-gray-600">{market.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {market.industries.map((ind) => (
                <span
                  key={ind}
                  className="rounded border border-line bg-mist/60 px-2.5 py-1 text-[12px] text-gray-700"
                >
                  {ind}
                </span>
              ))}
            </div>
            <Link
              href={market.href}
              className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-gold"
              aria-label={market.cta}
            >
              {market.cta}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
