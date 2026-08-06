"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import DotLoader from "@/components/ui/DotLoader";

export interface BranchLocation {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

interface LeafletMapProps {
  branches: BranchLocation[];
  selectedBranchId: number;
  onBranchSelect: (id: number) => void;
}

function pinIcon(selected: boolean, name: string) {
  const size = selected ? 34 : 26;
  const label = selected
    ? `<div style="position:absolute;bottom:${size + 4}px;left:50%;transform:translateX(-50%);white-space:nowrap;padding:5px 11px;background:var(--color-primary,#ed1c24);color:#fff;border-radius:16px;font-size:13px;font-weight:600;box-shadow:0 2px 8px rgba(0,0,0,0.2)">${name}</div>`
    : "";
  return L.divIcon({
    className: "",
    html: `<div style="position:relative">${label}<div style="width:${size}px;height:${size}px;border-radius:50% 50% 50% 0;background:var(--color-primary,#ed1c24);transform:rotate(-45deg);border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.3)"></div></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
  });
}

export default function LeafletMap({
  branches,
  selectedBranchId,
  onBranchSelect,
}: LeafletMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<number, L.Marker>>(new Map());
  const [ready, setReady] = useState(false);
  const prevSelected = useRef(selectedBranchId);

  // 지도 초기화
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [36.3, 127.8],
      zoom: 7,
      scrollWheelZoom: true,
    });
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      subdomains: "abcd",
      maxZoom: 20,
    }).addTo(map);

    mapRef.current = map;
    setReady(true);

    if (branches.length > 0) {
      map.fitBounds(
        L.latLngBounds(branches.map((b) => [b.lat, b.lng] as [number, number])),
        { padding: [50, 50] }
      );
    }

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current.clear();
      setReady(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 마커 렌더
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    markersRef.current.forEach((m) => m.remove());
    markersRef.current.clear();

    branches.forEach((branch) => {
      const marker = L.marker([branch.lat, branch.lng], {
        icon: pinIcon(branch.id === selectedBranchId, branch.name),
        zIndexOffset: branch.id === selectedBranchId ? 1000 : 0,
      })
        .addTo(map)
        .on("click", () => onBranchSelect(branch.id));
      markersRef.current.set(branch.id, marker);
    });
  }, [branches, selectedBranchId, onBranchSelect]);

  // 선택 지점으로 이동
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    if (prevSelected.current === selectedBranchId) return;
    prevSelected.current = selectedBranchId;
    const branch = branches.find((b) => b.id === selectedBranchId);
    if (branch) map.setView([branch.lat, branch.lng], 15, { animate: true });
  }, [selectedBranchId, branches]);

  return (
    <div className="relative w-full h-full" data-lenis-prevent>
      <div ref={containerRef} className="w-full h-full rounded-2xl z-0" />
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl">
          <DotLoader />
        </div>
      )}
    </div>
  );
}
