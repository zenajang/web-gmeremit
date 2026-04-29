"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { useClickOutside } from "@/hooks/useClickOutside";
import { countryConfigs, defaultCountry, CountryConfig } from "@/data/countries";

interface ExRateResponse {
  errorCode: string;
  exRate: string | null;
  exRateDisplay: string | null;
  pAmt: string | null;
  scCharge: string | null;
  collAmt: string | null;
  pCurr: string | null;
  msg: string | null;
}

const formatNumber = (num: string) => num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const parseNumber = (str: string) => str.replace(/,/g, "");

const DELIVERY_METHODS = [
  { value: "1", key: "calculator.bank_deposit" },
  { value: "2", key: "calculator.cash_payment" },
  { value: "13", key: "calculator.mobile_wallet" },
  { value: "37", key: "calculator.qr_pay" },
] as const;

export default function HeroSection() {
  const { t } = useTranslation("home.exchange");
  const [sendAmount, setSendAmount] = useState("1000000");
  const [selectedCountry, setSelectedCountry] = useState<CountryConfig>(defaultCountry);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");
  const [exchangeRate, setExchangeRate] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState<string>(defaultCountry.availableDeliveryMethods[0]);

  const availableDeliveryMethods = DELIVERY_METHODS.filter((m) =>
    selectedCountry.availableDeliveryMethods.includes(m.value)
  );
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 포맷 변경 후 커서 위치 보정
  const restoreCursor = (input: HTMLInputElement, rawValue: string, prevFormatted: string, cursorPos: number) => {
    const formatted = formatNumber(rawValue);
    const commasBefore = (prevFormatted.slice(0, cursorPos).match(/,/g) || []).length;
    const rawCursorPos = cursorPos - commasBefore;
    let rawCount = 0;
    let newPos = 0;
    for (let i = 0; i < formatted.length; i++) {
      if (formatted[i] !== ",") rawCount++;
      if (rawCount === rawCursorPos) { newPos = i + 1; break; }
    }
    if (rawCursorPos === 0) newPos = 0;
    requestAnimationFrame(() => {
      input.setSelectionRange(newPos, newPos);
    });
  };

  const fetchExRate = useCallback(async (country: CountryConfig, amount: string, direction: "C" | "P") => {
    if (!amount || amount === "0") {
      if (direction === "C") setReceiveAmount("");
      else setSendAmount("");
      return;
    }

    setIsLoading(true);
    setHasError(false);
    setErrorMsg("");
    try {
      const res = await fetch("/api/exchange-rate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pCurr: country.code,
          pCountryName: country.countryName,
          cAmt: direction === "C" ? amount : "",
          pAmt: direction === "P" ? amount : "",
          deliveryMethod,
          calBy: direction,
        }),
      });

      const data: ExRateResponse = await res.json();

      if (data.errorCode === "0" && data.pAmt && data.exRate) {
        setExchangeRate(Number(data.exRate));
        if (direction === "C") {
          setReceiveAmount(Math.floor(Number(data.pAmt.replace(/,/g, ""))).toString());
        } else {
          setSendAmount(Math.floor(Number((data.collAmt || "0").replace(/,/g, ""))).toString());
        }
      } else {
        if (direction === "C") setReceiveAmount("");
        else setSendAmount("");
        setExchangeRate(0);
        setHasError(true);
        const msg = data.msg || "";
        if (msg.includes("limit") || msg.includes("exceeds")) {
          setErrorMsg("error_limit");
        } else if (msg.includes("charge not defined")) {
          setErrorMsg("error_unavailable");
        } else {
          setErrorMsg("error_failed");
        }
      }
    } catch {
      if (direction === "C") setReceiveAmount("");
      else setSendAmount("");
      setExchangeRate(0);
      setHasError(true);
      setErrorMsg("error_network");
    } finally {
      setIsLoading(false);
    }
  }, [deliveryMethod]);

  // 초기 로드 + 국가/송금방식 변경 시 호출
  useEffect(() => {
    fetchExRate(selectedCountry, sendAmount, "C");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry, deliveryMethod]);

  // 송금액 변경 시 디바운스 호출
  const handleSendAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const cursorPos = input.selectionStart ?? input.value.length;
    const prevFormatted = input.value;
    const value = parseNumber(prevFormatted);
    if (/^\d*$/.test(value)) {
      restoreCursor(input, value, prevFormatted, cursorPos);
      setSendAmount(value);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        fetchExRate(selectedCountry, value, "C");
      }, 500);
    }
  };

  // 수취액 변경 시 디바운스 호출
  const handleReceiveAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const cursorPos = input.selectionStart ?? input.value.length;
    const prevFormatted = input.value;
    const value = parseNumber(prevFormatted);
    if (/^\d*$/.test(value)) {
      restoreCursor(input, value, prevFormatted, cursorPos);
      setReceiveAmount(value);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        fetchExRate(selectedCountry, value, "P");
      }, 500);
    }
  };

  const handleCountrySelect = (country: CountryConfig) => {
    setSelectedCountry(country);
    if (!country.availableDeliveryMethods.includes(deliveryMethod as "1" | "2" | "13" | "37")) {
      setDeliveryMethod(country.availableDeliveryMethods[0]);
    }
    setIsOpen(false);
    setSearchQuery("");
  };

  useClickOutside(dropdownRef, () => {
    setIsOpen(false);
    setSearchQuery("");
  }, isOpen);

  return (
    <section id="app" className="relative lg:min-h-[calc(100svh-var(--header-height))] bg-gradient-to-b from-gray-100 to-white py-12 lg:py-24 overflow-hidden snap-section flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.10] blur-[100px]" />
        <div className="absolute bottom-1/3 left-[5%] w-[300px] h-[300px] rounded-full bg-primary-light/[0.08] blur-[100px]" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1 hidden lg:block">
            <p className="text-sm font-semibold tracking-widest text-primary mb-4">EXCHANGE CALCULATOR</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-dark leading-[1.1] tracking-tight mb-6">
              {t("title1")}
              <br />
              {t("title2")}
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-sm">
              {t("description1")}
              <br />
              {t("description2")}
            </p>

            <div className="flex items-center gap-8">
              <div>
                <p className="typo-stat text-dark">{t("stats.countries")}</p>
                <p className="text-sm text-gray-400 mt-1">{t("stats.countries_label")}</p>
              </div>
              <div className="w-px h-12 bg-gray-400" />
              <div>
                <p className="typo-stat text-dark">{t("stats.service")}</p>
                <p className="text-sm text-gray-400 mt-1">{t("stats.service_label")}</p>
              </div>
            </div>
          </div>

          {/* Calculator */}
          <div className="order-1 lg:order-2 relative max-w-md mx-auto lg:max-w-none w-full overflow-hidden lg:overflow-visible">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-payments-light/[0.25] blur-2xl hidden lg:block" />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-sky-400/[0.20] blur-2xl hidden lg:block" />

            <div className="relative bg-gradient-to-b from-gray-50 to-gray-200 rounded-2xl lg:rounded-[2rem] p-2 lg:p-3 shadow-none lg:shadow-[0_12px_40px_rgba(15,23,42,0.12)] border border-gray-300/50">
              <div className="bg-white rounded-xl lg:rounded-[1.5rem] p-5 sm:p-8 lg:p-10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
              <div className="pointer-events-none absolute inset-2 rounded-[1.25rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] hidden lg:block" />
              {/* Calculator Header */}
              <div className="mb-6 lg:mb-7">
                <div className="lg:flex lg:items-center lg:justify-between">
                  <h2 className="text-xl lg:text-2xl font-bold text-dark">{t("calculator.title")}</h2>
                  <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium mt-1.5 lg:mt-0 lg:gap-2 lg:px-3.5 lg:py-1.5 lg:text-sm lg:font-semibold whitespace-nowrap ${
                    hasError ? "bg-red-50 text-red-600" : "bg-emerald-50 text-green-800"
                  }`}>
                    <span className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full ${
                      isLoading ? "bg-yellow-400 animate-pulse" : hasError ? "bg-red-400" : "bg-success"
                    }`} />
                    {isLoading ? t("calculator.loading") : hasError ? t("calculator.error") : t("calculator.realtime")}
                  </div>
                </div>
              </div>

              {/* Send Input */}
              <div className="space-y-2 mb-5">
                <label className="text-[13px] font-medium text-neutral-500">{t("calculator.send_amount")}</label>
                <div className="flex items-center gap-3 bg-white rounded-2xl px-3 py-3 lg:px-5 lg:py-4 border border-gray-200/80 focus-within:ring-2 focus-within:ring-primary/15 transition-shadow">
                  <input
                    type="text"
                    inputMode="numeric"
                    aria-label="송금 금액"
                    value={formatNumber(sendAmount)}
                    onChange={handleSendAmountChange}
                    className="flex-1 min-w-0 bg-transparent text-xl lg:text-[1.5rem] font-semibold text-dark outline-none tabular-nums"
                    placeholder="0"
                  />
                  <div className="flex items-center gap-2 pl-4 border-l border-gray-200/80 shrink-0">
                    <span className="text-lg">🇰🇷</span>
                    <span className="text-sm font-semibold text-dark">KRW</span>
                  </div>
                </div>
                {hasError && errorMsg && (
                  <p className="text-xs text-red-500 mt-1.5 ml-1">{t(`calculator.${errorMsg}`)}</p>
                )}
              </div>
              {/* Delivery Method */}
              <div className="space-y-2 mb-5">
                <label className="text-[13px] font-medium text-neutral-500">{t("calculator.delivery_method")}</label>
                <div className="flex bg-gray-100 rounded-xl p-1">
                  {availableDeliveryMethods.map((method) => (
                    <button
                      key={method.value}
                      type="button"
                      onClick={() => setDeliveryMethod(method.value)}
                      className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                        deliveryMethod === method.value
                          ? "bg-white text-dark shadow-sm"
                          : "text-neutral-400 hover:text-neutral-600"
                      }`}
                    >
                      {t(method.key)}
                    </button>
                  ))}
                </div>
              </div>
              {/* Country Select */}
              <div ref={dropdownRef} className="space-y-2 mb-5 relative">
                <label className="text-[13px] font-medium text-neutral-500">{t("calculator.receive_country")}</label>
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full flex items-center gap-2 lg:gap-3 bg-white rounded-2xl px-3 py-2.5 lg:px-5 lg:py-4 border border-gray-200/80 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-lg lg:text-2xl">{selectedCountry.flag}</span>
                  <div className="flex-1 text-left min-w-0 truncate">
                    <span className="text-sm lg:text-base font-semibold text-dark">{t(`countries.names.${selectedCountry.countryCode}`, { ns: "home.hero" })}</span>
                    <span className="text-xs lg:text-base text-neutral-500 ml-1.5 lg:ml-2">{selectedCountry.code}</span>
                  </div>
                  <svg className={`w-5 h-5 text-neutral-400 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isOpen && (
                  <div
                    className="absolute z-50 mt-2 w-full bg-white rounded-2xl shadow-xl border border-gray-200/70 overflow-hidden"
                    onWheel={(e) => e.stopPropagation()}
                  >
                    <div className="p-2 border-b border-gray-100 sticky top-0 bg-white">
                      <div className="relative">
                        <svg
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                        </svg>
                        <input
                          type="text"
                          autoFocus
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder={t("calculator.search_placeholder")}
                          className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="max-h-60 overflow-auto py-2">
                      {(() => {
                        const q = searchQuery.trim().toLowerCase();
                        const filtered = q
                          ? countryConfigs.filter((c) => {
                              const name = t(`countries.names.${c.countryCode}`, { ns: "home.hero" }).toLowerCase();
                              return (
                                name.includes(q) ||
                                c.countryName.toLowerCase().includes(q) ||
                                c.code.toLowerCase().includes(q) ||
                                c.countryCode.toLowerCase().includes(q)
                              );
                            })
                          : countryConfigs;
                        if (filtered.length === 0) {
                          return (
                            <p className="text-center text-sm text-neutral-400 py-6">
                              {t("calculator.no_results")}
                            </p>
                          );
                        }
                        return filtered.map((country) => (
                          <button
                            key={country.countryCode}
                            type="button"
                            onClick={() => {
                              handleCountrySelect(country);
                              setSearchQuery("");
                            }}
                            className={`w-full flex items-center gap-3 px-5 py-3 transition-colors cursor-pointer ${
                              selectedCountry.countryCode === country.countryCode
                                ? "bg-red-50 text-primary"
                                : "hover:bg-slate-50"
                            }`}
                          >
                            <span className="text-xl">{country.flag}</span>
                            <span className="font-medium flex-1 text-left">{t(`countries.names.${country.countryCode}`, { ns: "home.hero" })}</span>
                            <span className="text-sm text-neutral-400">{country.code}</span>
                          </button>
                        ));
                      })()}
                    </div>
                  </div>
                )}
              </div>

              {/* Exchange Rate Display */}
              <div className="flex items-center gap-4 mb-5">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                <span className="text-xs font-semibold text-gray bg-gray-100 px-3 py-1 rounded-full tabular-nums whitespace-nowrap">
                  {exchangeRate > 0
                    ? `1 ${selectedCountry.code} = ₩${(1 / exchangeRate).toLocaleString(undefined, { maximumFractionDigits: 2 })}`
                    : "---"
                  }
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              </div>

              {/* Receive Input */}
              <div className="space-y-2 mb-6">
                <label className="text-[13px] font-medium text-neutral-500">{t("calculator.receive_amount")}</label>
                <div className="relative flex items-center gap-3 bg-gradient-to-br from-teal-500/65 to-teal-700/60 backdrop-blur-2xl rounded-2xl px-3 py-3 lg:px-5 lg:py-5 border border-teal-300/28 shadow-[inset_0_1px_1px_rgba(255,255,255,0.13)]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-300/18 via-teal-400/10 to-transparent pointer-events-none" />
                  <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 rounded-2xl shadow-[inset_0_-1px_1px_rgba(94,234,212,0.08)] pointer-events-none" />
                  <input
                    type="text"
                    aria-label="수취 금액"
                    value={hasError ? "" : formatNumber(receiveAmount)}
                    onChange={handleReceiveAmountChange}
                    placeholder={hasError ? "---" : "0"}
                    className={`relative flex-1 min-w-0 text-xl lg:text-[1.75rem] font-bold text-white tabular-nums bg-transparent outline-none placeholder-white/50 ${isLoading ? "opacity-50" : ""}`}
                  />
                  <div className="relative flex items-center gap-2 pl-4 border-l border-white/20 shrink-0">
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
