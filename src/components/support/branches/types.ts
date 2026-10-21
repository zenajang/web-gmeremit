import type { BranchData } from "@/data/branches";

export interface Branch extends BranchData {
  name: string;
  address: string;
  hours: string;
}
