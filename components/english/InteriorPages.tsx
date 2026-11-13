import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  caseSnapshots,
  destinationDetails,
  featuredProjects,
  investment,
  projectProcess,
  resourceGroups,
  serviceDetails,
  serviceFaqs,
  type EnglishProject,
  type InteriorDetail,
} from "@/data/english-interior";

const imagePath = "/images/lixing";

type EnglishInteriorPage = {
  title: string;
  description: string;
  render: () => ReactNode;
};

function Hero({ detail }: { detail: InteriorDetail }) {
  return (
    <section className="en-hero">
      <div className="en-shell en-grid">
        <div>
          <p className="en-kicker">{detail.title}</p>
          <h1>{detail.heading}</h1>
          <p>{detail.description}</p>
          <Link className="en-button mt-6" href="/en/contact">{detail.contact}</Link>
        </div>
        <div className="relative aspect-[5/3] overflow-hidden">
          <Image
            src={`${imagePath}/${detail.image}`}
            alt={detail.imageAlt}
            fill
            sizes="(min-width: 1024px) 45vw, 92vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Section({
  title,
  intro,
  id,
  children,
}: {
  title: string;
  intro?: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section className="en-section" id={id}>
      <div className="en-shell">
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

function ContactCTA({ title, action }: { title: string; action: string }) {
  return (
    <Section title={title}>
      <Link className="en-button" href="/en/contact">{action}</Link>
    </Section>
  );
}

function Detail({ detail, children }: { detail: InteriorDetail; children?: ReactNode }) {
  return (
    <>
      <Hero detail={detail} />
      <Section title="How we can help">
        <div className="en-grid">
          {detail.sections.map((section) => (
            <article className="en-card" key={section.title}>
              <h3>{section.title}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {section.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>
      {children}
      <ContactCTA title="Tell us what you’re working on" action={detail.contact} />
    </>
  );
}

function FeaturedProjects({ projects }: { projects: readonly EnglishProject[] }) {
  return (
    <div className="en-grid">
      {projects.map((project) => (
        <article className="en-card" id={project.id} key={project.id}>
          <div className="relative mb-4 aspect-[16/9] overflow-hidden">
            <Image
              src={`${imagePath}/${project.image}`}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 35vw, 92vw"
              className="object-cover"
            />
          </div>
          <p className="en-kicker">{project.sector}</p>
          <h3>{project.title}</h3>
          <p className="mt-2 font-semibold">{project.stage}</p>
          <p className="mt-3">{project.body}</p>
          <p className="mt-3">{project.progress}</p>
        </article>
      ))}
    </div>
  );
}

function ProjectSnapshots({ snapshots }: { snapshots: readonly (typeof caseSnapshots)[number][] }) {
  return (
    <div className="en-grid">
      {snapshots.map((project) => (
        <article className="en-card" key={project.title}>
          <p className="en-kicker">{project.context}</p>
          <h3>{project.title}</h3>
          <dl className="mt-4 space-y-3">
            <div><dt className="font-semibold">Client question</dt><dd>{project.challenge}</dd></div>
            <div><dt className="font-semibold">Our work</dt><dd>{project.work}</dd></div>
            <div><dt className="font-semibold">Outcome at this stage</dt><dd>{project.outcome}</dd></div>
          </dl>
        </article>
      ))}
    </div>
  );
}

const services = {
  title: "Services",
  heading: "From market assessment to project implementation",
  description: "LEXON Overseas helps Chinese companies assess opportunities, meet prospective partners and plan how to enter a market or invest there.",
  image: "service-business-visit.webp",
  imageAlt: "Participants at a business meeting",
  sections: [],
  contact: "Discuss your project",
} satisfies InteriorDetail;

const serviceLinks = [
  { title: serviceDetails.businessVisit.title, body: serviceDetails.businessVisit.description, href: "/en/services/business-visit" },
  { title: serviceDetails.marketEntry.title, body: serviceDetails.marketEntry.description, href: "/en/services/market-entry-support" },
  { title: investment.title, body: investment.description, href: "/en/services/market-entry-support#industrial-investment" },
];

function ServicesPage() {
  return (
    <>
      <Hero detail={services} />
      <Section title="Services for each stage">
        <div className="en-grid">
          {serviceLinks.map((service) => (
            <article className="en-card" key={service.href}>
              <h3><Link className="hover:underline" href={service.href}>{service.title}</Link></h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Overseas marketing and market testing">
        <p>{serviceDetails.overseasMarketing.description}</p>
        <Link className="en-button mt-4" href="/en/services/overseas-marketing">Explore market testing</Link>
      </Section>
      <Section title="Questions about our services">
        <div className="space-y-3">
          {serviceFaqs.map(({ question, answer }) => (
            <details className="en-card" key={question}>
              <summary className="cursor-pointer font-semibold">{question}</summary>
              <p className="mt-3">{answer}</p>
            </details>
          ))}
        </div>
      </Section>
      <ContactCTA title="Which service fits your project?" action="Discuss your project" />
    </>
  );
}

function MarketEntryPage() {
  return (
    <Detail detail={serviceDetails.marketEntry}>
      <Section title={investment.title} intro={investment.description} id="industrial-investment">
        <ul className="list-disc space-y-2 pl-5">
          {investment.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <Link className="en-button mt-5" href="/en/cases#andijan-industrial-park">See the Andijan industrial park case</Link>
      </Section>
    </Detail>
  );
}

const destinations = {
  title: "Markets",
  heading: "Choose a market that fits your project",
  description: "We focus on Uzbekistan and Central Asia, as well as France and other Francophone markets. Start by assessing your sector, budget and project stage.",
  image: "dest-uz-main.webp",
  imageAlt: "View of Uzbekistan",
  sections: [],
  contact: "Discuss market selection",
} satisfies InteriorDetail;

const marketLinks = [
  { detail: destinationDetails.uzbekistan, href: "/en/destinations/uzbekistan" },
  { detail: destinationDetails.francophone, href: "/en/destinations/francophone-markets" },
];

const marketQuestions = [
  { title: "Manufacturing", body: "In Central Asia, compare industrial sites, land availability and supply chains." },
  { title: "Renewable energy", body: "In Central Asia, verify the project and assess the policy environment before committing resources." },
  { title: "Consumer brands", body: "In France, test how customers respond and compare routes to market before expanding." },
  { title: "Education and training", body: "In Central Asia and Francophone markets, identify relevant institutions and discuss possible joint programmes." },
];

function DestinationsPage() {
  return (
    <>
      <Hero detail={destinations} />
      <Section title="Where we work">
        <div className="en-grid">
          {marketLinks.map(({ detail, href }) => (
            <article className="en-card" key={href}>
              <div className="relative mb-4 aspect-[16/9] overflow-hidden">
                <Image
                  src={`${imagePath}/${detail.image}`}
                  alt={detail.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 42vw, 92vw"
                  className="object-cover"
                />
              </div>
              <h3><Link className="hover:underline" href={href}>{detail.title}</Link></h3>
              <p>{detail.description}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="What to check by sector">
        <div className="en-grid">
          {marketQuestions.map(({ title, body }) => (
            <article className="en-card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

function UzbekistanPage() {
  return (
    <Detail detail={destinationDetails.uzbekistan}>
      <Section title="Selected projects in Uzbekistan">
        <FeaturedProjects projects={featuredProjects} />
      </Section>
    </Detail>
  );
}

function FrancophonePage() {
  return (
    <Detail detail={destinationDetails.francophone}>
      <Section title="A consumer brand’s market testing plan">
        <ProjectSnapshots snapshots={caseSnapshots.slice(3, 4)} />
        <Link className="en-button mt-5" href="/en/services/overseas-marketing">Explore overseas marketing support</Link>
      </Section>
    </Detail>
  );
}

const cases = {
  title: "Case Studies",
  heading: "How we support projects overseas",
  description: "See what companies set out to do, how LEXON Overseas helped and how far each project had progressed at the time reported.",
  image: "case-uz-park.webp",
  imageAlt: "Industrial park in Uzbekistan",
  sections: [],
  contact: "Discuss your project",
} satisfies InteriorDetail;

function CasesPage() {
  return (
    <>
      <Hero detail={cases} />
      <Section title="Featured projects">
        <FeaturedProjects projects={featuredProjects} />
      </Section>
      <Section title="Other project examples" intro="Client names are withheld in these examples.">
        <ProjectSnapshots snapshots={caseSnapshots} />
      </Section>
    </>
  );
}

const resources = {
  title: "Resources",
  heading: "Find the local people and organisations your project needs",
  description: "We identify potential counterparts based on the question you need to answer and the work you want to move forward.",
  image: "service-project-landing.webp",
  imageAlt: "Project discussion and coordination",
  sections: [],
  contact: "Discuss local introductions",
} satisfies InteriorDetail;

function ResourcesPage() {
  return (
    <>
      <Hero detail={resources} />
      <Section title="Who we can help you reach">
        <div className="en-grid">
          {resourceGroups.map(({ title, body }) => (
            <article className="en-card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="How we make introductions">
        <ol className="list-decimal space-y-4 pl-6">
          {projectProcess.map(({ title, body }) => (
            <li key={title}><strong>{title}</strong><p>{body}</p></li>
          ))}
        </ol>
      </Section>
    </>
  );
}

const about = {
  title: "About",
  heading: "About LEXON Overseas",
  description: "Founded in 2017 and headquartered in Guangzhou, LEXON Overseas advises Chinese companies on entering and operating in international markets.",
  image: "service-project-landing.webp",
  imageAlt: "International business discussion",
  sections: [],
  contact: "Contact LEXON Overseas",
} satisfies InteriorDetail;

const aboutBlocks = [
  {
    title: "Markets and offices",
    body: "Our core markets are Uzbekistan and Central Asia, and France and other Francophone markets. We have offices in Tashkent, Paris and Vientiane.",
  },
  {
    title: "How we work",
    body: "We start with the decision you need to make, gather evidence on the ground and turn our findings into a shortlist of opportunities, risks and next steps.",
  },
  {
    title: "Industry collaboration",
    body: "Where a project calls for a coordinated approach, we bring together investors, project owners, technical experts, supply chain companies and local partners.",
  },
  {
    title: "Who we work with",
    body: "Our clients include company leaders, investment and international business teams, industry associations, business schools and delegations.",
  },
];

function AboutPage() {
  return (
    <>
      <Hero detail={about} />
      <Section title="Our focus and approach">
        <div className="en-grid">
          {aboutBlocks.map(({ title, body }) => (
            <article className="en-card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

function page(detail: InteriorDetail, render: EnglishInteriorPage["render"]): EnglishInteriorPage {
  return { title: detail.title, description: detail.description, render };
}

export const englishInteriorPages = {
  "/services": page(services, ServicesPage),
  "/services/business-visit": page(serviceDetails.businessVisit, () => <Detail detail={serviceDetails.businessVisit} />),
  "/services/market-entry-support": page(serviceDetails.marketEntry, MarketEntryPage),
  "/services/overseas-marketing": page(serviceDetails.overseasMarketing, () => <Detail detail={serviceDetails.overseasMarketing} />),
  "/destinations": page(destinations, DestinationsPage),
  "/destinations/uzbekistan": page(destinationDetails.uzbekistan, UzbekistanPage),
  "/destinations/francophone-markets": page(destinationDetails.francophone, FrancophonePage),
  "/cases": page(cases, CasesPage),
  "/resources": page(resources, ResourcesPage),
  "/about": page(about, AboutPage),
} satisfies Record<string, EnglishInteriorPage>;
