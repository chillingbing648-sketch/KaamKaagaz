"use client";

import { useLanguage } from "@/lib/i18n/context";
import { getStr } from "@/lib/i18n/localize";
import { studentDocuments } from "@/data/admissions";
import {
  useAdmissionChecklist,
  AdmissionChecklistStatus,
} from "@/lib/checklist";
import { ProgressBar } from "@/components/ProgressBar";

export function AdmissionChecklistView() {
  const { language } = useLanguage();
  const validIds = studentDocuments.map((d) => d.id);
  const { statuses, setStatus, resetAll, counts } = useAdmissionChecklist(validIds);

  return (
    <section id="checklist" aria-label="My Admission Checklist" className="scroll-mt-24">
      <div className="rounded-2xl border-2 border-line bg-surface p-5 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-white text-xs font-black shadow-2xs">
                ✓
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                MY ADMISSION CHECKLIST
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-ink tracking-tight">
              Personal Admission Readiness Tracker
            </h2>
            <p className="text-xs sm:text-sm text-muted mt-0.5">
              Saved strictly in your browser. No registration or server sync.
            </p>
          </div>

          <button
            type="button"
            onClick={resetAll}
            className="self-start sm:self-center min-h-[38px] rounded-lg border border-line bg-paper px-3 py-1.5 text-xs font-semibold text-muted hover:text-ink hover:border-red-300 hover:text-red-700 transition-colors cursor-pointer"
          >
            Reset checklist
          </button>
        </div>

        {/* Progress Bar Widget */}
        <div className="mb-6 rounded-xl bg-paper/60 border border-line p-4 sm:p-5">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-ink">
              Preparation Progress
            </span>
            <span className="text-sm font-black text-accent">
              {counts.percent}%
            </span>
          </div>

          <ProgressBar percent={counts.percent} label="Admission checklist progress" />

          {/* Counts snapshot */}
          <div className="mt-4 pt-3 border-t border-line/60 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-done"></span>
              <span className="text-muted">Ready:</span>
              <strong className="text-ink">{counts.ready}</strong>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-red-500"></span>
              <span className="text-muted">Missing:</span>
              <strong className="text-ink">{counts.missing}</strong>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-amber-500"></span>
              <span className="text-muted">Needs Update:</span>
              <strong className="text-ink">{counts.needsUpdate}</strong>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-blue-500"></span>
              <span className="text-muted">Pending:</span>
              <strong className="text-ink">{counts.pending}</strong>
            </div>
          </div>
        </div>

        {/* Interactive checklist rows */}
        <div className="space-y-2.5">
          {studentDocuments.map((doc) => {
            const docName = getStr(doc.name, language);
            const currentStatus = statuses[doc.id] || "NOT_SURE";

            return (
              <div
                key={doc.id}
                className="rounded-xl border border-line/80 bg-surface p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <input
                    type="checkbox"
                    id={`check-${doc.id}`}
                    checked={currentStatus === "READY"}
                    onChange={(e) =>
                      setStatus(doc.id, e.target.checked ? "READY" : "MISSING")
                    }
                    className="size-5 rounded border-line text-accent focus:ring-accent cursor-pointer accent-accent"
                  />
                  <label
                    htmlFor={`check-${doc.id}`}
                    className={`text-xs sm:text-sm font-semibold cursor-pointer truncate ${
                      currentStatus === "READY" ? "text-ink line-through text-muted" : "text-ink"
                    }`}
                  >
                    {docName}
                  </label>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <select
                    value={currentStatus}
                    onChange={(e) =>
                      setStatus(doc.id, e.target.value as AdmissionChecklistStatus)
                    }
                    className="min-h-[38px] rounded-lg border border-line bg-paper px-2 py-1 text-xs font-semibold text-ink cursor-pointer focus:border-accent focus:outline-none"
                  >
                    <option value="READY">✓ READY</option>
                    <option value="MISSING">✕ MISSING</option>
                    <option value="NEEDS_UPDATE">↻ NEEDS UPDATE</option>
                    <option value="PENDING">⏳ PENDING</option>
                    <option value="NOT_SURE">? NOT SURE</option>
                    <option value="NOT_APPLICABLE">— NOT APPLICABLE</option>
                  </select>
                </div>
              </div>
            );
          })}
        </div>

        {/* Storage Notice */}
        <div className="mt-6 pt-4 border-t border-line flex items-center justify-between text-[11px] text-muted">
          <span>🔒 Stored exclusively in local device storage</span>
          <span>Zero telemetry</span>
        </div>
      </div>
    </section>
  );
}
