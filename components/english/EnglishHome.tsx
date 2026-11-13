import Link from "next/link";
import { HomeInteractions } from "@/components/layout/HomeInteractions";
import { featuredProjects } from "@/data/english-interior";
import { site } from "@/data/site";

const imageRoot = "/images/lixing";
const projectMedia = [
  { id: "park", image: "homepage-park.webp", detailImage: "homepage-park-detail.webp", alt: "Construction work at the industrial park" },
  { id: "water", image: "homepage-water.webp", detailImage: "homepage-water-detail.webp", alt: "Participants in the water-sector study visit" },
  { id: "livestock", image: "homepage-livestock.webp", detailImage: "homepage-livestock-detail.webp", alt: "Meeting on livestock export cooperation" },
];

const services = [
  {
    title: "Business Visits", heading: "Assess a market or find local partners",
    summary: "We design each visit around your questions and identify opportunities worth following up.",
    scope: "Market research, itinerary design, meetings with government agencies, industrial parks and potential customers, interpretation and on-site coordination.",
    fit: "Exploring a market for the first time, testing demand, assessing investment conditions or organizing an industry delegation.",
    href: "/en/services/business-visit",
  },
  {
    title: "Market Entry Support", heading: "Move a project from discussion to execution",
    summary: "We check partners and project opportunities and support site selection, negotiations and follow-up.",
    scope: "Partner screening, due diligence, project assessment, site and facility discussions, and introductions to legal, tax and HR providers.",
    fit: "Setting up a local company, factory or service center, or coordinating a move with suppliers and other industry partners.",
    href: "/en/services/market-entry-support",
  },
  {
    title: "Overseas Industrial Investment", heading: "Plan a facility, joint venture or long-term operation",
    summary: "We assess the investment environment, site conditions and partnership models, then support project execution.",
    scope: "Opportunity assessment, industrial policy analysis, investment structuring, site introductions, local partner screening and ongoing follow-up.",
    fit: "Industrial park development, infrastructure or industrial projects, joint ventures, acquisitions and other long-term operations.",
    href: "/en/services/market-entry-support#industrial-investment",
  },
];

function HomeHeading({ id, children }: { id: string; children: string }) {
  return <div className="section-head"><div><span className="section-rule" aria-hidden="true" /><h2 id={id}>{children}</h2></div></div>;
}

