export type InquiryCategory =
  | { no: number; kind: "chat"; chatPage?: string }
  | { no: number; kind: "ext"; url: string; site: string }
  | { no: number; kind: "mail" };

export interface InquiryFormValues {
  name: string;
  phone: string;
  email: string;
  title: string;
  content: string;
}
