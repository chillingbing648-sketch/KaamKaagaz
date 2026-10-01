"use client";

import { OfficialSource as Source } from "@/data/processes";
import { useLanguage } from "@/lib/i18n/context";

function getDomain(urlStr: string) {
  try {
    return new URL(urlStr).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

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
    <div className="rounded-xl border-2 border-accent/25 bg-accent-soft/30 p-5 sm:p-6 shadow-2xs">
      <div className="flex items-center justify-between gap-2 border-b border-accent/15 pb-3 mb-3">
        <div className="flex items-center gap-2.5">
          <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-white text-xs font-bold shadow-2xs">
            ↗
          </span>
          <div>
            <span className="block text-[10px] font-mono font-semibold text-accent tracking-wide">
              Official source
            </span>
            <h3 className="text-base sm:text-lg font-bold text-ink">
              {t.officialSource.title}
            </h3>
          </div>
        </div>

        <span className="trust-verified flex items-center gap-1 bg-done-soft px-2.5 py-1 rounded-md border border-done/20 shrink-0">
          ✓ Verified
        </span>
      </div>

      <p className="text-xs sm:text-sm text-ink/80 leading-relaxed mb-4">
        {t.officialSource.explanationNote}
      </p>

      {/* Official authority links with domain pills */}
      <ul className="space-y-2.5">
        {links.map((l) => {
          const domain = getDomain(l.url);
          return (
            <li key={l.url}>
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl border border-accent/30 bg-surface p-3.5 shadow-2xs hover:border-accent hover:bg-accent-soft hover:shadow-xs transition-all min-h-[48px]"
              >
                <div>
                  <span className="font-bold text-sm text-ink group-hover:text-accent transition-colors block">
                    {l.name}
                  </span>
                  {domain && (
                    <span className="font-mono text-[11px] text-muted block mt-0.5">
                      {domain}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 self-start sm:self-center shrink-0">
                  <span className="inline-flex min-h-[36px] items-center gap-1 rounded-lg bg-accent text-white px-3 py-1 text-xs font-bold shadow-2xs group-hover:bg-accent-hover transition-colors">
                    <span>View official portal</span>
                    <span aria-hidden="true">↗</span>
                  </span>
                  <span className="sr-only"> {t.officialSource.openInNewTab}</span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>

      {/* Verification footer metadata */}
      <div className="mt-4 pt-3.5 border-t border-accent/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-muted">
        <span>
          {t.officialSource.lastReviewed}{" "}
          <strong className="trust-verified">{lastChecked}</strong>
        </span>
        <span className="text-[11px] text-muted">
          {t.officialSource.verifyNotice}
        </span>
      </div>
    </div>
  );
}
