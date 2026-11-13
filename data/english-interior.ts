export type InteriorDetail = {
  title: string;
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
  sections: readonly { title: string; items: readonly string[] }[];
  contact: string;
};

export const serviceDetails = {
  businessVisit: {
    title: "Business Visits",
    heading: "Business visits built around a decision",
    description: "Meet the people who can answer your questions about a market, a partner or an investment opportunity.",
    image: "service-business-visit.webp",
    imageAlt: "Business visit and discussion",
    sections: [
      {
        title: "Before the visit",
        items: [
          "Define the decisions the visit needs to inform and the questions to test on the ground.",
          "Design the itinerary, meeting agendas and list of proposed organisations.",
          "Coordinate meetings with public agencies, industrial parks, companies, industry associations, universities and specialist firms.",
        ],
      },
      {
        title: "During and after the visit",
        items: [
          "Provide interpretation and on-site coordination.",
          "Document findings, open questions and promising opportunities.",
          "Summarise risks and recommend next steps.",
        ],
      },
      {
        title: "Who it helps",
        items: [
          "Company leaders and investment teams assessing a new market or project.",
          "Business schools, trade associations and industry delegations organising a focused visit.",
        ],
      },
    ],
    contact: "Plan a business visit",
  },
  marketEntry: {
    title: "Market Entry Support",
    heading: "Move a qualified opportunity towards execution",
    description: "For companies that have chosen a market, identified a potential partner or are preparing to establish a local presence.",
    image: "service-project-landing.webp",
    imageAlt: "Discussion on project implementation",
    sections: [
      {
        title: "Assess the opportunity",
        items: [
          "Verify project leads and screen prospective partners.",
          "Compare industrial parks, sites and facilities against your operating requirements.",
          "Identify where policy, compliance, staffing or logistics need specialist input.",
        ],
      },
      {
        title: "Coordinate the next steps",
        items: [
          "Arrange discussions with relevant public agencies, parks and professional advisers.",
          "Connect you with local firms covering registration, legal, tax, recruitment and logistics needs.",
          "Support commercial discussions and follow up on the agreed work.",
        ],
      },
      {
        title: "What you receive",
        items: [
          "A shortlist of relevant contacts, sites or advisers.",
          "A summary of risks and open decisions.",
          "A phased plan for moving the opportunity forward.",
        ],
      },
    ],
    contact: "Discuss market entry",
  },
  overseasMarketing: {
    title: "Overseas Marketing and Market Testing",
    heading: "Find out how local audiences respond to your brand",
    description: "Use French events, media and channels to test a brand proposition before committing to a wider rollout in Francophone markets.",
    image: "service-overseas-marketing.webp",
    imageAlt: "Overseas brand promotion and events",
    sections: [
      {
        title: "Design the test",
        items: [
          "Choose the audiences and channels you want to learn from.",
          "Plan event participation, media outreach and local-language messaging.",
          "Account for differences between France and other Francophone markets in Europe and Africa.",
        ],
      },
      {
        title: "Who it helps",
        items: [
          "Consumer brands, health-product companies and organisations in education, culture or tourism.",
          "Teams exploring customer response or potential distribution partners before investing in wider promotion.",
        ],
      },
      {
        title: "What you receive",
        items: [
          "A market testing plan and communications themes.",
          "Event and media recommendations.",
          "Guidance on adapting messaging and positioning.",
        ],
      },
    ],
    contact: "Discuss a market test",
  },
} satisfies Record<string, InteriorDetail>;

export const investment = {
  title: "Overseas Industrial Investment",
  description: "Assess industrial investment opportunities and plan how to establish or expand operations in the target market.",
  items: [
    "Review industrial policy, market demand, infrastructure, workforce conditions and site options.",
    "Compare investment structures for a plant, joint venture, industrial park or long-term operation.",
    "Identify relevant local partners and advisers for registration, tax, staffing and supply chain needs.",
    "Coordinate with investment promotion and industrial park teams and follow up as the project advances.",
  ],
};

