"use client";

import Link from "next/link";
import { Process } from "@/data/processes";
import { useChecklist } from "@/lib/checklist";
import { useLanguage } from "@/lib/i18n/context";
import { getLocalizedDocument } from "@/lib/i18n/localize";
import { DocumentItem } from "./DocumentItem";
import { ProgressBar } from "./ProgressBar";

export function DocumentList({
  process,
  activeDocIds,
}: {
  process: Process;
  activeDocIds?: string[];
}) {
  const { language, t } = useLanguage();
  const allIds = process.documents.map((d) => d.id);
  const targetIds = activeDocIds && activeDocIds.length > 0 ? activeDocIds : allIds;

  const { done, toggle, count, total, percent } = useChecklist(process.slug, targetIds);
  const filteredDocs = process.documents.filter((d) => targetIds.includes(d.id));
  const nextDoc = filteredDocs.find((d) => !done.has(d.id));
  const nextLoc = nextDoc ? getLocalizedDocument(nextDoc, language) : null;

  return (
    <div>
      <div className="rounded-xl border border-line bg-surface p-4 sm:p-5 shadow-2xs">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold text-ink">
              {count} / {total} {t.process.readyCount}
            </span>
            <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-bold text-accent">
              {percent}%
            </span>
          </div>
          <Link
            href={`/checklist/${process.slug}`}
            className="inline-flex min-h-9 items-center text-sm font-semibold text-accent underline underline-offset-4 hover:text-accent/80"
          >
            {t.process.openChecklist} →
          </Link>
        </div>

        <div className="mt-3">
          <ProgressBar
            percent={percent}
            label={`${process.title} ${t.process.readyCount}`}
          />
        </div>

        <p className="mt-3 text-sm text-muted">
          {nextLoc ? (
            <>
              {t.process.nextStepPrompt}{" "}
              <Link
                href={`/process/${process.slug}/document/${nextDoc!.id}`}
                className="font-bold text-ink underline underline-offset-2 hover:text-accent"
              >
                {nextLoc.name}
              </Link>
              .
            </>
          ) : (
            <span className="font-semibold text-done">
              ✓ {t.process.allDocsReady}
            </span>
          )}
        </p>
      </div>

      <ul className="mt-4 space-y-3">
        {filteredDocs.map((d) => (
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
  );
}
