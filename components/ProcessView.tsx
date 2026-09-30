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
import { Breadcrumb } from "./Breadcrumb";
import { JourneyRoadmap } from "./JourneyRoadmap";
import { ContextRail } from "./ContextRail";

export function ProcessView({ process }: { process: Process }) {
  const { language, t } = useLanguage();
  const [selectedSituationId, setSelectedSituationId] = useState<string | null>(null);

  const loc = getLocalizedProcess(process, language);

  // Filter documents according to selected situation if one is picked
  const activeSituation = process.situations?.find((s) => s.id === selectedSituationId);
  const activeDocIds = activeSituation?.applicableDocIds;

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
      {/* Main Working Area */}
      <article className="min-w-0 flex-1 lg:max-w-3xl space-y-10">
        {/* Breadcrumb navigation */}
        <Breadcrumb
          items={[
            { label: t.nav.services, href: "/#services" },
            { label: loc.title, isCurrent: true },
          ]}
        />

        {/* Process Journey Roadmap: answers 'Where am I in the journey?' */}
        <JourneyRoadmap currentStage={selectedSituationId ? "documents" : "situation"} />

        {/* 1. Header: What is this? */}
        <header id="overview" className="scroll-mt-24">
          <span className="inline-block rounded-md bg-paper px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-muted border border-line/60">
            {loc.category}
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight text-ink">
            {loc.title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed">
            {loc.description}
          </p>

          {loc.scopeNote && (
            <div className="mt-4 rounded-xl border border-warning-line bg-warning-soft/60 p-4 text-xs sm:text-sm text-warning leading-relaxed shadow-2xs">
              <span className="font-bold">⚠️ {t.process.scopeNoteTitle}: </span>
              {loc.scopeNote}
            </div>
          )}
        </header>

        {/* 2. Who can apply & Eligibility */}
        {(loc.whoCanApplyText || (loc.eligibilityList && loc.eligibilityList.length > 0)) && (
          <section id="eligibility" aria-labelledby="eligibility-heading" className="scroll-mt-24 rounded-xl border border-line bg-surface p-5 sm:p-6 shadow-2xs">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="flex size-7 items-center justify-center rounded-lg bg-accent-soft text-accent text-sm font-bold">
                👤
              </span>
              <h2 id="eligibility-heading" className="text-lg sm:text-xl font-bold text-ink">
                {t.process.whoCanApply}
              </h2>
            </div>
            {loc.whoCanApplyText && (
              <p className="text-sm font-semibold text-ink leading-relaxed">
                {loc.whoCanApplyText}
              </p>
            )}
            {loc.eligibilityList && loc.eligibilityList.length > 0 && (
              <div className="mt-3.5 border-t border-line/60 pt-3.5">
                <p className="text-xs font-bold uppercase tracking-wider text-muted mb-2">
                  {t.process.eligibility}
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-muted">
                  {loc.eligibilityList.map((item, idx) => (
                    <li key={idx} className="leading-snug">{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* 3. Situation Selector (e.g. Fresh vs Reissue vs Minor) */}
        {process.situations && process.situations.length > 0 && (
          <section id="situations" aria-label="Applicant situation selector" className="scroll-mt-24">
            <SituationSelector
              situations={process.situations}
              selectedId={selectedSituationId}
              onSelect={setSelectedSituationId}
            />
          </section>
        )}

        {/* 4. Core: What do I need? (Document List with integrated checklist) */}
        <section id="documents" aria-labelledby="docs-heading" className="scroll-mt-24">
          <div className="flex items-baseline justify-between mb-3.5">
            <h2 id="docs-heading" className="text-xl sm:text-2xl font-black text-ink">
              {t.process.documentsRequired}
            </h2>
          </div>
          <DocumentList process={process} activeDocIds={activeDocIds} />
        </section>

        {/* 5. Process Steps */}
        <section id="steps" aria-labelledby="steps-heading" className="scroll-mt-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="flex size-7 items-center justify-center rounded-lg bg-accent-soft text-accent text-sm font-bold">
              🔢
            </span>
            <h2 id="steps-heading" className="text-xl sm:text-2xl font-black text-ink">
              {t.process.stepsTitle}
            </h2>
          </div>
          <ProcessSteps steps={process.steps} />
        </section>

        {/* 6. Official Fees & Timelines */}
        <section id="fees-timelines" aria-labelledby="fees-heading" className="scroll-mt-24">
          <FeesAndTimelines fees={process.fees} timelines={process.timelines} />
        </section>

        {/* 7. Common Mistakes */}
        {process.commonMistakes && process.commonMistakes.length > 0 && (
          <section id="common-mistakes" aria-labelledby="mistakes-heading" className="scroll-mt-24">
            <CommonMistakes mistakes={process.commonMistakes} />
          </section>
        )}

        {/* 8. FAQs */}
        {process.faqs && process.faqs.length > 0 && (
          <section id="faqs" aria-labelledby="faqs-heading" className="scroll-mt-24">
            <FAQSection faqs={process.faqs} />
          </section>
        )}

        {/* 9. Official Source & Verification Links */}
        <section id="official-source" aria-labelledby="official-heading" className="scroll-mt-24">
          <OfficialSource
            source={process.officialSource}
            lastChecked={process.lastChecked}
          />
        </section>
      </article>

      {/* Contextual Side Rail */}
      <div className="mt-12 lg:mt-0 w-full lg:w-80 shrink-0 lg:sticky lg:top-24">
        <ContextRail
          mode="process"
          process={process}
          activeSituationId={selectedSituationId}
        />
      </div>
    </div>
  );
}
