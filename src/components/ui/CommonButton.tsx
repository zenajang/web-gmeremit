"use client";

import Link from "next/link";

interface CommonButtonProps {
  type: "button" | "submit" | "reset";
  as: "button" | "link";
  children: React.ReactNode;
  className?: string;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const CommonButton = ({ type, as, href, children, className, disabled, onClick }: CommonButtonProps) => {
  if (as === "link" && href) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default CommonButton;