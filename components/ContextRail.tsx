"use client";

import Link from "next/link";
import { Process, DocumentRequirement, processes } from "@/data/processes";
import { useLanguage } from "@/lib/i18n/context";
import { getLocalizedProcess, getLocalizedDocument } from "@/lib/i18n/localize";
import { useChecklist } from "@/lib/checklist";
import { ProgressBar } from "./ProgressBar";

export type RailMode = "home" | "process" | "document" | "checklist" | "legal";

interface ContextRailProps {
  mode: RailMode;
  process?: Process;
  document?: DocumentRequirement;
  activeSituationId?: string | null;
}

export function ContextRail({
  mode,
  process,
  document: currentDoc,
}: ContextRailProps) {
  const { language, t } = useLanguage();

  if (mode === "home") {
    return (
      <aside aria-label="Page context and quick navigation" className="space-y-5">
        {/* 1. Start here: 3 simple steps */}
        <div className="rounded-xl border border-line bg-surface p-4 shadow-2xs">
          <div className="flex items-center gap-1.5 mb-2.5 text-xs font-bold uppercase tracking-wider text-muted">
            <span>🚀 {t.nav.startHere}</span>
          </div>
          <ol className="space-y-2.5 text-xs">
            <li className="flex items-start gap-2">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-[11px] font-bold text-accent">
                1
              </span>
              <div>
                <strong className="text-ink font-semibold">Search or pick your kaam</strong>
                <p className="text-muted leading-tight mt-0.5">Find PAN, Passport, or Income Certificate.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-[11px] font-bold text-accent">
                2
              </span>
              <div>
                <strong className="text-ink font-semibold">Understand your kaagaz</strong>
                <p className="text-muted leading-tight mt-0.5">Learn valid formats, self-attestation, and alternatives.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-[11px] font-bold text-accent">
                3
              </span>
              <div>
                <strong className="text-ink font-semibold">Tick list & apply officially</strong>
                <p className="text-muted leading-tight mt-0.5">Track locally, then head to the verified government portal.</p>
              </div>
            </li>
          </ol>
        </div>

        {/* 2. Popular Kaam Quick Jump */}
        <div className="rounded-xl border border-line bg-surface p-4 shadow-2xs">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-muted">
              ⚡ {t.nav.quickAccess}
            </span>
          </div>
          <div className="space-y-1">
            {processes.map((p) => {
              const loc = getLocalizedProcess(p, language);
              return (
                <Link
                  key={p.slug}
                  href={`/process/${p.slug}`}
                  className="group flex items-center justify-between py-1.5 px-2 rounded-lg text-xs font-semibold text-ink hover:bg-accent-soft hover:text-accent transition-colors"
                >
                  <span className="truncate pr-2">{loc.title}</span>
                  <span className="text-muted group-hover:text-accent text-xs">→</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* 3. Official Government Portals */}
        <div className="rounded-xl border border-line bg-surface p-4 shadow-2xs">
          <div className="flex items-center gap-1.5 mb-2.5 text-xs font-bold uppercase tracking-wider text-muted">
            <span>🏛️ {t.nav.officialPortals}</span>
          </div>
          <ul className="space-y-2 text-xs">
            <li>
              <a
                href="https://www.incometax.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-1 px-1.5 rounded hover:bg-paper transition-colors"
              >
                <div>
                  <span className="font-semibold text-ink group-hover:text-accent">Income Tax e-Filing</span>
                  <span className="block text-[10px] text-muted">incometax.gov.in</span>
                </div>
                <span className="text-muted group-hover:text-accent text-xs">↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.passportindia.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-1 px-1.5 rounded hover:bg-paper transition-colors"
              >
                <div>
                  <span className="font-semibold text-ink group-hover:text-accent">Passport Seva</span>
                  <span className="block text-[10px] text-muted">passportindia.gov.in</span>
                </div>
                <span className="text-muted group-hover:text-accent text-xs">↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://aaplesarkar.mahaonline.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-1 px-1.5 rounded hover:bg-paper transition-colors"
              >
                <div>
                  <span className="font-semibold text-ink group-hover:text-accent">Aaple Sarkar</span>
                  <span className="block text-[10px] text-muted">aaplesarkar.mahaonline.gov.in</span>
                </div>
                <span className="text-muted group-hover:text-accent text-xs">↗</span>
              </a>
            </li>
          </ul>
        </div>

        {/* 4. Privacy & Trust Promise */}
        <div className="rounded-xl border border-accent/20 bg-accent-soft/30 p-3.5 text-xs leading-relaxed">
          <p className="font-bold text-accent mb-1 flex items-center gap-1">
            <span>🛡️</span>
            <span>{t.contextRail.trustGuaranteeTitle}</span>
          </p>
          <p className="text-ink/80 text-[11px]">
            {t.contextRail.trustGuaranteeDesc}
          </p>
        </div>
      </aside>
    );
  }

  if (mode === "process" && process) {
    return <ProcessRail process={process} />;
  }

  if (mode === "document" && process && currentDoc) {
    return <DocumentRail process={process} document={currentDoc} />;
  }

  if (mode === "checklist" && process) {
    return <ChecklistRail process={process} />;
  }

  if (mode === "legal") {
    return <LegalRail />;
  }

  return null;
}

// -------------------------------------------------------------
// PROCESS CONTEXT RAIL
// -------------------------------------------------------------
function ProcessRail({ process }: { process: Process }) {
  const { language, t } = useLanguage();
  const loc = getLocalizedProcess(process, language);
  const ids = process.documents.map((d) => d.id);
  const { count, total, percent } = useChecklist(process.slug, ids);

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "eligibility", label: t.process.whoCanApply },
    { id: "situations", label: t.process.situationsTitle },
    { id: "documents", label: t.process.documentsRequired },
    { id: "steps", label: t.process.stepsTitle },
    { id: "fees-timelines", label: t.process.feesTitle },
    { id: "common-mistakes", label: t.process.commonMistakesTitle },
    { id: "faqs", label: t.process.faqsTitle },
    { id: "official-source", label: t.officialSource.title },
  ];

  return (
    <aside aria-label="Process section navigation and status" className="space-y-4">
      {/* Mini Checklist status widget */}
      <div className="rounded-xl border border-line bg-surface p-4 shadow-2xs">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted">
            {t.checklist.title}
          </span>
          <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs font-bold text-accent">
            {count} / {total} {t.process.readyCount}
          </span>
        </div>

        <ProgressBar percent={percent} label={`${loc.title} checklist progress`} />

        <div className="mt-3 pt-2.5 border-t border-line/60 flex items-center justify-between">
          <span className="text-xs text-muted">
            {percent === 100 ? (
              <span className="text-done font-bold">✓ Ready to apply</span>
            ) : (
              <span>{total - count} {t.contextRail.docsRemaining}</span>
            )}
          </span>
          <Link
            href={`/checklist/${process.slug}`}
            className="text-xs font-bold text-accent hover:underline"
          >
            {t.contextRail.continueChecklist}
          </Link>
        </div>
      </div>

      {/* On This Page: TOC anchors */}
      <div className="rounded-xl border border-line bg-surface p-4 shadow-2xs">
        <p className="text-[11px] font-bold uppercase tracking-wider text-muted mb-2.5 flex items-center gap-1">
          <span>📑</span>
          <span>{t.nav.onThisPage}</span>
        </p>
        <nav aria-label="On this page navigation">
          <ul className="space-y-1 text-xs">
            {sections.map((sec) => (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  className="block py-1 px-1.5 rounded text-muted hover:text-ink hover:bg-paper transition-colors font-medium"
                >
                  {sec.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Official Source Direct Jump */}
      <div className="rounded-xl border border-line bg-surface p-4 shadow-2xs text-xs">
        <div className="flex items-center gap-1.5 text-muted font-bold uppercase tracking-wider text-[11px] mb-2">
          <span>🏛️</span>
          <span>{t.officialSource.title}</span>
        </div>
        <p className="font-semibold text-ink mb-1">{process.officialSource.name}</p>
        <p className="text-muted text-[11px] mb-3 leading-relaxed">
          {t.officialSource.lastReviewed} <strong>{process.lastChecked}</strong>
        </p>
        <a
          href={process.officialSource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[38px] w-full items-center justify-center gap-1.5 rounded-lg border border-accent/30 bg-accent-soft px-3 py-1.5 text-xs font-bold text-accent hover:bg-accent hover:text-white transition-all shadow-2xs"
        >
          <span>{process.officialSource.name}</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </aside>
  );
}

// -------------------------------------------------------------
// DOCUMENT CONTEXT RAIL
// -------------------------------------------------------------
function DocumentRail({
  process,
  document: doc,
}: {
  process: Process;
  document: DocumentRequirement;
}) {
  const { language, t } = useLanguage();
  const locProcess = getLocalizedProcess(process, language);
  const locDoc = getLocalizedDocument(doc, language);
  const ids = process.documents.map((d) => d.id);
  const { done, toggle } = useChecklist(process.slug, ids);
  const isReady = done.has(doc.id);

  return (
    <aside aria-label="Document context and readiness" className="space-y-4">
      {/* Readiness quick action */}
      <div className="rounded-xl border border-line bg-surface p-4 shadow-2xs">
        <p className="text-[11px] font-bold uppercase tracking-wider text-muted mb-2">
          Document Readiness
        </p>
        <button
          type="button"
          onClick={() => toggle(doc.id)}
          className={`w-full min-h-[42px] rounded-lg text-xs font-bold transition-all shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer ${
            isReady
              ? "border border-done bg-done-soft text-done hover:bg-done/10"
              : "border border-accent bg-accent text-white hover:bg-accent-hover"
          }`}
        >
          {isReady ? "✓ Ready (tap to unmark)" : `+ ${t.document.markReady}`}
        </button>

        <div className="mt-3 pt-2.5 border-t border-line/60 flex items-center justify-between text-xs">
          <Link
            href={`/checklist/${process.slug}`}
            className="text-muted hover:text-accent font-medium underline underline-offset-2"
          >
            {t.process.openChecklist} →
          </Link>
          <Link
            href={`/process/${process.slug}`}
            className="text-muted hover:text-ink font-medium"
          >
            {locProcess.title}
          </Link>
        </div>
      </div>

      {/* Quick Metadata At A Glance */}
      {locDoc.formatAndPrep && (
        <div className="rounded-xl border border-line bg-surface p-4 shadow-2xs text-xs space-y-2.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-muted">
            Format Snapshot
          </p>
          <div className="border-b border-line/60 pb-2">
            <span className="text-muted text-[10px] uppercase font-bold block">Submission</span>
            <span className="font-semibold text-ink">{locDoc.formatAndPrep.submission}</span>
          </div>
          <div className="border-b border-line/60 pb-2">
            <span className="text-muted text-[10px] uppercase font-bold block">Attestation</span>
            <span className="font-semibold text-ink">{locDoc.formatAndPrep.selfAttestation}</span>
          </div>
          {locDoc.formatAndPrep.validityOrRecentness && (
            <div>
              <span className="text-muted text-[10px] uppercase font-bold block">Validity</span>
              <span className="font-semibold text-ink">{locDoc.formatAndPrep.validityOrRecentness}</span>
            </div>
          )}
        </div>
      )}

      {/* Other Documents in this service */}
      <div className="rounded-xl border border-line bg-surface p-4 shadow-2xs text-xs">
        <p className="text-[11px] font-bold uppercase tracking-wider text-muted mb-2">
          All {locProcess.title} Docs
        </p>
        <ul className="space-y-1">
          {process.documents.map((d) => {
            const isCurrent = d.id === doc.id;
            const checked = done.has(d.id);
            const dLoc = getLocalizedDocument(d, language);
            return (
              <li key={d.id}>
                <Link
                  href={`/process/${process.slug}/document/${d.id}`}
                  className={`flex items-center justify-between py-1 px-1.5 rounded transition-colors ${
                    isCurrent
                      ? "bg-accent-soft text-accent font-bold"
                      : "text-muted hover:text-ink hover:bg-paper"
                  }`}
                >
                  <span className="truncate pr-2">{dLoc.name}</span>
                  <span className="shrink-0 text-[11px]">
                    {checked ? "✓" : isCurrent ? "●" : "○"}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

// -------------------------------------------------------------
// CHECKLIST CONTEXT RAIL
// -------------------------------------------------------------
function ChecklistRail({ process }: { process: Process }) {
  const { language, t } = useLanguage();
  const loc = getLocalizedProcess(process, language);
  const ids = process.documents.map((d) => d.id);
  const { done, count, total, percent } = useChecklist(process.slug, ids);

  return (
    <aside aria-label="Checklist progress and actions" className="space-y-4">
      <div className="rounded-xl border border-line bg-surface p-4 shadow-2xs">
        <p className="text-[11px] font-bold uppercase tracking-wider text-muted mb-1">
          Your Process
        </p>
        <h3 className="font-bold text-ink text-base mb-2">{loc.title}</h3>
        <ProgressBar percent={percent} label={`${loc.title} checklist progress`} />
        <p className="mt-2 text-xs font-semibold text-muted">
          {count} of {total} documents ready ({percent}%)
        </p>

        {percent === 100 ? (
          <div className="mt-4 pt-3 border-t border-line">
            <a
              href={process.officialSource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] w-full items-center justify-center gap-1.5 rounded-xl bg-accent px-4 text-xs font-bold text-white shadow-xs hover:bg-accent-hover transition-colors"
            >
              <span>{t.contextRail.openOfficialPortal}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        ) : (
          <div className="mt-4 pt-3 border-t border-line">
            <Link
              href={`/process/${process.slug}`}
              className="inline-flex min-h-[38px] w-full items-center justify-center rounded-lg border border-line bg-surface px-3 text-xs font-semibold text-ink hover:bg-paper transition-colors"
            >
              ← Back to process guide
            </Link>
          </div>
        )}
      </div>

      {/* Unticked Kaagaz Quick Jump */}
      {count < total && (
        <div className="rounded-xl border border-line bg-surface p-4 shadow-2xs text-xs">
          <p className="text-[11px] font-bold uppercase tracking-wider text-muted mb-2">
            Remaining Kaagaz
          </p>
          <ul className="space-y-1.5">
            {process.documents
              .filter((d) => !done.has(d.id))
              .map((d) => {
                const dLoc = getLocalizedDocument(d, language);
                return (
                  <li key={d.id}>
                    <Link
                      href={`/process/${process.slug}/document/${d.id}`}
                      className="group flex items-center justify-between py-1 px-1.5 rounded hover:bg-accent-soft hover:text-accent text-ink transition-colors font-medium"
                    >
                      <span className="truncate pr-1.5">{dLoc.name}</span>
                      <span className="text-accent text-xs">Explain →</span>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      )}

      {/* Privacy notice */}
      <div className="rounded-xl border border-accent/20 bg-accent-soft/30 p-3 text-[11px] text-ink/80 leading-relaxed">
        🔒 {t.checklist.savedLocallyNotice}
      </div>
    </aside>
  );
}

// -------------------------------------------------------------
// LEGAL CONTEXT RAIL
// -------------------------------------------------------------
function LegalRail() {
  const { t } = useLanguage();

  const legalLinks = [
    { href: "/privacy", label: t.legal.privacyTitle },
    { href: "/cookies", label: t.legal.cookiesTitle },
    { href: "/terms", label: t.legal.termsTitle },
    { href: "/security", label: t.legal.securityTitle },
    { href: "/accessibility", label: t.legal.accessibilityTitle },
    { href: "/disclaimer", label: t.legal.disclaimerTitle },
    { href: "/.well-known/security.txt", label: "security.txt" },
  ];

  return (
    <aside aria-label="Legal and trust policies directory" className="space-y-4">
      <div className="rounded-xl border border-line bg-surface p-4 shadow-2xs">
        <p className="text-[11px] font-bold uppercase tracking-wider text-muted mb-2.5">
          Trust & Legal Directory
        </p>
        <ul className="space-y-1 text-xs">
          {legalLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block py-1.5 px-2 rounded font-medium text-ink hover:bg-accent-soft hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-line bg-paper p-3 text-xs text-muted leading-relaxed">
        <p className="font-bold text-ink mb-1">🏛️ Independent Civic Utility</p>
        <p>{t.legal.independentNotice}</p>
      </div>
    </aside>
  );
}
