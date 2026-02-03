import Link from "next/link";
import { BoardEntry } from "@/types/board";

interface BlogGridProps {
  entries: BoardEntry[];
}

export default function BlogGrid({ entries }: BlogGridProps) {
  if (entries.length === 0) {
    return (
      <div className="rounded-2xl border border-[var(--border-soft)] bg-white py-16 text-center">
        <p className="text-gray-500">검색 결과가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {entries.map((entry) => (
        <Link
          key={entry.id}
          href={`/board/${entry.id}`}
          className="group rounded-2xl border border-[var(--border-soft)] bg-white overflow-hidden hover:shadow-lg transition-all duration-300"
        >
          {/* Image */}
          <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
            {entry.image_url ? (
              <img
                src={entry.image_url}
                alt={entry.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                <span className="text-gray-400 text-sm">No Image</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="text-base font-semibold text-[#191c1f] mb-2 line-clamp-2 group-hover:text-[#ed1c24] transition-colors">
              {entry.title}
            </h3>
            {entry.description && (
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {entry.description}
              </p>
            )}
            <p className="text-sm text-gray-500">{entry.date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
