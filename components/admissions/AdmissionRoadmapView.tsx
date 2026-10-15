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
      <div className="flex items-center gap-2 mb-1.5">
        <span className="flex size-7 items-center justify-center rounded-xl bg-accent text-white text-xs font-bold shadow-xs">
          🗺️
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-accent">
          ADMISSION ROADMAPS
        </span>
      </div>

      <h2 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight">
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
              className={`min-h-[40px] rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                isSelected
                  ? "bg-ink text-white font-bold shadow-xs"
                  : "bg-white/90 border border-black/[0.08] text-ink hover:border-black/20 hover:text-black"
              }`}
            >
              {locTitle}
            </button>
          );
        })}
      </div>

      {/* Selected Roadmap Overview Card */}
      <div className="mt-6 apple-card p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/[0.06] pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="rounded-full bg-black/[0.04] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                {currentRoadmap.level}
              </span>
              <span className="rounded-full bg-accent-soft/80 px-2.5 py-0.5 text-[10px] font-semibold text-accent border border-accent/15">
                {currentRoadmap.academicYear}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight">
              {getStr(currentRoadmap.title, language)}
            </h3>
            <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
              {getStr(currentRoadmap.subtitle, language)}
            </p>
          </div>

          <span className="text-xs font-semibold text-done bg-done/10 px-3 py-1.5 rounded-full border border-done/20">
            ✓ Source-Backed Sequence
          </span>
        </div>

        {/* Steps Visual Chain */}
        <div className="relative pl-6 sm:pl-8 border-l border-accent/30 space-y-8 sm:space-y-10 my-4">
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
                <div className="absolute -left-[37px] sm:-left-[45px] top-0 flex size-7 sm:size-8 items-center justify-center rounded-full bg-accent text-white text-xs sm:text-sm font-bold ring-4 ring-white shadow-xs">
                  {step.stepNumber}
                </div>

                <div className="rounded-2xl border border-black/[0.06] bg-[#fbfbfd] p-4.5 sm:p-5 hover:bg-white hover:border-black/15 transition-all shadow-2xs">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-base sm:text-lg font-bold text-ink tracking-tight">
                      {stepTitle}
                    </h4>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted bg-black/[0.03] px-2.5 py-0.5 rounded-full border border-black/[0.04]">
                      Step {step.stepNumber} of {currentRoadmap.steps.length}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-ink/80 leading-relaxed mb-3.5">
                    {stepDesc}
                  </p>

                  {/* What you need box */}
                  <div className="rounded-xl bg-white border border-black/[0.06] p-3.5 text-xs mb-3 shadow-2xs">
                    <strong className="text-[10px] uppercase font-bold tracking-wider text-muted block mb-1">
                      🗂️ What You Need Ready:
                    </strong>
                    <p className="text-ink font-medium leading-relaxed">{stepNeed}</p>
                  </div>

                  {/* After submission guidance (Critical civic feature) */}
                  {stepAfter && (
                    <div className="rounded-xl bg-accent-soft/50 border border-accent/20 p-3.5 text-xs leading-relaxed text-ink/90">
                      <strong className="text-accent font-bold block mb-1">
                        ⚡ What Happens After You Submit:
                      </strong>
                      <p>{stepAfter}</p>
                    </div>
                  )}

                  {/* Optional direct portal jump for this step */}
                  {step.portalAction && (
                    <div className="mt-3.5 pt-3 border-t border-black/[0.04] flex items-center justify-between">
                      <span className="text-[11px] font-mono text-muted">
                        {step.portalAction.domain}
                      </span>
                      <a
                        href={step.portalAction.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[36px] items-center gap-1 text-xs font-semibold text-accent hover:underline"
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
        <div className="mt-8 pt-5 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted">
          <p>
            Always save payment receipts and system-generated allotment forms as PDFs.
          </p>
          <a
            href="#checklist"
            className="apple-btn-secondary !rounded-xl min-h-[40px] px-4 text-xs font-semibold inline-flex items-center gap-1.5"
          >
            <span>Open your document checklist</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
