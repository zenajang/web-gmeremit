interface CrossCircleIconProps {
  className: string;
}

const CrossCircleIcon = ({ className }: CrossCircleIconProps) => {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" d="M4.93 4.93l14.14 14.14" />
    </svg>
  );
};

export default CrossCircleIcon;
