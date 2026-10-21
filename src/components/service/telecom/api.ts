"use server";

import { TELECOM_PLANS_REVALIDATE_SECONDS } from "@/components/service/telecom/constants";
import type { ApiPlan } from "@/components/service/telecom/types";

const GME_MOBILE_PLAN_API =
  "https://www.gmemobile.com/common/component/plan/AjaxPhone_plan.aspx";

/**
 * GME Mobile 에서 요금제 목록을 받아온다.
 *
 * 서버에서만 부른다. 외부 도메인이라 브라우저에서 직접 부르면 CORS 에 막힌다.
 *
 * @param seq - 요금제 카테고리 번호. `TELECOM_CATEGORIES` 의 `seq`
 * @returns 요금제 배열. 응답이 비정상이거나 요청이 실패하면 빈 배열
 */
export async function fetchTelecomPlans(seq: string): Promise<ApiPlan[]> {
  try {
    const response = await fetch(GME_MOBILE_PLAN_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        header: [{ type: "02" }],
        body: [{ seq, order_type: "1", order_align: "ASC" }],
      }),
      next: { revalidate: TELECOM_PLANS_REVALIDATE_SECONDS },
    });
    const data = await response.json();
    return Array.isArray(data.DATA) ? data.DATA : [];
  } catch {
    return [];
  }
}
