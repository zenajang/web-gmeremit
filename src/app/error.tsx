"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface-0 px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 text-6xl font-bold text-primary">!</div>
        <h2 className="mb-3 text-2xl font-bold text-dark">
          문제가 발생했습니다
        </h2>
        <p className="mb-8 text-gray leading-relaxed">
          예상치 못한 오류가 발생했습니다. 다시 시도해 주세요.
        </p>
        <button
          onClick={reset}
          className="rounded-xl bg-primary-dark px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary"
        >
          다시 시도
        </button>
      </div>
    </div>
  );
}
