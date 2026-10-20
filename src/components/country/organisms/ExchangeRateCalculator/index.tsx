"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { countryConfigs, regionDefaultCountry } from "@/data/countries";
import { useTranslation, translations } from "@/hooks/useTranslation";
import { useCountryTranslation } from "@/hooks/useCountryTranslation";
import { useClickOutside } from "@/hooks/useClickOutside";
import { getExchangeRate, type ExchangeRateError } from "@/lib/GetExchangeRate";
import * as S from "./styles";
import { usePathname } from "next/navigation";

const formatNumber = (num: string) => num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const parseNumber = (str: string) => str.replace(/,/g, "");

const resolveMessagesLang = (langCode: string) =>
  langCode in translations ? langCode : "en";

const ExchangeRateCalculator = () => {
  const pathname = usePathname();
  const countryName = pathname.split("/").pop() ?? "";
  const { t: tCountry, activeLangCode } = useCountryTranslation(countryName);
  const { t } = useTranslation(undefined, resolveMessagesLang(activeLangCode));
  const normalize = (value: string) => value.toLowerCase().replace(/[-\s]+/g, "");
  const findCountryConfig = (name: string) =>
    countryConfigs.find((c) => normalize(c.countryName) === normalize(name));

  // 지역 랜딩(서아프리카·CIS)은 홈 계산기처럼 전체 국가에서 수취국을 고른다.
  // 국가 랜딩은 슬러그가 곧 수취국이라 선택기를 띄우지 않는다.
  const regionDefault = regionDefaultCountry[normalize(countryName ?? "")];
  const isRegionLanding = Boolean(regionDefault);
  const [selectedCountryName, setSelectedCountryName] = useState(
    regionDefault ?? countryName
  );
  const matchedCountry = findCountryConfig(selectedCountryName);

  const [sendAmount, setSendAmount] = useState(""); // 보내는 금액 (input에 표시, 콤마 포맷 전 raw 문자열)
  const [receiveAmount, setReceiveAmount] = useState(""); // 받는 금액 (계산 결과, 화면 표시용)
  const [exchangeRateDisplay, setExchangeRateDisplay] = useState(""); // 환율 표시 문자열 (API 응답 exRateDisplay)
  const [scCharge, setScCharge] = useState(""); // Service Charge — 송금 수수료
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<ExchangeRateError | null>(null); // 사용자에게 보여줄 에러 (번역 키 + 파라미터)
  const [selectedRecipientCountry, setSelectedRecipientCountry] = useState(matchedCountry?.currencies[0]?.code ?? "");
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [isPayoutOpen, setIsPayoutOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [resultRecipientCountry, setResultRecipientCountry] = useState(matchedCountry?.currencies[0]?.code ?? "");
  const payoutDropdownRef = useRef<HTMLDivElement>(null);
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const countrySearchRef = useRef<HTMLInputElement>(null);

  useClickOutside(payoutDropdownRef, () => setIsPayoutOpen(false));
  useClickOutside(countryDropdownRef, () => setIsCountryOpen(false));

  const pCurr = matchedCountry?.currencies[0]?.code ?? "";
  const pCountryName = matchedCountry?.countryName ?? countryName;
  const payoutMethods =
    matchedCountry?.currencies.find((c) => c.code === selectedRecipientCountry)?.payoutMethods ?? [];

  useEffect(() => {
    setDeliveryMethod(payoutMethods[0]?.key ?? "");
  }, [selectedRecipientCountry]);

  const handleSendAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseNumber(e.target.value);
    if (!/^\d*$/.test(value)) return;
    setSendAmount(value);
  };

  const handleSubmit = async () => {
    if (!sendAmount || sendAmount === "0" || !pCurr) return;

    setIsLoading(true);
    setHasError(false);
    setError(null);

    const result = await getExchangeRate({ pCurr: selectedRecipientCountry, pCountryName, amount: sendAmount, deliveryMethod });

    if (result.success) {
      setExchangeRateDisplay(result.exchangeRateDisplay);
      setScCharge(result.scCharge);
      setReceiveAmount(result.receiveAmount);
      setResultRecipientCountry(selectedRecipientCountry);
    } else {
      setReceiveAmount("");
      setExchangeRateDisplay("");
      setScCharge("");
      setHasError(true);
      setError(result.error);
    }
    setIsLoading(false);
  };

  const changeRecipientCountry = (currency: string) => {
    setSelectedRecipientCountry(currency);
  };

  const changeRecipientCountryName = (name: string) => {
    setSelectedCountryName(name);
    setSelectedRecipientCountry(findCountryConfig(name)?.currencies[0]?.code ?? "");
    setIsCountryOpen(false);
    setCountrySearch("");
  };

  const searchedCountries = useMemo(() => {
    const query = countrySearch.trim().toLowerCase();
    if (!query) return countryConfigs;
    return countryConfigs.filter(
      (c) =>
        c.countryName.toLowerCase().includes(query) ||
        t(`home.hero-main.countries.names.${c.countryCode}`).toLowerCase().includes(query) ||
        c.currencies.some((currency) => currency.code.toLowerCase().includes(query))
    );
  }, [countrySearch, t]);

  return (
    <div className={S.CalculatorTitle}>
      <div className={S.CalculatorHeaderRow}>
        <span className={S.CalculatorHeading}>{tCountry("exchange-rate-calculator.cardTitle")}</span>
        <div
          className={`${S.CalculatorStatusBadge} ${
            hasError ? S.CalculatorStatusBadgeError : S.CalculatorStatusBadgeSuccess
          }`}
        >
          <span
            className={`${S.CalculatorStatusDot} ${
              isLoading
                ? S.CalculatorStatusDotLoading
                : hasError
                ? S.CalculatorStatusDotError
                : S.CalculatorStatusDotSuccess
            }`}
          />
          {isLoading ? t("common.exchange-rate-calculator.home.exchange.calculator.loading") : hasError ? t("common.exchange-rate-calculator.home.exchange.calculator.error") : t("common.exchange-rate-calculator.home.exchange.calculator.realtime")}
        </div>
      </div>

      <div className={S.CalculatorFieldWrapper}>
        <label htmlFor="send-amount" className={S.CalculatorFieldLabel}>
          {tCountry("exchange-rate-calculator.sendAmountLabel")}
        </label>
        <div className={S.CalculatorInputRow}>
          <input
            id="send-amount"
            type="text"
            inputMode="numeric"
            placeholder={tCountry("exchange-rate-calculator.sendAmountPlaceholder")}
            value={sendAmount ? Number(sendAmount).toLocaleString("ko-KR") : ""}
            onChange={handleSendAmountChange}
            className={S.CalculatorInput}
          />
          <span className={S.CalculatorCurrencyTag}>{tCountry("exchange-rate-calculator.sendCurrencyLabel")}</span>
        </div>
        {hasError && error && (
          <p className={S.CalculatorErrorMessage}>
            {error.raw ?? t(`common.exchange-rate-calculator.home.exchange.calculator.${error.key}`, error.params)}
          </p>
        )}
      </div>

      <div ref={payoutDropdownRef} className={`${S.CalculatorFieldWrapper} relative`}>
        <label className={S.CalculatorFieldLabel}>{t("common.exchange-rate-calculator.home.exchange.calculator.delivery_method")}</label>
        <button
          type="button"
          disabled={payoutMethods.length <= 1}
          onClick={() => setIsPayoutOpen(!isPayoutOpen)}
          className={`${S.CalculatorInputRow} w-full transition-colors ${payoutMethods.length >= 2 && "cursor-pointer"}`}
        >
          <span className={S.CalculatorValueText}>
            {deliveryMethod ? t(`common.exchange-rate-calculator.home.exchange.calculator.payout_methods.${deliveryMethod}`) : ""}
          </span>
          {payoutMethods.length > 1 && (
            <svg className={`w-5 h-5 text-neutral-400 transition-transform ${isPayoutOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>

        {isPayoutOpen && payoutMethods.length > 1 && (
          <div
            className="absolute z-50 top-full left-0 right-0 w-full bg-white rounded-2xl shadow-xl border border-gray-200/70 overflow-hidden"
            style={{ marginTop: 0 }}
            onWheel={(e) => e.stopPropagation()}
          >
            <div className="py-2 max-h-56 overflow-auto">
              {payoutMethods.map((method) => (
                <button
                  key={method.key}
                  type="button"
                  onClick={() => {
                    setDeliveryMethod(method.key);
                    setIsPayoutOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-5 py-3 transition-colors cursor-pointer ${
                    deliveryMethod === method.key
                      ? "bg-red-50 text-primary"
                      : "hover:bg-slate-50"
                  }`}
                >
                  <span className="font-medium flex-1 text-left">{t(`common.exchange-rate-calculator.home.exchange.calculator.payout_methods.${method.key}`)}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div ref={countryDropdownRef} className={`${S.CalculatorFieldWrapper} relative`}>
        <div className={S.CalculatorFieldLabel}>{tCountry("exchange-rate-calculator.recipientCountryLabel")}
          {matchedCountry?.currencies && matchedCountry?.currencies.length > 1 && (
            <div className="mt-2 flex items-center gap-1.5 flex-wrap">
              {matchedCountry?.currencies.map((currency) => {
                const active = selectedRecipientCountry === currency.code;
                return (
                  <button
                    key={currency.code}
                    type="button"
                    onClick={() => changeRecipientCountry(currency.code)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors cursor-pointer ${
                      active
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-neutral-600 border-gray-200 hover:bg-slate-50"
                    }`}
                  >
                    {currency.code}
                  </button>
                );
              })}
            </div>
          )}
        </div>
        {isRegionLanding ? (
          <>
            <button
              type="button"
              onClick={() => setIsCountryOpen(!isCountryOpen)}
              className={`${S.CalculatorInputRow} w-full cursor-pointer transition-colors`}
            >
              <span className="text-lg">{matchedCountry?.flag}</span>
              <span className={`${S.CalculatorValueText} flex-1 text-left`}>
                {t(`home.hero-main.countries.names.${matchedCountry?.countryCode}`)}
              </span>
              <svg
                className={`w-5 h-5 text-neutral-400 transition-transform ${isCountryOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isCountryOpen && (
              <div
                className="absolute z-50 top-full left-0 right-0 w-full bg-white rounded-2xl shadow-xl border border-gray-200/70 overflow-hidden"
                onWheel={(e) => e.stopPropagation()}
              >
                <div className="px-3 py-2 border-b border-gray-100">
                  <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
                    <svg className="w-4 h-4 text-neutral-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                    </svg>
                    <input
                      ref={countrySearchRef}
                      type="text"
                      value={countrySearch}
                      onChange={(e) => setCountrySearch(e.target.value)}
                      placeholder={t("common.exchange-rate-calculator.home.exchange.calculator.search_placeholder")}
                      className="flex-1 min-w-0 bg-transparent text-sm text-dark outline-none placeholder-neutral-400"
                    />
                    {countrySearch && (
                      <button
                        type="button"
                        onClick={() => {
                          setCountrySearch("");
                          countrySearchRef.current?.focus();
                        }}
                        className="text-neutral-400 hover:text-neutral-600 cursor-pointer"
                        aria-label="clear"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>

                <div className="py-2 max-h-56 overflow-auto">
                  {searchedCountries.length === 0 ? (
                    <p className="px-5 py-4 text-sm text-neutral-400 text-center">
                      {t("common.exchange-rate-calculator.home.exchange.calculator.no_results")}
                    </p>
                  ) : (
                    searchedCountries.map((config) => (
                      <button
                        key={config.countryCode}
                        type="button"
                        onClick={() => changeRecipientCountryName(config.countryName)}
                        className={`w-full flex items-center gap-3 px-5 py-3 transition-colors cursor-pointer ${
                          matchedCountry?.countryCode === config.countryCode
                            ? "bg-red-50 text-primary"
                            : "hover:bg-slate-50"
                        }`}
                      >
                        <span className="text-xl">{config.flag}</span>
                        <span className="font-medium flex-1 text-left">
                          {t(`home.hero-main.countries.names.${config.countryCode}`)}
                        </span>
                        <span className="text-sm text-neutral-400">
                          {config.currencies.map((c) => c.code).join(" / ")}
                        </span>
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className={S.CalculatorInputRow}>
            <p className={S.CalculatorValueText}>{tCountry("exchange-rate-calculator.recipientCountryOption")}</p>
          </div>
        )}
      </div>

      <div className={S.CalculatorResultBox}>
        <span className={S.CalculatorResultLabel}>{tCountry("exchange-rate-calculator.receiverGetsLabel")}</span>
        <span className={S.CalculatorResultValue}>
          {isLoading ? "..." : `${resultRecipientCountry} ${formatNumber(receiveAmount || "0")}`}
        </span>
      </div>

      <div>
        <div className={S.CalculatorMetaRow}>
          <span className={S.CalculatorMetaLabel}>{tCountry("exchange-rate-calculator.transferFeeLabel")}</span>
          <span className={S.CalculatorMetaValue}>
            {scCharge ? `${parseInt(parseNumber(scCharge || "0"), 10).toLocaleString("ko-KR")} KRW` : "Free"}
          </span>
        </div>
        <div className={S.CalculatorMetaRow}>
          <span className={S.CalculatorMetaLabel}>{tCountry("exchange-rate-calculator.exchangeRateLabel")}</span>
          <span className={S.CalculatorMetaValue}>{exchangeRateDisplay || "---"}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={isLoading}
        className={S.CalculatorSubmitButton}
      >
        {isLoading ? "Calculating..." : tCountry("exchange-rate-calculator.submitLabel")}
      </button>
    </div>
  );
};

export default ExchangeRateCalculator;
