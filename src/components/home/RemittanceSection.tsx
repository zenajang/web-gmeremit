import Link from "next/link";

const features = [
  {
    title: "최적화된 금액",
    sub: "90% 절감",
    desc: "은행보다 90% 저렴한 수수료와 환전금액",
    backTitle: "압도적 비용 절감",
    backDesc: "은행 대비 최대 90% 저렴한 수수료. 실시간 환율로 더 많이 보내세요.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "쉽고 안전한",
    sub: "보안 인증",
    desc: "튼튼한 보안으로 안심하고 이용하세요",
    backTitle: "철저한 보안",
    backDesc: "E-KYC 인증과 금융위원회 등록 서비스로 안전하게 송금하세요.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "200개국 이상",
    sub: "100만+ 이용",
    desc: "전세계 백만명 이상이 GME와 함께합니다",
    backTitle: "글로벌 네트워크",
    backDesc: "200개국 이상, 70개 글로벌 파트너와 함께 전세계로 송금하세요.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "빠른 송금",
    sub: "몇 번의 클릭",
    desc: "몇 번의 클릭만으로 해외송금 완료",
    backTitle: "간편한 송금",
    backDesc: "복잡한 절차 없이 몇 번의 터치만으로 전세계 어디든 송금 완료.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function RemittanceSection() {
  return (
    <section id="overseas-remittance" className="relative min-h-screen overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fffafa] via-[#fff8f8] to-[#fff5f5]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#ed1c24]/[0.04] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#ff8a4c]/[0.05] blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ed1c24]/[0.02] blur-3xl" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.32em] text-[#ed1c24] mb-3">REMITTANCE</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#191c1f] leading-[1.08] mb-5">해외송금</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              200개국 이상으로 빠르고 안전하게 송금하세요.
            </p>
            <Link
              href="/personal/remittance"
              className="group inline-flex items-center gap-3 text-[#ed1c24] font-semibold bg-[#fee2e2] hover:bg-[#fecaca] px-5 py-3 rounded-xl transition-colors duration-250 ease-out cursor-pointer"
            >
              송금 서비스 알아보기
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#ed1c24] text-white transition-transform duration-300 ease-out group-hover:-rotate-45">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5 lg:gap-7">
            {features.map((item) => (
              <div key={item.title} className="relative flip-card h-72 w-full cursor-pointer">
                {/* 입체적 그림자 */}
                <div className="absolute inset-0 rounded-2xl bg-[#ed1c24]/8 translate-x-2 translate-y-2 blur-md" />
                <div className="absolute inset-0 rounded-2xl bg-[#ed1c24]/4 translate-x-4 translate-y-4 blur-lg" />
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-face rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(237,28,36,0.08),0_4px_12px_rgba(237,28,36,0.05)]">
                    <div className="absolute inset-0 bg-white backdrop-blur-xl border border-[#eee]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/10 to-transparent" />
                    <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),inset_0_-1px_0_rgba(255,255,255,0.18)]" />
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ed1c24]/10 to-transparent" />
                    <div className="absolute top-4 right-4 w-16 h-[1px] bg-gradient-to-r from-white/60 to-transparent rotate-45" />
                    <div className="absolute top-8 right-8 w-12 h-[1px] bg-gradient-to-r from-white/40 to-transparent rotate-45" />

                    <div className="relative h-full p-8 flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div className="w-15 h-15 rounded-xl bg-gradient-to-br from-[#ed1c24] to-[#ff6b6b] flex items-center justify-center shadow-lg">
                          {item.icon}
                        </div>
                        <span className="text-sm font-semibold text-[#ed1c24] bg-[#ed1c24]/10 px-2.5 py-1 rounded-full backdrop-blur-sm">{item.sub}</span>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-[#191c1f] mb-1">{item.title}</p>
                        <p className="text-base text-[#666] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="flip-card-face flip-card-back rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(237,28,36,0.25),0_4px_12px_rgba(0,0,0,0.1)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ed1c24] to-[#ff6b6b]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
                    <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-1px_0_rgba(255,255,255,0.15)]" />
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 w-20 h-[1px] bg-gradient-to-r from-white/30 to-transparent -rotate-45" />

                    <div className="relative h-full p-8 flex flex-col justify-center text-white">
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
