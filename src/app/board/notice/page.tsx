import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HiMegaphone } from "react-icons/hi2";

// 샘플 공지사항 데이터
const notices = [
  {
    id: 1,
    title: "2025년 설 연휴 송금 서비스 안내",
    content: "설 연휴 기간 중 송금 서비스 운영 일정을 안내드립니다.",
    date: "2025.01.20",
    isImportant: true,
  },
  {
    id: 2,
    title: "개인정보처리방침 변경 안내",
    content: "개인정보처리방침이 일부 변경되어 안내드립니다.",
    date: "2025.01.05",
    isImportant: true,
  },
  {
    id: 3,
    title: "앱 업데이트 안내 (v3.5.0)",
    content: "GME Remit 앱이 새롭게 업데이트되었습니다.",
    date: "2024.12.20",
    isImportant: false,
  },
  {
    id: 4,
    title: "2024년 연말연시 고객센터 운영 안내",
    content: "연말연시 고객센터 운영 시간을 안내드립니다.",
    date: "2024.12.15",
    isImportant: false,
  },
  {
    id: 5,
    title: "필리핀 송금 서비스 일시 점검 안내",
    content: "시스템 점검으로 인해 필리핀 송금이 일시 중단됩니다.",
    date: "2024.12.10",
    isImportant: false,
  },
  {
    id: 6,
    title: "이용약관 변경 사전 안내",
    content: "서비스 이용약관이 일부 변경될 예정입니다.",
    date: "2024.12.01",
    isImportant: false,
  },
  {
    id: 7,
    title: "베트남 송금 수수료 인하 안내",
    content: "베트남 송금 수수료가 인하되었습니다.",
    date: "2024.11.25",
    isImportant: false,
  },
  {
    id: 8,
    title: "신규 제휴 은행 추가 안내",
    content: "새로운 제휴 은행이 추가되었습니다.",
    date: "2024.11.20",
    isImportant: false,
  },
];

export default function NoticePage() {
  return (
    <>
      <Header />

      <main className="pt-16 lg:pt-20 bg-[var(--surface-1)] text-[#191c1f]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[var(--surface-0)]">
          <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[#ed1c24]/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#ff8a4c]/10 blur-3xl" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 lg:pt-20 pb-10 lg:pb-14">
            <span className="inline-flex items-center gap-2 bg-[var(--surface-2)] border border-[var(--border-soft)] text-[#191c1f] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              NOTICE
            </span>

            <div className="flex items-center gap-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#ed1c24]/10 text-[#ed1c24]">
                <HiMegaphone className="w-7 h-7" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">공지사항</h1>
                <p className="mt-1 text-gray-600">중요 안내사항과 서비스 업데이트 소식</p>
              </div>
            </div>
          </div>
        </section>

        {/* Notice List */}
        <section className="bg-[var(--surface-1)] py-10 lg:py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Important Notices */}
            <div className="mb-8">
              <p className="text-xs font-semibold tracking-[0.3em] text-gray-400 mb-4">IMPORTANT</p>
              <div className="space-y-3">
                {notices
                  .filter((notice) => notice.isImportant)
                  .map((notice) => (
                    <Link
                      key={notice.id}
                      href={`/board/notice/${notice.id}`}
                      className="group flex items-center justify-between rounded-2xl border-2 border-[#ed1c24]/20 bg-[#ed1c24]/5 px-6 py-5 hover:border-[#ed1c24]/40 hover:bg-[#ed1c24]/10 transition-all"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <span className="shrink-0 px-2.5 py-1 rounded-full bg-[#ed1c24] text-white text-xs font-semibold">
                          중요
                        </span>
                        <div className="min-w-0">
                          <p className="text-[#191c1f] font-semibold truncate group-hover:text-[#ed1c24] transition-colors">
                            {notice.title}
                          </p>
                          <p className="text-sm text-gray-500 truncate mt-0.5">
                            {notice.content}
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 text-sm text-gray-400 ml-4">
                        {notice.date}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>

            {/* All Notices */}
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-gray-400 mb-4">ALL NOTICES</p>
              <div className="rounded-2xl border border-[var(--border-soft)] bg-white overflow-hidden shadow-[0_14px_32px_rgba(15,23,42,0.06)]">
                {notices
                  .filter((notice) => !notice.isImportant)
                  .map((notice, index, arr) => (
                    <Link
                      key={notice.id}
                      href={`/board/notice/${notice.id}`}
                      className={`group flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition-colors ${
                        index !== arr.length - 1 ? "border-b border-[var(--border-soft)]" : ""
                      }`}
                    >
                      <div className="min-w-0">
                        <p className="text-[#191c1f] font-medium truncate group-hover:text-[#ed1c24] transition-colors">
                          {notice.title}
                        </p>
                        <p className="text-sm text-gray-500 truncate mt-0.5">
                          {notice.content}
                        </p>
                      </div>
                      <span className="shrink-0 text-sm text-gray-400 ml-4">
                        {notice.date}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-10 flex items-center justify-center gap-2">
              <button className="w-10 h-10 rounded-xl border border-[var(--border-soft)] bg-white text-gray-400 hover:border-gray-300 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-xl bg-[#ed1c24] text-white font-semibold">1</button>
              <button className="w-10 h-10 rounded-xl border border-[var(--border-soft)] bg-white text-gray-600 hover:border-gray-300 transition-colors">2</button>
              <button className="w-10 h-10 rounded-xl border border-[var(--border-soft)] bg-white text-gray-600 hover:border-gray-300 transition-colors">3</button>
              <button className="w-10 h-10 rounded-xl border border-[var(--border-soft)] bg-white text-gray-400 hover:border-gray-300 hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
