import { boardTabs, DEFAULT_BOARD_TAB } from "@/data/board";
import type { BoardEntry, TabType } from "@/types/board";

export function isNewEntry(dateString: string, days = 7): boolean {
  const entryDate = new Date(dateString);
  const now = new Date();
  const diffTime = now.getTime() - entryDate.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  return diffDays <= days;
}

export function resolveBoardTab(tab: string | null): TabType {
  return boardTabs.find((boardTab) => boardTab.id === tab)?.id ?? DEFAULT_BOARD_TAB;
}

export type BoardSearchType = "title" | "content" | "all";

export function filterBoardEntries(
  entries: BoardEntry[],
  searchQuery: string,
  searchType: BoardSearchType
): BoardEntry[] {
  const query = searchQuery.trim().toLowerCase();
  if (!query) return entries;

  const matchesTitle = (entry: BoardEntry) => entry.title.toLowerCase().includes(query);
  const matchesContent = (entry: BoardEntry) =>
    Boolean(entry.content?.toLowerCase().includes(query)) ||
    Boolean(entry.excerpt?.toLowerCase().includes(query));

  return entries.filter((entry) => {
    if (searchType === "title") return matchesTitle(entry);
    if (searchType === "content") return matchesContent(entry);
    return matchesTitle(entry) || matchesContent(entry);
  });
}
