"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="py-12 text-center">
      <span className="text-5xl">📄❓</span>
      <h1 className="mt-4 text-3xl font-extrabold text-ink">
        {t.notFound.title}
      </h1>
      <p className="mt-3 max-w-md mx-auto text-muted text-base leading-relaxed">
        {t.notFound.message}
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-accent px-6 font-bold text-white shadow-xs hover:bg-accent/90 transition-all"
        >
          ← {t.notFound.backButton}
        </Link>
      </div>
    </div>
  );
}
