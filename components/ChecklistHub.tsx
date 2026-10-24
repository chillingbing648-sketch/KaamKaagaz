"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { processes, Process } from "@/data/processes";
import {
  useChecklist,
  useAdmissionChecklist,
  downloadBackupFile,
  restoreBackupData,
  clearAllLocalData,
} from "@/lib/checklist";
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
    <div className="apple-card p-5 sm:p-6 space-y-4 transition-all duration-200 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="inline-block rounded-full bg-black/[0.04] px-2.5 py-0.5 text-[10px] font-semibold text-muted tracking-wide">
            {loc.category}
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-ink mt-1.5 tracking-tight">{loc.title}</h2>
        </div>
        <span className="rounded-full bg-accent-soft/80 px-3 py-1 text-xs font-bold text-accent shrink-0 border border-accent/20">
          {count} / {total} {t.checklist.completed}
        </span>
      </div>

      <ProgressBar percent={percent} label={`${loc.title} checklist progress`} />
      <div className="flex items-center justify-between text-xs">
        <div className="font-mono text-xs text-accent font-semibold tracking-tight" aria-hidden="true">
          {'█'.repeat(Math.round(percent / 10))}{'░'.repeat(10 - Math.round(percent / 10))} {percent}%
        </div>
        <span className="text-muted font-medium">
          {total - count > 0 ? `${total - count} ${t.checklist.remaining}` : t.checklist.allReady}
        </span>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs sm:text-sm border-t border-black/[0.04]">
        <span className="text-muted font-medium">
          {percent === 100 ? (
            <span className="text-done font-bold flex items-center gap-1.5">
              <span className="flex size-4 items-center justify-center rounded-full bg-done/15 text-done text-[10px]">✓</span>
              <span>{t.common.readyToApplyOfficially}</span>
            </span>
          ) : count === 0 ? (
            <span className="text-muted">{t.common.notStarted}</span>
          ) : (
            <span className="text-ink font-semibold">{t.common.inProgress} ({percent}%)</span>
          )}
        </span>

        <Link
          href={`/checklist/${process.slug}/`}
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-accent/20 bg-accent-soft px-4.5 py-2 text-xs sm:text-sm font-semibold text-accent hover:bg-accent hover:text-white transition-all duration-150 active:scale-[0.98] shadow-xs"
        >
          {t.process.openChecklist} →
        </Link>
      </div>
    </div>
  );
}

function AdmissionChecklistCard() {
  const { t } = useLanguage();
  const validIds = studentDocuments.map((d) => d.id);
  const { counts } = useAdmissionChecklist(validIds);

  return (
    <div className="apple-card p-5 sm:p-6 space-y-4 transition-all duration-200 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="inline-block rounded-full bg-primary-soft/80 px-2.5 py-0.5 text-[10px] font-semibold text-primary tracking-wide border border-primary/10">
            {t.admissionsHub.badge}
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-ink mt-1.5 tracking-tight">{t.nav.admissions}</h2>
        </div>
        <span className="rounded-full bg-accent-soft/80 px-3 py-1 text-xs font-bold text-accent shrink-0 border border-accent/20">
          {counts.ready} / {counts.activeTotal} {t.checklist.completed}
        </span>
      </div>

      <ProgressBar percent={counts.percent} label="Student Admissions checklist progress" />
      <div className="flex items-center justify-between text-xs">
        <div className="font-mono text-xs text-accent font-semibold tracking-tight" aria-hidden="true">
          {'█'.repeat(Math.round(counts.percent / 10))}{'░'.repeat(10 - Math.round(counts.percent / 10))} {counts.percent}%
        </div>
        <span className="text-muted font-medium">
          {counts.missing > 0 ? `${counts.missing} ${t.checklist.remaining}` : t.checklist.allReady}
        </span>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs sm:text-sm border-t border-black/[0.04]">
        <span className="text-muted font-medium">
          {counts.percent === 100 ? (
            <span className="text-done font-bold flex items-center gap-1.5">
              <span className="flex size-4 items-center justify-center rounded-full bg-done/15 text-done text-[10px]">✓</span>
              <span>{t.common.readyToApplyOfficially}</span>
            </span>
          ) : counts.ready === 0 ? (
            <span className="text-muted">{t.common.notStarted}</span>
          ) : (
            <span className="text-ink font-semibold">{t.common.inProgress} ({counts.percent}%)</span>
          )}
        </span>

        <Link
          href="/admissions/#checklist"
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-accent/20 bg-accent-soft px-4.5 py-2 text-xs sm:text-sm font-semibold text-accent hover:bg-accent hover:text-white transition-all duration-150 active:scale-[0.98] shadow-xs"
        >
          {t.admissionsHub.openChecklist} →
        </Link>
      </div>
    </div>
  );
}

export function ChecklistHub() {
  const { t } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleDownload = () => {
    const ok = downloadBackupFile();
    if (ok) {
      setFeedback({ type: "success", message: t.common.backupDownloaded });
    } else {
      setFeedback({ type: "error", message: t.common.backupFailed });
    }
    setTimeout(() => setFeedback(null), 4000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === "string") {
        const res = restoreBackupData(content);
        setFeedback({
          type: res.success ? "success" : "error",
          message: res.message,
        });
        setTimeout(() => setFeedback(null), 5000);
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  const handleClear = () => {
    if (window.confirm(t.common.clearAllConfirm)) {
      clearAllLocalData();
      setFeedback({ type: "success", message: t.common.allDataCleared });
      setTimeout(() => setFeedback(null), 4000);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
      {/* Main Working Area */}
      <div className="min-w-0 flex-1 lg:max-w-3xl space-y-6">
        <Breadcrumb
          items={[
            { label: t.nav.home, href: "/" },
            { label: t.checklist.title, isCurrent: true },
          ]}
        />

        <header className="space-y-2">
          <span className="inline-block rounded-full bg-black/[0.04] px-3 py-1 text-xs font-semibold tracking-wide text-muted">
            {t.checklist.personalWorkspace}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
            {t.checklist.myPaperwork}
          </h1>
          <p className="text-sm text-muted leading-relaxed">
            {t.checklist.savedLocallyNotice}
          </p>
        </header>

        {/* Data Portability & Disaster Recovery Bar */}
        <div className="apple-card p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
          <div>
            <span className="text-xs font-bold text-ink block tracking-tight">
              {t.common.dataPortability}
            </span>
            <span className="text-xs text-muted block mt-0.5">
              {t.common.dataPortabilityDesc}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleDownload}
              className="apple-btn-secondary !rounded-xl text-xs font-semibold px-3 py-1.5 cursor-pointer shadow-2xs"
            >
              {t.common.backupBtn}
            </button>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="apple-btn-secondary !rounded-xl text-xs font-semibold px-3 py-1.5 cursor-pointer shadow-2xs"
            >
              {t.common.restoreBtn}
            </button>

            <button
              type="button"
              onClick={handleClear}
              className="text-xs text-muted hover:text-red-600 px-2 py-1 transition-colors cursor-pointer"
              title={t.common.clearBtn}
            >
              {t.common.clearBtn}
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept=".json,application/json"
              onChange={handleFileChange}
              className="sr-only"
              aria-label="Upload JSON backup file"
            />
          </div>
        </div>

        {feedback && (
          <div
            className={`rounded-2xl p-3.5 text-xs font-semibold border animate-in fade-in ${
              feedback.type === "success"
                ? "bg-done/10 text-done border-done/20"
                : "bg-red-50 text-red-700 border-red-200"
            }`}
          >
            {feedback.message}
          </div>
        )}

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
