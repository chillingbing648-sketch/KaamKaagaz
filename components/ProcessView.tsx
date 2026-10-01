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
import { useChecklist } from "@/lib/checklist";

export function ProcessView({ process }: { process: Process }) {
  const { language, t } = useLanguage();
  const [selectedSituationId, setSelectedSituationId] = useState<string | null>(null);

  const loc = getLocalizedProcess(process, language);

  // Filter documents according to selected situation if one is picked
  const activeSituation = process.situations?.find((s) => s.id === selectedSituationId);
  const activeDocIds = activeSituation?.applicableDocIds;

  // Track readiness for top-level process summary
  const allDocIds = process.documents.map((d) => d.id);
  const { count: readyCount, total: totalDocs, percent: readyPercent } = useChecklist(process.slug, allDocIds);

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

        {/* 1. Header: What is this? Top hierarchy */}
        <header id="overview" className="scroll-mt-24">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-block rounded-md bg-paper px-2.5 py-1 text-xs font-semibold tracking-wide text-muted border border-line/60">
              {loc.category}
            </span>
            <span className="text-[11px] font-mono text-muted">
              AY 2026–27
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            {loc.title}
          </h1>

          <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed">
            {loc.description}
          </p>

          {/* Who it is for */}
          {loc.whoCanApplyText && (
            <div className="mt-4 rounded-xl border border-line/70 bg-surface p-3.5 text-xs sm:text-sm text-ink/90 flex items-start gap-2 shadow-2xs">
              <span className="font-mono text-accent font-semibold text-xs shrink-0">WHO IT&apos;S FOR:</span>
              <span className="font-medium">{loc.whoCanApplyText}</span>
            </div>
          )}

          {/* Process Snapshot: 5 key metrics */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            <div className="rounded-lg border border-line/60 bg-surface px-3 py-2 shadow-2xs">
              <span className="block text-[10px] font-mono font-semibold text-muted tracking-wide">Documents</span>
              <span className="text-lg font-bold text-ink">{process.documents.length}</span>
            </div>

            <div className="rounded-lg border border-line/60 bg-surface px-3 py-2 shadow-2xs">
              <span className="block text-[10px] font-mono font-semibold text-muted tracking-wide">Steps</span>
              <span className="text-lg font-bold text-ink">{process.steps.length}</span>
            </div>

            <div className="rounded-lg border border-line/60 bg-surface px-3 py-2 shadow-2xs">
              <span className="block text-[10px] font-mono font-semibold text-muted tracking-wide">Situations</span>
              <span className="text-lg font-bold text-ink">{process.situations?.length || 1}</span>
            </div>

            <div className="rounded-lg border border-line/60 bg-surface px-3 py-2 shadow-2xs">
              <span className="block text-[10px] font-mono font-semibold text-muted tracking-wide">Verified</span>
              <span className="text-xs font-semibold text-done truncate block mt-1">✓ {process.lastChecked}</span>
            </div>

            <div className="col-span-2 sm:col-span-1 rounded-lg border border-line/60 bg-surface px-3 py-2 shadow-2xs">
              <span className="block text-[10px] font-mono font-semibold text-muted tracking-wide">Readiness</span>
              <span className={`text-xs font-semibold truncate block mt-1 ${readyPercent === 100 ? "text-done" : "text-accent"}`}>
                ◎ {readyPercent}% ({readyCount}/{totalDocs})
              </span>
            </div>
          </div>

          {loc.scopeNote && (
            <div className="mt-4 rounded-xl border border-warning-line bg-warning-soft/60 p-4 text-xs sm:text-sm text-warning leading-relaxed shadow-2xs">
              <span className="font-bold">⚠️ {t.process.scopeNoteTitle}: </span>
              {loc.scopeNote}
            </div>
          )}
        </header>

        {/* 2. Which situation are you in? */}
        {process.situations && process.situations.length > 0 && (
          <section id="situations" aria-label="Applicant situation selector" className="scroll-mt-24">
            <SituationSelector
              situations={process.situations}
              selectedId={selectedSituationId}
              onSelect={setSelectedSituationId}
            />
          </section>
        )}

        {/* 3. What do you need? (Document List with integrated checklist) */}
        <section id="documents" aria-labelledby="docs-heading" className="scroll-mt-24">
          <div className="flex items-baseline justify-between mb-3.5">
            <h2 id="docs-heading" className="text-xl sm:text-2xl font-bold text-ink">
              {t.process.documentsRequired}
            </h2>
          </div>
          <DocumentList process={process} activeDocIds={activeDocIds} />
        </section>

        {/* 4. How do you prepare? (Eligibility criteria, application steps, fees & timelines) */}
        {loc.eligibilityList && loc.eligibilityList.length > 0 && (
          <section id="eligibility" aria-labelledby="eligibility-heading" className="scroll-mt-24 rounded-xl border border-line bg-surface p-5 sm:p-6 shadow-2xs">
            <h2 id="eligibility-heading" className="text-lg sm:text-xl font-bold text-ink mb-2">
              {t.process.eligibility}
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-muted">
              {loc.eligibilityList.map((item, idx) => (
                <li key={idx} className="leading-snug">{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* 5. Process Steps */}
        <section id="steps" aria-labelledby="steps-heading" className="scroll-mt-24">
          <div className="flex items-center gap-2 mb-4">
            <h2 id="steps-heading" className="text-xl sm:text-2xl font-bold text-ink">
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
