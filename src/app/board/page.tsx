"use client";

import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PublicLayout from "@/components/layout/PublicLayout";
import BoardTabs from "@/components/board/BoardTabs";
import SearchBar from "@/components/board/SearchBar";
import BoardTable from "@/components/board/BoardTable";
import BlogGrid from "@/components/board/BlogGrid";
import Pagination from "@/components/board/Pagination";
import { BoardEntry, TabType } from "@/types/board";
import { useLenis } from "@/hooks/useLenis";
import { createClient } from "@/lib/supabase/client";
import { useTranslation } from "@/hooks/useTranslation";

export const dynamic = 'force-dynamic';

const ITEMS_PER_PAGE = 10;

export default function BoardPage() {
  const searchParams = useSearchParams();
  const supabase = createClient();
  const { t } = useTranslation("board");

  const [entries, setEntries] = useState<BoardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("title");
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);

  // Get active tab from URL (default to "notice")
  const tabParam = searchParams.get("tab");
  const activeTab: TabType =
    tabParam === "press" ? "press" :
    tabParam === "blog" ? "blog" :
    "notice";

  // Fetch data from Supabase
  useEffect(() => {
    async function fetchEntries() {
      setLoading(true);
      const { data, error } = await supabase
        .from('board_entries')
        .select('*')
        .eq('type', activeTab)
        .order('date', { ascending: false });

      if (error) {
        console.error('Error fetching entries:', error);
        setEntries([]);
      } else {
        setEntries(data || []);
      }
      setLoading(false);
    }

    fetchEntries();
  }, [activeTab, supabase]);

  useLenis();

  // Filter entries by tab
  let filteredEntries = entries.filter((entry) => entry.type === activeTab);

  // Apply search filter
  if (searchQuery) {
    filteredEntries = filteredEntries.filter((entry) => {
      const query = searchQuery.toLowerCase();
      if (searchType === "title") {
        return entry.title.toLowerCase().includes(query);
      } else if (searchType === "content") {
        return (
          entry.content?.toLowerCase().includes(query) ||
          entry.excerpt?.toLowerCase().includes(query)
        );
      } else {
        // all
        return (
          entry.title.toLowerCase().includes(query) ||
          entry.content?.toLowerCase().includes(query) ||
          entry.excerpt?.toLowerCase().includes(query)
        );
      }
    });
  }

  const totalCount = filteredEntries.length;
  const displayedEntries = filteredEntries.slice(0, displayCount);
  const hasMore = displayCount < totalCount;

  const handleSearch = useCallback((query: string, type: string) => {
    setSearchQuery(query);
    setSearchType(type);
    setDisplayCount(ITEMS_PER_PAGE); // Reset to first page
  }, []);

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + ITEMS_PER_PAGE, totalCount));
  };

  // Get title based on active tab
  const getPageTitle = () => {
    return t(`tabs.${activeTab}`);
  };

  return (
    <PublicLayout className="bg-white">
      {/* Hero Section */}
        <section className="pt-16 lg:pt-20 pb-8 lg:pb-10 animate-fadeIn">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative inline-block">
              <div className="absolute -top-6 -left-2 w-20 h-20 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl" />
              <div className="absolute -top-4 left-0 w-4 h-4 bg-gradient-to-br from-primary to-primary/60 rounded-sm" />

              <p className="typo-eyebrow text-primary mb-3 relative z-10">
                {t("subtitle")}
              </p>
              <h1 className="typo-page-title tracking-tight relative z-10">
                {getPageTitle()}
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pt-6 lg:pt-10 pb-16 lg:pb-24 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tabs */}
            <div className="mb-10">
              <BoardTabs activeTab={activeTab} />
            </div>

            {/* Total Count and Search */}
            <div className="flex items-center justify-between mb-6">
              {/* Total Count */}
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-gray-700">{t("total")}</span>
                <span className="text-base font-bold text-primary">
                  {totalCount}{t("count_suffix")}
                </span>
              </div>

              {/* Search Bar */}
              <SearchBar onSearch={handleSearch} />
            </div>

            {/* Table or Grid based on tab */}
            {loading ? (
              <div className="rounded-2xl border border-[var(--border-soft)] bg-white py-16 text-center">
                <p className="text-gray-500">{t("loading")}</p>
              </div>
            ) : activeTab === "blog" ? (
              <BlogGrid entries={displayedEntries} />
            ) : (
              <BoardTable entries={displayedEntries} />
            )}

            {/* Load More Pagination */}
            <Pagination
              currentCount={displayedEntries.length}
              totalCount={totalCount}
              hasMore={hasMore}
              onLoadMore={handleLoadMore}
            />
          </div>
        </section>
    </PublicLayout>
  );
}
