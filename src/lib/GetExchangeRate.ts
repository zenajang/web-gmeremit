interface ExRateResponse {
  errorCode: string;
  exRate: string | null;
  exRateDisplay: string | null;
  pAmt: string | null;
  scCharge: string | null;
  msg: string | null;
}

export interface GetExchangeRateParams {
  pCurr: string;
  pCountryName: string;
  amount: string;
  deliveryMethod?: string;
  calBy?: string;
}

export interface ExchangeRateError {
  /** home.exchange.calculator 아래 번역 키 */
  key: string;
  params: Record<string, string>;
}

export interface GetExchangeRateResult {
  success: boolean;
  exchangeRateDisplay: string;
  scCharge: string;
  receiveAmount: string;
  error: ExchangeRateError | null;
}

/**
 * 서버가 주는 영어 msg 를 번역 키로 바꾼다.
 * 메인 계산기와 국가 랜딩 계산기가 같은 분기를 쓰도록 여기 한 곳에 둔다.
 */
export function classifyExchangeRateError(msg: string): ExchangeRateError {
  const maxAmtMatch = msg.match(/Maximum sending amount\s+([\d,]+)\s*KRW/i);

  if (msg.includes("Thirdparty") || msg.includes("Service is currently not available")) {
    return { key: "error_unavailable_method", params: {} };
  }
  if (maxAmtMatch) {
    return { key: "error_max_amount", params: { amount: maxAmtMatch[1] } };
  }
  if (msg.includes("limit") || msg.includes("exceeds")) {
    return { key: "error_limit", params: {} };
  }
  if (msg.includes("Exchange rate not defined") || msg.includes("charge not defined")) {
    return { key: "error_unavailable", params: {} };
  }
  return { key: "error_failed", params: {} };
}

export async function getExchangeRate({
  pCurr,
  pCountryName,
  amount,
  deliveryMethod = "1",
  calBy = "c",
}: GetExchangeRateParams): Promise<GetExchangeRateResult> {
  try {
    const response = await fetch("/api/exchange-rate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pCurr, pCountryName, cAmt: amount, deliveryMethod, calBy }),
    });
    const data: ExRateResponse = await response.json();

    if (data.errorCode === "0" && data.pAmt && data.exRate) {
      return {
        success: true,
        exchangeRateDisplay: data.exRateDisplay || data.exRate,
        scCharge: data.scCharge || "",
        receiveAmount: Math.floor(Number(data.pAmt.replace(/,/g, ""))).toString(),
        error: null,
      };
    }

    return {
      success: false,
      exchangeRateDisplay: "",
      scCharge: "",
      receiveAmount: "",
      error: classifyExchangeRateError(data.msg || ""),
    };
  } catch {
    return {
      success: false,
      exchangeRateDisplay: "",
      scCharge: "",
      receiveAmount: "",
      error: { key: "error_network", params: {} },
    };
  }
}
