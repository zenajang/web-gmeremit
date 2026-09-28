/**
 * 문의 유형. kind 에 따라 2단계에서 보여줄 화면이 갈린다.
 * - chat: 채팅 상담 위젯으로 연결
 * - ext:  계열사 홈페이지로 이동
 * - mail: 담당 부서로 메일 접수
 */
export type InquiryCategory =
  | { no: number; kind: "chat"; name: string; sub: string }
  | { no: number; kind: "ext"; name: string; sub: string; url: string; site: string; items: string[] }
  | { no: number; kind: "mail"; name: string; sub: string; dept: string };

export interface InquiryFormValues {
  name: string;
  phone: string;
  email: string;
  title: string;
  content: string;
}
