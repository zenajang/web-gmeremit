"use client";

import { ReactNode } from "react";

interface LegalSectionProps {
  heading?: string;
  children: ReactNode;
}

const LegalSection = ({ heading, children }: LegalSectionProps) => {
  return (
    <>
      {heading && <h2 className="text-2xl font-bold text-dark mt-12 mb-5">{heading}</h2>}
      <div className="space-y-6 text-gray-700 leading-relaxed">{children}</div>
    </>
  );
};

export default LegalSection;
