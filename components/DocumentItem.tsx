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
      className={`group flex items-start gap-3.5 rounded-2xl border p-4 sm:p-5 transition-all duration-200 ${
        checked
          ? "border-done/25 bg-done-soft/40 shadow-none"
          : isHighlighted
          ? "border-accent/40 bg-accent-soft/30 shadow-[0_2px_8px_rgba(198,78,22,0.06)]"
          : "border-black/[0.06] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-black/[0.12] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
      }`}
    >
      {/* Apple Reminders circular checkbox with min 44px touch area */}
      <div className="pt-0.5 flex min-h-[44px] items-start shrink-0">
        <button
          type="button"
          onClick={() => onToggle(doc.id)}
          aria-label={`${t.document.markReady}: ${localized.name}`}
          className={`flex size-6 sm:size-6.5 items-center justify-center rounded-full border transition-all duration-200 cursor-pointer active:scale-90 ${
            checked
              ? "border-done bg-done text-white shadow-xs"
              : "border-black/[0.2] bg-white hover:border-accent"
          }`}
        >
          {checked && (
            <svg className="size-3.5 stroke-white" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7.5L5.5 10.5L11.5 3.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <button
            type="button"
            onClick={() => onToggle(doc.id)}
            className={`cursor-pointer text-left text-base sm:text-lg font-bold leading-tight tracking-tight transition-colors ${
              checked ? "text-done line-through decoration-done/40" : "text-ink group-hover:text-accent"
            }`}
          >
            {localized.name}
          </button>
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
            <span className="font-semibold text-muted text-[11px] uppercase tracking-wider shrink-0">Counts:</span>
            <span className="line-clamp-1 text-ink/70 font-medium">{localized.examples.slice(0, 3).join(", ")}</span>
          </div>
        )}

        {/* Format & Validity metadata chips */}
        {localized.formatAndPrep && (
          <div className="mt-3 flex flex-wrap gap-1.5 text-xs">
            <span className="inline-flex items-center gap-1 rounded-full bg-black/[0.03] px-2.5 py-0.5 font-medium text-muted border border-black/[0.04]">
              <span className="text-muted font-mono text-[10px]">FORMAT:</span> {localized.formatAndPrep.submission.split(",")[0].slice(0, 35)}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-black/[0.03] px-2.5 py-0.5 font-medium text-muted border border-black/[0.04]">
              <span className="text-muted font-mono text-[10px]">SIGN:</span> {localized.formatAndPrep.selfAttestation.slice(0, 30)}
            </span>
            {localized.formatAndPrep.validityOrRecentness && (
              <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2.5 py-0.5 font-medium text-accent border border-accent/20">
                <span className="text-accent font-mono text-[10px]">VALIDITY:</span> {localized.formatAndPrep.validityOrRecentness.slice(0, 32)}
              </span>
            )}
          </div>
        )}

        <div className="mt-3.5 flex items-center justify-between gap-3 pt-2.5 border-t border-black/[0.04]">
          <Link
            href={`/process/${slug}/document/${doc.id}`}
            className="inline-flex min-h-[34px] items-center gap-1 text-xs sm:text-sm font-semibold text-accent hover:underline underline-offset-4 transition-colors"
          >
            <span>{t.process.whatDoesThisMean}</span>
            <span aria-hidden="true">→</span>
          </Link>

          <button
            type="button"
            onClick={() => onToggle(doc.id)}
            className={`inline-flex min-h-[34px] items-center gap-1 rounded-full px-3.5 py-1 text-xs font-semibold transition-all cursor-pointer active:scale-95 ${
              checked
                ? "bg-done text-white shadow-xs hover:bg-done/90"
                : "border border-black/[0.08] bg-black/[0.02] text-ink hover:bg-black/[0.06]"
            }`}
          >
            {checked ? "✓ Ready" : `+ ${t.document.markReady}`}
          </button>
        </div>
      </div>
    </li>
  );
}
