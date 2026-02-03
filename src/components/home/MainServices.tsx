import Link from "next/link";

export default function MainServices() {
  return (
    <section id="gme-payments" className="relative overflow-hidden bg-[#f5f5f7] min-h-screen py-16 lg:py-20 flex items-center">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#191c1f] leading-tight">
            저희 GME의
            <br />
            다양한 서비스를 만나보세요.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {/* Payments - Large Card */}
          <Link
            href="#payments-section"
            className="group md:col-span-2 relative overflow-hidden rounded-3xl bg-[#3b82f6] p-8 lg:p-10 min-h-[320px] lg:min-h-[330px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 shadow-[0_35px_60px_-15px_rgba(59,130,246,0.5)] hover:shadow-[0_45px_80px_-15px_rgba(59,130,246,0.6)]"
          >
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">Global Payments</h3>
              <p className="text-white/80 text-base lg:text-lg leading-relaxed max-w-md">
                대량 지급, 정산, 파트너 송금까지.
                <br />
                기업 지급 흐름을 빠르고 안전하게.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-8 right-8 lg:top-10 lg:right-10 flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-white/30 backdrop-blur flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="flex gap-3 ml-8">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-[#60a5fa] flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Remittance - Small Card */}
          <Link
            href="#overseas-remittance"
            className="group relative overflow-hidden rounded-3xl bg-[#ed1c24] p-8 lg:p-10 min-h-[320px] lg:min-h-[330px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 shadow-[0_35px_60px_-15px_rgba(237,28,36,0.5)] hover:shadow-[0_45px_80px_-15px_rgba(237,28,36,0.6)]"
          >
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">해외송금</h3>
              <p className="text-white/80 text-base leading-relaxed">
                200개국 이상으로 빠르고
                <br />
                안전하게 송금하세요.
              </p>
            </div>

            {/* Globe Illustration */}
            <div className="absolute top-1/2 right-4 lg:right-6 -translate-y-1/3">
              <div className="relative">
                <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full border-2 border-white/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full border border-white/20" />
                </div>
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/20" />
                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/20" />
                <div className="absolute top-2 right-2 lg:top-4 lg:right-4 w-3 h-3 rounded-full bg-white animate-pulse" />
              </div>
            </div>

            <div className="relative z-10">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Loan - Small Card (Yellow) */}
          <Link
            href="#online-loan"
            className="group relative overflow-hidden rounded-3xl bg-[#f59e0b] p-8 lg:p-10 min-h-[320px] lg:min-h-[330px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 shadow-[0_35px_60px_-15px_rgba(245,158,11,0.5)] hover:shadow-[0_45px_80px_-15px_rgba(245,158,11,0.6)]"
          >
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">온라인 대출</h3>
              <p className="text-white/90 text-base leading-relaxed">
                빠른 심사와 유연한 조건의
                <br />
                디지털 대출 서비스
              </p>
            </div>

            {/* Calculator UI Mock */}
            <div className="absolute bottom-16 right-4 lg:right-8">
              <div className="bg-white/20 backdrop-blur rounded-xl p-4 border border-white/20 shadow-2xl">
                <div className="text-[10px] text-white/70 mb-1">예상 한도</div>
                <div className="text-xl font-bold text-white">5,000만원</div>
                <div className="mt-2 flex gap-1">
                  <div className="h-1 w-12 rounded-full bg-white" />
                  <div className="h-1 w-6 rounded-full bg-white/40" />
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Cards - Large Card (Black) */}
          <Link
            href="#gme-cards"
            className="group md:col-span-2 relative overflow-hidden rounded-3xl bg-[#1f2937] p-8 lg:p-10 min-h-[320px] lg:min-h-[330px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 shadow-[0_35px_60px_-15px_rgba(31,41,55,0.6)] hover:shadow-[0_45px_80px_-15px_rgba(31,41,55,0.7)]"
          >
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">GME Card</h3>
              <p className="text-white/70 text-base lg:text-lg leading-relaxed max-w-md">
                송금과 소비를 연결하는 스마트한 카드.
                <br />
                글로벌 결제의 새로운 기준.
              </p>
            </div>

            {/* Card Illustration */}
            <div className="absolute top-1/2 right-8 lg:right-16 -translate-y-1/2">
              <div className="relative">
                {/* Back Card - Silver/Platinum */}
                <div className="absolute -top-4 -left-4 w-40 h-24 lg:w-52 lg:h-32 rounded-xl bg-gradient-to-br from-[#c0c0c0] to-[#e8e8e8] transform rotate-[-8deg] shadow-xl" />
                {/* Front Card - GME Red Premium */}
                <div className="relative w-40 h-24 lg:w-52 lg:h-32 rounded-xl bg-gradient-to-br from-[#ed1c24] to-[#ff6b6b] shadow-2xl transform rotate-[4deg]">
                  <div className="absolute top-3 left-4 w-8 h-6 rounded bg-[#fbbf24]" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="h-2 w-20 rounded bg-white/40 mb-1" />
                    <div className="h-1.5 w-12 rounded bg-white/30" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white transition-transform duration-300 group-hover:translate-x-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
