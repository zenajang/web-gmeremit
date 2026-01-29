import Link from "next/link";

const supportedCountries = [
  { code: "PH", name: "필리핀", flag: "🇵🇭" },
  { code: "VN", name: "베트남", flag: "🇻🇳" },
  { code: "NP", name: "네팔", flag: "🇳🇵" },
  { code: "ID", name: "인도네시아", flag: "🇮🇩" },
  { code: "TH", name: "태국", flag: "🇹🇭" },
  { code: "MM", name: "미얀마", flag: "🇲🇲" },
  { code: "CN", name: "중국", flag: "🇨🇳" },
  { code: "JP", name: "일본", flag: "🇯🇵" },
  { code: "US", name: "미국", flag: "🇺🇸" },
  { code: "BD", name: "방글라데시", flag: "🇧🇩" },
  { code: "LK", name: "스리랑카", flag: "🇱🇰" },
  { code: "PK", name: "파키스탄", flag: "🇵🇰" },
];

export default function HeroMain() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-[#fafafa] overflow-hidden snap-section">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Red Gradient Blush */}
        <div className="absolute top-1/4 -left-10 w-[500px] h-[500px] rounded-full bg-[#ed1c24]/[0.06] blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#ed1c24]/[0.04] blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 lg:pt-40 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#ed1c24]/10 px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a3c520] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a3c520]" />
              </span>
              <span className="text-sm font-semibold text-[#ed1c24]">우수한 해외송금</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#191c1f] leading-[1.18] tracking-tight mb-6">
              빠르고 안전한
              <br />
              <span className="text-[#ed1c24]">해외송금 서비스</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#666] leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              200개국 실시간 송금. 수수료 무료, 은행보다 좋은 환율로 전 세계 어디든 빠르게 보내세요.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <Link
                href="#app"
                className="group inline-flex items-center justify-center gap-2 bg-[#ed1c24] hover:bg-[#d91920] text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 shadow-[0_8px_24px_rgba(237,28,36,0.3)] hover:shadow-[0_12px_32px_rgba(237,28,36,0.4)] hover:-translate-y-0.5"
              >
                앱 다운로드
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#gme-payments"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-[#191c1f] font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300"
              >
                서비스 알아보기
              </Link>
            </div>

            {/* Inline Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-5 text-sm text-[#666]">
              <span className="flex items-center gap-1.5">
                <span className="font-bold text-[#191c1f]">82만+</span> 다운로드
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-bold text-[#191c1f]">4.9</span> 평점
              </span>
            </div>
          </div>
          {/* Right - Supported Countries Grid */}
          <div className="relative">
            {/* Background Card */}
            <div className="relative bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-bold text-[#191c1f]">송금 가능 국가</h3>
                  <p className="text-sm text-[#999]">200개국 이상 지원</p>
                </div>
                <div className="flex items-center gap-1.5 bg-[#ecfdf3] px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-[#166534]">실시간</span>
                </div>
              </div>

              {/* Countries Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {supportedCountries.slice(0, 11).map((country) => (
                  <div
                    key={country.code}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-b from-white to-[#f8fafc] border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  >
                    <span className="text-2xl">{country.flag}</span>
                    <span className="text-xs font-medium text-[#374151]">{country.name}</span>
                  </div>
                ))}
                {/* More Countries Card - Frosted Glass */}
                <Link
                  href="/countries"
                  className="relative flex flex-col items-center justify-center gap-1 p-3 rounded-xl bg-gradient-to-b from-[#fef2f2] to-[#fee2e2] border border-[#fecaca]/40 shadow-[0_2px_8px_rgba(237,28,36,0.08),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(237,28,36,0.05)] hover:shadow-[0_4px_12px_rgba(237,28,36,0.12),inset_0_2px_4px_rgba(255,255,255,0.9)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/70 via-transparent to-[#ed1c24]/5 pointer-events-none" />
                  <div className="absolute top-0 left-3 right-3 h-[1px] rounded-full bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
                  <span className="relative text-xl font-bold text-[#ed1c24]">+188</span>
                  <span className="relative text-[10px] font-medium text-[#ed1c24]/70">더보기</span>
                </Link>
              </div>

              {/* More Countries Link */}
              <div className="mt-6 pt-5 border-t border-gray-100">
                <Link
                  href="/countries"
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-[#ed1c24] hover:text-[#d91920] transition-colors"
                >
                  전체 국가 보기
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Floating Stats - Frosted Glass */}
            <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/50 ring-1 ring-black/[0.03]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-white/20 to-transparent pointer-events-none" />
              <p className="relative text-xs text-[#666] mb-1">누적 송금액</p>
              <p className="relative text-2xl font-bold text-[#191c1f]">4.2<span className="text-sm font-medium text-[#999] ml-0.5">조원+</span></p>
            </div>

            <div className="absolute -top-4 -right-4 bg-[#ed1c24]/80 backdrop-blur-xl text-white rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(237,28,36,0.3)] border border-white/20">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
              <p className="relative text-xs opacity-90 mb-1">평균 송금 시간</p>
              <p className="relative text-2xl font-bold">10<span className="text-sm font-medium opacity-90 ml-0.5">초</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-45 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-10 rounded-full border-2 border-[#d1d5db] flex justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-[#9ca3af] animate-[scrollMouse_1.5s_ease-in-out_infinite]" />
        </div>
        <span className="text-[11px] text-[#9ca3af] font-medium tracking-wide">SCROLL</span>
      </div>

      {/* Bottom Fade Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e5e5e5] to-transparent" />
    </section>
  );
}
