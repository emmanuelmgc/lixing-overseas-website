import type { Metadata } from "next";
import { cases } from "@/data/cases";
import { destinations } from "@/data/destinations";
import { decisionIssues } from "@/data/services";
import { insights } from "@/data/insights";
import { seo } from "@/data/site";
import { CaseCard } from "@/components/cards/CaseCard";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { InsightCard } from "@/components/cards/InsightCard";
import { IssueCard } from "@/components/cards/IssueCard";
import { CTASection } from "@/components/sections/CTASection";
import { DestinationMap } from "@/components/sections/DestinationMap";
import { HeroSection } from "@/components/sections/HeroSection";
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

export default function HomePage() {
  return (
    <>
      <HeroSection
        eyebrow="面向中国企业的新兴市场出海咨询与落地服务"
        title={"出海更稳，\n登陆更快"}
        subtitle="我们帮助企业在进入乌兹别克斯坦/中亚与法语区国家前，看清机会、连接关键资源，并把商务考察转化为可执行的落地路径。励行深耕两个重点区域，不做泛出海。"
        image="/images/lixing/hero-consulting-generated.webp"
        secondary="查看目的地方案"
      />
      <TrustBar />

      <section className="bg-white py-16 md:py-24">
        <Container>
          <SectionHeader
            title="先判断，再出访，再落地"
            intro="官网首页只回答三个关键问题：去哪、怎么去、见谁和验证什么。"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {decisionIssues.slice(0, 3).map((issue, index) => <IssueCard key={issue.question} issue={issue} index={index} />)}
          </div>
        </Container>
      </section>

      <section className="bg-mist py-16 md:py-24">
        <Container>
          <SectionHeader
            eyebrow="Services"
            title="从考察到落地，把出海拆成可执行的步骤"
            intro="三条服务路径分别对应验证市场、形成落地路径和测试海外表达，避免把出海变成一次没有承接的出访。"
          />
          <div className="mt-10"><ServicePath /></div>
        </Container>
      </section>

      <section className="bg-rice py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <SectionHeader eyebrow="Destinations" title="先选对市场，再设计进入路径" intro="不同区域适合解决的问题不同。励行会先帮助客户判断目的地，再决定是否进入考察、合作方筛选或落地服务。" />
              <div className="mt-8"><DestinationMap compact /></div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {destinations.map((destination) => <DestinationCard key={destination.title} destination={destination} />)}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <SectionHeader eyebrow="Resources" title="资源不是名单，而是能被项目调用的连接" intro="资源卡只写可用于项目的部分：它解决什么问题、适合谁、能交付成什么材料。" />
          <div className="mt-10"><ResourceNetwork limit={4} /></div>
        </Container>
      </section>

      <section className="bg-mist py-16 md:py-24">
        <Container>
          <SectionHeader eyebrow="Process" title="一次有效出海服务，应从问题诊断开始" intro="每一步都围绕判断、验证、筛选、对接和下一步路径展开，而不是简单安排行程。" />
          <div className="mt-10"><ProcessTimeline /></div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <SectionHeader eyebrow="Cases" title="用真实项目经验，帮助客户少走弯路" intro="首页只展示重点项目档案，更多区域与行业案例可在沟通中按需求展开。" />
          <div className="mt-10 grid gap-5 xl:grid-cols-2">
            {cases.slice(0, 4).map((item) => <CaseCard key={item.title} item={item} />)}
          </div>
        </Container>
      </section>


      <section className="bg-rice py-16 md:py-24">
        <Container>
          <SectionHeader eyebrow="Insights" title="出海前值得先想清楚的几个问题" intro="这些问题没有标准答案，但在投入之前值得认真判断一次。" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {insights.map((title, index) => <InsightCard key={title} title={title} index={index} />)}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}

