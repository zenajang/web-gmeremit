"use client";

import { ReactNode } from "react";

interface ChannelToggleButtonProps {
  isActive: boolean;
  activeClassName: string;
  idleClassName: string;
  title: string;
  icon: ReactNode;
  onToggle: () => void;
}

const ChannelToggleButton = ({
  isActive,
  activeClassName,
  idleClassName,
  title,
  icon,
  onToggle,
}: ChannelToggleButtonProps) => {
  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
      aria-expanded={isActive}
      title={title}
      className={isActive ? activeClassName : idleClassName}
    >
      {icon}
    </button>
  );
};

export default ChannelToggleButton;
