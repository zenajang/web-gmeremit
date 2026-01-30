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
    <section id="app" className="relative bg-gradient-to-b from-[#f8f8f8] to-white py-20 lg:py-28 overflow-hidden snap-section">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs - Red blush (왼쪽 글귀 쪽) */}
        <div className="absolute top-1/3 left-[10%] w-[400px] h-[400px] rounded-full bg-[#ed1c24]/[0.10] blur-[100px]" />
        <div className="absolute bottom-1/3 left-[5%] w-[300px] h-[300px] rounded-full bg-[#ff6b6b]/[0.08] blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Heading */}
            <p className="text-sm font-semibold tracking-widest text-[#ed1c24] mb-4">EXCHANGE CALCULATOR</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#191c1f] leading-[1.1] tracking-tight mb-6">
              지금 바로
              <br />
              환율을 확인하세요
            </h1>

            <p className="text-lg text-[#666] leading-relaxed mb-8 max-w-sm">
              200개국 이상 실시간 환율 조회.
              <br />
              수수료 확인을 투명하게.
            </p>

            {/* Simple Stats */}
            <div className="flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-[#191c1f]">200+</p>
                <p className="text-sm text-[#999] mt-1">송금 가능 국가</p>
              </div>
              <div className="w-px h-12 bg-gray-400" />
              <div>
                <p className="text-3xl font-bold text-[#191c1f]">24/7</p>
                <p className="text-sm text-[#999] mt-1">실시간 서비스</p>
              </div>
            </div>
          </div>

          {/* Right Calculator */}
          <div className="order-1 lg:order-2 relative">
            {/* Background Decorative Sky Blue Blush */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#60a5fa]/[0.25] blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-[#38bdf8]/[0.20] blur-2xl" />

            <div className="relative bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] rounded-[1.75rem] p-2 shadow-[0_12px_40px_rgba(15,23,42,0.12)] border border-gray-300/50">
              {/* Calculator body frame */}
              <div className="bg-white rounded-[1.25rem] p-6 lg:p-7 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
              <div className="pointer-events-none absolute inset-2 rounded-[1.25rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]" />
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

              {/* Receive Output - Deep Navy Frosted Glass */}
              <div className="space-y-2 mb-6">
                <label className="text-[13px] font-medium text-[#737373]">받는 금액</label>
                <div className="relative flex items-center gap-3 bg-[#0f172a]/85 backdrop-blur-2xl rounded-2xl px-5 py-5 border border-[#3b82f6]/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  {/* Glass highlights */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3b82f6]/15 via-[#1e3a5f]/10 to-transparent pointer-events-none" />
                  <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 rounded-2xl shadow-[inset_0_-1px_1px_rgba(59,130,246,0.1)] pointer-events-none" />
                  <p className="relative flex-1 text-[1.75rem] font-bold text-white tabular-nums">
                    {formatNumber(receiveAmount.toString())}
                  </p>
                  <div className="relative flex items-center gap-2 pl-4 border-l border-white/20">
                    <span className="text-lg">{selectedCountry.flag}</span>
                    <span className="text-sm font-semibold text-white">{selectedCountry.code}</span>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
