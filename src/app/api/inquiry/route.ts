import { NextRequest, NextResponse } from "next/server";

const RECIPIENTS: Record<number, string> = {
  4: "partnership@gmeremit.com",
  5: "recruit@gmeremit.com",
  6: "compliance@gmeremit.com",
};

const FROM = "GME 문의하기 <noreply@send.gmeremit.com>";
const RESEND_URL = "https://api.resend.com/emails";

interface InquiryRequestBody {
  categoryNo: number;
  name: string;
  phone: string;
  email: string;
  title: string;
  content: string;
}

/** 메일 본문에 사용자 입력을 넣기 전에 태그로 해석될 문자를 막는다 */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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
      console.error("Resend send failed", response.status, await response.text());
      return NextResponse.json({ message: "문의 접수에 실패했습니다." }, { status: 502 });
    }
  } catch (error) {
    console.error("Resend send threw", error);
    return NextResponse.json({ message: "문의 접수에 실패했습니다." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
