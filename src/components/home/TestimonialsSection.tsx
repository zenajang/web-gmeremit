const testimonials = [
  {
    quote: "I love how simple and quick the process is with GME Remittance. My family gets the money instantly, and I can track everything!",
    name: "Dos James",
    meta: "GME Remittance",
    tag: "간편 송금 및 추적",
  },
  {
    quote: "I was amazed at how simple it was to apply for a loan with GME. Their flexible terms and great customer service made all the difference.",
    name: "Yin Zaw",
    meta: "GME Loan",
    tag: "서비스 만족",
  },
  {
    quote: "I love the flexibility of my GME Card. Whether I'm shopping or paying bills, it works flawlessly and makes my life easier!",
    name: "Suni Lee",
    meta: "GME Card",
    tag: "빠른 처리",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-[var(--surface-warm)] py-16 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none text-[#ed1c24] opacity-[0.045]"
      >
        <div className="mx-auto flex max-w-[1800px] flex-col gap-6 px-6 py-8 text-5xl font-bold uppercase tracking-[0.22em] lg:text-7xl">
          {Array.from({ length: 2 }).map((_, row) => (
            <div
              key={row}
              className={`flex whitespace-nowrap ${row % 2 === 0 ? "-translate-x-6" : "-translate-x-24"}`}
            >
              {Array.from({ length: 6 }).map((__, i) => (
                <span key={i} className="mr-10">
                  Global Money Express
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-14">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#ed1c24] mb-3">TESTIMONIALS</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#191c1f]">고객의 말</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto mt-4">
            이 영역에 고객 후기를 넣어주세요.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7 lg:gap-9">
          {testimonials.map((item, index) => (
            <div
              key={item.quote}
              className="flex h-full flex-col rounded-2xl border border-[var(--border-soft)] bg-white p-7 lg:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface-2)] text-base font-semibold text-[#191c1f]">
                    {item.name.slice(0, 1)}
                  </div>
                  <div className="text-left">
                    <p className="text-base font-semibold text-[#191c1f]">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.meta}</p>
                  </div>
                </div>
                <span className="rounded-full border border-[#ed1c24]/25 bg-[#ed1c24]/10 px-3.5 py-1.5 text-xs font-semibold text-[#c41920] shadow-[0_4px_10px_rgba(237,28,36,0.16)] ring-1 ring-[#ed1c24]/15">
                  {item.tag}
                </span>
              </div>

              <div className="mt-6 flex items-center gap-1 text-[#ed1c24]">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <svg key={`${index}-${starIndex}`} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.9 6.3L22 9l-5 4.8L18.2 22 12 18.3 5.8 22 7 13.8 2 9l7.1-.7L12 2z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm font-semibold text-gray-500">5.0</span>
              </div>

              <div className="relative mt-5 flex-1">
                <svg
                  className="absolute -left-1 -top-1 h-6 w-6 text-[#ed1c24]/20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 11h4v10H1V11c0-5.5 2.7-8.9 8-10v4.1C6.3 6.2 5 8.1 5 11h2zm12 0h4v10H13V11c0-5.5 2.7-8.9 8-10v4.1c-2.7 1.1-4 3-4 5.9h2z" />
                </svg>
                <p className="pl-7 text-base leading-relaxed text-gray-700">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
