"use client";

import { useState } from "react";
import { countryConfigs } from "@/data/countries";
import { useTranslation } from "@/hooks/useTranslation";
import { getExchangeRate } from "@/lib/GetExchangeRate";
import * as S from "./styles";

const formatNumber = (num: string) => num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const parseNumber = (str: string) => str.replace(/,/g, "");

const ExchangeRateCalculator = ({ countryName }: { countryName: string }) => {
  const { t } = useTranslation("home.exchange");
  const [sendAmount, setSendAmount] = useState(""); // 보내는 금액 (input에 표시, 콤마 포맷 전 raw 문자열)
  const [receiveAmount, setReceiveAmount] = useState(""); // 받는 금액 (계산 결과, 화면 표시용)
  const [exchangeRateDisplay, setExchangeRateDisplay] = useState(""); // 환율 표시 문자열 (API 응답 exRateDisplay)
  const [scCharge, setScCharge] = useState(""); // Service Charge — 송금 수수료
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); // 사용자에게 보여줄 에러 메시지 (완성된 문자열)

  const matchedCountry = countryConfigs.find(
    (c) => c.countryName.toLowerCase() === countryName?.toLowerCase()
  );
  const pCurr = matchedCountry?.currencies[0]?.code ?? "";
  const pCountryName = matchedCountry?.countryName ?? countryName;

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

    const result = await getExchangeRate({ pCurr, pCountryName, amount: sendAmount });

    if (result.success) {
      setExchangeRateDisplay(result.exchangeRateDisplay);
      setScCharge(result.scCharge);
      setReceiveAmount(result.receiveAmount);
    } else {
      setReceiveAmount("");
      setExchangeRateDisplay("");
      setScCharge("");
      setHasError(true);
      setErrorMsg(result.errorMsg);
    }
    setIsLoading(false);
  };

  return (
    <div className={S.CalculatorTitle}>
      <div className={S.CalculatorHeaderRow}>
        <span className={S.CalculatorHeading}>GME Remit calculator</span>
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
          Send Amount
        </label>
        <div className={S.CalculatorInputRow}>
          <input
            id="send-amount"
            type="text"
            inputMode="numeric"
            placeholder="0"
            value={formatNumber(sendAmount)}
            onChange={handleSendAmountChange}
            className={S.CalculatorInput}
          />
          <span className={S.CalculatorCurrencyTag}>KRW</span>
        </div>
        {hasError && errorMsg && <p className={S.CalculatorErrorMessage}>{errorMsg}</p>}
      </div>

      <div className={S.CalculatorFieldWrapper}>
        <p className={S.CalculatorFieldLabel}>Recipient country</p>
        <div className={S.CalculatorInputRow}>
          <p className={S.CalculatorValueText}>{pCountryName}</p>
          <span className={S.CalculatorCurrencyTag}>{pCurr}</span>
        </div>
      </div>

      <div className={S.CalculatorResultBox}>
        <span className={S.CalculatorResultLabel}>Receiver gets</span>
        <span className={S.CalculatorResultValue}>
          {isLoading ? "..." : `${pCurr} ${formatNumber(receiveAmount || "0")}`}
        </span>
      </div>

      <div>
        <div className={S.CalculatorMetaRow}>
          <span className={S.CalculatorMetaLabel}>Transfer fee</span>
          <span className={S.CalculatorMetaValue}>
            {scCharge ? `${parseInt(parseNumber(scCharge || "0"), 10).toLocaleString("ko-KR")} KRW` : "Free"}
          </span>
        </div>
        <div className={S.CalculatorMetaRow}>
          <span className={S.CalculatorMetaLabel}>Exchange rate</span>
          <span className={S.CalculatorMetaValue}>{exchangeRateDisplay || "---"}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={isLoading}
        className={S.CalculatorSubmitButton}
      >
        {isLoading ? "Calculating..." : "Send Money Now"}
      </button>
    </div>
  );
};

export default ExchangeRateCalculator;
