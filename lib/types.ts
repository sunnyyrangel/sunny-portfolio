export interface ProjectImage {
  src: string;
  alt: string;
}

export interface CaseStudySection {
  heading: string;
  body: string;
  images?: ProjectImage[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  role: string;
  timeline: string;
  tools: string[];
  heroImage: string;
  overview: string;
  sections: CaseStudySection[];
  results?: string[];
}
