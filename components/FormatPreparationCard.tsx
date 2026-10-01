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
    <div className="rounded-xl border border-line bg-surface p-5 sm:p-6 shadow-2xs space-y-5">
      <div className="flex items-center gap-2.5">
        <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-white text-xs font-bold">
          ▤
        </span>
        <h3 className="text-base sm:text-lg font-bold text-ink">
          {t.document.formatAndPrep}
        </h3>
      </div>

      {/* Structured 2x2 or 4-cell Metadata Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {prep.submission && (
          <div className="rounded-lg bg-paper/70 p-3.5 border border-line/60">
            <span className="block text-[11px] font-mono font-semibold tracking-wide text-muted mb-1 uppercase">
              {t.document.submission}
            </span>
            <p className="text-xs sm:text-sm font-bold text-ink leading-snug">
              {prep.submission}
            </p>
          </div>
        )}

        {prep.selfAttestation && (
          <div className="rounded-lg bg-paper/70 p-3.5 border border-line/60">
            <span className="block text-[11px] font-mono font-semibold tracking-wide text-muted mb-1 uppercase">
              {t.document.selfAttestation}
            </span>
            <p className="text-xs sm:text-sm font-bold text-ink leading-snug">
              {prep.selfAttestation}
            </p>
          </div>
        )}

        {prep.digitalCopy && (
          <div className="rounded-lg bg-paper/70 p-3.5 border border-line/60">
            <span className="block text-[11px] font-mono font-semibold tracking-wide text-muted mb-1 uppercase">
              {t.document.digitalCopy}
            </span>
            <p className="text-xs sm:text-sm font-bold text-ink leading-snug">
              {prep.digitalCopy}
            </p>
          </div>
        )}

        {prep.fileFormat && (
          <div className="rounded-lg bg-paper/70 p-3.5 border border-line/60">
            <span className="block text-[11px] font-mono font-semibold tracking-wide text-muted mb-1 uppercase">
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
        <div className="rounded-lg border border-accent/25 bg-accent-soft/40 p-3.5">
          <span className="block text-[11px] font-mono font-semibold tracking-wide text-accent mb-0.5 uppercase">
            Validity / Recentness
          </span>
          <p className="text-xs sm:text-sm text-ink leading-relaxed font-semibold">
            {prep.validityOrRecentness}
          </p>
        </div>
      )}

      {/* What if missing alternative guidance */}
      {prep.whatIfMissing && (
        <div className="rounded-lg border border-line bg-paper p-3.5">
          <span className="block text-[11px] font-mono font-semibold tracking-wide text-muted mb-0.5 flex items-center gap-1">
            <span>◌</span>
            <span>{t.document.whatIfMissing}</span>
          </span>
          <p className="text-xs sm:text-sm text-ink leading-relaxed">
            {prep.whatIfMissing}
          </p>
        </div>
      )}

      {/* Important official warning / note notice */}
      {prep.importantNotes && (
        <div className="rounded-lg border border-warning-line bg-warning-soft/50 p-3.5">
          <span className="block text-[11px] font-mono font-semibold tracking-wide text-warning mb-0.5 flex items-center gap-1">
            <span className="trust-important">!</span>
            <span>{t.document.importantOfficialNotes}</span>
          </span>
          <p className="text-xs sm:text-sm text-ink leading-relaxed font-medium">
            {prep.importantNotes}
          </p>
        </div>
      )}

      <p className="pt-2 text-[11px] text-muted leading-relaxed border-t border-line/50">
        ◌ {t.document.requirementsVaryWarning}
      </p>
    </div>
  );
}
