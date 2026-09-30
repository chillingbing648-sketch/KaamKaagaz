"use client";

import Link from "next/link";
import { Process, DocumentRequirement } from "@/data/processes";
import { useLanguage } from "@/lib/i18n/context";
import { getLocalizedProcess, getLocalizedDocument } from "@/lib/i18n/localize";
import { FormatPreparationCard } from "./FormatPreparationCard";
import { MarkDone } from "./MarkDone";
import { OfficialSource } from "./OfficialSource";

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
    <article className="space-y-8">
      {/* Breadcrumb */}
      <div>
        <Link
          href={`/process/${process.slug}`}
          className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-4"
        >
          <span aria-hidden="true">←</span>
          <span>
            {t.document.backTo} {locProcess.title}
          </span>
        </Link>
      </div>

      {/* Header */}
      <div>
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-muted">
          {locProcess.title} · {t.process.documentsRequired}
        </span>
        <h1 className="mt-1 text-3xl sm:text-4xl font-black tracking-tight text-ink">
          {locDoc.name}
        </h1>
        <p className="mt-2 text-base sm:text-lg text-muted">
          {locDoc.shortDescription}
        </p>
      </div>

      {/* 1. What is it? */}
      <section aria-labelledby="what-heading" className="rounded-xl border border-line bg-surface p-4 sm:p-5 shadow-2xs">
        <h2 id="what-heading" className="text-xl font-bold text-ink">
          {t.document.whatIsIt}
        </h2>
        <p className="mt-2 text-base text-ink leading-relaxed">
          {locDoc.explanation}
        </p>
      </section>

      {/* 2. Why is it needed? */}
      {locDoc.purpose && (
        <section aria-labelledby="why-heading" className="rounded-xl border border-line bg-surface p-4 sm:p-5 shadow-2xs">
          <h2 id="why-heading" className="text-xl font-bold text-ink">
            {t.document.whyNeeded}
          </h2>
          <p className="mt-2 text-base text-ink leading-relaxed">
            {locDoc.purpose}
          </p>
          <p className="mt-2 text-xs text-muted">
            ℹ️ {t.document.whyNeededDisclaimer}
          </p>
        </section>
      )}

      {/* 3. What can you use? (Accepted Examples) */}
      <section aria-labelledby="examples-heading" className="rounded-xl border border-line bg-surface p-4 sm:p-5 shadow-2xs">
        <h2 id="examples-heading" className="text-xl font-bold text-ink">
          {t.document.commonExamples}
        </h2>
        <p className="mt-1 text-xs text-muted">
          {t.document.examplesNotice}
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-6 text-sm sm:text-base text-ink">
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

      {/* 5. Official Notes (if present from official source) */}
      {document.officialNotes && (
        <section aria-labelledby="notes-heading" className="rounded-xl border border-line bg-paper p-4 text-xs sm:text-sm text-muted">
          <h2 id="notes-heading" className="font-bold text-ink mb-1">
            📜 {t.document.importantOfficialNotes}
          </h2>
          <p className="leading-relaxed">{document.officialNotes}</p>
        </section>
      )}

      {/* 6. Mark Done checklist integration */}
      <div className="pt-2">
        <MarkDone
          slug={process.slug}
          docId={document.id}
          allIds={process.documents.map((d) => d.id)}
        />
      </div>

      {/* 7. Official Source & Verification */}
      <section aria-labelledby="official-source-heading">
        <OfficialSource
          source={process.officialSource}
          lastChecked={process.lastChecked}
        />
      </section>
    </article>
  );
}
