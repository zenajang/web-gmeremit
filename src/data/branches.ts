export interface BranchData {
  id: number;
  phone: string;
  lat: number;
  lng: number;
  image?: string;
}

export const branchesData: BranchData[] = [
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
