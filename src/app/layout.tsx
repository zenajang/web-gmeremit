import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import KakaoFloatingButton from "@/components/KakaoFloatingButton";

export const metadata: Metadata = {
  title: "GME Remit - Fast & Secure Money Transfer",
  description: "Send money worldwide with GME Remit. Fast, secure, and affordable international money transfers to over 200 countries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </AuthProvider>
        <KakaoFloatingButton />
      </body>
    </html>
  );
}
