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

        {localized.formatAndPrep && (
          <div className="mt-2.5 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center rounded-md bg-paper px-2 py-0.5 font-medium text-muted border border-line/60">
              📄 {localized.formatAndPrep.submission.split(",")[0].slice(0, 35)}
            </span>
            <span className="inline-flex items-center rounded-md bg-paper px-2 py-0.5 font-medium text-muted border border-line/60">
              ✍️ {localized.formatAndPrep.selfAttestation.slice(0, 30)}
            </span>
          </div>
        )}

        <div className="mt-3 flex items-center gap-3">
          <Link
            href={`/process/${slug}/document/${doc.id}`}
            className="inline-flex min-h-[38px] items-center gap-1 text-xs sm:text-sm font-bold text-accent hover:text-accent-hover hover:underline underline-offset-4 transition-colors"
          >
            <span>{t.process.whatDoesThisMean}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </li>
  );
}
