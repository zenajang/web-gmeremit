"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";

export default function NoticeRedirectPage() {
  const router = useRouter();
  const { t } = useTranslation("board.redirect");

  useEffect(() => {
    router.replace("/board?tab=notice");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">{t("notice")}</p>
    </div>
  );
}
