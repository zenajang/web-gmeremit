"use client";

import { HiArrowDownTray } from "react-icons/hi2";
import { useTranslation } from "@/hooks/useTranslation";

interface BoardAttachmentProps {
  url: string;
  name?: string | null;
}

const BoardAttachment = ({ url, name }: BoardAttachmentProps) => {
  const { t } = useTranslation();

  return (
    <div className="mt-10 p-6 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)]">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">
        {t("board-detail.board-detail-client.attachment")}
      </h3>
      <a
        href={url}
        download={name || undefined}
        className="flex items-center gap-3 p-4 rounded-xl border border-[var(--border-soft)] bg-white hover:bg-gray-50 transition-colors group"
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
          <HiArrowDownTray className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-dark truncate">
            {name || t("board-detail.board-detail-client.attachment_file")}
          </p>
        </div>
      </a>
    </div>
  );
};

export default BoardAttachment;
