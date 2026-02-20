"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export interface BranchLocation {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

interface KakaoMapProps {
  branches: BranchLocation[];
  selectedBranchId: number;
  onBranchSelect: (id: number) => void;
}

export default function KakaoMap({
  branches,
  selectedBranchId,
  onBranchSelect,
}: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const markersRef = useRef<any[]>([]);
  const hasUserSelected = useRef(false);

  // SDK 로드
  useEffect(() => {
    if (window.kakao?.maps) {
      initMap();
      return;
    }

    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;
    script.onload = () => initMap();
    document.head.appendChild(script);
  }, []);

  const initMap = () => {
    window.kakao.maps.load(() => {
      if (!mapRef.current) return;

      const center = new window.kakao.maps.LatLng(37.5, 127);
      const mapInstance = new window.kakao.maps.Map(mapRef.current, {
        center,
        level: 13,
      });

      // 모든 마커가 보이도록 bounds 설정
      const bounds = new window.kakao.maps.LatLngBounds();
      branches.forEach((branch) => {
        bounds.extend(new window.kakao.maps.LatLng(branch.lat, branch.lng));
      });
      mapInstance.setBounds(bounds, 50);

      setMap(mapInstance);
    });
  };

  // 마커 생성
  useEffect(() => {
    if (!map) return;

    // 기존 마커 제거
    markersRef.current.forEach((m) => m.marker.setMap(null));
    markersRef.current = [];

    branches.forEach((branch) => {
      const position = new window.kakao.maps.LatLng(branch.lat, branch.lng);

      const marker = new window.kakao.maps.Marker({ position, map });

      window.kakao.maps.event.addListener(marker, "click", () => {
        hasUserSelected.current = true;
        onBranchSelect(branch.id);
      });

      // 선택된 지점 라벨
      let overlay: any = null;
      if (branch.id === selectedBranchId) {
        overlay = new window.kakao.maps.CustomOverlay({
          position,
          content: `<div style="padding:6px 12px;background: var(--color-primary);color:#fff;border-radius:16px;font-size:13px;font-weight:600;box-shadow:0 2px 8px rgba(0,0,0,0.2)">${branch.name}</div>`,
          yAnchor: 2.5,
          map,
        });
      }

      markersRef.current.push({ marker, overlay });
    });
  }, [map, branches, selectedBranchId, onBranchSelect]);

  // 선택 지점으로 이동 및 확대 (사용자가 클릭했을 때만)
  useEffect(() => {
    if (!map || !hasUserSelected.current) return;
    const branch = branches.find((b) => b.id === selectedBranchId);
    if (branch) {
      const position = new window.kakao.maps.LatLng(branch.lat, branch.lng);
      map.setCenter(position);
      map.setLevel(6); // 확대 레벨 (숫자가 작을수록 확대)
    }
  }, [map, selectedBranchId, branches]);

  return (
    <div className="relative w-full h-full min-h-[500px]" data-lenis-prevent>
      <div ref={mapRef} className="w-full h-full min-h-[500px] rounded-2xl" />
      {!map && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl">
          <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
