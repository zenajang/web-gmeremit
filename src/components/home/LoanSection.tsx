import Link from "next/link";

const features = [
  {
    label: "빠른 심사",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    label: "맞춤 한도",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    label: "자동 납부",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    label: "투명 금리",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    label: "안심 보안",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
];

export default function LoanSection() {
  return (
    <section id="online-loan" className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fffefb] via-[#fffdf7] to-[#fefce8]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#f59e0b]/[0.04] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#fbbf24]/[0.05] blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#f59e0b]/[0.02] blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[600px] lg:min-h-[700px] flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="rounded-3xl border border-[#eee] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] order-2 lg:order-1">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#191c1f]">대출 한도 조회</p>
                  <p className="text-[11px] text-[#999]">신용점수 영향 없음</p>
                </div>
              </div>
              <span className="rounded-full bg-[#f59e0b]/10 px-3 py-1 text-xs font-semibold text-[#f59e0b]">
                간편 조회
              </span>
            </div>

            {/* Loan Simulator */}
            <div className="rounded-2xl bg-[#fefce8] border border-[#fef08a] p-5 mb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-[#191c1f]">예상 대출 한도</span>
                <span className="text-[11px] text-[#999]">개인 신용 기준</span>
              </div>
              <p className="text-3xl font-bold text-[#f59e0b] mb-1">최대 5,000만원</p>
              <p className="text-xs text-[#888]">연 6.9% ~ 15.9% (1금융권 기준)</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-5 gap-2">
              {features.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-[#f8f9fa] p-3 text-center hover:bg-[#f0f1f3] transition-colors cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#f59e0b] mx-auto mb-1.5 shadow-sm">
                    {item.icon}
                  </div>
                  <p className="text-[10px] font-semibold text-[#191c1f]">{item.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="w-full mt-4 bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold py-3 rounded-xl transition-colors">
              내 한도 조회하기
            </button>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold tracking-[0.32em] text-[#f59e0b] mb-3">LOAN</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#191c1f] leading-[1.08] mb-5">온라인 대출</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              빠른 심사, 유연한 조건으로 필요한 자금을 간편하게 이용하세요.
            </p>
            <Link
              href="/personal/online-loan"
              className="group inline-flex items-center gap-3 text-[#f59e0b] font-semibold bg-[#fef3c7] hover:bg-[#fde68a] px-5 py-3 rounded-xl transition-colors cursor-pointer"
            >
              대출 서비스 알아보기
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#f59e0b] text-white transition-transform duration-300 group-hover:-rotate-45">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
