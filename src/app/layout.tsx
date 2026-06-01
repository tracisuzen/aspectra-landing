import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aspectra — Relationship Astrology",
  description:
    "Aspectra combines the ancient art of synastry with the precision of Swiss Ephemeris to reveal the cosmic dynamics between you and your partner. Discover the planetary aspects that shape your relationships.",
  keywords: [
    "relationship astrology",
    "synastry",
    "birth chart",
    "aspect analysis",
    "Swiss Ephemeris",
    "compatibility",
  ],
  openGraph: {
    title: "Aspectra — Relationship Astrology",
    description:
      "Discover the cosmic dynamics between you and your partner through synastry and Swiss Ephemeris precision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-white text-[#1A1A1A] antialiased`}>
        <div className="grain-overlay min-h-screen bg-white">
          <Nav />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
