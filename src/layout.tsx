import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Providers } from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Growth Meta - Digital Marketing Agency",
    template: "%s | Growth Meta",
  },
  description: "Growth Meta is a digital marketing agency specializing in SEO, PPC, social media management, content marketing, email marketing, and analytics. Drive growth with data-driven strategies.",
  keywords: ["digital marketing", "SEO", "PPC", "social media marketing", "content marketing", "email marketing", "analytics"],
  authors: [{ name: "Growth Meta Team" }],
  creator: "Growth Meta",
  publisher: "Growth Meta",
  metadataBase: new URL("https://growthmeta.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Growth Meta - Digital Marketing Agency",
    description: "Drive growth with data-driven digital marketing strategies. Specializing in SEO, PPC, social media, and more.",
    url: "https://growthmeta.com",
    siteName: "Growth Meta",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Meta - Digital Marketing Agency",
    description: "Drive growth with data-driven digital marketing strategies.",
    creator: "@growthmeta",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter antialiased">
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}