interface SectionHeaderProps {
  /** 소문자 eyebrow 레이블 (e.g. "SOLUTIONS") */
  label?: string;
  /** 메인 타이틀. title2 있으면 이 줄만 colorClass 적용 */
  title: string;
  /** 두 번째 타이틀 줄 (loan/remittance 패턴) */
  title2?: string;
  /** 설명 텍스트 */
  description?: string;
  /** label 또는 title 색상 클래스 (e.g. "text-payments", "text-primary") */
  colorClass?: string;
  /** 좌/중앙 정렬, 기본값 center */
  align?: "center" | "left";
  /** 컨테이너 여백 클래스 */
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  title2,
  description,
  colorClass = "text-gray-500",
  align = "center",
  className = "mb-12 lg:mb-16",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "";
  const descClass = align === "center" ? "max-w-2xl mx-auto" : "";

  return (
    <div className={`${alignClass} ${className}`}>
      {label && (
        <span className={`inline-block text-sm font-semibold tracking-wide uppercase mb-3 ${colorClass}`}>
          {label}
        </span>
      )}

      {title2 ? (
        <>
          <h2 className={`typo-section-title mb-2 ${!label ? colorClass : ""}`}>{title}</h2>
          <h2 className="typo-section-title mb-5">{title2}</h2>
        </>
      ) : (
        <h2 className="typo-section-title mb-4">{title}</h2>
      )}

      {description && (
        <p className={`text-gray-500 text-sm sm:text-base ${descClass}`}>{description}</p>
      )}
    </div>
  );
}
