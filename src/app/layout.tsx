import type { Metadata } from "next";
import { cookies } from "next/headers";
import localFont from "next/font/local";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import ChannelTalk from "@/components/channel-talk/ChannelTalk";
import ScrollToTop from "@/components/ScrollToTop";
import { LANGUAGE_COOKIE_NAME, getLanguageByCode } from "@/lib/language";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const SITE_URL = "https://www.gmeremit.com";
const SITE_NAME = "GME Remit";
const DEFAULT_DESCRIPTION =
  "No.1 Money Transfer Company in South Korea. Save 90% on fees. Best exchange rate. Send money secure to your friends and family 100% online. Beyond Banking, GME Remittance";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Send Money from Korea | GME Remittance",
    template: "%s | GME Remit",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "money transfer",
    "international remittance",
    "overseas remittance",
    "해외송금",
    "외국인 송금",
    "GME",
    "prepaid card",
    "fintech Korea",
    "send money",
    "외국인 대출",
  ],
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Send Money from Korea | GME Remittance",
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: "/images/common/GME-LOGO-HD.png",
        width: 1200,
        height: 630,
        alt: "GME Remit Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Send Money from Korea | GME Remittance",
    description: DEFAULT_DESCRIPTION,
    images: ["/images/common/GME-LOGO-HD.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "-i0FVWCtHbe9wEL_OTr5Yy6h9pIQW7ZvrO4TuwArCNA",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const languageCode = cookieStore.get(LANGUAGE_COOKIE_NAME)?.value;
  const initialLanguage = getLanguageByCode(languageCode);

  return (
    <html lang={initialLanguage.code} className={pretendard.variable}>
      <body className={pretendard.className}>
        <AuthProvider>
          <LanguageProvider initialLanguageCode={initialLanguage.code}>
            {children}
          </LanguageProvider>
        </AuthProvider>
        <ScrollToTop />
        <ChannelTalk />
      </body>
    </html>
  );
}
