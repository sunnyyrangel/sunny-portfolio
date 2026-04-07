"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Design",
    skills: [
      "Figma",
      "Adobe Creative Suite",
      "Branding",
      "UI/UX",
      "Typography",
      "Photography",
    ],
  },
  {
    title: "Development",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Vercel",
      "HTML/CSS",
      "JavaScript",
    ],
  },
];

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
            Skills
          </h2>
          <div className="mt-3 h-px w-12 bg-[var(--color-accent)]" />
        </motion.div>

        <div className="mt-12 grid gap-12 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
                {group.title}
              </h3>
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="mt-4 flex flex-wrap gap-2"
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={fadeUp}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-2 text-sm text-[var(--color-text-muted)] transition-colors duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent-light)]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
