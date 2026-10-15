"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage, LANGUAGES } from "@/lib/i18n/context";
import { Language } from "@/lib/i18n/types";

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const currentOption = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        id="language-menu-button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t.nav.selectLanguage}
        onClick={() => setIsOpen(!isOpen)}
        className="flex min-h-[36px] items-center gap-1.5 rounded-full border border-black/[0.06] bg-black/[0.03] hover:bg-black/[0.06] px-3 py-1 text-xs font-semibold text-ink shadow-[0_1px_2px_rgba(0,0,0,0.02)] focus-visible:outline-2 focus-visible:outline-accent active:scale-[0.97] transition-all cursor-pointer"
      >
        <span className="text-sm leading-none" aria-hidden="true">🌐</span>
        <span className="font-medium tracking-tight">
          {language === "en" ? "English" : currentOption.nativeLabel}
        </span>
        <svg
          aria-hidden="true"
          className={`size-3 transition-transform duration-200 text-muted ${isOpen ? "rotate-180 text-accent" : ""}`}
          viewBox="0 0 12 12"
          fill="none"
        >
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-labelledby="language-menu-button"
          className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-2xl border border-black/[0.06] bg-white/95 backdrop-blur-xl p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.12)] animate-in fade-in zoom-in-95 duration-150"
        >
          {LANGUAGES.map((lang) => {
            const isSelected = lang.code === language;
            return (
              <button
                key={lang.code}
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(lang.code)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-accent-soft text-accent font-semibold"
                    : "text-ink hover:bg-black/[0.04]"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className={isSelected ? "font-bold text-accent" : "text-ink"}>
                    {lang.nativeLabel}
                  </span>
                  {lang.code !== "en" && (
                    <span className="text-[11px] text-muted">({lang.label})</span>
                  )}
                </span>
                {isSelected && (
                  <svg
                    aria-hidden="true"
                    className="size-3.5 text-accent shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
