import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDocument, getProcess, processes } from "@/data/processes";
import { DocumentView } from "@/components/DocumentView";

export const dynamicParams = false;

export function generateStaticParams() {
  return processes.flatMap((p) =>
    p.documents.map((d) => ({ slug: p.slug, document: d.id }))
  );
}

type Params = Promise<{ slug: string; document: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug, document } = await params;
  const p = getProcess(slug);
  const d = p && getDocument(p, document);
  return {
    title: d && p ? `${d.name} for ${p.title} · KaamKaagaz` : "Not found",
    description: d ? d.shortDescription : undefined,
  };
}

export default async function DocumentPage({ params }: { params: Params }) {
  const { slug, document } = await params;
  const process = getProcess(slug);
  const doc = process && getDocument(process, document);

  if (!process || !doc) notFound();

  return <DocumentView process={process} document={doc} />;
}
