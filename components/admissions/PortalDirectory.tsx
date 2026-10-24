"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { getStr } from "@/lib/i18n/localize";
import { AdmissionLevel, admissionPortals, AdmissionPortal } from "@/data/admissions";

export function PortalDirectory() {
  const { language, t } = useLanguage();
  const [filterLevel, setFilterLevel] = useState<string>("ALL");
  const [activeCourseModal, setActiveCourseModal] = useState<AdmissionPortal | null>(null);

  const levels: { id: string; label: string }[] = [
    { id: "ALL", label: t.admissionsHub.allPortals },
    { id: "11th / FYJC", label: "11th / FYJC" },
    { id: "CET / CAP", label: "CET / CAP" },
    { id: "Undergraduate", label: "University UG / PG" },
    { id: "CDOE / Distance", label: "Distance (CDOE)" },
    { id: "PhD / Research", label: "Ph.D." },
    { id: "Scholarships", label: "Scholarships" },
  ];

  const filteredPortals =
    filterLevel === "ALL"
      ? admissionPortals
      : admissionPortals.filter((p) => {
          if (filterLevel === "Undergraduate") {
            return p.level === "Undergraduate" || p.level === "Postgraduate";
          }
          return p.level === filterLevel;
        });

  return (
    <section id="portal-directory" aria-label="Official Admission Portals Directory" className="scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="flex size-7 items-center justify-center rounded-xl bg-accent text-white text-xs font-bold shadow-xs">
              🏛️
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              CENTRAL DIRECTORY
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-ink tracking-tight">
            Official Admission Portals
          </h2>
          <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
            Verified, government and university-authorized portals only. Year-specific (AY 2026–27).
          </p>
        </div>

        {/* Status assurance badge */}
        <div className="flex items-center gap-2 self-start sm:self-center px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] text-xs text-muted shadow-xs">
          <span className="size-2 rounded-full bg-done"></span>
          <span className="font-medium text-ink/80">{t.admissionsHub.zeroAgentNotice}</span>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Filter portals by level">
        {levels.map((lvl) => (
          <button
            key={lvl.id}
            type="button"
            role="tab"
            aria-selected={filterLevel === lvl.id}
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

      {/* Grid of Verified Portal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredPortals.map((portal) => {
          const localizedTitle = portal.localizedName ? getStr(portal.localizedName, language, portal.name) : portal.name;
          const localizedPurpose = portal.localizedPurpose ? getStr(portal.localizedPurpose, language, portal.purpose) : portal.purpose;
          const localizedWho = portal.localizedWhoUsesIt ? getStr(portal.localizedWhoUsesIt, language, portal.whoUsesIt) : portal.whoUsesIt;
          const localizedNotes = portal.localizedNotes ? getStr(portal.localizedNotes, language, portal.notes) : portal.notes;

          return (
            <div
              key={portal.id}
              className="apple-card p-5 sm:p-6 transition-all duration-200 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Header: Level & Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-full bg-black/[0.04] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                    {portal.level}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="rounded-full bg-accent-soft/80 px-2.5 py-0.5 text-[10px] font-semibold text-accent border border-accent/15">
                      {portal.academicYear}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold border ${
                        portal.status === "CURRENT"
                          ? "bg-done/10 text-done border-done/20"
                          : "bg-amber-500/10 text-amber-700 border-amber-500/20"
                      }`}
                    >
                      {portal.status}
                    </span>
                  </div>
                </div>

                {/* Portal Name & Domain */}
                <h3 className="text-lg font-bold text-ink leading-tight mb-1 tracking-tight">
                  {localizedTitle}
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-mono text-accent font-semibold mb-3">
                  <span>🌐</span>
                  <span>{portal.domain}</span>
                </div>

                {/* Structured Answers required by UX Architecture */}
                <div className="space-y-3 text-xs text-ink/90 border-t border-black/[0.04] pt-3 mb-4">
                  <div>
                    <strong className="text-[10px] uppercase font-bold tracking-wider text-muted block mb-0.5">
                      {t.admissionsHub.purpose}
                    </strong>
                    <p className="leading-relaxed text-ink/90">{localizedPurpose}</p>
                  </div>

                  <div>
                    <strong className="text-[10px] uppercase font-bold tracking-wider text-muted block mb-0.5">
                      {t.admissionsHub.whoUses}
                    </strong>
                    <p className="leading-relaxed text-ink/80">{localizedWho}</p>
                  </div>

                  <div>
                    <strong className="text-[10px] uppercase font-bold tracking-wider text-muted block mb-0.5">
                      {t.admissionsHub.authority}
                    </strong>
                    <p className="text-muted leading-tight">{portal.authority}</p>
                  </div>

                  {portal.notes && (
                    <div className="rounded-xl bg-black/[0.02] p-3 border border-black/[0.04] text-[11px] text-ink/80 leading-relaxed">
                      <strong className="text-accent font-semibold">{t.admissionsHub.note} </strong>
                      {localizedNotes}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Area */}
              <div className="pt-3 border-t border-black/[0.04] flex flex-col gap-2">
                {/* If portal has course-specific routes (e.g. CET Cell) */}
                {portal.courseSpecificRoutes && portal.courseSpecificRoutes.length > 0 ? (
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setActiveCourseModal(portal)}
                      className="w-full min-h-[42px] rounded-xl bg-accent-soft border border-accent/25 px-3.5 py-2 text-xs font-semibold text-accent hover:bg-accent hover:text-white transition-all duration-150 shadow-xs flex items-center justify-between cursor-pointer active:scale-[0.98]"
                    >
                      <span>{t.admissionsHub.chooseCap} ({portal.courseSpecificRoutes.length})</span>
                      <span>▼</span>
                    </button>
                    <a
                      href={portal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apple-btn-secondary w-full !rounded-xl min-h-[42px] text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <span>{t.admissionsHub.openMainPortal}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                ) : (
                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apple-btn-primary w-full !rounded-xl min-h-[44px] text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>{t.admissionsHub.openOfficialPortal} ({portal.domain})</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}

                <div className="flex items-center justify-between text-[11px] text-muted pt-1">
                  <span>{t.admissionsHub.lastChecked} {portal.lastChecked}</span>
                  <span className="font-medium text-ink/70">{t.admissionsHub.sslVerified}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Course Specific Modal / Drawer for CET Cell */}
      {activeCourseModal && activeCourseModal.courseSpecificRoutes && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4 animate-in fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="course-modal-title"
        >
          <div className="w-full max-w-2xl rounded-3xl border border-black/[0.08] bg-white p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 border-b border-black/[0.06] pb-4 mb-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent block">
                  STATE CET CELL — COURSE-SPECIFIC CAP ROUTES
                </span>
                <h3 id="course-modal-title" className="text-xl sm:text-2xl font-extrabold text-ink mt-1 tracking-tight">
                  {t.admissionsHub.routeModalTitle}
                </h3>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  The CET Cell does not run a single universal CAP application. Each course has its own specialized portal.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveCourseModal(null)}
                aria-label="Close modal"
                className="flex size-8 items-center justify-center rounded-full bg-black/[0.04] text-muted hover:text-ink font-semibold hover:bg-black/[0.08] transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              {activeCourseModal.courseSpecificRoutes.map((route, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-black/[0.06] p-4 bg-[#fbfbfd] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-black/20 hover:bg-white hover:shadow-sm transition-all"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold text-accent">
                        {route.cetName}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-ink">{route.courseName}</h4>
                    <p className="text-xs text-muted mt-0.5">{route.shortNote}</p>
                  </div>

                  <a
                    href={route.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[38px] items-center justify-center gap-1 rounded-xl bg-accent text-white px-4 py-1.5 text-xs font-semibold hover:bg-accent-hover transition-colors shrink-0 shadow-xs active:scale-[0.98]"
                  >
                    <span>Go to portal</span>
                    <span>↗</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-black/[0.06] flex justify-end">
              <button
                type="button"
                onClick={() => setActiveCourseModal(null)}
                className="apple-btn-secondary min-h-[40px] !rounded-xl px-5 text-xs font-semibold"
              >
                {t.admissionsHub.routeModalClose}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
