"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

const isProd = process.env.NODE_ENV === "production";
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : isProd
      ? "/KaamKaagaz"
      : "";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#161617] pt-14 pb-12 text-sm shadow-[0_-4px_24px_rgba(0,0,0,0.02)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Main organized grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-3.5 sm:col-span-2 md:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-bold focus-visible:outline-2 focus-visible:outline-accent group"
            >
              <span className="flex size-8 items-center justify-center rounded-xl bg-accent text-white font-black text-sm shadow-xs group-hover:scale-105 transition-transform duration-200">
                क
              </span>
              <span className="text-xl font-extrabold tracking-tight text-ink dark:text-white">
                KaamKaaga<span className="text-accent">Z</span>
              </span>
            </Link>
            <p className="font-bold text-xs sm:text-sm text-accent tracking-tight">
              {t.brand.tagline}
            </p>
            <p className="text-xs font-medium text-ink/75 dark:text-white/75 leading-relaxed max-w-sm">
              {t.brand.subTagline}
            </p>
          </div>

          {/* Group 1: Explore */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-ink dark:text-white mb-3.5">
              {t.common.footerExplore}
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px]">
              <li>
                <Link
                  href="/identity/"
                  className="font-semibold text-ink/80 dark:text-white/80 hover:text-accent dark:hover:text-accent transition-colors duration-150 py-1 min-h-[32px] inline-flex items-center"
                >
                  {t.nav.identity}
                </Link>
              </li>
              <li>
                <Link
                  href="/certificates/"
                  className="font-semibold text-ink/80 dark:text-white/80 hover:text-accent dark:hover:text-accent transition-colors duration-150 py-1 min-h-[32px] inline-flex items-center"
                >
                  {t.nav.certificates}
                </Link>
              </li>
              <li>
                <Link
                  href="/education/"
                  className="font-semibold text-ink/80 dark:text-white/80 hover:text-accent dark:hover:text-accent transition-colors duration-150 py-1 min-h-[32px] inline-flex items-center"
                >
                  {t.nav.education}
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions/"
                  className="font-semibold text-ink/80 dark:text-white/80 hover:text-accent dark:hover:text-accent transition-colors duration-150 py-1 min-h-[32px] inline-flex items-center"
                >
                  {t.nav.admissions}
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works/"
                  className="font-semibold text-ink/80 dark:text-white/80 hover:text-accent dark:hover:text-accent transition-colors duration-150 py-1 min-h-[32px] inline-flex items-center"
                >
                  {t.nav.howItWorks}
                </Link>
              </li>
              <li>
                <Link
                  href="/checklist/"
                  className="font-semibold text-ink/80 dark:text-white/80 hover:text-accent dark:hover:text-accent transition-colors duration-150 py-1 min-h-[32px] inline-flex items-center"
                >
                  {t.nav.checklist}
                </Link>
              </li>
            </ul>
          </div>

          {/* Group 2: Official Sources */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-ink dark:text-white mb-3.5">
              {t.common.footerOfficialPortals}
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px]">
              <li>
                <a
                  href="https://myaadhaar.uidai.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between font-semibold text-ink/80 dark:text-white/80 hover:text-accent dark:hover:text-accent transition-colors duration-150 py-1 min-h-[32px]"
                >
                  <span>UIDAI (Aadhaar)</span>
                  <span className="text-[11px] text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-150">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.incometax.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between font-semibold text-ink/80 dark:text-white/80 hover:text-accent dark:hover:text-accent transition-colors duration-150 py-1 min-h-[32px]"
                >
                  <span>Income Tax (PAN)</span>
                  <span className="text-[11px] text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-150">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.passportindia.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between font-semibold text-ink/80 dark:text-white/80 hover:text-accent dark:hover:text-accent transition-colors duration-150 py-1 min-h-[32px]"
                >
                  <span>Passport Seva Kendra</span>
                  <span className="text-[11px] text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-150">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://aaplesarkar.mahaonline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between font-semibold text-ink/80 dark:text-white/80 hover:text-accent dark:hover:text-accent transition-colors duration-150 py-1 min-h-[32px]"
                >
                  <span>Aaple Sarkar Portal</span>
                  <span className="text-[11px] text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-150">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://cetcell.mahacet.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between font-semibold text-ink/80 dark:text-white/80 hover:text-accent dark:hover:text-accent transition-colors duration-150 py-1 min-h-[32px]"
                >
                  <span>Maharashtra CET Cell</span>
                  <span className="text-[11px] text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-150">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Group 3: Trust & Legal */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-ink dark:text-white mb-3.5">
              {t.common.footerTrustLegal}
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-[13px]">
              <li>
                <Link
                  href="/privacy/"
                  className="font-semibold text-ink/80 dark:text-white/80 hover:text-accent dark:hover:text-accent transition-colors duration-150 py-1 min-h-[32px] inline-flex items-center"
                >
                  {t.legal.privacyTitle}
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies/"
                  className="font-semibold text-ink/80 dark:text-white/80 hover:text-accent dark:hover:text-accent transition-colors duration-150 py-1 min-h-[32px] inline-flex items-center"
                >
                  {t.legal.cookiesTitle}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms/"
                  className="font-semibold text-ink/80 dark:text-white/80 hover:text-accent dark:hover:text-accent transition-colors duration-150 py-1 min-h-[32px] inline-flex items-center"
                >
                  {t.legal.termsTitle}
                </Link>
              </li>
              <li>
                <Link
                  href="/security/"
                  className="font-semibold text-ink/80 dark:text-white/80 hover:text-accent dark:hover:text-accent transition-colors duration-150 py-1 min-h-[32px] inline-flex items-center"
                >
                  {t.legal.securityTitle}
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility/"
                  className="font-semibold text-ink/80 dark:text-white/80 hover:text-accent dark:hover:text-accent transition-colors duration-150 py-1 min-h-[32px] inline-flex items-center"
                >
                  {t.legal.accessibilityTitle}
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer/"
                  className="font-semibold text-ink/80 dark:text-white/80 hover:text-accent dark:hover:text-accent transition-colors duration-150 py-1 min-h-[32px] inline-flex items-center"
                >
                  {t.legal.disclaimerTitle}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Civic Transparency & End-of-Page Notice */}
        <div className="mt-12 rounded-2xl border border-accent/20 bg-accent-soft/30 dark:bg-accent-soft/10 p-5 sm:p-6 text-xs sm:text-sm text-ink dark:text-white leading-relaxed shadow-xs">
          <p className="font-extrabold text-ink dark:text-white mb-2 flex items-center gap-2">
            <span className="flex size-5 items-center justify-center rounded-full bg-accent text-white text-[10px] font-bold">🏛️</span>
            <span>{t.common.footerNotice} {t.officialSource.title}</span>
          </p>
          <p className="font-semibold text-ink/90 dark:text-white/90 mb-2 leading-relaxed">
            {t.brand.disclaimer}
          </p>
          <p className="text-xs text-muted dark:text-white/60 leading-relaxed">
            {t.brand.notGovWarning}
          </p>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-8 pt-5 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 text-xs text-ink/70 dark:text-white/70">
          <p>© {currentYear} KaamKaagaz · {t.common.footerIndependent}</p>
          <p className="font-semibold text-ink/90 dark:text-white/90">{t.common.footerZeroStorage}</p>
        </div>
      </div>
    </footer>
  );
}
