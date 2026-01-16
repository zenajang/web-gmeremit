"use client";

import { useState, useEffect } from "react";

interface TransferMethod {
  value: string;
  label: string;
}

interface CountryConfig {
  code: string;
  name: string;
  flag: string;
  exchangeRate: number; // KRW to this currency
  transferMethods: TransferMethod[];
}

// Country-specific configurations with exchange rates and transfer methods
const countryConfigs: CountryConfig[] = [
  {
    code: "USD",
    name: "US Dollar",
    flag: "🇺🇸",
    exchangeRate: 0.00075, // 1 KRW = 0.00075 USD
    transferMethods: [
      { value: "bank", label: "BANK DEPOSIT" },
      { value: "cash", label: "CASH PAYMENT" },
    ],
  },
  {
    code: "PHP",
    name: "Philippine Peso",
    flag: "🇵🇭",
    exchangeRate: 0.042, // 1 KRW = 0.042 PHP
    transferMethods: [
      { value: "bank", label: "BANK DEPOSIT" },
      { value: "cash", label: "CASH PAYMENT" },
      { value: "gcash", label: "GCASH" },
      { value: "paymaya", label: "PAYMAYA" },
    ],
  },
  {
    code: "VND",
    name: "Vietnamese Dong",
    flag: "🇻🇳",
    exchangeRate: 18.5, // 1 KRW = 18.5 VND
    transferMethods: [
      { value: "bank", label: "BANK DEPOSIT" },
      { value: "cash", label: "CASH PAYMENT" },
      { value: "momo", label: "MOMO WALLET" },
    ],
  },
  {
    code: "NPR",
    name: "Nepalese Rupee",
    flag: "🇳🇵",
    exchangeRate: 0.1, // 1 KRW = 0.1 NPR
    transferMethods: [
      { value: "bank", label: "BANK DEPOSIT" },
      { value: "cash", label: "CASH PAYMENT" },
      { value: "esewa", label: "ESEWA" },
      { value: "khalti", label: "KHALTI" },
    ],
  },
  {
    code: "IDR",
    name: "Indonesian Rupiah",
    flag: "🇮🇩",
    exchangeRate: 11.8, // 1 KRW = 11.8 IDR
    transferMethods: [
      { value: "bank", label: "BANK DEPOSIT" },
      { value: "cash", label: "CASH PAYMENT" },
      { value: "ovo", label: "OVO" },
      { value: "dana", label: "DANA" },
    ],
  },
  {
    code: "THB",
    name: "Thai Baht",
    flag: "🇹🇭",
    exchangeRate: 0.026, // 1 KRW = 0.026 THB
    transferMethods: [
      { value: "bank", label: "BANK DEPOSIT" },
      { value: "cash", label: "CASH PAYMENT" },
      { value: "promptpay", label: "PROMPTPAY" },
    ],
  },
  {
    code: "MMK",
    name: "Myanmar Kyat",
    flag: "🇲🇲",
    exchangeRate: 1.58, // 1 KRW = 1.58 MMK
    transferMethods: [
      { value: "bank", label: "BANK DEPOSIT" },
      { value: "cash", label: "CASH PAYMENT" },
      { value: "kbzpay", label: "KBZ PAY" },
      { value: "wavepay", label: "WAVE PAY" },
    ],
  },
  {
    code: "CNY",
    name: "Chinese Yuan",
    flag: "🇨🇳",
    exchangeRate: 0.0054, // 1 KRW = 0.0054 CNY
    transferMethods: [
      { value: "bank", label: "BANK DEPOSIT" },
      { value: "cash", label: "CASH PAYMENT" },
      { value: "card", label: "VISA/MASTERCARD/UNIONPAY" },
      { value: "alipay", label: "ALIPAY WALLET" },
      { value: "wechat", label: "WECHAT" },
    ],
  },
  {
    code: "JPY",
    name: "Japanese Yen",
    flag: "🇯🇵",
    exchangeRate: 0.11, // 1 KRW = 0.11 JPY
    transferMethods: [
      { value: "bank", label: "BANK DEPOSIT" },
      { value: "cash", label: "CASH PAYMENT" },
    ],
  },
];

const sendCurrency = { code: "KRW", name: "Korean Won", flag: "🇰🇷" };

