"use client";

import { BoardEntryType } from "@/types/board";
import { useTranslation } from "@/hooks/useTranslation";

interface TypeBadgeProps {
  type: BoardEntryType;
}

export default function TypeBadge({ type }: TypeBadgeProps) {
  const { t } = useTranslation("board.badge");

  const getTypeColor = () => {
    switch (type) {
      case "notice":
        return "text-gray-600";
      case "press":
        return "text-primary";
      case "blog":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <span className={`text-base font-medium ${getTypeColor()}`}>
      {t(type)}
    </span>
  );
}
