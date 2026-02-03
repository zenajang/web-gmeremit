"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { HiChevronLeft, HiArrowDownTray } from "react-icons/hi2";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TypeBadge from "@/components/board/TypeBadge";

// Sample data (same as board page - in production, this would come from API/database)
const sampleData = [
  {
    id: 1,
    type: "press" as const,
    title: "GME Remit, 2024년 해외송금 거래액 4조원 돌파",
    content: `Global Money Express가 2024년 한 해 동안 해외송금 거래액 4조원을 돌파했다고 밝혔다.

회사 관계자는 "고객들의 신뢰와 지속적인 서비스 개선이 이러한 성과를 가능하게 했다"며 "앞으로도 더 나은 서비스로 보답하겠다"고 밝혔다.

GME Remit은 2024년 한 해 동안 전년 대비 35% 성장한 거래액을 기록하며, 국내 해외송금 시장에서 선도적인 위치를 확고히 했다.`,
    date: "2025.01.20",
    source: "매일경제",
    hasAttachment: true,
    attachmentUrl: "/files/press-1.pdf",
    attachmentName: "보도자료_2024년_거래액.pdf",
  },
  {
    id: 2,
    type: "notice" as const,
    title: "2025년 설 연휴 송금 서비스 안내",
    content: `안녕하세요, GME Remit입니다.

2025년 설 연휴 기간 송금 서비스 운영 시간을 다음과 같이 안내드립니다.

[운영 시간]
- 1월 27일 (월): 정상 운영
- 1월 28일 (화) ~ 1월 30일 (목): 오전 9시 ~ 오후 6시
- 1월 31일 (금): 정상 운영

연휴 기간 중에도 안정적인 서비스를 제공하기 위해 최선을 다하겠습니다.

감사합니다.`,
    date: "2025.01.15",
    isImportant: true,
  },
];

export default function BoardDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);

  // Find the entry
  const entry = sampleData.find((item) => item.id === id);

  if (!entry) {
    return (
      <>
        <Header />
        <main className="pt-[82px] lg:pt-[120px] min-h-screen">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              게시글을 찾을 수 없습니다
            </h1>
            <Link
              href="/board"
              className="text-[#ed1c24] hover:underline font-medium"
            >
              목록으로 돌아가기
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-[82px] lg:pt-[120px] min-h-screen bg-[var(--surface-0)]">
        <article className="py-10 lg:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-gray-600 hover:text-[#ed1c24] transition-colors mb-8 group"
            >
              <HiChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">목록으로</span>
            </button>

            {/* Header */}
            <header className="mb-8 pb-8 border-b border-[var(--border-soft)]">
              <div className="flex items-center gap-3 mb-4">
                <TypeBadge type={entry.type} />
                {entry.source && (
                  <span className="text-sm text-gray-500">{entry.source}</span>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#191c1f] mb-4 leading-tight">
                {entry.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <time dateTime={entry.date}>{entry.date}</time>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {entry.content}
              </div>
            </div>

            {/* Attachment */}
            {entry.hasAttachment && entry.attachmentUrl && (
              <div className="mt-10 p-6 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-1)]">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  첨부파일
                </h3>
                <a
                  href={entry.attachmentUrl}
                  download={entry.attachmentName}
                  className="flex items-center gap-3 p-4 rounded-xl border border-[var(--border-soft)] bg-white hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#ed1c24]/10 text-[#ed1c24] group-hover:bg-[#ed1c24]/20 transition-colors">
                    <HiArrowDownTray className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#191c1f] truncate">
                      {entry.attachmentName || "첨부파일"}
                    </p>
                  </div>
                </a>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-12 pt-8 border-t border-[var(--border-soft)]">
              <Link
                href="/board"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[var(--border-soft)] bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                목록으로 돌아가기
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
