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
        <header className="border-b border-black/[0.06] pb-8">
          <nav aria-label="Breadcrumb" className="mb-3.5 text-xs text-muted">
            <ol className="flex items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-accent font-medium transition-colors">
                  KaamKaagaz
                </Link>
              </li>
              <li className="text-black/30">›</li>
              <li className="text-ink font-semibold">Student Admissions</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full bg-accent-soft/80 px-3 py-1 text-[11px] font-semibold text-accent tracking-wide mb-3 border border-accent/15">
            <span>Student Admissions · AY 2026–27</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
            Student Admissions & Wayfinding
          </h1>

          <p className="mt-2.5 text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            Find the right admission route, understand what you need, prepare valid documents, and reach the correct official portal.
          </p>

          {/* Admission Navigator Guided Stepper */}
          <div className="mt-6 apple-card p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold text-accent tracking-wider uppercase">
                {t.admissionsNavigator.title}
              </span>
              <span className="text-[11px] text-muted">{t.admissionsNavigator.subtitle}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              <a
                href="#finder"
                className={`rounded-xl p-2.5 transition-all duration-150 border ${
                  activeSectionId === "finder"
                    ? "bg-accent-soft border-accent/30 shadow-xs ring-1 ring-accent/30"
                    : "bg-black/[0.02] border-black/[0.04] hover:bg-black/[0.04] hover:border-black/10"
                }`}
              >
                <span className={`text-[10px] block font-semibold uppercase tracking-wider ${activeSectionId === "finder" ? "text-accent" : "text-muted"}`}>
                  {t.admissionsNavigator.stepPathway}
                </span>
                <span className="font-bold text-ink text-xs block truncate mt-0.5">
                  {t.admissionsNavigator.stepPathwayDesc}
                </span>
              </a>

              <a
                href="#admission-roadmaps"
                className={`rounded-xl p-2.5 transition-all duration-150 border ${
                  activeSectionId === "admission-roadmaps"
                    ? "bg-accent-soft border-accent/30 shadow-xs ring-1 ring-accent/30"
                    : "bg-black/[0.02] border-black/[0.04] hover:bg-black/[0.04] hover:border-black/10"
                }`}
              >
                <span className={`text-[10px] block font-semibold uppercase tracking-wider ${activeSectionId === "admission-roadmaps" ? "text-accent" : "text-muted"}`}>
                  {t.admissionsNavigator.stepRoute}
                </span>
                <span className="font-bold text-ink text-xs block truncate mt-0.5">
                  {t.admissionsNavigator.stepRouteDesc}
                </span>
              </a>

              <a
                href="#portal-directory"
                className={`rounded-xl p-2.5 transition-all duration-150 border ${
                  activeSectionId === "portal-directory"
                    ? "bg-accent-soft border-accent/30 shadow-xs ring-1 ring-accent/30"
                    : "bg-black/[0.02] border-black/[0.04] hover:bg-black/[0.04] hover:border-black/10"
                }`}
              >
                <span className={`text-[10px] block font-semibold uppercase tracking-wider ${activeSectionId === "portal-directory" ? "text-accent" : "text-muted"}`}>
                  {t.admissionsNavigator.stepPortal}
                </span>
                <span className="font-bold text-ink text-xs block truncate mt-0.5">
                  {t.admissionsNavigator.stepPortalDesc}
                </span>
              </a>

              <a
                href="#documents"
                className={`rounded-xl p-2.5 transition-all duration-150 border ${
                  activeSectionId === "documents"
                    ? "bg-accent-soft border-accent/30 shadow-xs ring-1 ring-accent/30"
                    : "bg-black/[0.02] border-black/[0.04] hover:bg-black/[0.04] hover:border-black/10"
                }`}
              >
                <span className={`text-[10px] block font-semibold uppercase tracking-wider ${activeSectionId === "documents" ? "text-accent" : "text-muted"}`}>
                  {t.admissionsNavigator.stepKaagaz}
                </span>
                <span className="font-bold text-ink text-xs block truncate mt-0.5">
                  {t.admissionsNavigator.stepKaagazDesc}
                </span>
              </a>

              <a
                href="#checklist"
                className={`col-span-2 sm:col-span-1 rounded-xl p-2.5 transition-all duration-150 border ${
                  activeSectionId === "checklist"
                    ? "bg-accent text-white border-accent shadow-xs"
                    : "bg-accent-soft/60 border-accent/20 hover:bg-accent hover:text-white group"
                }`}
              >
                <span className={`text-[10px] block font-semibold uppercase tracking-wider ${activeSectionId === "checklist" ? "text-white/80" : "text-accent group-hover:text-white/80"}`}>
                  {t.admissionsNavigator.stepReadiness}
                </span>
                <span className={`font-bold text-xs block truncate mt-0.5 ${activeSectionId === "checklist" ? "text-white" : "text-accent group-hover:text-white"}`}>
                  {t.admissionsNavigator.stepReadinessDesc}
                </span>
              </a>
            </div>
          </div>

          {/* Quick Jump Anchor Bar */}
          <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
            <a
              href="#finder"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3.5 py-1.5 font-semibold text-ink hover:border-accent hover:text-accent shadow-xs transition-colors shrink-0"
            >
              <span>Admission Finder</span>
            </a>
            <a
              href="#admission-roadmaps"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3.5 py-1.5 font-semibold text-ink hover:border-accent hover:text-accent shadow-xs transition-colors shrink-0"
            >
              <span>Roadmaps</span>
            </a>
            <a
              href="#portal-directory"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3.5 py-1.5 font-semibold text-ink hover:border-accent hover:text-accent shadow-xs transition-colors shrink-0"
            >
              <span>Portal Directory</span>
            </a>
            <a
              href="#documents"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3.5 py-1.5 font-semibold text-ink hover:border-accent hover:text-accent shadow-xs transition-colors shrink-0"
            >
              <span>Document Helper</span>
            </a>
            <a
              href="#scholarships"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3.5 py-1.5 font-semibold text-ink hover:border-accent hover:text-accent shadow-xs transition-colors shrink-0"
            >
              <span>Scholarships</span>
            </a>
            <a
              href="#common-problems"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3.5 py-1.5 font-semibold text-ink hover:border-accent hover:text-accent shadow-xs transition-colors shrink-0"
            >
              <span>Common Problems</span>
            </a>
            <a
              href="#admission-terms"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3.5 py-1.5 font-semibold text-ink hover:border-accent hover:text-accent shadow-xs transition-colors shrink-0"
            >
              <span>Terms</span>
            </a>
            <a
              href="#checklist"
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full bg-accent text-white px-4 py-1.5 font-semibold shadow-xs hover:bg-accent-hover transition-colors shrink-0 active:scale-[0.98]"
            >
              <span>✓ My Checklist</span>
            </a>
          </div>
        </header>

        {/* 1. Admission Finder */}
        <div id="finder" className="scroll-mt-24 space-y-4">
          <AdmissionFinder />
          <div className="flex items-center justify-between text-xs text-muted border-t border-black/[0.06] pt-3.5">
            <span className="text-[10px] font-semibold text-muted uppercase tracking-wider">{t.admissionsNavigator.nextStep}</span>
            <a href="#admission-roadmaps" className="font-semibold text-accent hover:underline flex items-center gap-1 group">
              <span>{t.admissionsNavigator.stepRoute}: {t.admissionsNavigator.stepRouteDesc}</span>
              <span aria-hidden="true" className="group-hover:translate-y-0.5 transition-transform">↓</span>
            </a>
          </div>
        </div>

        {/* 2. Admission Roadmaps */}
        <div className="space-y-4">
          <AdmissionRoadmapView />
          <div className="flex items-center justify-between text-xs text-muted border-t border-black/[0.06] pt-3.5">
            <span className="text-[10px] font-semibold text-muted uppercase tracking-wider">{t.admissionsNavigator.nextStep}</span>
            <a href="#portal-directory" className="font-semibold text-accent hover:underline flex items-center gap-1 group">
              <span>{t.admissionsNavigator.stepPortal}: {t.admissionsNavigator.stepPortalDesc}</span>
              <span aria-hidden="true" className="group-hover:translate-y-0.5 transition-transform">↓</span>
            </a>
          </div>
        </div>

        {/* 3. Portal Directory */}
        <div className="space-y-4">
          <PortalDirectory />
          <div className="flex items-center justify-between text-xs text-muted border-t border-black/[0.06] pt-3.5">
            <span className="text-[10px] font-semibold text-muted uppercase tracking-wider">{t.admissionsNavigator.nextStep}</span>
            <a href="#documents" className="font-semibold text-accent hover:underline flex items-center gap-1 group">
              <span>{t.admissionsNavigator.stepKaagaz}: {t.admissionsNavigator.stepKaagazDesc}</span>
              <span aria-hidden="true" className="group-hover:translate-y-0.5 transition-transform">↓</span>
            </a>
          </div>
        </div>

        {/* 4. Student Documents System */}
        <div className="space-y-4">
          <StudentDocumentList />
          <div className="flex items-center justify-between text-xs text-muted border-t border-black/[0.06] pt-3.5">
            <span className="text-[10px] font-semibold text-muted uppercase tracking-wider">{t.admissionsNavigator.nextStep}</span>
            <a href="#checklist" className="font-semibold text-accent hover:underline flex items-center gap-1 group">
              <span>{t.admissionsNavigator.stepReadiness}: {t.admissionsNavigator.stepReadinessDesc}</span>
              <span aria-hidden="true" className="group-hover:translate-y-0.5 transition-transform">↓</span>
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
