import { Hero } from "@/components/hero";
import {
  ProjectPreview,
  ProjectPreviewCompact,
} from "@/components/project-preview";
import { Footer } from "@/components/footer";
import { projects } from "@/lib/projects";

const featured = projects.slice(0, 3);
const rest = projects.slice(3);

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="work" className="px-6 pb-12">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-32">
            {featured.map((project, i) => (
              <ProjectPreview key={project.slug} project={project} index={i} />
            ))}
          </div>

          {rest.length > 0 && (
            <div className="mt-24 border-t border-[var(--color-border)] pt-12">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-subtle)]">
                More work
              </p>
              <div className="mt-6">
                {rest.map((project, i) => (
                  <ProjectPreviewCompact
                    key={project.slug}
                    project={project}
                    index={i}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
