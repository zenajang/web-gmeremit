"use client";

import { useState, useMemo } from "react";
import { HiLocationMarker, HiPhone, HiClock } from "react-icons/hi";
import KakaoMap from "@/components/KakaoMap";
import { useTranslation } from "@/hooks/useTranslation";

interface BranchData {
  id: number;
  phone: string;
  lat: number;
  lng: number;
  image?: string;
}

interface Branch extends BranchData {
  name: string;
  address: string;
  hours: string;
}

// Static data (non-translatable)
const branchesData: BranchData[] = [
  { id: 1, phone: "02-763-5559", lat: 37.570926, lng: 127.009453, image: "/images/support/Dongdaemun.png" },
  { id: 2, phone: "031-492-1247", lat: 37.328713, lng: 126.789889, image: "/images/support/Ansan.jpeg" },
  { id: 3, phone: "02-2261-5540", lat: 37.565787, lng: 127.006359 },
  { id: 4, phone: "02-841-8884", lat: 37.492966, lng: 126.897140, image: "/images/support/Daerim.png" },
  { id: 5, phone: "-", lat: 37.533110, lng: 126.997571 },
  { id: 6, phone: "031-207-5559", lat: 37.267979, lng: 127.000513, image: "/images/support/Suwon.png" },
  { id: 7, phone: "031-354-0450", lat: 37.132087, lng: 126.908051, image: "/images/support/Hwaseong.jpg" },
  { id: 8, phone: "031-541-1856", lat: 37.829546, lng: 127.147558, image: "/images/support/Songuri.png" },
  { id: 9, phone: "032-361-0875", lat: 37.489863, lng: 126.722719, image: "/images/support/Bupyeong.jpg" },
  { id: 10, phone: "053-591-2603", lat: 35.856202, lng: 128.496326 },
  { id: 11, phone: "055-329-5559", lat: 35.234303, lng: 128.881914, image: "/images/support/Gimhae.png" },
  { id: 12, phone: "062-942-5598", lat: 35.137899, lng: 126.793613, image: "/images/support/Gwangju.png" },
];

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
