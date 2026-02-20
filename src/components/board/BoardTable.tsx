"use client";

import Link from "next/link";
import { HiPaperClip } from "react-icons/hi2";
import { BsPinFill } from "react-icons/bs";
import { BoardEntry } from "@/types/board";
import BoardTableRow from "./BoardTableRow";
import TypeBadge from "./TypeBadge";
import { useTranslation } from "@/hooks/useTranslation";

interface BoardTableProps {
  entries: BoardEntry[];
}

// Check if the entry is new (within last 7 days)
function isNewEntry(dateString: string): boolean {
  const entryDate = new Date(dateString);
  const now = new Date();
  const diffTime = now.getTime() - entryDate.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  return diffDays <= 7;
}

export default function BoardTable({ entries }: BoardTableProps) {
  const { t } = useTranslation("board");

  if (entries.length === 0) {
    return (
      <div className="border-t-2 border-gray-800 bg-white py-16 text-center">
        <p className="text-gray-500">{t("no_results")}</p>
      </div>
    );
  }

  return (
    <>
      {/* Desktop Table Layout */}
      <div className="hidden md:block bg-white overflow-hidden border-t-2 border-gray-800">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider w-32">
                {t("table.type")}
              </th>
              <th className="px-6 py-5 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                {t("table.title")}
              </th>
              <th className="px-6 py-5 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider w-24">
                {t("table.attachment")}
              </th>
              <th className="px-6 py-5 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider w-40">
                {t("table.date")}
              </th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <BoardTableRow key={entry.id} entry={entry} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-4">
        {entries.map((entry) => {
          const isNew = isNewEntry(entry.date);
          return (
            <Link
              key={entry.id}
              href={`/board/${entry.id}`}
              className="block rounded-lg border border-gray-200 bg-white p-5 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <TypeBadge type={entry.type} />
                <span className="text-base text-gray-500">{entry.date}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                {entry.is_important && (
                  <BsPinFill className="w-4 h-4 text-primary flex-shrink-0" />
                )}
                <h3 className="text-base text-dark font-medium leading-relaxed">
                  {entry.title}
                </h3>
                {isNew && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-primary text-white flex-shrink-0">
                    NEW
                  </span>
                )}
              </div>
              {entry.has_attachment && (
                <div className="flex items-center gap-2 text-base text-gray-500">
                  <HiPaperClip className="w-4 h-4" />
                  <span>{t("table.attachment_file")}</span>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
}
