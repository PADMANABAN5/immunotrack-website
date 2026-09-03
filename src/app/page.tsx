import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "@/assets/styles/home.css";

// Import Icons
import lungsIcon from "@/assets/icons/noun-lungs-8244560.svg";
import predictionIcon from "@/assets/icons/noun-prediction-8286021.svg";
import airQualityIcon from "@/assets/icons/noun-air-quality-7857604.svg";
import profileIcon from "@/assets/icons/noun-profile-8205839.svg";
import trackingIcon from "@/assets/icons/noun-tracking-8269731.svg";
import cloudIcon from "@/assets/icons/noun-cloud-sync-8146798.svg";

export const metadata: Metadata = {
  title: "ImmunoTrack — AI-Powered RTM for Allergy & Immunology",
  description:
    "Remote therapeutic monitoring for allergy and immunology practices. Nightly AI flare risk scores, RTM CPT billing support, and HIPAA-compliant infrastructure.",
};

export default function Page() {
  return (
    <main className="hm-page">
      {/* ── HERO SECTION ──────────────────────────────────────── */}
      <section className="hm-hero" aria-label="ImmunoTrack Hero">
        <div className="hm-hero-container">
          <div className="hm-hero-content">
            <span className="hm-hero-pill">HIPAA Compliant · RTM Ready · AWS Infrastructure</span>
            <h1 className="hm-hero-title">
              AI-powered allergy and asthma monitoring — built for clinicians, designed for patients.
            </h1>
            <p className="hm-hero-subtitle">
              ImmunoTrack gives your practice real-time symptom trends, nightly flare risk scores, and remote therapeutic monitoring — so you can act between visits, not just at them.
            </p>
            <div className="hm-hero-actions">
              <Link href="/contact" className="hm-btn hm-btn-cyan">
                Request Clinician Access
              </Link>
              <Link href="/download" className="hm-btn hm-btn-outline">
                Download the Patient App
              </Link>
            </div>
          </div>
          <div className="hm-hero-visual">
            <div className="hm-hero-visual-inner">
              <Image
                src="/images/home-screen.jpeg"
                alt="ImmunoTrack AI-Powered Allergy and Asthma Monitoring"
                width={580}
                height={324}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE FEATURE PILLARS ─────────────────────────────── */}
      <section className="hm-pillars" aria-label="Pillars">
        <div className="hm-section-header">
          <span className="hm-section-tag">Built for allergy and immunology practices</span>
          <h2 className="hm-section-title">Purpose-built for allergy &amp; immunology</h2>
          <p className="hm-section-subtitle">
            Three pillars: AI-driven clinical insight, a patient experience your panel will actually use, and clinical support whenever you need it.
          </p>
        </div>
        <div className="hm-pillars-grid">
          {/* Pillar 1 */}
          <div className="hm-pillar-card">
            <div className="hm-pillar-header">
              <div className="hm-pillar-icon-wrap">
                <Image src={lungsIcon} alt="RTM-Ready Icon" width={22} height={22} className="hm-pillar-icon" />
              </div>
              <div>
                <div className="hm-pillar-tag">Billing &amp; Compliance</div>
                <h3 className="hm-pillar-title">RTM-Ready</h3>
              </div>
            </div>
            <p className="hm-pillar-desc">
              Built for Remote Therapeutic Monitoring. ImmunoTrack supports CPT codes 98975–98981 and tracks the non-physiological data your billing requires: symptom scores, medication adherence, and therapy response.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="hm-pillar-card">
            <div className="hm-pillar-header">
              <div className="hm-pillar-icon-wrap">
                <Image src={predictionIcon} alt="Nightly AI Insights Icon" width={22} height={22} className="hm-pillar-icon" />
              </div>
              <div>
                <div className="hm-pillar-tag">Predictive Analytics</div>
                <h3 className="hm-pillar-title">Nightly AI Insights</h3>
              </div>
            </div>
            <p className="hm-pillar-desc">
              Every night, ImmunoTrack runs a flare risk model across your patient panel. Patients at elevated risk surface to the top of your dashboard so you can act early.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="hm-pillar-card">
            <div className="hm-pillar-header">
              <div className="hm-pillar-icon-wrap">
                <Image src={airQualityIcon} alt="Environmental Triggers Icon" width={22} height={22} className="hm-pillar-icon" />
              </div>
              <div>
                <div className="hm-pillar-tag">Data Integration</div>
                <h3 className="hm-pillar-title">Environmental Triggers</h3>
              </div>
            </div>
            <p className="hm-pillar-desc">
              Pollen, air quality, and weather data are automatically paired with each patient&apos;s symptom log every night, helping you identify what&apos;s driving flares.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS SECTION ─────────────────────────────── */}
      <section className="hm-steps" aria-label="How it works">
        <div className="hm-steps-container">
          <div className="hm-section-header">
            <span className="hm-section-tag">Workflow</span>
            <h2 className="hm-section-title">How it works</h2>
            <p className="hm-section-subtitle">
              Seamless integration with your existing workflow, designed for high patient adoption.
            </p>
          </div>
          <div className="hm-steps-grid">
            {/* Step 1 */}
            <div className="hm-step-card">
              <div className="hm-step-num">1</div>
              <h3 className="hm-step-title">Invite your patient</h3>
              <p className="hm-step-desc">
                Enter name and email. Patient receives app invite. Takes under 2 minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="hm-step-card">
              <div className="hm-step-num">2</div>
              <h3 className="hm-step-title">Patient logs daily</h3>
              <p className="hm-step-desc">
                Respiratory, nasal, and skin symptoms. Medication use. Triggers noticed.
              </p>
            </div>

            {/* Step 3 */}
            <div className="hm-step-card">
              <div className="hm-step-num">3</div>
              <h3 className="hm-step-title">You review insights</h3>
              <p className="hm-step-desc">
                Nightly AI summaries. Flare risk scores. RTM progress toward billing threshold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY IMMUNOTRACK ──────────────────────────────────── */}
      <section className="hm-testimonial" aria-label="Why ImmunoTrack">
        <div className="hm-testimonial-container">
          <div className="hm-testimonial-badge">
            <span className="hm-testimonial-tag">Why ImmunoTrack</span>
          </div>

          <blockquote className="hm-testimonial-quote">
            &ldquo;Allergy and immunology practices needed real visibility between visits — not one more dashboard to babysit. ImmunoTrack surfaces flare risk overnight, tracks RTM progress automatically, and shows symptom trends without adding a single task to your day.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── COMBINED COMPLIANCE TRUST BAR & FOOTER CTA SECTION ────────────────────────────────── */}
      <section className="hm-footer-cta" aria-label="Get Started CTA">
        <div className="hm-footer-cta-container">
          <div className="hm-compliance-container" style={{ width: "100%", marginBottom: "40px", paddingBottom: "32px", borderBottom: "1px solid rgba(255, 255, 255, 0.12)" }}>
            <div className="hm-compliance-header">
              <span className="hm-compliance-tag">Trusted Standards</span>
              <span className="hm-compliance-title">We Build To</span>
            </div>
            <div className="hm-compliance-grid">
              <div className="hm-compliance-item">
                <Image src={profileIcon} alt="" width={16} height={16} className="hm-compliance-icon" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="hm-compliance-item">
                <Image src={cloudIcon} alt="" width={16} height={15} className="hm-compliance-icon" />
                <span>AWS Infrastructure</span>
              </div>
              <div className="hm-compliance-item">
                <Image src={trackingIcon} alt="" width={16} height={16} className="hm-compliance-icon" />
                <span>AES-256 Encryption</span>
              </div>
              <div className="hm-compliance-item">
                <Image src={lungsIcon} alt="" width={16} height={16} className="hm-compliance-icon" />
                <span>RTM CPT 98975–98981</span>
              </div>
            </div>
          </div>

          <h2>Ready to bring RTM to your practice?</h2>
          <p>ImmunoTrack handles setup. You log in on day one and invite your first patient.</p>
          <Link href="/contact" className="hm-btn hm-btn-cyan">
            Request Access
          </Link>
        </div>
      </section>
    </main>
  );
}