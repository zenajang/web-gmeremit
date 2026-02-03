export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#ed1c24]/20 border-t-[#ed1c24] rounded-full animate-spin" />
        <p className="text-gray-600 text-sm">로딩중...</p>
      </div>
    </div>
  );
}
