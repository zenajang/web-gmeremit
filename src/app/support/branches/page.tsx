"use client";

import { useState, useMemo } from "react";
import { HiLocationMarker, HiPhone, HiClock } from "react-icons/hi";
import KakaoMap from "@/components/KakaoMap";
import { useTranslation } from "@/hooks/useTranslation";
import { branchesData, type BranchData } from "@/data/branches";

interface Branch extends BranchData {
  name: string;
  address: string;
  hours: string;
}

export default function BranchesPage() {
  const { t } = useTranslation("support.branches");

  // Merge static data with translated data
  const branches: Branch[] = useMemo(() => {
    return branchesData.map((data) => ({
      ...data,
      name: t(`data.${data.id}.name`),
      address: t(`data.${data.id}.address`),
      hours: t(`data.${data.id}.hours`),
    }));
  }, [t]);

  const [selectedBranchId, setSelectedBranchId] = useState<number>(1);

  const selectedBranch = useMemo(() => {
    return branches.find((b) => b.id === selectedBranchId) || branches[0];
  }, [branches, selectedBranchId]);

  const handleBranchSelect = (id: number) => {
    setSelectedBranchId(id);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      {/* 왼쪽: 카카오 지도 */}
      <div className="lg:col-span-3 relative" style={{ minHeight: "500px" }}>
        <KakaoMap
          branches={branches.map((b) => ({
            id: b.id,
            name: b.name,
            lat: b.lat,
            lng: b.lng,
          }))}
          selectedBranchId={selectedBranch.id}
          onBranchSelect={handleBranchSelect}
        />
      </div>

      {/* 오른쪽: 지점 정보 */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        {/* 지점 이미지 */}
        {selectedBranch.image && (
          <div className="rounded-2xl overflow-hidden">
            <img
              src={selectedBranch.image}
              alt={selectedBranch.name}
              className="w-full h-48 lg:h-56 object-cover"
            />
          </div>
        )}

        {/* 지점 정보 */}
        <div className="p-6 lg:p-8">
          <h3 className="typo-content-title mb-6">
            {selectedBranch.name}
          </h3>

          <div className="space-y-5">
          {/* 주소 */}
          <div className="flex items-start gap-3">
            <HiLocationMarker className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">{t("address")}</p>
              <p className="text-gray-600 leading-relaxed">
                {selectedBranch.address}
              </p>
            </div>
          </div>

          {/* 전화번호 */}
          <div className="flex items-start gap-3">
            <HiPhone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">{t("phone")}</p>
                {selectedBranch.phone}
            </div>
          </div>

          {/* 영업시간 */}
          <div className="flex items-start gap-3">
            <HiClock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">{t("hours")}</p>
              <p className="text-gray-600">{selectedBranch.hours}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
