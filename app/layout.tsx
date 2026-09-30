import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "@/lib/i18n/context";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

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
    <html lang="en">
      <body className="min-h-screen antialiased flex flex-col justify-between">
        <LanguageProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:shadow-md focus:font-semibold focus:text-accent"
          >
            Skip to content
          </a>
          <div>
            <Navbar />
            <main id="main" className="mx-auto max-w-2xl px-4 py-6 sm:py-10">
              {children}
            </main>
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
