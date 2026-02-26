"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { HiLocationMarker, HiPhone, HiClock, HiChevronDown } from "react-icons/hi";
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

  const branches: Branch[] = useMemo(() => {
    return branchesData.map((data) => ({
      ...data,
      name: t(`data.${data.id}.name`),
      address: t(`data.${data.id}.address`),
      hours: t(`data.${data.id}.hours`),
    }));
  }, [t]);

  const [selectedBranchId, setSelectedBranchId] = useState<number>(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedBranch = useMemo(() => {
    return branches.find((b) => b.id === selectedBranchId) || branches[0];
  }, [branches, selectedBranchId]);

  const handleBranchSelect = (id: number) => {
    setSelectedBranchId(id);
    setDropdownOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-4 lg:grid lg:grid-cols-5 lg:gap-6">

      {/* 모바일 전용: 가로 스크롤 지점 선택 */}
      <div className="lg:hidden overflow-x-auto -mx-4 px-4 pb-4">
        <div className="flex gap-2" style={{ width: "max-content" }}>
          {branches.map((branch) => (
            <button
              key={branch.id}
              type="button"
              onClick={() => handleBranchSelect(branch.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                selectedBranchId === branch.id
                  ? "bg-primary text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 active:bg-gray-200"
              }`}
            >
              {branch.name}
            </button>
          ))}
        </div>
      </div>

      {/* 지도 */}
      <div className="lg:col-span-3 relative h-[300px] lg:h-auto" style={{ minHeight: "unset" }}>
        <div className="absolute inset-0 lg:relative lg:inset-auto h-full lg:min-h-[500px]">
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
      </div>

      {/* 지점 정보 */}
      <div className="lg:col-span-2 flex flex-col gap-4 lg:gap-6">

        {/* 지점 선택 드롭다운 (데스크탑) */}
        <div ref={dropdownRef} className="hidden lg:block relative">
          <button
            type="button"
            onClick={() => setDropdownOpen((o) => !o)}
            className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:border-primary/50 transition-colors cursor-pointer shadow-sm"
          >
            <HiLocationMarker className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="flex-1 text-sm font-medium text-dark text-left">{selectedBranch?.name}</span>
            <HiChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {dropdownOpen && (
            <div className="absolute z-10 top-full mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-y-auto max-h-[260px]">
                {branches.map((branch) => (
                  <button
                    key={branch.id}
                    type="button"
                    onClick={() => handleBranchSelect(branch.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors cursor-pointer ${
                      selectedBranchId === branch.id
                        ? "bg-primary/[0.06] text-primary"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <HiLocationMarker className={`w-3.5 h-3.5 flex-shrink-0 ${selectedBranchId === branch.id ? "text-primary" : "text-gray-300"}`} />
                    <span className="text-sm font-medium">{branch.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 지점 이미지 */}
        {selectedBranch.image && (
          <div className="rounded-2xl overflow-hidden">
            <img
              src={selectedBranch.image}
              alt={selectedBranch.name}
              className="w-full h-40 lg:h-44 object-cover"
            />
          </div>
        )}

        {/* 지점 정보 카드 */}
        <div className="bg-gray-50 rounded-2xl p-5 lg:p-6">
          <h3 className="text-lg lg:text-xl font-bold text-dark mb-5">
            {selectedBranch.name}
          </h3>

          <div className="space-y-4">
            {/* 주소 */}
            <div className="flex items-start gap-3">
              <HiLocationMarker className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{t("address")}</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedBranch.address}
                </p>
              </div>
            </div>

            {/* 전화번호 */}
            <div className="flex items-start gap-3">
              <HiPhone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{t("phone")}</p>
                <a
                  href={`tel:${selectedBranch.phone}`}
                  className="text-sm font-semibold text-dark hover:text-primary transition-colors"
                >
                  {selectedBranch.phone}
                </a>
              </div>
            </div>

            {/* 영업시간 */}
            <div className="flex items-start gap-3">
              <HiClock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">{t("hours")}</p>
                <p className="text-sm text-gray-700">{selectedBranch.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
