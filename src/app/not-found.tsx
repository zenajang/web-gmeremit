import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface-0 px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 text-6xl font-bold text-primary">!</div>
        <h2 className="mb-3 text-2xl font-bold text-dark">페이지를 찾을 수 없습니다</h2>
        <p className="mb-8 text-gray leading-relaxed">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <Link
          href="/"
          className="inline-block rounded-xl bg-primary-dark px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
