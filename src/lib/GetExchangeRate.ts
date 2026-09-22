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
  /** home.exchange.calculator 아래 번역 키. 분류하지 못했으면 빈 문자열 */
  key: string;
  params: Record<string, string>;
  /** 분류하지 못했을 때 서버가 준 원문. 번역문 대신 이걸 그대로 보여준다 */
  raw?: string;
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
  const amountMatch = msg.match(/(Minimum|Maximum) sending amount\s+([\d,]+)\s*KRW/i);

  if (msg.includes("Thirdparty") || msg.includes("Service is currently not available")) {
    return { key: "error_unavailable_method", params: {} };
  }
  if (amountMatch) {
    const bound = amountMatch[1].toLowerCase() === "minimum" ? "min" : "max";
    return { key: `error_${bound}_amount`, params: { amount: amountMatch[2] } };
  }
  if (msg.includes("limit") || msg.includes("exceeds")) {
    return { key: "error_limit", params: {} };
  }
  if (msg.includes("Exchange rate not defined") || msg.includes("charge not defined")) {
    return { key: "error_unavailable", params: {} };
  }
  // 모르는 응답은 덮어쓰지 않는다. 일반 문구로 바꾸면 사용자도 CS도 원인을 잃는다
  return msg ? { key: "", params: {}, raw: msg } : { key: "error_failed", params: {} };
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
