"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { getStr } from "@/lib/i18n/localize";
import { scholarshipSchemes, ScholarshipScheme } from "@/data/admissions";

export function ScholarshipList() {
  const { language, t } = useLanguage();
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
          <div className="flex items-center gap-2 mb-1.5">
            <span className="flex size-7 items-center justify-center rounded-xl bg-accent text-white text-xs font-bold shadow-xs">
              🎓
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              {t.admissionsHub.financialSupport}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight">
            {t.admissionsHub.mahaDbtTitle}
          </h2>
          <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
            {t.admissionsHub.mahaDbtSubtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs font-mono text-accent shadow-xs">
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
            className={`min-h-[38px] rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-150 cursor-pointer ${
              selectedCategory === c.id
                ? "bg-ink text-white font-bold shadow-xs"
                : "bg-white/90 border border-black/[0.08] text-ink hover:border-black/20 hover:text-black"
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
              className="apple-card p-5 sm:p-6 transition-all duration-200 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="rounded-full bg-black/[0.04] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                    {scheme.category}
                  </span>
                  <span className="text-[10px] font-semibold text-muted bg-black/[0.03] px-2.5 py-0.5 rounded-full border border-black/[0.04]">
                    AY 2026–27
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-ink leading-tight mb-1.5 tracking-tight">
                  {schemeName}
                </h3>
                <p className="text-xs text-muted mb-4 pb-3 border-b border-black/[0.04] leading-relaxed">
                  {scheme.department}
                </p>

                <div className="space-y-3.5 text-xs mb-4">
                  <div>
                    <strong className="text-[10px] font-bold uppercase tracking-wider text-muted block mb-0.5">
                      💰 {t.admissionsHub.incomeLimit}:
                    </strong>
                    <p className="text-ink font-semibold">{scheme.eligibilityIncome}</p>
                  </div>

                  <div>
                    <strong className="text-[10px] font-bold uppercase tracking-wider text-muted block mb-0.5">
                      ✨ {t.admissionsHub.keyBenefits}:
                    </strong>
                    <p className="text-ink leading-relaxed">{benefits}</p>
                  </div>

                  <div>
                    <strong className="text-[10px] font-bold uppercase tracking-wider text-muted block mb-1.5">
                      📋 {t.admissionsHub.mandatoryDocs}:
                    </strong>
                    <ul className="space-y-1.5 text-ink/85">
                      {scheme.documentsRequired.map((doc, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-done font-bold shrink-0">•</span>
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-black/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-[11px] text-done font-medium">✓ {t.common.verified}</span>
                <a
                  href={scheme.officialPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-btn-primary !rounded-xl min-h-[40px] px-4 py-2 text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>{t.admissionsHub.applyMahaDbt}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Aadhaar-Bank Seeding Warning */}
      <div className="mt-6 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4.5 text-xs leading-relaxed text-ink/90 flex items-start gap-3">
        <span className="text-amber-800 dark:text-amber-300 text-lg shrink-0 mt-0.5">⚠️</span>
        <div>
          <strong className="text-amber-800 dark:text-amber-300 font-bold block mb-1">
            Crucial for MahaDBT Success:
          </strong>
          <p className="text-ink/80 leading-relaxed">
            Your bank account must be mapped with Aadhaar on the NPCI gateway (Aadhaar Seeding). Normal account number linking is not enough; confirm with your bank branch that NPCI DBT mapping is active.
          </p>
        </div>
      </div>
    </section>
  );
}
