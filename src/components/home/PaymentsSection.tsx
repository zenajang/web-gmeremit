import Link from "next/link";

const stats = [
  { label: "비용 절감", value: "최대 70%", change: "vs 기존", color: "#3b82f6" },
  { label: "파트너사", value: "200+", change: "글로벌", color: "#3b82f6" },
  { label: "처리 성공률", value: "99.8%", change: "정상", color: "#22c55e" },
];

const transactions = [
  { icon: "💼", name: "B2B 대량 송금", amount: "₩128,500,000", time: "방금 전", status: "완료", statusColor: "#22c55e" },
  { icon: "🏢", name: "파트너사 정산", amount: "₩45,200,000", time: "2분 전", status: "처리중", statusColor: "#f59e0b" },
  { icon: "🛒", name: "가맹점 결제", amount: "₩18,700,000", time: "5분 전", status: "완료", statusColor: "#22c55e" },
];

const features = [
  {
    title: "SPS",
    desc: "B2B 결제 솔루션",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  },
  {
    title: "VAS",
    desc: "알림·리포트·대시보드",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "SMB",
    desc: "이커머스 솔루션",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
];

export default function PaymentsSection() {
  return (
    <section id="payments-section" className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fafbff] via-[#f5f8ff] to-[#eff6ff]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#3b82f6]/[0.04] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#60a5fa]/[0.05] blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#3b82f6]/[0.02] blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[600px] lg:min-h-[700px] flex items-center">
        <div className="w-full grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center">
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold tracking-[0.32em] text-[#3b82f6] mb-3">PAYMENTS</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#191c1f] leading-[1.08] mb-5">Global Payments</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              급여 송금, 파트너 정산, 이커머스 결제까지. 비용 절감과 효율적인 기업 결제 솔루션을 제공합니다.
            </p>
            <Link
              href="/business"
              className="group inline-flex items-center gap-3 text-[#3b82f6] font-semibold bg-[#dbeafe] hover:bg-[#bfdbfe] px-5 py-3 rounded-xl transition-colors cursor-pointer"
            >
              Payments 자세히 보기
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#3b82f6] text-white transition-transform duration-300 group-hover:-rotate-45">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* 입체적 그림자 */}
              <div className="absolute inset-0 rounded-3xl bg-[#3b82f6]/10 translate-x-3 translate-y-3 blur-lg" />
              <div className="absolute inset-0 rounded-3xl bg-[#3b82f6]/5 translate-x-5 translate-y-5 blur-xl" />
            <div className="relative rounded-3xl border border-[#eee] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#191c1f]">Payment Solutions</p>
                    <p className="text-[11px] text-[#999]">기업 맞춤 솔루션</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                  <span className="text-xs font-semibold text-[#22c55e]">운영중</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-[#f8f9fa] p-3.5">
                    <p className="text-[11px] text-[#888] mb-1">{stat.label}</p>
                    <p className="text-lg font-bold text-[#191c1f]">{stat.value}</p>
                    <p className="text-[10px] font-semibold mt-0.5" style={{ color: stat.color }}>{stat.change}</p>
                  </div>
                ))}
              </div>

              {/* Transaction List */}
              <div className="rounded-2xl border border-[#f0f0f0] overflow-hidden">
                <div className="px-4 py-2.5 bg-[#fafafa] border-b border-[#f0f0f0]">
                  <p className="text-[11px] font-semibold text-[#888]">최근 처리 내역</p>
                </div>
                <div className="divide-y divide-[#f0f0f0]">
                  {transactions.map((tx) => (
                    <div key={tx.name} className="flex items-center justify-between px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{tx.icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-[#191c1f]">{tx.name}</p>
                          <p className="text-[11px] text-[#999]">{tx.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-[#191c1f]">{tx.amount}</p>
                        <p className="text-[10px] font-semibold" style={{ color: tx.statusColor }}>{tx.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Cards */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {features.map((feature) => (
                  <div key={feature.title} className="rounded-xl bg-[#f8f9fa] p-3 text-center hover:bg-[#f0f1f3] transition-colors cursor-pointer">
                    <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#3b82f6] mx-auto mb-2 shadow-sm">
                      {feature.icon}
                    </div>
                    <p className="text-xs font-bold text-[#191c1f]">{feature.title}</p>
                    <p className="text-[10px] text-[#888] mt-0.5">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
