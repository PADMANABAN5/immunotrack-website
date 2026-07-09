import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "@/assets/styles/terms.css";

import shieldIcon     from "@/assets/icons/noun-tracking-8269731.svg";
import profileIcon    from "@/assets/icons/noun-profile-8205839.svg";
import cloudIcon      from "@/assets/icons/noun-cloud-sync-8146798.svg";
import insightsIcon   from "@/assets/icons/noun-insights-8300657.svg";

export const metadata: Metadata = {
  title: "Terms of Service — ImmunoTrack",
  description:
    "Read the ImmunoTrack patient app Terms of Service. Effective May 1, 2026.",
};

const glanceItems = [
  {
    icon: shieldIcon,
    title: "Healthcare Standard",
    desc: "ImmunoTrack is an invite-only RTM platform. Patient data is encrypted and managed under HIPAA compliance.",
  },
  {
    icon: profileIcon,
    title: "Clinician Invitation",
    desc: "Access is restricted to patients explicitly invited by their licensed healthcare provider.",
  },
  {
    icon: cloudIcon,
    title: "No Data Sales",
    desc: "We do not sell your personal health data to third parties, nor do we host third-party advertisements.",
  },
  {
    icon: insightsIcon,
    title: "Not a Medical Device",
    desc: "The app is a remote therapeutic monitoring tool for tracking, not a diagnosis device.",
  },
];

const sections = [
  { id: "section-1",  label: "1. Who We Are" },
  { id: "section-2",  label: "2. Who Can Use ImmunoTrack" },
  { id: "section-3",  label: "3. What ImmunoTrack Does" },
  { id: "section-4",  label: "4. Your Account" },
  { id: "section-5",  label: "5. Your Health Data" },
  { id: "section-6",  label: "6. Remote Therapeutic Monitoring (RTM)" },
  { id: "section-7",  label: "7. Acceptable Use" },
  { id: "section-8",  label: "8. Medication Reminders" },
  { id: "section-9",  label: "9. Limitation of Liability" },
  { id: "section-10", label: "10. Intellectual Property" },
  { id: "section-11", label: "11. Changes to These Terms" },
  { id: "section-12", label: "12. Termination" },
  { id: "section-13", label: "13. Governing Law" },
  { id: "section-14", label: "14. Contact Us" },
];

