import Link from "next/link";

const features = [
  {
    label: "14개국+",
    desc: "서비스",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    label: "100만+",
    desc: "대출 성공",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    label: "24/7",
    desc: "고객 지원",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    label: "실시간",
    desc: "진행 확인",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    label: "간편",
    desc: "앱 신청",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
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
          <div className="relative order-2 lg:order-1">
            {/* 입체적 그림자 */}
            <div className="absolute inset-0 rounded-3xl bg-[#f59e0b]/10 translate-x-3 translate-y-3 blur-lg" />
            <div className="absolute inset-0 rounded-3xl bg-[#f59e0b]/5 translate-x-5 translate-y-5 blur-xl" />
          <div className="relative rounded-3xl border border-[#eee] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#191c1f]">GME Finance</p>
                  <p className="text-[11px] text-[#999]">외국인 전용 대출</p>
                </div>
              </div>
              <span className="rounded-full bg-[#f59e0b]/10 px-3 py-1 text-xs font-semibold text-[#f59e0b]">
                간편 신청
              </span>
            </div>

            {/* Loan Stats */}
            <div className="rounded-2xl bg-[#fefce8] border border-[#fef08a] p-5 mb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-[#191c1f]">누적 대출 실적</span>
                <span className="text-[11px] text-[#999]">GME Finance</span>
              </div>
              <p className="text-3xl font-bold text-[#f59e0b] mb-1">₩5,000억+</p>
              <p className="text-xs text-[#888]">100만+ 성공 대출 · 14개국 서비스</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-5 gap-2">
              {features.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-[#f8f9fa] p-3 text-center hover:bg-[#f0f1f3] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#f59e0b] mx-auto mb-1.5 shadow-sm">
                    {item.icon}
                  </div>
                  <p className="text-[12px] font-bold text-[#191c1f]">{item.label}</p>
                  <p className="text-[10px] text-[#888]">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="w-full mt-4 bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold py-3 rounded-xl transition-colors cursor-pointer">
              GME 앱에서 대출 신청
            </button>
          </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold tracking-[0.32em] text-[#f59e0b] mb-3">GME FINANCE</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#191c1f] leading-[1.08] mb-5">온라인 대출</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              GME 앱에서 몇 분 만에 대출 신청. 실시간 처리 현황과 잔액을 언제 어디서든 확인하세요.
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
