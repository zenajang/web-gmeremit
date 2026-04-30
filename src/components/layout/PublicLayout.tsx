"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PublicLayoutProps {
  children: React.ReactNode;
  className?: string;
  footerVariant?: "full" | "minimal";
}

export default function PublicLayout({ children, className = "", footerVariant = "minimal" }: PublicLayoutProps) {
  return (
    <>
      <Header />
      <main className={`pt-[var(--header-height-mobile)] lg:pt-[var(--header-height)] min-h-screen ${className}`}>
        {children}
      </main>
      <Footer variant={footerVariant} />
    </>
  );
}
