import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import "./../assets/styles/globals.css";
import "./../assets/styles/premium.css";
import { avenir } from "@/fonts";

const siteUrl = "https://immunotrack.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ImmunoTrack — AI-Powered RTM for Allergy & Immunology",
    template: "%s",
  },
  description:
    "ImmunoTrack is an AI-powered Remote Therapeutic Monitoring (RTM) platform for allergy and asthma care — built for clinicians, designed for patients.",
  applicationName: "ImmunoTrack",
  keywords: [
    "remote therapeutic monitoring allergy",
    "RTM CPT 98975 98976 98977 98980 98981",
    "HIPAA compliant allergy app",
    "allergy and asthma monitoring",
    "clinician dashboard allergy",
    "asthma symptom tracking app",
  ],
  authors: [{ name: "ImmunoTrack" }],
  /* Favicon (icon.png / apple-icon.png) and the default social preview image
     (opengraph-image.png) are picked up automatically by Next.js's file-based
     metadata convention from src/app/ — no manual `icons`/`openGraph.images`
     entries needed here, and adding them would duplicate the generated tags. */
  openGraph: {
    type: "website",
    siteName: "ImmunoTrack",
    title: "ImmunoTrack — AI-Powered RTM for Allergy & Immunology",
    description:
      "AI-powered allergy and asthma monitoring — built for clinicians, designed for patients.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "ImmunoTrack — AI-Powered RTM for Allergy & Immunology",
    description:
      "AI-powered allergy and asthma monitoring — built for clinicians, designed for patients.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#02124f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
       <body className={avenir.className}>
        <Header />
        <main className="pt-24">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}