"use client";

import { useState } from "react";
import { HiLocationMarker, HiPhone, HiClock } from "react-icons/hi";
import KakaoMap from "@/components/KakaoMap";

interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  lat: number;
  lng: number;
  image?: string;
}

const branches: Branch[] = [
  {
    id: 1,
    name: "동대문 지점",
    address: "서울특별시 종로구 종로 315 (동대문역 3번 출구)",
    phone: "02-763-5559",
    hours: "평일 및 주말 10:00 - 19:00",
    lat: 37.570926,
    lng: 127.009453,
    image: "/images/support/Dongdaemun.png",
  },
  {
    id: 2,
    name: "안산지점",
    address: "경기도 안산시 단원구 다문화길 6, 1층",
    phone: "031-492-1247",
    hours: "평일 및 주말 10:00 - 19:00",
    lat: 37.328713,
    lng: 126.789889,
    image: "/images/support/Ansan.jpeg",
  },
  {
    id: 3,
    name: "몽골지점",
    address: "서울특별시 중구 을지로44길 12, 몽골타운 3층",
    phone: "02-2261-5540",
    hours: "평일 및 주말 10:00 - 19:00",
    lat: 37.565787,
    lng: 127.006359,
  },
  {
    id: 4,
    name: "대림지점",
    address: "서울특별시 영등포구 도림로 134, 1층",
    phone: "02-841-8884",
    hours: "평일 및 주말 10:00 - 19:00",
    lat: 37.492966,
    lng: 126.897140,
    image: "/images/support/Daerim.png",
  },
  {
    id: 5,
    name: "이태원지점",
    address: "서울특별시 용산구 우사단로10길 36",
    phone: "-",
    hours: "평일 및 주말 10:00 - 19:00",
    lat: 37.533110,
    lng: 126.997571,
  },
  {
    id: 6,
    name: "수원지점",
    address: "경기도 수원시 팔달구 매산로 2-10",
    phone: "031-207-5559",
    hours: "평일 및 주말 10:00 - 19:00",
    lat: 37.267979,
    lng: 127.000513,
    image: "/images/support/Suwon.png",
  },
  {
    id: 7,
    name: "화성지점",
    address: "경기도 화성시 향남읍 3·1만세로 1109-3, 1층",
    phone: "031-354-0450",
    hours: "금 - 화 10:00 - 19:00",
    lat: 37.132087,
    lng: 126.908051,
    image: "/images/support/Hwaseong.jpg",
  },
  {
    id: 8,
    name: "송우리지점",
    address: "경기도 포천시 소흘읍 솔모루로 91 (농협은행 옆)",
    phone: "031-541-1856",
    hours: "토 - 수 10:00 - 19:00",
    lat: 37.829546,
    lng: 127.147558,
    image: "/images/support/Songuri.png",
  },
  {
    id: 9,
    name: "부평지점",
    address: "인천광역시 부평구 광장로 16, 부평역사쇼핑몰",
    phone: "032-361-0875",
    hours: "토 - 수 10:00 - 19:00",
    lat: 37.489863,
    lng: 126.722719,
    image: "/images/support/Bupyeong.jpg",
  },
  {
    id: 10,
    name: "대구지점",
    address: "대구광역시 달서구 성서로69길 64, 1층",
    phone: "053-591-2603",
    hours: "평일 10:00 - 18:00 주말 10:00 - 19:00",
    lat: 35.856202,
    lng: 128.496326,
  },
  {
    id: 11,
    name: "김해지점",
    address: "경상남도 김해시 가락로 84 (탑마트 맞은편)",
    phone: "055-329-5559",
    hours: "평일 및 주말 10:00 - 19:00",
    lat: 35.234303,
    lng: 128.881914,
    image: "/images/support/Gimhae.png",
  },
  {
    id: 12,
    name: "광주지점",
    address: "광주광역시 광산구 광산로 7-2",
    phone: "062-942-5598",
    hours: "토 - 수 10:00 - 19:00",
    lat: 35.137899,
    lng: 126.793613,
    image: "/images/support/Gwangju.png",
  },
];


export default function BranchesPage() {
  const [selectedBranch, setSelectedBranch] = useState<Branch>(branches[0]);

  const handleBranchSelect = (id: number) => {
    const branch = branches.find((b) => b.id === id);
    if (branch) setSelectedBranch(branch);
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
          <h3 className="text-2xl font-bold text-[#191c1f] mb-6">
            {selectedBranch.name}
          </h3>

          <div className="space-y-5">
          {/* 주소 */}
          <div className="flex items-start gap-3">
            <HiLocationMarker className="w-6 h-6 text-[#ed1c24] flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">주소</p>
              <p className="text-gray-600 leading-relaxed">
                {selectedBranch.address}
              </p>
            </div>
          </div>

          {/* 전화번호 */}
          <div className="flex items-start gap-3">
            <HiPhone className="w-6 h-6 text-[#ed1c24] flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">전화번호</p>
                {selectedBranch.phone}
            </div>
          </div>

          {/* 영업시간 */}
          <div className="flex items-start gap-3">
            <HiClock className="w-6 h-6 text-[#ed1c24] flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">영업시간</p>
              <p className="text-gray-600">{selectedBranch.hours}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
