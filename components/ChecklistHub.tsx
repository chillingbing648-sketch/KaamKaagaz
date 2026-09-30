"use client";

import Link from "next/link";
import { processes, Process } from "@/data/processes";
import { useChecklist } from "@/lib/checklist";
import { useLanguage } from "@/lib/i18n/context";
import { getLocalizedProcess } from "@/lib/i18n/localize";
import { ProgressBar } from "./ProgressBar";

function ServiceChecklistCard({ process }: { process: Process }) {
  const { language, t } = useLanguage();
  const loc = getLocalizedProcess(process, language);
  const ids = process.documents.map((d) => d.id);
  const { count, total, percent } = useChecklist(process.slug, ids);

  return (
    <div className="rounded-xl border border-line bg-surface p-5 shadow-2xs space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted">
            {loc.category}
          </span>
          <h2 className="text-lg font-bold text-ink">{loc.title}</h2>
        </div>
        <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-bold text-accent shrink-0">
          {count} / {total} {t.checklist.completed}
        </span>
      </div>

      <ProgressBar percent={percent} label={`${loc.title} checklist progress`} />

      <div className="pt-2 flex items-center justify-between gap-3 text-xs">
        <span className="text-muted font-medium">
          {percent === 100 ? (
            <span className="text-done font-bold">✓ Ready to apply</span>
          ) : count === 0 ? (
            <span>Not started</span>
          ) : (
            <span>In progress ({percent}%)</span>
          )}
        </span>

        <Link
          href={`/checklist/${process.slug}`}
          className="inline-flex min-h-9 items-center font-bold text-accent underline underline-offset-4 hover:text-accent-hover"
        >
          {t.process.openChecklist} →
        </Link>
      </div>
    </div>
  );
}

export function ChecklistHub() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/"
          className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-4"
        >
          <span aria-hidden="true">←</span>
          <span>{t.nav.allServices}</span>
        </Link>
      </div>

      <header>
        <span className="text-xs font-bold uppercase tracking-wider text-muted">
          {t.checklist.title}
        </span>
        <h1 className="mt-1 text-3xl sm:text-4xl font-black text-ink">
          {t.checklist.title}
        </h1>
        <p className="mt-2 text-sm text-muted">
          {t.checklist.savedLocallyNotice}
        </p>
      </header>

      <div className="space-y-4">
        {processes.map((p) => (
          <ServiceChecklistCard key={p.slug} process={p} />
        ))}
      </div>
    </div>
  );
}
