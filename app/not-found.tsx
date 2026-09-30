"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { processes } from "@/data/processes";
import { getLocalizedProcess } from "@/lib/i18n/localize";

export default function NotFound() {
  const { language, t } = useLanguage();

  return (
    <div className="py-12 max-w-2xl mx-auto text-center space-y-6">
      <div className="inline-flex size-16 items-center justify-center rounded-2xl bg-accent-soft text-3xl text-accent shadow-2xs">
        📄❓
      </div>
      <div>
        <h1 className="text-3xl sm:text-4xl font-black text-ink">
          {t.notFound.title}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-muted max-w-lg mx-auto leading-relaxed">
          {t.notFound.message}
        </p>
      </div>

      {/* Actionable Service Suggestions */}
      <div className="rounded-xl border border-line bg-surface p-5 text-left shadow-2xs">
        <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
          Available Verified Services:
        </p>
        <div className="divide-y divide-line/60">
          {processes.map((p) => {
            const loc = getLocalizedProcess(p, language);
            return (
              <Link
                key={p.slug}
                href={`/process/${p.slug}`}
                className="flex items-center justify-between py-2.5 px-2 hover:bg-accent-soft hover:text-accent rounded-lg transition-colors group"
              >
                <div>
                  <span className="font-bold text-sm text-ink group-hover:text-accent block">
                    {loc.title}
                  </span>
                  <span className="text-xs text-muted block">
                    {loc.category}
                  </span>
                </div>
                <span className="text-muted group-hover:text-accent text-xs">Explore →</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="pt-2 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-accent px-6 font-bold text-white shadow-xs hover:bg-accent-hover transition-all"
        >
          ← {t.notFound.backButton}
        </Link>
      </div>
    </div>
  );
}
