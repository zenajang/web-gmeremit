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
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AppDownloadCTA from "@/components/home/AppDownloadCTA";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollSnap />
      <SectionNav />

      <main className="pt-16 lg:pt-[100px]">
        {/* Hero Section */}
        <HeroMain />

        {/* Main Services */}
        <MainServices />

        {/* Payments */}
        <PaymentsSection />

        {/* Overseas Remittance */}
        <RemittanceSection />

        {/* Online Loan */}
        <LoanSection />

        {/* GME Cards */}
        <CardsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* App Download CTA */}
        <AppDownloadCTA />
      </main>

      <Footer />
    </>
  );
}