export const destinationDetails = {
  uzbekistan: {
    title: "Uzbekistan and Central Asia",
    heading: "Explore Central Asia through Uzbekistan",
    description: "Through its Tashkent representative office, LEXON Overseas helps companies assess opportunities and build local relationships in Uzbekistan.",
    image: "homepage-central-asia.webp",
    imageAlt: "Historic architecture in Uzbekistan",
    sections: [
      {
        title: "Sectors we work with",
        items: ["Manufacturing and industrial parks", "Renewable energy", "Agriculture and livestock", "Water and environmental infrastructure", "Logistics and vocational education"],
      },
      {
        title: "Local introductions",
        items: [
          "Relevant public agencies and investment promotion bodies.",
          "Industrial parks, industry associations and local companies.",
          "Universities, vocational training providers and professional services firms.",
        ],
      },
      {
        title: "Questions to resolve before investing",
        items: [
          "Does the project and proposed partner hold up to further review?",
          "What are the costs and practical constraints around the site, workforce and supply chain?",
          "Which policy, payment and compliance questions need local verification?",
        ],
      },
    ],
    contact: "Discuss Uzbekistan market entry",
  },
  francophone: {
    title: "France and Francophone Markets",
    heading: "Use France to test your approach to Francophone markets",
    description: "Our Paris team helps companies test messaging and channels through events, media and commercial contacts before considering wider expansion.",
    image: "homepage-francophone.webp",
    imageAlt: "The banks of the Seine in Paris",
    sections: [
      {
        title: "What to test in France",
        items: ["Brand messaging and customer feedback", "Event and media formats", "Distribution and channel options", "Cultural or educational partnerships"],
      },
      {
        title: "Sectors we work with",
        items: ["Consumer goods and health products", "Education and vocational training", "Culture and tourism", "Light industry and trade in services"],
      },
      {
        title: "Planning the next market",
        items: [
          "Use early feedback to refine your offer and local-language messaging.",
          "Compare audiences, distribution channels and partners in individual Francophone markets in Europe and Africa.",
          "Review local conditions before deciding whether to expand beyond the French test.",
        ],
      },
    ],
    contact: "Discuss a Francophone market test",
  },
} satisfies Record<string, InteriorDetail>;

export const serviceFaqs = [
  {
    question: "Can we start with market screening?",
    answer: "Yes. We can help you compare markets and decide whether an in-person visit is worthwhile.",
  },
  {
    question: "What happens after a business visit?",
    answer: "We summarise the opportunities, risks and next decisions. If you choose to proceed, we can help evaluate sites or partners and coordinate introductions to local advisers.",
  },
  {
    question: "Do introductions guarantee a partnership?",
    answer: "We help screen potential counterparts, arrange meetings and verify information from multiple sources. Each company decides whether to proceed.",
  },
  {
    question: "When will we receive a list of people to meet?",
    answer: "Once the project scope is clear, we identify relevant counterparts and propose meeting topics. Some details are shared only within the agreed project scope.",
  },
];

export type EnglishProject = {
  title: string;
  id: string;
  sector: string;
  stage: string;
  body: string;
  progress: string;
  image: string;
  imageAlt: string;
};

export const featuredProjects = [
  {
    id: "andijan-industrial-park",
    title: "Modern industrial park in Andijan Region",
    sector: "Uzbekistan · Industrial investment",
    stage: "Construction started",
    body: "LEXON Overseas assisted a Foshan company with its investment in an 82-hectare industrial park and supported a subsidiary planning to establish a local electrical equipment plant.",
    progress: "The park received policy support through an Uzbek presidential decree, was included on the China–Uzbekistan priority list for industrial capacity cooperation and has begun construction.",
    image: "homepage-park.webp",
    imageAlt: "Illustrative aerial view of an industrial park",
  },
  {
    id: "water-sector-cooperation",
    title: "China–Uzbekistan water sector cooperation",
    sector: "Uzbekistan · Water infrastructure",
    stage: "Preparatory work in progress",
    body: "In 2026, LEXON Overseas and a Chinese partner organised a sector-specific visit to Uzbekistan for Chinese water companies.",
    progress: "LEXON Overseas signed a cooperation agreement with a relevant Chinese specialist organisation and is working with Uzbek counterparts on plans for a joint water cooperation centre.",
    image: "homepage-water.webp",
    imageAlt: "Illustrative view of a water treatment facility",
  },
  {
    id: "livestock-export",
    title: "Livestock export cooperation",
    sector: "Uzbekistan · Livestock",
    stage: "First trial shipment in progress",
    body: "LEXON Overseas assisted a Chinese livestock company in reaching a long-term agreement with Uzbekistan’s Ministry of Agriculture covering the export of a total of 50,000 head of cattle, valued at approximately RMB 1 billion.",
    progress: "Work on the first trial shipment is underway. The cooperation also covers plans for procurement and distribution, technical support and workforce training.",
    image: "homepage-livestock.webp",
    imageAlt: "Illustrative image of cattle",
  },
] satisfies EnglishProject[];

