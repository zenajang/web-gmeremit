import { NextRequest, NextResponse } from "next/server";

const API_URL =
  process.env.EXCHANGE_RATE_API_URL ??
  "https://preprod-online.gmeremit.com/api/v1/calculateExRate";

interface ExRateRequestBody {
  pCurr: string;
  pCountryName: string;
  cAmt?: string;
  pAmt?: string;
  deliveryMethod?: string | number;
  calBy?: string;
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.EXCHANGE_RATE_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { errorCode: "999", msg: "Exchange rate API key is not configured" },
        { status: 500 }
      );
    }

    const { pCurr, pCountryName, cAmt, pAmt, deliveryMethod, calBy }: ExRateRequestBody =
      await request.json();

    const by = String(calBy).toLowerCase() === "p" ? "p" : "c";
    const amount = Number((by === "c" ? cAmt : pAmt)?.toString().replace(/,/g, "") || "0");

    const payload = {
      pCurr,
      pCountryName,
      collCurr: "KRW",
      deliveryMethod: Number(deliveryMethod) || 1,
      cardOnline: false,
      calBy: by,
      ...(by === "c" ? { cAmt: amount } : { pAmt: amount }),
    };

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { errorCode: "999", msg: "Failed to fetch exchange rate" },
      { status: 500 }
    );
  }
}
