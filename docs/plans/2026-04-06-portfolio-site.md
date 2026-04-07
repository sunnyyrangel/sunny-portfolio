# Sunny Rangel Portfolio — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a clean, modern portfolio site for Sunny Rangel showcasing both design and frontend development work, targeting dev/design/nonprofit-tech roles.

**Architecture:** Static-export Next.js 16 site with Tailwind CSS. Single-page layout with smooth scroll sections: Hero, Selected Work (project cards with modal/detail views), About, Skills, Contact. No CMS, no auth, no database — just a fast static site deployed to Vercel.

**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS 4, Framer Motion (subtle animations), Vercel deployment

**Design Direction:** Minimal, high-contrast, editorial feel. Dark or neutral background with clean typography (Inter or similar). Project cards as the visual centerpiece. Responsive mobile-first.

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`

**Step 1: Initialize Next.js 16 project**

```bash
cd /Users/cpdesign/Developer/sunny-portfolio
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --turbopack
```

Accept defaults. This gives us Next.js 16 + Tailwind 4 + TypeScript + App Router.

**Step 2: Install additional dependencies**

```bash
npm install framer-motion
```

**Step 3: Clean boilerplate**

Replace `app/page.tsx` with a minimal placeholder:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold">Sunny Rangel</h1>
    </main>
  );
}
```

Update `app/globals.css` to just Tailwind imports + a dark body background:

```css
@import "tailwindcss";

body {
  background-color: #0a0a0a;
  color: #fafafa;
}
```

**Step 4: Verify dev server runs**

```bash
npm run dev
```

Expected: Site loads at localhost:3000 showing "Sunny Rangel" centered on dark background.

**Step 5: Initialize git and commit**

```bash
git init
git add .
git commit -m "chore: scaffold Next.js 16 portfolio site"
```

---

### Task 2: Project Data Layer

**Files:**
- Create: `lib/projects.ts`
- Create: `lib/types.ts`

**Step 1: Define types**

Create `lib/types.ts`:

```ts
export interface Project {
  slug: string;
  title: string;
  description: string;
  category: "design" | "development" | "both";
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
}
```

**Step 2: Create project data**

Create `lib/projects.ts` with Sunny's actual projects:

```ts
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
```

**Step 3: Commit**

```bash
git add lib/
git commit -m "feat: add project data layer with types and project entries"
```

---

### Task 3: Layout & Navigation

**Files:**
- Modify: `app/layout.tsx`
- Create: `components/nav.tsx`

**Step 1: Build the navigation component**

Create `components/nav.tsx` — a fixed top nav with smooth-scroll links to each section. Minimal: name on left, section links on right, hamburger on mobile.

**Step 2: Update layout.tsx**

Add Inter font via `next/font/google`, wrap children with nav, add metadata (title: "Sunny Rangel — Designer & Developer", description, etc).

**Step 3: Verify navigation renders and scrolls**

```bash
npm run dev
```

Expected: Nav visible at top, links scroll to section anchors (sections don't exist yet — that's fine, just verify nav renders).

**Step 4: Commit**

```bash
git add components/ app/layout.tsx
git commit -m "feat: add fixed navigation with smooth scroll links"
```

---

### Task 4: Hero Section

**Files:**
- Create: `components/hero.tsx`
- Modify: `app/page.tsx`

**Step 1: Build hero component**

Create `components/hero.tsx`:
- Large heading: "Sunny Rangel"
- Subtitle: "Designer & Developer"
- One-liner: Something like "I design and build digital experiences for organizations doing good."
- Subtle entrance animation with Framer Motion (fade up)
- CTA: "View my work" button that smooth-scrolls to projects section

**Step 2: Add hero to page.tsx**

Import and render `<Hero />` as the first section.

**Step 3: Verify**

```bash
npm run dev
```

Expected: Full-viewport hero with name, subtitle, tagline, animated entrance.

**Step 4: Commit**

```bash
git add components/hero.tsx app/page.tsx
git commit -m "feat: add hero section with animated entrance"
```

---

### Task 5: Project Cards Grid

**Files:**
- Create: `components/project-card.tsx`
- Create: `components/projects-section.tsx`
- Modify: `app/page.tsx`

**Step 1: Build project card component**

Create `components/project-card.tsx`:
- Displays project image (with placeholder gradient if image missing), title, description, category badge, and tags
- Hover effect: subtle scale + overlay with "View Project" text
- Framer Motion for staggered entrance animation
- Uses the `Project` type from `lib/types.ts`

**Step 2: Build projects section**

Create `components/projects-section.tsx`:
- Section heading: "Selected Work"
- Optional filter tabs: All / Design / Development
- Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop
- Maps over projects data and renders `<ProjectCard />` for each
- Section id="work" for nav scroll target

**Step 3: Add to page.tsx**

Import and render `<ProjectsSection />` after Hero.

**Step 4: Verify**

```bash
npm run dev
```

Expected: Grid of 6 project cards below hero, responsive layout, hover effects work, filter tabs toggle categories.

