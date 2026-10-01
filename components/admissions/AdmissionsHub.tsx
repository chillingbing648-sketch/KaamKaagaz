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

          <div className="inline-flex items-center gap-2 rounded-md bg-accent-soft px-3 py-1 text-[11px] font-mono font-semibold text-accent tracking-wide mb-3 border border-accent/15">
            <span>Student Admissions · AY 2026–27</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
            Student Admissions & Wayfinding
          </h1>

          <p className="mt-2 text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            Find the right admission route, understand what you need, prepare valid documents, and reach the correct official portal.
          </p>

          {/* Admission Navigator Guided Stepper */}
          <div className="mt-6 rounded-xl border border-line bg-paper/60 p-3 sm:p-4 shadow-2xs">
            <div className="flex items-center justify-between mb-2.5">
              <span className="font-mono text-[11px] font-semibold text-accent tracking-wide uppercase">
                Admission Navigator · 5 Step Flow
              </span>
              <span className="text-[11px] text-muted">Guided exploration</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              <a href="#finder" className="rounded-lg bg-surface border border-line p-2 hover:border-accent transition-colors">
                <span className="font-mono text-[10px] text-muted block">01 PATHWAY</span>
                <span className="font-bold text-ink text-xs block truncate">Choose course</span>
              </a>
              <a href="#admission-roadmaps" className="rounded-lg bg-surface border border-line p-2 hover:border-accent transition-colors">
                <span className="font-mono text-[10px] text-muted block">02 ROUTE</span>
                <span className="font-bold text-ink text-xs block truncate">See roadmap</span>
              </a>
              <a href="#portal-directory" className="rounded-lg bg-surface border border-line p-2 hover:border-accent transition-colors">
                <span className="font-mono text-[10px] text-muted block">03 PORTAL</span>
                <span className="font-bold text-ink text-xs block truncate">Official portal</span>
              </a>
              <a href="#documents" className="rounded-lg bg-surface border border-line p-2 hover:border-accent transition-colors">
                <span className="font-mono text-[10px] text-muted block">04 KAAGAZ</span>
                <span className="font-bold text-ink text-xs block truncate">Check documents</span>
              </a>
              <a href="#checklist" className="col-span-2 sm:col-span-1 rounded-lg bg-accent-soft border border-accent/30 p-2 hover:bg-accent hover:text-white transition-colors group">
                <span className="font-mono text-[10px] text-accent group-hover:text-white/80 block">05 READINESS</span>
                <span className="font-bold text-accent group-hover:text-white text-xs block truncate">Track checklist</span>
              </a>
            </div>
          </div>

          {/* Quick Jump Anchor Bar */}
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <a
              href="#finder"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 font-bold text-ink hover:border-accent hover:text-accent shadow-2xs transition-colors"
            >
              <span>Admission Finder</span>
            </a>
            <a
              href="#portal-directory"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 font-bold text-ink hover:border-accent hover:text-accent shadow-2xs transition-colors"
            >
              <span>Portal Directory</span>
            </a>
            <a
              href="#admission-roadmaps"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 font-bold text-ink hover:border-accent hover:text-accent shadow-2xs transition-colors"
            >
              <span>Roadmaps</span>
            </a>
            <a
              href="#documents"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 font-bold text-ink hover:border-accent hover:text-accent shadow-2xs transition-colors"
            >
              <span>Document Helper</span>
            </a>
            <a
              href="#scholarships"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 font-bold text-ink hover:border-accent hover:text-accent shadow-2xs transition-colors"
            >
              <span>Scholarships</span>
            </a>
            <a
              href="#common-problems"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 font-bold text-ink hover:border-accent hover:text-accent shadow-2xs transition-colors"
            >
              <span>Common Problems</span>
            </a>
            <a
              href="#admission-terms"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 font-bold text-ink hover:border-accent hover:text-accent shadow-2xs transition-colors"
            >
              <span>Terms</span>
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