export function EnglishHome() {
  return (
    <HomeInteractions>
      <section className="hero dark" aria-labelledby="hero-title">
        <div className="hero-image"><img src={imageRoot + "/hero-consulting-generated.webp"} width={1836} height={857} alt="" /></div>
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <p className="hero-context">Central Asia and Francophone markets</p>
            <h1 id="hero-title">From market assessment to project execution</h1>
            <p>We help Chinese companies explore new markets, establish local operations and invest in industrial projects overseas.</p>
            <div className="hero-actions">
              <Link className="button button-gold" href="/en/contact">Discuss your plans</Link>
              <a className="button button-outline" href="#cases">View projects <span className="arrow" aria-hidden="true">&#8595;</span></a>
            </div>
          </div>
        </div>
      </section>
      <div className="proof">
        <div className="wrap proof-grid">
          <div className="proof-item"><strong>2017</strong><span>Founded</span></div>
          <div className="proof-item"><strong>300+</strong><span>Public and private sector clients served</span></div>
          <div className="proof-item"><strong>Guangzhou headquarters</strong><span>Offices in Paris, Tashkent and Vientiane</span></div>
        </div>
      </div>
      <section className="section" id="cases" aria-labelledby="cases-title">
        <div className="wrap">
          <HomeHeading id="cases-title">Featured projects</HomeHeading>
          <div className="case-grid">
            {featuredProjects.map((project, index) => {
              const media = projectMedia[index];
              return (
                <article key={media.id} className={index === 0 ? "case-feature" : "case-minor"}>
                  <a className="case-link" href={"#case-" + media.id} aria-haspopup="dialog" data-dialog={"case-" + media.id}>
                    <div className="case-photo"><img src={imageRoot + "/" + media.image} alt="" /></div>
                    <div className="case-body">
                      <p className="case-place">{project.sector}</p>
                      <h3>{project.title}</h3>
                      <p className="case-desc">{project.body}</p>
                      <p className="case-meta"><strong>{project.stage}</strong></p>
                    </div>
                    <span className="case-open" aria-hidden="true">&#8599;</span>
                  </a>
                </article>
              );
            })}
          </div>
          <p className="media-note">Project cover images are illustrative.</p>
        </div>
      </section>
      <section className="section services" id="services" aria-labelledby="services-title">
        <div className="wrap">
          <HomeHeading id="services-title">How we can help</HomeHeading>
          <div className="service-list">
            {services.map(service => (
              <details className="service" key={service.title}>
                <summary>
                  <h3>{service.title}</h3>
                  <div className="service-lead"><strong>{service.heading}</strong><span>{service.summary}</span></div>
                  <span className="service-indicator" aria-hidden="true" />
                </summary>
                <div className="service-detail">
                  <p><strong>What we do</strong> {service.scope}</p>
                  <p><strong>When to use it</strong> {service.fit}</p>
                  <p><Link href={service.href}>Explore this service</Link></p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="markets" aria-labelledby="markets-title">
        <div className="wrap">
          <HomeHeading id="markets-title">Where we work</HomeHeading>
          <div className="market-grid">
            <article className="market">
              <img src={imageRoot + "/homepage-central-asia.webp"} alt="Historic architecture in Uzbekistan" />
              <div className="market-body">
                <h3><Link href="/en/destinations/uzbekistan">Uzbekistan and Central Asia</Link></h3>
                <p>Our Tashkent office connects companies with local government agencies, industrial parks, business partners and professional advisers.</p>
              </div>
            </article>
            <article className="market">
              <img src={imageRoot + "/homepage-francophone.webp"} alt="The Seine in Paris" />
              <div className="market-body">
                <h3><Link href="/en/destinations/francophone-markets">France and Francophone markets</Link></h3>
                <p>Our Paris team connects companies with media, events and distribution channels to help them test demand and messaging.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="about" id="about" aria-labelledby="about-title">
        <div className="wrap about-inner">
          <h2 id="about-title">Build a lasting presence overseas</h2>
          <div>
            <p>Founded in Guangzhou in 2017, LEXON Overseas provides consulting and project support for Chinese companies expanding internationally.</p>
            <p>Our local teams bring together investors, project owners, advisers, supply-chain companies and local partners to move projects forward.</p>
          </div>
        </div>
      </section>
      <section className="contact dark" id="contact" aria-labelledby="contact-title">
        <div className="wrap contact-inner">
          <div><h2 id="contact-title">Discuss your expansion plans</h2><p>Tell us about your industry, target market and where your project stands today.</p><p>WeChat: {site.contact.wechat}</p></div>
          <Link className="button button-gold" href="/en/contact">Send an inquiry <span className="arrow" aria-hidden="true">&#8599;</span></Link>
        </div>
      </section>
      {featuredProjects.map((project, index) => {
        const media = projectMedia[index];
        return (
          <dialog key={media.id} id={"case-" + media.id} aria-labelledby={"title-" + media.id}>
            <div className="dialog-inner">
              <div className="dialog-head"><h2 id={"title-" + media.id}>{project.title}</h2><form method="dialog"><button className="dialog-close" aria-label="Close project details" type="submit">&times;</button></form></div>
              <figure><img src={imageRoot + "/" + media.detailImage} alt={media.alt} /><figcaption>{media.alt}</figcaption></figure>
              <p><strong>Our role</strong> {project.body}</p>
              <p><strong>Project status</strong> {project.progress}</p>
              <Link href="/en/cases" className="en-button mt-4">View project portfolio</Link>
            </div>
          </dialog>
        );
      })}
    </HomeInteractions>
  );
}
