"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { Process } from "@/data/processes";
import { ProcessCard } from "./ProcessCard";
import { getLocalizedProcess } from "@/lib/i18n/localize";

// Common natural conversational filler words in Hindi, Marathi, and English
const STOP_WORDS = new Set([
  "mujhe", "mera", "meri", "humko", "karna", "kare", "hai", "banana", "banao", "chahiye",
  "karo", "ka", "ki", "ke", "ko", "se", "me", "mein", "par",
  "mala", "majha", "majhi", "amhi", "karaycha", "aahe", "kadha", "kadhaycha", "hawa", "pahije", "kay", "kase",
  "i", "want", "to", "make", "get", "need", "apply", "for", "a", "an", "the", "how", "do",
  "मुझे", "करना", "है", "बनवाना", "बनाना", "चाहिए", "का", "की", "के", "में", "से",
  "मला", "करायचे", "आहे", "काढायचे", "काढायचा", "पाहिजे", "हवा", "कसा", "करावा"
]);

function matches(item: Process, q: string) {
  const queryLower = q.toLowerCase().trim();
  if (!queryLower) return true;

  // Extract core keywords from query by removing conversational stopwords
  const rawWords = queryLower.split(/[\s,]+/);
  const filteredWords = rawWords.filter((w) => !STOP_WORDS.has(w));
  const searchWords = filteredWords.length > 0 ? filteredWords : rawWords;

  // Build searchable text haystack from all localized fields and keywords
  const haystack = [
    item.title,
    item.category,
    item.description,
    item.localizedTitle?.en,
    item.localizedTitle?.hi,
    item.localizedTitle?.mr,
    item.localizedCategory?.en,
    item.localizedCategory?.hi,
    item.localizedCategory?.mr,
    item.localizedDescription?.en,
    item.localizedDescription?.hi,
    item.localizedDescription?.mr,
    ...(item.keywords || []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return searchWords.some((word) => haystack.includes(word));
}

const ADMISSIONS_KEYWORDS = [
  "admission", "admissions", "student", "students", "college", "fyjc", "11th", "cet", "mht-cet", "cap", "mba", "mca",
  "engineering", "pharmacy", "bba", "bms", "bca", "mumbai university", "mu", "samarth", "cdoe", "idol", "phd", "pet",
  "scholarship", "mahadbt", "freeship", "caste validity", "apaar", "abc id", "gap certificate",
  "प्रवेश", "एडमिशन", "कॉलेज", "11वीं", "सीईटी", "कैप", "छात्र", "विद्यार्थी", "स्कॉलरशिप", "दाखिला"
];

function matchesAdmissions(q: string): boolean {
  const queryLower = q.toLowerCase().trim();
  if (!queryLower) return true;
  const rawWords = queryLower.split(/[\s,]+/);
  return rawWords.some((word) =>
    ADMISSIONS_KEYWORDS.some((kw) => kw.includes(word) || word.includes(kw))
  );
}

export function HomeSearch({
  items,
  midSection,
  selectedCategory,
  onSelectCategory,
}: {
  items: Process[];
  midSection?: React.ReactNode;
  selectedCategory?: string | null;
  onSelectCategory?: (category: string | null) => void;
}) {
  const [query, setQuery] = useState("");
  const [internalCategory, setInternalCategory] = useState<string | null>(null);
  const inputId = useId();
  const { language, t } = useLanguage();
  const q = query.trim();

  const activeCategory = selectedCategory !== undefined ? selectedCategory : internalCategory;
  const setActiveCategory = onSelectCategory || setInternalCategory;

  // Filter items by category if one is active
  const categoryFilteredItems = items.filter((p) => {
    if (!activeCategory || activeCategory === "all") return true;
    const catLower = p.category.toLowerCase();
    if (activeCategory === "identity") return catLower.includes("identity") || catLower.includes("tax") || catLower.includes("travel");
    if (activeCategory === "certificates") return catLower.includes("certificate") || catLower.includes("vital") || catLower.includes("record") || catLower.includes("residence");
    if (activeCategory === "education") return catLower.includes("education") || catLower.includes("academic");
    return true;
  });

  const results = q ? categoryFilteredItems.filter((i) => matches(i, q)) : categoryFilteredItems;
  const showAdmissions = (
    (!activeCategory || activeCategory === "all" || activeCategory === "education") &&
    (matchesAdmissions(q) || activeCategory === "education" || !q)
  );

  const categoryTabs = [
    { id: "all", label: t.home?.allKaam || "All kaam", count: items.length },
    { id: "identity", label: t.home?.categoryIdentity || "Identity", count: items.filter((p) => p.category.toLowerCase().includes("identity") || p.category.toLowerCase().includes("tax") || p.category.toLowerCase().includes("travel")).length },
    { id: "certificates", label: t.home?.categoryCertificates || "Certificates", count: items.filter((p) => p.category.toLowerCase().includes("certificate") || p.category.toLowerCase().includes("vital") || p.category.toLowerCase().includes("record") || p.category.toLowerCase().includes("residence")).length },
    { id: "education", label: t.home?.categoryEducation || "Education", count: items.filter((p) => p.category.toLowerCase().includes("education") || p.category.toLowerCase().includes("academic")).length },
  ];

  return (
    <div className="space-y-8">
      {/* 1. Popular Kaam quick pills */}
      <div className="rounded-2xl border border-black/[0.06] bg-white p-4 sm:p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted">
            {t.home.popularKaam}
          </span>
          {(query || (activeCategory && activeCategory !== "all")) && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveCategory(null);
              }}
              className="text-xs font-semibold text-accent hover:underline cursor-pointer"
            >
              {t.home?.resetFilter || "Reset filter"}
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {items.map((process) => {
            const loc = getLocalizedProcess(process, language);
            const isSelected = query.toLowerCase() === process.title.toLowerCase();
            return (
              <button
                key={process.slug}
                type="button"
                onClick={() => setQuery(isSelected ? "" : process.title)}
                className={`inline-flex min-h-[38px] items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-150 ease-out cursor-pointer active:scale-[0.95] ${
                  isSelected
                    ? "bg-accent text-white shadow-xs font-bold -translate-y-0.5"
                    : "border border-black/[0.08] bg-black/[0.02] text-ink hover:bg-black/[0.06] hover:border-black/[0.16] hover:-translate-y-0.5"
                }`}
              >
                {loc.title}
              </button>
            );
          })}

          {/* Student Admissions Major Kaam Pill */}
          <Link
            href="/admissions/"
            className="inline-flex min-h-[38px] items-center gap-1.5 rounded-full border border-accent/30 bg-accent-soft px-4 py-1.5 text-xs sm:text-sm font-bold text-accent hover:bg-accent hover:text-white shadow-xs transition-all duration-150 ease-out active:scale-[0.95] hover:-translate-y-0.5"
          >
            <span>{t.home?.categoryAdmissions || "Student Admissions"}</span>
            <span aria-hidden="true" className="text-xs">→</span>
          </Link>
        </div>
      </div>

      {/* 2. Spotlight Search Input & Category Filters */}
      <div id="search-section" className="scroll-mt-24 space-y-4">
        {/* Category Navigation Tabs */}
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
              {t.home?.filterByCategory || "Filter by category"}
            </span>
            {activeCategory && activeCategory !== "all" && (
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className="text-xs font-semibold text-accent hover:underline cursor-pointer"
              >
                {t.home?.resetFilter || "Reset filter"}
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {categoryTabs.map((tab) => {
              const isSelected = (!activeCategory && tab.id === "all") || activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id === "all" ? null : tab.id)}
                  className={`inline-flex min-h-[38px] items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-150 ease-out cursor-pointer active:scale-[0.95] ${
                    isSelected
                      ? "bg-ink text-white shadow-xs font-bold -translate-y-0.5"
                      : "border border-black/[0.08] bg-white text-ink hover:bg-black/[0.04] hover:border-black/[0.16] hover:-translate-y-0.5"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] rounded-full px-2 py-0.5 font-bold ${isSelected ? "bg-white/20 text-white" : "bg-black/[0.06] text-ink/70"}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Spotlight Search Input */}
        <div className="relative pt-1">
          <label htmlFor={inputId} className="block text-sm sm:text-base font-bold text-ink mb-2 tracking-tight">
            {t.home.heroQuestion}
          </label>
          <div className="relative flex items-center">
            <div className="pointer-events-none absolute left-4 text-muted">
              <svg
                aria-hidden="true"
                className="size-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              id={inputId}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.home.searchPlaceholder}
              autoComplete="off"
              className="h-13 w-full rounded-2xl border border-black/[0.08] bg-white pl-12 pr-12 text-sm sm:text-base text-ink shadow-[0_2px_8px_rgba(0,0,0,0.03)] placeholder:text-muted/60 transition-all focus:border-accent focus:ring-4 focus:ring-accent/15 focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3.5 flex size-7 items-center justify-center rounded-full text-muted hover:bg-black/[0.05] hover:text-ink transition-colors cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* How It Works Quick Preview Card */}
        <div className="rounded-2xl border border-black/[0.06] bg-gradient-to-r from-white via-white to-accent-soft/30 p-5 sm:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="flex size-6 items-center justify-center rounded-lg bg-accent text-white text-xs font-bold">
                ✓
              </span>
              <h3 className="text-base font-bold text-ink">
                {t.howItWorks.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {t.howItWorks.subtitle}
            </p>
          </div>
          <Link
            href="/how-it-works/"
            className="apple-btn-secondary !rounded-full px-4 py-2 text-xs font-semibold shrink-0 flex items-center justify-center gap-1 shadow-xs"
          >
            <span>{t.common.exploreMore}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Optional Mid-section if passed */}
        {midSection && (
          <div className="scroll-mt-24">
            {midSection}
          </div>
        )}

        {/* Results Header & List */}
        <div className="mt-8 border-t border-black/[0.06] pt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
              {q
                ? `${t.home.results} (${results.length + (showAdmissions ? 1 : 0)})`
                : t.home.popularServices}
            </h2>
            {q && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="text-xs font-semibold text-accent hover:underline cursor-pointer"
              >
                {t.home.showAllServices}
              </button>
            )}
          </div>

          <div aria-live="polite">
            {results.length > 0 || showAdmissions ? (
              <div className="space-y-4">
                {/* If query or empty, show matching standard services */}
                {results.length > 0 && (
                  <ul className="space-y-3">
                    {results.map((p) => (
                      <li key={p.slug}>
                        <ProcessCard process={p} />
                      </li>
                    ))}
                  </ul>
                )}

                {/* Major Student Admissions Card */}
                {showAdmissions && (
                  <div id="admissions-section" className="pt-2">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                      <span>{t.nav.admissions}</span>
                    </div>
                    <Link
                      href="/admissions/"
                      className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-accent/25 bg-gradient-to-br from-accent-soft/40 via-white to-white p-5 sm:p-6 shadow-[0_2px_12px_rgba(198,78,22,0.06)] transition-all duration-200 hover:border-accent hover:shadow-[0_8px_24px_rgba(198,78,22,0.1)] hover:-translate-y-0.5 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-accent"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="inline-block rounded-md bg-accent text-white px-2 py-0.5 text-[10px] font-bold tracking-wide">
                            {t.home.categoryAdmissions}
                          </span>
                          <span className="text-[11px] font-semibold text-accent bg-accent-soft px-2 py-0.5 rounded-full border border-accent/20">
                            AY 2026–27
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-ink group-hover:text-accent transition-colors tracking-tight">
                          {t.admissionsHub.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">
                          {t.admissionsHub.subtitle}
                        </p>
                      </div>

                      <div className="flex items-center sm:self-center shrink-0">
                        <span className="inline-flex min-h-[42px] items-center gap-1.5 rounded-full bg-accent text-white px-5 py-2 text-xs sm:text-sm font-semibold shadow-xs group-hover:bg-accent-hover transition-colors">
                          <span>{t.common.explore}</span>
                          <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-2xl border border-black/[0.06] bg-white p-8 text-center shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
                <span className="text-3xl" aria-hidden="true">🔍</span>
                <p className="mt-3 font-bold text-ink text-base">
                  {t.home.noResults} “{q}”
                </p>
                <p className="mt-1.5 text-xs sm:text-sm text-muted max-w-md mx-auto leading-relaxed">
                  {t.home.noResultsHint}
                </p>
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="mt-5 inline-flex min-h-10 items-center rounded-full bg-black/[0.04] hover:bg-black/[0.08] px-5 py-2 text-xs sm:text-sm font-semibold text-ink transition-colors cursor-pointer"
                >
                  {t.home.showAllServices}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
