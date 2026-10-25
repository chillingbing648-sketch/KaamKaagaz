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
    <div className="rounded-2xl border border-black/[0.06] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
      <div className="flex items-center justify-between gap-2 border-b border-black/[0.04] pb-4 mb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-full bg-accent-soft text-accent text-sm font-bold shadow-xs">
            ↗
          </span>
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted">
              {t.officialSource.title}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-ink tracking-tight">
              {t.officialSource.title}
            </h3>
          </div>
        </div>

        <span className="trust-verified flex items-center gap-1 bg-done-soft px-3 py-1 rounded-full border border-done/20 shrink-0">
          ✓ {t.common.verified}
        </span>
      </div>

      <p className="text-xs sm:text-sm text-muted leading-relaxed mb-4">
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
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-black/[0.06] bg-black/[0.02] p-4 hover:border-black/[0.12] hover:bg-black/[0.04] transition-all min-h-[48px] active:scale-[0.99]"
              >
                <div>
                  <span className="font-bold text-sm text-ink group-hover:text-accent transition-colors block tracking-tight">
                    {l.name}
                  </span>
                  {domain && (
                    <span className="font-mono text-[11px] text-muted block mt-0.5">
                      {domain}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 self-start sm:self-center shrink-0">
                  <span className="inline-flex min-h-[34px] items-center gap-1 rounded-full bg-accent text-white px-4 py-1 text-xs font-semibold shadow-xs group-hover:bg-accent-hover transition-colors">
                    <span>{t.common.openPortal}</span>
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
      <div className="mt-5 pt-3.5 border-t border-black/[0.04] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-muted">
        <span className="flex items-center gap-1.5 font-medium text-ink/80">
          <span className="text-done font-bold">✓</span>
          <span>{t.common.directVerified}</span>
        </span>
        <span className="text-[11px] text-muted font-medium">
          {t.officialSource.verifyNotice}
        </span>
      </div>
    </div>
  );
}
