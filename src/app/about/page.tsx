import type { Metadata } from "next";
import OneScrollPage from "@/components/OneScrollPage";

export const metadata: Metadata = {
  title:
    "About ImmunoTrack — AI-Driven Allergy & Immunology Monitoring",
  description:
    "ImmunoTrack Inc. builds remote therapeutic monitoring tools for allergy and immunology practices. HIPAA-compliant, AWS-hosted, powered by Anthropic Claude AI.",
};

export default function About() {
  return <OneScrollPage />;
}
