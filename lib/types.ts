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
