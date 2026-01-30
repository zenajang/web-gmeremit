import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HiPencilSquare, HiClock, HiEye } from "react-icons/hi2";

// 샘플 블로그 데이터
const blogPosts = [
  {
    id: 1,
    title: "해외송금 수수료 아끼는 5가지 방법",
    excerpt: "해외송금을 자주 하시나요? 수수료를 절약할 수 있는 다양한 팁을 소개합니다. 환율 우대, 수수료 무료 이벤트 활용법까지.",
    date: "2025.01.10",
    readTime: "5분",
    views: 1234,
    category: "송금 팁",
    image: "/images/blog/blog-1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "2025년 주요국 환율 전망",
    excerpt: "달러, 엔화, 위안화 등 주요 통화의 2025년 환율 전망을 분석합니다.",
    date: "2025.01.05",
    readTime: "8분",
    views: 2156,
    category: "환율 정보",
    image: "/images/blog/blog-2.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "필리핀 송금, 어떤 방법이 가장 빠를까?",
    excerpt: "필리핀으로 송금하는 다양한 방법과 각각의 장단점을 비교해봅니다.",
    date: "2024.12.20",
    readTime: "6분",
    views: 987,
    category: "송금 가이드",
    image: "/images/blog/blog-3.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "해외 취업 준비생을 위한 금융 체크리스트",
    excerpt: "해외 취업을 준비하고 계신가요? 미리 알아두면 좋은 금융 정보를 정리했습니다.",
    date: "2024.12.15",
    readTime: "7분",
    views: 756,
    category: "금융 상식",
    image: "/images/blog/blog-4.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "베트남 동 환율, 지금이 송금하기 좋은 시점?",
    excerpt: "최근 베트남 동 환율 동향과 송금 타이밍에 대해 분석합니다.",
    date: "2024.12.10",
    readTime: "4분",
    views: 1432,
    category: "환율 정보",
    image: "/images/blog/blog-5.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "GME Card로 해외여행 200% 활용하기",
    excerpt: "GME Card의 다양한 혜택과 해외에서 스마트하게 사용하는 방법을 소개합니다.",
    date: "2024.12.05",
    readTime: "5분",
    views: 892,
    category: "서비스 활용",
    image: "/images/blog/blog-6.jpg",
    featured: false,
  },
  {
    id: 7,
    title: "외국인 근로자를 위한 연말정산 가이드",
    excerpt: "한국에서 일하는 외국인 근로자분들을 위한 연말정산 팁을 알려드립니다.",
    date: "2024.11.25",
    readTime: "10분",
    views: 2341,
    category: "금융 상식",
    image: "/images/blog/blog-7.jpg",
    featured: false,
  },
  {
    id: 8,
    title: "네팔 가족에게 송금하는 가장 빠른 방법",
    excerpt: "네팔로 송금하는 다양한 방법을 비교하고 최적의 방법을 찾아봅니다.",
    date: "2024.11.20",
    readTime: "6분",
    views: 678,
    category: "송금 가이드",
    image: "/images/blog/blog-8.jpg",
    featured: false,
  },
];

const categories = ["전체", "송금 팁", "환율 정보", "송금 가이드", "금융 상식", "서비스 활용"];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((p) => p.featured);
  const regularPosts = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <Header />

      <main className="pt-16 lg:pt-20 bg-[var(--surface-1)] text-[#191c1f]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[var(--surface-0)]">
          <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 lg:pt-20 pb-10 lg:pb-14">
            <span className="inline-flex items-center gap-2 bg-[var(--surface-2)] border border-[var(--border-soft)] text-[#191c1f] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              BLOG
            </span>

            <div className="flex items-center gap-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600">
                <HiPencilSquare className="w-7 h-7" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">블로그</h1>
                <p className="mt-1 text-gray-600">해외송금 팁, 환율 정보, 금융 이야기</p>
              </div>
            </div>

            {/* Category Filter */}
            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0
                      ? "bg-[#191c1f] text-white"
                      : "bg-white border border-[var(--border-soft)] text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="bg-[var(--surface-1)] py-10 lg:py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.3em] text-gray-400 mb-6">FEATURED</p>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/board/blog/${post.id}`}
                  className="group rounded-2xl border border-[var(--border-soft)] bg-white overflow-hidden shadow-[0_14px_32px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.1)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-emerald-50 to-emerald-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <HiPencilSquare className="w-12 h-12 text-emerald-300" />
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-semibold">
                      {post.category}
                    </span>
                    <h3 className="mt-3 text-base font-semibold text-[#191c1f] group-hover:text-[#ed1c24] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <HiClock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiEye className="w-3.5 h-3.5" />
                        {post.views.toLocaleString()}
                      </span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="bg-[var(--surface-0)] py-10 lg:py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold tracking-[0.3em] text-gray-400 mb-6">ALL POSTS</p>
            <div className="grid md:grid-cols-2 gap-6">
              {regularPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/board/blog/${post.id}`}
                  className="group flex gap-5 rounded-2xl border border-[var(--border-soft)] bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_14px_32px_rgba(15,23,42,0.08)] transition-all duration-300"
                >
                  <div className="shrink-0 w-28 h-20 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 overflow-hidden flex items-center justify-center">
                    <HiPencilSquare className="w-8 h-8 text-emerald-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-semibold">
                      {post.category}
                    </span>
                    <h3 className="mt-2 text-[#191c1f] font-medium truncate group-hover:text-[#ed1c24] transition-colors">
                      {post.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <HiClock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiEye className="w-3.5 h-3.5" />
                        {post.views.toLocaleString()}
                      </span>
                      <span>{post.date}</span>
                    </div>
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
