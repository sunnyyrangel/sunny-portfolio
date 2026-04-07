"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/types";

export function ProjectPreview({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-surface)]">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>
        <div className="mt-5 flex items-baseline justify-between gap-4">
          <div>
            <h3 className="text-xl font-medium tracking-tight">{project.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {project.subtitle}
            </p>
          </div>
          <span className="shrink-0 text-xs uppercase tracking-[0.15em] text-[var(--color-text-subtle)]">
            {project.category}
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
