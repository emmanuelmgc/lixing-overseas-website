import { ArrowLeft, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/data/site";

const englishAddress = "Room 2302, Poly Center, 5 Linjiang Avenue, Tianhe District, Guangzhou, China";
const phone = site.contact.phone.replace("（", "(").replace("）", ") ");
const telephoneHref = `tel:${site.contact.phone.replace(/[^+\d]/g, "")}`;

function ContactPage() {
  return (
    <>
      <section className="en-hero">
        <div className="en-shell">
          <p className="en-kicker">Contact</p>
          <h1>Discuss your overseas expansion plans</h1>
          <p>
            Tell us about your industry, target region and project stage. We can help you decide whether
            to start with market screening, a business visit, support on the ground or an overseas marketing discussion.
          </p>
          <a href="#inquiry" className="en-button">Tell us about your plans</a>
        </div>
      </section>
      <section id="inquiry" className="en-section scroll-mt-24">
        <div className="en-shell grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
          <div>
            <h2>Request a consultation</h2>
            <p>Share your target region and the main question you want to answer.</p>
            <address className="en-card mt-6 space-y-4 not-italic">
              <p className="flex gap-2">
                <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-gold" />
                {englishAddress}
              </p>
              <p className="flex gap-2">
                <Phone aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-gold" />
                <a href={telephoneHref}>{phone}</a>
              </p>
              <p>WeChat · {site.contact.wechat}</p>
            </address>
          </div>
          <ContactForm locale="en" />
        </div>
      </section>
    </>
  );
}

function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <section className="en-hero">
        <div className="en-shell">
          <Link href="/en" className="inline-flex items-center gap-2">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to home
          </Link>
          <h1 className="mt-5">{title}</h1>
          <p>Last updated in January 2026</p>
        </div>
      </section>
      <section className="en-section">
        <div className="en-shell">
          <article className="en-prose max-w-3xl space-y-5">{children}</article>
        </div>
      </section>
    </>
  );
}

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        LEXON Overseas (referred to as “we” in this policy) takes your privacy seriously. This policy
        explains how we collect, use, store and protect your personal information when you visit our
        website, contact us or use our services.
      </p>

      <h2>1. Information we collect</h2>
      <p>
        When you contact us through our website form, by email or by phone, we may collect your name,
        company, job title, phone number, email address, WeChat details, the contents of your inquiry
        and any other information you choose to provide.
      </p>

      <h2>2. How we use your information</h2>
      <p>We use your information only for the following purposes.</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Responding to your inquiry and providing relevant overseas expansion consulting and implementation support.</li>
        <li>Discussing market screening, business visits, implementation support and overseas marketing consulting as agreed with you.</li>
        <li>Meeting our obligations under applicable laws and regulations.</li>
      </ul>
      <p>
        We will not use your information for other purposes without your consent. We will not sell
        or transfer your personal information to third parties.
      </p>

      <h2>3. Storage and protection</h2>
      <p>
        We use standard industry security measures to protect your personal information from unauthorized
        access, disclosure or destruction. We retain it only for the shortest period necessary to fulfill
        the purposes described in this policy.
      </p>

      <h2>4. Your rights</h2>
      <p>
        You may contact us at any time to access, correct or delete personal information we hold about you.
      </p>

      <h2>5. Changes to this policy</h2>
      <p>
        We may update this policy as our business practices or applicable laws and regulations change.
        Updates take effect when published on this website.
      </p>

      <h2>6. Contact us</h2>
      <p>If you have questions about this policy, please contact us using the details below.</p>
      <ul className="list-none space-y-2">
        <li>Phone · <a href={telephoneHref}>{phone}</a></li>
        <li>Address · {englishAddress}</li>
      </ul>
    </LegalPage>
  );
}

function CookiePage() {
  return (
    <LegalPage title="Cookie Notice">
      <p>
        This website uses cookies and similar technologies to provide a smoother and more secure
        browsing experience. This notice explains the types of cookies we use and why we use them.
      </p>

      <h2>1. What cookies are</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They help us
        recognize your browser, remember your preferences and provide a more personalized experience.
      </p>

      <h2>2. Types of cookies we use</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>Essential cookies.</strong> These keep core site features, such as page routing and
          security verification, working. They cannot be turned off.
        </li>
        <li>
          <strong>Analytics cookies.</strong> These help us understand how visitors use the website
          so we can improve its content and browsing experience. All data is anonymous and aggregated
          and contains no personally identifiable information.
        </li>
      </ul>

      <h2>3. Managing cookies</h2>
      <p>
        You can use your browser settings at any time to clear stored cookies or prevent websites
        from storing new ones. Some website features may not work properly if you disable certain cookies.
      </p>

      <h2>4. Contact us</h2>
      <p>If you have questions about this notice, please use our <Link href="/en/contact">contact page</Link>.</p>
    </LegalPage>
  );
}

export const englishContactLegalPages = {
  "/contact": {
    title: "Contact",
    description: "Tell LEXON Overseas about your target market, project stage and overseas expansion plans.",
    render: () => <ContactPage />,
  },
  "/legal/privacy": {
    title: "Privacy Policy",
    description: "How LEXON Overseas collects, uses, stores and protects personal information.",
    render: () => <PrivacyPage />,
  },
  "/legal/cookie": {
    title: "Cookie Notice",
    description: "How LEXON Overseas uses cookies and similar technologies on this website.",
    render: () => <CookiePage />,
  },
};
