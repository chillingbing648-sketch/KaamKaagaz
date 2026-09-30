"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { AdmissionFinder } from "./AdmissionFinder";
import { PortalDirectory } from "./PortalDirectory";
import { AdmissionRoadmapView } from "./AdmissionRoadmapView";
import { StudentDocumentList } from "./StudentDocumentList";
import { ScholarshipList } from "./ScholarshipList";
import { ProblemGuidesView } from "./ProblemGuidesView";
import { AdmissionTermsView } from "./AdmissionTermsView";
import { AdmissionChecklistView } from "./AdmissionChecklistView";
import { ContextRail } from "@/components/ContextRail";

export function AdmissionsHub() {
  const { language, t } = useLanguage();

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
      {/* MAIN WORKING AREA */}
      <div className="min-w-0 flex-1 space-y-12">
        {/* Hero Header */}
        <header className="border-b border-line/80 pb-6">
          <nav aria-label="Breadcrumb" className="mb-3 text-xs text-muted">
            <ol className="flex items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-accent font-medium">
                  KaamKaagaz
                </Link>
              </li>
              <li>/</li>
              <li className="text-ink font-bold">Student Admissions</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-bold text-accent mb-3 shadow-2xs">
            <span>🎓</span>
            <span>CENTRAL ADMISSION WAYFINDING ECOSYSTEM · AY 2026–27</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink tracking-tight">
            Student Admissions & Wayfinding
          </h1>

          <p className="mt-2 text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            Find the right admission route, understand what you need, prepare valid documents, and reach the correct official portal.
          </p>

          {/* Quick Jump Anchor Bar */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <a
              href="#finder"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 font-bold text-ink hover:border-accent hover:text-accent shadow-2xs transition-colors"
            >
              <span>🧭 Admission Finder</span>
            </a>
            <a
              href="#portal-directory"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 font-bold text-ink hover:border-accent hover:text-accent shadow-2xs transition-colors"
            >
              <span>🏛️ Portal Directory</span>
            </a>
            <a
              href="#admission-roadmaps"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 font-bold text-ink hover:border-accent hover:text-accent shadow-2xs transition-colors"
            >
              <span>🗺️ Roadmaps</span>
            </a>
            <a
              href="#documents"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 font-bold text-ink hover:border-accent hover:text-accent shadow-2xs transition-colors"
            >
              <span>📄 Document Helper</span>
            </a>
            <a
              href="#scholarships"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 font-bold text-ink hover:border-accent hover:text-accent shadow-2xs transition-colors"
            >
              <span>💰 Scholarships</span>
            </a>
            <a
              href="#common-problems"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 font-bold text-ink hover:border-accent hover:text-accent shadow-2xs transition-colors"
            >
              <span>💡 Common Problems</span>
            </a>
            <a
              href="#admission-terms"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 font-bold text-ink hover:border-accent hover:text-accent shadow-2xs transition-colors"
            >
              <span>📖 Terms</span>
            </a>
            <a
              href="#checklist"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg bg-accent text-white px-3 py-1.5 font-bold shadow-xs hover:bg-accent-hover transition-colors"
            >
              <span>✓ My Checklist</span>
            </a>
          </div>
        </header>

        {/* 1. Admission Finder */}
        <div id="finder" className="scroll-mt-24">
          <AdmissionFinder />
        </div>

        {/* 2. Portal Directory */}
        <PortalDirectory />

        {/* 3. Admission Roadmaps */}
        <AdmissionRoadmapView />

        {/* 4. Student Documents System */}
        <StudentDocumentList />

        {/* 5. Scholarships (MahaDBT) */}
        <ScholarshipList />

        {/* 6. Problem Guides */}
        <ProblemGuidesView />

        {/* 7. Admission Terms */}
        <AdmissionTermsView />

        {/* 8. My Admission Checklist */}
        <AdmissionChecklistView />
      </div>

      {/* DESKTOP CONTEXT RAIL */}
      <div className="mt-12 lg:mt-0 w-full lg:w-80 shrink-0 lg:sticky lg:top-24">
        <ContextRail mode="admissions" />
      </div>
    </div>
  );
}
