"use client";

import { FaFacebook } from "react-icons/fa";
import * as S from "@/components/support/social-channels/styles";

interface FacebookPanelProps {
  remitUrl?: string;
  financeUrl?: string;
  isOpen: boolean;
}

const FacebookLink = ({ label, url }: { label: string; url: string }) => (
  <a
    href={url}
    onClick={(event) => event.stopPropagation()}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between rounded-xl px-3 py-2.5 hover:bg-[#1877f2]/[0.06] transition-colors group"
  >
    <span className={`${S.SocialChannelsPanelLabel} group-hover:text-[#1877f2]`}>{label}</span>
    <FaFacebook className="w-6 h-6 shrink-0 text-[#1877f2]" />
  </a>
);

const FacebookPanel = ({ remitUrl, financeUrl, isOpen }: FacebookPanelProps) => {
  return (
    <div className={isOpen ? S.SocialChannelsPanelOpen : S.SocialChannelsPanelClosed}>
      <div className="overflow-hidden">
        <div className={S.SocialChannelsPanelInner}>
          {remitUrl && <FacebookLink label="Remit" url={remitUrl} />}
          {financeUrl && <FacebookLink label="Finance" url={financeUrl} />}
        </div>
      </div>
    </div>
  );
};

export default FacebookPanel;
