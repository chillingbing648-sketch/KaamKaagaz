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
    <div className="rounded-xl border-2 border-line bg-surface p-4 sm:p-5 shadow-xs">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">📑</span>
        <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-ink">
          {t.document.formatAndPrep}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {prep.submission && (
          <div className="rounded-lg bg-paper p-3 border border-line/70">
            <span className="block text-xs font-bold uppercase tracking-wider text-muted">
              {t.document.submission}
            </span>
            <p className="mt-1 text-sm font-semibold text-ink leading-snug">
              {prep.submission}
            </p>
          </div>
        )}

        {prep.selfAttestation && (
          <div className="rounded-lg bg-paper p-3 border border-line/70">
            <span className="block text-xs font-bold uppercase tracking-wider text-muted">
              {t.document.selfAttestation}
            </span>
            <p className="mt-1 text-sm font-semibold text-ink leading-snug">
              {prep.selfAttestation}
            </p>
          </div>
        )}

        {prep.digitalCopy && (
          <div className="rounded-lg bg-paper p-3 border border-line/70">
            <span className="block text-xs font-bold uppercase tracking-wider text-muted">
              {t.document.digitalCopy}
            </span>
            <p className="mt-1 text-sm font-semibold text-ink leading-snug">
              {prep.digitalCopy}
            </p>
          </div>
        )}

        {prep.fileFormat && (
          <div className="rounded-lg bg-paper p-3 border border-line/70">
            <span className="block text-xs font-bold uppercase tracking-wider text-muted">
              {t.document.fileFormat}
            </span>
            <p className="mt-1 text-sm font-semibold text-ink leading-snug">
              {prep.fileFormat}
            </p>
          </div>
        )}
      </div>

      {prep.validityOrRecentness && (
        <div className="mt-3.5 rounded-lg border border-accent/20 bg-accent-soft/40 p-3">
          <span className="block text-xs font-bold uppercase tracking-wider text-accent">
            ⏳ {t.document.validityRecentness}
          </span>
          <p className="mt-1 text-sm text-ink font-medium leading-relaxed">
            {prep.validityOrRecentness}
          </p>
        </div>
      )}

      {prep.whatIfMissing && (
        <div className="mt-3.5 rounded-lg border border-line bg-paper p-3.5">
          <span className="block text-xs font-bold uppercase tracking-wider text-muted">
            💡 {t.document.whatIfMissing}
          </span>
          <p className="mt-1 text-sm text-ink leading-relaxed">
            {prep.whatIfMissing}
          </p>
        </div>
      )}

      {prep.importantNotes && (
        <div className="mt-3.5 rounded-lg border border-note-line bg-note-bg/50 p-3">
          <span className="block text-xs font-bold uppercase tracking-wider text-note-ink">
            📌 {t.document.importantOfficialNotes}
          </span>
          <p className="mt-1 text-xs sm:text-sm text-note-ink leading-relaxed">
            {prep.importantNotes}
          </p>
        </div>
      )}

      <p className="mt-4 pt-3 border-t border-line text-[11px] text-muted leading-tight">
        ℹ️ {t.document.requirementsVaryWarning}
      </p>
    </div>
  );
}
