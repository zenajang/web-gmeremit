"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi2";
import PublicLayout from "@/components/layout/PublicLayout";
import DotLoader from "@/components/ui/DotLoader";
import BoardEmptyState from "@/components/board/molecules/BoardEmptyState";
import {
  BoardArticleBody,
  BoardArticleHeader,
  BoardAttachment,
} from "@/components/board/organisms";
import { fetchBoardEntry } from "@/components/board/api";
import { BoardEntry } from "@/types/board";
import { useTranslation } from "@/hooks/useTranslation";

const BoardDetailTemplate = () => {
  const params = useParams();
  const router = useRouter();
  const { t } = useTranslation();

  const idParam = Array.isArray(params.id) ? params.id[0] : params.id;
  const hasInvalidId = !idParam;

  const [entry, setEntry] = useState<BoardEntry | null>(null);
  const [isLoading, setIsLoading] = useState(!hasInvalidId);
  const [hasFetchError, setHasFetchError] = useState(false);

  useEffect(() => {
    if (!idParam) return;

    let isCancelled = false;

    async function loadEntry(id: string) {
      setIsLoading(true);
      try {
        const loaded = await fetchBoardEntry(id);
        if (isCancelled) return;
        setEntry(loaded);
        setHasFetchError(false);
      } catch {
        if (isCancelled) return;
        setEntry(null);
        setHasFetchError(true);
      }
      setIsLoading(false);
    }

    loadEntry(idParam);
    return () => {
      isCancelled = true;
    };
  }, [idParam]);

  return (
    <PublicLayout className="bg-[var(--surface-0)]">
      {isLoading ? (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex justify-center">
          <DotLoader />
        </div>
      ) : hasFetchError ? (
        <BoardEmptyState
          title={t("common.board.error_title")}
          description={t("common.board.error_description")}
        />
      ) : hasInvalidId || !entry ? (
        <BoardEmptyState title={t("board-detail.board-detail-client.not_found")} />
      ) : (
        <article className="py-10 lg:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-left mb-8">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group cursor-pointer"
              >
                <HiChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform cursor-pointer" />
                <span className="text-sm font-medium">
                  {t("board-detail.board-detail-client.back")}
                </span>
              </button>
            </div>

            <BoardArticleHeader entry={entry} />
            <BoardArticleBody content={entry.content || ""} />

            {entry.has_attachment && entry.attachment_url && (
              <BoardAttachment url={entry.attachment_url} name={entry.attachment_name} />
            )}

            <div className="mt-12 pt-8 border-t border-[var(--border-soft)] flex justify-center">
              <Link
                href="/board"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[var(--border-soft)] bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors cursor-pointer"
              >
                {t("board-detail.board-detail-client.back_to_list")}
              </Link>
            </div>
          </div>
        </article>
      )}
    </PublicLayout>
  );
};

export default BoardDetailTemplate;
