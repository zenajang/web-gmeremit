"use client";

import { useTranslation } from "@/hooks/useTranslation";

interface PaginationProps {
  currentCount: number;
  totalCount: number;
  hasMore: boolean;
  onLoadMore: () => void;
}

export default function Pagination({
  currentCount,
  totalCount,
  hasMore,
  onLoadMore,
}: PaginationProps) {
  const { t } = useTranslation("board");

  if (!hasMore) {
    return null;
  }

  return (
    <div className="mt-12 flex justify-center">
      {/* Load More Button */}
      <button
        onClick={onLoadMore}
        className="group relative px-10 py-4 bg-white border-2 border-primary text-primary font-semibold rounded-full hover:bg-gradient-to-r hover:from-primary hover:to-primary-dark hover:text-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgba(237,28,36,0.2)] hover:-translate-y-1 active:translate-y-0 cursor-pointer"
      >
        <span className="flex items-center gap-3">
          <span>{t("load_more")}</span>
          <span className="text-sm opacity-75">
            ({currentCount}/{totalCount})
          </span>
          <svg
            className="w-5 h-5 transition-transform group-hover:translate-y-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
