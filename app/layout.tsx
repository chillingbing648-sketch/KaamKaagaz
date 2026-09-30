import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n/context";
import { Navbar } from "@/components/Navbar";
import { ConnectionArea } from "@/components/ConnectionArea";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-devanagari",
});

export const metadata: Metadata = {
  title: {
    default: "KaamKaagaz · Kaagaz samjho. Kaam karo.",
    template: "%s · KaamKaagaz",
  },
  description:
    "Paperwork, made simple. Plain-language step-by-step guidance for PAN Card, Passport, and Income Certificate. Kaunsa kaam karna hai?",
  keywords: [
    "KaamKaagaz",
    "PAN Card",
    "Passport",
    "Income Certificate",
    "Aaple Sarkar",
    "Government documents India",
    "कागज़ समझो काम करो",
  ],
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${notoDevanagari.variable}`}>
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
