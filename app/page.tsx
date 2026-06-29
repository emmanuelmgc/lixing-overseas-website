import type { Metadata } from "next";
import { cases } from "@/data/cases";
import { decisionIssues } from "@/data/services";
import { insights } from "@/data/insights";
import { seo } from "@/data/site";
import { CaseCard } from "@/components/cards/CaseCard";
import { InsightCard } from "@/components/cards/InsightCard";
import { IssueCard } from "@/components/cards/IssueCard";
import { CTASection } from "@/components/sections/CTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { KeyMarkets } from "@/components/sections/KeyMarkets";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ResourceNetwork } from "@/components/sections/ResourceNetwork";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ServicePath } from "@/components/sections/ServicePath";
import { TrustBar } from "@/components/sections/TrustBar";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: seo.homeTitle,
  description: seo.homeDescription,
};

// 首页只展示 3 个代表案例：制造园区 / 水务环保 / 光伏
const homepageCases = cases.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* 1. 首屏 Hero */}
      <HeroSection
        eyebrow="面向中国企业的新兴市场出海咨询与落地服务"
        title={"出海更稳，\n登陆更快"}
        subtitle="励行出海聚焦中亚与法语区，帮助企业在国内研判市场、在海外筛选资源，每一次出发都是为了项目的落地。"
        image="/images/lixing/hero-consulting-generated.webp"
        primary="预约出海诊断"
        secondary="查看重点市场"
        secondaryHref="/destinations"
      />

      {/* 2. 信任背书 / 核心数据条 */}
      <TrustBar />

      {/* 3. 核心问题 */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeader
            title="企业出海前，最该先判断三个问题"
            intro="励行解决的不是安排出国，而是进入市场前的判断问题和进场后的在地资源加持。"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {decisionIssues.slice(0, 3).map((issue, index) => (
              <IssueCard key={issue.question} issue={issue} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. 重点市场（暖白背景，作为视觉节奏的转折点） */}
      <section className="bg-[#FAFAF8] py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Market Focus"
            title="不做泛出海，只聚焦两个核心市场"
            intro="励行深耕乌兹别克斯坦/中亚与法国/欧洲/非洲法语区，每个市场都有可调用的在地资源网络。"
          />
          <div className="mt-12">
            <KeyMarkets />
          </div>
        </Container>
      </section>

      {/* 5. 服务方法（回到白底，承接重点市场） */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Services"
            title="三类服务，对应企业出海的三个关键阶段"
            intro="从验证市场到形成落地路径，再到测试海外品牌表达，避免把出海变成一次没有承接的出访。"
          />
          <div className="mt-12">
            <ServicePath />
          </div>
        </Container>
      </section>

      {/* 6. 代表案例（白底 + 极细分隔线建立锚点） */}
      <section className="border-t border-line/30 bg-white py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Cases"
            title="用真实项目经验，帮助客户少走弯路"
            intro="首页只展示代表性项目档案，更多区域与行业案例可在沟通中按需求展开。"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {homepageCases.map((item) => (
              <CaseCard key={item.title} item={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* 7. 资源网络（结构图，暖白底与重点市场呼应） */}
      <section className="border-t border-line/30 bg-[#FAFAF8] py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Network"
            title="资源不是名单，而是能被项目调用的连接"
            intro="从客户问题出发，调用政府、园区、商协会、专业机构等在地资源，输出可执行的判断与路径。"
          />
          <div className="mt-12">
            <ResourceNetwork />
          </div>
        </Container>
      </section>

      {/* 8. 服务流程（弱化，白底留出呼吸） */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <SectionHeader
            eyebrow="Process"
            title="合作流程"
          />
          <div className="mt-10">
            <ProcessTimeline />
          </div>
        </Container>
      </section>

      {/* 9. 洞察文章（白底自然收尾，弱化无容器风格） */}
      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <SectionHeader
                eyebrow="Insights"
                title="出海前值得先想清楚的几个问题"
              />
            </div>
            <div>
              {insights.map((title, index) => (
                <InsightCard key={title} title={title} index={index} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 10. 底部 CTA */}
      <CTASection />
    </>
  );
}
