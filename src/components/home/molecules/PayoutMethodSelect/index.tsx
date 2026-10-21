"use client";

import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useTranslation } from "@/hooks/useTranslation";
import type { PayoutMethod } from "@/data/countries";

interface PayoutMethodSelectProps {
  label: string;
  methods: PayoutMethod[];
  selectedKey: string;
  onSelect: (key: string) => void;
}

const PayoutMethodSelect = ({
  label,
  methods,
  selectedKey,
  onSelect,
}: PayoutMethodSelectProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const selectMethod = (key: string) => {
    onSelect(key);
    setIsOpen(false);
  };

  const methodLabel = (key: string) =>
    t(`common.exchange-rate-calculator.home.exchange.calculator.payout_methods.${key}`);

  return (
    <div ref={dropdownRef} className="space-y-2 mb-5 relative">
      <label className="text-[13px] font-medium text-neutral-500">{label}</label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 lg:gap-3 bg-white rounded-2xl px-3 py-2.5 lg:px-5 lg:py-4 border border-gray-200/80 hover:bg-slate-50 transition-colors cursor-pointer"
      >
        <span className="flex-1 text-left text-sm lg:text-base font-semibold text-dark truncate">
          {methodLabel(selectedKey)}
        </span>
        <svg
          className={`w-5 h-5 text-neutral-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute z-50 top-full left-0 right-0 w-full bg-white rounded-2xl shadow-xl border border-gray-200/70 overflow-hidden"
          style={{ marginTop: 0 }}
          onWheel={(event) => event.stopPropagation()}
        >
          <div className="py-2 max-h-56 overflow-auto">
            {methods.map((method) => (
              <button
                key={method.key}
                type="button"
                onClick={() => selectMethod(method.key)}
                className={`w-full flex items-center gap-3 px-5 py-3 transition-colors cursor-pointer ${
                  selectedKey === method.key ? "bg-red-50 text-primary" : "hover:bg-slate-50"
                }`}
              >
                <span className="font-medium flex-1 text-left">{methodLabel(method.key)}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PayoutMethodSelect;