export default function TermsPage() {
  return (
    <main className="ts-page" id="terms-page">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="ts-hero" aria-label="Terms of Service hero">
        <div className="ts-hero-container">
          <div className="ts-hero-copy">
            <p className="ts-hero-label">LEGAL DOCUMENT</p>
            <h1 className="ts-hero-title">Terms of Service</h1>
            <p className="ts-hero-subtitle">
              ImmunoTrack Patient App · Effective May 1, 2026
            </p>
            <p className="ts-hero-description">
              These Terms of Service govern your access to and use of the ImmunoTrack platform, including our mobile applications, web dashboard, and related services.
            </p>
            <div className="ts-hero-meta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Version 1.1 — June 2026 &nbsp;·&nbsp; ImmunoTrack Inc.
            </div>
          </div>
          <div className="ts-hero-image">
            <Image
              src="/images/terms-of-service.jpg"
              alt="Terms of Service compliance"
              width={600}
              height={500}
              priority
              className="ts-hero-img"
            />
          </div>
        </div>
      </section>

      {/* ── CONTENT LAYOUT ────────────────────────────────── */}
      <div className="ts-layout">
        {/* Main Content Column */}
        <div className="ts-content">
          {/* Important Notice Box (7.2) */}
          <div className="ts-lead-card" id="notice-box">
            <div className="ts-callout ts-callout--warning" role="alert">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" aria-hidden="true" style={{ marginTop: "4px" }}>
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <div>
                <p style={{ fontWeight: 800, fontSize: "15px", marginBottom: "4px" }}>IMPORTANT MEDICAL NOTICE</p>
                <p className="ts-lead-text">
                  ImmunoTrack is not a medical device and is not intended to diagnose, treat, cure, or prevent any medical condition. It is a health tracking and monitoring tool. Always follow the advice of your licensed healthcare provider.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <article id="section-1" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">1</div>
              <h2 className="ts-section-title">Who We Are</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                ImmunoTrack is operated by <strong>ImmunoTrack Inc.</strong>, a Delaware corporation headquartered in Atlanta, Georgia. These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the ImmunoTrack mobile application and any related services (collectively, the &ldquo;App&rdquo;).
              </p>
              <p className="ts-p">
                By creating an account or using the App, you agree to these Terms. If you do not agree, please do not use the App.
              </p>
            </div>
          </article>

          {/* Section 2 */}
          <article id="section-2" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">2</div>
              <h2 className="ts-section-title">Who Can Use ImmunoTrack</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                To use ImmunoTrack you must:
              </p>
              <ul className="ts-list">
                <li>Be 18 years of age or older, or have the consent of a parent or legal guardian if you are a minor</li>
                <li>Have been invited or referred by a licensed healthcare provider who participates in ImmunoTrack</li>
                <li>Provide accurate and truthful information when creating your account</li>
                <li>Reside in a jurisdiction where the App is lawfully available</li>
              </ul>
            </div>
          </article>

          {/* Section 3 */}
          <article id="section-3" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">3</div>
              <h2 className="ts-section-title">What ImmunoTrack Does</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                ImmunoTrack helps you track your allergy and asthma symptoms, record medication use, monitor environmental conditions, and share health information with your care team. The App may also provide AI-generated insights about patterns in your health data.
              </p>
              <div className="ts-callout ts-callout--info" role="note">
                <p>
                  ImmunoTrack is not a substitute for professional medical care. AI Insights are informational only and do not constitute medical advice, a diagnosis, or a treatment recommendation. Never delay seeking medical attention because of something you read in this App.
                </p>
              </div>
            </div>
          </article>

          {/* Section 4 */}
          <article id="section-4" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">4</div>
              <h2 className="ts-section-title">Your Account</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                You are responsible for keeping your login credentials secure and for all activity that occurs under your account. If you believe your account has been compromised, contact us immediately at <a href="mailto:support@immunotrack.ai" className="ts-link">support@immunotrack.ai</a>.
              </p>
              <p className="ts-p">
                You may only create one account. You may not transfer your account to another person.
              </p>
            </div>
          </article>

          {/* Section 5 */}
          <article id="section-5" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">5</div>
              <h2 className="ts-section-title">Your Health Data</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                You own your health data. By using the App, you grant ImmunoTrack a limited license to store, process, and share your data with your care team for the purpose of providing the services described in these Terms.
              </p>
              <p className="ts-p">
                We handle your health information in accordance with the Health Insurance Portability and Accountability Act (HIPAA) and our Privacy Policy. We do not sell your personal health information. We do not share your data with advertisers.
              </p>
              <p className="ts-p">
                Your clinician and their authorized staff can access your health data through the ImmunoTrack clinician dashboard as part of your care relationship. If you have questions about who can see your data, contact your clinician&apos;s office.
              </p>
            </div>
          </article>

          {/* Section 6 */}
          <article id="section-6" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">6</div>
              <h2 className="ts-section-title">Remote Therapeutic Monitoring (RTM)</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                If you are enrolled in the Remote Therapeutic Monitoring (RTM) program, your clinician uses your daily symptom logs to monitor your health between visits. Your insurance may be billed for this monitoring service using applicable RTM billing codes (CPT codes 98975, 98976, 98980, 98981). You will be asked to provide separate RTM consent before monitoring begins.
              </p>
              <p className="ts-p">
                To qualify for RTM billing, you are generally required to submit health data on a minimum number of days per monitoring period. The App will show your progress toward the required data submission threshold. Your clinician can answer questions about RTM coverage and costs.
              </p>
            </div>
          </article>

          {/* Section 7 */}
          <article id="section-7" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">7</div>
              <h2 className="ts-section-title">Acceptable Use</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                You agree not to:
              </p>
              <ul className="ts-list">
                <li>Submit false or misleading health information</li>
                <li>Attempt to access another patient&apos;s account or data</li>
                <li>Reverse engineer, copy, or modify the App</li>
                <li>Use the App in any way that violates applicable law</li>
                <li>Use the App in place of contacting emergency services in a medical emergency</li>
              </ul>
            </div>
          </article>

          {/* Section 8 */}
          <article id="section-8" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">8</div>
              <h2 className="ts-section-title">Medication Reminders</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                Medication reminders in the App are provided as a convenience only. ImmunoTrack is not responsible for missed doses, incorrect dosing, or any harm resulting from reliance on reminder notifications. Always follow the instructions given to you by your prescribing clinician or pharmacist.
              </p>
            </div>
          </article>

          {/* Section 9 */}
          <article id="section-9" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">9</div>
              <h2 className="ts-section-title">Limitation of Liability</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                To the fullest extent permitted by law, <strong>ImmunoTrack Inc.</strong> will not be liable for any indirect, incidental, or consequential damages arising from your use of the App, including any reliance on health insights or AI-generated content provided within the App.
              </p>
              <p className="ts-p">
                Our total liability to you for any claim arising from these Terms or your use of the App will not exceed the amount you have paid to use the App in the twelve months preceding the claim, or $100, whichever is greater.
              </p>
            </div>
          </article>

          {/* Section 10 */}
          <article id="section-10" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">10</div>
              <h2 className="ts-section-title">Intellectual Property</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                All content, design, software, and technology in the App is owned by <strong>ImmunoTrack Inc.</strong> or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any part of the App without our written permission.
              </p>
            </div>
          </article>

          {/* Section 11 */}
          <article id="section-11" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">11</div>
              <h2 className="ts-section-title">Changes to These Terms</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                We may update these Terms from time to time. When we do, we will notify you through the App and update the effective date at the top of this page. Continued use of the App after changes take effect constitutes your acceptance of the updated Terms.
              </p>
            </div>
          </article>

          {/* Section 12 */}
          <article id="section-12" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">12</div>
              <h2 className="ts-section-title">Termination</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                You may stop using the App at any time. You may request deletion of your account and health data by contacting <a href="mailto:support@immunotrack.ai" className="ts-link">support@immunotrack.ai</a>. We will process your request in accordance with applicable law and our data retention obligations.
              </p>
              <p className="ts-p">
                We reserve the right to suspend or terminate access to the App if you violate these Terms.
              </p>
            </div>
          </article>

          {/* Section 13 */}
          <article id="section-13" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">13</div>
              <h2 className="ts-section-title">Governing Law</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                These Terms are governed by the laws of the <strong>State of Georgia</strong>, United States, without regard to its conflict of law provisions. Any disputes will be resolved in the courts of <strong>Fulton County, Georgia</strong>.
              </p>
            </div>
          </article>

          {/* Section 14 */}
          <article id="section-14" className="ts-section-card">
            <div className="ts-section-header">
              <div className="ts-section-num" aria-hidden="true">14</div>
              <h2 className="ts-section-title">Contact Us</h2>
            </div>
            <div className="ts-section-body">
              <p className="ts-p">
                If you have questions about these Terms, please contact us:
              </p>
              <div className="ts-contact-block">
                <p><strong>ImmunoTrack Inc.</strong></p>
                <p>Email: <a href="mailto:support@immunotrack.ai" className="ts-link">support@immunotrack.ai</a></p>
                <p>Location: Atlanta, Georgia, United States of America</p>
              </div>
            </div>
          </article>
        </div>

        {/* Sticky Sidebar */}
        <aside className="ts-sidebar" aria-label="Terms of Service summary">
          {/* At a Glance */}
          <div className="ts-glance-card">
            <h2 className="ts-glance-title">Terms At a Glance</h2>
            <ul className="ts-glance-list">
              {glanceItems.map((item) => (
                <li key={item.title} className="ts-glance-item">
                  <div className="ts-glance-icon" aria-hidden="true">
                    <Image src={item.icon} alt="" width={20} height={20} className="ts-icon-cyan" />
                  </div>
                  <div>
                    <p className="ts-glance-item-title">{item.title}</p>
                    <p className="ts-glance-item-desc">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Section nav */}
          <nav className="ts-nav-card" aria-label="Jump to section">
            <h3 className="ts-nav-title">Jump to Section</h3>
            <ul className="ts-nav-list">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="ts-nav-link">{s.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* In-App Notice */}
          {/* <div className="ts-questions-card">
            <h3 className="ts-questions-title">In-App Consent</h3>
            <p className="ts-questions-desc">
              Patients registering inside the ImmunoTrack Patient App must scroll through and accept these terms during account activation:
            </p>
            <div style={{ background: "rgba(0,0,0,0.2)", padding: "12px", borderRadius: "6px", fontSize: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p style={{ fontWeight: "bold", color: "#fff", marginBottom: "4px" }}>I agree to these Terms</p>
              <p style={{ color: "rgba(255,255,255,0.7)", margin: 0, fontSize: "11px", lineHeight: "1.3" }}>
                By tapping above you confirm you have read and agree to the ImmunoTrack Terms of Service.
              </p>
            </div>
          </div> */}
        </aside>
      </div>
    </main>
  );
}