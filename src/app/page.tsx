import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CardsShowcase from "@/components/CardsShowcase";

import HeroMain from "@/components/home/HeroMain";
import ScrollSnap from "@/components/home/ScrollSnap";
import SectionNav from "@/components/home/SectionNav";
import MainServices from "@/components/home/MainServices";
import PaymentsSection from "@/components/home/PaymentsSection";
import RemittanceSection from "@/components/home/RemittanceSection";
import LoanSection from "@/components/home/LoanSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AppDownloadCTA from "@/components/home/AppDownloadCTA";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollSnap />
      <SectionNav />

      <main className="pt-16 lg:pt-[52px]">
        {/* Hero Section */}
        <HeroMain />

        {/* Exchange Calculator Section */}
        <HeroSection />

        {/* Main Services */}
        <MainServices />

        {/* Payments */}
        <PaymentsSection />

        {/* Overseas Remittance */}
        <RemittanceSection />

        {/* Online Loan */}
        <LoanSection />

        {/* GME Cards */}
        <section id="gme-cards" className="relative min-h-screen overflow-hidden">
          {/* Gray themed gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#fafafa] via-[#f8f9fa] to-[#f3f4f6]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#374151]/[0.03] blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#6b7280]/[0.04] blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#374151]/[0.02] blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
            <div className="w-full">
              <CardsShowcase />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* App Download CTA */}
        <AppDownloadCTA />
      </main>

      <Footer />
    </>
  );
}
