"use client";

import Link from "next/link";
import { useChecklist } from "@/lib/checklist";
import { useLanguage } from "@/lib/i18n/context";

export function MarkDone({
  slug,
  docId,
  allIds,
}: {
  slug: string;
  docId: string;
  allIds: string[];
}) {
  const { t } = useLanguage();
  const { done, toggle } = useChecklist(slug, allIds);
  const isDone = done.has(docId);

  return (
    <div className="flex flex-wrap items-center gap-3.5">
      {/* Primary interactive toggle button */}
      <button
        type="button"
        aria-pressed={isDone}
        onClick={() => toggle(docId)}
        className={`inline-flex min-h-[48px] items-center justify-center rounded-xl px-6 font-bold text-sm sm:text-base shadow-xs transition-all duration-150 cursor-pointer active:scale-[0.98] ${
          isDone
            ? "border-2 border-done/60 bg-done-soft text-done hover:bg-done/15"
            : "border-2 border-accent bg-accent text-white hover:bg-accent-hover shadow-sm"
        }`}
      >
        {isDone ? t.document.markReadyUndo : `✓ ${t.document.markReady}`}
      </button>

      {/* Secondary outlined button */}
      <Link
        href={`/checklist/${slug}`}
        className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-line bg-paper/60 px-5 text-sm font-bold text-ink hover:bg-surface hover:border-accent hover:text-accent transition-all shadow-2xs"
      >
        {t.process.openChecklist} →
      </Link>
    </div>
  );
}
