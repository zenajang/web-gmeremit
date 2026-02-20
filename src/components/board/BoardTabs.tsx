"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { TabType } from "@/types/board";
import { useTranslation } from "@/hooks/useTranslation";

interface BoardTabsProps {
  activeTab: TabType;
}

export default function BoardTabs({ activeTab }: BoardTabsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t } = useTranslation("board.tabs");

  const tabs = [
    { id: "notice" as TabType, labelKey: "notice" },
    { id: "press" as TabType, labelKey: "press" },
    { id: "blog" as TabType, labelKey: "blog" },
  ];

  const handleTabClick = (tabId: TabType) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tabId);

    // Reset to page 1 when changing tabs
    params.delete("page");

    router.push(`/board?${params.toString()}`);
  };

  return (
    <div className="flex gap-3">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`px-8 py-3.5 rounded-full text-base font-semibold transition-all cursor-pointer ${
            activeTab === tab.id
              ? "bg-white border-2 border-primary text-primary"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {t(tab.labelKey)}
        </button>
      ))}
    </div>
  );
}
