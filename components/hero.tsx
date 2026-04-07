"use client";

import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="flex min-h-[80vh] items-end px-6 pb-24 pt-32">
      <div className="mx-auto w-full max-w-6xl">
        <motion.h1
          custom={0}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="font-[family-name:var(--font-display)] text-5xl leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Sunny Rangel
        </motion.h1>
        <motion.p
          custom={1}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mt-4 text-sm uppercase tracking-[0.25em] text-[var(--color-text-secondary)]"
        >
          Designer & Developer
        </motion.p>
        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-text-secondary)]"
        >
          I design and build digital experiences for organizations doing good.
        </motion.p>
      </div>
    </section>
  );
}
