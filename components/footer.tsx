export function Footer() {
  return (
    <footer id="contact" className="border-t border-[var(--color-border)] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">
          Let&apos;s work together
        </h2>
        <div className="mt-8 flex flex-wrap gap-6">
          <a
            href="mailto:sunjanay@gmail.com"
            className="text-sm text-[var(--color-text-secondary)] underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            sunjanay@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/sunjanayadav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-text-secondary)] underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/sunjana.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-text-secondary)] underline underline-offset-4 transition-opacity hover:opacity-60"
          >
            Instagram
          </a>
        </div>
        <p className="mt-12 text-xs text-[var(--color-text-subtle)]">
          &copy; {new Date().getFullYear()} Sunny Rangel
        </p>
      </div>
    </footer>
  );
}
