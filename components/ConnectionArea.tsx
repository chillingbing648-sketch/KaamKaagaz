"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export function ConnectionArea() {
  const { t } = useLanguage();

  return (
    <section
      aria-label="Civic ecosystem and official sources"
      className="mt-16 pt-8 pb-8 border border-black/[0.06] bg-gradient-to-b from-white to-[#fbfbfd] rounded-2xl p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
    >
      <div className="max-w-3xl mb-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft/80 border border-primary/10 px-3 py-1 text-[11px] font-semibold text-primary tracking-wide mb-2.5">
          Government ecosystem
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight">
          {t.connectionArea.title}
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">
          {t.connectionArea.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: Official Portals */}
        <div className="apple-card p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5 text-ink font-bold text-sm">
              <span className="flex size-8 items-center justify-center rounded-xl bg-accent-soft text-accent text-sm font-semibold">
                ↗
              </span>
              <span className="tracking-tight">{t.connectionArea.officialPortalsTitle}</span>
            </div>
            <p className="text-xs text-muted leading-relaxed mb-4">
              {t.connectionArea.officialPortalsSubtitle}
            </p>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://www.incometax.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between font-semibold text-ink hover:text-accent transition-colors"
                >
                  <span>Income Tax Department</span>
                  <span className="text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-transform">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.passportindia.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between font-semibold text-ink hover:text-accent transition-colors"
                >
                  <span>Passport Seva Kendra</span>
                  <span className="text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-transform">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://aaplesarkar.mahaonline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between font-semibold text-ink hover:text-accent transition-colors"
                >
                  <span>Aaple Sarkar (Maharashtra)</span>
                  <span className="text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-transform">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://cetcell.mahacet.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between font-semibold text-ink hover:text-accent transition-colors"
                >
                  <span>Maharashtra State CET Cell</span>
                  <span className="text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-transform">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://mahafyjcadmissions.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between font-semibold text-ink hover:text-accent transition-colors"
                >
                  <span>Maharashtra 11th / FYJC</span>
                  <span className="text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-transform">↗</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-5 pt-3.5 border-t border-black/[0.06] text-[11px] text-muted flex items-center justify-between">
            <span>Direct government portals only.</span>
            <Link href="/admissions#portal-directory" className="text-accent font-semibold hover:underline">
              All 7+ portals →
            </Link>
          </div>
        </div>

        {/* Card 2: Civic Privacy & Trust */}
        <div className="apple-card p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5 text-ink font-bold text-sm">
              <span className="flex size-8 items-center justify-center rounded-xl bg-accent-soft text-accent text-sm font-semibold">
                ✓
              </span>
              <span className="tracking-tight">{t.connectionArea.civicTrustTitle}</span>
            </div>
            <p className="text-xs text-muted leading-relaxed mb-4">
              {t.connectionArea.civicTrustSubtitle}
            </p>
            <div className="space-y-2.5 text-xs text-ink/80 leading-snug">
              <p className="flex items-center gap-2">
                <span className="flex size-4 items-center justify-center rounded-full bg-done/10 text-done text-[10px] font-bold">✓</span>
                <span>Zero server document storage</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="flex size-4 items-center justify-center rounded-full bg-done/10 text-done text-[10px] font-bold">✓</span>
                <span>No Aadhaar/PAN numbers requested</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="flex size-4 items-center justify-center rounded-full bg-done/10 text-done text-[10px] font-bold">✓</span>
                <span>Checklists persist strictly in browser</span>
              </p>
            </div>
          </div>
          <div className="mt-5 pt-3.5 border-t border-black/[0.06]">
            <Link
              href="/privacy"
              className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1 group"
            >
              <span>{t.legal.privacyTitle}</span>
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Card 3: Helpful Resources & Verification */}
        <div className="apple-card p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5 text-ink font-bold text-sm">
              <span className="flex size-8 items-center justify-center rounded-xl bg-accent-soft text-accent text-sm font-semibold">
                ◆
              </span>
              <span className="tracking-tight">{t.connectionArea.needAssistanceTitle}</span>
            </div>
            <p className="text-xs text-muted leading-relaxed mb-4">
              {t.connectionArea.needAssistanceSubtitle}
            </p>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/disclaimer" className="block text-muted hover:text-ink font-medium transition-colors">
                  • Civic Disclaimer & Scope
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="block text-muted hover:text-ink font-medium transition-colors">
                  • Accessibility Commitment
                </Link>
              </li>
              <li>
                <Link href="/security" className="block text-muted hover:text-ink font-medium transition-colors">
                  • Vulnerability Disclosure
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-5 pt-3.5 border-t border-black/[0.06]">
            <Link
              href="/legal"
              className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1 group"
            >
              <span>View all trust policies</span>
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
