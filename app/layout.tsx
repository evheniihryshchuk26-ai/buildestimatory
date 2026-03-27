import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/seo/metadata";
import { organizationSchema, webSiteSchema } from "@/lib/seo/schemas";
import { getLocaleConfig } from "@/lib/i18n/config";
import { getCommonTranslations } from "@/lib/i18n/translations";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const t = getCommonTranslations();

export const metadata: Metadata = {
  title: {
    default: t.layout.defaultTitle,
    template: "%s | BuildEstimatory",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: getLocaleConfig().ogLocale,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: t.layout.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  other: {
    "theme-color": "#f97316",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={getLocaleConfig().lang}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-149E28B56S" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-149E28B56S');`,
          }}
        />
      </head>
      <body className={`${geist.variable} font-sans antialiased bg-gray-50 text-gray-900`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema()) }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
