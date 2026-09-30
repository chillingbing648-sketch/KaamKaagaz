import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Civic Disclaimer · KaamKaagaz",
  description: "Official non-affiliation notice and civic disclaimer for KaamKaagaz.",
};

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Civic Disclaimer"
      subtitle="Official non-affiliation notice and citizen protection advisory."
      lastUpdated="30 September 2026"
    >
      <div className="rounded-xl border-2 border-warning-line bg-warning-soft/70 p-4 text-warning">
        <p className="font-bold text-sm sm:text-base">⚠️ Crucial Non-Affiliation Notice:</p>
        <p className="mt-1 text-xs sm:text-sm font-medium leading-relaxed">
          KaamKaagaz is an independent civic information platform. We are NOT a government portal, NOT an official agency, and NOT associated with the Government of India, the Ministry of External Affairs, the Income Tax Department, the Government of Maharashtra, or any other government authority.
        </p>
      </div>

      <section>
        <h2 className="text-base sm:text-lg font-bold text-ink mb-1.5">Official Source Precedence</h2>
        <p className="text-muted">
          The explanations, document checklists, and preparation guidance provided on KaamKaagaz are written in plain language solely to assist citizens in preparing their applications. In case of any discrepancy or ambiguity, the rules, notifications, and requirements published on official portals (e.g. <code className="bg-paper px-1.5 py-0.5 rounded text-xs font-mono text-ink border border-line/60">passportindia.gov.in</code>, <code className="bg-paper px-1.5 py-0.5 rounded text-xs font-mono text-ink border border-line/60">incometax.gov.in</code>, <code className="bg-paper px-1.5 py-0.5 rounded text-xs font-mono text-ink border border-line/60">aaplesarkar.mahaonline.gov.in</code>) always take precedence.
        </p>
      </section>

      <section>
        <h2 className="text-base sm:text-lg font-bold text-ink mb-1.5">Anti-Fraud Advisory</h2>
        <p className="text-muted">
          Never pay money to unauthorized agents, intermediaries, or unofficial third-party websites claiming to expedite government documents. All statutory fees should only be paid through official government payment gateways.
        </p>
      </section>
    </LegalPageLayout>
  );
}
