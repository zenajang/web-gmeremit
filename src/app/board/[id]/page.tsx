"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { HiChevronLeft, HiArrowDownTray } from "react-icons/hi2";
import PublicLayout from "@/components/layout/PublicLayout";
import DotLoader from "@/components/ui/DotLoader";
import TypeBadge from "@/components/board/TypeBadge";
import { createClient } from "@/lib/supabase/client";
import { BoardEntry } from "@/types/board";
import DOMPurify from "dompurify";
import { useTranslation } from "@/hooks/useTranslation";

export default function BoardDetailPage() {
  const params = useParams();
  const router = useRouter();
  const idParam = Array.isArray(params.id) ? params.id[0] : params.id;
  const id = Number(idParam);
  const supabase = createClient();
  const { t } = useTranslation("board");

  const [entry, setEntry] = useState<BoardEntry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!idParam || Number.isNaN(id)) {
      setEntry(null);
      setLoading(false);
      return;
    }

    async function fetchEntry() {
      setLoading(true);
      const { data, error } = await supabase
        .from("board_entries")
        .select("*")
        .eq("id", id)
        .maybeSingle();

      if (error) {
        console.error("Error fetching entry:", error);
        setEntry(null);
      } else {
        setEntry(data ?? null);
      }
      setLoading(false);
    }

    fetchEntry();
  }, [id, idParam, supabase]);

  return (
    <PublicLayout className="bg-[var(--surface-0)]">
      {loading ? (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex justify-center">
          <DotLoader />
        </div>
      ) : !entry ? (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {t("detail.not_found")}
          </h1>
          <Link
            href="/board"
            className="text-primary hover:underline font-medium"
          >
            {t("detail.back_to_list")}
          </Link>
        </div>
      ) : (
        <article className="py-10 lg:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <div className="flex justify-left mb-8">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group cursor-pointer"
              >
                <HiChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform cursor-pointer" />
                <span className="text-sm font-medium">{t("detail.back")}</span>
              </button>
            </div>

            {/* Header */}
            <header className="mb-8 pb-8 border-b border-[var(--border-soft)]">
              <div className="flex items-center gap-3 mb-4">
                <TypeBadge type={entry.type} />
                {entry.source && (
                  <span className="text-sm text-gray-500">{entry.source}</span>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-dark mb-4 leading-tight">
                {entry.title}
              </h1>
              <div className="flex items-center justify-end gap-4 text-sm text-gray-500">
                <time dateTime={entry.date}>{entry.date}</time>
              </div>
            </header>

            {/* Image for Press or Blog */}
            {entry.image_url && (entry.type === 'press' || entry.type === 'blog') && (
              <div className="mb-8">
                <img
                  src={entry.image_url}
                  alt={entry.title}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(entry.content || '', {
                    ADD_TAGS: ['img'],
                    ADD_ATTR: ['src', 'alt', 'class'],
                  }),
                }}
              />
            </div>

            {/* Attachment */}
            {entry.has_attachment && entry.attachment_url && (
              <div className="mt-10 p-6 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)]">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  {t("detail.attachment")}
                </h3>
                <a
                  href={entry.attachment_url}
                  download={entry.attachment_name || undefined}
                  className="flex items-center gap-3 p-4 rounded-xl border border-[var(--border-soft)] bg-white hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <HiArrowDownTray className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-dark truncate">
                      {entry.attachment_name || t("detail.attachment_file")}
                    </p>
                  </div>
                </a>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-12 pt-8 border-t border-[var(--border-soft)] flex justify-center">
              <Link
                href="/board"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[var(--border-soft)] bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors cursor-pointer"
              >
                {t("detail.back_to_list")}
              </Link>
            </div>
          </div>
        </article>
      )}
    </PublicLayout>
  );
}
