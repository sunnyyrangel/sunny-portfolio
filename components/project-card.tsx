"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/types";

const categoryLabel: Record<Project["category"], string> = {
  design: "Design",
  development: "Development",
  both: "Design & Dev",
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <motion.article
      variants={fadeUp}
      className="group cursor-pointer overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] transition-colors duration-300 hover:border-[var(--color-accent)]"
      onClick={onClick}
    >
      {/* Image / gradient placeholder */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-bg-muted)]">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, var(--color-bg-muted) 0%, var(--color-surface) 50%, var(--color-accent-muted) 100%)`,
          }}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-bg)]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-sm font-medium tracking-wide text-[var(--color-accent-light)]">
            View Project &rarr;
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category badge */}
        <span className="inline-block rounded-full border border-[var(--color-accent-muted)] bg-[var(--color-accent-muted)] px-3 py-0.5 text-xs font-medium tracking-wide text-[var(--color-accent-light)]">
          {categoryLabel[project.category]}
        </span>

        <h3 className="mt-3 text-lg font-semibold leading-snug text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-accent-light)]">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-[var(--color-bg-muted)] px-2 py-0.5 text-xs text-[var(--color-text-subtle)]"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="rounded-md bg-[var(--color-bg-muted)] px-2 py-0.5 text-xs text-[var(--color-text-subtle)]">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
