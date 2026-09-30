export type InquiryCategory =
  | {
      no: number;
      kind: "chat";
      name: string;
      sub: string;
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
