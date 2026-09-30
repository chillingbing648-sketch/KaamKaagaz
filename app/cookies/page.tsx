import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Cookie Policy · KaamKaagaz",
  description: "Explanation of client-side storage mechanisms used by KaamKaagaz.",
};

export default function CookiesPage() {
  return (
    <LegalPageLayout
      title="Cookie & Storage Policy"
      subtitle="Complete transparency on local storage and browser state."
      lastUpdated="30 September 2026"
    >
      <section>
        <h2 className="text-base sm:text-lg font-bold text-ink mb-1.5">No Tracking or Third-Party Cookies</h2>
        <p className="text-muted">
          KaamKaagaz does not use tracking cookies, commercial analytics beacons, or third-party advertising cookies.
        </p>
      </section>

      <section>
        <h2 className="text-base sm:text-lg font-bold text-ink mb-1.5">Local Storage Keys Used</h2>
        <p className="text-muted">
          We use standard web storage (<code className="bg-paper px-1.5 py-0.5 rounded text-xs font-mono text-ink border border-line/60">localStorage</code>) solely to preserve your functional choices on your own device:
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-2 text-muted text-xs sm:text-sm">
          <li>
            <code className="bg-paper px-1 rounded font-mono text-ink border border-line/60">kaamkaagaz:language</code>: Remembers your preferred interface language (English, Hindi, or Marathi).
          </li>
          <li>
            <code className="bg-paper px-1 rounded font-mono text-ink border border-line/60">kaamkaagaz:checklist:v1</code>: Saves which documents you have checked off as ready.
          </li>
        </ul>
      </section>
    </LegalPageLayout>
  );
}
