import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const stats = [
  { label: "Global corridors", value: "200+" },
  { label: "Monthly transactions", value: "1.2M" },
  { label: "Average delivery", value: "<5 min" },
  { label: "Compliance coverage", value: "24/7" },
];

const values = [
  {
    title: "Trust by default",
    desc: "Bank-grade security, real-time monitoring, and transparent policies for every transfer.",
  },
  {
    title: "Customer first",
    desc: "Fast resolution, clear pricing, and human support built into every product flow.",
  },
  {
    title: "Global by design",
    desc: "Localized rails, multi-currency wallets, and reliable payout partners worldwide.",
  },
  {
    title: "Product discipline",
    desc: "Data-backed decisions with rigorous testing before we scale new features.",
  },
];

const milestones = [
  { year: "2016", desc: "Founded with a focus on cross-border remittance" },
  { year: "2018", desc: "Launched mobile-first transfers with same-day delivery" },
  { year: "2020", desc: "Expanded to 120+ corridors and enterprise APIs" },
  { year: "2023", desc: "Introduced multi-currency wallets and GME Card" },
  { year: "2025", desc: "Scaling global payouts with real-time compliance" },
];

export default function CompanyPage() {
  return (
    <>
      <Header />

      <main className="pt-16 lg:pt-20 bg-[var(--surface-1)] text-[#191c1f]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[var(--surface-0)]">
          <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[#ed1c24]/14 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#ff8a4c]/14 blur-3xl" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 lg:pt-20 pb-14 lg:pb-16">
            <span className="inline-flex items-center gap-2 bg-[var(--surface-2)] border border-[var(--border-soft)] text-[#191c1f] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              COMPANY INTRODUCTION
            </span>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  글로벌 송금을
                  <br />
                  더 쉽고 안전하게
                </h1>
                <p className="mt-5 text-lg text-gray-600 max-w-2xl">
                  Global Money Express는 해외 송금 경험을 빠르고 명확하게 만드는 글로벌 테크 금융 기업입니다.
                  고객이 원하는 속도, 비용, 투명성을 제품으로 구현합니다.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/download"
                    className="bg-[#ed1c24] hover:bg-[#c41920] text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
                  >
                    Download App
                  </Link>
                  <Link
                    href="/company/ceo-message"
                    className="border border-gray-300 hover:border-gray-400 text-[#191c1f] font-semibold px-6 py-3 rounded-full transition-colors duration-200"
                  >
                    CEO Message
                  </Link>
                </div>
              </div>

              <div className="rounded-[28px] border border-[var(--border-soft)] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)] p-6">
                <p className="text-xs font-semibold tracking-[0.3em] text-gray-400">AT A GLANCE</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {stats.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-[var(--border-soft)] bg-white p-4">
                      <p className="text-xs font-medium text-gray-500">{item.label}</p>
                      <p className="mt-2 text-2xl font-semibold text-[#191c1f]">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-[var(--border-soft)] bg-white px-4 py-3 text-sm text-gray-600">
                  평균 송금 시간, 환율 적용 방식, 수수료 구조까지 명확하게 공개합니다.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-[var(--surface-1)] py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] text-gray-400">OUR MISSION</p>
                <h2 className="text-3xl sm:text-4xl font-bold mt-3">
                  더 많은 사람이
                  <br />
                  국경을 넘어 연결되도록
                </h2>
                <p className="mt-4 text-gray-600">
                  송금은 단순한 금융 거래가 아니라 사람과 사람을 잇는 경험입니다.
                  우리는 안전한 인프라와 직관적인 UX로 이 경험을 설계합니다.
                </p>
              </div>
              <div className="rounded-[28px] border border-[var(--border-soft)] bg-white shadow-[0_22px_50px_rgba(15,23,42,0.08)] p-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold tracking-[0.3em] text-gray-400">CORE STRATEGY</p>
                  <span className="rounded-full bg-[#ed1c24]/10 px-3 py-1 text-xs font-semibold text-[#ed1c24]">2026</span>
                </div>
                <div className="mt-6 grid gap-4">
                  {[
                    "실시간 환율과 투명한 수수료",
                    "모바일 중심의 원클릭 송금",
                    "현지 최적화된 지급 인프라",
                    "규정 준수와 리스크 관리 자동화",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-[var(--border-soft)] bg-white px-4 py-3 text-sm text-gray-600">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[var(--surface-0)] py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold tracking-[0.3em] text-gray-400">VALUE</p>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3">제품과 문화가 만나는 지점</h2>
              <p className="text-gray-600 mt-3">기술과 규정을 함께 이해하는 팀으로 안전한 금융을 만듭니다.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl border border-[var(--border-soft)] bg-white p-6 shadow-[0_14px_32px_rgba(15,23,42,0.08)]">
                  <p className="text-sm font-semibold text-[#191c1f]">{value.title}</p>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="bg-[var(--surface-2)] py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] text-gray-400">HISTORY</p>
                <h2 className="text-3xl sm:text-4xl font-bold mt-3">성장하는 여정</h2>
              </div>
              <Link
                href="/company/history"
                className="text-[#ed1c24] font-semibold inline-flex items-center gap-2"
              >
                View All
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid gap-4">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="rounded-2xl border border-[var(--border-soft)] bg-white px-6 py-4 flex items-center justify-between">
                  <span className="text-lg font-semibold text-[#ed1c24]">{milestone.year}</span>
                  <span className="text-sm text-gray-600">{milestone.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#191c1f] text-white py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[28px] border border-white/10 bg-gradient-to-r from-[#1f2328] to-[#2a2f36] p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl lg:text-3xl font-semibold">GME Remit과 함께 성장하세요</h3>
                <p className="mt-3 text-white/70">
                  글로벌 금융 인프라를 만드는 여정에 합류하세요.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/company/careers"
                  className="bg-white text-[#191c1f] font-semibold px-6 py-3 rounded-full transition-colors duration-200"
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/30 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
