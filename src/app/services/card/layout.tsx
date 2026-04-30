import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GME 선불카드 | Prepaid Card",
  description:
    "GME 선불카드로 전 세계 어디서나 편리하게 결제하세요. ATM 인출, 대중교통, 해외 결제까지. Use your GME prepaid card anywhere in the world.",
  keywords: [
    "GME 선불카드",
    "prepaid card Korea",
    "외국인 카드",
    "선불카드 발급",
    "GME card",
    "외국인 체크카드",
    "ATM 인출",
  ],
  openGraph: {
    title: "GME 선불카드 | GME Remit",
    description:
      "전 세계 어디서나 사용 가능한 GME 선불카드. ATM 인출, 대중교통, 해외 결제.",
    url: "https://www.gmeremit.com/services/card",
  },
  alternates: {
    canonical: "https://www.gmeremit.com/services/card",
  },
};

export default function CardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
