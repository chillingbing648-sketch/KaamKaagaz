"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { getStr } from "@/lib/i18n/localize";
import { admissionRoadmaps, AdmissionRoadmap } from "@/data/admissions";

export function AdmissionRoadmapView() {
  const { language } = useLanguage();
  const [selectedRoadmapId, setSelectedRoadmapId] = useState<string>("roadmap-fyjc");

  const currentRoadmap =
    admissionRoadmaps.find((r) => r.id === selectedRoadmapId) || admissionRoadmaps[0];

  return (
    <section id="admission-roadmaps" aria-label="Visual Admission Roadmaps" className="scroll-mt-24">
      <div className="flex items-center gap-2 mb-2">
        <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-white text-xs font-black shadow-2xs">
          🗺️
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-accent">
          ADMISSION ROADMAPS
        </span>
      </div>

      <h2 className="text-xl sm:text-2xl font-black text-ink tracking-tight">
        Visual Journey: Step-by-Step
      </h2>
      <p className="mt-1 text-xs sm:text-sm text-muted max-w-2xl leading-relaxed">
        Understand exactly what happens at every stage — from registration and verification to allotment and final college confirmation.
      </p>

      {/* Roadmap selector tabs */}
      <div className="mt-5 flex flex-wrap gap-2" role="tablist" aria-label="Select admission roadmap">
        {admissionRoadmaps.map((r) => {
          const isSelected = r.id === selectedRoadmapId;
          const locTitle = getStr(r.title, language);
          return (
            <button
              key={r.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setSelectedRoadmapId(r.id)}
              className={`min-h-[44px] rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isSelected
                  ? "bg-accent text-white font-bold shadow-xs border border-accent"
                  : "bg-surface border border-line text-ink hover:border-accent hover:text-accent shadow-2xs"
              }`}
            >
              {locTitle}
            </button>
          );
        })}
      </div>

      {/* Selected Roadmap Overview Card */}
      <div className="mt-6 rounded-2xl border-2 border-line bg-surface p-5 sm:p-7 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="rounded-md bg-paper px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted border border-line">
                {currentRoadmap.level}
              </span>
              <span className="rounded-md bg-accent-soft px-2 py-0.5 text-[10px] font-bold text-accent">
                {currentRoadmap.academicYear}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-ink">
              {getStr(currentRoadmap.title, language)}
            </h3>
            <p className="text-xs sm:text-sm text-muted mt-0.5">
              {getStr(currentRoadmap.subtitle, language)}
            </p>
          </div>

          <span className="text-xs font-semibold text-done bg-done-soft px-3 py-1.5 rounded-lg border border-done/30">
            ✓ Source-Backed Sequence
          </span>
        </div>

        {/* Steps Visual Chain */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-accent/30 space-y-8 sm:space-y-10 my-4">
          {currentRoadmap.steps.map((step) => {
            const stepTitle = getStr(step.title, language);
            const stepDesc = getStr(step.description, language);
            const stepNeed = getStr(step.whatYouNeed, language);
            const stepAfter = step.afterSubmissionGuidance
              ? getStr(step.afterSubmissionGuidance, language)
              : null;

            return (
              <div key={step.stepNumber} className="relative group">
                {/* Step indicator node on timeline */}
                <div className="absolute -left-[37px] sm:-left-[45px] top-0 flex size-7 sm:size-8 items-center justify-center rounded-full bg-accent text-white text-xs sm:text-sm font-black ring-4 ring-paper shadow-2xs">
                  {step.stepNumber}
                </div>

                <div className="rounded-xl border border-line/90 bg-paper/50 p-4 sm:p-5 hover:bg-surface hover:border-accent/40 transition-all shadow-2xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h4 className="text-base sm:text-lg font-bold text-ink">
                      {stepTitle}
                    </h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted bg-surface px-2 py-0.5 rounded border border-line/60">
                      Step {step.stepNumber} of {currentRoadmap.steps.length}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-ink/80 leading-relaxed mb-3">
                    {stepDesc}
                  </p>

                  {/* What you need box */}
                  <div className="rounded-lg bg-surface border border-line p-3 text-xs mb-3">
                    <strong className="text-[11px] uppercase tracking-wider text-muted block mb-1">
                      🗂️ What You Need Ready:
                    </strong>
                    <p className="text-ink font-medium leading-relaxed">{stepNeed}</p>
                  </div>

                  {/* After submission guidance (Critical civic feature) */}
                  {stepAfter && (
                    <div className="rounded-lg bg-accent-soft/40 border border-accent/25 p-3 text-xs leading-relaxed text-ink/90">
                      <strong className="text-accent font-bold block mb-1">
                        ⚡ What Happens After You Submit:
                      </strong>
                      <p>{stepAfter}</p>
                    </div>
                  )}

                  {/* Optional direct portal jump for this step */}
                  {step.portalAction && (
                    <div className="mt-3 pt-2.5 border-t border-line/60 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-muted">
                        {step.portalAction.domain}
                      </span>
                      <a
                        href={step.portalAction.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[36px] items-center gap-1 text-xs font-bold text-accent hover:underline"
                      >
                        <span>{getStr(step.portalAction.label, language)}</span>
                        <span>↗</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom confirmation box */}
        <div className="mt-8 pt-4 border-t border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted">
          <p>
            Always save payment receipts and system-generated allotment forms as PDFs.
          </p>
          <a
            href="#checklist"
            className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-surface border border-line px-3.5 py-1.5 font-bold text-accent hover:bg-accent-soft transition-colors"
          >
            <span>Open your document checklist</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
