"use client";

import Image from "next/image";
import TypeBadge from "@/components/board/molecules/TypeBadge";
import { BoardEntry } from "@/types/board";

interface BoardArticleHeaderProps {
  entry: BoardEntry;
}

const BoardArticleHeader = ({ entry }: BoardArticleHeaderProps) => {
  const hasThumbnail = Boolean(entry.image_url) && (entry.type === "press" || entry.type === "blog");

  return (
    <>
      <header className="mb-8 pb-8 border-b border-[var(--border-soft)]">
        <div className="flex items-center gap-3 mb-4">
          <TypeBadge type={entry.type} />
          {entry.source && <span className="text-sm text-gray-500">{entry.source}</span>}
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-dark mb-4 leading-tight">{entry.title}</h1>
        <div className="flex items-center justify-between gap-3">
          {entry.type === "blog" || entry.author ? (
            <span className="text-base font-semibold text-dark">
              By {entry.author || "GME Remittance"}
            </span>
          ) : (
            <span />
          )}
          <time dateTime={entry.date} className="text-sm text-gray-500">
            {entry.date}
          </time>
        </div>
      </header>

      {hasThumbnail && entry.image_url && (
        <div className="mb-8">
          <Image
            src={entry.image_url}
            alt={entry.title}
            width={800}
            height={450}
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>
      )}
    </>
  );
};

export default BoardArticleHeader;
