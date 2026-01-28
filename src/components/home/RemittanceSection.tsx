import Link from "next/link";

const features = [
  {
    title: "전 세계 연결",
    sub: "200+ 국가",
    desc: "현지 은행과 모바일 지갑으로 바로 송금",
    backTitle: "글로벌 네트워크",
    backDesc: "전 세계 200개국 이상의 파트너 은행과 모바일 지갑으로 빠르고 안전하게 송금할 수 있습니다.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "실시간 송금",
    sub: "평균 10초",
    desc: "은행 영업시간 상관없이 24시간 즉시 도착",
    backTitle: "즉시 도착",
    backDesc: "24시간 365일 실시간 송금. 평균 10초 내 수취인 계좌에 도착합니다.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "투명한 수수료",
    sub: "숨은 비용 0원",
    desc: "보내기 전에 수수료와 환율 모두 확인",
    backTitle: "정직한 가격",
    backDesc: "숨겨진 수수료 없이 송금 전 총 비용과 환율을 미리 확인하세요.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "실시간 추적",
    sub: "알림 제공",
    desc: "송금 시작부터 도착까지 단계별 알림",
    backTitle: "단계별 알림",
    backDesc: "송금 시작부터 도착까지 모든 단계를 실시간 푸시 알림으로 확인하세요.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
];

export default function RemittanceSection() {
  return (
    <section id="overseas-remittance" className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fffafa] via-[#fff8f8] to-[#fff5f5]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ed1c24]/[0.04] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#ff8a4c]/[0.05] blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ed1c24]/[0.02] blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[600px] lg:min-h-[700px] flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.32em] text-[#ed1c24] mb-3">REMITTANCE</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#191c1f] leading-[1.08] mb-5">해외송금</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              200개국 이상으로 빠르고 안전하게 송금하세요.
            </p>
            <Link
              href="/personal/remittance"
              className="group inline-flex items-center gap-3 text-[#ed1c24] font-semibold bg-[#fee2e2] hover:bg-[#fecaca] px-5 py-3 rounded-xl transition-colors cursor-pointer"
            >
              송금 서비스 알아보기
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#ed1c24] text-white transition-transform duration-300 group-hover:-rotate-45">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5 lg:gap-7">
            {features.map((item) => (
              <div key={item.title} className="flip-card h-56 w-full cursor-pointer">
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-face rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-white backdrop-blur-xl border border-white/70 shadow-[0_12px_32px_rgba(15,23,42,0.12)]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/10 to-transparent" />
                    <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),inset_0_-1px_0_rgba(255,255,255,0.18)]" />
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ed1c24]/10 to-transparent" />
                    <div className="absolute top-4 right-4 w-16 h-[1px] bg-gradient-to-r from-white/60 to-transparent rotate-45" />
                    <div className="absolute top-8 right-8 w-12 h-[1px] bg-gradient-to-r from-white/40 to-transparent rotate-45" />

                    <div className="relative h-full p-6 flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ed1c24] to-[#ff6b6b] flex items-center justify-center shadow-lg">
                          {item.icon}
                        </div>
                        <span className="text-sm font-semibold text-[#ed1c24] bg-[#ed1c24]/10 px-2.5 py-1 rounded-full backdrop-blur-sm">{item.sub}</span>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-[#191c1f] mb-1">{item.title}</p>
                        <p className="text-base text-[#666] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="flip-card-face flip-card-back rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ed1c24]/80 to-[#ff6b6b]/80 backdrop-blur-xl" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
                    <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-1px_0_rgba(255,255,255,0.15)]" />
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 w-20 h-[1px] bg-gradient-to-r from-white/30 to-transparent -rotate-45" />

                    <div className="relative h-full p-6 flex flex-col justify-center text-white">
                      <p className="text-2xl font-bold mb-2">{item.backTitle}</p>
                      <p className="text-base leading-relaxed text-white/90">{item.backDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
