import Link from "next/link";
import { HiArrowDownTray } from "react-icons/hi2";
import { BsPinFill } from "react-icons/bs";
import { BoardEntry } from "@/types/board";
import TypeBadge from "./TypeBadge";

interface BoardTableRowProps {
  entry: BoardEntry;
}

// Check if the entry is new (within last 7 days)
function isNewEntry(dateString: string): boolean {
  const entryDate = new Date(dateString);
  const now = new Date();
  const diffTime = now.getTime() - entryDate.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  return diffDays <= 7;
}

export default function BoardTableRow({ entry }: BoardTableRowProps) {
  const isNew = isNewEntry(entry.date);

  return (
    <tr className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
      {/* Type Column */}
      <td className="px-6 py-4">
        <TypeBadge type={entry.type} />
      </td>

      {/* Title Column */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          {entry.is_important && (
            <BsPinFill className="w-4 h-4 text-[#ed1c24] flex-shrink-0" title="중요 공지" />
          )}
          <Link
            href={`/board/${entry.id}`}
            className="text-base text-[#191c1f] font-medium hover:text-[#ed1c24] transition-colors"
          >
            {entry.title}
          </Link>
          {isNew && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-[#ed1c24] text-white flex-shrink-0">
              NEW
            </span>
          )}
        </div>
      </td>

      {/* Attachment Column */}
      <td className="px-6 py-4 text-center">
        {entry.has_attachment && entry.attachment_url && (
          <a
            href={entry.attachment_url}
            download={entry.attachment_name}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={`Download ${entry.attachment_name || "attachment"}`}
          >
            <HiArrowDownTray className="w-5 h-5 text-gray-600" />
          </a>
        )}
      </td>

      {/* Date Column */}
      <td className="px-6 py-4 text-center text-base text-gray-500">
        {entry.date}
      </td>
    </tr>
  );
}
