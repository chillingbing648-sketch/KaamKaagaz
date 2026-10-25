"use client";

import { useState, useEffect } from "react";
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
import { JourneyRoadmap, JourneyStage } from "./JourneyRoadmap";
import { ContextRail } from "./ContextRail";
import { useChecklist } from "@/lib/checklist";

function getCategoryInfo(process: Process, t: any) {
  const cat = process.category.toLowerCase();
  if (cat.includes("identity") || cat.includes("tax") || cat.includes("travel")) {
    return { label: t.nav.identity, href: "/identity/" };
  }
  if (cat.includes("education") || cat.includes("academic")) {
    return { label: t.nav.education, href: "/education/" };
  }
  return { label: t.nav.certificates, href: "/certificates/" };
}

export function ProcessView({ process }: { process: Process }) {
  const { language, t } = useLanguage();
  const [selectedSituationId, setSelectedSituationId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("overview");

  const loc = getLocalizedProcess(process, language);
  const categoryInfo = getCategoryInfo(process, t);

  // Filter documents according to selected situation if one is picked
  const activeSituation = process.situations?.find((s) => s.id === selectedSituationId);
  const activeDocIds = activeSituation?.applicableDocIds;

  // Track readiness for top-level process summary using targetDocIds (situation-aware)
  const allDocIds = process.documents.map((d) => d.id);
  const targetDocIds = activeDocIds && activeDocIds.length > 0 ? activeDocIds : allDocIds;
  const { count: readyCount, total: totalDocs, percent: readyPercent } = useChecklist(process.slug, targetDocIds);

  // Active section tracking for continuous unified process journey
  useEffect(() => {
    const sectionIds = [
      "overview",
      "situations",
      "documents",
      "eligibility",
      "steps",
      "fees-timelines",
      "common-mistakes",
      "faqs",
      "official-source",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-15% 0px -55% 0px",
        threshold: [0.1],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const currentJourneyStage: JourneyStage = (
    activeSection === "overview" ? "overview" :
    activeSection === "situations" ? "situation" :
    activeSection === "documents" ? "documents" :
    activeSection === "eligibility" ? "eligibility" :
    activeSection === "steps" ? "steps" :
    activeSection === "fees-timelines" || activeSection === "common-mistakes" ? "fees" :
    "apply"
  );

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
      {/* Main Working Area */}
      <article className="min-w-0 flex-1 lg:max-w-3xl space-y-10">
        {/* Breadcrumb navigation */}
        <Breadcrumb
          items={[
            { label: t.common.home, href: "/" },
            { label: categoryInfo.label, href: categoryInfo.href },
            { label: loc.title, isCurrent: true },
          ]}
        />

        {/* Process Journey Roadmap: answers 'Where am I in the journey?' */}
        <JourneyRoadmap
          currentStage={currentJourneyStage}
          hasSituations={Boolean(process.situations && process.situations.length > 0)}
        />

        {/* 1. Header: What is this? Top hierarchy */}
        <header id="overview" className="scroll-mt-24 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-block rounded-full bg-black/[0.04] px-3 py-1 text-xs font-semibold tracking-wide text-muted border border-black/[0.04]">
              {loc.category}
            </span>
            {(process.category.toLowerCase().includes("education") || process.category.toLowerCase().includes("academic")) && (
              <span className="text-[11px] font-mono font-medium text-muted bg-black/[0.03] px-2.5 py-0.5 rounded-full">
                AY 2026–27
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink">
            {loc.title}
          </h1>

          <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
            {loc.description}
          </p>

          {/* Who it is for */}
          {loc.whoCanApplyText && (
            <div className="rounded-2xl border border-black/[0.06] bg-white p-4 text-xs sm:text-sm text-ink flex items-start gap-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
              <span className="font-mono text-accent font-bold text-xs shrink-0 tracking-wide">{t.processSnapshot.whoItsFor}</span>
              <span className="font-medium text-muted-foreground">{loc.whoCanApplyText}</span>
            </div>
          )}

          {/* Process Snapshot: 5 key metrics in Apple widget style */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-1">
            <div className="rounded-2xl border border-black/[0.06] bg-white p-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">{t.processSnapshot.documents}</span>
              <span className="text-2xl font-bold text-ink mt-1 tracking-tight">{process.documents.length}</span>
            </div>

            <div className="rounded-2xl border border-black/[0.06] bg-white p-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">{t.processSnapshot.steps}</span>
              <span className="text-2xl font-bold text-ink mt-1 tracking-tight">{process.steps.length}</span>
            </div>

            <div className="rounded-2xl border border-black/[0.06] bg-white p-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">{t.processSnapshot.situations}</span>
              <span className="text-2xl font-bold text-ink mt-1 tracking-tight">{process.situations?.length || 1}</span>
            </div>

            <div className="rounded-2xl border border-black/[0.06] bg-white p-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">{t.trust.verified}</span>
              <span className="text-xs font-bold text-done truncate mt-2">✓ {t.common.verified}</span>
            </div>

            <div className="col-span-2 sm:col-span-1 rounded-2xl border border-black/[0.06] bg-white p-3.5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">{t.processSnapshot.readiness}</span>
              <span className={`text-xs font-bold truncate mt-2 ${readyPercent === 100 ? "text-done" : "text-accent"}`}>
                ◎ {readyPercent}% ({readyCount}/{totalDocs})
              </span>
            </div>
          </div>

          {loc.scopeNote && (
            <div className="rounded-2xl border border-amber-200/60 bg-amber-50/70 p-4 text-xs sm:text-sm text-amber-900 leading-relaxed shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
              <span className="font-bold">⚠️ {t.process.scopeNoteTitle}: </span>
              {loc.scopeNote}
            </div>
          )}
        </header>

        {/* 2. Which situation are you in? */}
        {process.situations && process.situations.length > 0 && (
          <section id="situations" aria-label="Applicant situation selector" className="scroll-mt-24 space-y-3">
            <SituationSelector
              situations={process.situations}
              selectedId={selectedSituationId}
              onSelect={setSelectedSituationId}
            />
            <div className="flex justify-end pt-1">
              <a href="#documents" className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline">
                <span>{t.process.checkRequiredDocs}</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </section>
        )}

        {/* 3. What do you need? (Document List with integrated checklist) */}
        <section id="documents" aria-labelledby="docs-heading" className="scroll-mt-24 space-y-3">
          <div className="flex items-baseline justify-between mb-3.5">
            <h2 id="docs-heading" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
              {t.process.documentsRequired}
            </h2>
          </div>
          <DocumentList process={process} activeDocIds={activeDocIds} />
          <div className="mt-4 pt-3 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <span className="text-muted font-medium">
              {readyPercent === 100 ? t.process.allDocsReady : `${totalDocs - readyCount} ${t.contextRail.docsRemaining}`}
            </span>
            <a href="#steps" className="inline-flex items-center gap-1.5 font-semibold text-accent hover:underline">
              <span>{t.process.continueNextStep} ({t.process.stepsTitle})</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        {/* 4. Eligibility criteria */}
        {loc.eligibilityList && loc.eligibilityList.length > 0 && (
          <section id="eligibility" aria-labelledby="eligibility-heading" className="scroll-mt-24 rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
            <h2 id="eligibility-heading" className="text-xl font-bold tracking-tight text-ink mb-3">
              {t.process.eligibility}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-muted">
              {loc.eligibilityList.map((item, idx) => (
                <li key={idx} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* 5. Process Steps */}
        <section id="steps" aria-labelledby="steps-heading" className="scroll-mt-24">
          <div className="flex items-center gap-2 mb-5">
            <h2 id="steps-heading" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
              {t.process.stepsTitle}
            </h2>
          </div>
          <ProcessSteps steps={process.steps} />
          <div className="mt-3 flex justify-end">
            <a href="#fees-timelines" className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline">
              <span>{t.process.continueNextStep} ({t.process.feesTitle})</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        {/* 6. Official Fees & Timelines */}
        <section id="fees-timelines" aria-labelledby="fees-heading" className="scroll-mt-24">
          <FeesAndTimelines fees={process.fees} timelines={process.timelines} />
          <div className="mt-3 flex justify-end">
            <a href="#official-source" className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline">
              <span>{t.process.continueNextStep} ({t.officialSource.title})</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
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
          activeDocIds={activeDocIds}
          activeSectionId={activeSection}
        />
      </div>
    </div>
  );
}
