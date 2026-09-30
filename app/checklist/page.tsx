import type { Metadata } from "next";
import { ChecklistHub } from "@/components/ChecklistHub";

export const metadata: Metadata = {
  title: "My Checklist · KaamKaagaz",
  description: "View and manage your saved paperwork readiness checklists across all services.",
};

export default function ChecklistHubPage() {
  return <ChecklistHub />;
}
