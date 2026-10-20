import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroMain from "@/components/home/organisms/HeroMain";
import ScrollSnap from "@/components/home/organisms/ScrollSnap";
import SectionNav from "@/components/home/organisms/SectionNav";

const HeroSection = dynamic(() => import("@/components/home/organisms/HeroSection"));
const MainServices = dynamic(() => import("@/components/home/organisms/MainServices"));
const RemittanceSection = dynamic(() => import("@/components/home/organisms/RemittanceSection"));
const PaymentsSection = dynamic(() => import("@/components/home/organisms/PaymentsSection"));
const CardsSection = dynamic(() => import("@/components/home/organisms/CardsSection"));
const MobileSection = dynamic(() => import("@/components/home/organisms/MobileSection"));
const LoanSection = dynamic(() => import("@/components/home/organisms/LoanSection"));
const CustomerFeedbackSection = dynamic(
  () => import("@/components/home/organisms/CustomerFeedbackSection")
);
const AppDownloadCTA = dynamic(() => import("@/components/home/organisms/AppDownloadCTA"));

const HomeTemplate = () => {
  return (
    <>
      <Header />
      <ScrollSnap />
      <SectionNav />

      <main className="pt-0">
        <HeroMain />
        <HeroSection />
        <MainServices />
        <RemittanceSection />
        <PaymentsSection />
        <CardsSection />
        <MobileSection />
        <LoanSection />
        <CustomerFeedbackSection />
        <AppDownloadCTA />
      </main>

      <Footer />
    </>
  );
};

export default HomeTemplate;
