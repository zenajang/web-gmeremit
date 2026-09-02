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

export interface GetExchangeRateResult {
  success: boolean;
  exchangeRateDisplay: string;
  scCharge: string;
  receiveAmount: string;
  errorMsg: string;
}

function parseErrorMsg(msg: string): string {
  const maxAmtMatch = msg.match(/Maximum sending amount\s+([\d,]+)\s*KRW/i);
  if (msg.includes("Thirdparty") || msg.includes("Service is currently not available")) {
    return "This payout method isn't available right now.";
  }
  if (maxAmtMatch) {
    return `Maximum sending amount is ${maxAmtMatch[1]} KRW.`;
  }
  if (msg.includes("limit") || msg.includes("exceeds")) {
    return "This amount exceeds the sending limit.";
  }
  if (msg.includes("Exchange rate not defined") || msg.includes("charge not defined")) {
    return "Exchange rate isn't available for this corridor.";
  }
  return msg || "Failed to calculate exchange rate.";
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
        errorMsg: "",
      };
    }

    return {
      success: false,
      exchangeRateDisplay: "",
      scCharge: "",
      receiveAmount: "",
      errorMsg: parseErrorMsg(data.msg || ""),
    };
  } catch {
    return {
      success: false,
      exchangeRateDisplay: "",
      scCharge: "",
      receiveAmount: "",
      errorMsg: "Network error. Please try again.",
    };
  }
}
