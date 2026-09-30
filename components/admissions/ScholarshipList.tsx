"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { getStr } from "@/lib/i18n/localize";
import { scholarshipSchemes, ScholarshipScheme } from "@/data/admissions";

export function ScholarshipList() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    { id: "ALL", label: "All Categories" },
    { id: "Open / EBC", label: "Open / EWS (EBC)" },
    { id: "SC", label: "Scheduled Caste (SC)" },
    { id: "OBC / VJNT / SBC", label: "OBC / VJNT / SBC" },
  ];

  const filtered =
    selectedCategory === "ALL"
      ? scholarshipSchemes
      : scholarshipSchemes.filter((s) => s.category === selectedCategory);

  return (
    <section id="scholarships" aria-label="Scholarships and Financial Support" className="scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-white text-xs font-black shadow-2xs">
              🎓
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              FINANCIAL SUPPORT & FREESHIPS
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-ink tracking-tight">
            Maharashtra Scholarships (MahaDBT)
          </h2>
          <p className="text-xs sm:text-sm text-muted mt-0.5">
            Documented criteria from official government departments. We do not decide your eligibility.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center px-3 py-1.5 rounded-lg bg-paper border border-line text-xs font-mono text-accent">
          <span>🌐 mahadbt.maharashtra.gov.in</span>
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setSelectedCategory(c.id)}
            className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === c.id
                ? "bg-accent text-white font-bold shadow-2xs"
                : "bg-surface border border-line text-ink hover:border-accent"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((scheme) => {
          const schemeName = getStr(scheme.name, language);
          const benefits = getStr(scheme.benefits, language);

          return (
            <div
              key={scheme.id}
              className="rounded-2xl border border-line bg-surface p-5 sm:p-6 shadow-2xs hover:border-accent/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="rounded-md bg-paper px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted border border-line">
                    {scheme.category}
                  </span>
                  <span className="text-[10px] font-semibold text-muted bg-paper px-2 py-0.5 rounded border border-line/60">
                    AY 2026–27
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-ink leading-tight mb-2">
                  {schemeName}
                </h3>
                <p className="text-xs text-muted mb-4 pb-3 border-b border-line/60 leading-snug">
                  {scheme.department}
                </p>

                <div className="space-y-3 text-xs mb-4">
                  <div>
                    <strong className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-0.5">
                      💰 Income Criteria:
                    </strong>
                    <p className="text-ink font-semibold">{scheme.eligibilityIncome}</p>
                  </div>

                  <div>
                    <strong className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-0.5">
                      ✨ Benefit Structure:
                    </strong>
                    <p className="text-ink leading-relaxed">{benefits}</p>
                  </div>

                  <div>
                    <strong className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                      📋 Required Documents:
                    </strong>
                    <ul className="space-y-1 text-ink/80">
                      {scheme.documentsRequired.map((doc, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-done font-bold">•</span>
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-line/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-[11px] text-muted">Verified: {scheme.lastChecked}</span>
                <a
                  href={scheme.officialPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-xl bg-accent px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-accent-hover transition-colors shrink-0"
                >
                  <span>Apply on MahaDBT</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Aadhaar-Bank Seeding Warning */}
      <div className="mt-6 rounded-xl border border-warning-line bg-warning-soft/30 p-4 text-xs leading-relaxed text-ink/90 flex items-start gap-3">
        <span className="text-warning text-lg shrink-0">⚠️</span>
        <div>
          <strong className="text-warning font-bold block mb-0.5">
            Crucial for MahaDBT Success:
          </strong>
          <p>
            Your bank account must be mapped with Aadhaar on the NPCI gateway (Aadhaar Seeding). Normal account number linking is not enough; confirm with your bank branch that NPCI DBT mapping is active.
          </p>
        </div>
      </div>
    </section>
  );
}
