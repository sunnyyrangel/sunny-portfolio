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
        <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
          {project.subtitle}
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[var(--color-text-subtle)]">
          {project.category}
        </p>

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

        {/* Bottom nav */}
        <div className="mt-20 border-t border-[var(--color-border)] pt-8">
          <Link
            href="/#work"
            className="text-sm text-[var(--color-text-secondary)] transition-opacity hover:opacity-60"
          >
            &larr; All projects
          </Link>
        </div>
      </div>
    </main>
  );
}
