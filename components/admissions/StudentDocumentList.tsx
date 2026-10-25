"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { getStr } from "@/lib/i18n/localize";
import { studentDocuments, StudentDocument } from "@/data/admissions";
import {
  useAdmissionChecklist,
  AdmissionChecklistStatus,
} from "@/lib/checklist";

const STATUS_CONFIG: Record<
  AdmissionChecklistStatus,
  { key: string; badgeClass: string; icon: string }
> = {
  READY: {
    key: "statusReady",
    badgeClass: "bg-done-soft text-done border-done/40 font-bold",
    icon: "✓",
  },
  MISSING: {
    key: "statusMissing",
    badgeClass: "bg-red-50 text-red-700 border-red-200 font-bold",
    icon: "✕",
  },
  NEEDS_UPDATE: {
    key: "statusNeedsUpdate",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-300 font-bold",
    icon: "↻",
  },
  PENDING: {
    key: "statusPending",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200 font-bold",
    icon: "⏳",
  },
  NOT_SURE: {
    key: "statusNotSure",
    badgeClass: "bg-gray-100 text-gray-700 border-gray-300 font-semibold",
    icon: "?",
  },
  NOT_APPLICABLE: {
    key: "statusNotApplicable",
    badgeClass: "bg-gray-50 text-gray-400 border-gray-200 font-medium",
    icon: "—",
  },
};

function getStatusLabel(status: AdmissionChecklistStatus, t: any) {
  switch (status) {
    case "READY":
      return t.admissionsHub.statusReady;
    case "MISSING":
      return t.admissionsHub.statusMissing;
    case "NEEDS_UPDATE":
      return t.admissionsHub.statusNeedsUpdate;
    case "PENDING":
      return t.admissionsHub.statusPending;
    case "NOT_SURE":
      return t.admissionsHub.statusNotSure;
    case "NOT_APPLICABLE":
      return t.admissionsHub.statusNotApplicable;
    default:
      return t.admissionsHub.statusNotSure;
  }
}

