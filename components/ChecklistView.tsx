"use client";

import Link from "next/link";
import { Process } from "@/data/processes";
import { useLanguage } from "@/lib/i18n/context";
import { getLocalizedProcess } from "@/lib/i18n/localize";
import { Checklist } from "./Checklist";

export function ChecklistView({ process }: { process: Process }) {
  const { language, t } = useLanguage();
  const loc = getLocalizedProcess(process, language);

  return (
    <div>
      <div className="mb-6">
        <Link
          href={`/process/${process.slug}`}
          className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-accent hover:underline underline-offset-4"
        >
          <span aria-hidden="true">←</span>
          <span>
            {t.document.backTo} {loc.title}
          </span>
        </Link>
      </div>

      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-muted">
          {t.checklist.title}
        </span>
        <h1 className="mt-1 text-3xl sm:text-4xl font-black tracking-tight text-ink">
          {loc.title}
        </h1>
      </div>

      <Checklist process={process} />
    </div>
  );
}
