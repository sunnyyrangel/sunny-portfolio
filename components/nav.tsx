"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const links = [
    { label: "Work", href: isHome ? "#work" : "/#work" },
    { label: "Photography", href: "/photography" },
    { label: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-sm font-medium tracking-wide text-[var(--color-text)] transition-opacity hover:opacity-60"
          >
            Sunny Rangel
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-[var(--color-text-secondary)] transition-opacity hover:opacity-60"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:sunjanay@gmail.com"
              className="text-sm text-[var(--color-text)] underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              sunjanay@gmail.com
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={
                mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
              }
              className="block h-px w-5 bg-[var(--color-text)]"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-px w-5 bg-[var(--color-text)]"
              transition={{ duration: 0.1 }}
            />
            <motion.span
              animate={
                mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              className="block h-px w-5 bg-[var(--color-text)]"
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[var(--color-bg)] md:hidden"
          >
            <ul className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl text-[var(--color-text)]"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.25 }}
              >
                <a
                  href="mailto:sunjanay@gmail.com"
                  className="text-lg text-[var(--color-text-secondary)]"
                >
                  sunjanay@gmail.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
