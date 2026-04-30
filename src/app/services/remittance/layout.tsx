import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "해외송금 서비스 | Overseas Remittance",
  description:
    "수수료 90% 절감, 최고 환율로 해외송금. GME Remit의 빠르고 안전한 해외송금 서비스를 이용하세요. Send money overseas with the best exchange rate and lowest fees.",
  keywords: [
    "해외송금",
    "overseas remittance",
    "international money transfer",
    "외국인 송금",
    "GME 송금",
    "수수료 저렴",
    "환율 우대",
  ],
  openGraph: {
    title: "해외송금 서비스 | GME Remit",
    description:
      "수수료 90% 절감, 최고 환율로 해외송금. 빠르고 안전한 GME 해외송금 서비스.",
    url: "https://www.gmeremit.com/services/remittance",
  },
  alternates: {
    canonical: "https://www.gmeremit.com/services/remittance",
  },
};

export default function RemittanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
