import type { Metadata } from "next";
import SupportSection from "@/components/sections/SupportSection";

export const metadata: Metadata = {
  title: "Help & Support — ImmunoTrack",
  description:
    "Get help with the ImmunoTrack app. FAQs, contact support, and legal documents. Our team responds within one business day.",
};

export default function SupportPage() {
  return <SupportSection />;
}
