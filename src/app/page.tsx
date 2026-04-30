import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroMain from "@/components/home/HeroMain";
import ScrollSnap from "@/components/home/ScrollSnap";
import SectionNav from "@/components/home/SectionNav";

const HeroSection = dynamic(() => import("@/components/home/HeroSection"));
const MainServices = dynamic(() => import("@/components/home/MainServices"));
const RemittanceSection = dynamic(() => import("@/components/home/RemittanceSection"));
const PaymentsSection = dynamic(() => import("@/components/home/PaymentsSection"));
const CardsSection = dynamic(() => import("@/components/home/CardsSection"));
const MobileSection = dynamic(() => import("@/components/home/MobileSection"));
const LoanSection = dynamic(() => import("@/components/home/LoanSection"));
const CustomerFeedbackSection = dynamic(() => import("@/components/home/CustomerFeedbackSection"));
const AppDownloadCTA = dynamic(() => import("@/components/home/AppDownloadCTA"));

export default function Home() {
  return (
    <>
      <Header />
      <ScrollSnap />
      <SectionNav />

      <main className="pt-0">
        {/* Hero Section */}
        <HeroMain />

        {/* Exchange Calculator */}
        <HeroSection />

        {/* Main Services */}
        <MainServices />

        {/* Overseas Remittance */}
        <RemittanceSection />

        {/* Payments */}
        <PaymentsSection />

        {/* GME Cards */}
        <CardsSection />

        {/* GME Mobile */}
        <MobileSection />

        {/* Online Loan */}
        <LoanSection />

        {/* Customer Feedback */}
        <CustomerFeedbackSection />

        {/* App Download CTA */}
        <AppDownloadCTA />
      </main>

      <Footer />
    </>
  );
}
