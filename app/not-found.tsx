"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { processes } from "@/data/processes";
import { getLocalizedProcess } from "@/lib/i18n/localize";

export default function NotFound() {
  const { language, t } = useLanguage();

  return (
    <div className="py-14 max-w-2xl mx-auto text-center space-y-6">
      <div className="inline-flex size-16 items-center justify-center rounded-3xl bg-accent-soft text-3xl text-accent shadow-xs border border-accent/20">
        📄❓
      </div>
      <div className="space-y-2">
        <span className="inline-block rounded-full bg-black/[0.04] px-3 py-1 text-xs font-semibold text-muted">
          404 · {t.notFound.title}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
          {t.notFound.title}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-muted max-w-lg mx-auto leading-relaxed">
          {t.notFound.message}
        </p>
      </div>

      {/* Actionable Service Suggestions */}
      <div className="apple-card p-5 sm:p-6 text-left shadow-sm">
        <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3.5">
          {t.categories.filterServices}:
        </p>
        <div className="divide-y divide-black/[0.04]">
          {processes.map((p) => {
            const loc = getLocalizedProcess(p, language);
            return (
              <Link
                key={p.slug}
                href={`/process/${p.slug}/`}
                className="flex items-center justify-between py-3 px-2 hover:bg-black/[0.02] hover:text-accent rounded-xl transition-colors group"
              >
                <div>
                  <span className="font-bold text-sm text-ink group-hover:text-accent transition-colors block">
                    {loc.title}
                  </span>
                  <span className="text-xs text-muted block mt-0.5">
                    {loc.category}
                  </span>
                </div>
                <span className="text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all text-xs font-semibold">{t.common.explore} →</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="pt-2 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="apple-btn-primary min-h-[44px] px-6 text-xs sm:text-sm font-semibold !rounded-xl shadow-xs cursor-pointer"
        >
          ← {t.notFound.backButton}
        </Link>
      </div>
    </div>
  );
}
