import type { Metadata } from "next";
import { createServer } from "@/lib/supabase/server";
import { BoardEntry } from "@/types/board";
import { BOARD_TABLE } from "@/data/board-table";
import { BoardDetailTemplate } from "@/components/board/templates";

interface BoardDetailPageProps {
  params: Promise<{ id: string }>;
}

async function fetchEntryForMeta(idParam: string): Promise<BoardEntry | null> {
  const isNumericId = /^\d+$/.test(idParam);
  const supabase = await createServer();
  const { data } = await supabase
    .from(BOARD_TABLE)
    .select("*")
    .eq(isNumericId ? "id" : "slug", isNumericId ? Number(idParam) : idParam)
    .maybeSingle();
  return (data as BoardEntry) ?? null;
}

export async function generateMetadata({
  params,
}: BoardDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const entry = await fetchEntryForMeta(id);

  if (!entry) {
    return { title: "GME Remittance" };
  }

  const description = entry.description || entry.excerpt || undefined;
  const images = entry.image_url
    ? [entry.image_url]
    : ["/images/common/GME-LOGO-HD.png"];
  const canonicalPath = `/board/${entry.slug || entry.id}`;

  return {
    title: entry.title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      url: canonicalPath,
      title: entry.title,
      description,
      images,
      type: "article",
    },
    twitter: {
      card: entry.image_url ? "summary_large_image" : "summary",
      title: entry.title,
      description,
      images,
    },
  };
}

export default function BoardDetailPage() {
  return <BoardDetailTemplate />;
}
