"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

interface SearchBarProps {
  onSearch: (query: string, searchType: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const { t } = useTranslation("board.search");
  const [searchType, setSearchType] = useState("title");
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query, searchType);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Search Type Dropdown */}
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23333' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
          backgroundPosition: 'right 1rem center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '1.25rem 1.25rem',
        }}
        className="pl-5 pr-16 py-3 border border-[var(--border-soft)] rounded bg-white text-base text-gray-700 focus:outline-none focus:border-gray-300 appearance-none"
      >
        <option value="title">{t("title")}</option>
        <option value="content">{t("content")}</option>
        <option value="all">{t("all")}</option>
      </select>

      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={t("placeholder")}
        className="px-5 py-3 border border-[var(--border-soft)] rounded bg-white text-base text-gray-700 focus:outline-none focus:border-gray-300"
        style={{ width: "280px" }}
      />

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="px-6 py-3 bg-[#555] text-white text-base font-medium rounded hover:bg-[#333] transition-colors cursor-pointer"
      >
        {t("button")}
      </button>
    </div>
  );
}
