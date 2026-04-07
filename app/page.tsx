import { Hero } from "@/components/hero";
import { ProjectPreview } from "@/components/project-preview";
import { Footer } from "@/components/footer";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="work" className="px-6 pb-24">
        <div className="mx-auto max-w-6xl space-y-20">
          {projects.map((project, i) => (
            <ProjectPreview key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
