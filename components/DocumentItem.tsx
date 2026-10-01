"use client";

import Link from "next/link";
import { DocumentRequirement } from "@/data/processes";
import { useLanguage } from "@/lib/i18n/context";
import { getLocalizedDocument } from "@/lib/i18n/localize";

export function DocumentItem({
  slug,
  doc,
  checked,
  onToggle,
  isHighlighted = false,
}: {
  slug: string;
  doc: DocumentRequirement;
  checked: boolean;
  onToggle: (id: string) => void;
  isHighlighted?: boolean;
}) {
  const { language, t } = useLanguage();
  const localized = getLocalizedDocument(doc, language);
  const inputId = `doc-${slug}-${doc.id}`;

  return (
    <li
      className={`group flex items-start gap-3.5 rounded-xl border p-4 sm:p-4.5 transition-all duration-150 ${
        checked
          ? "border-done/50 bg-done-soft text-ink"
          : isHighlighted
          ? "border-accent bg-accent-soft/40 shadow-xs"
          : "border-line bg-surface hover:border-line/90"
      }`}
    >
      {/* Checkbox touch target min 44px */}
      <div className="pt-0.5 flex min-h-[44px] items-start">
        <label
          htmlFor={inputId}
          className="flex size-7 items-center justify-center cursor-pointer rounded-md hover:bg-paper"
        >
          <input
            id={inputId}
            type="checkbox"
            checked={checked}
            onChange={() => onToggle(doc.id)}
            aria-label={`${t.document.markReady}: ${localized.name}`}
            className="size-5 cursor-pointer rounded accent-done transition-transform active:scale-95"
          />
        </label>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <label
            htmlFor={inputId}
            className={`cursor-pointer text-base sm:text-lg font-bold leading-tight ${
              checked ? "text-done line-through decoration-done/60" : "text-ink group-hover:text-accent"
            }`}
          >
            {localized.name}
          </label>
          {checked && (
            <span className="inline-flex items-center gap-1 rounded-full bg-done/15 px-2.5 py-0.5 text-xs font-bold text-done">
              ✓ Ready
            </span>
          )}
        </div>

        <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">
          {localized.shortDescription}
        </p>

        {/* What counts preview */}
        {localized.examples && localized.examples.length > 0 && (
          <div className="mt-2 text-xs text-ink/80 flex items-baseline gap-1.5">
            <span className="font-semibold text-muted text-[11px] uppercase tracking-wide shrink-0">Counts:</span>
            <span className="line-clamp-1 text-ink/75 font-medium">{localized.examples.slice(0, 3).join(", ")}</span>
          </div>
        )}

        {/* Format & Validity metadata chips */}
        {localized.formatAndPrep && (
          <div className="mt-2.5 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-1 rounded-md bg-paper px-2 py-0.5 font-medium text-muted border border-line/60">
              <span className="text-muted font-mono text-[10px]">FORMAT:</span> {localized.formatAndPrep.submission.split(",")[0].slice(0, 35)}
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-paper px-2 py-0.5 font-medium text-muted border border-line/60">
              <span className="text-muted font-mono text-[10px]">SIGN:</span> {localized.formatAndPrep.selfAttestation.slice(0, 30)}
            </span>
            {localized.formatAndPrep.validityOrRecentness && (
              <span className="inline-flex items-center gap-1 rounded-md bg-accent-soft px-2 py-0.5 font-medium text-accent border border-accent/20">
                <span className="text-accent font-mono text-[10px]">VALIDITY:</span> {localized.formatAndPrep.validityOrRecentness.slice(0, 32)}
              </span>
            )}
          </div>
        )}

        <div className="mt-3 flex items-center justify-between gap-3 pt-2 border-t border-line/50">
          <Link
            href={`/process/${slug}/document/${doc.id}`}
            className="inline-flex min-h-[38px] items-center gap-1 text-xs sm:text-sm font-semibold text-accent hover:text-accent-hover hover:underline underline-offset-4 transition-colors"
          >
            <span>{t.process.whatDoesThisMean}</span>
            <span aria-hidden="true">→</span>
          </Link>

          <button
            type="button"
            onClick={() => onToggle(doc.id)}
            className={`inline-flex min-h-[36px] items-center gap-1 rounded-lg px-3 py-1 text-xs font-semibold transition-all cursor-pointer ${
              checked
                ? "bg-done text-white shadow-2xs hover:bg-done/90"
                : "border border-line bg-surface text-ink hover:border-accent hover:text-accent shadow-2xs"
            }`}
          >
            {checked ? "✓ Ready" : `+ ${t.document.markReady}`}
          </button>
        </div>
      </div>
    </li>
  );
}
