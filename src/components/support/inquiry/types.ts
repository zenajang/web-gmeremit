/**
 * 문의 유형. kind 에 따라 2단계에서 보여줄 화면이 갈린다.
 * - chat: 채팅 상담 위젯으로 연결
 * - ext:  계열사 홈페이지로 이동
 * - mail: 담당 부서로 메일 접수
 */
export type InquiryCategory =
  | {
      no: number;
      kind: "chat";
      name: string;
      sub: string;
      /**
       * 채팅을 열기 전에 채널톡에 알릴 페이지 주소.
       * 같은 채널을 여러 도메인이 쓰고 지원봇이 페이지 URL 조건으로 갈리므로,
       * 이 값으로 어느 창구의 봇을 띄울지 정한다. 없으면 현재 주소를 쓴다.
       */
      chatPage?: string;
    }
  | { no: number; kind: "ext"; name: string; sub: string; url: string; site: string; items: string[] }
  | { no: number; kind: "mail"; name: string; sub: string; dept: string };

export interface InquiryFormValues {
  name: string;
  phone: string;
  email: string;
  title: string;
  content: string;
}
