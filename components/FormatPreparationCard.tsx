"use client";

import { useLanguage } from "@/lib/i18n/context";

export interface FormatAndPrepProps {
  submission?: string;
  selfAttestation?: string;
  digitalCopy?: string;
  fileFormat?: string;
  validityOrRecentness?: string;
  whatIfMissing?: string;
  importantNotes?: string;
}

export function FormatPreparationCard({ prep }: { prep?: FormatAndPrepProps }) {
  const { t } = useLanguage();

  if (!prep) return null;

  return (
    <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] space-y-4">
      <div className="flex items-center gap-2.5 mb-1">
        <span className="flex size-7 items-center justify-center rounded-full bg-accent-soft text-accent text-xs font-bold">
          ▤
        </span>
        <h3 className="text-base sm:text-lg font-bold text-ink tracking-tight">
          {t.document.formatAndPrep}
        </h3>
      </div>

      {/* Structured 2x2 or 4-cell Metadata Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {prep.submission && (
          <div className="rounded-xl bg-black/[0.02] p-3.5 border border-black/[0.04]">
            <span className="block text-[11px] font-semibold tracking-wider text-muted mb-1 uppercase">
              {t.document.submission}
            </span>
            <p className="text-xs sm:text-sm font-bold text-ink leading-snug">
              {prep.submission}
            </p>
          </div>
        )}

        {prep.selfAttestation && (
          <div className="rounded-xl bg-black/[0.02] p-3.5 border border-black/[0.04]">
            <span className="block text-[11px] font-semibold tracking-wider text-muted mb-1 uppercase">
              {t.document.selfAttestation}
            </span>
            <p className="text-xs sm:text-sm font-bold text-ink leading-snug">
              {prep.selfAttestation}
            </p>
          </div>
        )}

        {prep.digitalCopy && (
          <div className="rounded-xl bg-black/[0.02] p-3.5 border border-black/[0.04]">
            <span className="block text-[11px] font-semibold tracking-wider text-muted mb-1 uppercase">
              {t.document.digitalCopy}
            </span>
            <p className="text-xs sm:text-sm font-bold text-ink leading-snug">
              {prep.digitalCopy}
            </p>
          </div>
        )}

        {prep.fileFormat && (
          <div className="rounded-xl bg-black/[0.02] p-3.5 border border-black/[0.04]">
            <span className="block text-[11px] font-semibold tracking-wider text-muted mb-1 uppercase">
              {t.document.fileFormat}
            </span>
            <p className="text-xs sm:text-sm font-bold text-ink leading-snug">
              {prep.fileFormat}
            </p>
          </div>
        )}
      </div>

      {/* Validity / Recentness banner */}
      {prep.validityOrRecentness && (
        <div className="rounded-xl border border-accent/20 bg-accent-soft/40 p-3.5">
          <span className="block text-[11px] font-semibold tracking-wider text-accent mb-0.5 uppercase">
            {t.document.validityRecentness}
          </span>
          <p className="text-xs sm:text-sm text-ink leading-relaxed font-semibold">
            {prep.validityOrRecentness}
          </p>
        </div>
      )}

      {/* What if missing alternative guidance */}
      {prep.whatIfMissing && (
        <div className="rounded-xl border border-black/[0.04] bg-black/[0.02] p-3.5">
          <span className="block text-[11px] font-semibold tracking-wider text-muted mb-0.5 flex items-center gap-1 uppercase">
            <span>◌</span>
            <span>{t.document.whatIfMissing}</span>
          </span>
          <p className="text-xs sm:text-sm text-ink/90 leading-relaxed font-medium">
            {prep.whatIfMissing}
          </p>
        </div>
      )}

      {/* Important official warning / note notice */}
      {prep.importantNotes && (
        <div className="rounded-xl border border-amber-200/60 bg-amber-50/70 p-3.5">
          <span className="block text-[11px] font-semibold tracking-wider text-amber-900 mb-0.5 flex items-center gap-1 uppercase">
            <span className="trust-important">!</span>
            <span>{t.document.importantOfficialNotes}</span>
          </span>
          <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
            {prep.importantNotes}
          </p>
        </div>
      )}

      {/* Practical Fictional Example */}
      <div className="rounded-xl border border-blue-200/60 bg-blue-50/50 p-3.5">
        <span className="block text-[11px] font-semibold tracking-wider text-blue-900 mb-0.5 flex items-center gap-1 uppercase">
          <span>✍️</span>
          <span>{t.document.practicalExample}</span>
        </span>
        <p className="text-xs sm:text-sm text-blue-950 leading-relaxed font-medium">
          {t.document.practicalExampleText}
        </p>
      </div>

      <p className="pt-2 text-[11px] text-muted leading-relaxed border-t border-line/50">
        ◌ {t.document.requirementsVaryWarning}
      </p>
    </div>
  );
}
