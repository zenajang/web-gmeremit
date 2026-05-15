import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GME Finance | 외국인 금융 서비스 · Finance for Foreigners",
  description:
    "GME Finance — financial service for foreigners living in Korea. Easy application, fast approval. 한국 거주 외국인을 위한 GME Finance. 간편한 신청, 빠른 심사.",
  keywords: [
    "GME Finance",
    "GME 파이낸스",
    "외국인 금융",
    "foreigner finance Korea",
    "외국인 대출",
    "loan for foreigners Korea",
    "외국인 신용대출",
    "한국 외국인 대출",
  ],
  openGraph: {
    title: "GME Finance | 외국인 금융 서비스",
    description:
      "GME Finance — 한국 거주 외국인을 위한 금융 서비스. 간편 신청, 빠른 심사.",
    url: "https://www.gmeremit.com/services/loan",
  },
  alternates: {
    canonical: "https://www.gmeremit.com/services/loan",
  },
};

export default function LoanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
