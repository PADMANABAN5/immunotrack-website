import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "@/assets/styles/patients.css";

export const metadata: Metadata = {
  title:
    "ImmunoTrack for Patients — Track Your Allergies & Asthma",
  description:
    "Log your allergy and asthma symptoms daily. Track medications. Share health data securely with your care team. Download the ImmunoTrack patient app.",
};

export default function Patients() {
  return (
    <main className="pt-page">
      {/* ── HERO SECTION ──────────────────────────────────────── */}
      <section className="pt-hero" aria-label="Hero">
        <div className="pt-hero-container">
          <div className="pt-hero-content">
            <span className="pt-hero-tag">Built for you, every day</span>
            <h1 className="pt-hero-title">
              Take control of your allergy and asthma—anytime, anywhere.
            </h1>
            <p className="pt-hero-subtitle">
              Track symptoms, receive personalized insights, get medication reminders, and stay connected with your care team—all from your phone.
            </p>
            <div className="pt-hero-actions">
              <Link href="/contact" className="pt-btn pt-btn-cyan">
                Request Patient Access
              </Link>
              <button className="pt-btn pt-btn-outline">
                Download the App
              </button>
            </div>
          </div>
          <div className="pt-hero-image">
            <Image
              src="/images/patient-hero-banner.jpeg"
              alt="Patient using ImmunoTrack app"
              width={600}
              height={500}
              priority
              className="pt-hero-img"
            />
          </div>
        </div>
      </section>
    </main>
  );
}