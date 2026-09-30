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

  // If any meaningful keyword from user's sentence matches the haystack
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

export function HomeSearch({ items }: { items: Process[] }) {
  const [query, setQuery] = useState("");
  const inputId = useId();
  const { language, t } = useLanguage();
  const q = query.trim();

  const results = q ? items.filter((i) => matches(i, q)) : items;
  const showAdmissions = matchesAdmissions(q);

  return (
    <div>
      <div className="relative">
        <label htmlFor={inputId} className="block text-base sm:text-lg font-bold text-ink mb-2">
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
            className="h-14 w-full rounded-xl border border-line bg-surface pl-12 pr-10 text-base sm:text-lg text-ink shadow-2xs placeholder:text-muted/70 transition-all focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3.5 flex size-8 items-center justify-center rounded-full text-muted hover:bg-paper hover:text-ink transition-colors cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Popular Kaam quick pills */}
      <div className="mt-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted mb-2">
          <span>⚡ {t.home.popularKaam}</span>
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
                className={`inline-flex min-h-[44px] items-center rounded-lg border px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "border-accent bg-accent text-white shadow-xs font-bold"
                    : "border-line bg-surface text-ink hover:border-accent hover:bg-accent-soft hover:text-accent shadow-2xs"
                }`}
              >
                {loc.title}
              </button>
            );
          })}

          {/* Student Admissions Major Kaam Pill */}
          <Link
            href="/admissions"
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border-2 border-accent/40 bg-accent-soft px-4 py-2 text-xs sm:text-sm font-bold text-accent hover:border-accent hover:bg-accent hover:text-white shadow-2xs transition-all"
          >
            <span>🎓 Student Admissions</span>
            <span aria-hidden="true" className="text-xs">→</span>
          </Link>
        </div>
      </div>

      {/* Results Header & List */}
      <div className="mt-8 border-t border-line/70 pt-6">
        <div className="flex items-center justify-between mb-3.5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted">
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
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-muted mb-2">
                    <span>🎓 Higher Education & Admissions Ecosystem</span>
                  </div>
                  <Link
                    href="/admissions"
                    className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border-2 border-accent/40 bg-accent-soft/25 p-4 sm:p-5 shadow-2xs transition-all hover:border-accent hover:bg-accent-soft/50 hover:shadow-xs focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="inline-block rounded-md bg-accent text-white px-2 py-0.5 text-[10px] font-black uppercase tracking-wider">
                          🎓 MAJOR KAAM
                        </span>
                        <span className="text-[11px] font-bold text-accent bg-surface px-2 py-0.5 rounded border border-accent/20">
                          AY 2026–27
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-ink group-hover:text-accent transition-colors">
                        Student Admissions
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-ink/80 leading-relaxed">
                        Find the right portal (FYJC, CET Cell CAP, Mumbai University Samarth, CDOE, PhD) · Step-by-Step Roadmaps · Documents & “Do I Need This?” Helper · MahaDBT Scholarships
                      </p>
                    </div>

                    <div className="flex items-center sm:self-center shrink-0">
                      <span className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl bg-accent text-white px-4 py-2 text-xs sm:text-sm font-bold shadow-xs group-hover:bg-accent-hover transition-colors">
                        <span>Enter Admissions</span>
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-xl border border-line bg-surface p-6 text-center shadow-2xs">
              <span className="text-3xl">🔍</span>
              <p className="mt-2 font-bold text-ink">
                {t.home.noResults} “{q}”
              </p>
              <p className="mt-1 text-xs sm:text-sm text-muted max-w-md mx-auto leading-relaxed">
                {t.home.noResultsHint}
              </p>
              <button
                type="button"
                onClick={() => setQuery("")}
                className="mt-4 inline-flex min-h-10 items-center rounded-lg border border-line bg-surface px-4 py-2 text-xs sm:text-sm font-bold text-accent hover:bg-accent-soft transition-colors cursor-pointer"
              >
                {t.home.showAllServices}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
