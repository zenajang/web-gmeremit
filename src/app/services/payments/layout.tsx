import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "기업 결제 솔루션 | Business Payment Solutions",
  description:
    "GME Remit의 기업 결제 솔루션. 글로벌 결제, 급여 지급, 공급망 금융까지 한 번에. Enterprise payment solutions for global businesses in Korea.",
  keywords: [
    "기업 결제",
    "business payment",
    "글로벌 결제",
    "급여 지급",
    "공급망 금융",
    "GME 결제",
    "B2B payment Korea",
  ],
  openGraph: {
    title: "기업 결제 솔루션 | GME Remit",
    description:
      "글로벌 결제, 급여 지급, 공급망 금융까지. GME Remit 기업 결제 솔루션.",
    url: "https://www.gmeremit.com/services/payments",
  },
  alternates: {
    canonical: "https://www.gmeremit.com/services/payments",
  },
};

export default function PaymentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
