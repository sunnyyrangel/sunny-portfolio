"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
            About
          </h2>
          <div className="mt-3 h-px w-12 bg-[var(--color-accent)]" />
        </motion.div>

        <div className="mt-12 grid gap-12 md:grid-cols-5">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div
              className="aspect-[4/5] w-full rounded-xl border border-[var(--color-border)]"
              style={{
                background: `linear-gradient(160deg, var(--color-bg-muted) 0%, var(--color-surface) 40%, var(--color-accent-muted) 100%)`,
              }}
            />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-[var(--color-text-muted)] leading-relaxed md:col-span-3"
          >
            <p>
              I&apos;m a designer and developer who thrives at the intersection
              of visual storytelling and clean code. With a background in
              branding, UI/UX, and frontend development, I bring ideas to life
              from concept to deployment.
            </p>
            <p>
              My work at{" "}
              <span className="text-[var(--color-text)]">Doing Good Works</span>{" "}
              and{" "}
              <span className="text-[var(--color-text)]">Foster Greatness</span>{" "}
              has centered on building digital experiences for mission-driven
              organizations — from donation platforms and campaign sites to
              community storytelling tools.
            </p>
            <p>
              I believe great design is invisible and great code is
              maintainable. Whether I&apos;m crafting a brand identity or
              architecting a Next.js application, I care deeply about the details
              that make experiences feel intentional and effortless.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
