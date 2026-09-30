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
      <div className="flex items-center gap-2 mb-2">
        <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-white text-xs font-black shadow-2xs">
          💡
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-accent">
          REAL-WORLD TROUBLESHOOTING
        </span>
      </div>

      <h2 className="text-xl sm:text-2xl font-black text-ink tracking-tight">
        Common Admission Problems & Concrete Next Steps
      </h2>
      <p className="mt-1 text-xs sm:text-sm text-muted max-w-2xl leading-relaxed">
        Real-world solutions for stuck applications, pending caste validity, name discrepancies, payment timeouts, and seat upgrade decisions.
      </p>

      <div className="mt-6 space-y-3">
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
                    {/* The Situation Context */}
                    <div className="rounded-xl border border-line bg-surface p-4">
                      <strong className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                        🔍 The Situation:
                      </strong>
                      <p className="text-ink leading-relaxed">{situationText}</p>
                    </div>

                    {/* Clear Civic Explanation */}
                    <div className="rounded-xl border border-line bg-surface p-4">
                      <strong className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                        📖 Plain Language Explanation:
                      </strong>
                      <p className="text-ink leading-relaxed">{explanationText}</p>
                    </div>

                    {/* Concrete Next Actions */}
                    <div className="rounded-xl border-2 border-accent/30 bg-accent-soft/30 p-4">
                      <strong className="text-xs font-black uppercase tracking-wider text-accent block mb-2">
                        🎯 What you should do next:
                      </strong>
                      <ol className="space-y-2 list-decimal list-inside text-ink/90 font-medium leading-relaxed">
                        {item.actionSteps.map((step, idx) => (
                          <li key={idx}>
                            <span>{getStr(step, language)}</span>
                          </li>
                        ))}
                      </ol>
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
