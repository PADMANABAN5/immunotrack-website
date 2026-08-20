import type { Metadata } from "next";
import CliniciansSection from "@/components/sections/CliniciansSection";

export const metadata: Metadata = {
  title: "ImmunoTrack for Clinicians - RTM Billing and Patient Monitoring",
  description:
    "RTM billing support for allergy and immunology practices. CPT codes 98975-98981. Nightly AI insights. HIPAA-compliant. Request access today.",
};

export default function CliniciansPage() {
  return <CliniciansSection />;
}
