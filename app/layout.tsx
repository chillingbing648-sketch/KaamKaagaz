import type { Metadata, Viewport } from "next";
import { Manrope, Noto_Sans_Devanagari } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n/context";
import { Navbar } from "@/components/Navbar";
import { ConnectionArea } from "@/components/ConnectionArea";
import { Footer } from "@/components/Footer";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-devanagari",
});

const isProd = process.env.NODE_ENV === "production";
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : isProd
      ? "/KaamKaagaz"
      : "";
const svgIconPath = basePath ? `${basePath}/favicon.svg?v=20261025` : "/favicon.svg?v=20261025";
const pngIconPath = basePath ? `${basePath}/favicon.png?v=20261025` : "/favicon.png?v=20261025";
const icoIconPath = basePath ? `${basePath}/favicon.ico?v=20261025` : "/favicon.ico?v=20261025";

export const metadata: Metadata = {
  metadataBase: new URL("https://kaamkaagaz.org"),
  title: {
    default: "KAAMKAAGAZ · Kaagaz samjho. Kaam karo.",
    template: "%s · KAAMKAAGAZ",
  },
  description:
    "Paperwork, made simple. Plain-language step-by-step guidance for Aadhaar Card, PAN Card, Passport, Birth Certificate, Domicile, Caste & Student Admissions.",
  icons: {
    icon: [
      { url: icoIconPath, sizes: "any" },
      { url: svgIconPath, type: "image/svg+xml" },
      { url: pngIconPath, type: "image/png", sizes: "192x192" },
    ],
    shortcut: icoIconPath,
    apple: [
      { url: pngIconPath, sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "KAAMKAAGAZ · Kaagaz samjho. Kaam karo.",
    description:
      "Plain-language, step-by-step guidance for Indian government civil documents and student admissions.",
    url: "https://kaamkaagaz.org",
    siteName: "KaamKaagaz",
    images: [
      {
        url: basePath ? `${basePath}/kaamkaagaz-logo.png` : "/kaamkaagaz-logo.png",
        alt: "KaamKaagaz Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAAMKAAGAZ · Civic Paperwork Utility",
    description:
      "Plain-language, step-by-step guidance for Indian government civil documents and student admissions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  referrer: "strict-origin-when-cross-origin",
  keywords: [
    "KAAMKAAGAZ",
    "Aadhaar Card",
    "PAN Card",
    "Passport",
    "Birth Certificate",
    "Domicile Certificate",
    "Caste Certificate",
    "Leaving Certificate",
    "Income Certificate",
    "Student Admissions",
    "Aaple Sarkar",
    "Government documents India",
    "कागज़ समझो काम करो",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fbfbfd",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${notoDevanagari.variable}`}>
      <body className="min-h-screen antialiased flex flex-col justify-between font-sans bg-paper text-ink selection:bg-accent-soft selection:text-accent">
        <LanguageProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-xl focus:bg-surface focus:px-4 focus:py-2.5 focus:shadow-lg focus:font-semibold focus:text-accent focus:ring-2 focus:ring-accent"
          >
            Skip to content
          </a>
          <div className="flex-1">
            <Navbar />
            <main id="main" className="mx-auto max-w-6xl px-4 sm:px-6 py-6 sm:py-10">
              {children}
              <ConnectionArea />
            </main>
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
