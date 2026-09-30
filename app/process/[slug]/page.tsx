import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProcess, processes } from "@/data/processes";
import { ProcessView } from "@/components/ProcessView";

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
    title: p ? `${p.title} · Documents & Checklist` : "Not found",
    description: p ? p.description : undefined,
  };
}

export default async function ProcessPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const process = getProcess((await params).slug);
  if (!process) notFound();

  return <ProcessView process={process} />;
}
