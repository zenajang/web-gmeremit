import { NextRequest, NextResponse } from "next/server";

const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

interface TurnstileRequestBody {
  token: string;
}

/**
 * Turnstile 토큰을 Cloudflare 에 대조한다.
 *
 * 토큰은 1회용이고 약 5분 뒤 만료된다. 여기서 한 번 물어보면 소진되므로
 * 같은 토큰으로 다시 부르면 실패한다.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY is not configured");
    return NextResponse.json({ success: false }, { status: 500 });
  }

  let body: TurnstileRequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const params = new URLSearchParams({ secret, response: body.token ?? "" });
  const remoteIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if (remoteIp) params.append("remoteip", remoteIp);

  const response = await fetch(SITEVERIFY_URL, { method: "POST", body: params });
  const result: { success?: boolean } = await response.json();

  return NextResponse.json({ success: result.success === true });
}
