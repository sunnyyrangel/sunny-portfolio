"use client";

import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="flex min-h-[85vh] items-end px-6 pb-20 pt-32">
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          custom={0}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="text-sm uppercase tracking-[0.3em] text-[var(--color-text-subtle)]"
        >
          Designer & Developer
        </motion.p>
        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mt-4 font-[family-name:var(--font-display)] text-5xl leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Sunny Rangel
        </motion.h1>
        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] sm:text-xl"
        >
          I design and build tools for organizations doing hard, important work
          — from social services platforms to brand systems for Disney Pixar and
          Kaiser Permanente.
        </motion.p>
        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-wrap gap-6 text-sm text-[var(--color-text-subtle)]"
        >
          <a
            href="mailto:sunjanay@gmail.com"
            className="underline underline-offset-4 transition-colors hover:text-[var(--color-text)]"
          >
            sunjanay@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/sunjanayadav"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-[var(--color-text)]"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/sunjana.co"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-[var(--color-text)]"
          >
            Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
