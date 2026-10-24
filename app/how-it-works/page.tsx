import type { Metadata } from "next";
import { HowItWorksHub } from "@/components/HowItWorksHub";

export const metadata: Metadata = {
  title: "How It Works · Plain-Language Paperwork Guide",
  description:
    "Learn how KaamKaagaz simplifies Indian civic paperwork through 4 transparent, privacy-first steps: discover, assemble valid documents, track readiness locally, and apply officially.",
  keywords: [
    "How It Works",
    "Civic Paperwork Guide",
    "Aadhaar PAN process",
    "Government document verification",
    "Privacy-first checklist",
    "कागज़ समझो काम करो",
  ],
};

export default function HowItWorksPage() {
  return <HowItWorksHub />;
}
