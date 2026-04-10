import type { BoardEntry, TabType } from "@/types/board";

export type BoardSearchType = "title" | "content" | "all";

export function getBoardTab(tabParam: string | null): TabType {
  if (tabParam === "press" || tabParam === "blog") {
    return tabParam;
  }

  return "notice";
}

export function filterBoardEntries(
  entries: BoardEntry[],
  activeTab: TabType,
  searchQuery: string,
  searchType: BoardSearchType
): BoardEntry[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const tabEntries = entries.filter((entry) => entry.type === activeTab);
  if (!normalizedQuery) {
    return tabEntries;
  }

  return tabEntries.filter((entry) => {
    const title = entry.title.toLowerCase();
    const content = entry.content?.toLowerCase() ?? "";
    const excerpt = entry.excerpt?.toLowerCase() ?? "";

    if (searchType === "title") {
      return title.includes(normalizedQuery);
    }

    if (searchType === "content") {
      return content.includes(normalizedQuery) || excerpt.includes(normalizedQuery);
    }

    return (
      title.includes(normalizedQuery) ||
      content.includes(normalizedQuery) ||
      excerpt.includes(normalizedQuery)
    );
  });
}
