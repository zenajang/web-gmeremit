"use server";

import { fetchTelecomPlans, type ApiPlan } from "./data";

export async function getTelecomPlans(seq: string): Promise<ApiPlan[]> {
  return fetchTelecomPlans(seq);
}
