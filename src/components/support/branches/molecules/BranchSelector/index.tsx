"use client";

import { useRef, useState } from "react";
import { HiChevronDown, HiLocationMarker } from "react-icons/hi";
import { useClickOutside } from "@/hooks/useClickOutside";
import type { Branch } from "@/components/support/branches/types";

interface BranchSelectorProps {
  branches: Branch[];
  selectedBranchId: number;
  onSelect: (id: number) => void;
}

const BranchSelector = ({ branches, selectedBranchId, onSelect }: BranchSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const selectBranch = (id: number) => {
    onSelect(id);
    setIsOpen(false);
  };

  const selectedBranch = branches.find((branch) => branch.id === selectedBranchId);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:border-primary/50 transition-colors cursor-pointer shadow-sm"
      >
        <HiLocationMarker className="w-4 h-4 text-primary flex-shrink-0" />
        <span className="flex-1 text-xs lg:text-lg font-medium text-dark text-left">
          {selectedBranch?.name}
        </span>
        <HiChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 top-full mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
          <div
            className="overflow-y-auto max-h-[260px]"
            data-lenis-prevent
            style={{ overscrollBehavior: "contain" }}
          >
            {branches.map((branch) => {
              const isSelected = selectedBranchId === branch.id;
              return (
                <button
                  key={branch.id}
                  type="button"
                  onClick={() => selectBranch(branch.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors cursor-pointer ${
                    isSelected ? "bg-primary/[0.06] text-primary" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <HiLocationMarker
                    className={`w-3.5 h-3.5 flex-shrink-0 ${isSelected ? "text-primary" : "text-gray-300"}`}
                  />
                  <span className="text-xs lg:text-lg font-medium">{branch.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default BranchSelector;
