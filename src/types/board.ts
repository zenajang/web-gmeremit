export type BoardEntryType = "notice" | "press" | "blog";

export interface BoardEntry {
  id: number;
  type: BoardEntryType;
  title: string;
  content?: string | null;
  date: string; // Format: "YYYY.MM.DD"
  has_attachment?: boolean;
  attachment_url?: string | null;
  attachment_name?: string | null;
  is_important?: boolean;

  // Press-specific fields
  source?: string | null;
  excerpt?: string | null;

  // Blog-specific fields
  image_url?: string | null;
  description?: string | null;

  // Metadata
  created_at?: string;
  updated_at?: string;
}

export interface BoardFormData {
  type: BoardEntryType;
  title: string;
  content: string;
  date: string;
  isImportant: boolean;
  source: string;
  excerpt: string;
  description: string;
}

export interface BoardCounts {
  total: number;
  notice: number;
  press: number;
  blog: number;
}

export type TabType = "notice" | "press" | "blog";

export interface BoardFilters {
  tab: TabType;
  search: string;
  searchType: string;
  page: number;
}
