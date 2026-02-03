"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PressRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/board?tab=press");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">언론보도 페이지로 이동 중...</p>
    </div>
  );
}
