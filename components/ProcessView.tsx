"use client";

import { useState } from "react";
import Link from "next/link";
import { Process } from "@/data/processes";
import { useLanguage } from "@/lib/i18n/context";
import { getLocalizedProcess } from "@/lib/i18n/localize";
import { SituationSelector } from "./SituationSelector";
import { DocumentList } from "./DocumentList";
import { ProcessSteps } from "./ProcessSteps";
import { FeesAndTimelines } from "./FeesAndTimelines";
import { CommonMistakes } from "./CommonMistakes";
import { FAQSection } from "./FAQSection";
import { OfficialSource } from "./OfficialSource";

export function ProcessView({ process }: { process: Process }) {
  const { language, t } = useLanguage();
  const [selectedSituationId, setSelectedSituationId] = useState<string | null>(null);

  const loc = getLocalizedProcess(process, language);

  // Filter documents according to selected situation if one is picked
  const activeSituation = process.situations?.find((s) => s.id === selectedSituationId);
  const activeDocIds = activeSituation?.applicableDocIds;

  return (
    <article className="space-y-8">
      {/* Breadcrumb navigation */}
      <div>
        <Link
          href="/"
          className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-4"
        >
          <span aria-hidden="true">←</span>
          <span>{t.nav.allServices}</span>
        </Link>
      </div>

      {/* 1. Header: What am I doing? */}
      <div>
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted">
          {loc.category}
        </span>
        <h1 className="mt-1 text-3xl sm:text-4xl font-black tracking-tight text-ink">
          {loc.title}
        </h1>
        <p className="mt-2.5 text-base sm:text-lg text-muted leading-relaxed">
          {loc.description}
        </p>

        {loc.scopeNote && (
          <div className="mt-4 rounded-xl border border-note-line bg-note-bg/70 p-4 text-xs sm:text-sm text-note-ink leading-relaxed">
            <span className="font-bold">⚠️ {t.process.scopeNoteTitle}: </span>
            {loc.scopeNote}
          </div>
        )}
      </div>

      {/* 2. Who can apply & Eligibility */}
      {(loc.whoCanApplyText || (loc.eligibilityList && loc.eligibilityList.length > 0)) && (
        <section aria-labelledby="eligibility-heading" className="rounded-xl border border-line bg-surface p-4 sm:p-5 shadow-2xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">👤</span>
            <h2 id="eligibility-heading" className="text-base sm:text-lg font-bold text-ink">
              {t.process.whoCanApply}
            </h2>
          </div>
          {loc.whoCanApplyText && (
            <p className="text-sm font-semibold text-ink leading-relaxed">
              {loc.whoCanApplyText}
            </p>
          )}
          {loc.eligibilityList && loc.eligibilityList.length > 0 && (
            <div className="mt-3 border-t border-line/60 pt-3">
              <p className="text-xs font-bold uppercase tracking-wider text-muted mb-1.5">
                {t.process.eligibility}
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-muted">
                {loc.eligibilityList.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* 3. Situation Selector (e.g. Fresh vs Reissue vs Minor) */}
      {process.situations && process.situations.length > 0 && (
        <section aria-label="Applicant situation selector">
          <SituationSelector
            situations={process.situations}
            selectedId={selectedSituationId}
            onSelect={setSelectedSituationId}
          />
        </section>
      )}

      {/* 4. Core: What do I need? (Document List with integrated checklist) */}
      <section aria-labelledby="docs-heading">
        <div className="flex items-baseline justify-between mb-3">
          <h2 id="docs-heading" className="text-xl sm:text-2xl font-black text-ink">
            {t.process.documentsRequired}
          </h2>
        </div>
        <DocumentList process={process} activeDocIds={activeDocIds} />
      </section>

      {/* 5. Process Steps */}
      <section aria-labelledby="steps-heading">
        <h2 id="steps-heading" className="text-xl sm:text-2xl font-black text-ink mb-3">
          {t.process.stepsTitle}
        </h2>
        <ProcessSteps steps={process.steps} />
      </section>

      {/* 6. Official Fees & Timelines */}
      <section aria-labelledby="fees-heading">
        <FeesAndTimelines fees={process.fees} timelines={process.timelines} />
      </section>

      {/* 7. Common Mistakes */}
      {process.commonMistakes && process.commonMistakes.length > 0 && (
        <section aria-labelledby="mistakes-heading">
          <CommonMistakes mistakes={process.commonMistakes} />
        </section>
      )}

      {/* 8. FAQs */}
      {process.faqs && process.faqs.length > 0 && (
        <section aria-labelledby="faqs-heading">
          <FAQSection faqs={process.faqs} />
        </section>
      )}

      {/* 9. Official Source & Verification Links */}
      <section aria-labelledby="official-heading">
        <OfficialSource
          source={process.officialSource}
          lastChecked={process.lastChecked}
        />
      </section>
    </article>
  );
}
