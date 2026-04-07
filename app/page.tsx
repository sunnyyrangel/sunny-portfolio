import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-[var(--color-bg)]">
      <Hero />
      <ProjectsSection />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
