import * as S from "./styles";

const Backdrop = () => (
  <div className={S.InquiryBackdropRoot}>
    <div className={S.InquiryBackdropDots} style={S.InquiryBackdropDotsPattern} />
    <div className={S.InquiryBackdropBlobTopLeft} />
    <div className={S.InquiryBackdropBlobRight} />
    <div className={S.InquiryBackdropBlobBottom} />
  </div>
);

export default Backdrop;
