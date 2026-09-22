"use client";

import { useEffect, useRef, useState } from "react";
import { countryConfigs } from "@/data/countries";
import { useTranslation, translations } from "@/hooks/useTranslation";
import { useCountryTranslation } from "@/hooks/useCountryTranslation";
import { useClickOutside } from "@/hooks/useClickOutside";
import { getExchangeRate } from "@/lib/GetExchangeRate";
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
  const { t } = useTranslation("home.exchange", resolveMessagesLang(activeLangCode));
  const normalize = (value: string) => value.toLowerCase().replace(/[-\s]+/g, "");
  const matchedCountry = countryConfigs.find(
    (c) => normalize(c.countryName) === normalize(countryName ?? "")
  );

  const [sendAmount, setSendAmount] = useState(""); // 보내는 금액 (input에 표시, 콤마 포맷 전 raw 문자열)
  const [receiveAmount, setReceiveAmount] = useState(""); // 받는 금액 (계산 결과, 화면 표시용)
  const [exchangeRateDisplay, setExchangeRateDisplay] = useState(""); // 환율 표시 문자열 (API 응답 exRateDisplay)
  const [scCharge, setScCharge] = useState(""); // Service Charge — 송금 수수료
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); // 사용자에게 보여줄 에러 메시지 (완성된 문자열)
  const [selectedRecipientCountry, setSelectedRecipientCountry] = useState(matchedCountry?.currencies[0]?.code ?? "");
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [isPayoutOpen, setIsPayoutOpen] = useState(false);
  const [resultRecipientCountry, setResultRecipientCountry] = useState(matchedCountry?.currencies[0]?.code ?? "");
  const payoutDropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(payoutDropdownRef, () => setIsPayoutOpen(false));

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
    setErrorMsg("");

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
      setErrorMsg(result.errorMsg);
    }
    setIsLoading(false);
  };

  const changeRecipientCountry = (currency: string) => {
    setSelectedRecipientCountry(currency);
  };

  return (
    <div className={S.CalculatorTitle}>
      <div className={S.CalculatorHeaderRow}>
        <span className={S.CalculatorHeading}>{tCountry("exchangeRate.cardTitle")}</span>
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
          {isLoading ? t("calculator.loading") : hasError ? t("calculator.error") : t("calculator.realtime")}
        </div>
      </div>

      <div className={S.CalculatorFieldWrapper}>
        <label htmlFor="send-amount" className={S.CalculatorFieldLabel}>
          {tCountry("exchangeRate.sendAmountLabel")}
        </label>
        <div className={S.CalculatorInputRow}>
          <input
            id="send-amount"
            type="text"
            inputMode="numeric"
            placeholder={tCountry("exchangeRate.sendAmountPlaceholder")}
            value={sendAmount ? Number(sendAmount).toLocaleString("ko-KR") : ""}
            onChange={handleSendAmountChange}
            className={S.CalculatorInput}
          />
          <span className={S.CalculatorCurrencyTag}>{tCountry("exchangeRate.sendCurrencyLabel")}</span>
        </div>
        {hasError && errorMsg && <p className={S.CalculatorErrorMessage}>{errorMsg}</p>}
      </div>

      <div ref={payoutDropdownRef} className={`${S.CalculatorFieldWrapper} relative`}>
        <label className={S.CalculatorFieldLabel}>{t("calculator.delivery_method")}</label>
        <button
          type="button"
          disabled={payoutMethods.length <= 1}
          onClick={() => setIsPayoutOpen(!isPayoutOpen)}
          className={`${S.CalculatorInputRow} w-full transition-colors ${payoutMethods.length >= 2 && "cursor-pointer"}`}
        >
          <span className={S.CalculatorValueText}>
            {deliveryMethod ? t(`calculator.payout_methods.${deliveryMethod}`) : ""}
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
                  <span className="font-medium flex-1 text-left">{t(`calculator.payout_methods.${method.key}`)}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className={S.CalculatorFieldWrapper}>
        <div className={S.CalculatorFieldLabel}>{tCountry("exchangeRate.recipientCountryLabel")}
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
        <div className={S.CalculatorInputRow}>
          <p className={S.CalculatorValueText}>{tCountry("exchangeRate.recipientCountryOption")}</p>
          {/* <span className={S.CalculatorCurrencyTag}>{pCurr}</span> */}
        </div>
      </div>

      <div className={S.CalculatorResultBox}>
        <span className={S.CalculatorResultLabel}>{tCountry("exchangeRate.receiverGetsLabel")}</span>
        <span className={S.CalculatorResultValue}>
          {isLoading ? "..." : `${resultRecipientCountry} ${formatNumber(receiveAmount || "0")}`}
        </span>
      </div>

      <div>
        <div className={S.CalculatorMetaRow}>
          <span className={S.CalculatorMetaLabel}>{tCountry("exchangeRate.transferFeeLabel")}</span>
          <span className={S.CalculatorMetaValue}>
            {scCharge ? `${parseInt(parseNumber(scCharge || "0"), 10).toLocaleString("ko-KR")} KRW` : "Free"}
          </span>
        </div>
        <div className={S.CalculatorMetaRow}>
          <span className={S.CalculatorMetaLabel}>{tCountry("exchangeRate.exchangeRateLabel")}</span>
          <span className={S.CalculatorMetaValue}>{exchangeRateDisplay || "---"}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={isLoading}
        className={S.CalculatorSubmitButton}
      >
        {isLoading ? "Calculating..." : tCountry("exchangeRate.submitLabel")}
      </button>
    </div>
  );
};

export default ExchangeRateCalculator;
