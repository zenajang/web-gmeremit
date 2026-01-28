import Link from "next/link";

const services = [
  {
    title: "Payments",
    desc: "국경을 넘는 지급과 정산을 더 빠르고 투명하게.",
    href: "#payments-section",
    color: "#3b82f6",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <rect x="6" y="14" width="38" height="28" rx="5" fill="#dbeafe" />
        <rect x="18" y="22" width="38" height="28" rx="5" fill="#3b82f6" />
        <circle cx="37" cy="36" r="6" fill="#fff" fillOpacity="0.9" />
        <rect x="26" y="42" width="12" height="3" rx="1.5" fill="#fff" fillOpacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Remittance",
    desc: "200+ 국가로 연결되는 빠르고 안전한 송금.",
    href: "#overseas-remittance",
    color: "#ed1c24",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <circle cx="30" cy="34" r="20" fill="#fed7d7" />
        <circle cx="30" cy="34" r="15" fill="#ed1c24" />
        <path d="M30 24v20M20 34h20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M23 27l14 14M37 27l-14 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" />
        <path d="M46 14l6-6m0 0l6 6m-6-6v12" stroke="#ed1c24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Online Loan",
    desc: "빠른 심사와 유연한 조건의 디지털 대출.",
    href: "#online-loan",
    color: "#f59e0b",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <rect x="10" y="6" width="30" height="44" rx="5" fill="#fef3c7" />
        <rect x="18" y="12" width="30" height="44" rx="5" fill="#f59e0b" />
        <rect x="24" y="20" width="18" height="4" rx="2" fill="#fff" fillOpacity="0.9" />
        <rect x="24" y="28" width="14" height="3" rx="1.5" fill="#fff" fillOpacity="0.6" />
        <rect x="24" y="34" width="16" height="3" rx="1.5" fill="#fff" fillOpacity="0.6" />
        <circle cx="33" cy="48" r="6" fill="#fff" fillOpacity="0.9" />
        <path d="M30 48l2 2 4-4" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Cards",
    desc: "송금과 소비를 연결하는 GME 카드 경험.",
    href: "#gme-cards",
    color: "#374151",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
        <rect x="4" y="18" width="42" height="30" rx="5" fill="#e5e7eb" />
        <rect x="14" y="14" width="42" height="30" rx="5" fill="#1f2937" />
        <rect x="14" y="22" width="42" height="7" fill="#111827" />
        <rect x="20" y="36" width="12" height="4" rx="2" fill="#fff" fillOpacity="0.9" />
        <rect x="36" y="36" width="14" height="4" rx="2" fill="#fff" fillOpacity="0.5" />
        <circle cx="50" cy="18" r="8" fill="#fbbf24" />
        <circle cx="50" cy="18" r="4" fill="#f59e0b" />
      </svg>
    ),
  },
];

export default function MainServices() {
  return (
    <section id="gme-payments" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ed1c24]/20 to-transparent" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#ed1c24]/[0.06] to-transparent rounded-full blur-3xl" />
      <div className="absolute top-20 left-1/4 w-[300px] h-[300px] bg-[#ed1c24]/[0.03] rounded-full blur-3xl" />
      <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-[#ff8a4c]/[0.04] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.32em] text-[#ed1c24]/60 mb-3">MAIN SERVICES</p>

          <div className="relative inline-block">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[180%] pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-[#ed1c24]/[0.08] rounded-full blur-lg" />
              <div className="absolute top-[45%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[50%] h-[55%] bg-[#ed1c24]/[0.06] rounded-full blur-md" />
              <div className="absolute top-[55%] left-[42%] -translate-x-1/2 -translate-y-1/2 w-[40%] h-[50%] bg-[#ff8a4c]/[0.05] rounded-full blur-md" />
            </div>
            <h2 className="relative text-4xl sm:text-5xl font-bold text-[#191c1f] leading-[1.08]">핵심 서비스</h2>
          </div>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            Payments, Remittance, Loans, Cards까지. GME Remit의 주요 서비스를 한눈에 확인하세요.
          </p>
        </div>

        <div className="grid gap-7 md:gap-8 md:grid-cols-2 xl:gap-10 xl:grid-cols-4">
          {services.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm border border-[#f0f0f0] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:border-transparent"
            >
              <div className="mb-5 transition-transform duration-300 group-hover:scale-105">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#191c1f] mb-2">{item.title}</h3>
              <p className="text-sm text-[#666] leading-relaxed flex-1">{item.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold" style={{ color: item.color }}>
                자세히 보기
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
