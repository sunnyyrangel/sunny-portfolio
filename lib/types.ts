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
  category: "Design" | "Design & Development";
  heroImage: string;
  sections: CaseStudySection[];
}
