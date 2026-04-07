import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunny Rangel — Designer & Developer",
  description: "Portfolio of Sunny Rangel, a designer and developer working in nonprofit tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
