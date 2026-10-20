"use client";

import { RiCustomerService2Fill } from "react-icons/ri";
import { useTranslation } from "@/hooks/useTranslation";

const SocialChannelsHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 rounded-full mb-5">
        <RiCustomerService2Fill className="w-4 h-4 text-primary" />
        <span className="text-sm font-semibold text-primary">
          {t("support-social-channels.countries_count")} {t("support-social-channels.operating")}
        </span>
      </div>
      <h2 className="typo-heading mb-3">{t("support-social-channels.title")}</h2>
      <p className="text-gray-500 max-w-md mx-auto">
        {t("support-social-channels.description")}
      </p>
    </div>
  );
};

export default SocialChannelsHeader;
