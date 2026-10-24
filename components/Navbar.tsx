"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/context";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { processes } from "@/data/processes";
import { getLocalizedProcess } from "@/lib/i18n/localize";

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : "/KaamKaagaz";

export function Navbar() {
  const { language, t } = useLanguage();
  const pathname = usePathname();
  const [checklistMenuOpen, setChecklistMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const checklistMenuRef = useRef<HTMLDivElement>(null);
  const servicesMenuRef = useRef<HTMLDivElement>(null);

  // Active section / page determination
  const isServicesActive =
    pathname.startsWith("/identity") ||
    pathname.startsWith("/certificates") ||
    pathname.startsWith("/education") ||
    pathname.startsWith("/process");

  const isAdmissionsActive = pathname.startsWith("/admissions");
  const isHowItWorksActive = pathname.startsWith("/how-it-works");
  const isChecklistActive = pathname.startsWith("/checklist");

  // Close dropdowns on click outside or escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (checklistMenuRef.current && !checklistMenuRef.current.contains(target)) {
        setChecklistMenuOpen(false);
      }
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(target)) {
        setServicesMenuOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setChecklistMenuOpen(false);
        setServicesMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 apple-glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3">
        {/* Zone 1: Brand = Identity */}
        <Link
          href="/"
          className="group inline-flex flex-col items-start font-bold focus-visible:outline-2 focus-visible:outline-accent active:scale-[0.98] transition-transform"
          aria-label="KaamKaagaz Home"
        >
          <img
            src={`${basePath}/kaamkaagaz-logo.png`}
            alt="KaamKaagaz"
            className="h-7 sm:h-8 w-auto max-w-[155px] sm:max-w-[185px] object-contain"
          />
          <span className="text-[10px] sm:text-[10.5px] font-semibold text-accent tracking-tight pl-0.5 leading-none mt-0.5 hidden xs:block">
            {t.brand.tagline}
          </span>
        </Link>

        {/* Zone 2: Navigation = Apple Segmented Controller */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-0.5 p-1 rounded-full bg-black/[0.04] border border-black/[0.04]">
          {/* Services Category Dropdown Menu */}
          <div className="relative" ref={servicesMenuRef}>
            <div
              className={`inline-flex items-center rounded-full transition-all duration-200 ${
                isServicesActive
                  ? "text-ink bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] font-bold"
                  : "text-muted hover:text-ink hover:bg-black/[0.02]"
              }`}
            >
              <button
                type="button"
                onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
                aria-expanded={servicesMenuOpen}
                className="inline-flex min-h-[34px] items-center gap-1 px-3.5 py-1 text-xs font-semibold cursor-pointer"
              >
                <span>{t.nav.services}</span>
                <svg
                  className={`size-3 transition-transform duration-200 ${servicesMenuOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {servicesMenuOpen && (
              <div className="absolute left-0 mt-2 w-64 rounded-2xl border border-black/[0.06] bg-white/95 backdrop-blur-xl p-2 shadow-[0_12px_32px_rgba(0,0,0,0.12)] z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-1.5 border-b border-black/[0.04] pb-2 mb-1">
                  <p className="text-[11px] font-semibold text-muted tracking-tight">
                    {t.categories.filterServices}
                  </p>
                </div>
                <div className="space-y-0.5">
                  <Link
                    href="/identity/"
                    onClick={() => setServicesMenuOpen(false)}
                    className="flex flex-col px-3 py-2 text-xs font-medium text-ink hover:bg-black/[0.04] hover:text-accent rounded-xl transition-colors"
                  >
                    <span className="font-bold">{t.nav.identity}</span>
                    <span className="text-[10px] text-muted">{t.home.tagIdentity}</span>
                  </Link>

                  <Link
                    href="/certificates/"
                    onClick={() => setServicesMenuOpen(false)}
                    className="flex flex-col px-3 py-2 text-xs font-medium text-ink hover:bg-black/[0.04] hover:text-accent rounded-xl transition-colors"
                  >
                    <span className="font-bold">{t.nav.certificates}</span>
                    <span className="text-[10px] text-muted">{t.home.tagCertificates}</span>
                  </Link>

                  <Link
                    href="/education/"
                    onClick={() => setServicesMenuOpen(false)}
                    className="flex flex-col px-3 py-2 text-xs font-medium text-ink hover:bg-black/[0.04] hover:text-accent rounded-xl transition-colors"
                  >
                    <span className="font-bold">{t.nav.education}</span>
                    <span className="text-[10px] text-muted">{t.home.tagEducation}</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Admissions Direct Page */}
          <Link
            href="/admissions/"
            className={`inline-flex min-h-[34px] items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
              isAdmissionsActive
                ? "text-accent bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] font-bold"
                : "text-muted hover:text-ink hover:bg-black/[0.02]"
            }`}
          >
            <span aria-hidden="true" className="text-xs">🎓</span>
            <span>{t.nav.admissions}</span>
          </Link>

          {/* How It Works Dedicated Page */}
          <Link
            href="/how-it-works/"
            className={`inline-flex min-h-[34px] items-center px-3.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
              isHowItWorksActive
                ? "text-ink bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] font-bold"
                : "text-muted hover:text-ink hover:bg-black/[0.02]"
            }`}
          >
            {t.nav.howItWorks}
          </Link>

          {/* Checklist quick picker dropdown */}
          <div className="relative" ref={checklistMenuRef}>
            <div
              className={`inline-flex items-center rounded-full transition-all duration-200 ${
                isChecklistActive
                  ? "text-accent bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] font-bold"
                  : "text-muted hover:text-ink hover:bg-black/[0.02]"
              }`}
            >
              <Link
                href="/checklist/"
                className="inline-flex min-h-[34px] items-center pl-3.5 pr-1.5 py-1 text-xs font-semibold"
              >
                {t.nav.checklist}
              </Link>
              <button
                type="button"
                onClick={() => setChecklistMenuOpen(!checklistMenuOpen)}
                aria-expanded={checklistMenuOpen}
                aria-label={t.checklist.selectServiceToView}
                className="inline-flex min-h-[34px] items-center justify-center pr-3 pl-1 text-xs text-muted hover:text-ink cursor-pointer"
              >
                <svg
                  className={`size-3 transition-transform duration-200 ${checklistMenuOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {checklistMenuOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-black/[0.06] bg-white/95 backdrop-blur-xl p-2 shadow-[0_12px_32px_rgba(0,0,0,0.12)] z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center justify-between px-3 py-1.5 border-b border-black/[0.04] pb-2 mb-1">
                  <p className="text-[11px] font-semibold text-muted tracking-tight">
                    {t.checklist.title}
                  </p>
                  <Link
                    href="/checklist/"
                    onClick={() => setChecklistMenuOpen(false)}
                    className="text-xs font-semibold text-accent hover:underline"
                  >
                    {t.nav.viewAll} →
                  </Link>
                </div>
                <div className="space-y-0.5">
                  {processes.map((p) => {
                    const loc = getLocalizedProcess(p, language);
                    return (
                      <Link
                        key={p.slug}
                        href={`/checklist/${p.slug}/`}
                        onClick={() => setChecklistMenuOpen(false)}
                        className="flex items-center justify-between px-3 py-2 text-xs font-medium text-ink hover:bg-black/[0.04] hover:text-accent rounded-xl transition-colors"
                      >
                        <span className="truncate pr-2">{loc.title}</span>
                        <span className="text-muted text-xs shrink-0">→</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: Language Switcher */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar: Apple-style segmented pill controller */}
      <div className="md:hidden border-t border-black/[0.05] bg-white/90 backdrop-blur-md px-3 py-1.5">
        <div className="grid grid-cols-4 gap-1 p-0.5 rounded-xl bg-black/[0.04]">
          <Link
            href="/identity/"
            className={`flex min-h-[38px] items-center justify-center px-1 rounded-lg text-center text-[11px] font-semibold transition-all duration-150 ${
              isServicesActive
                ? "text-ink bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] font-bold"
                : "text-muted hover:text-ink"
            }`}
          >
            {t.nav.services}
          </Link>
          <Link
            href="/admissions/"
            className={`flex min-h-[38px] items-center justify-center px-1 rounded-lg text-center text-[11px] font-semibold transition-all duration-150 ${
              isAdmissionsActive
                ? "text-accent bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] font-bold"
                : "text-muted hover:text-ink"
            }`}
          >
            {t.nav.admissions}
          </Link>
          <Link
            href="/how-it-works/"
            className={`flex min-h-[38px] items-center justify-center px-1 rounded-lg text-center text-[11px] font-semibold transition-all duration-150 ${
              isHowItWorksActive
                ? "text-ink bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] font-bold"
                : "text-muted hover:text-ink"
            }`}
          >
            {t.nav.howItWorks}
          </Link>
          <Link
            href="/checklist/"
            className={`flex min-h-[38px] items-center justify-center px-1 rounded-lg text-center text-[11px] font-semibold transition-all duration-150 ${
              isChecklistActive
                ? "text-accent bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] font-bold"
                : "text-muted hover:text-ink"
            }`}
          >
            {t.nav.checklist}
          </Link>
        </div>
      </div>
    </header>
  );
}
