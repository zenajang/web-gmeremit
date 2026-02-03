"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NoticeRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/board?tab=notice");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">공지사항 페이지로 이동 중...</p>
    </div>
  );
}
