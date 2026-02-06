"use client";

import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BoardTabs from "@/components/board/BoardTabs";
import SearchBar from "@/components/board/SearchBar";
import BoardTable from "@/components/board/BoardTable";
import BlogGrid from "@/components/board/BlogGrid";
import Pagination from "@/components/board/Pagination";
import { BoardEntry, TabType } from "@/types/board";
import Lenis from "lenis";
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

  // Lenis 부드러운 스크롤
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      infinite: false,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

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
    <>
      <Header />
      <main className="pt-[82px] lg:pt-[120px] min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-16 lg:pt-20 pb-8 lg:pb-10 animate-fadeIn">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative inline-block">
              <div className="absolute -top-6 -left-2 w-20 h-20 bg-gradient-to-br from-[#ed1c24]/20 via-[#ed1c24]/10 to-transparent rounded-2xl" />
              <div className="absolute -top-4 left-0 w-4 h-4 bg-gradient-to-br from-[#ed1c24] to-[#ed1c24]/60 rounded-sm" />

              <p className="text-xs font-semibold text-[#ed1c24] tracking-[0.2em] mb-3 uppercase relative z-10">
                {t("subtitle")}
              </p>
              <h1 className="text-3xl lg:text-5xl font-bold text-[#191c1f] tracking-tight relative z-10">
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
                <span className="text-base font-bold text-[#ed1c24]">
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
      </main>
      <Footer />
    </>
  );
}
