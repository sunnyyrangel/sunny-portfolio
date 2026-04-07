"use client";

import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.6 },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-muted) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        {/* Decorative line */}
        <motion.div
          variants={lineReveal}
          className="mx-auto mb-10 h-px w-16 origin-left bg-[var(--color-accent)]"
        />

        {/* Name — large display heading */}
        <motion.h1
          variants={fadeUp}
          className="gradient-text font-[family-name:var(--font-display)] text-6xl leading-tight tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Sunny Rangel
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={fadeUp}
          className="mt-4 text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-accent)]"
        >
          Designer &amp; Developer
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-text-muted)] sm:text-xl"
        >
          I design and build digital experiences for organizations doing good.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUp} className="mt-12">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)] px-8 py-3 text-sm font-medium tracking-wide text-[var(--color-accent-light)] transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
          >
            View my work
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &darr;
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
