"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { getStr } from "@/lib/i18n/localize";
import { admissionTerms } from "@/data/admissions";

export function AdmissionTermsView() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = searchQuery.trim()
    ? admissionTerms.filter(
        (t) =>
          t.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.officialTerm.toLowerCase().includes(searchQuery.toLowerCase()) ||
          getStr(t.plainMeaning, language).toLowerCase().includes(searchQuery.toLowerCase())
      )
    : admissionTerms;

  return (
    <section id="admission-terms" aria-label="Admission Terms Glossary" className="scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-white text-xs font-black shadow-2xs">
              📖
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              PLAIN-LANGUAGE VOCABULARY
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-ink tracking-tight">
            Admission Terms Demystified
          </h2>
          <p className="text-xs sm:text-sm text-muted mt-0.5">
            Plain language first. Official bureaucratic terminology second.
          </p>
        </div>

        {/* Search input for terms */}
        <div className="w-full sm:w-64">
          <label htmlFor="search-terms" className="sr-only">
            Search admission terms
          </label>
          <input
            id="search-terms"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search term (e.g. CAP, APAAR, PRN)..."
            className="w-full min-h-[40px] rounded-xl border border-line bg-surface px-3 py-1.5 text-xs text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item) => {
          const meaning = getStr(item.plainMeaning, language);
          const impact = getStr(item.howItAffectsYou, language);

          return (
            <div
              key={item.id}
              className="rounded-2xl border border-line bg-surface p-5 shadow-2xs hover:border-accent/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-black text-accent tracking-tight">
                    {item.term}
                  </h3>
                  <span className="rounded bg-paper px-2 py-0.5 text-[10px] font-semibold text-muted border border-line">
                    Official Term
                  </span>
                </div>

                <p className="text-xs font-semibold text-ink mb-3 pb-2 border-b border-line/60">
                  {item.officialTerm}
                </p>

                <div className="space-y-2.5 text-xs">
                  <div>
                    <strong className="text-[10px] uppercase font-bold text-muted block mb-0.5">
                      Plain English Meaning:
                    </strong>
                    <p className="text-ink leading-relaxed">{meaning}</p>
                  </div>

                  <div>
                    <strong className="text-[10px] uppercase font-bold text-muted block mb-0.5">
                      How It Affects You:
                    </strong>
                    <p className="text-ink/80 leading-relaxed">{impact}</p>
                  </div>
                </div>
              </div>

              {item.exampleScenario && (
                <div className="mt-4 pt-2.5 border-t border-line/60 text-[11px] text-muted bg-paper/60 p-2.5 rounded-lg">
                  <strong className="text-ink font-semibold">Real Example: </strong>
                  {getStr(item.exampleScenario, language)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