export const caseSnapshots = [
  {
    title: "Industrial site assessment for a manufacturer",
    context: "Uzbekistan · Business visit",
    challenge: "A manufacturer needed first-hand information on where it could establish production.",
    work: "We organised meetings on land, policy, suppliers and labour, then compared findings from different local sources.",
    outcome: "An initial market entry assessment, a shortlist of opportunities and recommended next steps.",
  },
  {
    title: "Water and environmental project screening",
    context: "Central Asia · Project assessment",
    challenge: "A client needed to assess the credibility, counterparties and potential costs of early-stage project leads.",
    work: "We reviewed the leads with relevant organisations and flagged questions on policy, payment and counterparties.",
    outcome: "A preliminary assessment of which leads to pursue and which needed further verification.",
  },
  {
    title: "Solar project partner screening",
    context: "Central Asia · Market entry",
    challenge: "A renewable energy company needed to assess prospective partners and their ability to deliver.",
    work: "We arranged interviews and site discussions on policy, project feasibility and local delivery capacity.",
    outcome: "An initial partner shortlist and recommendations for further assessment.",
  },
  {
    title: "A Francophone market test for a consumer brand",
    context: "France · Overseas marketing",
    challenge: "A consumer brand needed a practical way to test how potential customers would respond.",
    work: "We proposed events, media outreach and local-language messaging in France as a first step.",
    outcome: "A market testing plan and recommendations for adapting the brand’s positioning.",
  },
  {
    title: "Business delegation to Europe and Hong Kong",
    context: "Europe and Hong Kong · Business visit",
    challenge: "A delegation wanted to understand the investment environment and potential business partnerships in Europe, as well as Hong Kong’s capital markets.",
    work: "We arranged discussions on European investment policy, business cooperation and the Hong Kong listing process.",
    outcome: "A framework for evaluating opportunities and topics for follow-up.",
  },
  {
    title: "Eldercare training and exchange",
    context: "Japan · Business visit",
    challenge: "A client wanted to learn from Japanese eldercare providers and explore staff training.",
    work: "We arranged visits and discussions with providers, training organisations and sector specialists.",
    outcome: "An outline for follow-up training and professional exchange.",
  },
];

export const resourceGroups = [
  {
    title: "Public agencies and investment promotion bodies",
    body: "Discuss policy, local industrial priorities and possible investment requirements in Uzbekistan. Typical outputs include meeting topics and an initial list of conditions to verify.",
  },
  {
    title: "Industry associations and business networks",
    body: "Cross-check market information and learn from companies with local operating experience. Typical outputs include proposed meetings and leads for follow-up.",
  },
  {
    title: "Industrial parks and sites",
    body: "Compare land, costs, utilities, suppliers and logistics. Typical outputs include a shortlist, site visits and a comparison of conditions.",
  },
  {
    title: "Professional advisers",
    body: "Identify local specialists for registration, law, tax, recruitment, finance and logistics. We help arrange introductions and identify the questions each adviser needs to address.",
  },
  {
    title: "Universities and vocational training providers",
    body: "Explore workforce training and institutional exchanges. Typical outputs include proposed introductions and topics for discussion.",
  },
  {
    title: "Brand events, cultural programmes and media",
    body: "Test local-language messaging and audience response in France. Typical outputs include event and media recommendations and proposed themes.",
  },
  {
    title: "Education and business networks in France",
    body: "Explore relevant education partners, commercial networks and channels. Typical outputs include interviews and a plan for testing demand.",
  },
  {
    title: "Logistics and business networks in Laos",
    body: "Compare regional shipping routes, costs and potential partners. Typical outputs include contacts for interviews and a comparison of route options.",
  },
];

export const projectProcess = [
  { title: "Define the decision", body: "Confirm the target market, budget, project stage and questions to investigate." },
  { title: "Design the work", body: "Agree on the meetings, site visits and expected deliverables." },
  { title: "Identify counterparts", body: "Screen relevant organisations and arrange introductions." },
  { title: "Coordinate on the ground", body: "Organise meetings, interpretation and site visits as needed." },
  { title: "Agree on next steps", body: "Summarise opportunities, risks and what the client needs to decide." },
];