"use client";

interface AdminErrorBannerProps {
  message: string;
}

const AdminErrorBanner = ({ message }: AdminErrorBannerProps) => {
  return (
    <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-center gap-3">
      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
        <span className="text-red-600 text-xs font-bold">!</span>
      </div>
      <p className="text-[14px] text-red-600">{message}</p>
    </div>
  );
};

export default AdminErrorBanner;
