"use client";

import { ReactNode } from "react";
import * as S from "@/components/privacy/styles";

interface PolicyPanelProps {
  children: ReactNode;
}

const PolicyPanel = ({ children }: PolicyPanelProps) => {
  return (
    <section className={S.LegalContentSection} style={{ animationDelay: "0.1s" }}>
      <div className={S.LegalContentInner}>
        <div className={S.LegalContentPanel}>{children}</div>
      </div>
    </section>
  );
};

export default PolicyPanel;
