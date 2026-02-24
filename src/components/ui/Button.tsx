import Link from "next/link";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonBaseProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  as?: "button";
  href?: never;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface ButtonAsLink extends ButtonBaseProps {
  as: "link";
  href: string;
  type?: never;
  disabled?: never;
  onClick?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm rounded-lg",
  md: "px-4 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base rounded-xl",
  lg: "px-5 py-2.5 text-sm sm:px-8 sm:py-4 sm:text-lg rounded-xl sm:rounded-2xl",
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary hover:bg-primary-dark text-white shadow-[0_8px_24px_rgba(237,28,36,0.3)] hover:shadow-[0_12px_32px_rgba(237,28,36,0.4)]",
  secondary:
    "bg-white hover:bg-gray-50 border border-gray-200 text-dark",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  ghost:
    "text-primary hover:text-primary-dark bg-transparent",
};

export default function Button({
  size = "md",
  variant = "primary",
  fullWidth = false,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 ease-out cursor-pointer";
  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (rest.as === "link") {
    return (
      <Link href={rest.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { as, ...buttonProps } = rest;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
