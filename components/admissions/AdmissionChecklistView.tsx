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
      <div className="apple-card p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/[0.06] pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="flex size-7 items-center justify-center rounded-xl bg-accent text-white text-xs font-bold shadow-xs">
                ✓
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                MY ADMISSION CHECKLIST
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight">
              Personal Admission Readiness Tracker
            </h2>
            <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
              Saved strictly in your browser. No registration or server sync.
            </p>
          </div>

          <button
            type="button"
            onClick={resetAll}
            className="apple-btn-secondary !rounded-xl self-start sm:self-center min-h-[38px] px-3.5 py-1.5 text-xs font-semibold text-muted hover:text-red-600 hover:border-red-200 transition-colors cursor-pointer"
          >
            Reset checklist
          </button>
        </div>

        {/* Progress Bar Widget */}
        <div className="mb-6 rounded-2xl bg-[#fbfbfd] border border-black/[0.06] p-4.5 sm:p-5 shadow-2xs">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-ink">
              Preparation Progress
            </span>
            <span className="text-sm font-extrabold text-accent">
              {counts.percent}%
            </span>
          </div>

          <ProgressBar percent={counts.percent} label="Admission checklist progress" />

          {/* Counts snapshot */}
          <div className="mt-4 pt-3.5 border-t border-black/[0.04] grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-done"></span>
              <span className="text-muted">Ready:</span>
              <strong className="text-ink">{counts.ready}</strong>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-red-500"></span>
              <span className="text-muted">Missing:</span>
              <strong className="text-ink">{counts.missing}</strong>
            </div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-amber-500"></span>
              <span className="text-muted">Needs Update:</span>
              <strong className="text-ink">{counts.needsUpdate}</strong>
            </div>
            <div className="flex items-center gap-2">
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
            const isReady = (statuses[doc.id] || "NOT_SURE") === "READY";
            const currentStatus = statuses[doc.id] || "NOT_SURE";

            return (
              <div
                key={doc.id}
                className="apple-card p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {/* Apple Reminders style circular checkbox */}
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={isReady}
                    onClick={() => setStatus(doc.id, isReady ? "MISSING" : "READY")}
                    className={`flex size-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 cursor-pointer active:scale-90 ${
                      isReady
                        ? "border-accent bg-accent text-white shadow-2xs"
                        : "border-black/20 bg-white hover:border-black/40"
                    }`}
                  >
                    {isReady && (
                      <svg className="size-3.5 stroke-white" viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </button>

                  <label
                    onClick={() => setStatus(doc.id, isReady ? "MISSING" : "READY")}
                    className={`text-xs sm:text-sm font-semibold cursor-pointer truncate select-none ${
                      isReady ? "text-muted line-through" : "text-ink"
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
                    className="min-h-[38px] rounded-xl border border-black/[0.1] bg-white px-3 py-1 text-xs font-semibold text-ink cursor-pointer focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none shadow-2xs"
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
        <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-[11px] text-muted">
          <span>🔒 Stored exclusively in local device storage</span>
          <span className="font-medium text-ink/70">Zero telemetry</span>
        </div>
      </div>
    </section>
  );
}
