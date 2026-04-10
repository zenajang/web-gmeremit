"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { BoardEntry, TabType } from "@/types/board";

interface UseBoardEntriesResult {
  entries: BoardEntry[];
  loading: boolean;
  fetchError: boolean;
}

export function useBoardEntries(activeTab: TabType): UseBoardEntriesResult {
  const supabase = createClient();
  const [entries, setEntries] = useState<BoardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchEntries() {
      setLoading(true);

      const { data, error } = await supabase
        .from("board_entries")
        .select("*")
        .eq("type", activeTab)
        .order("date", { ascending: false });

      if (cancelled) return;

      if (error) {
        setEntries([]);
        setFetchError(true);
      } else {
        setEntries(data || []);
        setFetchError(false);
      }

      setLoading(false);
    }

    fetchEntries();

    return () => {
      cancelled = true;
    };
  }, [activeTab, supabase]);

  return { entries, loading, fetchError };
}
