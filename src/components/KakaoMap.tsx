"use client";

import { useEffect, useRef, useState } from "react";
import DotLoader from "@/components/ui/DotLoader";

interface KakaoLatLng {
  getLat(): number;
  getLng(): number;
}

interface KakaoLatLngBounds {
  extend(latlng: KakaoLatLng): void;
}

interface KakaoMapInstance {
  setBounds(bounds: KakaoLatLngBounds, padding: number): void;
  setCenter(position: KakaoLatLng): void;
  setLevel(level: number): void;
}

interface KakaoMarker {
  setMap(map: KakaoMapInstance | null): void;
}

interface KakaoOverlay {
  setMap(map: KakaoMapInstance | null): void;
}

interface KakaoMaps {
  load(callback: () => void): void;
  LatLng: new (lat: number, lng: number) => KakaoLatLng;
  LatLngBounds: new () => KakaoLatLngBounds;
  Map: new (container: HTMLElement, options: { center: KakaoLatLng; level: number }) => KakaoMapInstance;
  Marker: new (options: { position: KakaoLatLng; map: KakaoMapInstance }) => KakaoMarker;
  CustomOverlay: new (options: { position: KakaoLatLng; content: string; yAnchor: number; map: KakaoMapInstance }) => KakaoOverlay;
  event: {
    addListener(target: KakaoMarker, type: string, callback: () => void): void;
  };
}

declare global {
  interface Window {
    kakao: { maps: KakaoMaps };
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
  const [map, setMap] = useState<KakaoMapInstance | null>(null);
  const markersRef = useRef<{ marker: KakaoMarker; overlay: KakaoOverlay | null }[]>([]);
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
      let overlay: KakaoOverlay | null = null;
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
      map.setLevel(6);
    }
  }, [map, selectedBranchId, branches]);

  return (
    <div className="relative w-full h-full min-h-[500px]" data-lenis-prevent>
      <div ref={mapRef} className="w-full h-full min-h-[500px] rounded-2xl" />
      {!map && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl">
          <DotLoader />
        </div>
      )}
    </div>
  );
}
