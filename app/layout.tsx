import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import { Nav } from "@/components/nav";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sunny Rangel — Designer & Developer",
  description:
    "Portfolio of Sunny Rangel, a designer and developer crafting digital experiences for nonprofit organizations and social impact.",
  openGraph: {
    title: "Sunny Rangel — Designer & Developer",
    description:
      "Designer and developer crafting digital experiences for organizations doing good.",
    type: "website",
    locale: "en_US",
    siteName: "Sunny Rangel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunny Rangel — Designer & Developer",
    description:
      "Designer and developer crafting digital experiences for organizations doing good.",
  },
  metadataBase: new URL("https://sunnyrangel.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
