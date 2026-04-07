import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "findhelp-services-tool",
    title: "FindHelp Services Tool",
    subtitle:
      "Designing a social services search engine connecting foster youth to 8,500+ local programs",
    category: "UX Design & Frontend Development",
    role: "UX Designer & Frontend Developer",
    timeline: "2025 — Present",
    tools: [
      "Figma",
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "Mapbox GL",
      "Findhelp API",
      "Google Gemini",
    ],
    heroImage: "/projects/findhelp/hero.png",
    overview:
      "Foster youth aging out of care need access to housing, food, healthcare, employment, and legal services — but finding them is overwhelming. I designed and built a ZIP-code-based search tool that connects users to 8,500+ programs across 8 social determinants of health categories, with map views, saved resource boards, and a community-driven feedback system.",
    sections: [
      {
        heading: "The Problem",
        body: "Foster youth transitioning to independence face a fragmented landscape of social services. Existing directories are hard to navigate, rarely mobile-friendly, and don't surface community-vetted resources. We needed a tool that felt as simple as a Google search but delivered curated, relevant results with real context.",
      },
      {
        heading: "User Research & Flow Design",
        body: "I mapped user flows for three distinct personas: a foster youth searching for immediate housing help, a caseworker researching options for a client, and a community member suggesting a resource they trust. Each flow needed to be completable in under 3 taps. I designed the search experience around a simple entry point — ZIP code + category — with progressive disclosure of filters (free-only, open now, community-approved) to avoid overwhelming first-time users.",
        images: [
          {
            src: "/projects/findhelp/resource-finder-preview.svg",
            alt: "Resource finder interface design",
          },
          {
            src: "/projects/findhelp/search-results-preview.svg",
            alt: "Search results interface design",
          },
        ],
      },
      {
        heading: "Search & Discovery Interface",
        body: "The search results surface three tiers: community-recommended resources first (submitted and vetted by real users), informational guides and fact sheets second, and Findhelp API results third. Each program card shows distance, eligibility, cost, and a 'Community Recommended' badge for vetted entries. Users can save programs to a personal Resource Board (persisted in localStorage) and export the list via email.",
        images: [
          {
            src: "/projects/findhelp/updated-resource-finder.png",
            alt: "Updated resource finder with search results",
          },
          {
            src: "/projects/findhelp/resource-finder.jpeg",
            alt: "Resource finder tool in use",
          },
        ],
      },
      {
        heading: "Map View & Program Details",
        body: "I integrated Mapbox GL for a map view of results, letting users see program locations relative to their ZIP code. Clicking a pin opens a detail modal with full program information, eligibility criteria, hours, languages served, and a direct contact link. Deep linking (URL parameters for program ID and ZIP) allows caseworkers to share specific results directly.",
      },
      {
        heading: "Community Resource Submission & AI Enrichment",
        body: "Community members can suggest trusted local resources through a submission form. Submissions enter a moderation queue where admins can one-click enrich entries using Google Gemini — the AI scrapes the resource's website and extracts eligibility, populations served, languages, hours, cost tier, and an enhanced description. This dramatically reduced the time to vet and publish new resources.",
        images: [
          {
            src: "/projects/findhelp/support-request-preview.svg",
            alt: "Support request and submission flow",
          },
        ],
      },
      {
        heading: "Feedback & Belonging Metrics",
        body: "After interacting with a resource, users rate it on a 3-point scale and optionally answer two belonging questions: 'I feel confident finding the help I need' and 'This tool helped me feel less alone.' This data feeds directly into the admin analytics dashboard and the organization's annual impact report. It was critical that the feedback loop felt lightweight — not like a survey — so I designed it as a single dismissible card after a program contact click.",
      },
    ],
    results: [
      "8,500+ programs searchable across 8 SDOH categories",
      "3-tier result ranking prioritizing community-vetted resources",
      "AI-powered resource enrichment reducing admin review time by 80%",
      "Belonging metrics integrated into impact reporting",
      "Deep linking for caseworker-to-client resource sharing",
    ],
    reflection:
      "If I were starting over, I'd invest more in user testing with actual foster youth before building the full search interface. We made assumptions about filter usage that we later had to revise. The AI enrichment workflow was a late addition that became one of the most impactful features — I'd prioritize that earlier next time.",
  },
  {
    slug: "community-platform",
    title: "Community Platform & Support System",
    subtitle:
      "Building a 2,250-member digital community with three user types, resource ticketing, and CRM integration",
    category: "Product Design & Systems Architecture",
    role: "UX Designer, Product Lead & Developer",
    timeline: "2023 — Present",
    tools: [
      "Circle.so",
      "HubSpot",
      "Notion",
      "Zapier",
      "Next.js",
      "Supabase",
      "Typeform",
    ],
    heroImage: "/projects/community-platform/hero.webp",
    overview:
      "Foster Greatness needed to transform a Google Docs-based mentorship program into a scalable digital community. I designed the information architecture, user flows, and support systems that grew the platform from zero to 2,250+ members — with distinct experiences for foster alumni, supporters, and partner organizations.",
    sections: [
      {
        heading: "The Challenge",
        body: "The original program lived in Google Docs and email chains. Courses, mentorship matching, event coordination, and resource sharing were all manual. We needed a platform that could scale without losing the personal touch that made the community work — while serving three very different user types with different needs and access levels.",
      },
      {
        heading: "Information Architecture & User Types",
        body: "I designed three distinct user journeys through the platform. Foster alumni get access to support spaces, resource requests, events, and storytelling opportunities. Supporters access volunteer coordination, donation pathways, and community events. Partner organizations get dedicated collaboration spaces and co-branded content. Each type has tailored onboarding, messaging, and navigation — built on Circle.so with custom spaces and access controls.",
        images: [
          {
            src: "/projects/community-platform/belonging-preview.svg",
            alt: "Community belonging and user type flows",
          },
          {
            src: "/projects/community-platform/platform-preview.webp",
            alt: "Platform preview showing community spaces",
          },
        ],
      },
      {
        heading: "Resource Support Ticket System",
        body: "I designed and built the entire resource request workflow. A community member fills out a support form — requesting help with housing, employment, education, transportation, or other needs. The submission instantly notifies the team and creates a ticket in HubSpot with the contact info attached. Our resource specialist then moves tickets through a pipeline on the admin dashboard. We originally built this in Notion, but I migrated to HubSpot for better CRM management — tracking request duration, categories, and resolution rates.",
        images: [
          {
            src: "/projects/community-platform/community-screenshot-1.png",
            alt: "Community platform interface",
          },
          {
            src: "/projects/community-platform/community-screenshot-2.png",
            alt: "Community features and spaces",
          },
        ],
      },
      {
        heading: "Events & Engagement",
        body: "The platform hosts 62+ events annually — community gatherings, workshops, and lived experience panels. I designed the event discovery flow to surface upcoming events on both the community platform and the public website via a custom Circle events widget API. Events are categorized by type and automatically pulled into the homepage.",
        images: [
          {
            src: "/projects/community-platform/events-preview.svg",
            alt: "Events feature design",
          },
          {
            src: "/projects/community-platform/announcements-preview.svg",
            alt: "Announcements and community updates",
          },
        ],
      },
      {
        heading: "Storyteller Collective",
        body: "I created the design system and user experience for the Storyteller Collective — a lived-experience media training program. Alumni share their stories through the platform, which are featured on the website with photography and narrative content. 25 thriver stories published to date, feeding into marketing, fundraising, and advocacy efforts.",
        images: [
          {
            src: "/projects/community-platform/thriver-stories-preview.svg",
            alt: "Thriver stories feature design",
          },
        ],
      },
    ],
    results: [
      "2,250+ active community members across 3 user types",
      "178 individuals supported through resource request system",
      "62 community events hosted annually",
      "25 thriver stories published",
      "Migrated from Notion to HubSpot CRM for ticket tracking",
      "Support request data feeding directly into annual impact reports",
    ],
    reflection:
      "The Notion-to-HubSpot migration was painful but necessary. I should have started with a CRM from day one instead of building a stopgap. The three-user-type architecture was the right call — it let us scale without diluting the experience for our core users (foster alumni). I'd add more automated follow-ups to the ticket system next.",
  },
  {
    slug: "admin-dashboard",
    title: "Analytics Dashboard & Impact Reporting",
    subtitle:
      "Designing internal tools for service analytics, feedback analysis, and AI-powered resource moderation",
    category: "UX Design & Data Visualization",
    role: "UX Designer & Frontend Developer",
    timeline: "2025",
    tools: [
      "Next.js 16",
      "React 19",
      "Supabase",
      "Google Gemini",
      "Recharts",
      "Tailwind CSS",
    ],
    heroImage: "/projects/admin-dashboard/impact-design.png",
    overview:
      "The Foster Greatness team needed visibility into how their services tool was being used — which ZIP codes, which categories, which programs. I designed and built a protected admin dashboard with service analytics, feedback review, resource moderation with AI enrichment, and belonging metrics that feed directly into the organization's impact reporting.",
    sections: [
      {
        heading: "Analytics Dashboard",
        body: "The main dashboard surfaces service event tracking — searches by ZIP code, program contact clicks, resource board saves and exports. I designed a ZIP code heatmap showing where users are searching from, a timeline chart of activity over time, top programs table, and category breakdown. Stat cards at the top give a quick pulse: total searches, unique users, contact rate, and belonging score averages.",
        images: [
          {
            src: "/projects/admin-dashboard/panel-screenshot.png",
            alt: "Admin analytics dashboard",
          },
          {
            src: "/projects/admin-dashboard/event-screenshot.png",
            alt: "Event analytics and tracking",
          },
        ],
      },
      {
        heading: "Feedback & Belonging Metrics",
        body: "The feedback dashboard aggregates program ratings (1-3 scale), tool ratings (1-5 scale), and the two belonging questions. I designed it to surface actionable insights: top-rated programs, lowest-rated programs, recent comments with consent filtering, and follow-up requests with contact info. The 'Belonging Pulse' metric — averaging confidence and connection scores — became a key figure in the organization's 2025 impact report.",
      },
      {
        heading: "Resource Moderation with AI",
        body: "When community members submit new resources, they enter a moderation queue. I designed the review panel with a one-click AI enrichment flow: the admin clicks 'Enrich,' Google Gemini scrapes the resource's website and returns structured data — eligibility criteria, populations served, languages, hours, cost tier, address, and an enhanced description. The admin can accept, edit, or reject. This turned a 15-minute manual review into a 2-minute process.",
        images: [
          {
            src: "/projects/admin-dashboard/career-support-preview.svg",
            alt: "Resource moderation and career support tools",
          },
        ],
      },
      {
        heading: "Impact Data Collection",
        body: "I built the data pipeline that connects user interactions to organizational impact metrics. Every search, contact click, resource save, and feedback response is tracked in Supabase with custom event properties (ZIP, category, program, source). This data is queried by the admin dashboard and was used to produce the 2025 impact report — 178 individuals supported, broken down by request category (94 housing, 65 employment, 52 education, 48 transportation).",
        images: [
          {
            src: "/projects/admin-dashboard/impact-network.png",
            alt: "Impact network and data visualization",
          },
        ],
      },
    ],
    results: [
      "Custom analytics dashboard tracking all service interactions",
      "AI enrichment reducing resource review time from 15 min to 2 min",
      "Belonging Pulse metric adopted for annual impact reporting",
      "178 individuals tracked through support pipeline",
      "Data-driven impact report: 94 housing, 65 employment, 52 education requests",
    ],
    reflection:
      "The biggest learning was that the team didn't need more dashboards — they needed fewer, better ones. My first iteration had too many views. Consolidating into three focused dashboards (analytics, feedback, submissions) with clear action items on each was the breakthrough. The belonging metrics were a happy accident that became central to the org's storytelling.",
  },
  {
    slug: "foster-greatness-website",
    title: "Foster Greatness Website",
    subtitle:
      "A configuration-driven Next.js platform with Sanity CMS, campaign management, and multi-channel integrations",
    category: "Design & Development",
    role: "Designer & Lead Developer",
    timeline: "2023 — Present",
    tools: [
      "Next.js 16",
      "Sanity.io",
      "Stripe",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
      "Circle.so API",
      "Beehiiv API",
    ],
    heroImage: "/projects/fg-website/hero.png",
    overview:
      "The Foster Greatness public website is the front door for the organization — handling donations, event promotion, storytelling, partnerships, and campaign launches. I designed and built a configuration-driven system where campaigns, homepage sections, and features can be toggled without code changes, backed by Sanity CMS for content management.",
    sections: [
      {
        heading: "Configuration-Driven Architecture",
        body: "I built a system where the marketing team can launch new campaigns by editing a single data file — controlling visibility in the nav, homepage, and donate page. Homepage sections are configurable: ordering, visibility, featured campaigns, and custom titles. Feature flags control site-wide behavior. This eliminated the deploy-per-campaign bottleneck the team had with the old Webflow site.",
      },
      {
        heading: "Campaign System",
        body: "Each campaign (Holiday Gift Drive, Gingerbread Contest, Meal Kit Sponsors, Crisis Fund) gets its own page with Stripe payment integration, Typeform contact forms, and custom visuals. Campaigns can be marked as featured, active, or past — and the system automatically updates navigation and display across the site.",
        images: [
          {
            src: "/projects/fg-website/hero-design.png",
            alt: "Campaign page design",
          },
        ],
      },
      {
        heading: "Multi-Channel Integrations",
        body: "The site pulls live data from multiple sources: upcoming events from Circle.so (displayed on homepage and events page), latest newsletter posts from Beehiiv, donation processing through Stripe, and contact forms via Typeform. Each integration is API-driven with appropriate caching and rate limiting. Google Ads conversion tracking fires on community join links for marketing attribution.",
        images: [
          {
            src: "/projects/fg-website/events-feature.jpg",
            alt: "Events integration with Circle.so",
          },
          {
            src: "/projects/fg-website/newsletter-feature.jpg",
            alt: "Newsletter integration with Beehiiv",
          },
        ],
      },
      {
        heading: "Design System & CMS",
        body: "I established the brand design system with custom color tokens (Navy, Blue, Teal, Orange), component library built on Radix UI primitives, and Framer Motion animations. Content editors manage blog posts, team profiles, resources, and FAQs through an embedded Sanity Studio — no developer needed for day-to-day content updates.",
        images: [
          {
            src: "/projects/fg-website/storyteller-guide.webp",
            alt: "Storyteller guide design",
          },
        ],
      },
      {
        heading: "Security & Performance",
        body: "I implemented enterprise-grade security: Content Security Policy headers, rate limiting on all API routes, CORS protection, Supabase Row Level Security policies, Sentry error tracking with PII filtering, and admin authentication with SHA-256 password hashing. The site deploys automatically from Git via Vercel with zero-downtime deploys.",
      },
    ],
    results: [
      "Configuration-driven campaigns — launch without deploys",
      "7 Sanity CMS content types for non-technical editors",
      "5 third-party API integrations (Stripe, Circle, Beehiiv, Typeform, Google Ads)",
      "Enterprise security: CSP, rate limiting, RLS, Sentry",
      "11 conference presentations featuring the platform",
    ],
    reflection:
      "The configuration-driven architecture was the single best decision. Before this, every campaign launch required a developer. Now the marketing team can go from idea to live campaign page in hours. I'd build the Sanity CMS integration earlier in the project lifecycle — we spent too long with hardcoded content that should have been editable from day one.",
  },
  {
    slug: "brand-visual-design",
    title: "Brand & Visual Design",
    subtitle:
      "Client work for Disney Pixar, Kaiser Permanente, Sephora, and more as founding designer at DGW Branded",
    category: "Visual Design & Branding",
    role: "Founding Designer → UX Director",
    timeline: "2020 — 2023",
    tools: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Figma",
      "Adobe Dimension",
    ],
    heroImage: "/projects/dgw-branded/hero.webp",
    overview:
      "As founding designer at DGW Branded, I led visual design for clients including Disney Pixar, Kaiser Permanente, Sephora, Alteryx, TOMS, DC Comics, and Intercom. Over three years I advanced from Creative Designer to UX Director, managing a design team while shaping brand identity for an organization supporting foster youth transitioning to independence.",
    sections: [
      {
        heading: "Disney Pixar",
        body: "Designed promotional materials and staff gifts for post and pre-production film projects including Luca, Lightyear, and Elemental. For Luca, I created premiere ticket designs, wine bottle branding, and custom box packaging capturing the film's Mediterranean warmth. Lightyear's campaign embraced the cosmic theme with astronaut-inspired kits. For Elemental, I designed a water pitcher concept incorporating the four elements.",
        images: [
          {
            src: "/projects/disney-pixar/luca-tickets.jpg",
            alt: "Luca premiere tickets design",
          },
          {
            src: "/projects/disney-pixar/luca-wine.jpg",
            alt: "Luca wine bottle branding",
          },
          {
            src: "/projects/disney-pixar/elemental.png",
            alt: "Elemental pitcher renders",
          },
        ],
      },
      {
        heading: "Kaiser Permanente",
        body: "Long-term client relationship since 2020. I designed challenge coins distributed to thousands of healthcare workers during Covid-19 to recognize their dedication. The coins became exceptionally popular across Southern California branches. I also designed and coordinated holiday gifts for 20,000+ employees — creating realistic product renders and an online order form that streamlined production for tens of thousands of packages.",
        images: [
          {
            src: "/projects/kaiser-permanente/coin-card.webp",
            alt: "Kaiser Permanente challenge coin design",
          },
          {
            src: "/projects/kaiser-permanente/holiday-kits.webp",
            alt: "Holiday gift kits for 20,000 employees",
          },
          {
            src: "/projects/kaiser-permanente/nurse-appreciation.webp",
            alt: "Nurse appreciation gifts",
          },
        ],
      },
      {
        heading: "Sephora",
        body: "Designed for Sephora's Accelerate program — an initiative mentoring emerging beauty entrepreneurs — creating graduation kits and branded materials. I researched and selected products reflecting Sephora's DEI values, and the project included hiring foster care alumni for fulfillment operations, directly connecting the brand work to social impact.",
        images: [
          {
            src: "/projects/sephora/hero.webp",
            alt: "Sephora product layout",
          },
          {
            src: "/projects/sephora/grad-kits.webp",
            alt: "Sephora Accelerate graduation kits",
          },
          {
            src: "/projects/sephora/coconut-candle.webp",
            alt: "Custom candle packaging",
          },
        ],
      },
      {
        heading: "More Client Work",
        body: "Alteryx: Custom illustrations for global new hire welcome packages. TOMS: Return-to-office kits with laptop bags, journals, and Covid comfort-level lanyards. DC Comics: Branded materials for the Milestone Initiative diversity program. Intercom: Employee welcome kits representing their global messaging platform.",
        images: [
          {
            src: "/projects/dgw-branded/overview.webp",
            alt: "DGW Branded overview of client work",
          },
          {
            src: "/projects/dgw-branded/toms-hero.webp",
            alt: "TOMS return-to-office kit",
          },
          {
            src: "/projects/dgw-branded/dc-hero.webp",
            alt: "DC Comics Milestone Initiative",
          },
        ],
      },
    ],
    results: [
      "Advanced from Creative Designer to UX Director in 3 years",
      "Managed a two-person design team",
      "Designed for Disney Pixar, Kaiser Permanente, Sephora, TOMS, DC Comics, Intercom, Alteryx",
      "Challenge coins distributed to thousands of healthcare workers",
      "Holiday gift production coordinated for 20,000+ employees",
    ],
    reflection:
      "Working with these brands taught me that great design at scale requires systems, not one-offs. The move from individual designer to team lead forced me to document my process and create reusable templates — skills that directly shaped how I approach frontend component design today.",
  },
];
