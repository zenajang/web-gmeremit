import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroMain from "@/components/home/HeroMain";
import ScrollSnap from "@/components/home/ScrollSnap";
import SectionNav from "@/components/home/SectionNav";
import MainServices from "@/components/home/MainServices";
import PaymentsSection from "@/components/home/PaymentsSection";
import RemittanceSection from "@/components/home/RemittanceSection";
import LoanSection from "@/components/home/LoanSection";
import CardsSection from "@/components/home/CardsSection";
import MobileSection from "@/components/home/MobileSection";
import CustomerFeedbackSection from "@/components/home/CustomerFeedbackSection";
import AppDownloadCTA from "@/components/home/AppDownloadCTA";
import HeroSection from "@/components/home/HeroSection";

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
