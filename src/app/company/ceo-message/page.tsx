"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function CEOPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20 bg-[#fafbfc] min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#191c1f] to-[#2d3138] text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">CEO Message</h1>
            <p className="text-gray-300 text-lg">
              Leadership vision for GME Remit
            </p>
          </div>
        </section>

        {/* CEO Content Section */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* CEO Image */}
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 flex items-end justify-center p-8 lg:p-12 min-h-[400px] lg:min-h-[600px]">
                  <div className="relative w-full max-w-md">
                    <Image
                      src="/images/company/ceo-message/Ceo-picture.png"
                      alt="Sung Jong Hwa - CEO of GME Remit"
                      width={400}
                      height={500}
                      className="w-full h-auto object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Message Content */}
                <div className="relative flex flex-col justify-center p-8 lg:p-12 xl:p-16">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "url('/images/company/ceo-message/message.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Quote Icon */}
                    <div className="text-[#ed1c24] text-6xl lg:text-8xl font-serif leading-none mb-4">
                      &ldquo;
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 leading-relaxed mb-8">
                      As a leading fintech company in South Korea, we invest in cutting-edge technology and our people, which will continue to achieve mutual growth, customer success, and bring the most convenient service to all.
                    </blockquote>

                    {/* Closing Quote */}
                    <div className="text-[#ed1c24] text-6xl lg:text-8xl font-serif leading-none text-right mb-8">
                      &rdquo;
                    </div>

                    {/* CEO Info */}
                    <div className="border-t border-gray-200 pt-6">
                      <p className="text-2xl lg:text-3xl font-bold text-gray-900">
                        Sung Jong Hwa
                      </p>
                      <p className="text-lg text-gray-600 mt-1">
                        CEO, Global Money Express Co., Ltd.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              Our Services
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* B2B Payments */}
              <div className="text-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#ed1c24] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">B2B payments</h3>
                <p className="text-gray-600 text-sm">
                  Fast and low-cost cross-border payouts and collections
                </p>
              </div>

              {/* Personal Remittance */}
              <div className="text-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#ed1c24] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Personal Remittance</h3>
                <p className="text-gray-600 text-sm">
                  Send and receive money with a few clicks
                </p>
              </div>

              {/* Easy Loan */}
              <div className="text-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#ed1c24] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Easy Loan</h3>
                <p className="text-gray-600 text-sm">
                  Apply for a 100% paperless loan through our app and receive it on the same day.
                </p>
              </div>

              {/* Digital Wallet */}
              <div className="text-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#ed1c24] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-5zm0 0h-4a2 2 0 00-2 2v0a2 2 0 002 2h4"/>
                    <circle cx="17" cy="14" r="1" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Digital Wallet</h3>
                <p className="text-gray-600 text-sm">
                  Deposit & withdraw and send & pay with the convenience of your digital wallet payment.
                </p>
              </div>

              {/* Money Exchange */}
              <div className="text-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#ed1c24] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Money Exchange</h3>
                <p className="text-gray-600 text-sm">
                  Exchange money in our branches with better exchange rates than banks
                </p>
              </div>

              {/* Mobile Topup */}
              <div className="text-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#ed1c24] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Mobile Topup</h3>
                <p className="text-gray-600 text-sm">
                  Use the fastest way for Domestic and International mobile recharge -150+ countries, 500 + operators around the globe
                </p>
              </div>

              {/* Local Transfer */}
              <div className="text-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#ed1c24] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Local Transfer</h3>
                <p className="text-gray-600 text-sm">
                  Send hassle free local transfer in multi-languages to send your money from one account to another or to your friends.
                </p>
              </div>

              {/* Gift Coupons */}
              <div className="text-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#ed1c24] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Gift Coupons</h3>
                <p className="text-gray-600 text-sm">
                  Buy and send gift coupons to your loved ones with your reward points of using our service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-12 lg:py-20 bg-[#fafbfc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              History
            </h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-[#ed1c24]"></div>

              {/* 2024 */}
              <div className="relative flex flex-col lg:flex-row lg:justify-center mb-8">
                <div className="lg:w-1/2 lg:pr-12 lg:text-right pl-12 lg:pl-0">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-2xl font-bold text-[#ed1c24] mb-3">2024</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>GME Mobile(MVNO) Launched with LGU+</li>
                      <li>GMEBiz(Overseas Corporate Payments) Launched</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#ed1c24] rounded-full border-4 border-white shadow"></div>
                <div className="lg:w-1/2 lg:pl-12 hidden lg:block"></div>
              </div>

              {/* 2023 */}
              <div className="relative flex flex-col lg:flex-row lg:justify-center mb-8">
                <div className="lg:w-1/2 lg:pr-12 lg:text-right hidden lg:block"></div>
                <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#ed1c24] rounded-full border-4 border-white shadow"></div>
                <div className="lg:w-1/2 lg:pl-12 pl-12">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-2xl font-bold text-[#ed1c24] mb-3">2023</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>Achieved $ 1.6 Billion in Overseas Remittance</li>
                      <li>GME Card Service Launched with BC card & Master card</li>
                      <li className="text-[#ed1c24] font-medium">GME Mobile(MVNO) License granted</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2022 */}
              <div className="relative flex flex-col lg:flex-row lg:justify-center mb-8">
                <div className="lg:w-1/2 lg:pr-12 lg:text-right pl-12 lg:pl-0">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-2xl font-bold text-[#ed1c24] mb-3">2022</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>Achieved $ 1.5 Billion in Overseas Remittance</li>
                      <li>Start Payment Business</li>
                      <li className="text-[#ed1c24] font-medium">Foreign currency business license granted</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#ed1c24] rounded-full border-4 border-white shadow"></div>
                <div className="lg:w-1/2 lg:pl-12 hidden lg:block"></div>
              </div>

              {/* 2021 */}
              <div className="relative flex flex-col lg:flex-row lg:justify-center mb-8">
                <div className="lg:w-1/2 lg:pr-12 lg:text-right hidden lg:block"></div>
                <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#ed1c24] rounded-full border-4 border-white shadow"></div>
                <div className="lg:w-1/2 lg:pl-12 pl-12">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-2xl font-bold text-[#ed1c24] mb-3">2021</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>Achieved $ 1.4 Billion in Overseas Remittance</li>
                      <li>Mobile Coupon Service Launched</li>
                      <li className="text-[#ed1c24] font-medium">Granted PG License</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2020 */}
              <div className="relative flex flex-col lg:flex-row lg:justify-center mb-8">
                <div className="lg:w-1/2 lg:pr-12 lg:text-right pl-12 lg:pl-0">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-2xl font-bold text-[#ed1c24] mb-3">2020</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>Achieved $1 Billion in Remittance</li>
                      <li>Mobile Top-up Service Launched</li>
                      <li className="text-[#ed1c24] font-medium">Granted Prepaid E-Payment License</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#ed1c24] rounded-full border-4 border-white shadow"></div>
                <div className="lg:w-1/2 lg:pl-12 hidden lg:block"></div>
              </div>

              {/* 2019 */}
              <div className="relative flex flex-col lg:flex-row lg:justify-center mb-8">
                <div className="lg:w-1/2 lg:pr-12 lg:text-right hidden lg:block"></div>
                <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#ed1c24] rounded-full border-4 border-white shadow"></div>
                <div className="lg:w-1/2 lg:pl-12 pl-12">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-2xl font-bold text-[#ed1c24] mb-3">2019</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>Domestic Transfer Service Launched</li>
                      <li className="text-[#ed1c24] font-medium">12 Nationwide Branches Opened</li>
                      <li className="text-[#ed1c24] font-medium">3 Nationwide Centers Opened</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2018 */}
              <div className="relative flex flex-col lg:flex-row lg:justify-center mb-8">
                <div className="lg:w-1/2 lg:pr-12 lg:text-right pl-12 lg:pl-0">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-2xl font-bold text-[#ed1c24] mb-3">2018</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>Achieved $40 Million in Remittance</li>
                      <li className="text-[#ed1c24] font-medium">Selected as Seoul City Recommended Remittance Operator</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#ed1c24] rounded-full border-4 border-white shadow"></div>
                <div className="lg:w-1/2 lg:pl-12 hidden lg:block"></div>
              </div>

              {/* 2017 */}
              <div className="relative flex flex-col lg:flex-row lg:justify-center mb-8">
                <div className="lg:w-1/2 lg:pr-12 lg:text-right hidden lg:block"></div>
                <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#ed1c24] rounded-full border-4 border-white shadow"></div>
                <div className="lg:w-1/2 lg:pl-12 pl-12">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-2xl font-bold text-[#ed1c24] mb-3">2017</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>First Online Service Launched</li>
                      <li className="text-[#ed1c24] font-medium">First Service Provider in Korea</li>
                      <li className="text-[#ed1c24] font-medium">First Remittance License in Korea</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2016 */}
              <div className="relative flex flex-col lg:flex-row lg:justify-center">
                <div className="lg:w-1/2 lg:pr-12 lg:text-right pl-12 lg:pl-0">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-2xl font-bold text-[#ed1c24] mb-3">2016</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>Establishment of GME</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#ed1c24] rounded-full border-4 border-white shadow"></div>
                <div className="lg:w-1/2 lg:pl-12 hidden lg:block"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
