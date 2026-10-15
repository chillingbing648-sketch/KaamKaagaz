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
          <div className="flex items-center gap-2 mb-1.5">
            <span className="flex size-7 items-center justify-center rounded-xl bg-accent text-white text-xs font-bold shadow-xs">
              📖
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              PLAIN-LANGUAGE VOCABULARY
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight">
            Admission Terms Demystified
          </h2>
          <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
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
            placeholder="Search term (e.g. CAP, APAAR)..."
            className="w-full min-h-[40px] rounded-full border border-black/[0.1] bg-white px-4 py-2 text-xs text-ink placeholder:text-muted/60 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none shadow-xs transition-shadow"
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
              className="apple-card p-5 sm:p-6 transition-all duration-200 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-extrabold text-accent tracking-tight">
                    {item.term}
                  </h3>
                  <span className="rounded-full bg-black/[0.04] px-2.5 py-0.5 text-[10px] font-semibold text-muted">
                    Official Term
                  </span>
                </div>

                <p className="text-xs font-semibold text-ink mb-3 pb-2.5 border-b border-black/[0.04]">
                  {item.officialTerm}
                </p>

                <div className="space-y-3 text-xs">
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
                <div className="mt-4 pt-3 border-t border-black/[0.04] text-[11px] text-muted bg-black/[0.02] p-3 rounded-xl">
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
