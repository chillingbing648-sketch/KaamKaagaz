import type { Metadata } from "next";
import { IdentityHub } from "@/components/IdentityHub";

export const metadata: Metadata = {
  title: "Identity Documents · Aadhaar, PAN & Passport",
  description:
    "Plain-language, step-by-step guidance for Aadhaar Card, PAN Card, and Indian Passport. Required documents, official portal links, fees, and photo rules.",
  keywords: [
    "Identity Documents",
    "Aadhaar Card",
    "PAN Card",
    "Passport",
    "UIDAI",
    "Income Tax Department",
    "Passport Seva",
    "कागज़ समझो काम करो",
  ],
};

export default function IdentityPage() {
  return <IdentityHub />;
}
