const GME_MOBILE_API =
  "https://www.gmemobile.com/common/component/plan/AjaxPhone_plan.aspx";

export type ApiPlan = {
  GDCD: string;
  GDNM: string;
  GDDESC: string;
  MNO_CD: string;
  DATAAMOUNT: string;
  ADD_DATA: string;
  VOICEAMOUNT: string;
  VOICE_ADD_AMT: string;
  LETTERAMOUNT: string;
  TT_AMT: string;
  DISCOUNT: string;
  QOSFG: string;
  QOSAMT: string;
  KEYWORD: string;
  CATEGORYSEQ: string;
};

export const TELECOM_CATEGORIES = [
  { seq: "10002", label: "추천" },
  { seq: "10000", label: "후불" },
  { seq: "10001", label: "5G/특수" },
  { seq: "10005", label: "선불" },
] as const;

export const DEFAULT_TELECOM_SEQ = TELECOM_CATEGORIES[0].seq;

export async function fetchTelecomPlans(seq: string): Promise<ApiPlan[]> {
  try {
    const res = await fetch(GME_MOBILE_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        header: [{ type: "02" }],
        body: [{ seq, order_type: "1", order_align: "ASC" }],
      }),
      next: { revalidate: 86400 },
    });
    const data = await res.json();
    return Array.isArray(data.DATA) ? data.DATA : [];
  } catch {
    return [];
  }
}
