import * as S from "./styles";
import DotLoader from "@/components/ui/DotLoader";

const PlansSpinner = () => {
  return (
    <div className={S.PlansSpinnerWrapper}>
      <DotLoader />
    </div>
  );
};

export default PlansSpinner;
