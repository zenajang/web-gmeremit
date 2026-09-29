import * as S from "./styles";

/**
 * 고객지원 레이아웃과 같은 배경 패턴.
 * 블러 원이 음수 오프셋을 써서 밖으로 넘치므로 overflow-hidden 으로 가둔다.
 */
const Backdrop = () => (
  <div className={S.InquiryBackdropRoot}>
    <div className={S.InquiryBackdropDots} style={S.InquiryBackdropDotsPattern} />
    <div className={S.InquiryBackdropBlobTopLeft} />
    <div className={S.InquiryBackdropBlobRight} />
    <div className={S.InquiryBackdropBlobBottom} />
  </div>
);

export default Backdrop;
