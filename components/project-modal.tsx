"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/types";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modal = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.97,
    transition: { duration: 0.25 },
  },
};

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-bg)]/80 px-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            key="modal"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-bg-muted)] text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Image placeholder */}
            <div
              className="aspect-[16/9] w-full"
              style={{
                background: `linear-gradient(135deg, var(--color-bg-muted) 0%, var(--color-surface) 50%, var(--color-accent-muted) 100%)`,
              }}
            />

            {/* Content */}
            <div className="p-6 sm:p-8">
              {/* Category */}
              <span className="inline-block rounded-full border border-[var(--color-accent-muted)] bg-[var(--color-accent-muted)] px-3 py-0.5 text-xs font-medium tracking-wide text-[var(--color-accent-light)]">
                {project.category === "both"
                  ? "Design & Dev"
                  : project.category === "design"
                    ? "Design"
                    : "Development"}
              </span>

              <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl tracking-tight sm:text-3xl">
                {project.title}
              </h3>

              <p className="mt-3 leading-relaxed text-[var(--color-text-muted)]">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="mt-6 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-[var(--color-bg-muted)] px-2.5 py-1 text-xs text-[var(--color-text-subtle)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(project.liveUrl || project.githubUrl) && (
                <div className="mt-6 flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90"
                    >
                      Live Site &rarr;
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[var(--color-border)] px-5 py-2 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent-light)]"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
