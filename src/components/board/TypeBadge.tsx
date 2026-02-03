import { BoardEntryType } from "@/types/board";

interface TypeBadgeProps {
  type: BoardEntryType;
}

export default function TypeBadge({ type }: TypeBadgeProps) {
  const getTypeLabel = () => {
    switch (type) {
      case "notice":
        return "공지";
      case "press":
        return "언론보도";
      case "blog":
        return "블로그";
      default:
        return "";
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case "notice":
        return "text-[#555]";
      case "press":
        return "text-[#ed1c24]";
      case "blog":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <span className={`text-base font-medium ${getTypeColor()}`}>
      {getTypeLabel()}
    </span>
  );
}
