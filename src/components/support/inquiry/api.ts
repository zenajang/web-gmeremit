import type { InquiryFormValues } from "./types";

interface SendInquiryEmailParams extends InquiryFormValues {
  categoryNo: number;
  turnstileToken: string;
}

type sendInquiryEmailResponse = {
  success: boolean
  message: string
}

/**
 * 문의 내용을 유형별 담당 부서로 발송한다.
 *
 * 서버가 Turnstile 토큰을 Cloudflare 에 대조한 뒤에만 발송한다. 검증과 발송이 한 요청이라
 * 발송만 따로 호출할 수 없다.
 *
 * 수신 주소는 서버가 `categoryNo` 로 결정한다. 클라이언트는 주소를 알지 못한다.
 * 발송 메일의 `Reply-To` 에 `params.email` 이 들어가 담당자가 답장하면 문의자에게 간다.
 * 예외를 던지지 않는다. 실패도 반환값으로 알린다.
 *
 * @param params - 폼 입력값 전체와 문의 유형 번호
 * @param params.categoryNo - 4 협업·파트너십 / 5 취업·채용 / 6 소비자보호·민원
 * @param params.name - 문의자 성명. 메일 본문에 들어간다
 * @param params.phone - 문의자 연락처. 비어 있으면 본문에 `-` 로 표시된다
 * @param params.email - 문의자 이메일. 본문과 `Reply-To` 양쪽에 쓰인다
 * @param params.title - 메일 제목에 `[문의]` 접두와 함께 들어간다
 * @param params.content - 메일 본문
 * @param params.turnstileToken - Turnstile 위젯이 발급한 토큰. 1회용이라 이 호출로 소진된다
 * @returns `success` 가 `true` 면 발송 완료이고 `message` 는 빈 문자열이다.
 *          `false` 면 `message` 에 사용자에게 보여줄 문구가 담긴다.
 *          토큰이 만료·재사용됐거나 봇으로 판정된 경우도 `false` 다
 *
 * @example
 * const { success, message } = await sendInquiryEmail({ categoryNo: category.no, turnstileToken, ...form });
 * if (!success) setError(message);
 */
export const sendInquiryEmail = async (params: SendInquiryEmailParams): Promise<sendInquiryEmailResponse> => {
  const response = await fetch("/api/inquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    return {success: false, message: "문의 접수에 실패했습니다. 잠시 후 다시 시도해 주세요."}
  };

  const data = await response.json()
  data.success = true
  
  return data
}
