import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "외국인 대출 서비스 | Loan for Foreigners",
  description:
    "한국 거주 외국인을 위한 GME 대출 서비스. 간편한 신청, 빠른 심사. GME loan service for foreigners living in Korea. Easy application, fast approval.",
  keywords: [
    "외국인 대출",
    "loan for foreigners Korea",
    "외국인 신용대출",
    "GME 대출",
    "외국인 금융",
    "한국 외국인 대출",
    "foreigner loan Korea",
  ],
  openGraph: {
    title: "외국인 대출 서비스 | GME Remit",
    description:
      "한국 거주 외국인을 위한 GME 대출 서비스. 간편 신청, 빠른 심사.",
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
