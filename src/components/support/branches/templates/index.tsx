"use client";

import { useMemo, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { BranchPhoto, BranchSelector } from "@/components/support/branches/molecules";
import { BranchDetailCard, BranchMapPanel } from "@/components/support/branches/organisms";
import type { Branch } from "@/components/support/branches/types";
import { branchesData } from "@/data/branches";

const DEFAULT_BRANCH_ID = 1;

const BranchedTemplate = () => {
  const { t } = useTranslation();
  const [selectedBranchId, setSelectedBranchId] = useState(DEFAULT_BRANCH_ID);

  const branches: Branch[] = useMemo(
    () =>
      branchesData.map((data) => ({
        ...data,
        name: t(`support-branches.data.${data.id}.name`),
        address: t(`support-branches.data.${data.id}.address`),
        hours: t(`support-branches.data.${data.id}.hours`),
      })),
    [t]
  );

  const selectedBranch = useMemo(
    () => branches.find((branch) => branch.id === selectedBranchId) ?? branches[0],
    [branches, selectedBranchId]
  );

  return (
    <div className="flex flex-col gap-4 lg:grid lg:grid-cols-5 lg:gap-6">
      <BranchMapPanel
        branches={branches}
        selectedBranchId={selectedBranch.id}
        onSelect={setSelectedBranchId}
      />

      <div className="lg:col-span-2 flex flex-col gap-4 lg:gap-6">
        <BranchSelector
          branches={branches}
          selectedBranchId={selectedBranchId}
          onSelect={setSelectedBranchId}
        />
        <BranchPhoto name={selectedBranch.name} image={selectedBranch.image} />
        <BranchDetailCard branch={selectedBranch} />
      </div>
    </div>
  );
};

export default BranchedTemplate;
