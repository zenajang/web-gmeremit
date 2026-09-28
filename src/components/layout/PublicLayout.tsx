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
      <main className={`pt-[var(--header-height-mobile)] lg:pt-[var(--header-height)] min-h-screen ${className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
