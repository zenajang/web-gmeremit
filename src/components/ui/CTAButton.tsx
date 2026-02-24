import Link from "next/link";

interface CTAButtonProps {
  href: string;
  label: string;
  className?: string;
  iconClassName?: string;
}

export default function CTAButton({
  href,
  label,
  className = "",
  iconClassName = "",
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 font-semibold px-5 py-3 rounded-xl transition-colors duration-250 ease-out cursor-pointer ${className}`}
    >
      {label}
      <span
        className={`flex items-center justify-center w-6 h-6 rounded-full text-white transition-transform duration-300 ease-out group-hover:-rotate-45 ${iconClassName}`}
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