export function StudentDocumentList() {
  const { language, t } = useLanguage();
  const validIds = studentDocuments.map((d) => d.id);
  const { statuses, setStatus, counts } = useAdmissionChecklist(validIds);

  const [expandedDocId, setExpandedDocId] = useState<string | null>(null);
  const [filterLevel, setFilterLevel] = useState<string>("ALL");

  const toggleExpand = (id: string) => {
    setExpandedDocId(expandedDocId === id ? null : id);
  };

  const filteredDocs =
    filterLevel === "ALL"
      ? studentDocuments
      : studentDocuments.filter((d) =>
          d.applicableLevels.includes(filterLevel as any)
        );

  return (
    <section id="documents" aria-label="Student Admission Documents and Verification" className="scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="flex size-7 items-center justify-center rounded-xl bg-accent text-white text-xs font-bold shadow-xs">
              📄
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              {t.admissionsHub.studentDocSystem}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight">
            {t.admissionsHub.docHelperTitle}
          </h2>
          <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
            Mark your real readiness state. Click any document to see why it is needed, accepted formats, and validity rules.
          </p>
        </div>

        {/* Live readiness badge */}
        <div className="apple-card p-3.5 text-right shadow-xs shrink-0">
          <div className="flex items-center justify-end gap-2 text-xs font-bold text-ink">
            <span className="text-muted font-medium">Readiness:</span>
            <span className="text-accent text-sm font-extrabold">{counts.percent}%</span>
          </div>
          <p className="text-[11px] text-muted mt-0.5">
            {counts.ready} of {counts.activeTotal} active documents ready
          </p>
        </div>
      </div>

      {/* Filter by admission type */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { id: "ALL", label: t.admissionsHub.filterAll },
          { id: "11th / FYJC", label: "11th / FYJC" },
          { id: "CET / CAP", label: "CET / CAP" },
          { id: "Undergraduate", label: "Undergraduate" },
          { id: "Scholarships", label: "Scholarships" },
        ].map((lvl) => (
          <button
            key={lvl.id}
            type="button"
            onClick={() => setFilterLevel(lvl.id)}
            className={`min-h-[38px] rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-150 cursor-pointer ${
              filterLevel === lvl.id
                ? "bg-ink text-white font-bold shadow-xs"
                : "bg-white/90 border border-black/[0.08] text-ink hover:border-black/20 hover:text-black"
            }`}
          >
            {lvl.label}
          </button>
        ))}
      </div>

      {/* Documents List */}
      <div className="space-y-4">
        {filteredDocs.map((doc) => {
          const docName = getStr(doc.name, language);
          const currentStatus: AdmissionChecklistStatus = statuses[doc.id] || "NOT_SURE";
          const statusInfo = STATUS_CONFIG[currentStatus];
          const isExpanded = expandedDocId === doc.id;
          const helper = doc.helper;

          return (
            <div
              key={doc.id}
              className={`apple-card transition-all duration-200 ${
                isExpanded ? "ring-1 ring-accent/30 shadow-md" : "hover:shadow-md"
              }`}
            >
              {/* Document Header Row */}
              <div className="p-4.5 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="rounded-full bg-black/[0.04] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                      {doc.shortTag}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] border ${statusInfo.badgeClass}`}
                    >
                      <span>{statusInfo.icon}</span>
                      <span>{getStatusLabel(currentStatus, t)}</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-ink tracking-tight">
                    {docName}
                  </h3>
                  <p className="text-xs text-muted mt-0.5 line-clamp-1">
                    {getStr(helper.whatIsIt, language)}
                  </p>
                </div>

                {/* State selector & Helper toggle */}
                <div className="flex flex-wrap items-center gap-2.5 self-start sm:self-center shrink-0">
                  <div className="relative">
                    <label htmlFor={`status-${doc.id}`} className="sr-only">
                      Status for {docName}
                    </label>
                    <select
                      id={`status-${doc.id}`}
                      value={currentStatus}
                      onChange={(e) =>
                        setStatus(doc.id, e.target.value as AdmissionChecklistStatus)
                      }
                      className="min-h-[42px] rounded-xl border border-black/[0.1] bg-white px-3 py-1.5 text-xs font-semibold text-ink cursor-pointer focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none shadow-2xs"
                    >
                      <option value="READY">✓ {t.admissionsHub.statusReady}</option>
                      <option value="MISSING">✕ {t.admissionsHub.statusMissing}</option>
                      <option value="NEEDS_UPDATE">↻ {t.admissionsHub.statusNeedsUpdate}</option>
                      <option value="PENDING">⏳ {t.admissionsHub.statusPending}</option>
                      <option value="NOT_SURE">? {t.admissionsHub.statusNotSure}</option>
                      <option value="NOT_APPLICABLE">— {t.admissionsHub.statusNotApplicable}</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleExpand(doc.id)}
                    aria-expanded={isExpanded}
                    className="apple-btn-secondary !rounded-xl min-h-[42px] px-3.5 text-xs font-semibold inline-flex items-center gap-1.5"
                  >
                    <span>{isExpanded ? "Hide Explainer" : "Do I need this?"}</span>
                    <span aria-hidden="true" className="text-[10px]">{isExpanded ? "▲" : "▼"}</span>
                  </button>
                </div>
              </div>

              {/* “Do I Need This?” Expanded Helper Tray */}
              {isExpanded && (
                <div className="border-t border-black/[0.06] bg-[#fbfbfd] p-5 sm:p-7 rounded-b-2xl animate-in fade-in duration-150">
                  <div className="max-w-3xl space-y-4 text-xs">
                    {/* Grid of explanations */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="apple-card p-4 sm:p-5 shadow-2xs">
                        <strong className="text-[10px] uppercase font-bold tracking-wider text-muted block mb-1">
                          ❓ What is this document?
                        </strong>
                        <p className="text-ink leading-relaxed">
                          {getStr(helper.whatIsIt, language)}
                        </p>
                      </div>

                      <div className="apple-card p-4 sm:p-5 shadow-2xs">
                        <strong className="text-[10px] uppercase font-bold tracking-wider text-muted block mb-1">
                          🎯 Why might I need it?
                        </strong>
                        <p className="text-ink leading-relaxed">
                          {getStr(helper.whyMightINeedIt, language)}
                        </p>
                      </div>

                      <div className="apple-card p-4 sm:p-5 shadow-2xs">
                        <strong className="text-[10px] uppercase font-bold tracking-wider text-muted block mb-1">
                          👥 Who usually needs it?
                        </strong>
                        <p className="text-ink leading-relaxed">
                          {getStr(helper.whoUsuallyNeedsIt, language)}
                        </p>
                      </div>

                      <div className="apple-card p-4 sm:p-5 shadow-2xs">
                        <strong className="text-[10px] uppercase font-bold tracking-wider text-muted block mb-1">
                          🏛️ Where do I get it?
                        </strong>
                        <p className="text-ink leading-relaxed">
                          {getStr(helper.whereDoIGetIt, language)}
                        </p>
                      </div>
                    </div>

                    {/* Format, validity & token rules */}
                    <div className="apple-card p-4 sm:p-5 shadow-2xs space-y-3.5">
                      <div>
                        <strong className="text-[10px] uppercase font-bold tracking-wider text-muted block mb-1">
                          📐 Accepted Format & Originals:
                        </strong>
                        <p className="text-ink leading-relaxed">
                          {getStr(helper.whatFormat, language)} ({getStr(helper.originalOrCopy, language)})
                        </p>
                      </div>

                      <div className="border-t border-black/[0.04] pt-3">
                        <strong className="text-[10px] uppercase font-bold tracking-wider text-muted block mb-1">
                          ⏱️ Validity & Expiry Rule:
                        </strong>
                        <p className="text-ink font-semibold leading-relaxed">
                          {getStr(helper.validity, language)}
                        </p>
                      </div>

                      <div className="border-t border-black/[0.04] pt-3">
                        <strong className="text-amber-800 dark:text-amber-300 font-bold uppercase tracking-wider text-[10px] block mb-1">
                          ⏳ What if my document is currently pending?
                        </strong>
                        <p className="text-ink/90 leading-relaxed">
                          {getStr(helper.whatIfPending, language)}
                        </p>
                      </div>
                    </div>

                    {/* Official source note */}
                    <div className="rounded-2xl bg-accent-soft/60 border border-accent/20 p-4 text-[11px] text-ink/90 flex items-start gap-2.5">
                      <span className="text-accent font-bold mt-0.5">ℹ️</span>
                      <p className="leading-relaxed">
                        <strong className="text-accent font-semibold">Official Rule: </strong>
                        {getStr(helper.officialSourceNotice, language)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
