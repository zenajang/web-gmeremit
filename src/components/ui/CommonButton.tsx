"use client";

import Link from "next/link";

export interface CommonButtonProps {
  type: "button" | "submit" | "reset";
  as: "button" | "link";
  children: React.ReactNode;
  className?: string;
  href?: string;
  disabled?: boolean;
  target?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

const CommonButton = ({ type, as, href, children, className, disabled, target, onClick }: CommonButtonProps) => {
  if (as === "link" && href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={className}
        target={target ?? (isExternal ? "_blank" : undefined)}
        {...(isExternal && { rel: "noopener noreferrer" })}
      >
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