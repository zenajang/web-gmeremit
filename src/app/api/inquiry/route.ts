import { NextRequest, NextResponse } from "next/server";

const RECIPIENTS: Record<number, string> = {
  4: "partnership@gmeremit.com",
  5: "recruit@gmeremit.com",
  6: "compliance@gmeremit.com",
};

const FROM = "GME 문의하기 <noreply@send.gmeremit.com>";
const RESEND_URL = "https://api.resend.com/emails";
const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

const FIELD_MAX_LENGTH = {
  name: 40,
  phone: 25,
  email: 254,
  title: 50,
  content: 5000,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?\d{1,6}-?\d{3,4}-?\d{3,4}$/;

interface InquiryRequestBody {
  categoryNo: number;
  name: string;
  phone: string;
  email: string;
  title: string;
  content: string;
  turnstileToken: string;
}

function hasInvalidInput(body: InquiryRequestBody) {
  const { name = "", phone = "", email = "", title = "", content = "" } = body;

  if (!name.trim() || !email.trim() || !title.trim() || !content.trim()) return true;
  if (!EMAIL_PATTERN.test(email)) return true;
  if (phone.trim() && !PHONE_PATTERN.test(phone.trim())) return true;

  return (
    name.length > FIELD_MAX_LENGTH.name ||
    phone.length > FIELD_MAX_LENGTH.phone ||
    email.length > FIELD_MAX_LENGTH.email ||
    title.length > FIELD_MAX_LENGTH.title ||
    content.length > FIELD_MAX_LENGTH.content
  );
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function verifyTurnstileToken(token: string, remoteIp: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY is not configured");
    return false;
  }

  const params = new URLSearchParams({ secret, response: token ?? "" });
  if (remoteIp) params.append("remoteip", remoteIp);

  const response = await fetch(SITEVERIFY_URL, { method: "POST", body: params });
  const result: { success?: boolean } = await response.json();

  return result.success === true;
}

export async function POST(request: NextRequest) {
  const failed = NextResponse.json(
    { message: "문의 접수에 실패했습니다. 잠시 후 다시 시도해 주세요." },
    { status: 400 }
  );

  let body: InquiryRequestBody;
  try {
    body = await request.json();
  } catch {
    return failed;
  }

  if (hasInvalidInput(body)) return failed;

  const isHuman = await verifyTurnstileToken(
    body.turnstileToken,
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null
  );
  if (!isHuman) return failed;

  const to = RECIPIENTS[body.categoryNo];
  if (!to) return failed;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json({ message: "문의 접수에 실패했습니다." }, { status: 500 });
  }

  const html = `
    <h2>${escapeHtml(body.title)}</h2>
    <table cellpadding="6">
      <tr><td><b>성명</b></td><td>${escapeHtml(body.name)}</td></tr>
      <tr><td><b>이메일</b></td><td>${escapeHtml(body.email)}</td></tr>
      <tr><td><b>연락처</b></td><td>${escapeHtml(body.phone) || "-"}</td></tr>
    </table>
    <hr />
    <p style="white-space:pre-wrap">${escapeHtml(body.content)}</p>
  `;

  try {
    const response = await fetch(RESEND_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to,
        reply_to: body.email,
        subject: `[문의] ${body.title}`,
        html,
      }),
    });

    if (!response.ok) {
      console.error('Resend send failed', response.status, await response.text());
      return NextResponse.json({ message: '문의 접수에 실패했습니다.' }, { status: 502 });
    }
  } catch (error) {
    console.error("Resend send threw", error);
    return NextResponse.json({ message: '문의 접수에 실패했습니다.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true, message: '' });
}
