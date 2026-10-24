"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { getStr } from "@/lib/i18n/localize";
import { problemGuides } from "@/data/admissions";

export function ProblemGuidesView() {
  const { language, t } = useLanguage();
  const [openProblemId, setOpenProblemId] = useState<string | null>("prob-which-portal");

  const toggleProblem = (id: string) => {
    setOpenProblemId(openProblemId === id ? null : id);
  };

  return (
    <section id="common-problems" aria-label="Student Problem Guides" className="scroll-mt-24">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="flex size-7 items-center justify-center rounded-xl bg-accent text-white text-xs font-bold shadow-xs">
          💡
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-accent">
          {t.admissionsHub.troubleshooting}
        </span>
      </div>

      <h2 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight">
        {t.admissionsHub.troubleshootingTitle}
      </h2>
      <p className="mt-1 text-xs sm:text-sm text-muted max-w-2xl leading-relaxed">
        {t.admissionsHub.troubleshootingSubtitle}
      </p>

      {/* Quick Diagnostic Symptoms Selector */}
      <div className="mt-4 mb-5 flex flex-wrap gap-2">
        {problemGuides.map((item) => {
          const isSelected = openProblemId === item.id;
          const qText = getStr(item.question, language);
          const shortText = qText.length > 35 ? qText.slice(0, 35) + "..." : qText;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleProblem(item.id)}
              className={`inline-flex min-h-[36px] items-center rounded-full px-3.5 py-1 text-xs font-semibold transition-all duration-150 cursor-pointer ${
                isSelected
                  ? "bg-ink text-white font-bold shadow-xs"
                  : "bg-white/90 border border-black/[0.08] text-ink hover:border-black/20 hover:text-black"
              }`}
            >
              <span>• {shortText}</span>
            </button>
          );
        })}
      </div>

      <div className="space-y-3.5">
        {problemGuides.map((item) => {
          const isOpen = openProblemId === item.id;
          const questionText = getStr(item.question, language);
          const shortSummary = getStr(item.shortSummary, language);
          const situationText = getStr(item.situation, language);
          const explanationText = getStr(item.explanation, language);

          return (
            <div
              key={item.id}
              className={`apple-card transition-all duration-200 ${
                isOpen ? "ring-1 ring-accent/30 shadow-md" : "hover:shadow-md"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleProblem(item.id)}
                aria-expanded={isOpen}
                className="w-full p-4.5 sm:p-5 text-left flex items-start justify-between gap-3 cursor-pointer group"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-ink leading-snug tracking-tight group-hover:text-accent transition-colors">
                    {questionText}
                  </h3>
                  <p className="text-xs text-muted mt-1 leading-relaxed">
                    {shortSummary}
                  </p>
                </div>

                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-black/[0.04] text-muted group-hover:bg-black/[0.08] group-hover:text-ink transition-colors mt-0.5">
                  <svg
                    className={`size-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-black/[0.06] bg-[#fbfbfd] p-5 sm:p-7 rounded-b-2xl animate-in fade-in duration-150">
                  <div className="max-w-3xl space-y-4 text-xs">
                    {/* 1. SITUATION */}
                    <div className="apple-card p-4 sm:p-5 shadow-2xs">
                      <strong className="text-[10px] font-bold uppercase tracking-wider text-muted block mb-1">
                        {t.admissionsHub.situation}
                      </strong>
                      <p className="text-ink leading-relaxed font-medium">{situationText}</p>
                    </div>

                    {/* 2. EXPLANATION */}
                    <div className="apple-card p-4 sm:p-5 shadow-2xs">
                      <strong className="text-[10px] font-bold uppercase tracking-wider text-muted block mb-1">
                        {t.admissionsHub.explanation}
                      </strong>
                      <p className="text-ink leading-relaxed">{explanationText}</p>
                    </div>

                    {/* 3. WHAT TO DO NEXT */}
                    <div className="rounded-2xl border border-accent/25 bg-accent-soft/40 p-4.5 sm:p-5 shadow-2xs">
                      <strong className="text-xs font-bold uppercase tracking-wider text-accent block mb-2.5">
                        {t.admissionsHub.whatToDo}
                      </strong>
                      <ol className="space-y-2 list-decimal list-inside text-ink/90 font-medium leading-relaxed">
                        {item.actionSteps.map((step, idx) => (
                          <li key={idx}>
                            <span>{getStr(step, language)}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* 4. OFFICIAL SOURCE LINK */}
                    <div className="pt-3 border-t border-black/[0.04] flex items-center justify-between text-xs">
                      <span className="text-muted">{t.admissionsHub.officialWarning}</span>
                      <a
                        href="#portal-directory"
                        className="font-semibold text-accent hover:underline inline-flex items-center gap-1 group"
                      >
                        <span>Check official admission portals</span>
                        <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
