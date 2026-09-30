import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Use · KaamKaagaz",
  description: "Terms and conditions for using the KaamKaagaz civic-tech navigation guide.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Use"
      subtitle="Public usage terms and civic guidance charter."
      lastUpdated="30 September 2026"
    >
      <section>
        <h2 className="text-base sm:text-lg font-bold text-ink mb-1.5">1. Purpose of KaamKaagaz</h2>
        <p className="text-muted">
          KaamKaagaz is an independent civic-tech navigation utility designed to help citizens understand paperwork requirements in plain language. KaamKaagaz is NOT an agent, middleman, or broker, and does not process applications on behalf of citizens.
        </p>
      </section>

      <section>
        <h2 className="text-base sm:text-lg font-bold text-ink mb-1.5">2. Informational & Educational Scope</h2>
        <p className="text-muted">
          All document checklists, format descriptions, fees, and timelines are compiled from public official guidelines. While we diligently verify requirements, government rules, circulars, and portal interfaces may change without notice. Users are required to confirm final requirements directly on official government portals before submitting applications or paying statutory fees.
        </p>
      </section>

      <section>
        <h2 className="text-base sm:text-lg font-bold text-ink mb-1.5">3. No Commercial Fees</h2>
        <p className="text-muted">
          KaamKaagaz is free to use. We do not charge fees, accept payments, or offer expedited processing. Any government fee stated on this platform is strictly the official statutory charge payable directly on the authorized government website.
        </p>
      </section>

      <section>
        <h2 className="text-base sm:text-lg font-bold text-ink mb-1.5">4. Limitation of Liability</h2>
        <p className="text-muted">
          KaamKaagaz and its contributors shall not be held liable for delayed or rejected applications, administrative decisions of issuing authorities, or errors on external government sites.
        </p>
      </section>
    </LegalPageLayout>
  );
}
