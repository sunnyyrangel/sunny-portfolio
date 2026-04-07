import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "foster-greatness-web",
    title: "Foster Greatness Platform",
    description:
      "Unified Next.js platform consolidating 7 fundraising campaigns with Supabase, Stripe donations, and community event integration.",
    category: "development",
    tags: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
    image: "/projects/foster-greatness-web.png",
    highlights: [
      "Consolidated 7 separate campaign sites into one platform",
      "Integrated Stripe for donation processing",
      "Built community events feed via Circle.so API",
    ],
  },
  {
    slug: "foster-greatness-website",
    title: "Foster Greatness Website Redesign",
    description:
      "Modern rebuild of the main Foster Greatness website with Sanity.io CMS for content management, deployed on Vercel.",
    category: "both",
    tags: ["Next.js", "Sanity.io", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/projects/foster-greatness-website.png",
    highlights: [
      "Implemented headless CMS for non-technical content editors",
      "Designed responsive layouts with accessibility in mind",
      "Deployed with CI/CD via Vercel",
    ],
  },
  {
    slug: "mentoring-for-good",
    title: "Mentoring for Good",
    description:
      "Directory platform helping volunteers discover mentoring opportunities in Orange County, with admin dashboard and analytics.",
    category: "development",
    tags: ["Next.js", "Supabase", "Search/Filtering", "Admin Dashboard"],
    image: "/projects/mentoring-for-good.png",
    highlights: [
      "Built search and filtering for mentoring programs",
      "Created admin dashboard with analytics",
      "Designed for volunteer and organization discovery",
    ],
  },
  {
    slug: "holiday-gift-drive",
    title: "Holiday Gift Drive",
    description:
      "Interactive campaign featuring an SVG Christmas tree gift selection interface with real-time tracking of gift purchases.",
    category: "both",
    tags: ["Next.js", "SVG Animation", "Supabase", "Interactive UI"],
    image: "/projects/holiday-gift-drive.png",
    highlights: [
      "Designed and built interactive SVG gift tree",
      "Real-time gift purchase tracking with Supabase",
      "Engaging donor experience that increased participation",
    ],
  },
  {
    slug: "storytellers-collective",
    title: "Storytellers Collective",
    description:
      "Animated storytelling platform displaying member stories and guides with rich motion design.",
    category: "both",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Content Platform"],
    image: "/projects/storytellers-collective.png",
    highlights: [
      "Designed animated page transitions and micro-interactions",
      "Built member story display system",
      "Created storytelling guide components",
    ],
  },
  {
    slug: "kaiser-permanente",
    title: "Kaiser Permanente Branding",
    description:
      "Brand identity and visual design work for Kaiser Permanente's healthcare communications.",
    category: "design",
    tags: ["Branding", "Visual Design", "Healthcare", "Adobe Suite"],
    image: "/projects/kaiser-permanente.png",
    highlights: [
      "Developed cohesive brand visual language",
      "Created assets for healthcare communications",
      "Ensured accessibility in design choices",
    ],
  },
];
