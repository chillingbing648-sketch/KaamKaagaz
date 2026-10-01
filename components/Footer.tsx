"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-line bg-surface/90 pt-12 pb-10 text-sm text-muted">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main 4-column organized grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-bold focus-visible:outline-2 focus-visible:outline-accent"
            >
              <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-white font-bold text-sm shadow-2xs">
                क
              </span>
              <span className="text-lg font-extrabold tracking-tight text-ink">
                KaamKaaga<span className="text-accent">Z</span>
              </span>
            </Link>
            <p className="font-semibold text-xs text-accent">
              {t.brand.tagline}
            </p>
            <p className="text-xs text-muted leading-relaxed">
              {t.brand.subTagline} {t.brand.disclaimer}
            </p>
          </div>

          {/* Group 1: Explore */}
          <div>
            <h3 className="text-xs font-semibold tracking-wide text-ink mb-3">
              Explore
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/#services"
                  className="text-muted hover:text-accent transition-colors"
                >
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/checklist"
                  className="text-muted hover:text-accent transition-colors"
                >
                  {t.nav.checklist}
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-muted hover:text-accent transition-colors"
                >
                  {t.nav.howItWorks}
                </Link>
              </li>
            </ul>
          </div>

          {/* Group 2: Official Sources */}
          <div>
            <h3 className="text-xs font-semibold tracking-wide text-ink mb-3">
              Official Portals
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.incometax.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-muted hover:text-ink transition-colors"
                >
                  <span>Income Tax Department</span>
                  <span className="text-[11px] text-muted group-hover:text-accent">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.passportindia.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-muted hover:text-ink transition-colors"
                >
                  <span>Passport Seva Kendra</span>
                  <span className="text-[11px] text-muted group-hover:text-accent">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://aaplesarkar.mahaonline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-muted hover:text-ink transition-colors"
                >
                  <span>Aaple Sarkar Portal</span>
                  <span className="text-[11px] text-muted group-hover:text-accent">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Group 3: Trust & Legal */}
          <div>
            <h3 className="text-xs font-semibold tracking-wide text-ink mb-3">
              Trust & Legal
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted hover:text-accent transition-colors"
                >
                  {t.legal.privacyTitle}
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-muted hover:text-accent transition-colors"
                >
                  {t.legal.cookiesTitle}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted hover:text-accent transition-colors"
                >
                  {t.legal.termsTitle}
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-muted hover:text-accent transition-colors"
                >
                  {t.legal.securityTitle}
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="text-muted hover:text-accent transition-colors"
                >
                  {t.legal.accessibilityTitle}
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-muted hover:text-accent transition-colors"
                >
                  {t.legal.disclaimerTitle}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Not-Gov Warning Box */}
        <div className="mt-8 rounded-xl border border-line bg-paper p-3.5 text-xs text-muted leading-relaxed">
          <p className="font-bold text-ink mb-0.5">Notice: {t.officialSource.title}</p>
          <p>{t.brand.notGovWarning}</p>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-8 pt-4 border-t border-line/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-muted">
          <p>© {currentYear} KaamKaagaz · Independent civic information utility.</p>
          <p>Zero document storage · No ads · No tracking.</p>
        </div>
      </div>
    </footer>
  );
}
