import { boardTabs, DEFAULT_BOARD_TAB } from "@/data/board";
import type { TabType } from "@/types/board";

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
