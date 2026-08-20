import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "About ImmunoTrack — AI-Driven Allergy & Immunology Monitoring",
  description:
    "ImmunoTrack Inc. builds remote therapeutic monitoring tools for allergy and immunology practices. HIPAA-compliant, AWS-hosted, AI-powered insights.",
};

export default function AboutPage() {
  return <AboutSection />;
}
