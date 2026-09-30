"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export function ConnectionArea() {
  const { t } = useLanguage();

  return (
    <section
      aria-label="Civic ecosystem and official sources"
      className="mt-16 pt-10 pb-8 border-t-2 border-line/80 bg-paper/60 rounded-2xl p-6 sm:p-8"
    >
      <div className="max-w-3xl mb-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent mb-2">
          <span>🏛️</span>
          <span>CIVIC CONNECTION AREA</span>
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-ink tracking-tight">
          {t.connectionArea.title}
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">
          {t.connectionArea.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: Official Portals */}
        <div className="rounded-xl border border-line bg-surface p-4 sm:p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-ink font-bold text-sm">
              <span className="flex size-7 items-center justify-center rounded-lg bg-accent-soft text-accent text-sm">
                🏛️
              </span>
              <span>{t.connectionArea.officialPortalsTitle}</span>
            </div>
            <p className="text-xs text-muted leading-relaxed mb-4">
              {t.connectionArea.officialPortalsSubtitle}
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.incometax.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between font-semibold text-ink hover:text-accent"
                >
                  <span>Income Tax Department</span>
                  <span className="text-muted group-hover:text-accent">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.passportindia.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between font-semibold text-ink hover:text-accent"
                >
                  <span>Passport Seva Kendra</span>
                  <span className="text-muted group-hover:text-accent">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://aaplesarkar.mahaonline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between font-semibold text-ink hover:text-accent"
                >
                  <span>Aaple Sarkar (Maharashtra)</span>
                  <span className="text-muted group-hover:text-accent">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://cetcell.mahacet.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between font-semibold text-ink hover:text-accent"
                >
                  <span>Maharashtra State CET Cell</span>
                  <span className="text-muted group-hover:text-accent">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://mahafyjcadmissions.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between font-semibold text-ink hover:text-accent"
                >
                  <span>Maharashtra 11th / FYJC</span>
                  <span className="text-muted group-hover:text-accent">↗</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-line/60 text-[11px] text-muted flex items-center justify-between">
            <span>Direct government portals only.</span>
            <Link href="/admissions#portal-directory" className="text-accent font-bold hover:underline">
              All 7+ portals →
            </Link>
          </div>
        </div>

        {/* Card 2: Civic Privacy & Trust */}
        <div className="rounded-xl border border-line bg-surface p-4 sm:p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-ink font-bold text-sm">
              <span className="flex size-7 items-center justify-center rounded-lg bg-accent-soft text-accent text-sm">
                🛡️
              </span>
              <span>{t.connectionArea.civicTrustTitle}</span>
            </div>
            <p className="text-xs text-muted leading-relaxed mb-4">
              {t.connectionArea.civicTrustSubtitle}
            </p>
            <div className="space-y-2 text-xs text-ink/80 leading-snug">
              <p className="flex items-start gap-1.5">
                <span className="text-done font-bold">✓</span>
                <span>Zero server document storage</span>
              </p>
              <p className="flex items-start gap-1.5">
                <span className="text-done font-bold">✓</span>
                <span>No Aadhaar/PAN numbers requested</span>
              </p>
              <p className="flex items-start gap-1.5">
                <span className="text-done font-bold">✓</span>
                <span>Checklists persist strictly in browser</span>
              </p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-line/60">
            <Link
              href="/privacy"
              className="text-xs font-bold text-accent hover:underline inline-flex items-center gap-1"
            >
              <span>{t.legal.privacyTitle}</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Card 3: Helpful Resources & Verification */}
        <div className="rounded-xl border border-line bg-surface p-4 sm:p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-ink font-bold text-sm">
              <span className="flex size-7 items-center justify-center rounded-lg bg-accent-soft text-accent text-sm">
                ⚖️
              </span>
              <span>{t.connectionArea.needAssistanceTitle}</span>
            </div>
            <p className="text-xs text-muted leading-relaxed mb-4">
              {t.connectionArea.needAssistanceSubtitle}
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/disclaimer" className="block text-muted hover:text-ink font-medium">
                  • Civic Disclaimer & Scope
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="block text-muted hover:text-ink font-medium">
                  • Accessibility Commitment
                </Link>
              </li>
              <li>
                <Link href="/security" className="block text-muted hover:text-ink font-medium">
                  • Vulnerability Disclosure
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-line/60">
            <Link
              href="/legal"
              className="text-xs font-bold text-accent hover:underline inline-flex items-center gap-1"
            >
              <span>View all trust policies</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
