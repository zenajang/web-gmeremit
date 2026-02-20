"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PublicLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function PublicLayout({ children, className = "" }: PublicLayoutProps) {
  return (
    <>
      <Header />
      <main className={`pt-[82px] lg:pt-[120px] min-h-screen ${className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
