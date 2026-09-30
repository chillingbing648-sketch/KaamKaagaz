"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-16 border-t border-line bg-surface/60 py-8 text-sm text-muted">
      <div className="mx-auto max-w-2xl px-4 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="font-semibold text-ink">
            KAAMKAAGAZ · <span className="font-normal text-muted">{t.brand.tagline}</span>
          </p>
          <p className="text-xs text-muted">
            {t.brand.subTagline}
          </p>
        </div>

        <div className="rounded-lg border border-line/80 bg-paper p-3 text-xs leading-relaxed text-muted">
          <p className="font-medium text-ink mb-1">⚖️ Important Notice:</p>
          <p>{t.brand.notGovWarning}</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-muted">
          <p>© {new Date().getFullYear()} KaamKaagaz. Built for clarity.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-ink underline underline-offset-4">
              {t.nav.allServices}
            </Link>
            <a
              href="https://www.incometax.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink underline underline-offset-4"
            >
              Income Tax
            </a>
            <a
              href="https://www.passportindia.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink underline underline-offset-4"
            >
              Passport Seva
            </a>
            <a
              href="https://aaplesarkar.mahaonline.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink underline underline-offset-4"
            >
              Aaple Sarkar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
