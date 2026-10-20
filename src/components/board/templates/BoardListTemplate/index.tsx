"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import PublicLayout from "@/components/layout/PublicLayout";
import DotLoader from "@/components/ui/DotLoader";
import { BoardTabs, Pagination, SearchBar } from "@/components/board/molecules";
import { BlogGrid, BoardTable } from "@/components/board/organisms";
import { fetchBoardEntriesByType } from "@/components/board/api";
import { ITEMS_PER_PAGE } from "@/components/board/constants";
import { BoardEntry } from "@/types/board";
import { useLenis } from "@/hooks/useLenis";
import { useTranslation } from "@/hooks/useTranslation";
import { BoardSearchType, filterBoardEntries, resolveBoardTab } from "@/utils/board";
import * as S from "./styles";

const BoardListTemplate = () => {
  const searchParams = useSearchParams();
  const { t } = useTranslation();
  const activeTab = resolveBoardTab(searchParams.get("tab"));

  const [entries, setEntries] = useState<BoardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasFetchError, setHasFetchError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState<BoardSearchType>("title");
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);

  useLenis();

  useEffect(() => {
    let isCancelled = false;

    async function loadEntries() {
      setIsLoading(true);
      const loaded = await fetchBoardEntriesByType(activeTab);
      if (isCancelled) return;

      setEntries(loaded ?? []);
      setHasFetchError(loaded === null);
      setIsLoading(false);
    }

    loadEntries();
    return () => {
      isCancelled = true;
    };
  }, [activeTab]);

  const filteredEntries = useMemo(
    () => filterBoardEntries(entries, searchQuery, searchType),
    [entries, searchQuery, searchType]
  );

  const totalCount = filteredEntries.length;
  const displayedEntries = filteredEntries.slice(0, displayCount);
  const hasMore = displayCount < totalCount;

  const applySearch = useCallback((query: string, type: BoardSearchType) => {
    setSearchQuery(query);
    setSearchType(type);
    setDisplayCount(ITEMS_PER_PAGE);
  }, []);

  const showMoreEntries = () => {
    setDisplayCount((prev) => Math.min(prev + ITEMS_PER_PAGE, totalCount));
  };

  return (
    <PublicLayout className="bg-white">
      <section className={S.BoardListHeroSection}>
        <div className={S.BoardListHeroInner}>
          <div className={S.BoardListHeroTitleBox}>
            <div className={S.BoardListHeroGlow} />
            <div className={S.BoardListHeroDot} />
            <p className={S.BoardListHeroEyebrow}>{t("board.subtitle")}</p>
            <h1 className={S.BoardListHeroTitle}>{t(`board.tabs.${activeTab}`)}</h1>
          </div>
        </div>
      </section>

      <section className={S.BoardListContentSection} style={{ animationDelay: "0.1s" }}>
        <div className={S.BoardListContentInner}>
          <div className={S.BoardListTabsWrapper}>
            <BoardTabs activeTab={activeTab} />
          </div>

          <div className={S.BoardListToolbar}>
            <div className={S.BoardListCountBox}>
              <span className={S.BoardListCountLabel}>{t("board.total")}</span>
              <span className={S.BoardListCountValue}>
                {totalCount}
                {t("board.count_suffix")}
              </span>
            </div>
            <SearchBar onSearch={applySearch} />
          </div>

          {isLoading ? (
            <div className={S.BoardListLoadingBox}>
              <DotLoader />
            </div>
          ) : hasFetchError ? (
            <div className={S.BoardListErrorBox}>
              <p className={S.BoardListErrorTitle}>{t("common.board.error_title")}</p>
              <p className={S.BoardListErrorDescription}>{t("common.board.error_description")}</p>
            </div>
          ) : activeTab === "blog" ? (
            <BlogGrid entries={displayedEntries} />
          ) : (
            <BoardTable entries={displayedEntries} />
          )}

          <Pagination
            currentCount={displayedEntries.length}
            totalCount={totalCount}
            hasMore={hasMore}
            onLoadMore={showMoreEntries}
          />
        </div>
      </section>
    </PublicLayout>
  );
};

export default BoardListTemplate;
