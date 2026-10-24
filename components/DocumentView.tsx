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
            { label: t.nav.home, href: "/" },
            {
              label:
                process.category === "identity"
                  ? t.nav.identity
                  : process.category === "education"
                  ? t.nav.education
                  : t.nav.certificates,
              href:
                process.category === "identity"
                  ? "/identity/"
                  : process.category === "education"
                  ? "/education/"
                  : "/certificates/",
            },
            { label: locProcess.title, href: `/process/${process.slug}/` },

            { label: locDoc.name, isCurrent: true },
          ]}
        />

        {/* Document Header */}
        <header className="space-y-3">
          <span className="inline-block rounded-full bg-black/[0.04] px-3 py-1 text-xs font-semibold tracking-wide text-muted border border-black/[0.04]">
            {locProcess.title} · {t.process.documentsRequired}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink">
            {locDoc.name}
          </h1>
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            {locDoc.shortDescription}
          </p>
        </header>

        {/* Readiness Checklist Action Bar */}
        <div className="p-5 sm:p-6 rounded-2xl border border-black/[0.06] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
            {t.checklist.title}
          </p>
          <MarkDone
            slug={process.slug}
            docId={document.id}
            allIds={process.documents.map((d) => d.id)}
          />
        </div>

        {/* 1. What is it? & 2. Why do I need it? (Visual rhythm, structured explanation) */}
        <div className="space-y-4 pt-1">
          <section aria-labelledby="what-heading" className="rounded-2xl border border-black/[0.06] bg-white p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
            <h2 id="what-heading" className="text-lg sm:text-xl font-bold tracking-tight text-ink">
              {t.document.whatIsIt}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-ink/90 leading-relaxed font-medium">
              {locDoc.explanation}
            </p>
          </section>

          {locDoc.purpose && (
            <section aria-labelledby="why-heading" className="rounded-2xl border border-black/[0.06] bg-white p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
              <h2 id="why-heading" className="text-lg sm:text-xl font-bold tracking-tight text-ink">
                {t.document.whyNeeded}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed">
                {locDoc.purpose}
              </p>
              <p className="mt-3 text-[11px] text-muted flex items-start gap-1 font-medium">
                <span className="text-muted">◌</span>
                <span>{t.document.whyNeededDisclaimer}</span>
              </p>
            </section>
          )}
        </div>

        {/* 3. What can you use? (Accepted Examples list) */}
        <section aria-labelledby="examples-heading" className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex size-7 items-center justify-center rounded-full bg-accent-soft text-accent text-sm font-semibold">
              ✓
            </span>
            <h2 id="examples-heading" className="text-base sm:text-lg font-bold text-ink tracking-tight">
              {t.document.commonExamples}
            </h2>
          </div>
          <p className="text-xs text-muted mb-4">
            {t.document.examplesNotice}
          </p>
          <ul className="list-disc space-y-2.5 pl-5 text-sm sm:text-base text-ink">
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
          <section aria-labelledby="notes-heading" className="rounded-2xl border border-amber-200/60 bg-amber-50/70 p-4 text-xs sm:text-sm text-amber-900 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            <h2 id="notes-heading" className="font-bold text-amber-950 mb-1 flex items-center gap-1.5">
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
