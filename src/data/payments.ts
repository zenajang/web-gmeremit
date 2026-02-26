export interface Solution {
  key: string;
  color: string;
  iconPath: string;
}

export const solutions: Solution[] = [
  {
    key: "sps",
    color: "#3b82f6",
    iconPath: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
  },
  {
    key: "vas",
    color: "#8b5cf6",
    iconPath: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
];

export const paymentFeatureKeys = [
  { key: "accounting", color: "#3b82f6", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
  { key: "pob", color: "#8b5cf6", icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" },
  { key: "flexibility", color: "#f97316", icon: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" },
  { key: "dynamic", color: "#14b8a6", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { key: "netout", color: "#22c55e", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { key: "technology", color: "#6366f1", icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" },
];

export interface PartnerLogo {
  name: string;
  src: string;
}

export const partnerLogos: PartnerLogo[] = [
  { name: "Hana Bank", src: "/images/payments/hanaBank.png" },
  { name: "Alipay", src: "/images/payments/alipay.svg" },
  { name: "Skyee", src: "/images/payments/skyee.png" },
  { name: "PayerMax", src: "/images/payments/payerMax.jpg" },
  { name: "Xe", src: "/images/payments/xe.svg" },
  { name: "Veem", src: "/images/payments/veem.webp" },
  { name: "Sendmn", src: "/images/payments/Sendmn.svg" },
  { name: "Cogolinks", src: "/images/payments/cogolinks.jpg" },
  { name: "BaoFu Global", src: "/images/payments/baofu.jpg" },
  { name: "Ripple", src: "/images/payments/ripple.svg" },
  { name: "PingPong", src: "/images/payments/pingpong.svg" },
  { name: "Tazapay", src: "/images/payments/tazapay.svg" },
  { name: "LianLian Pay", src: "/images/payments/lianlianpay.webp" },
  { name: "Terrapay", src: "/images/payments/terrapay.svg" },
  { name: "Ria", src: "/images/payments/ria.svg" },
  { name: "Thunes", src: "/images/payments/thunes.svg" },
];

export const paymentProcessSteps = ["step1", "step2", "step3", "step4"];
