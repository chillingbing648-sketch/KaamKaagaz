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
    <div className="flex flex-wrap items-center gap-3">
      {/* Primary interactive toggle button */}
      <button
        type="button"
        aria-pressed={isDone}
        onClick={() => toggle(docId)}
        className={`inline-flex min-h-[44px] items-center justify-center rounded-full px-6 font-semibold text-sm transition-all duration-200 cursor-pointer active:scale-[0.97] ${
          isDone
            ? "border border-done/30 bg-done-soft text-done hover:bg-done/15"
            : "bg-accent text-white hover:bg-accent-hover shadow-xs"
        }`}
      >
        {isDone ? t.document.markReadyUndo : `✓ ${t.document.markReady}`}
      </button>

      {/* Secondary outlined button */}
      <Link
        href={`/checklist/${slug}`}
        className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-black/[0.08] bg-black/[0.03] px-5 text-sm font-semibold text-ink hover:bg-black/[0.06] transition-all active:scale-[0.97]"
      >
        {t.process.openChecklist} →
      </Link>
    </div>
  );
}
