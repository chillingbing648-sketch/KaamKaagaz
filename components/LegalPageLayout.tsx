"use client";

import { ReactNode } from "react";
import { Breadcrumb } from "./Breadcrumb";
import { ContextRail } from "./ContextRail";

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  children: ReactNode;
}

export function LegalPageLayout({
  title,
  subtitle,
  lastUpdated = "30 September 2026",
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
      {/* Main Working Area */}
      <article className="min-w-0 flex-1 lg:max-w-3xl space-y-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Trust & Legal", href: "/legal" },
            { label: title, isCurrent: true },
          ]}
        />

        <header>
          <span className="inline-block rounded-md bg-paper px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-muted border border-line/60">
            Civic Trust & Standards
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-black text-ink">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 text-base text-muted">{subtitle}</p>
          )}
          <p className="mt-1 text-xs text-muted">Last updated: {lastUpdated}</p>
        </header>

        <div className="rounded-xl border border-line bg-surface p-5 sm:p-6 shadow-2xs space-y-5 text-sm text-ink leading-relaxed">
          {children}
        </div>
      </article>

      {/* Contextual Side Rail */}
      <div className="mt-12 lg:mt-0 w-full lg:w-80 shrink-0 lg:sticky lg:top-24">
        <ContextRail mode="legal" />
      </div>
    </div>
  );
}
