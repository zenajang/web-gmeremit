export const loanBenefitKeys = ["countries", "success", "support", "realtime", "simple"] as const;

export const loanBenefitImages: Record<string, { src: string; alt: string; width: number; height: number }> = {
  countries: { src: "/images/common/globe.png", alt: "Globe", width: 48, height: 48 },
  success: { src: "/images/common/success.png", alt: "success", width: 36, height: 36 },
  support: { src: "/images/common/support.png", alt: "support", width: 32, height: 32 },
  realtime: { src: "/images/common/realtime.png", alt: "realtime", width: 32, height: 32 },
  simple: { src: "/images/common/phone.png", alt: "Phone", width: 32, height: 32 },
};

export const productKeys = ["gme_loan", "house_loan", "business_loan", "student_loan", "property_loan", "vacation_loan", "car_loan"];

export const commonTags = ["max_amount", "duration", "visa_period", "contract", "early_settlement"];

export const loanSteps = ["step1", "step2", "step3", "step4", "step5"];

export interface ProviderInfo {
  companyName: string;
  brandName: string;
  ceo: string;
  address: string;
  phone: string;
  email: string;
  businessNumber: string;
  loanLicense: string;
  supervisor: string;
}

export const gmeFinanceInfo: ProviderInfo = {
  companyName: "주식회사 지엠이대부",
  brandName: "GME Finance",
  ceo: "성종화",
  address: "서울특별시 영등포구 영등포로 150, 비동 202호, 203호, 204호(당산동1가, 생각공장당산) (우)07292",
  phone: "02-765-5555",
  email: "",
  businessNumber: "646-88-01104",
  loanLicense: "2019-금감원-1801",
  supervisor: "금융감독원",
};

export const gmeFinanceInfoEn: ProviderInfo = {
  companyName: "GME Lending Co., Ltd.",
  brandName: "GME Finance",
  ceo: "Sung Jong-hwa",
  address: "Room 202, 203, 204, Building B, 150 Yeongdeungpo-ro, Yeongdeungpo-gu, Seoul (Dangsan-dong 1-ga, Idea Factory Dangsan) 07292",
  phone: "02-765-5555",
  email: "",
  businessNumber: "646-88-01104",
  loanLicense: "2019-FSS-1801",
  supervisor: "Financial Supervisory Service",
};

export const loanStepIconPaths: { main: string; accent: string }[] = [
  {
    main: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3",
    accent: "M9.75 18.75h4.5",
  },
  {
    main: "M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zM10.5 2.25v9h9",
    accent: "M8.25 15h7.5m-7.5 3H12",
  },
  {
    main: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
    accent: "M10.5 10.5h.008v.008H10.5V10.5zm0-2.25v2.25m0 2.25v.008",
  },
  {
    main: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    accent: "M9 12.75L11.25 15 15 9.75",
  },
  {
    main: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    accent: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33",
  },
];
