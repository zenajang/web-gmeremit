"use client";

import dynamic from "next/dynamic";
import type { Branch } from "@/components/support/branches/types";

const BranchMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-100 rounded-2xl animate-pulse flex items-center justify-center">
      <span className="text-gray-400 text-sm">지도 로딩 중...</span>
    </div>
  ),
});

interface BranchMapPanelProps {
  branches: Branch[];
  selectedBranchId: number;
  onSelect: (id: number) => void;
}

const BranchMapPanel = ({ branches, selectedBranchId, onSelect }: BranchMapPanelProps) => {
  return (
    <div className="lg:col-span-3 h-[180px] sm:h-[220px] lg:h-auto rounded-2xl overflow-hidden">
      <div className="h-full lg:min-h-[500px]">
        <BranchMap
          branches={branches.map((branch) => ({
            id: branch.id,
            name: branch.name,
            lat: branch.lat,
            lng: branch.lng,
          }))}
          selectedBranchId={selectedBranchId}
          onBranchSelect={onSelect}
        />
      </div>
    </div>
  );
};

export default BranchMapPanel;
