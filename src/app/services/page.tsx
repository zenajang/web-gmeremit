import Image from "next/image";
import PublicLayout from "@/components/layout/PublicLayout";

export default function ServicesPage() {
  return (
    <PublicLayout className="bg-white">
      {/* Services Section */}
        <section className="pt-16 lg:pt-20 pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12 lg:mb-16">
              <p className="typo-eyebrow text-primary mb-3">
                Services
              </p>
              <h2 className="typo-page-title tracking-tight">
                Our Services
              </h2>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {[
                { title: "B2B Payments", desc: "Fast cross-border payouts", color: "#3b82f6", icon: "", iconImage: "/images/common/globev.png" },
                { title: "Remittance", desc: "Send money globally", color: "#ed1c24", icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" },
                { title: "Easy Loan", desc: "Same day approval", color: "#f59e0b", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                { title: "Digital Wallet", desc: "Easy payments", color: "#10b981", icon: "", iconImage: "/images/common/card.png" },
                { title: "Exchange", desc: "Best rates available", color: "#8b5cf6", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
                { title: "Mobile Topup", desc: "150+ countries", color: "#06b6d4", icon: "", iconImage: "/images/common/phone.png" },
                { title: "Local Transfer", desc: "Quick & easy", color: "#ec4899", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                { title: "Gift Coupons", desc: "Share with loved ones", color: "#f43f5e", icon: "", iconImage: "/images/common/gift.png" },
              ].map((service) => (
                <div
                  key={service.title}
                  className="group relative bg-white rounded-xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    {("iconImage" in service && service.iconImage) ? (
                      <Image src={service.iconImage} alt={service.title} width={24} height={24} className="w-6 h-6 object-contain" />
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke={service.color} strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                      </svg>
                    )}
                  </div>
                  <h3 className="typo-base-title mb-1.5">{service.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
    </PublicLayout>
  );
}
