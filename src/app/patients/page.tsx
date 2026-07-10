import type { Metadata } from "next";
import OneScrollPage from "@/components/OneScrollPage";

export const metadata: Metadata = {
  title:
    "ImmunoTrack for Patients — Track Your Allergies & Asthma",
  description:
    "Log your allergy and asthma symptoms daily. Track medications. Share health data securely with your care team. Download the ImmunoTrack patient app.",
};

export default function Patients() {
  return <OneScrollPage />;
}
