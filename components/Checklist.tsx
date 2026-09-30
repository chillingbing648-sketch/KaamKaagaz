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
  const remainingCount = total - count;

  return (
    <div className="space-y-6">
      {/* Progress card: Primary action module */}
      <div className="rounded-xl border border-line bg-surface p-5 sm:p-6 shadow-2xs">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-0.5">
              YOUR CHECKLIST
            </span>
            <p className="text-2xl sm:text-3xl font-black text-ink">
              {count} / {total} {t.checklist.completed.toUpperCase()}
            </p>
          </div>
          <span className="rounded-full bg-accent-soft px-3.5 py-1 text-sm font-bold text-accent border border-accent/20">
            {percent}% {t.checklist.done}
          </span>
        </div>

        <div className="mt-4">
          <ProgressBar percent={percent} label={`${loc.title} checklist progress`} />
        </div>

        <div role="status" className="mt-4">
          {count === 0 && firstLoc && (
            <div className="space-y-3">
              <p className="text-sm text-muted">
                {t.checklist.nothingTicked}{" "}
                <strong className="text-ink">{firstLoc.name}</strong>.
              </p>
              <div>
                <Link
                  href={`/process/${process.slug}/document/${firstUnticked!.id}`}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-accent px-5 text-sm font-bold text-white shadow-xs hover:bg-accent-hover transition-colors"
                >
                  Start preparing {firstLoc.name} →
                </Link>
              </div>
            </div>
          )}

          {count > 0 && count < total && firstLoc && (
            <div className="space-y-3">
              <p className="text-sm text-muted">
                <span className="font-semibold text-ink">{remainingCount} document{remainingCount > 1 ? "s" : ""} remaining</span>. Next up:{" "}
                <strong className="text-ink">{firstLoc.name}</strong>.
              </p>
              <div>
                <Link
                  href={`/process/${process.slug}/document/${firstUnticked!.id}`}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-accent px-5 text-sm font-bold text-white shadow-xs hover:bg-accent-hover transition-colors"
                >
                  Continue checklist: {firstLoc.name} →
                </Link>
              </div>
            </div>
          )}

          {count === total && (
            <div className="rounded-xl border border-done/40 bg-done-soft p-4 text-done">
              <p className="font-black text-base flex items-center gap-2">
                <span>🎉</span>
                <span>You&apos;re ready. All documents prepared!</span>
              </p>
              <p className="text-xs text-done/90 mt-1 leading-relaxed">
                {t.checklist.allReady}
              </p>
            </div>
          )}
        </div>

        {count === total && (
          <div className="mt-5 pt-4 border-t border-line flex flex-wrap items-center gap-3">
            <a
              href={process.officialSource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-accent px-6 font-bold text-white shadow-xs hover:bg-accent-hover active:scale-[0.99] transition-all"
            >
              <span>{t.process.startApplication}</span>
              <span aria-hidden="true">↗</span>
            </a>
            <Link
              href={`/process/${process.slug}`}
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-line bg-paper/70 px-5 font-bold text-ink hover:bg-surface hover:border-accent hover:text-accent transition-all shadow-2xs"
            >
              {t.process.backToProcess}
            </Link>
          </div>
        )}
      </div>

      {/* Document Items List */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
          Document Verification List
        </h2>
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
      </div>

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
            className="min-h-[40px] rounded-lg border border-line bg-surface px-4 text-xs font-semibold text-muted hover:border-line/80 hover:text-ink hover:bg-paper transition-colors cursor-pointer"
          >
            {t.checklist.clearTicks}
          </button>
        </div>
      )}
    </div>
  );
}
