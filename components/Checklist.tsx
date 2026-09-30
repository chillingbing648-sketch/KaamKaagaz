"use client";

import Link from "next/link";
import { Process } from "@/data/processes";
import { useChecklist } from "@/lib/checklist";
import { useLanguage } from "@/lib/i18n/context";
import { getLocalizedProcess, getLocalizedDocument } from "@/lib/i18n/localize";
import { DocumentItem } from "./DocumentItem";
import { ProgressBar } from "./ProgressBar";

export function Checklist({ process }: { process: Process }) {
  const { language, t } = useLanguage();
  const loc = getLocalizedProcess(process, language);

  const ids = process.documents.map((d) => d.id);
  const { done, toggle, reset, count, total, percent } = useChecklist(process.slug, ids);

  const firstUnticked = process.documents.find((d) => !done.has(d.id));
  const firstLoc = firstUnticked ? getLocalizedDocument(firstUnticked, language) : null;

  return (
    <div className="space-y-6">
      {/* Progress card */}
      <div className="rounded-xl border border-line bg-surface p-5 sm:p-6 shadow-2xs">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-2xl sm:text-3xl font-black text-ink">
            {count} / {total} {t.checklist.completed}
          </p>
          <span className="rounded-full bg-accent-soft px-3 py-1 text-sm font-bold text-accent">
            {percent}% {t.checklist.done}
          </span>
        </div>

        <div className="mt-3.5">
          <ProgressBar percent={percent} label={`${loc.title} checklist progress`} />
        </div>

        <div role="status" className="mt-4 text-sm sm:text-base text-ink">
          {count === 0 && firstLoc && (
            <p className="text-muted">
              {t.checklist.nothingTicked}{" "}
              <Link
                className="font-bold text-accent underline underline-offset-4"
                href={`/process/${process.slug}/document/${firstUnticked!.id}`}
              >
                {firstLoc.name}
              </Link>
              .
            </p>
          )}

          {count > 0 && count < total && firstLoc && (
            <p className="text-muted">
              {t.checklist.next}{" "}
              <Link
                className="font-bold text-accent underline underline-offset-4"
                href={`/process/${process.slug}/document/${firstUnticked!.id}`}
              >
                {firstLoc.name}
              </Link>
              .
            </p>
          )}

          {count === total && (
            <div className="rounded-lg border border-done/40 bg-done-soft p-3 text-done font-bold flex items-center gap-2">
              <span>🎉</span>
              <span>{t.checklist.allReady}</span>
            </div>
          )}
        </div>

        {count === total && (
          <div className="mt-4 pt-4 border-t border-line flex flex-wrap gap-3">
            <a
              href={process.officialSource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-accent px-6 font-bold text-white shadow-xs hover:bg-accent/90 transition-all"
            >
              🚀 {t.process.startApplication}
            </a>
            <Link
              href={`/process/${process.slug}`}
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-line bg-surface px-5 font-semibold text-ink hover:bg-paper"
            >
              {t.process.backToProcess}
            </Link>
          </div>
        )}
      </div>

      {/* Document Items */}
      <ul className="space-y-3">
        {process.documents.map((d) => (
          <DocumentItem
            key={d.id}
            slug={process.slug}
            doc={d}
            checked={done.has(d.id)}
            onToggle={toggle}
          />
        ))}
      </ul>

      {/* Privacy note */}
      <p className="text-xs text-muted leading-relaxed">
        🔒 {t.checklist.savedLocallyNotice}
      </p>

      {/* Reset button */}
      {count > 0 && (
        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              if (window.confirm(t.checklist.clearConfirm)) reset();
            }}
            className="min-h-10 rounded-lg border border-line bg-surface px-4 text-xs sm:text-sm font-semibold text-muted hover:border-line/80 hover:text-ink hover:bg-paper transition-colors cursor-pointer"
          >
            {t.checklist.clearTicks}
          </button>
        </div>
      )}
    </div>
  );
}
