"use client";

import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";
import { ADMIN_DASHBOARD_PATH } from "@/components/admin/constants";

interface AdminPageHeaderProps {
  title: string;
  description: string;
}

const AdminPageHeader = ({ title, description }: AdminPageHeaderProps) => {
  return (
    <div className="mb-8">
      <Link
        href={ADMIN_DASHBOARD_PATH}
        className="inline-flex items-center gap-1.5 text-[13px] text-gray-400 hover:text-gray-600 mb-5 transition-colors"
      >
        <HiArrowLeft className="w-4 h-4" />
        <span>돌아가기</span>
      </Link>
      <h1 className="text-[22px] font-bold text-gray-900">{title}</h1>
      <p className="text-[14px] text-gray-500 mt-1">{description}</p>
    </div>
  );
};

export default AdminPageHeader;
