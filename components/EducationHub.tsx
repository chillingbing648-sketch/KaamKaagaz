"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { processes } from "@/data/processes";
import { getLocalizedProcess } from "@/lib/i18n/localize";
import { ProcessCard } from "@/components/ProcessCard";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContextRail } from "@/components/ContextRail";
import { StudentDocumentList } from "@/components/admissions/StudentDocumentList";

export function EducationHub() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  // Educational processes
  const eduSlugs = ["leaving-certificate"];
  const eduProcesses = processes.filter((p) => eduSlugs.includes(p.slug));

  const filteredProcesses = eduProcesses.filter((p) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    const loc = getLocalizedProcess(p, language);
    return (
      loc.title.toLowerCase().includes(q) ||
      loc.description.toLowerCase().includes(q) ||
      (p.keywords && p.keywords.some((k) => k.toLowerCase().includes(q)))
    );
  });

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
      {/* Main Working Area */}
      <div className="min-w-0 flex-1 lg:max-w-3xl space-y-10">
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={[
            { label: t.common.home, href: "/" },
            { label: t.categories.educationTitle, isCurrent: true },
          ]}
        />

        {/* Hero Header */}
        <header className="border-b border-black/[0.06] pb-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft/80 px-3 py-1 text-[11px] font-semibold text-accent tracking-wide mb-3 border border-accent/15">
            <span>🎓 Academic Records & Student Documentation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
            {t.categories.educationTitle}
          </h1>

          <p className="mt-2.5 text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            {t.categories.educationSubtitle}
          </p>

          {/* Quick Category Search Bar */}
          <div className="mt-5 relative">
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted">
              <svg aria-hidden="true" className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.categories.searchIn}
              className="h-12 w-full rounded-2xl border border-black/[0.08] bg-white pl-11 pr-10 text-sm text-ink placeholder:text-muted/60 focus:border-accent focus:ring-4 focus:ring-accent/15 focus:outline-none transition-all shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex size-6 items-center justify-center rounded-full text-muted hover:bg-black/[0.05] hover:text-ink transition-colors cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </header>

        {/* Section 1: Core Educational Process Cards */}
        <section aria-label="Education Processes" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
              {t.common.allServices} ({filteredProcesses.length})
            </h2>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-xs font-semibold text-accent hover:underline cursor-pointer"
              >
                {t.home.showAllServices}
              </button>
            )}
          </div>

          <div className="space-y-3.5">
            {filteredProcesses.map((process) => (
              <ProcessCard key={process.slug} process={process} />
            ))}
          </div>
        </section>

        {/* Bridge Banner to Student Admissions */}
        <section aria-label="Higher Education Admissions Wayfinding">
          <div className="rounded-2xl border border-accent/25 bg-gradient-to-br from-accent-soft/50 via-white to-white p-5 sm:p-6 shadow-[0_2px_12px_rgba(198,78,22,0.06)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="min-w-0 flex-1">
              <span className="inline-block rounded-md bg-accent text-white px-2 py-0.5 text-[10px] font-bold tracking-wide mb-1.5">
                WAYFINDING PORTAL
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-ink">
                Higher Education Admissions & Portals
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">
                Step-by-step admission roadmaps for 11th FYJC, MHT CET Cell CAP, Mumbai University Samarth, Distance CDOE, and PhD research.
              </p>
            </div>
            <Link
              href="/admissions/"
              className="apple-btn-primary !rounded-xl min-h-[42px] px-5 text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs shrink-0"
            >
              <span>Explore admissions</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        {/* Section 2: Student Document System & "Do I Need This?" Helper */}
        <section id="student-docs" aria-labelledby="student-docs-heading" className="space-y-4 pt-2">
          <div className="border-b border-black/[0.06] pb-3 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-accent block">
              STUDENT DOCUMENT SYSTEM
            </span>
            <h2 id="student-docs-heading" className="text-2xl font-extrabold text-ink tracking-tight mt-0.5">
              {t.categories.studentDocsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
              {t.categories.studentDocsSubtitle}
            </p>
          </div>

          <StudentDocumentList />
        </section>

        {/* Essential Rules for School and Academic Documents */}
        <section aria-labelledby="edu-rules-heading" className="apple-card p-6 sm:p-7 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <span className="flex size-7 items-center justify-center rounded-xl bg-accent text-white text-xs font-bold shadow-xs">
              📘
            </span>
            <h3 id="edu-rules-heading" className="text-lg font-bold text-ink tracking-tight">
              {t.categories.keyRulesTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl border border-black/[0.06] bg-black/[0.015] p-3.5 space-y-1">
              <strong className="text-ink font-bold block text-sm">
                1. Only One Original LC Exists
              </strong>
              <p className="text-muted leading-relaxed">
                Under the Maharashtra Secondary School Code, schools can issue only one original LC. Any subsequent copy is marked &apos;DUPLICATE&apos; and requires a police lost-report and notarized affidavit.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.06] bg-black/[0.015] p-3.5 space-y-1">
              <strong className="text-ink font-bold block text-sm">
                2. APAAR ID / ABC Account
              </strong>
              <p className="text-muted leading-relaxed">
                APAAR (Automated Permanent Academic Account Registry) is now mandatory across all colleges to digitally store academic credits and marksheets.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.06] bg-black/[0.015] p-3.5 space-y-1">
              <strong className="text-ink font-bold block text-sm">
                3. Caste Validity for CAP Seats
              </strong>
              <p className="text-muted leading-relaxed">
                Reserved category seats in professional engineering, pharmacy, medical, and MBA courses strictly require a Caste Validity Certificate or official receipt token during CAP verification.
              </p>
            </div>

            <div className="rounded-xl border border-black/[0.06] bg-black/[0.015] p-3.5 space-y-1">
              <strong className="text-ink font-bold block text-sm">
                4. Gap Certificate Affidavit
              </strong>
              <p className="text-muted leading-relaxed">
                If you took a gap year for competitive exam prep or medical reasons, a ₹100 notarized affidavit explaining the gap period is required during college document verification.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Contextual Side Rail */}
      <div className="mt-12 lg:mt-0 w-full lg:w-80 shrink-0 lg:sticky lg:top-24">
        <ContextRail mode="home" />
      </div>
    </div>
  );
}
