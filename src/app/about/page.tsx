import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "@/assets/styles/about.css";

export const metadata: Metadata = {
  title:
    "About ImmunoTrack — AI-Driven Allergy & Immunology Monitoring",
  description:
    "ImmunoTrack Inc. builds remote therapeutic monitoring tools for allergy and immunology practices. HIPAA-compliant, AWS-hosted, powered by Anthropic Claude AI.",
};

export default function About() {
  return (
    <main className="ab-page">
      {/* ── HERO SECTION ──────────────────────────────────────── */}
      <section className="ab-hero" aria-label="Hero">
        <div className="ab-hero-container">
          <div className="ab-hero-content">
            <span className="ab-hero-tag">Our Mission</span>
            <h1 className="ab-hero-title">
              Building the future of allergy and asthma care with AI and compassion.
            </h1>
            <p className="ab-hero-subtitle">
              ImmunoTrack was created by clinicians, data scientists, and technologists who believe better outcomes start with better insights. Together, we're building intelligent tools that empower providers and improve lives.
            </p>
            <div className="ab-hero-actions">
              <Link href="/contact" className="ab-btn ab-btn-cyan">
                Request Access
              </Link>
            </div>
          </div>
          <div className="ab-hero-image">
            <Image
              src="/images/about2.jpg"
              alt="ImmunoTrack team collaboration"
              width={600}
              height={500}
              priority
              className="ab-hero-img"
            />
          </div>
        </div>
      </section>

      {/* ── MISSION PILLARS ────────────────────────────────────── */}
      <section className="ab-pillars" aria-label="Mission Pillars">
        <div className="ab-pillars-grid">
          <div className="ab-pillar-card">
            <div className="ab-pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="ab-pillar-title">Clinician Led</h3>
            <p className="ab-pillar-desc">Built by healthcare professionals who care.</p>
          </div>

          <div className="ab-pillar-card">
            <div className="ab-pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="ab-pillar-title">AI-Powered Insights</h3>
            <p className="ab-pillar-desc">Turning complex data into actionable clarity.</p>
          </div>

          <div className="ab-pillar-card">
            <div className="ab-pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h3 className="ab-pillar-title">Patient Focused</h3>
            <p className="ab-pillar-desc">Empowering patients to take control of their health.</p>
          </div>

          <div className="ab-pillar-card">
            <div className="ab-pillar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </div>
            <h3 className="ab-pillar-title">Better Outcomes</h3>
            <p className="ab-pillar-desc">Data-driven tools for more informed decisions.</p>
          </div>
        </div>
      </section>
    </main>
  );
}