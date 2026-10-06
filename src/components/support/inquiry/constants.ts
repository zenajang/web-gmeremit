import type { InquiryCategory, InquiryFormValues } from "@/components/support/inquiry/types";

export const CATEGORIES: InquiryCategory[] = [
  { no: 1, kind: "chat" },
  { no: 2, kind: "ext", url: "https://www.gmebiz.com/", site: "GME Biz" },
  { no: 3, kind: "chat", chatPage: "https://gmefinance.com/" },
  { no: 4, kind: "mail" },
  { no: 5, kind: "mail" },
  { no: 6, kind: "mail" },
  { no: 7, kind: "ext", url: "https://www.gmemobile.com/view/service/myqna_edit.aspx", site: "GME Mobile" },
];

export const EMPTY_FORM: InquiryFormValues = {
  name: "",
  phone: "",
  email: "",
  title: "",
  content: "",
};

export const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ??
  (process.env.NODE_ENV === "production" ? "" : "1x00000000000000000000AA");

export const FIELD_MAX_LENGTH = {
  name: 40,
  phone: 25,
  email: 254,
  title: 50,
  content: 5000,
} as const;

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const PHONE_PATTERN = /^\+?\d{1,6}-?\d{3,4}-?\d{3,4}$/;

export const MIN_SUBMIT_LOADING_MS = 500;