**Step 5: Commit**

```bash
git add components/project-card.tsx components/projects-section.tsx app/page.tsx
git commit -m "feat: add project cards grid with category filtering"
```

---

### Task 6: Project Detail Modal

**Files:**
- Create: `components/project-modal.tsx`
- Modify: `components/project-card.tsx`
- Modify: `components/projects-section.tsx`

**Step 1: Build project modal**

Create `components/project-modal.tsx`:
- Full-screen overlay modal with Framer Motion (AnimatePresence)
- Shows: large project image, title, full description, highlights list, tags, links (live site / GitHub)
- Close button + click-outside-to-close + Escape key
- Scroll lock on body when open

**Step 2: Wire up card clicks to modal**

Update `projects-section.tsx` to manage selected project state. Update `project-card.tsx` to accept an onClick handler.

**Step 3: Verify**

```bash
npm run dev
```

Expected: Clicking a project card opens modal with full details, smooth animation in/out, closes on escape/click-outside.

**Step 4: Commit**

```bash
git add components/project-modal.tsx components/project-card.tsx components/projects-section.tsx
git commit -m "feat: add project detail modal with animations"
```

---

### Task 7: About Section

**Files:**
- Create: `components/about.tsx`
- Modify: `app/page.tsx`

**Step 1: Build about section**

Create `components/about.tsx`:
- Section id="about"
- Two-column layout: photo placeholder on left (with a neutral gradient placeholder until Sunny adds a real photo), bio text on right
- Bio text: 2-3 paragraphs about bridging design and development, passion for mission-driven work, experience at Doing Good Works / Foster Greatness
- Framer Motion fade-in on scroll

**Step 2: Add to page.tsx**

Render `<About />` after ProjectsSection.

**Step 3: Verify and commit**

```bash
npm run dev
git add components/about.tsx app/page.tsx
git commit -m "feat: add about section with bio and photo placeholder"
```

---

### Task 8: Skills Section

**Files:**
- Create: `components/skills.tsx`
- Modify: `app/page.tsx`

**Step 1: Build skills section**

Create `components/skills.tsx`:
- Section id="skills"
- Two groups: "Design" and "Development"
- Design: Figma, Adobe Creative Suite, Branding, UI/UX, Typography, Photography
- Development: Next.js, React, TypeScript, Tailwind CSS, Supabase, Vercel, HTML/CSS, JavaScript
- Visual style: clean pill/badge layout or minimal icon grid
- Framer Motion staggered entrance

**Step 2: Add to page.tsx and verify**

```bash
npm run dev
git add components/skills.tsx app/page.tsx
git commit -m "feat: add skills section with design and dev categories"
```

---

### Task 9: Contact Section & Footer

**Files:**
- Create: `components/contact.tsx`
- Create: `components/footer.tsx`
- Modify: `app/page.tsx`

**Step 1: Build contact section**

Create `components/contact.tsx`:
- Section id="contact"
- Heading: "Let's work together" or "Get in touch"
- Email link (mailto), LinkedIn link, GitHub link
- Clean, minimal — no contact form (reduces complexity, email is more reliable)

**Step 2: Build footer**

Create `components/footer.tsx`:
- Simple: "© 2026 Sunny Rangel" + social links

**Step 3: Add to page.tsx, verify, commit**

```bash
npm run dev
git add components/contact.tsx components/footer.tsx app/page.tsx
git commit -m "feat: add contact section and footer"
```

---

### Task 10: Responsive Polish & Final Touches

**Files:**
- Modify: various component files

**Step 1: Mobile responsiveness pass**

Check all sections at mobile (375px), tablet (768px), and desktop (1280px). Fix any layout issues.

**Step 2: Add page metadata & favicon**

Update `app/layout.tsx` with proper Open Graph tags, description, and a simple favicon.

**Step 3: Add placeholder images**

Create gradient placeholder images for each project in `public/projects/` so the site looks complete even before real screenshots are added.

**Step 4: Static export config**

Ensure `next.config.ts` has `output: 'export'` for static deployment.

**Step 5: Build and verify**

```bash
npm run build
```

Expected: Static export succeeds with no errors.

**Step 6: Final commit**

```bash
git add .
git commit -m "feat: responsive polish, metadata, and static export config"
```

---

### Task 11: Deploy to Vercel

**Step 1: Create GitHub repo and push**

```bash
gh repo create sunny-portfolio --public --source=. --remote=origin --push
```

**Step 2: Deploy to Vercel**

```bash
npx vercel --prod
```

Or connect the GitHub repo to Vercel for automatic deploys.

**Step 3: Verify live site**

Expected: Portfolio live and accessible at Vercel URL.

---

## Post-Launch Checklist (for Sunny to do later)

- [ ] Replace placeholder project images with real screenshots
- [ ] Add a real headshot photo
- [ ] Refine bio text
- [ ] Connect custom domain (if desired)
- [ ] Add any additional projects
