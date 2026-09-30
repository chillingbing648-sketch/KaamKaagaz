import type { Metadata } from "next";
import { AdmissionsHub } from "@/components/admissions/AdmissionsHub";

export const metadata: Metadata = {
  title: "Student Admissions · KaamKaagaz",
  description:
    "Maharashtra & Mumbai University student admission wayfinding ecosystem. Find the right portal (FYJC, CET Cell, Samarth, CDOE, PhD), roadmaps, valid document rules, and MahaDBT scholarships.",
  keywords: [
    "Student Admissions",
    "Maharashtra FYJC 11th admission",
    "MHT CET CAP admission",
    "Mumbai University admission",
    "Samarth portal",
    "CDOE IDOL admission",
    "MahaDBT scholarships",
    "Caste validity certificate",
    "APAAR ID",
    "कागज़ समझो काम करो",
  ],
};

export default function AdmissionsPage() {
  return <AdmissionsHub />;
}
