"use client";

import { HiClock, HiLocationMarker, HiPhone } from "react-icons/hi";
import { useTranslation } from "@/hooks/useTranslation";
import { BranchInfoRow } from "@/components/support/branches/molecules";
import type { Branch } from "@/components/support/branches/types";

interface BranchDetailCardProps {
  branch: Branch;
}

const iconClassName = "w-5 h-5 text-primary flex-shrink-0 mt-0.5";
const valueClassName = "text-xs sm:text-lg text-gray-700 leading-relaxed";

const BranchDetailCard = ({ branch }: BranchDetailCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 rounded-2xl p-5 lg:p-6">
      <h3 className="text-lg lg:text-xl font-bold text-dark mb-5">{branch.name}</h3>

      <div className="space-y-4">
        <BranchInfoRow
          icon={<HiLocationMarker className={iconClassName} />}
          label={t("support-branches.address")}
        >
          <p className={valueClassName}>{branch.address}</p>
        </BranchInfoRow>

        <BranchInfoRow
          icon={<HiPhone className={iconClassName} />}
          label={t("support-branches.phone")}
        >
          <a
            href={`tel:${branch.phone}`}
            className="text-xs sm:text-lg text-dark hover:text-primary transition-colors"
          >
            {branch.phone}
          </a>
        </BranchInfoRow>

        <BranchInfoRow
          icon={<HiClock className={iconClassName} />}
          label={t("support-branches.hours")}
        >
          <p className="text-xs sm:text-lg text-gray-700">{branch.hours}</p>
        </BranchInfoRow>
      </div>
    </div>
  );
};

export default BranchDetailCard;
