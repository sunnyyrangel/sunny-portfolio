export function Footer() {
  return (
    <footer id="contact" className="border-t border-[var(--color-border)] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">
          Let&apos;s work together
        </p>
        <div className="mt-8 flex flex-wrap gap-8">
          <a
            href="mailto:sunjanay@gmail.com"
            className="text-[var(--color-text-secondary)] underline underline-offset-4 transition-colors hover:text-[var(--color-text)]"
          >
            sunjanay@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/sunjanayadav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] underline underline-offset-4 transition-colors hover:text-[var(--color-text)]"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/sunjana.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] underline underline-offset-4 transition-colors hover:text-[var(--color-text)]"
          >
            Instagram
          </a>
        </div>
        <p className="mt-16 text-xs text-[var(--color-text-subtle)]">
          &copy; {new Date().getFullYear()} Sunny Rangel
        </p>
      </div>
    </footer>
  );
}
