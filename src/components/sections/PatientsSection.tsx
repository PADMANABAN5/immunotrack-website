import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import "@/assets/styles/patients.css";
import "@/assets/styles/download.css";
import { DOWNLOAD_LINKS } from "@/config/download-links";
import {
  AppStoreBadgeContent,
  GooglePlayBadgeContent,
  StoreBadge,
} from "@/components/StoreBadges";

export default function PatientsSection() {
  return (
    <section id="patients" className="pt-page" aria-label="Patients">
      {/* ── HERO SECTION ──────────────────────────────────────── */}
      <section className="pt-hero" aria-label="Hero">
        <div className="pt-hero-container">
          <div className="pt-hero-content">
            <span className="pt-hero-tag">Built for you, every day</span>
            <h1 className="pt-hero-title">
              Track your allergies and asthma. Share what matters with your care team.
            </h1>
            <p className="pt-hero-subtitle">
              ImmunoTrack is the app your clinician uses to monitor your health between visits. Log your symptoms daily, track your medications, and let AI spot the patterns.
            </p>
            <div className="pt-hero-actions" style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
              <StoreBadge href={DOWNLOAD_LINKS.appStoreUrl} className="dl-badge-btn hero-btn" label="Download on the App Store">
                <AppStoreBadgeContent />
              </StoreBadge>
              <StoreBadge href={DOWNLOAD_LINKS.googlePlayUrl} className="dl-badge-btn hero-btn" label="Get it on Google Play">
                <GooglePlayBadgeContent />
              </StoreBadge>
            </div>
          </div>
          <div className="pt-hero-image">
            <Image
              src="/images/patient-hero-banner.jpeg"
              alt="Patient using ImmunoTrack app"
              width={600}
              height={400}
              priority
              className="pt-hero-img"
            />
          </div>
        </div>
      </section>

      {/* ── FEATURES SECTION ──────────────────────────────────── */}
      <section className="pt-features-section" aria-label="What you can do">
        <div className="pt-container">
          <div className="pt-features-content">
            <span className="pt-section-tag">What the App Does</span>
            <h2 className="pt-section-title">Everything you need, in one simple app</h2>
          </div>

          <div className="pt-features-grid">
            <Reveal className="pt-feature-card">
              <div className="pt-feature-header">
                <div className="pt-feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <h3 className="pt-feature-title">Daily symptom logging</h3>
              </div>
              <p className="pt-feature-desc">
                Rate respiratory, nasal, and skin symptoms in under 2 minutes. Log every day so your clinician can pursue RTM billing where covered by your plan.
              </p>
            </Reveal>

            <Reveal className="pt-feature-card" delay={1}>
              <div className="pt-feature-header">
                <div className="pt-feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.5 20.5 3.5 13.5a4.95 4.95 0 1 1 7-7l7 7a4.95 4.95 0 1 1-7 7Z"></path>
                    <line x1="8.5" y1="8.5" x2="15.5" y2="15.5"></line>
                  </svg>
                </div>
                <h3 className="pt-feature-title">Medication tracking</h3>
              </div>
              <p className="pt-feature-desc">
                Log your doses, set reminder times, and keep your care team up to date on how your treatment plan is working.
              </p>
            </Reveal>

            <Reveal className="pt-feature-card" delay={2}>
              <div className="pt-feature-header">
                <div className="pt-feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4"></path>
                    <path d="m6.8 6.8-2.8-2.8"></path>
                    <path d="M2 12h4"></path>
                    <path d="m6.8 17.2-2.8 2.8"></path>
                    <path d="M12 18v4"></path>
                    <path d="m17.2 17.2 2.8 2.8"></path>
                    <path d="M18 12h4"></path>
                    <path d="m17.2 6.8 2.8-2.8"></path>
                  </svg>
                </div>
                <h3 className="pt-feature-title">AI Insights</h3>
              </div>
              <p className="pt-feature-desc">
                Every morning, see what patterns emerged from your data. High pollen yesterday? Your logs show it. AI Insights are informational only — not medical advice.
              </p>
            </Reveal>

            <Reveal className="pt-feature-card" delay={3}>
              <div className="pt-feature-header">
                <div className="pt-feature-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="pt-feature-title">Secure connection to your care team</h3>
              </div>
              <p className="pt-feature-desc">
                Your clinician sees your data in real time. You don't need to send anything. It's always there when they need it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── RTM EXPLAINED SIMPLY ──────────────────────────────── */}
      <section className="pt-rtm-section" aria-label="RTM Explained Simply">
        <div className="pt-container">
          <div className="pt-rtm-box">
            <div className="pt-rtm-grid">
              <div className="pt-rtm-copy">
                <span className="pt-section-tag-2">RTM Explained Simply</span>
                <h2 className="pt-section-title-2">What is Remote Therapeutic Monitoring?</h2>
                <p className="pt-rtm-desc">
                 Remote Therapeutic Monitoring (RTM) is a healthcare service where your clinician monitors your health between visits using data you log on your phone. When you log regularly, your clinician can see how your symptoms are responding to treatment. Depending on your insurance plan, your clinician may be able to bill your insurance for that monitoring. Most patients qualify by logging 2–15 days (lower tier) or 16–30 days (higher tier) in a 30-day period — your clinician's billing team determines which applies to your monitoring plan.
               </p>
              </div>
              <Reveal className="pt-rtm-stat-card">
                <span className="pt-rtm-stat-val">2–30<span className="pt-rtm-stat-of">/30</span></span>
                <span className="pt-rtm-stat-label">typical logging goal per monitoring period</span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIVACY REASSURANCE ───────────────────────────────── */}
      <section className="pt-privacy-section" aria-label="Your privacy, protected">
        <div className="pt-container">
          <div className="pt-privacy-content">
            <span className="pt-section-tag">Your Privacy</span>
            <h2 className="pt-section-title">Your data is yours.</h2>
          </div>

          <div className="pt-privacy-grid">
            <div className="pt-privacy-item">
              <span className="pt-privacy-check" aria-hidden="true">&#10003;</span>
              <span>HIPAA-compliant — built to the same standards as your doctor's office</span>
            </div>
            <div className="pt-privacy-item">
              <span className="pt-privacy-check" aria-hidden="true">&#10003;</span>
              <span>Encrypted — your data is protected at rest and in transit</span>
            </div>
            <div className="pt-privacy-item">
              <span className="pt-privacy-check" aria-hidden="true">&#10003;</span>
              <span>Never sold — we do not sell your health information to anyone</span>
            </div>
            <div className="pt-privacy-item">
              <span className="pt-privacy-check" aria-hidden="true">&#10003;</span>
              <span>Only your care team can see your clinical data</span>
            </div>
          </div>

          <p className="pt-privacy-link-row">
            Read our Privacy Policy - <Link href="/privacy" className="pt-inline-link">Privacy Policy</Link>
          </p>
        </div>
      </section>

      {/* ── FOOTER CTA BAND ───────────────────────────────────── */}
      <section className="pt-cta-section" aria-label="Get started">
        <div className="pt-cta-container">
          <h2 className="pt-cta-title">Get the ImmunoTrack patient app</h2>
          <p className="pt-cta-desc">Available on iOS and Android. Your clinician will send you an invite — download the app and follow the link to get started.</p>
          <div className="pt-cta-actions" style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <StoreBadge href={DOWNLOAD_LINKS.appStoreUrl} className="dl-badge-btn hero-btn" label="Download on the App Store">
              <AppStoreBadgeContent />
            </StoreBadge>
            <StoreBadge href={DOWNLOAD_LINKS.googlePlayUrl} className="dl-badge-btn hero-btn" label="Get it on Google Play">
              <GooglePlayBadgeContent />
            </StoreBadge>
          </div>
        </div>
      </section>
    </section>
  );
}
