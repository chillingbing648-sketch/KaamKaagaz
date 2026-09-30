"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/context";
import { getStr } from "@/lib/i18n/localize";
import { AdmissionLevel, admissionPortals, AdmissionPortal } from "@/data/admissions";

export function PortalDirectory() {
  const { language } = useLanguage();
  const [filterLevel, setFilterLevel] = useState<string>("ALL");
  const [activeCourseModal, setActiveCourseModal] = useState<AdmissionPortal | null>(null);

  const levels: { id: string; label: string }[] = [
    { id: "ALL", label: "All Portals" },
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
          <div className="flex items-center gap-2 mb-1">
            <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-white text-xs font-black shadow-2xs">
              🏛️
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-accent">
              CENTRAL DIRECTORY
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-ink tracking-tight">
            Official Admission Portals
          </h2>
          <p className="text-xs sm:text-sm text-muted mt-1">
            Verified, government and university-authorized portals only. Year-specific (AY 2026–27).
          </p>
        </div>

        {/* Status assurance badge */}
        <div className="flex items-center gap-1.5 self-start sm:self-center px-3 py-1.5 rounded-lg bg-paper border border-line text-xs text-muted">
          <span className="size-2 rounded-full bg-done"></span>
          <span>Zero third-party agent links</span>
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
            className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              filterLevel === lvl.id
                ? "bg-ink text-white font-bold shadow-2xs"
                : "bg-surface border border-line text-ink hover:border-accent hover:text-accent"
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
              className="rounded-2xl border-2 border-line bg-surface p-5 sm:p-6 shadow-2xs hover:border-accent/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Level & Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="rounded-md bg-paper px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-muted border border-line/70">
                    {portal.level}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="rounded-md bg-accent-soft px-2 py-0.5 text-[10px] font-bold text-accent border border-accent/20">
                      {portal.academicYear}
                    </span>
                    <span
                      className={`rounded-md px-2 py-0.5 text-[10px] font-bold border ${
                        portal.status === "CURRENT"
                          ? "bg-done-soft text-done border-done/30"
                          : "bg-warning-soft text-warning border-warning-line"
                      }`}
                    >
                      {portal.status}
                    </span>
                  </div>
                </div>

                {/* Portal Name & Domain */}
                <h3 className="text-lg font-black text-ink leading-tight mb-1">
                  {localizedTitle}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-accent font-semibold mb-3">
                  <span>🌐</span>
                  <span>{portal.domain}</span>
                </div>

                {/* Structured Answers required by UX Architecture */}
                <div className="space-y-2.5 text-xs text-ink/90 border-t border-line/60 pt-3 mb-4">
                  <div>
                    <strong className="text-[11px] uppercase tracking-wider text-muted block mb-0.5">
                      WHAT IS IT FOR?
                    </strong>
                    <p className="leading-relaxed">{localizedPurpose}</p>
                  </div>

                  <div>
                    <strong className="text-[11px] uppercase tracking-wider text-muted block mb-0.5">
                      WHO USES IT?
                    </strong>
                    <p className="leading-relaxed text-ink/80">{localizedWho}</p>
                  </div>

                  <div>
                    <strong className="text-[11px] uppercase tracking-wider text-muted block mb-0.5">
                      OFFICIAL AUTHORITY:
                    </strong>
                    <p className="text-muted leading-tight">{portal.authority}</p>
                  </div>

                  {portal.notes && (
                    <div className="rounded-lg bg-paper p-2.5 border border-line/80 text-[11px] text-ink/80 leading-relaxed">
                      <strong className="text-accent font-bold">Note: </strong>
                      {localizedNotes}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Area */}
              <div className="pt-3 border-t border-line flex flex-col gap-2">
                {/* If portal has course-specific routes (e.g. CET Cell) */}
                {portal.courseSpecificRoutes && portal.courseSpecificRoutes.length > 0 ? (
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setActiveCourseModal(portal)}
                      className="w-full min-h-[42px] rounded-xl bg-accent-soft border border-accent/40 px-3 py-2 text-xs font-bold text-accent hover:bg-accent hover:text-white transition-all shadow-2xs flex items-center justify-between cursor-pointer"
                    >
                      <span>Choose course-specific CAP route ({portal.courseSpecificRoutes.length} disciplines)</span>
                      <span>▼</span>
                    </button>
                    <a
                      href={portal.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full min-h-[42px] rounded-xl bg-ink px-4 py-2 text-xs font-bold text-white hover:bg-accent transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <span>Open CET Cell main portal</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                ) : (
                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[44px] rounded-xl bg-accent px-4 py-2 text-xs font-bold text-white hover:bg-accent-hover transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>Open official portal ({portal.domain})</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}

                <div className="flex items-center justify-between text-[11px] text-muted pt-1">
                  <span>Last checked: {portal.lastChecked}</span>
                  <span>Direct SSL verified</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Course Specific Modal / Drawer for CET Cell */}
      {activeCourseModal && activeCourseModal.courseSpecificRoutes && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs animate-in fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="course-modal-title"
        >
          <div className="w-full max-w-2xl rounded-2xl border border-line bg-surface p-6 shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 border-b border-line pb-3 mb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
                  STATE CET CELL — COURSE-SPECIFIC CAP ROUTES
                </span>
                <h3 id="course-modal-title" className="text-xl font-black text-ink mt-0.5">
                  Select Your Course Discipline
                </h3>
                <p className="text-xs text-muted mt-1">
                  The CET Cell does not run a single universal CAP application. Each course has its own specialized portal.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveCourseModal(null)}
                aria-label="Close modal"
                className="flex size-8 items-center justify-center rounded-lg bg-paper text-muted hover:text-ink font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              {activeCourseModal.courseSpecificRoutes.map((route, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-line p-3.5 bg-paper/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-accent transition-colors"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="rounded bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent">
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
                    className="inline-flex min-h-[38px] items-center justify-center gap-1 rounded-lg bg-accent text-white px-3.5 py-1.5 text-xs font-bold hover:bg-accent-hover transition-colors shrink-0"
                  >
                    <span>Go to portal</span>
                    <span>↗</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-3 border-t border-line flex justify-end">
              <button
                type="button"
                onClick={() => setActiveCourseModal(null)}
                className="min-h-[40px] rounded-lg border border-line bg-surface px-4 py-2 text-xs font-bold text-ink hover:bg-paper cursor-pointer"
              >
                Close directory
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
