"use client";

import { useState, useEffect } from "react";
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
  const [activeSectionId, setActiveSectionId] = useState<string>("finder");

  useEffect(() => {
    const sectionIds = [
      "finder",
      "admission-roadmaps",
      "portal-directory",
      "documents",
      "scholarships",
      "common-problems",
      "admission-terms",
      "checklist",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
                {t.admissionsNavigator.title}
              </span>
              <span className="text-[11px] text-muted">{t.admissionsNavigator.subtitle}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              <a
                href="#finder"
                className={`rounded-lg p-2 transition-all border ${
                  activeSectionId === "finder"
                    ? "bg-accent-soft/70 border-accent shadow-2xs ring-1 ring-accent/30"
                    : "bg-surface border-line hover:border-accent"
                }`}
              >
                <span className={`font-mono text-[10px] block ${activeSectionId === "finder" ? "text-accent font-semibold" : "text-muted"}`}>
                  {t.admissionsNavigator.stepPathway}
                </span>
                <span className="font-bold text-ink text-xs block truncate">
                  {t.admissionsNavigator.stepPathwayDesc}
                </span>
              </a>

              <a
                href="#admission-roadmaps"
                className={`rounded-lg p-2 transition-all border ${
                  activeSectionId === "admission-roadmaps"
                    ? "bg-accent-soft/70 border-accent shadow-2xs ring-1 ring-accent/30"
                    : "bg-surface border-line hover:border-accent"
                }`}
              >
                <span className={`font-mono text-[10px] block ${activeSectionId === "admission-roadmaps" ? "text-accent font-semibold" : "text-muted"}`}>
                  {t.admissionsNavigator.stepRoute}
                </span>
                <span className="font-bold text-ink text-xs block truncate">
                  {t.admissionsNavigator.stepRouteDesc}
                </span>
              </a>

              <a
                href="#portal-directory"
                className={`rounded-lg p-2 transition-all border ${
                  activeSectionId === "portal-directory"
                    ? "bg-accent-soft/70 border-accent shadow-2xs ring-1 ring-accent/30"
                    : "bg-surface border-line hover:border-accent"
                }`}
              >
                <span className={`font-mono text-[10px] block ${activeSectionId === "portal-directory" ? "text-accent font-semibold" : "text-muted"}`}>
                  {t.admissionsNavigator.stepPortal}
                </span>
                <span className="font-bold text-ink text-xs block truncate">
                  {t.admissionsNavigator.stepPortalDesc}
                </span>
              </a>

              <a
                href="#documents"
                className={`rounded-lg p-2 transition-all border ${
                  activeSectionId === "documents"
                    ? "bg-accent-soft/70 border-accent shadow-2xs ring-1 ring-accent/30"
                    : "bg-surface border-line hover:border-accent"
                }`}
              >
                <span className={`font-mono text-[10px] block ${activeSectionId === "documents" ? "text-accent font-semibold" : "text-muted"}`}>
                  {t.admissionsNavigator.stepKaagaz}
                </span>
                <span className="font-bold text-ink text-xs block truncate">
                  {t.admissionsNavigator.stepKaagazDesc}
                </span>
              </a>

              <a
                href="#checklist"
                className={`col-span-2 sm:col-span-1 rounded-lg p-2 transition-all border ${
                  activeSectionId === "checklist"
                    ? "bg-accent text-white border-accent shadow-2xs"
                    : "bg-accent-soft border-accent/30 hover:bg-accent hover:text-white group"
                }`}
              >
                <span className={`font-mono text-[10px] block ${activeSectionId === "checklist" ? "text-white/80" : "text-accent group-hover:text-white/80"}`}>
                  {t.admissionsNavigator.stepReadiness}
                </span>
                <span className={`font-bold text-xs block truncate ${activeSectionId === "checklist" ? "text-white" : "text-accent group-hover:text-white"}`}>
                  {t.admissionsNavigator.stepReadinessDesc}
                </span>
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
              href="#admission-roadmaps"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 font-bold text-ink hover:border-accent hover:text-accent shadow-2xs transition-colors"
            >
              <span>Roadmaps</span>
            </a>
            <a
              href="#portal-directory"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 font-bold text-ink hover:border-accent hover:text-accent shadow-2xs transition-colors"
            >
              <span>Portal Directory</span>
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
        <div id="finder" className="scroll-mt-24 space-y-4">
          <AdmissionFinder />
          <div className="flex items-center justify-between text-xs text-muted border-t border-line/60 pt-3">
            <span className="font-mono text-[10px] text-muted uppercase tracking-wider">{t.admissionsNavigator.nextStep}</span>
            <a href="#admission-roadmaps" className="font-semibold text-accent hover:underline flex items-center gap-1">
              <span>{t.admissionsNavigator.stepRoute}: {t.admissionsNavigator.stepRouteDesc}</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        {/* 2. Admission Roadmaps */}
        <div className="space-y-4">
          <AdmissionRoadmapView />
          <div className="flex items-center justify-between text-xs text-muted border-t border-line/60 pt-3">
            <span className="font-mono text-[10px] text-muted uppercase tracking-wider">{t.admissionsNavigator.nextStep}</span>
            <a href="#portal-directory" className="font-semibold text-accent hover:underline flex items-center gap-1">
              <span>{t.admissionsNavigator.stepPortal}: {t.admissionsNavigator.stepPortalDesc}</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        {/* 3. Portal Directory */}
        <div className="space-y-4">
          <PortalDirectory />
          <div className="flex items-center justify-between text-xs text-muted border-t border-line/60 pt-3">
            <span className="font-mono text-[10px] text-muted uppercase tracking-wider">{t.admissionsNavigator.nextStep}</span>
            <a href="#documents" className="font-semibold text-accent hover:underline flex items-center gap-1">
              <span>{t.admissionsNavigator.stepKaagaz}: {t.admissionsNavigator.stepKaagazDesc}</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        {/* 4. Student Documents System */}
        <div className="space-y-4">
          <StudentDocumentList />
          <div className="flex items-center justify-between text-xs text-muted border-t border-line/60 pt-3">
            <span className="font-mono text-[10px] text-muted uppercase tracking-wider">{t.admissionsNavigator.nextStep}</span>
            <a href="#checklist" className="font-semibold text-accent hover:underline flex items-center gap-1">
              <span>{t.admissionsNavigator.stepReadiness}: {t.admissionsNavigator.stepReadinessDesc}</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

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
        <ContextRail mode="admissions" activeSectionId={activeSectionId} />
      </div>
    </div>
  );
}
