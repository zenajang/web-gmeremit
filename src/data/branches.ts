export interface BranchData {
  id: number;
  phone: string;
  lat: number;
  lng: number;
  image?: string;
}

export const branchesData: BranchData[] = [
  { id: 1, phone: "02-763-5559", lat: 37.570926, lng: 127.009453, image: "/images/support/branches/Dongdaemun.jpg" },
  { id: 2, phone: "031-492-1247", lat: 37.328713, lng: 126.789889, image: "/images/support/branches/Ansan.jpg" },
  { id: 3, phone: "02-841-8884", lat: 37.492966, lng: 126.897140, image: "/images/support/branches/Daerim.jpg" },
  { id: 4, phone: "031-207-5559", lat: 37.267979, lng: 127.000513, image: "/images/support/branches/Suwon.jpg" },
  { id: 5, phone: "031-354-0450", lat: 37.132087, lng: 126.908051, image: "/images/support/branches/Hwaseong.jpg" },
  { id: 6, phone: "031-541-1856", lat: 37.829546, lng: 127.147558, image: "/images/support/branches/Songuri.jpg" },
  { id: 7, phone: "032-361-0875", lat: 37.489863, lng: 126.722719, image: "/images/support/branches/Bupyeong.jpg" },
  { id: 8, phone: "055-329-5559", lat: 35.234303, lng: 128.881914, image: "/images/support/branches/Gimhae.jpg" },
  { id: 9, phone: "010-2959-6864", lat: 36.99351, lng: 127.08729, image: "/images/support/branches/Pyeongtaek.jpg" },
];