export default function HeroSection() {
  const [sendAmount, setSendAmount] = useState("1000000");
  const [selectedCountry, setSelectedCountry] = useState(countryConfigs[0]);
  const [transferMethod, setTransferMethod] = useState(countryConfigs[0].transferMethods[0]);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  // Update transfer method when country changes
  useEffect(() => {
    setTransferMethod(selectedCountry.transferMethods[0]);
  }, [selectedCountry]);

  // Format number with commas
  const formatNumber = (num: string) => {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Parse number from formatted string
  const parseNumber = (str: string) => {
    return str.replace(/,/g, "");
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseNumber(e.target.value);
    if (/^\d*$/.test(value)) {
      setSendAmount(value);
    }
  };

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video - Hidden on mobile */}
          <div className="hidden lg:flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="overflow-hidden" style={{ clipPath: 'inset(2px 0)' }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-auto max-h-[700px]"
              >
                <source src="/images/home/App-animation-small.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Content & Calculator */}
          <div className="order-1 lg:order-2">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#191c1f] mb-4 text-center lg:text-left">
              No. 1 Money Transfer
              <br />
              Company in South Korea
            </h1>
            <p className="text-lg text-gray-500 mb-8 text-center lg:text-left">
              Fast, Easy, Cost-efficient, and Secured
            </p>

            {/* Exchange Calculator */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100">
              {/* You Send */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  You Send
                </label>
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#ed1c24]/20 focus-within:border-[#ed1c24]">
                  <input
                    type="text"
                    value={formatNumber(sendAmount)}
                    onChange={handleAmountChange}
                    className="flex-1 px-4 py-4 text-2xl font-semibold text-[#191c1f] outline-none"
                    placeholder="0"
                  />
                  <div className="flex items-center gap-2 px-4 py-4 bg-gray-50 border-l border-gray-200">
                    <span className="text-xl">{sendCurrency.flag}</span>
                    <span className="font-semibold text-[#191c1f]">{sendCurrency.code}</span>
                  </div>
                </div>
              </div>

              {/* Transfer Info */}
              <div className="space-y-3 mb-6 text-sm text-gray-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                    <span>- (Transfer Fees Included)</span>
                  </div>
                  <select
                    value={transferMethod.value}
                    onChange={(e) => setTransferMethod(selectedCountry.transferMethods.find(m => m.value === e.target.value) || selectedCountry.transferMethods[0])}
                    className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium cursor-pointer outline-none focus:ring-2 focus:ring-[#ed1c24]/20"
                  >
                    {selectedCountry.transferMethods.map((method) => (
                      <option key={method.value} value={method.value}>
                        {method.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                  <span>- (Real Time Exchange Rate)</span>
                </div>
              </div>

              {/* Recipient Gets */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Recipient Gets
                  </label>
                  <button
                    type="button"
                    className="text-[#ed1c24] text-sm font-medium hover:underline cursor-pointer"
                    onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                  >
                    Select Your Country
                  </button>
                </div>
                <div className="relative">
                  <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                    <div className="flex-1 px-4 py-4 text-2xl font-semibold text-[#191c1f]">
                      {formatNumber(Math.floor(Number(sendAmount) * selectedCountry.exchangeRate).toString())}
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                      className="flex items-center gap-2 px-4 py-4 bg-gray-50 border-l border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-xl">{selectedCountry.flag}</span>
                      <span className="font-semibold text-[#191c1f]">{selectedCountry.code}</span>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Currency Dropdown */}
                  {showCurrencyDropdown && (
                    <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 max-h-64 overflow-y-auto">
                      {countryConfigs.map((country) => (
                        <button
                          key={country.code}
                          type="button"
                          onClick={() => {
                            setSelectedCountry(country);
                            setShowCurrencyDropdown(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors cursor-pointer ${
                            selectedCountry.code === country.code ? "bg-gray-50 text-[#ed1c24]" : "text-[#191c1f]"
                          }`}
                        >
                          <span className="text-xl">{country.flag}</span>
                          <span className="font-medium">{country.code}</span>
                          <span className="text-sm text-gray-500">{country.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <button
                type="button"
                className="w-full mt-6 bg-[#ed1c24] hover:bg-[#c41920] text-white font-semibold py-4 rounded-xl transition-colors duration-200 cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
