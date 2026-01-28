"use client";

import { useState, useEffect } from "react";

interface CountryConfig {
  code: string;
  name: string;
  flag: string;
  exchangeRate: number;
}

const countryConfigs: CountryConfig[] = [
  { code: "USD", name: "미국", flag: "🇺🇸", exchangeRate: 0.00075 },
  { code: "PHP", name: "필리핀", flag: "🇵🇭", exchangeRate: 0.042 },
  { code: "VND", name: "베트남", flag: "🇻🇳", exchangeRate: 18.5 },
  { code: "NPR", name: "네팔", flag: "🇳🇵", exchangeRate: 0.1 },
  { code: "IDR", name: "인도네시아", flag: "🇮🇩", exchangeRate: 11.8 },
  { code: "THB", name: "태국", flag: "🇹🇭", exchangeRate: 0.026 },
  { code: "MMK", name: "미얀마", flag: "🇲🇲", exchangeRate: 1.58 },
  { code: "CNY", name: "중국", flag: "🇨🇳", exchangeRate: 0.0054 },
  { code: "JPY", name: "일본", flag: "🇯🇵", exchangeRate: 0.11 },
];

export default function HeroSection() {
  const [sendAmount, setSendAmount] = useState("1000000");
  const [selectedCountry, setSelectedCountry] = useState(countryConfigs[0]);
  const [isOpen, setIsOpen] = useState(false);

  const formatNumber = (num: string) => num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const parseNumber = (str: string) => str.replace(/,/g, "");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseNumber(e.target.value);
    if (/^\d*$/.test(value)) setSendAmount(value);
  };

  const receiveAmount = Math.floor(Number(sendAmount) * selectedCountry.exchangeRate);

  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);
    if (isOpen) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <section id="app" className="relative bg-gradient-to-b from-[#f8f8f8] to-white py-20 lg:py-28 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#ed1c24]/[0.03] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-[#ff8a4c]/[0.04] blur-3xl" />

        {/* Decorative circles */}
        <div className="absolute top-20 -left-20 w-[300px] h-[300px] rounded-full border border-[#ed1c24]/[0.06]" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full border border-[#ed1c24]/[0.04]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200/60 rounded-full px-4 py-2 mb-6 shadow-sm">
              <span className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-600">실시간 환율 적용 중</span>
            </div>

            {/* Heading */}
            <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.25rem] font-bold text-[#0f0f0f] leading-[1.1] tracking-tight mb-5">
              No. 1 Money Transfer
              <br />
              <span className="text-[#e11d24]">Company in Korea</span>
            </h1>

            <p className="text-lg text-[#525252] leading-relaxed mb-10 max-w-md">
              Fast, Easy, Cost-efficient, and Secured.
              <br />
              <span className="text-[#0f0f0f] font-medium">200개국</span> 실시간 송금 서비스
            </p>

            {/* Stats Row */}
            <div className="flex items-center gap-8 lg:gap-12">
              {[
                { value: "₩4.2T+", label: "누적 송금액" },
                { value: "820K", label: "월간 사용자" },
                { value: "4.9", label: "앱스토어 평점", star: true },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl lg:text-[1.75rem] font-bold text-[#0f0f0f] flex items-center gap-1">
                    {stat.value}
                    {stat.star && (
                      <svg className="w-5 h-5 text-[#facc15]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    )}
                  </p>
                  <p className="text-sm text-[#737373] mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-3 mt-10 pt-10 border-t border-gray-200/60">
              <div className="flex items-center gap-2 text-sm text-[#525252]">
                <svg className="w-5 h-5 text-[#e11d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>금융위원회 등록</span>
              </div>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-2 text-sm text-[#525252]">
                <svg className="w-5 h-5 text-[#e11d24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>256-bit 암호화</span>
              </div>
            </div>
          </div>

          {/* Right Calculator */}
          <div className="order-1 lg:order-2">
            <div className="relative bg-white rounded-[1.75rem] p-7 lg:p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)] border border-gray-200/70">
              <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]" />
              {/* Calculator Header */}
              <div className="flex items-center justify-between mb-7">
                <h2 className="text-lg font-semibold text-[#0f0f0f]">실시간 환율 계산기</h2>
                <div className="flex items-center gap-1.5 rounded-full bg-[#ecfdf3] px-2.5 py-1 text-xs font-semibold text-[#166534]">
                  <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full" />
                  실시간
                </div>
              </div>

              {/* Send Input */}
              <div className="space-y-2 mb-5">
                <label className="text-[13px] font-medium text-[#737373]">보내는 금액</label>
                <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 border border-gray-200/80 focus-within:ring-2 focus-within:ring-[#e11d24]/15 transition-shadow">
                  <input
                    type="text"
                    value={formatNumber(sendAmount)}
                    onChange={handleAmountChange}
                    className="flex-1 bg-transparent text-[1.5rem] font-semibold text-[#0f0f0f] outline-none tabular-nums"
                    placeholder="0"
                  />
                  <div className="flex items-center gap-2 pl-4 border-l border-gray-200/80">
                    <span className="text-lg">🇰🇷</span>
                    <span className="text-sm font-semibold text-[#0f0f0f]">KRW</span>
                  </div>
                </div>
              </div>

              {/* Country Select */}
              <div className="space-y-2 mb-5 relative" onClick={(e) => e.stopPropagation()}>
                <label className="text-[13px] font-medium text-[#737373]">받는 국가</label>
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full flex items-center gap-3 bg-white rounded-2xl px-5 py-4 border border-gray-200/80 hover:bg-[#f8fafc] transition-colors"
                >
                  <span className="text-2xl">{selectedCountry.flag}</span>
                  <div className="flex-1 text-left">
                    <span className="font-semibold text-[#0f0f0f]">{selectedCountry.name}</span>
                    <span className="text-[#737373] ml-2">{selectedCountry.code}</span>
                  </div>
                  <svg className={`w-5 h-5 text-[#a3a3a3] transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div className="absolute z-50 mt-2 w-full bg-white rounded-2xl shadow-xl border border-gray-200/70 py-2 max-h-56 overflow-auto">
                    {countryConfigs.map((country) => (
                      <button
                        key={country.code}
                        type="button"
                        onClick={() => {
                          setSelectedCountry(country);
                          setIsOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-5 py-3 transition-colors ${
                          selectedCountry.code === country.code
                            ? "bg-[#fef2f2] text-[#e11d24]"
                            : "hover:bg-[#f8fafc]"
                        }`}
                      >
                        <span className="text-xl">{country.flag}</span>
                        <span className="font-medium flex-1 text-left">{country.name}</span>
                        <span className="text-sm text-[#a3a3a3]">{country.code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Exchange Rate Display */}
              <div className="flex items-center gap-4 mb-5">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                <span className="text-xs font-semibold text-[#6b7280] bg-[#f3f4f6] px-3 py-1 rounded-full tabular-nums">
                  1 {selectedCountry.code} = ₩{(1 / selectedCountry.exchangeRate).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              </div>

              {/* Receive Output */}
              <div className="space-y-2 mb-6">
                <label className="text-[13px] font-medium text-[#737373]">받는 금액</label>
                <div className="flex items-center gap-3 bg-[#111827] rounded-2xl px-5 py-5">
                  <p className="flex-1 text-[1.75rem] font-bold text-white tabular-nums">
                    {formatNumber(receiveAmount.toString())}
                  </p>
                  <div className="flex items-center gap-2 pl-4 border-l border-white/20">
                    <span className="text-lg">{selectedCountry.flag}</span>
                    <span className="text-sm font-semibold text-white">{selectedCountry.code}</span>
                  </div>
                </div>
              </div>

              {/* Fee Notice */}
              <div className="flex items-center justify-between text-sm mb-6 px-1">
                <span className="text-[#737373]">송금 수수료</span>
                <span className="font-semibold text-[#22c55e]">무료</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
