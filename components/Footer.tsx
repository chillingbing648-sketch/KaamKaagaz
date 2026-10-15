"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-black/[0.06] bg-[#f5f5f7]/60 dark:bg-[#161617]/60 backdrop-blur-md pt-14 pb-12 text-sm text-muted">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main 4-column organized grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-bold focus-visible:outline-2 focus-visible:outline-accent group"
            >
              <span className="flex size-7.5 items-center justify-center rounded-xl bg-accent text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
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
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink mb-3.5">
              Explore
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/#services"
                  className="text-muted hover:text-ink transition-colors"
                >
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/checklist"
                  className="text-muted hover:text-ink transition-colors"
                >
                  {t.nav.checklist}
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-muted hover:text-ink transition-colors"
                >
                  Student Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-muted hover:text-ink transition-colors"
                >
                  {t.nav.howItWorks}
                </Link>
              </li>
            </ul>
          </div>

          {/* Group 2: Official Sources */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink mb-3.5">
              Official Portals
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://www.incometax.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between text-muted hover:text-ink transition-colors"
                >
                  <span>Income Tax Department</span>
                  <span className="text-[11px] text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-transform">↗</span>
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
                  <span className="text-[11px] text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-transform">↗</span>
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
                  <span className="text-[11px] text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-transform">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Group 3: Trust & Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink mb-3.5">
              Trust & Legal
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted hover:text-ink transition-colors"
                >
                  {t.legal.privacyTitle}
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-muted hover:text-ink transition-colors"
                >
                  {t.legal.cookiesTitle}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted hover:text-ink transition-colors"
                >
                  {t.legal.termsTitle}
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-muted hover:text-ink transition-colors"
                >
                  {t.legal.securityTitle}
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="text-muted hover:text-ink transition-colors"
                >
                  {t.legal.accessibilityTitle}
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-muted hover:text-ink transition-colors"
                >
                  {t.legal.disclaimerTitle}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Not-Gov Warning Box */}
        <div className="mt-10 rounded-2xl border border-black/[0.06] bg-white/70 p-4.5 text-xs text-muted leading-relaxed shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
          <p className="font-bold text-ink mb-1 flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-accent shrink-0"></span>
            <span>Notice: {t.officialSource.title}</span>
          </p>
          <p className="text-muted/90">{t.brand.notGovWarning}</p>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-8 pt-5 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 text-xs text-muted">
          <p>© {currentYear} KaamKaagaz · Independent civic information utility.</p>
          <p className="font-medium text-ink/70">Zero document storage · No ads · No tracking.</p>
        </div>
      </div>
    </footer>
  );
}
