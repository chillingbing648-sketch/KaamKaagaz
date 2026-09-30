"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur-xs">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3 sm:py-3.5">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-bold focus-visible:outline-2 focus-visible:outline-accent"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-white font-extrabold text-base shadow-xs group-hover:bg-accent/90 transition-colors">
            क
          </span>
          <span className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-ink group-hover:text-accent transition-colors">
              KAAMKAAGAZ
            </span>
            <span className="text-[10px] font-semibold text-muted tracking-wide uppercase -mt-1 hidden sm:block">
              {t.brand.tagline}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="hidden text-sm font-medium text-muted hover:text-ink md:inline-flex"
          >
            {t.nav.allServices}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
