import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { QuoteModalProvider } from "@/context/QuoteModalContext";
import QuoteModal from "@/components/ui/QuoteModal";
import { COMPANY_INFO } from "@/data/companyData";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abcbrass.com"),
  title: "ABC BRASS | Precision Brass Fittings, Components & OEM Solutions",
  description:
    "Established in 1990 in Jamnagar, India. Manufacturer and exporter of precision brass pipe fittings, hose barbs, compressor fittings, and custom OEM turned components.",
  keywords: [
    "ABC Brass",
    "Brass components Jamnagar",
    "Precision brass fittings",
    "Brass pipe fittings",
    "OEM brass manufacturing",
    "Hose barb adapters",
    "CW614N brass parts",
    "IATF 16949 brass manufacturer",
    "Jamnagar brass exporter",
  ],
  authors: [{ name: "ABC BRASS" }],
  openGraph: {
    title: "ABC BRASS | Precision Brass Manufacturing & Exporter",
    description:
      "35+ years of precision engineering excellence. 50,000 sq. ft. manufacturing facility in Jamnagar, Gujarat, India. Supplying global OEMs with high-tolerance brass components.",
    url: "https://www.abcbrass.com",
    siteName: "ABC BRASS",
    images: [
      {
        url: "/images/cnc_machining_brass.jpg",
        width: 1200,
        height: 630,
        alt: "ABC Brass Precision CNC Machining",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ABC BRASS",
    url: "https://www.abcbrass.com",
    logo: "https://www.abcbrass.com/images/cnc_machining_brass.jpg",
    foundingDate: "1990",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.address.street,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.postalCode,
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY_INFO.phone,
      contactType: "sales",
      email: "sales@abcbrass.com",
      areaServed: "Worldwide",
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-industrial-dark text-neutral-100 min-h-screen flex flex-col antialiased">
        <QuoteModalProvider>
          <Navbar />
          <main className="flex-1 w-full pt-[72px]">{children}</main>
          <Footer />
          <QuoteModal />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
