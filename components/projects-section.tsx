"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import type { Project } from "@/lib/types";

type Filter = "all" | Project["category"];

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Design", value: "design" },
  { label: "Development", value: "development" },
  { label: "Design & Dev", value: "both" },
];

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const handleClose = useCallback(() => setSelectedProject(null), []);

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
    <ProjectModal project={selectedProject} onClose={handleClose} />
    <section id="work" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
            Selected Work
          </h2>
          <div className="mt-3 h-px w-12 bg-[var(--color-accent)]" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {filters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                activeFilter === value
                  ? "bg-[var(--color-accent)] text-[var(--color-bg)]"
                  : "border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-light)]"
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          key={activeFilter}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </div>
    </section>
    </>
  );
}
