"use client";

import { OfficialSource as Source } from "@/data/processes";
import { useLanguage } from "@/lib/i18n/context";

export function OfficialSource({
  source,
  lastChecked,
}: {
  source: Source;
  lastChecked: string;
}) {
  const { t } = useLanguage();
  const links = [{ name: source.name, url: source.url }, ...(source.more ?? [])];

  return (
    <div className="rounded-xl border-2 border-accent/20 bg-accent-soft/40 p-4 sm:p-5 shadow-2xs">
      <div className="flex items-center gap-2">
        <span className="text-xl">🏛️</span>
        <h3 className="text-base sm:text-lg font-bold text-accent">
          {t.officialSource.title}
        </h3>
      </div>

      <p className="mt-2 text-xs sm:text-sm text-ink/80 leading-relaxed">
        {t.officialSource.explanationNote}
      </p>

      <ul className="mt-3.5 space-y-2">
        {links.map((l) => (
          <li key={l.url}>
            <a
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-accent/30 bg-white px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-accent shadow-2xs hover:bg-accent hover:text-white transition-all"
            >
              <span>{l.name}</span>
              <span aria-hidden="true" className="text-xs">↗</span>
              <span className="sr-only"> {t.officialSource.openInNewTab}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-4 pt-3 border-t border-accent/15 flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
        <span>
          {t.officialSource.lastReviewed}{" "}
          <strong className="text-ink font-semibold">{lastChecked}</strong>
        </span>
        <span className="text-[11px] text-muted">
          🛡️ {t.officialSource.verifyNotice}
        </span>
      </div>
    </div>
  );
}
