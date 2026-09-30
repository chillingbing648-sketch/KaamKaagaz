"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-16 border-t border-line bg-surface/80 py-8 text-sm text-muted">
      <div className="mx-auto max-w-2xl px-4 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="font-semibold text-ink">
            KAAMKAAGAZ · <span className="font-normal text-muted">{t.brand.tagline}</span>
          </p>
          <p className="text-xs text-muted">
            {t.brand.subTagline}
          </p>
        </div>

        <div className="rounded-xl border border-line bg-paper p-3.5 text-xs leading-relaxed text-muted">
          <p className="font-bold text-ink mb-1">⚖️ {t.officialSource.title}:</p>
          <p>{t.brand.notGovWarning}</p>
        </div>

        {/* Legal & Policy Links */}
        <div className="pt-2 border-t border-line/60 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted">
          <Link href="/privacy" className="hover:text-accent underline underline-offset-4">
            {t.legal.privacyTitle}
          </Link>
          <Link href="/terms" className="hover:text-accent underline underline-offset-4">
            {t.legal.termsTitle}
          </Link>
          <Link href="/disclaimer" className="hover:text-accent underline underline-offset-4">
            {t.legal.disclaimerTitle}
          </Link>
          <Link href="/security" className="hover:text-accent underline underline-offset-4">
            {t.legal.securityTitle}
          </Link>
          <Link href="/cookies" className="hover:text-accent underline underline-offset-4">
            {t.legal.cookiesTitle}
          </Link>
          <Link href="/accessibility" className="hover:text-accent underline underline-offset-4">
            {t.legal.accessibilityTitle}
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-1 text-xs text-muted">
          <p>© {new Date().getFullYear()} KaamKaagaz. Built for clarity & trust.</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.incometax.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink underline underline-offset-4"
            >
              Income Tax ↗
            </a>
            <a
              href="https://www.passportindia.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink underline underline-offset-4"
            >
              Passport Seva ↗
            </a>
            <a
              href="https://aaplesarkar.mahaonline.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink underline underline-offset-4"
            >
              Aaple Sarkar ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
