import type { Metadata } from "next";
import PatientsSection from "@/components/sections/PatientsSection";

export const metadata: Metadata = {
  title: "ImmunoTrack for Patients - Track Your Allergies and Asthma",
  description:
    "Log your allergy and asthma symptoms daily. Track medications. Share health data securely with your care team. Download the ImmunoTrack patient app.",
};

export default function PatientsPage() {
  return <PatientsSection />;
}
