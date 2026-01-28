import Link from "next/link";

const countries = [
  { flag: "🇵🇭", name: "필리핀", code: "PHP" },
  { flag: "🇻🇳", name: "베트남", code: "VND" },
  { flag: "🇳🇵", name: "네팔", code: "NPR" },
  { flag: "🇮🇩", name: "인도네시아", code: "IDR" },
  { flag: "🇹🇭", name: "태국", code: "THB" },
  { flag: "🇲🇲", name: "미얀마", code: "MMK" },
  { flag: "🇨🇳", name: "중국", code: "CNY" },
  { flag: "🇯🇵", name: "일본", code: "JPY" },
];

const stats = [
  { value: "200", unit: "개국+", label: "송금 가능 국가", accent: "#ed1c24" },
  { value: "4.2", unit: "조원", label: "누적 송금액", accent: "#ed1c24" },
  { value: "82", unit: "만+", label: "앱 다운로드", accent: "#ed1c24" },
  { value: "4.9", unit: "/5.0", label: "앱스토어 평점", accent: "#ed1c24" },
];

export default function HeroMain() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fafafa] to-[#f5f5f5]" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-[#ed1c24]/[0.04]" />
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-[#ed1c24]/[0.06]" />
        <div className="absolute -top-10 -right-10 w-[300px] h-[300px] rounded-full border border-[#ed1c24]/[0.08]" />
        <div className="absolute bottom-20 -left-32 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#ed1c24]/[0.03] to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-[200px] h-[200px] rounded-full bg-[#ff8a4c]/[0.04] blur-2xl" />

        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `radial-gradient(#ed1c24 0.5px, transparent 0.5px)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="absolute top-28 left-[8%] w-3 h-3 rounded-full bg-[#ed1c24]/20 animate-float" />
        <div className="absolute top-40 right-[12%] w-2 h-2 rounded-full bg-[#ff8a4c]/30 animate-float delay-300" />
        <div className="absolute bottom-32 left-[15%] w-2.5 h-2.5 rounded-full bg-[#2ac4ea]/25 animate-float delay-500" />
        <div className="absolute bottom-48 right-[18%] w-2 h-2 rounded-full bg-[#ed1c24]/15 animate-float delay-200" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-16 items-center mb-14 lg:mb-16">
          {/* Left - Text Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-up inline-flex items-center gap-2 bg-[#ed1c24]/[0.08] px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ed1c24] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ed1c24]" />
              </span>
              <span className="text-sm font-semibold text-[#ed1c24]">대한민국 1위 해외송금</span>
            </div>

            <h1 className="animate-fade-up delay-100 text-[2rem] sm:text-4xl lg:text-5xl font-bold text-[#191c1f] leading-tight mb-5">
              빠르고 안전한
              <br />
              <span className="text-[#ed1c24]">해외송금 서비스</span>
            </h1>

            <p className="animate-fade-up delay-200 text-base sm:text-lg text-[#666] leading-relaxed mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0">
              전 세계 <span className="font-semibold text-[#191c1f]">200개국</span>으로 송금하세요.
              <br className="hidden sm:block" />
              최저 수수료, 최고 환율, 은행급 보안을 경험하세요.
            </p>

            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <Link
                href="#app"
                className="inline-flex items-center justify-center gap-2 bg-[#ed1c24] hover:bg-[#d91920] text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-colors cursor-pointer shadow-[0_8px_24px_rgba(237,28,36,0.25)]"
              >
                앱 다운로드
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#gme-payments"
                className="inline-flex items-center justify-center gap-2 bg-[#e5e5e5] hover:bg-[#d6d6d6] text-[#191c1f] font-semibold px-7 py-3.5 rounded-xl text-base transition-colors cursor-pointer"
              >
                서비스 알아보기
              </Link>
            </div>

            <div className="animate-fade-up delay-400 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-[#666]">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#ed1c24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>금융위원회 등록</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#ed1c24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>256-bit 보안</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#ed1c24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>24시간 실시간 처리</span>
              </div>
            </div>
          </div>

          {/* Right - Supported Countries Grid */}
          <div className="animate-fade-up delay-300 hidden lg:block">
            <div className="relative">
              <div className="bg-white rounded-3xl border border-[#eee] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs font-semibold text-[#999] tracking-wider">SUPPORTED COUNTRIES</p>
                    <p className="text-sm font-semibold text-[#191c1f] mt-1">주요 송금 국가</p>
                  </div>
                  <span className="text-xs font-semibold text-[#ed1c24] bg-[#ed1c24]/10 px-3 py-1.5 rounded-full">200+ 국가</span>
                </div>

                <div className="grid grid-cols-4 gap-3 mb-5">
                  {countries.map((country) => (
                    <div
                      key={country.code}
                      className="group bg-[#f8f8f8] hover:bg-[#ed1c24]/5 rounded-xl p-3 text-center transition-colors cursor-pointer"
                    >
                      <span className="text-2xl block mb-1">{country.flag}</span>
                      <p className="text-[10px] font-medium text-[#666] group-hover:text-[#ed1c24] transition-colors">{country.name}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between bg-gradient-to-r from-[#f8f8f8] to-[#f0f0f0] rounded-xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {["🇺🇸", "🇬🇧", "🇦🇺", "🇨🇦"].map((flag, i) => (
                        <span key={i} className="w-7 h-7 rounded-full bg-white border-2 border-white flex items-center justify-center text-sm shadow-sm">
                          {flag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-medium text-[#666]">+192개 국가</span>
                  </div>
                  <svg className="w-4 h-4 text-[#999]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-[#ed1c24] text-white rounded-2xl px-4 py-3 shadow-[0_12px_30px_rgba(237,28,36,0.3)]">
                <p className="text-[10px] font-medium opacity-80">실시간 처리</p>
                <p className="text-lg font-bold">10초</p>
              </div>

              <div className="absolute -bottom-3 -left-3 bg-white border border-[#eee] rounded-2xl px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-[#22c55e]/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[10px] text-[#999]">수수료</p>
                    <p className="text-sm font-bold text-[#22c55e]">무료</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="animate-fade-up delay-500">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative bg-white rounded-2xl border border-[#f0f0f0] p-5 sm:p-6 overflow-hidden transition-all duration-300 hover:border-[#ed1c24]/20 hover:shadow-[0_8px_24px_rgba(237,28,36,0.08)]"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${stat.accent}, ${stat.accent}dd)` }}
                />
                <p className="text-[11px] font-medium text-[#999] mb-2 tracking-wide">{stat.label}</p>
                <p className="text-[1.75rem] sm:text-[2rem] font-bold text-[#191c1f] leading-none">
                  {stat.value}
                  <span className="text-sm sm:text-base font-medium text-[#bbb] ml-0.5">{stat.unit}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
