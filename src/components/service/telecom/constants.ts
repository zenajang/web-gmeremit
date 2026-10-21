export const TELECOM_CATEGORIES = [
  { seq: "10002", labelKey: "services-telecom.categories.recommended" },
  { seq: "10000", labelKey: "services-telecom.categories.postpaid" },
  { seq: "10001", labelKey: "services-telecom.categories.fiveG" },
  { seq: "10005", labelKey: "services-telecom.categories.prepaid" },
] as const;

export const DEFAULT_TELECOM_SEQ = TELECOM_CATEGORIES[0].seq;

export const TELECOM_PLANS_REVALIDATE_SECONDS = 86400;

export const telecomFeatureKeys = [
  "multilang",
  "affordable",
  "network",
  "activation",
  "esim",
  "intl_call",
] as const;

export const usimStepKeys = [
  "services-telecom.usim_intro.step1",
  "services-telecom.usim_intro.step2",
  "services-telecom.usim_intro.step3",
  "services-telecom.usim_intro.step4",
] as const;

export const GME_MOBILE_HOME_URL = "https://www.gmemobile.com/view/main/main.aspx";

export const GME_MOBILE_ESIM_URL = "https://www.gmemobile.com/view/selfopen/esim_explain.aspx";

export const GME_MOBILE_USIM_URL = "https://www.gmemobile.com/view/selfopen/selfopen_explain.aspx";
