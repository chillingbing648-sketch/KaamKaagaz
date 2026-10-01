"use client";

import Link from "next/link";
import { Process, DocumentRequirement } from "@/data/processes";
import { useLanguage } from "@/lib/i18n/context";
import { getLocalizedProcess, getLocalizedDocument } from "@/lib/i18n/localize";
import { FormatPreparationCard } from "./FormatPreparationCard";
import { MarkDone } from "./MarkDone";
import { OfficialSource } from "./OfficialSource";
import { Breadcrumb } from "./Breadcrumb";
import { ContextRail } from "./ContextRail";

export function DocumentView({
  process,
  document,
}: {
  process: Process;
  document: DocumentRequirement;
}) {
  const { language, t } = useLanguage();
  const locProcess = getLocalizedProcess(process, language);
  const locDoc = getLocalizedDocument(document, language);

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
      {/* Main Working Area */}
      <article className="min-w-0 flex-1 lg:max-w-3xl space-y-8">
        {/* Subtle Breadcrumb Wayfinding: Services / Passport / Documents / Address Proof */}
        <Breadcrumb
          items={[
            { label: t.nav.services, href: "/#services" },
            { label: locProcess.title, href: `/process/${process.slug}` },
            { label: t.process.documentsRequired, href: `/process/${process.slug}#documents` },
            { label: locDoc.name, isCurrent: true },
          ]}
        />

        {/* Document Header */}
        <header>
          <span className="inline-block rounded-md bg-paper px-2.5 py-1 text-xs font-semibold tracking-wide text-muted border border-line/60">
            {locProcess.title} · {t.process.documentsRequired}
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            {locDoc.name}
          </h1>
          <p className="mt-2.5 text-base sm:text-lg text-muted leading-relaxed">
            {locDoc.shortDescription}
          </p>
        </header>

        {/* Readiness Checklist Action Bar */}
        <div className="p-4 sm:p-5 rounded-xl border border-line bg-surface shadow-2xs">
          <p className="text-xs font-semibold text-muted tracking-wide mb-2.5">
            Checklist Status
          </p>
          <MarkDone
            slug={process.slug}
            docId={document.id}
            allIds={process.documents.map((d) => d.id)}
          />
        </div>

        {/* 1. What is it? & 2. Why do I need it? (Visual rhythm, structured explanation) */}
        <div className="space-y-6 pt-2">
          <section aria-labelledby="what-heading" className="border-l-3 border-accent pl-4 sm:pl-5">
            <h2 id="what-heading" className="text-lg sm:text-xl font-bold text-ink">
              {t.document.whatIsIt}
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-ink/90 leading-relaxed font-medium">
              {locDoc.explanation}
            </p>
          </section>

          {locDoc.purpose && (
            <section aria-labelledby="why-heading" className="border-l-3 border-line pl-4 sm:pl-5">
              <h2 id="why-heading" className="text-lg sm:text-xl font-bold text-ink">
                {t.document.whyNeeded}
              </h2>
              <p className="mt-1.5 text-sm sm:text-base text-muted leading-relaxed">
                {locDoc.purpose}
              </p>
              <p className="mt-2 text-[11px] text-muted flex items-start gap-1">
                <span className="font-mono text-muted">◌</span>
                <span>{t.document.whyNeededDisclaimer}</span>
              </p>
            </section>
          )}
        </div>

        {/* 3. What can you use? (Accepted Examples list) */}
        <section aria-labelledby="examples-heading" className="rounded-xl border border-line bg-surface p-5 sm:p-6 shadow-2xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex size-7 items-center justify-center rounded-lg bg-accent-soft text-accent text-sm font-semibold">
              ✓
            </span>
            <h2 id="examples-heading" className="text-base sm:text-lg font-bold text-ink">
              {t.document.commonExamples}
            </h2>
          </div>
          <p className="text-xs text-muted mb-3">
            {t.document.examplesNotice}
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm sm:text-base text-ink">
            {locDoc.examples.map((item, idx) => (
              <li key={idx} className="leading-snug">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 4. Format & Preparation Card */}
        <section aria-label="Format and preparation details">
          <FormatPreparationCard prep={locDoc.formatAndPrep} />
        </section>

        {/* 5. Official Notes (if present from official source guidelines) */}
        {document.officialNotes && (
          <section aria-labelledby="notes-heading" className="rounded-xl border border-line bg-paper p-4 text-xs sm:text-sm text-muted">
            <h2 id="notes-heading" className="font-bold text-ink mb-1 flex items-center gap-1.5">
              <span className="trust-important">!</span>
              <span>{t.document.importantOfficialNotes}</span>
            </h2>
            <p className="leading-relaxed">{document.officialNotes}</p>
          </section>
        )}

        {/* 6. Official Source & Verification */}
        <section aria-labelledby="official-source-heading">
          <OfficialSource
            source={process.officialSource}
            lastChecked={process.lastChecked}
          />
        </section>
      </article>

      {/* Contextual Side Rail */}
      <div className="mt-12 lg:mt-0 w-full lg:w-80 shrink-0 lg:sticky lg:top-24">
        <ContextRail
          mode="document"
          process={process}
          document={document}
        />
      </div>
    </div>
  );
}
