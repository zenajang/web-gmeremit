import type { TabType } from "@/types/board";

export interface BoardTab {
  id: TabType;
  labelKey: string;
}

export const boardTabs: BoardTab[] = [
  { id: "press", labelKey: "board.tabs.press" },
  { id: "blog", labelKey: "board.tabs.blog" },
  { id: "notice", labelKey: "board.tabs.notice" },
];

export const DEFAULT_BOARD_TAB = boardTabs[0].id;
