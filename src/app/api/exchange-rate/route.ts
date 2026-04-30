import { NextRequest, NextResponse } from "next/server";

const GME_API_URL = "https://online.gmeremit.com/Default.aspx";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { pCurr, pCountryName, cAmt, pAmt, deliveryMethod = "2", calBy = "C" } = body;

    const params = new URLSearchParams({
      method: "GetExRate",
      pCurr,
      pCountryName,
      collCurr: "KRW", 
      deliveryMethod,
      cAmt: cAmt || "",
      pAmt: pAmt || "",
      cardOnline: "false",
      calBy,
    });

    const res = await fetch(GME_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
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
