import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Sunny Rangel`,
    description: project.subtitle,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="px-6 pb-24 pt-28">
      <div className="mx-auto max-w-4xl">
        {/* Back link */}
        <Link
          href="/#work"
          className="text-sm text-[var(--color-text-secondary)] transition-opacity hover:opacity-60"
        >
          &larr; Back
        </Link>

        {/* Header */}
        <h1 className="mt-8 font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-secondary)]">
          {project.subtitle}
        </p>

        {/* Meta bar */}
        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-b border-[var(--color-border)] py-6 text-sm sm:grid-cols-4">
          <div>
            <p className="text-[var(--color-text-subtle)]">Role</p>
            <p className="mt-1">{project.role}</p>
          </div>
          <div>
            <p className="text-[var(--color-text-subtle)]">Timeline</p>
            <p className="mt-1">{project.timeline}</p>
          </div>
          <div>
            <p className="text-[var(--color-text-subtle)]">Category</p>
            <p className="mt-1">{project.category}</p>
          </div>
          <div>
            <p className="text-[var(--color-text-subtle)]">Tools</p>
            <p className="mt-1">{project.tools.slice(0, 4).join(", ")}</p>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative mt-12 aspect-[16/9] overflow-hidden bg-[var(--color-surface)]">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 900px) 100vw, 900px"
            priority
          />
        </div>

        {/* Overview */}
        <p className="mt-12 text-lg leading-relaxed text-[var(--color-text-secondary)]">
          {project.overview}
        </p>

        {/* Tools */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-secondary)]"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Sections */}
        {project.sections.map((section) => (
          <section key={section.heading} className="mt-16">
            <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-tight sm:text-3xl">
              {section.heading}
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              {section.body}
            </p>
            {section.images && section.images.length > 0 && (
              <div
                className={`mt-8 grid gap-4 ${
                  section.images.length === 1
                    ? "grid-cols-1"
                    : section.images.length === 2
                      ? "grid-cols-1 sm:grid-cols-2"
                      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {section.images.map((img) => (
                  <div
                    key={img.src}
                    className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface)]"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 900px) 100vw, 450px"
                    />
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        {/* Results */}
        {project.results && project.results.length > 0 && (
          <section className="mt-16 border-t border-[var(--color-border)] pt-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-tight sm:text-3xl">
              Results
            </h2>
            <ul className="mt-6 space-y-3">
              {project.results.map((result) => (
                <li
                  key={result}
                  className="flex items-start gap-3 text-[var(--color-text-secondary)]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-text)]" />
                  {result}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Bottom nav */}
        <div className="mt-20 flex items-center justify-between border-t border-[var(--color-border)] pt-8">
          <Link
            href="/#work"
            className="text-sm text-[var(--color-text-secondary)] transition-opacity hover:opacity-60"
          >
            &larr; All projects
          </Link>
          {(() => {
            const idx = projects.findIndex((p) => p.slug === slug);
            const next = projects[idx + 1];
            if (!next) return null;
            return (
              <Link
                href={`/projects/${next.slug}`}
                className="text-sm text-[var(--color-text-secondary)] transition-opacity hover:opacity-60"
              >
                {next.title} &rarr;
              </Link>
            );
          })()}
        </div>
      </div>
    </main>
  );
}
