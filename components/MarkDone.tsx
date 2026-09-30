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
      <button
        type="button"
        aria-pressed={isDone}
        onClick={() => toggle(docId)}
        className={`min-h-12 rounded-xl px-6 font-bold shadow-xs transition-all duration-200 cursor-pointer ${
          isDone
            ? "border-2 border-done bg-done-soft text-done hover:bg-done/15"
            : "border-2 border-accent bg-accent text-white hover:bg-accent/90 shadow-sm"
        }`}
      >
        {isDone ? t.document.markReadyUndo : `✓ ${t.document.markReady}`}
      </button>

      <Link
        href={`/checklist/${slug}`}
        className="inline-flex min-h-11 items-center text-sm font-semibold text-accent underline underline-offset-4 hover:text-accent/80"
      >
        {t.process.openChecklist} →
      </Link>
    </div>
  );
}
