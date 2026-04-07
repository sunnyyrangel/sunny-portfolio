"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/lib/types";

export function ProjectPreview({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.article ref={ref} style={{ opacity }} className="group">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative overflow-hidden bg-[var(--color-surface)]">
          <motion.div style={{ y }} className="relative aspect-[16/9]">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </motion.div>
        </div>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-subtle)]">
              0{index + 1}
            </span>
            <h3 className="mt-1 text-2xl font-medium tracking-tight transition-opacity group-hover:opacity-70">
              {project.title}
            </h3>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {project.subtitle}
            </p>
          </div>
          <span className="mt-1 shrink-0 text-xs uppercase tracking-[0.15em] text-[var(--color-text-subtle)]">
            {project.category}
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

export function ProjectPreviewCompact({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group flex items-center justify-between border-b border-[var(--color-border)] py-6 transition-colors hover:border-[var(--color-text-subtle)]"
      >
        <div>
          <h3 className="text-lg font-medium tracking-tight transition-opacity group-hover:opacity-70">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            {project.subtitle}
          </p>
        </div>
        <span className="shrink-0 text-sm text-[var(--color-text-subtle)] transition-transform group-hover:translate-x-1">
          &rarr;
        </span>
      </Link>
    </motion.article>
  );
}
