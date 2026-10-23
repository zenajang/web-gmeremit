import { createClient } from "@/lib/supabase/client";
import { BoardEntry, TabType } from "@/types/board";
import { BOARD_TABLE } from "@/data/board-table";

/**
 * 게시판 탭에 해당하는 글 목록을 최신순으로 가져온다.
 *
 * @param type - 게시판 탭 (`notice` | `press` | `blog`)
 * @returns 조회에 성공하면 글 배열, 실패하면 `null`
 *
 * @example
 * const entries = await fetchBoardEntriesByType("press");
 */
export async function fetchBoardEntriesByType(type: TabType): Promise<BoardEntry[] | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from(BOARD_TABLE)
    .select("*")
    .eq("type", type)
    .order("is_important", { ascending: false })
    .order("date", { ascending: false })
    .order("id", { ascending: false });

  if (error) return null;
  return data ?? [];
}

/**
 * 게시글 한 건을 가져온다.
 *
 * 숫자로만 이루어진 값은 `id`, 그 외에는 `slug` 로 조회한다.
 *
 * @param idOrSlug - 주소에서 받은 식별자
 * @returns 글이 있으면 `BoardEntry`, 없으면 `null`
 * @throws {Error} 조회 자체가 실패한 경우
 *
 * @example
 * const entry = await fetchBoardEntry("gme-opens-new-branch");
 */
export async function fetchBoardEntry(idOrSlug: string): Promise<BoardEntry | null> {
  const supabase = createClient();
  const isNumericId = /^\d+$/.test(idOrSlug);
  const query = supabase.from(BOARD_TABLE).select("*");
  const { data, error } = await (isNumericId
    ? query.eq("id", Number(idOrSlug))
    : query.eq("slug", idOrSlug)
  ).maybeSingle();

  if (error) throw new Error(error.message);
  return data ?? null;
}
