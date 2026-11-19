import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Dancing_Script,
  Great_Vibes,
  Playfair_Display,
  Quicksand,
} from "next/font/google";
import "./globals.css";
import { weddingConfig } from "@/config/wedding";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-dancing",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin", "vietnamese"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

const coupleTitle = `${weddingConfig.couple.brideDisplay} & ${weddingConfig.couple.groomDisplay}`;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `Thiệp Cưới ${coupleTitle} | ${weddingConfig.hero.dateDot}`,
  description: `Trân trọng kính mời Quý vị tới mừng Lễ Vu Quy của ${coupleTitle} vào ngày ${weddingConfig.hero.dateDot} tại ${weddingConfig.ceremony.venueName}.`,
  openGraph: {
    title: `Thiệp Cưới ${coupleTitle} | Save The Date ${weddingConfig.hero.dateDot}`,
    description: `Trân trọng kính mời tới dự bữa tiệc thân mật & mừng Lễ Vu Quy • ${weddingConfig.ceremony.address}`,
    type: "website",
    locale: "vi_VN",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: `Thiệp Cưới ${coupleTitle}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Thiệp Cưới ${coupleTitle} | ${weddingConfig.hero.dateDot}`,
    images: ["/images/og-cover.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF8F3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${cormorant.variable} ${dancing.variable} ${greatVibes.variable} ${quicksand.variable}`}
    >
      <body className="ivory-paper-bg min-h-screen antialiased selection:bg-[#E6DCC8]/70 selection:text-[#3D2E1F]">
        {children}
      </body>
    </html>
  );
}
