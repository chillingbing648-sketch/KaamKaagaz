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
  { label: string; badgeClass: string; icon: string }
> = {
  READY: {
    label: "READY",
    badgeClass: "bg-done-soft text-done border-done/40 font-bold",
    icon: "✓",
  },
  MISSING: {
    label: "MISSING",
    badgeClass: "bg-red-50 text-red-700 border-red-200 font-bold",
    icon: "✕",
  },
  NEEDS_UPDATE: {
    label: "NEEDS UPDATE",
    badgeClass: "bg-amber-50 text-amber-800 border-amber-300 font-bold",
    icon: "↻",
  },
  PENDING: {
    label: "PENDING (TOKEN)",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200 font-bold",
    icon: "⏳",
  },
  NOT_SURE: {
    label: "NOT SURE",
    badgeClass: "bg-gray-100 text-gray-700 border-gray-300 font-semibold",
    icon: "?",
  },
  NOT_APPLICABLE: {
    label: "NOT APPLICABLE",
    badgeClass: "bg-gray-50 text-gray-400 border-gray-200 font-medium",
    icon: "—",
  },
};

export function StudentDocumentList() {
  const { language } = useLanguage();
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
          <div className="flex items-center gap-2 mb-1">
            <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-white text-xs font-black shadow-2xs">
              📄
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              STUDENT DOCUMENT SYSTEM
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-ink tracking-tight">
            Documents & “Do I Need This?” Helper
          </h2>
          <p className="text-xs sm:text-sm text-muted mt-0.5">
            Mark your real readiness state. Click any document to see why it is needed, accepted formats, and validity rules.
          </p>
        </div>

        {/* Live readiness badge */}
        <div className="rounded-xl border border-line bg-surface p-3 text-right shadow-2xs shrink-0">
          <div className="flex items-center justify-end gap-2 text-xs font-bold text-ink">
            <span>Readiness:</span>
            <span className="text-accent text-sm font-black">{counts.percent}%</span>
          </div>
          <p className="text-[11px] text-muted">
            {counts.ready} of {counts.activeTotal} active documents ready
          </p>
        </div>
      </div>

      {/* Filter by admission type */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { id: "ALL", label: "All Documents" },
          { id: "11th / FYJC", label: "11th / FYJC" },
          { id: "CET / CAP", label: "CET / CAP" },
          { id: "Undergraduate", label: "Undergraduate" },
          { id: "Scholarships", label: "Scholarships" },
        ].map((lvl) => (
          <button
            key={lvl.id}
            type="button"
            onClick={() => setFilterLevel(lvl.id)}
            className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              filterLevel === lvl.id
                ? "bg-accent text-white font-bold shadow-2xs"
                : "bg-surface border border-line text-ink hover:border-accent"
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
              className={`rounded-2xl border transition-all shadow-2xs bg-surface ${
                isExpanded ? "border-accent ring-1 ring-accent/20" : "border-line hover:border-accent/40"
              }`}
            >
              {/* Document Header Row */}
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="rounded bg-paper px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted border border-line">
                      {doc.shortTag}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] border ${statusInfo.badgeClass}`}
                    >
                      <span>{statusInfo.icon}</span>
                      <span>{statusInfo.label}</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-ink">
                    {docName}
                  </h3>
                  <p className="text-xs text-muted mt-0.5 line-clamp-1">
                    {getStr(helper.whatIsIt, language)}
                  </p>
                </div>

                {/* State selector & Helper toggle */}
                <div className="flex flex-wrap items-center gap-2 self-start sm:self-center shrink-0">
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
                      className="min-h-[42px] rounded-lg border border-line bg-paper px-2.5 py-1.5 text-xs font-bold text-ink cursor-pointer focus:border-accent focus:outline-none"
                    >
                      <option value="READY">✓ READY</option>
                      <option value="MISSING">✕ MISSING</option>
                      <option value="NEEDS_UPDATE">↻ NEEDS UPDATE</option>
                      <option value="PENDING">⏳ PENDING (RECEIPT)</option>
                      <option value="NOT_SURE">? NOT SURE</option>
                      <option value="NOT_APPLICABLE">— NOT APPLICABLE</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleExpand(doc.id)}
                    aria-expanded={isExpanded}
                    className="inline-flex min-h-[42px] items-center gap-1.5 rounded-lg border border-line bg-surface px-3 py-1.5 text-xs font-bold text-ink hover:border-accent hover:text-accent transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? "Hide Explainer" : "Do I need this?"}</span>
                    <span aria-hidden="true">{isExpanded ? "▲" : "▼"}</span>
                  </button>
                </div>
              </div>

              {/* “Do I Need This?” Expanded Helper Tray */}
              {isExpanded && (
                <div className="border-t border-line/70 bg-paper/60 p-5 sm:p-6 rounded-b-2xl animate-in fade-in duration-150">
                  <div className="max-w-3xl space-y-4 text-xs">
                    {/* Grid of explanations */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-xl border border-line bg-surface p-4 shadow-2xs">
                        <strong className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                          ❓ What is this document?
                        </strong>
                        <p className="text-ink leading-relaxed">
                          {getStr(helper.whatIsIt, language)}
                        </p>
                      </div>

                      <div className="rounded-xl border border-line bg-surface p-4 shadow-2xs">
                        <strong className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                          🎯 Why might I need it?
                        </strong>
                        <p className="text-ink leading-relaxed">
                          {getStr(helper.whyMightINeedIt, language)}
                        </p>
                      </div>

                      <div className="rounded-xl border border-line bg-surface p-4 shadow-2xs">
                        <strong className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                          👥 Who usually needs it?
                        </strong>
                        <p className="text-ink leading-relaxed">
                          {getStr(helper.whoUsuallyNeedsIt, language)}
                        </p>
                      </div>

                      <div className="rounded-xl border border-line bg-surface p-4 shadow-2xs">
                        <strong className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                          🏛️ Where do I get it?
                        </strong>
                        <p className="text-ink leading-relaxed">
                          {getStr(helper.whereDoIGetIt, language)}
                        </p>
                      </div>
                    </div>

                    {/* Format, validity & token rules */}
                    <div className="rounded-xl border border-line bg-surface p-4 shadow-2xs space-y-3">
                      <div>
                        <strong className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                          📐 Accepted Format & Originals:
                        </strong>
                        <p className="text-ink leading-relaxed">
                          {getStr(helper.whatFormat, language)} ({getStr(helper.originalOrCopy, language)})
                        </p>
                      </div>

                      <div className="border-t border-line/60 pt-2.5">
                        <strong className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-1">
                          ⏱️ Validity & Expiry Rule:
                        </strong>
                        <p className="text-ink font-semibold leading-relaxed">
                          {getStr(helper.validity, language)}
                        </p>
                      </div>

                      <div className="border-t border-line/60 pt-2.5">
                        <strong className="text-warning font-bold uppercase tracking-wider text-[11px] block mb-1">
                          ⏳ What if my document is currently pending?
                        </strong>
                        <p className="text-ink/90 leading-relaxed">
                          {getStr(helper.whatIfPending, language)}
                        </p>
                      </div>
                    </div>

                    {/* Official source note */}
                    <div className="rounded-lg bg-accent-soft border border-accent/25 p-3 text-[11px] text-ink/90 flex items-start gap-2">
                      <span className="text-accent font-bold">ℹ️</span>
                      <p className="leading-relaxed">
                        <strong className="text-accent">Official Rule: </strong>
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
