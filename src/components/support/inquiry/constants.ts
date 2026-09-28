import type { InquiryCategory, InquiryFormValues } from "./types";

export const CATEGORIES: InquiryCategory[] = [
  { no: 1, kind: "chat", name: "개인송금 관련 문의", sub: "개인 고객 송금 · 환율 · 수취" },
  {
    no: 2,
    kind: "ext",
    name: "기업송금 (Biz) 관련 문의",
    sub: "법인 · 무역대금 · B2B",
    url: "https://www.gmebiz.com/main/support/register-inquiry/",
    site: "GME Biz",
    items: ["법인 회원가입 및 심사", "무역대금·용역대금 송금", "수수료 및 환율 조건", "API 연동 및 정산"],
  },
  { no: 3, kind: "chat", name: "대출 관련 문의", sub: "신청 자격 · 한도 · 상환" },
  { no: 4, kind: "mail", name: "협업 · 파트너십 문의", sub: "제휴 · 사업 제안", dept: "담당 부서" },
  { no: 5, kind: "mail", name: "취업 · 채용 문의", sub: "입사 지원 · 채용 절차", dept: "인사 담당 부서" },
  { no: 6, kind: "mail", name: "소비자보호 · 민원", sub: "분쟁 · 이용 제한 · 신고", dept: "소비자보호 담당 부서" },
  {
    no: 7,
    kind: "ext",
    name: "모바일 · 통신 문의",
    sub: "요금제 · 개통 · 유심",
    url: "https://www.gmemobile.com/view/service/myqna_edit.aspx",
    site: "GME Mobile",
    items: ["요금제 및 청구 요금 조회", "개통 · 번호이동 · 해지", "유심(USIM) 배송 및 교체", "데이터 · 통화 품질"],
  },
];

export const CHAT_GUIDE = {
  title: "실시간 채팅 상담으로 연결됩니다",
  description: "상담원이 실시간으로 답변해 드립니다. 운영시간 외에는 챗봇 안내 후 콜백을 접수합니다.",
  items: [
    "평일 09:00 ~ 18:00 · 상담원 연결",
    "그 외 시간 · 챗봇 안내 후 콜백 접수",
    "12개 언어 지원 (네팔어·베트남어·태국어 등)",
  ],
};

export const EMPTY_FORM: InquiryFormValues = {
  name: "",
  phone: "",
  email: "",
  title: "",
  content: "",
};

/** 입력 요소 공통 스타일. FormField · TextAreaField · CaptchaField 가 함께 쓴다 */
export const FIELD_CLASS =
  "w-full rounded-[10px] border border-gray-200 bg-white px-4 py-3 text-[15px] text-dark placeholder:text-gray-400 transition-colors focus:border-primary focus:outline-none focus:ring-[3px] focus:ring-primary/10";
