"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { getStr } from "@/lib/i18n/localize";
import { problemGuides } from "@/data/admissions";

export function ProblemGuidesView() {
  const { language } = useLanguage();
  const [openProblemId, setOpenProblemId] = useState<string | null>("prob-which-portal");

  const toggleProblem = (id: string) => {
    setOpenProblemId(openProblemId === id ? null : id);
  };

  return (
    <section id="common-problems" aria-label="Student Problem Guides" className="scroll-mt-24">
      <div className="mb-1">
        <span className="text-xs font-mono font-semibold text-accent tracking-wide">
          Troubleshooting
        </span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-ink tracking-tight">
        Something went wrong?
      </h2>
      <p className="mt-1.5 text-xs sm:text-sm text-muted max-w-2xl leading-relaxed">
        Real-world solutions for stuck applications, pending documents, name discrepancies, and portal issues.
      </p>

      {/* Quick Diagnostic Symptoms Selector */}
      <div className="mt-4 mb-4 flex flex-wrap gap-2">
        {problemGuides.map((item) => {
          const isSelected = openProblemId === item.id;
          const qText = getStr(item.question, language);
          const shortText = qText.length > 35 ? qText.slice(0, 35) + "..." : qText;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleProblem(item.id)}
              className={`inline-flex min-h-[36px] items-center rounded-lg border px-3 py-1 text-xs font-semibold transition-all cursor-pointer ${
                isSelected
                  ? "border-accent bg-accent text-white shadow-xs font-bold"
                  : "border-line bg-surface text-ink hover:border-accent hover:text-accent shadow-2xs"
              }`}
            >
              <span>• {shortText}</span>
            </button>
          );
        })}
      </div>

      <div className="space-y-3">
        {problemGuides.map((item) => {
          const isOpen = openProblemId === item.id;
          const questionText = getStr(item.question, language);
          const shortSummary = getStr(item.shortSummary, language);
          const situationText = getStr(item.situation, language);
          const explanationText = getStr(item.explanation, language);

          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all shadow-2xs bg-surface ${
                isOpen ? "border-accent ring-1 ring-accent/20" : "border-line hover:border-accent/40"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleProblem(item.id)}
                aria-expanded={isOpen}
                className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 cursor-pointer"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-ink leading-snug">
                    {questionText}
                  </h3>
                  <p className="text-xs text-muted mt-1 leading-relaxed">
                    {shortSummary}
                  </p>
                </div>

                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-paper border border-line text-xs font-bold text-muted group-hover:text-accent">
                  {isOpen ? "▲" : "▼"}
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-line/70 bg-paper/50 p-5 sm:p-6 rounded-b-2xl animate-in fade-in duration-150">
                  <div className="max-w-3xl space-y-4 text-xs">
                    {/* 1. SITUATION */}
                    <div className="rounded-xl border border-line bg-surface p-4">
                      <strong className="text-[11px] font-semibold tracking-wide text-muted block mb-1">
                        SITUATION
                      </strong>
                      <p className="text-ink leading-relaxed font-medium">{situationText}</p>
                    </div>

                    {/* 2. EXPLANATION */}
                    <div className="rounded-xl border border-line bg-surface p-4">
                      <strong className="text-[11px] font-semibold tracking-wide text-muted block mb-1">
                        EXPLANATION
                      </strong>
                      <p className="text-ink leading-relaxed">{explanationText}</p>
                    </div>

                    {/* 3. WHAT TO DO NEXT */}
                    <div className="rounded-xl border-2 border-accent/30 bg-accent-soft/30 p-4">
                      <strong className="text-xs font-semibold tracking-wide text-accent block mb-2">
                        WHAT TO DO NEXT
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
                    <div className="pt-2 border-t border-line/60 flex items-center justify-between text-xs">
                      <span className="text-muted">Need to verify current rules?</span>
                      <a
                        href="#portal-directory"
                        className="font-semibold text-accent hover:underline inline-flex items-center gap-1"
                      >
                        <span>Check official admission portals</span>
                        <span>↗</span>
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
