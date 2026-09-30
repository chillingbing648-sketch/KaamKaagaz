"use client";

import Link from "next/link";
import { processes, Process } from "@/data/processes";
import { useChecklist } from "@/lib/checklist";
import { useLanguage } from "@/lib/i18n/context";
import { getLocalizedProcess } from "@/lib/i18n/localize";
import { ProgressBar } from "./ProgressBar";
import { Breadcrumb } from "./Breadcrumb";
import { ContextRail } from "./ContextRail";

function ServiceChecklistCard({ process }: { process: Process }) {
  const { language, t } = useLanguage();
  const loc = getLocalizedProcess(process, language);
  const ids = process.documents.map((d) => d.id);
  const { count, total, percent } = useChecklist(process.slug, ids);

  return (
    <div className="rounded-xl border border-line bg-surface p-5 sm:p-6 shadow-2xs space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="inline-block rounded-md bg-paper px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted border border-line/60">
            {loc.category}
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-ink mt-1">{loc.title}</h2>
        </div>
        <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent shrink-0 border border-accent/20">
          {count} / {total} {t.checklist.completed}
        </span>
      </div>

      <ProgressBar percent={percent} label={`${loc.title} checklist progress`} />

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs sm:text-sm">
        <span className="text-muted font-medium">
          {percent === 100 ? (
            <span className="text-done font-bold flex items-center gap-1">
              <span>✓</span>
              <span>Ready to apply officially</span>
            </span>
          ) : count === 0 ? (
            <span>Not started</span>
          ) : (
            <span className="text-ink font-semibold">In progress ({percent}% complete)</span>
          )}
        </span>

        <Link
          href={`/checklist/${process.slug}`}
          className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-accent/30 bg-accent-soft px-4 py-2 text-xs sm:text-sm font-bold text-accent hover:bg-accent hover:text-white transition-all shadow-2xs"
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
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
      {/* Main Working Area */}
      <div className="min-w-0 flex-1 lg:max-w-3xl space-y-6">
        <Breadcrumb
          items={[
            { label: t.nav.services, href: "/#services" },
            { label: t.checklist.title, isCurrent: true },
          ]}
        />

        <header>
          <span className="inline-block rounded-md bg-paper px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-muted border border-line/60">
            {t.checklist.title}
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-black text-ink">
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

      {/* Contextual Side Rail */}
      <div className="mt-12 lg:mt-0 w-full lg:w-80 shrink-0 lg:sticky lg:top-24">
        <ContextRail mode="home" />
      </div>
    </div>
  );
}
