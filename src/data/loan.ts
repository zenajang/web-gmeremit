export const loanBenefitKeys = ["countries", "success", "support", "realtime", "simple"] as const;

export const loanBenefitImages: Record<string, { src: string; alt: string; className: string }> = {
  countries: { src: "/images/common/globe.png", alt: "Globe", className: "w-12 h-12 object-contain" },
  success: { src: "/images/common/success.png", alt: "success", className: "w-9 h-9 object-contain" },
  support: { src: "/images/common/support.png", alt: "support", className: "w-8 h-8 object-contain" },
  realtime: { src: "/images/common/realtime.png", alt: "realtime", className: "w-8 h-8 object-contain" },
  simple: { src: "/images/common/phone.png", alt: "Phone", className: "w-8 h-8 object-contain" },
};

export const productKeys = ["gme_loan", "house_loan", "business_loan", "student_loan", "property_loan", "vacation_loan", "car_loan"];

export const commonTags = ["max_amount", "duration", "visa_period", "contract", "early_settlement"];

export const loanSteps = ["step1", "step2", "step3", "step4", "step5"];

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
