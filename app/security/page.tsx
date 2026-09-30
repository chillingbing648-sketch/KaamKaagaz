import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Security Policy · KaamKaagaz",
  description: "Security architecture, client-side zero-storage principles, and responsible disclosure policy.",
};

export default function SecurityPage() {
  return (
    <LegalPageLayout
      title="Security Policy"
      subtitle="Security architecture, client-side zero-storage principles, and responsible disclosure policy."
      lastUpdated="30 September 2026"
    >
      <section>
        <h2 className="text-base sm:text-lg font-bold text-ink mb-1.5">1. Zero-PII by Design</h2>
        <p className="text-muted">
          The most secure personal data is data that is never collected. KaamKaagaz does not provide cloud document uploads, file storage, user authentication, or backend databases. No identity proofs or application numbers ever leave your device.
        </p>
      </section>

      <section>
        <h2 className="text-base sm:text-lg font-bold text-ink mb-1.5">2. Client-Side Integrity</h2>
        <p className="text-muted">
          All checklist interactions run locally in your web browser. Checklists are stored in your device&apos;s localStorage (<code className="bg-paper px-1.5 py-0.5 rounded text-xs font-mono text-ink border border-line/60">kaamkaagaz:checklist:v1</code>) and are not accessible across origins.
        </p>
      </section>

      <section>
        <h2 className="text-base sm:text-lg font-bold text-ink mb-1.5">3. Responsible Vulnerability Disclosure</h2>
        <p className="text-muted">
          We welcome constructive reports from security researchers and developers. If you identify a security issue, please contact our security team at <a href="mailto:security@kaamkaagaz.org" className="text-accent underline font-medium">security@kaamkaagaz.org</a>. Refer to our <Link href="/.well-known/security.txt" className="text-accent underline font-medium">security.txt</Link> for details.
        </p>
      </section>
    </LegalPageLayout>
  );
}
