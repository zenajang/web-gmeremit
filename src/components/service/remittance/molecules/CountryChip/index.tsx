import * as S from "./styles";

interface CountryChipProps {
  country: string;
  opacity: number;
}

const CountryChip = ({ country, opacity }: CountryChipProps) => {
  return (
    <span className={S.CountryChipItem} style={{ opacity }}>
      {country}
    </span>
  );
};

export default CountryChip;
