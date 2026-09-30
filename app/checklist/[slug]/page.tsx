import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProcess, processes } from "@/data/processes";
import { ChecklistView } from "@/components/ChecklistView";

export const dynamicParams = false;

export function generateStaticParams() {
  return processes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const p = getProcess((await params).slug);
  return {
    title: p ? `${p.title} Checklist · KaamKaagaz` : "Not found",
  };
}

export default async function ChecklistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const process = getProcess((await params).slug);
  if (!process) notFound();

  return <ChecklistView process={process} />;
}
