import * as S from "./styles";
import {
  AboutHero,
  CompanyGlance,
  CompanyJourney,
  GlobalPartnerships,
  OnlineServices,
  RecognitionMedia,
  Technology,
} from "@/components/company/about-us/organisms";

const AboutUsTemplate = () => {
  return (
    <div className={S.AboutUsTemplatePage}>
      <AboutHero />
      <CompanyGlance />
      <CompanyJourney />
      <GlobalPartnerships />
      <OnlineServices />
      <Technology />
      <RecognitionMedia />
    </div>
  );
};

export default AboutUsTemplate;
