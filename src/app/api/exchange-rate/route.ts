import { after, NextRequest, NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase/admin";

const API_URL =
  process.env.EXCHANGE_RATE_API_URL ??
  "https://preprod-online.gmeremit.com/api/v1/calculateExRate";

/**
 * /api/exchange-rate 로 들어온 요청 한 건을 기록한다.
 * 봇 스크래핑 현황 파악용이라 응답을 막지 않고 after 로 응답 뒤에 쓴다.
 */
function logExRateRequest(
  request: NextRequest,
  targetCurrency: string,
  targetCountry: string
) {
  // 로컬 개발 요청은 운영 현황을 흐리므로 기록하지 않는다
  if (process.env.NODE_ENV !== "production") return;

  after(async () => {
    const supabaseAdmin = createSupabaseAdmin();
    if (!supabaseAdmin) {
      console.error("SUPABASE_SERVICE_ROLE_KEY is not configured");
      return;
    }

    const { error } = await supabaseAdmin.from("exrate_request_log").insert({
      ip: request.headers.get("x-forwarded-for"),
      country: request.headers.get("x-vercel-ip-country"),
      user_agent: request.headers.get("user-agent"),
      accept_language: request.headers.get("accept-language"),
      referer: request.headers.get("referer"),
      sec_fetch_site: request.headers.get("sec-fetch-site"),
      session_id: request.cookies.get("vid")?.value ?? null,
      client_hint: request.headers.get("sec-ch-ua"),
      target_currency: targetCurrency,
      target_country: targetCountry,
    });

    if (error) console.error("exrate_request_log insert failed", error.message);
  });
}

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

    logExRateRequest(request, pCurr, pCountryName);

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
