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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
      {entries.map((entry) => (
        <Link
          key={entry.id}
          href={`/board/${entry.id}`}
          className="group bg-white overflow-hidden hover:opacity-80 transition-all duration-300"
        >
          {/* Image */}
          <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden rounded-2xl mb-6">
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
          <div className="space-y-3">
            <p className="text-lg font-light text-gray-400">{entry.date}</p>
            <h3 className="text-lg lg:text-xl font-bold text-[#191c1f] leading-snug group-hover:text-[#ed1c24] transition-colors">
              {entry.title}
            </h3>
            {entry.description && (
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                {entry.description}
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
