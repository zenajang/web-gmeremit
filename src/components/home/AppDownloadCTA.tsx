import Link from "next/link";

const stats = [
  { label: "누적 송금", value: "₩4.2T+" },
  { label: "활성 사용자", value: "820K" },
  { label: "평균 평점", value: "4.9" },
];

const features = [
  { label: "환율 알림", desc: "목표 환율 도달 시 즉시 알림" },
  { label: "송금 추적", desc: "도착까지 단계별로 확인" },
  { label: "수수료 확인", desc: "보내기 전에 총 비용을 확인" },
  { label: "안전한 인증", desc: "다단계 인증과 이상 거래 감지" },
];

export default function AppDownloadCTA() {
  return (
    <section className="bg-[var(--surface-0)] py-16 lg:py-24">
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[36px] bg-[#0b0b0d] px-6 py-12 sm:px-10 lg:px-16 lg:py-16 text-white shadow-[0_40px_100px_rgba(15,23,42,0.3)]">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#ed1c24]/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-[#ff8a4c]/20 blur-3xl" />
          <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white/70">
                {["실시간 환율", "송금 추적", "안전한 인증"].map((chip) => (
                  <span key={chip} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
                    {chip}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm font-semibold text-white/70">GME REMIT APP</p>
              <h3 className="mt-3 text-4xl sm:text-4xl lg:text-5xl font-bold leading-[1.15]">
                송금은 더 빠르게,
                <br />
                관리는 더 똑똑하게
              </h3>
              <p className="mt-4 max-w-2xl text-white/80">
                실시간 환율 확인부터 송금 추적, 수수료 확인까지.
                GME Remit 앱 하나로 안전하고 간편하게 관리하세요.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/download"
                  className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-[#191c1f] transition hover:bg-white/90"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#191c1f] text-white">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                  </span>
                  <span className="text-left leading-tight">
                    <span className="block text-xs font-medium text-gray-500">Download on the</span>
                    <span className="block text-base">App Store</span>
                  </span>
                </Link>
                <Link
                  href="/download"
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#4285F4] via-[#34A853] to-[#FBBC04]">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                    </svg>
                  </span>
                  <span className="text-left leading-tight">
                    <span className="block text-xs font-medium text-white/70">GET IT ON</span>
                    <span className="block text-base">Google Play</span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 text-center">
                {stats.map((item) => (
                  <div key={item.label} className="px-2">
                    <p className="text-[11px] font-semibold tracking-wide text-white/60">{item.label}</p>
                    <p className="mt-1 text-2xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {features.map((card) => (
                  <div key={card.label} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5">
                    <p className="text-sm font-semibold text-white">{card.label}</p>
                    <p className="mt-2 text-xs text-white/70">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
