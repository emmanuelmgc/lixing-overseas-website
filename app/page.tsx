import type { Metadata } from "next";
import { BrandLockup } from "@/components/layout/BrandLockup";
import { HomeInteractions } from "@/components/layout/HomeInteractions";
import { site } from "@/data/site";
import "./home.css";

export const metadata: Metadata = {
  title: { absolute: "励行出海 LEXON Overseas｜产业出海咨询与落地服务" },
  description: "励行出海聚焦中亚与法语区新兴市场，为中国企业提供企业商务考察、产业出海落地与海外产业投资服务。",
};

export default function HomePage() {
  return (
    <HomeInteractions>
      <a className="skip" href="#main">跳到正文</a>
      <header className="header dark">
        <div className="wrap header-inner">
          <BrandLockup />
          <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="nav">菜单</button>
          <nav className="nav" id="nav" aria-label="主导航">
            <a href="#markets">重点市场</a>
            <a href="#services">服务</a>
            <a href="#cases">项目案例</a>
            <a href="#about">关于励行</a>
          </nav>
          <a className="button button-outline" href="#contact">沟通出海需求 <span className="arrow" aria-hidden="true">↗</span></a>
        </div>
      </header>
      <main id="main">
        <section className="hero dark" aria-labelledby="hero-title">
          <div className="hero-image"><img src="/images/lixing/hero-consulting-generated.webp" width={1836} height={857} alt="" /></div>
          <div className="wrap hero-inner">
            <div className="hero-copy">
              <p className="hero-context">中亚与法语区新兴市场</p>
              <h1 id="hero-title"><span>从市场研判，</span><span>到海外项目落地</span></h1>
              <p>为中国企业提供<span className="word">商务考察、</span><wbr /><span className="word">产业出海落地</span>与<span className="word">海外产业投资服务。</span></p>
              <div className="hero-actions">
                <a className="button button-gold" href="#contact">沟通出海需求 <span className="arrow" aria-hidden="true">↗</span></a>
                <a className="button button-outline" href="#cases">查看项目案例 <span className="arrow" aria-hidden="true">↓</span></a>
              </div>
            </div>
          </div>
        </section>
        <div className="proof">
          <div className="wrap proof-grid">
            <div className="proof-item"><strong>2017</strong><span>成立年份</span></div>
            <div className="proof-item"><strong>300+</strong><span>政企客户服务积累</span></div>
            <div className="proof-item"><strong>广州总部</strong><span>巴黎、塔什干、万象办事处</span></div>
          </div>
        </div>
        <section className="section" id="cases" aria-labelledby="cases-title">
          <div className="wrap">
            <div className="section-head">
              <div><span className="section-rule" aria-hidden="true"></span><h2 id="cases-title">代表项目</h2></div>
            </div>
            <div className="case-grid">
              <article className="case-feature">
                <a className="case-link" href="#case-park" aria-haspopup="dialog" data-dialog="case-park" aria-label="查看安集延州现代化工业园案例">
                  <div className="case-photo"><img src="/images/lixing/homepage-park.webp" alt="工业园区航拍配图" /></div>
                  <div className="case-body">
                    <p className="case-place">乌兹别克斯坦 · 产业投资</p>
                    <h3>安集延州现代化工业园</h3>
                    <p className="case-desc">协助佛山企业投资建设工业园，并支持其旗下企业在当地建厂。</p>
                    <p className="case-meta"><strong>已正式动工</strong><span>82 公顷园区规划面积</span></p>
                  </div>
                  <span className="case-open" aria-hidden="true">↗</span>
                </a>
              </article>
              <article className="case-minor">
                <a className="case-link" href="#case-water" aria-haspopup="dialog" data-dialog="case-water" aria-label="查看中乌水务行业组团出海案例">
                  <div className="case-photo"><img src="/images/lixing/homepage-water.webp" alt="水处理设施配图" /></div>
                  <div className="case-body">
                    <p className="case-place">乌兹别克斯坦 · 水务</p>
                    <h3><span className="word">中乌水务</span><wbr /><span className="word">行业组团出海</span></h3>
                    <p className="case-desc">组织中国水务企业赴乌考察，已与中方相关专业单位签署合作协议。</p>
                    <p className="case-meta"><strong>推进合作中心筹建</strong></p>
                  </div>
                  <span className="case-open" aria-hidden="true">↗</span>
                </a>
              </article>
              <article className="case-minor">
                <a className="case-link" href="#case-livestock" aria-haspopup="dialog" data-dialog="case-livestock" aria-label="查看畜牧产业出海案例">
                  <div className="case-photo"><img src="/images/lixing/homepage-livestock.webp" alt="畜牧产业配图" /></div>
                  <div className="case-body">
                    <p className="case-place">乌兹别克斯坦 · 畜牧</p>
                    <h3>畜牧产业出海</h3>
                    <p className="case-desc">协助国内龙头企业与乌兹别克斯坦农业部达成活牛出口长期协议。</p>
                    <p className="case-meta"><strong>首批试运推进中</strong></p>
                  </div>
                  <span className="case-open" aria-hidden="true">↗</span>
                </a>
              </article>
            </div>
            <p className="media-note">案例封面为项目配图。</p>
          </div>
        </section>
        <section className="section services" id="services" aria-labelledby="services-title">
          <div className="wrap">
            <div className="section-head">
              <div><span className="section-rule" aria-hidden="true"></span><h2 id="services-title">我们提供的服务</h2></div>
            </div>
            <div className="service-list">
              <details className="service">
                <summary>
                  <h3>企业商务考察</h3>
                  <div className="service-lead"><strong>想评估市场，或寻找合作伙伴</strong><span>定制考察路线和拜访议题，考察后形成机会清单。</span></div>
                  <span className="service-indicator" aria-hidden="true"></span>
                </summary>
                <div className="service-detail">
                  <p><strong>服务内容</strong>　需求访谈、市场初步研判、路线设计、政府与园区拜访、当地企业及潜在客户约见、商务翻译和现场协调。</p>
                  <p><strong>适用场景</strong>　首次了解目标市场、验证产品需求、考察投资条件，或组织行业团组集体出海。</p>
                </div>
              </details>
              <details className="service">
                <summary>
                  <h3>产业出海落地</h3>
                  <div className="service-lead"><strong>已有合作方向，需要推动项目执行</strong><span>核查合作方和项目机会，协助选址、谈判与阶段性跟进。</span></div>
                  <span className="service-indicator" aria-hidden="true"></span>
                </summary>
                <div className="service-detail">
                  <p><strong>服务内容</strong>　合作方筛选和背景核查、项目机会验证、合作路径设计、园区及厂房沟通、法税和人力服务对接、商务谈判协调。</p>
                  <p><strong>适用场景</strong>　准备设立海外公司、工厂或服务中心，或推动产业链上下游共同落地。</p>
                </div>
              </details>
              <details className="service">
                <summary>
                  <h3>海外产业投资</h3>
                  <div className="service-lead"><strong>准备投资建厂、合资或长期经营</strong><span>研判投资环境、园区条件和合作模式，支持投资项目落地。</span></div>
                  <span className="service-indicator" aria-hidden="true"></span>
                </summary>
                <div className="service-detail">
                  <p><strong>服务内容</strong>　投资机会研判、产业政策分析、投资模式设计、园区及选址对接、本地合作方筛选和长期跟进。</p>
                  <p><strong>适用场景</strong>　园区开发、基础设施或产业项目投资，以及合资、并购等长期经营安排。</p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="section" id="markets" aria-labelledby="markets-title">
          <div className="wrap">
            <div className="section-head">
              <div><span className="section-rule" aria-hidden="true"></span><h2 id="markets-title">重点市场</h2></div>
            </div>
            <div className="market-grid">
              <article className="market">
                <img src="/images/lixing/homepage-central-asia.webp" alt="乌兹别克斯坦历史建筑" />
                <div className="market-body">
                  <h3><a href="/destinations/uzbekistan"><span className="word">乌兹别克斯坦</span><wbr /><span className="word">与中亚</span></a></h3>
                  <p>依托塔什干代表处，对接当地政府、园区、企业与专业服务机构，支持企业进入中亚市场。</p>
                </div>
              </article>
              <article className="market">
                <img src="/images/lixing/homepage-francophone.webp" alt="巴黎塞纳河沿岸" />
                <div className="market-body">
                  <h3><a href="/destinations/francophone-markets">法国与法语区</a></h3>
                  <p>依托巴黎运营团队，连接媒体、活动和渠道资源，支持企业开展法语区市场测试。</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="about" id="about" aria-labelledby="about-title">
          <div className="wrap about-inner">
            <h2 id="about-title">出得去，走得稳，<br />扎得深，回得来。</h2>
            <div>
              <p>广州励行信息科技有限公司成立于 2017 年，专注于产业出海咨询与服务。</p>
              <p>励行依托在地团队，把资金方、项目方、智库、产业链上下游和属地伙伴组织到同一项目中，支持企业组团出海。</p>
            </div>
          </div>
        </section>
        <section className="contact dark" id="contact" aria-labelledby="contact-title">
          <div className="wrap contact-inner">
            <div><h2 id="contact-title">沟通出海需求</h2><p>欢迎带着你的行业、目标市场和项目阶段来聊。</p><p>微信：{site.contact.wechat}</p></div>
            <a className="button button-gold" href="/contact">填写咨询需求 <span className="arrow" aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>
      <footer className="footer dark">
        <div className="wrap footer-inner">
          <BrandLockup />
          <p>广州励行信息科技有限公司</p>
          <a href="#top">返回顶部 ↑</a>
          <div className="footer-links">
            <a href="/services">全部服务</a>
              <a href="/cases">全部案例</a>
              <a href="/resources">资源网络</a>
            <a href="/legal/privacy">隐私政策</a>
            <a href="/legal/cookie">Cookie 政策</a>
          </div>
        </div>
      </footer>
      <dialog id="case-park" aria-labelledby="park-title">
        <div className="dialog-inner">
          <div className="dialog-head"><h2 id="park-title">安集延州现代化工业园</h2><form method="dialog"><button className="dialog-close" aria-label="关闭案例" type="submit">×</button></form></div>
          <figure><img src="/images/lixing/homepage-park-detail.webp" alt="工业园区案例施工照片" /><figcaption>品牌手册稿所附项目照片</figcaption></figure>
          <p><strong>励行参与</strong>　协助佛山某企业在乌兹别克斯坦安集延州投资建设现代化工业园，并协助其旗下电气设备公司在当地投资建厂。</p>
          <p><strong>项目进展</strong>　工业园规划面积 82 公顷。项目获乌方总统令政策支持，纳入中乌产能合作重点项目清单，已正式动工。</p>
        </div>
      </dialog>
      <dialog id="case-water" aria-labelledby="water-title">
        <div className="dialog-inner">
          <div className="dialog-head"><h2 id="water-title">中乌水务行业组团出海</h2><form method="dialog"><button className="dialog-close" aria-label="关闭案例" type="submit">×</button></form></div>
          <figure><img src="/images/lixing/homepage-water-detail.webp" alt="水务专题考察团合影" /><figcaption>原宣传册所附水务案例照片</figcaption></figure>
          <p><strong>励行参与</strong>　2026 年，励行出海联合飞世出海，组织国内多家头部水务企业赴乌开展专题考察。</p>
          <p><strong>项目进展</strong>　励行已与中国住建系统相关专业单位签署合作协议，正在推进与乌方共同筹建中乌水务合作中心的事宜。</p>
          <p><strong>合作方向</strong>　筛选乌方项目、组织技术交流、共建项目库与资源池，推动中国水务技术、标准、装备及运营经验在乌应用。</p>
        </div>
      </dialog>
      <dialog id="case-livestock" aria-labelledby="livestock-title">
        <div className="dialog-inner">
          <div className="dialog-head"><h2 id="livestock-title">畜牧产业出海</h2><form method="dialog"><button className="dialog-close" aria-label="关闭案例" type="submit">×</button></form></div>
          <figure><img src="/images/lixing/homepage-livestock-detail.webp" alt="畜牧合作案例会谈照片" /><figcaption>品牌手册稿所附会谈照片</figcaption></figure>
          <p><strong>励行参与</strong>　协助国内某龙头畜牧企业与乌兹别克斯坦农业部达成活牛出口长期协议。</p>
          <p><strong>协议规模</strong>　长期协议约定累计 5 万头，货值约 10 亿元人民币。首批试运工作正在推进。</p>
          <p><strong>合作内容</strong>　推进活畜集采和分销体系、行业标准、人才培养、设备与养殖技术配套，以及饲料和营养管理支持。</p>
        </div>
      </dialog>
    </HomeInteractions>
  );
}
