import type { Metadata } from "next";
import { CertificatesHub } from "@/components/CertificatesHub";

export const metadata: Metadata = {
  title: "Certificates & Vital Records · Income, Caste, Domicile & Birth",
  description:
    "Plain-language, step-by-step guidance for Income Certificate, Caste Certificate, Domicile Certificate, and Birth Certificate in Maharashtra and across India.",
  keywords: [
    "Certificates",
    "Income Certificate",
    "Caste Certificate",
    "Domicile Certificate",
    "Birth Certificate",
    "Aaple Sarkar",
    "Revenue Department",
    "Civil Registration System",
    "कागज़ समझो काम करो",
  ],
};

export default function CertificatesPage() {
  return <CertificatesHub />;
}
