import type { Metadata } from "next";
import { EducationHub } from "@/components/EducationHub";

export const metadata: Metadata = {
  title: "Education & Student Documents · Leaving, APAAR, Validity & College",
  description:
    "Plain-language guidance for School Leaving Certificates (LC), Transfer Certificates (TC), duplicate copies, APAAR IDs, caste validity, and student documentation.",
  keywords: [
    "Education",
    "School Leaving Certificate",
    "Transfer Certificate",
    "Duplicate LC",
    "APAAR ID",
    "ABC ID",
    "Caste Validity Certificate",
    "Student Documents",
    "कागज़ समझो काम करो",
  ],
};

export default function EducationPage() {
  return <EducationHub />;
}
