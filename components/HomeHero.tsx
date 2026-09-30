"use client";

import { useLanguage } from "@/lib/i18n/context";

export function HomeHero() {
  const { t } = useLanguage();

  return (
    <div className="mb-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent mb-4">
        <span>🇮🇳</span>
        <span>{t.brand.subTagline}</span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-ink">
        KAAMKAAGAZ
      </h1>

      <p className="mt-3 text-xl sm:text-2xl font-bold text-accent">
        {t.brand.tagline}
      </p>

      <p className="mt-2 text-base text-muted max-w-lg">
        {t.brand.disclaimer}
      </p>
    </div>
  );
}
