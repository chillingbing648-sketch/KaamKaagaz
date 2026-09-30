"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { processes } from "@/data/processes";
import { getLocalizedProcess } from "@/lib/i18n/localize";

export function Navbar() {
  const { language, t } = useLanguage();
  const [checklistMenuOpen, setChecklistMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setChecklistMenuOpen(false);
      }
    }
    if (checklistMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [checklistMenuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur-xs">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3 sm:py-3.5">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-bold focus-visible:outline-2 focus-visible:outline-accent"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-white font-extrabold text-base shadow-xs group-hover:bg-accent-hover transition-colors">
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

        {/* Desktop Navigation Links */}
        <div className="flex items-center gap-2 sm:gap-3">
          <nav aria-label="Main Navigation" className="hidden sm:flex items-center gap-2 mr-1">
            <Link
              href="/"
              className="text-xs font-semibold text-muted hover:text-ink transition-colors px-2 py-1 rounded-md hover:bg-paper"
            >
              {t.nav.services}
            </Link>

            <Link
              href="/#how-it-works"
              className="text-xs font-semibold text-muted hover:text-ink transition-colors px-2 py-1 rounded-md hover:bg-paper"
            >
              {t.nav.howItWorks}
            </Link>

            {/* Checklist quick picker dropdown */}
            <div className="relative" ref={menuRef}>
              <div className="inline-flex rounded-md border border-line bg-paper/50">
                <Link
                  href="/checklist"
                  className="text-xs font-semibold text-muted hover:text-ink transition-colors px-2.5 py-1 rounded-l-md hover:bg-paper"
                >
                  {t.nav.checklist}
                </Link>
                <button
                  type="button"
                  onClick={() => setChecklistMenuOpen(!checklistMenuOpen)}
                  aria-expanded={checklistMenuOpen}
                  aria-label="Choose checklist service"
                  className="border-l border-line px-1.5 py-1 text-[10px] text-muted hover:text-ink hover:bg-paper cursor-pointer rounded-r-md"
                >
                  ▾
                </button>
              </div>

              {checklistMenuOpen && (
                <div className="absolute right-0 mt-1.5 w-56 rounded-xl border border-line bg-surface p-1.5 shadow-lg ring-1 ring-black/5 z-50 animate-in fade-in duration-100">
                  <div className="flex items-center justify-between px-2.5 py-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-muted">
                      {t.checklist.title}
                    </p>
                    <Link
                      href="/checklist"
                      onClick={() => setChecklistMenuOpen(false)}
                      className="text-[10px] font-semibold text-accent hover:underline"
                    >
                      View all →
                    </Link>
                  </div>
                  <div className="divide-y divide-line/60">
                    {processes.map((p) => {
                      const loc = getLocalizedProcess(p, language);
                      return (
                        <Link
                          key={p.slug}
                          href={`/checklist/${p.slug}`}
                          onClick={() => setChecklistMenuOpen(false)}
                          className="flex items-center justify-between px-2.5 py-2 text-xs font-medium text-ink hover:bg-accent-soft hover:text-accent rounded-lg transition-colors"
                        >
                          <span>{loc.title}</span>
                          <span className="text-muted text-[10px]">→</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </nav>

          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar for touch accessibility */}
      <div className="sm:hidden border-t border-line/60 bg-paper/80 px-4 py-1.5 flex items-center justify-around text-xs font-medium text-muted">
        <Link href="/" className="py-1 px-2 hover:text-ink focus-visible:outline-2 focus-visible:outline-accent">
          {t.nav.services}
        </Link>
        <Link href="/checklist" className="py-1 px-2 hover:text-ink focus-visible:outline-2 focus-visible:outline-accent">
          {t.nav.checklist}
        </Link>
        <Link href="/#how-it-works" className="py-1 px-2 hover:text-ink focus-visible:outline-2 focus-visible:outline-accent">
          {t.nav.howItWorks}
        </Link>
      </div>
    </header>
  );
}
