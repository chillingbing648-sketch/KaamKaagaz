import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy · KaamKaagaz",
  description: "Learn how KaamKaagaz respects your privacy with zero document storage and private local checklist state.",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="How KaamKaagaz preserves citizen privacy and stores zero document data."
      lastUpdated="30 September 2026"
    >
      <div className="rounded-lg border border-accent/25 bg-accent-soft/40 p-4">
        <p className="font-bold text-accent">Summary in simple words:</p>
        <p className="mt-1 text-xs sm:text-sm text-ink/90">
          KaamKaagaz does not collect, ask for, or store your Aadhaar, PAN number, passport, salary slip, or any identity document. Your checklists and language settings are saved exclusively on your own browser.
        </p>
      </div>

      <section>
        <h2 className="text-base sm:text-lg font-bold text-ink mb-1.5">1. Information We Do Not Collect</h2>
        <p className="text-muted">
          We never request or store sensitive personal documents. You do not need to create an account, provide an email address, or enter personal identification numbers to use KaamKaagaz.
        </p>
      </section>

      <section>
        <h2 className="text-base sm:text-lg font-bold text-ink mb-1.5">2. Client-Side Local Storage</h2>
        <p className="text-muted">
          To provide a convenient checklist experience, your document readiness ticks and selected language preference are stored locally on your device via standard browser <code className="bg-paper px-1.5 py-0.5 rounded text-xs font-mono text-ink border border-line/60">localStorage</code>. This data never leaves your device and is never transmitted to our servers.
        </p>
      </section>

      <section>
        <h2 className="text-base sm:text-lg font-bold text-ink mb-1.5">3. External Government Links</h2>
        <p className="text-muted">
          When you click official links (such as to <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline font-medium">incometax.gov.in</a>, <a href="https://www.passportindia.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline font-medium">passportindia.gov.in</a>, or <a href="https://aaplesarkar.mahaonline.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent underline font-medium">aaplesarkar.mahaonline.gov.in</a>), you leave KaamKaagaz and interact directly with those official government portals under their respective privacy policies.
        </p>
      </section>

      <section>
        <h2 className="text-base sm:text-lg font-bold text-ink mb-1.5">4. Contact & Inquiries</h2>
        <p className="text-muted">
          For privacy inquiries or technical questions regarding this open civic utility, contact <a href="mailto:privacy@kaamkaagaz.org" className="text-accent underline font-medium">privacy@kaamkaagaz.org</a>.
        </p>
      </section>
    </LegalPageLayout>
  );
}
