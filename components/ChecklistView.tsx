"use client";

import Link from "next/link";
import { Process } from "@/data/processes";
import { useLanguage } from "@/lib/i18n/context";
import { getLocalizedProcess } from "@/lib/i18n/localize";
import { Checklist } from "./Checklist";
import { Breadcrumb } from "./Breadcrumb";
import { ContextRail } from "./ContextRail";

export function ChecklistView({ process }: { process: Process }) {
  const { language, t } = useLanguage();
  const loc = getLocalizedProcess(process, language);

  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
      {/* Main Working Area */}
      <div className="min-w-0 flex-1 lg:max-w-3xl space-y-6">
        <Breadcrumb
          items={[
            { label: t.nav.services, href: "/#services" },
            { label: loc.title, href: `/process/${process.slug}` },
            { label: t.checklist.title, isCurrent: true },
          ]}
        />

        <header>
          <span className="inline-block rounded-md bg-paper px-2.5 py-1 text-xs font-semibold tracking-wide text-muted border border-line/60">
            {t.checklist.title}
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            {loc.title}
          </h1>
          <p className="mt-2 text-sm text-muted">
            {t.checklist.savedLocallyNotice}
          </p>
        </header>

        <Checklist process={process} />
      </div>

      {/* Contextual Side Rail */}
      <div className="mt-12 lg:mt-0 w-full lg:w-80 shrink-0 lg:sticky lg:top-24">
        <ContextRail mode="checklist" process={process} />
      </div>
    </div>
  );
}
