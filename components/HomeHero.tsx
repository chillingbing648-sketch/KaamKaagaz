"use client";

import { useLanguage } from "@/lib/i18n/context";

export function HomeHero() {
  const { t } = useLanguage();

  return (
    <div className="mb-8 pt-2">
      <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent mb-3.5 shadow-2xs">
        <span aria-hidden="true">🇮🇳</span>
        <span>{t.brand.subTagline}</span>
      </div>

      <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-ink">
        KAAMKAAGAZ
      </h1>

      <p className="mt-2 text-xl sm:text-2xl font-bold text-accent">
        {t.brand.tagline}
      </p>

      <p className="mt-2 text-sm sm:text-base text-muted max-w-lg leading-relaxed">
        {t.brand.disclaimer}
      </p>
    </div>
  );
}
