import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography — Sunny Rangel",
  description: "Bringing my love of nature and its beauty together.",
};

const photos = Array.from({ length: 18 }, (_, i) => ({
  src: `/photography/${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Photography ${i + 1}`,
}));

export default function PhotographyPage() {
  return (
    <main className="px-6 pb-24 pt-28">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="text-sm text-[var(--color-text-secondary)] transition-opacity hover:opacity-60"
        >
          &larr; Back
        </Link>

        <h1 className="mt-8 font-[family-name:var(--font-display)] text-4xl tracking-tight sm:text-5xl">
          Photography
        </h1>
        <p className="mt-4 text-[var(--color-text-secondary)]">
          Bringing my love of nature and its beauty together.
        </p>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((photo) => (
            <div key={photo.src} className="mb-4 break-inside-avoid">
              <div className="relative overflow-hidden bg-[var(--color-surface)]">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  className="w-full"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-[var(--color-border)] pt-8">
          <Link
            href="/"
            className="text-sm text-[var(--color-text-secondary)] transition-opacity hover:opacity-60"
          >
            &larr; Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
