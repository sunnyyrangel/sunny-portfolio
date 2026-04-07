export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-[var(--color-text-subtle)]">
          &copy; {new Date().getFullYear()} Sunny Rangel
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:hello@sunnyrangel.com"
            className="text-sm text-[var(--color-text-subtle)] transition-colors hover:text-[var(--color-accent-light)]"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/sunnyrangel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-text-subtle)] transition-colors hover:text-[var(--color-accent-light)]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sunnyrangel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-text-subtle)] transition-colors hover:text-[var(--color-accent-light)]"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
