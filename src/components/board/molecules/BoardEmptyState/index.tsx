"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

interface BoardEmptyStateProps {
  title: string;
  description?: string;
}

const BoardEmptyState = ({ title, description }: BoardEmptyStateProps) => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <p className="text-lg font-semibold text-gray-900 mb-2">{title}</p>
      {description && <p className="text-sm text-gray-500 mb-6">{description}</p>}
      <Link href="/board" className="text-primary hover:underline font-medium">
        {t("board-detail.board-detail-client.back_to_list")}
      </Link>
    </div>
  );
};

export default BoardEmptyState;
