"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
            Let&apos;s work together
          </h2>
          <div className="mx-auto mt-3 h-px w-12 bg-[var(--color-accent)]" />

          <p className="mx-auto mt-6 max-w-md text-[var(--color-text-muted)] leading-relaxed">
            I&apos;m always open to new opportunities, collaborations, and
            conversations about design and development.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@sunnyrangel.com"
              className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90"
            >
              Say hello
            </a>
            <a
              href="https://linkedin.com/in/sunnyrangel"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent-light)]"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sunnyrangel"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent-light)]"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
