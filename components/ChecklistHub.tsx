"use client";

import Link from "next/link";
import { processes, Process } from "@/data/processes";
import { useChecklist, useAdmissionChecklist } from "@/lib/checklist";
import { useLanguage } from "@/lib/i18n/context";
import { getLocalizedProcess } from "@/lib/i18n/localize";
import { ProgressBar } from "./ProgressBar";
import { Breadcrumb } from "./Breadcrumb";
import { ContextRail } from "./ContextRail";
import { studentDocuments } from "@/data/admissions";

function ServiceChecklistCard({ process }: { process: Process }) {
  const { language, t } = useLanguage();
  const loc = getLocalizedProcess(process, language);
  const ids = process.documents.map((d) => d.id);
  const { count, total, percent } = useChecklist(process.slug, ids);

  return (
    <div className="rounded-xl border border-line bg-surface p-5 sm:p-6 shadow-2xs space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="inline-block rounded-md bg-paper px-2 py-0.5 text-[10px] font-semibold text-muted border border-line/60">
            {loc.category}
          </span>
          <h2 className="text-lg sm:text-xl font-semibold text-ink mt-1">{loc.title}</h2>
        </div>
        <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent shrink-0 border border-accent/20">
          {count} / {total} {t.checklist.completed}
        </span>
      </div>

      <ProgressBar percent={percent} label={`${loc.title} checklist progress`} />
      <div className="flex items-center justify-between text-xs">
        <div className="font-mono text-xs text-accent tracking-tight" aria-hidden="true">
          {'█'.repeat(Math.round(percent / 10))}{'░'.repeat(10 - Math.round(percent / 10))} {percent}%
        </div>
        <span className="text-muted font-medium">
          {total - count > 0 ? `${total - count} remaining` : "All documents ready ✓"}
        </span>
      </div>

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

function AdmissionChecklistCard() {
  const validIds = studentDocuments.map((d) => d.id);
  const { counts } = useAdmissionChecklist(validIds);

  return (
    <div className="rounded-xl border border-line bg-surface p-5 sm:p-6 shadow-2xs space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="inline-block rounded-md bg-paper px-2 py-0.5 text-[10px] font-semibold text-muted border border-line/60">
            Higher Education
          </span>
          <h2 className="text-lg sm:text-xl font-semibold text-ink mt-1">Student Admissions</h2>
        </div>
        <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent shrink-0 border border-accent/20">
          {counts.ready} / {counts.activeTotal} completed
        </span>
      </div>

      <ProgressBar percent={counts.percent} label="Student Admissions checklist progress" />
      <div className="flex items-center justify-between text-xs">
        <div className="font-mono text-xs text-accent tracking-tight" aria-hidden="true">
          {'█'.repeat(Math.round(counts.percent / 10))}{'░'.repeat(10 - Math.round(counts.percent / 10))} {counts.percent}%
        </div>
        <span className="text-muted font-medium">
          {counts.missing > 0 ? `${counts.missing} remaining` : "All reviewed ✓"}
        </span>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs sm:text-sm">
        <span className="text-muted font-medium">
          {counts.percent === 100 ? (
            <span className="text-done font-bold flex items-center gap-1">
              <span>✓</span>
              <span>All documents ready for admission</span>
            </span>
          ) : counts.ready === 0 ? (
            <span>Not started</span>
          ) : (
            <span className="text-ink font-semibold">In progress ({counts.percent}% complete)</span>
          )}
        </span>

        <Link
          href="/admissions#checklist"
          className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-accent/30 bg-accent-soft px-4 py-2 text-xs sm:text-sm font-bold text-accent hover:bg-accent hover:text-white transition-all shadow-2xs"
        >
          Open admission checklist →
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
            Personal workspace
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-ink">
            {t.checklist.title}
          </h1>
          <p className="mt-2 text-sm text-muted">
            {t.checklist.savedLocallyNotice}
          </p>
        </header>

        <div className="space-y-4">
          <AdmissionChecklistCard />
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
