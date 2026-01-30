import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { HiNewspaper } from "react-icons/hi2";

// 샘플 보도자료 데이터
const pressReleases = [
  {
    id: 1,
    title: "GME Remit, 2024년 해외송금 거래액 4조원 돌파",
    excerpt: "Global Money Express가 2024년 한 해 동안 총 4조원 이상의 해외송금 거래를 처리했다고 밝혔다.",
    date: "2025.01.15",
    source: "매일경제",
    image: "/images/press/news-1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "GME Remit, 일본 송금 서비스 확대",
    excerpt: "일본 내 주요 은행과 제휴를 확대하여 더 빠른 송금 서비스를 제공한다.",
    date: "2024.12.28",
    source: "한국경제",
    image: "/images/press/news-2.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "GME Remit, 금융위원회 혁신금융서비스 지정",
    excerpt: "금융위원회로부터 혁신금융서비스로 지정받아 새로운 서비스 출시 예정이다.",
    date: "2024.12.15",
    source: "서울경제",
    image: "/images/press/news-3.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "GME Remit, 동남아 6개국 실시간 송금 서비스 오픈",
    excerpt: "필리핀, 베트남, 태국 등 동남아 6개국으로 실시간 송금이 가능해졌다.",
    date: "2024.11.20",
    source: "이데일리",
    image: "/images/press/news-4.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "GME Remit, 2024 대한민국 핀테크 대상 수상",
    excerpt: "혁신적인 해외송금 서비스로 2024 대한민국 핀테크 대상을 수상했다.",
    date: "2024.10.30",
    source: "전자신문",
    image: "/images/press/news-5.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "GME Remit, 누적 앱 다운로드 82만 돌파",
    excerpt: "GME Remit 앱 누적 다운로드가 82만을 돌파하며 성장세를 이어가고 있다.",
    date: "2024.10.15",
    source: "디지털타임스",
    image: "/images/press/news-6.jpg",
    featured: false,
  },
];

export default function PressPage() {
  const featuredPosts = pressReleases.filter((p) => p.featured);
  const regularPosts = pressReleases.filter((p) => !p.featured);

  return (
    <>
      <Header />

      <main className="pt-16 lg:pt-20 bg-[var(--surface-1)] text-[#191c1f]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[var(--surface-0)]">
          <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 lg:pt-20 pb-10 lg:pb-14">
            <span className="inline-flex items-center gap-2 bg-[var(--surface-2)] border border-[var(--border-soft)] text-[#191c1f] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              NEWS & PRESS
            </span>

            <div className="flex items-center gap-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-600">
                <HiNewspaper className="w-7 h-7" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">뉴스 / 보도자료</h1>
                <p className="mt-1 text-gray-600">GME Remit의 최신 소식과 언론 보도</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="bg-[var(--surface-1)] py-10 lg:py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.3em] text-gray-400 mb-6">FEATURED</p>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/board/press/${post.id}`}
                  className="group rounded-2xl border border-[var(--border-soft)] bg-white overflow-hidden shadow-[0_14px_32px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.1)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <HiNewspaper className="w-16 h-16 opacity-30" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-semibold">
                        {post.source}
                      </span>
                      <span className="text-sm text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#191c1f] group-hover:text-[#ed1c24] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Press Releases */}
        <section className="bg-[var(--surface-0)] py-10 lg:py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.3em] text-gray-400 mb-6">ALL NEWS</p>
            <div className="rounded-2xl border border-[var(--border-soft)] bg-white overflow-hidden shadow-[0_14px_32px_rgba(15,23,42,0.06)]">
              {regularPosts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/board/press/${post.id}`}
                  className={`group flex items-start gap-5 px-6 py-5 hover:bg-gray-50 transition-colors ${
                    index !== regularPosts.length - 1 ? "border-b border-[var(--border-soft)]" : ""
                  }`}
                >
                  <div className="shrink-0 w-24 h-16 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex items-center justify-center">
                    <HiNewspaper className="w-8 h-8 text-gray-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 text-xs font-semibold">
                        {post.source}
                      </span>
                      <span className="text-sm text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="text-[#191c1f] font-medium truncate group-hover:text-[#ed1c24] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 truncate mt-0.5">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
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
