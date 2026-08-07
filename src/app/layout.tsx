import type { Metadata } from "next";
import { Inter, Space_Grotesk, Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

import SmoothScroll from "@/components/shared/SmoothScroll";
import { MagneticCursor } from "@/components/MagneticCursor";

export const metadata: Metadata = {
  title: "Virrat Global — Premium Creative & Tech Agency",
  description:
    "We build bold brands and high-performing digital platforms. Partner with Virrat Global to scale your startup, SaaS, or enterprise.",
  keywords: ["brand strategy", "digital marketing agency", "web development", "SaaS branding", "UI/UX design", "performance marketing"],
  openGraph: {
    type: "website",
    title: "Virrat Global | Creative Branding & Digital Marketing Agency",
    description: "Transform your brand with Virrat Global. We deliver strategic design, robust web development, and digital marketing that drives measurable growth.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${plusJakartaSans.variable} ${geistSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-body bg-[var(--color-background)] text-[var(--color-foreground)]">
        <MagneticCursor>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </MagneticCursor>
      </body>
    </html>
  );
}
