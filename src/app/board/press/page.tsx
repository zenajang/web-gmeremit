"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";

export default function PressRedirectPage() {
  const router = useRouter();
  const { t } = useTranslation("board.redirect");

  useEffect(() => {
    router.replace("/board?tab=press");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">{t("press")}</p>
    </div>
  );
}
