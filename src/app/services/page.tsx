"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-[82px] lg:pt-[110px] bg-white min-h-screen">
        {/* Services Section */}
        <section className="pt-16 lg:pt-20 pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12 lg:mb-16">
              <p className="text-xs font-semibold text-[#ed1c24] tracking-[0.2em] mb-3 uppercase">
                Services
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#191c1f] tracking-tight">
                Our Services
              </h2>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {[
                { title: "B2B Payments", desc: "Fast cross-border payouts", color: "#3b82f6", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
                { title: "Remittance", desc: "Send money globally", color: "#ed1c24", icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" },
                { title: "Easy Loan", desc: "Same day approval", color: "#f59e0b", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                { title: "Digital Wallet", desc: "Easy payments", color: "#10b981", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
                { title: "Exchange", desc: "Best rates available", color: "#8b5cf6", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
                { title: "Mobile Topup", desc: "150+ countries", color: "#06b6d4", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
                { title: "Local Transfer", desc: "Quick & easy", color: "#ec4899", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                { title: "Gift Coupons", desc: "Share with loved ones", color: "#f43f5e", icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" },
              ].map((service) => (
                <div
                  key={service.title}
                  className="group relative bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke={service.color}
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-[#191c1f] mb-1.5">{service.title}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
