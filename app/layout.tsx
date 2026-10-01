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

export const metadata: Metadata = {
  title: {
    default: "KAAMKAAGAZ · Kaagaz samjho. Kaam karo.",
    template: "%s · KAAMKAAGAZ",
  },
  description:
    "Paperwork, made simple. Plain-language step-by-step guidance for Aadhaar Card, PAN Card, Passport, Birth Certificate, Domicile, Caste & Student Admissions.",
  icons: {
    icon: "/KaamKaagaz/favicon.svg",
    shortcut: "/KaamKaagaz/favicon.svg",
    apple: "/KaamKaagaz/favicon.svg",
  },
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

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${notoDevanagari.variable}`}>
      <body className="min-h-screen antialiased flex flex-col justify-between font-sans bg-paper text-ink">
        <LanguageProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2.5 focus:shadow-md focus:font-semibold focus:text-accent"
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
