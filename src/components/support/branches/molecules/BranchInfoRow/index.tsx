"use client";

import { ReactNode } from "react";

interface BranchInfoRowProps {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}

const BranchInfoRow = ({ icon, label, children }: BranchInfoRowProps) => {
  return (
    <div className="flex items-start gap-3">
      {icon}
      <div>
        <p className="text-xs sm:text-lg font-semibold text-gray-400 uppercase tracking-wide mb-1">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
};

export default BranchInfoRow;
