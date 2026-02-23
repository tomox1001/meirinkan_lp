import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const SITE_URL = "https://www.meirinkan.club";

export const metadata: Metadata = {
  title: "明倫館 | 百合ヶ丘・新百合ヶ丘の小学生剣道クラブ",
  description:
    "百合ヶ丘・新百合ヶ丘エリアの剣道クラブ「明倫館」。小学生から一般まで、日曜日に南百合丘小学校で稽古。礼儀と思いやりの心を育みます。体験随時受付中。",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: "明倫館 | 百合ヶ丘・新百合ヶ丘の小学生剣道クラブ",
    description:
      "百合ヶ丘・新百合ヶ丘エリアの剣道クラブ「明倫館」。小学生から一般まで、日曜日に南百合丘小学校で稽古。体験随時受付中。",
    url: SITE_URL,
    siteName: "明倫館 剣道クラブ",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "明倫館 | 百合ヶ丘・新百合ヶ丘の小学生剣道クラブ",
    description:
      "百合ヶ丘・新百合ヶ丘エリアの剣道クラブ「明倫館」。体験随時受付中。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${notoSerifJP.variable} ${notoSansJP.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsClub",
              name: "明倫館 剣道クラブ",
              description:
                "百合ヶ丘・新百合ヶ丘エリアの剣道クラブ。小学生から一般まで、礼儀と思いやりの心を育む剣道教室。",
              url: SITE_URL,
              email: "meirinkan2021@gmail.com",
              sport: "剣道",
              foundingDate: "2021",
              location: {
                "@type": "Place",
                name: "南百合丘小学校 体育館",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "王禅寺西1丁目26-1",
                  addressLocality: "川崎市麻生区",
                  addressRegion: "神奈川県",
                  postalCode: "215-0017",
                  addressCountry: "JP",
                },
              },
              offers: {
                "@type": "Offer",
                name: "体験稽古",
                price: "0",
                priceCurrency: "JPY",
                description: "体験稽古は随時受付中です。お気軽にお問合せください。",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
