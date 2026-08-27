import type { Metadata } from "next";
import Link from "next/link";
import "@/assets/styles/privacy.css";

import shieldIcon     from "@/assets/icons/noun-tracking-8269731.svg";
import profileIcon    from "@/assets/icons/noun-profile-8205839.svg";
import insightsIcon   from "@/assets/icons/noun-insights-8300657.svg";
import cloudIcon      from "@/assets/icons/noun-cloud-sync-8146798.svg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy — ImmunoTrack",
  description:
    "ImmunoTrack's Privacy Policy — how we collect, use, protect, and disclose your information in compliance with HIPAA and applicable privacy law.",
};

/* ── At-a-Glance highlights ────────────────────────────── */
const glanceItems = [
  {
    icon: shieldIcon,
    iconHeight: 20,
    title: "We Protect Your Data",
    desc: "Your health information is encrypted at rest (AES-256) and in transit (TLS 1.2+).",
  },
  {
    icon: profileIcon,
    iconHeight: 20,
    title: "You're in Control",
    desc: "Access, amend, or request deletion of your information at any time.",
  },
  {
    icon: cloudIcon,
    iconHeight: 19,
    title: "We Never Sell Data",
    desc: "We do not sell, rent, or trade your personal information — ever.",
  },
  {
    icon: insightsIcon,
    iconHeight: 22,
    title: "We're Transparent",
    desc: "Clear about what we collect, why we collect it, and how we use it.",
  },
];

/* ── Section nav anchors ───────────────────────────────── */
const sections = [
  { id: "section-1",  label: "Information We Collect" },
  { id: "section-2",  label: "How We Use Your Information" },
  { id: "section-3",  label: "PHI & HIPAA" },
  { id: "section-4",  label: "AI & Third-Party Services" },
  { id: "section-5",  label: "How We Share Your Information" },
  { id: "section-6",  label: "Data Security" },
  { id: "section-7",  label: "Data Retention" },
  { id: "section-8",  label: "Children's Privacy" },
  { id: "section-9",  label: "State Privacy Rights" },
  { id: "section-10", label: "Cookies & Tracking" },
  { id: "section-11", label: "Policy Changes" },
  { id: "section-12", label: "Contact Us" },
];

export default function PrivacyPage() {
  return (
    <main className="pp-page" id="privacy-page">

      {/* ════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════ */}
      <section className="pp-hero" aria-label="Privacy Policy hero">
        <div className="pp-hero-container">
          <div className="pp-hero-copy">
            <p className="pp-hero-label">PRIVACY POLICY</p>
            <h1 className="pp-hero-title">Your privacy is our priority.</h1>
            <p className="pp-hero-subtitle">
              ImmunoTrack is committed to protecting your personal information
              and ensuring transparency in how we collect, use, and safeguard
              your data.
            </p>
            <div className="pp-hero-meta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Effective Date: May 1, 2026 &nbsp;·&nbsp; Version 1.2 &nbsp;·&nbsp; Last Updated: July 2026
            </div>
          </div>
          <div className="pp-hero-image">
            <Image
              src="/images/privacy-policy.jpeg"
              alt="Privacy and data security"
              width={600}
              height={335}
              priority
              className="pp-hero-img"
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CONTENT LAYOUT
          ════════════════════════════════════════════ */}
      <div className="pp-layout">

        {/* ─── Main policy content ─── */}
        <div className="pp-content">

          {/* Intro */}
          <div className="pp-lead-card" id="intro">
            <p className="pp-lead-text">
              This Privacy Policy describes how <strong>ImmunoTrack Inc. </strong> collect, use, disclose, and safeguard your information
              when you use the ImmunoTrack platform, including its mobile applications
              and web dashboard (collectively, the &ldquo;Platform&rdquo;). By using
              the Platform, you acknowledge that you have read and understood this
              Privacy Policy.
            </p>
          </div>

          {/* ── §1 Information We Collect ── */}
          <article id="section-1" className="pp-section-card">
            <div className="pp-section-header">
              <div className="pp-section-num" aria-hidden="true">1</div>
              <h2 className="pp-section-title">Information We Collect</h2>
            </div>
            <div className="pp-section-body">

              <h3 className="pp-subsection">1.1 Information You Provide Directly</h3>
              <ul className="pp-list">
                <li><strong>Account information:</strong> name, email address, password, role (patient, clinician, or administrator)</li>
                <li><strong>Patient profile:</strong> date of birth, gender, allergy and asthma diagnoses, and relevant medical history</li>
                <li><strong>Symptom data:</strong> daily logs of respiratory, nasal, and skin symptoms including severity scores</li>
                <li><strong>Medication information:</strong> medication names, dosages, schedules, and adherence logs</li>
                <li><strong>Lab results:</strong> uploaded laboratory reports including IgE levels, allergen-specific panels, and eosinophil counts</li>
                <li><strong>Communications:</strong> messages or inquiries you send to us</li>
              </ul>

              <h3 className="pp-subsection">1.2 Information Collected Automatically</h3>
              <ul className="pp-list">
                <li><strong>Device information:</strong> device type, operating system, and unique device identifiers</li>
                <li><strong>Usage data:</strong> features accessed, session duration, and interaction logs</li>
                <li><strong>Log data:</strong> IP address, access times, and screens or pages viewed</li>
                <li><strong>Crash and performance data:</strong> error reports and diagnostic information</li>
              </ul>

              <h3 className="pp-subsection">1.3 Environmental Data</h3>
              <p className="pp-p">
                The Platform automatically collects environmental data based on your zip code each night, including:
              </p>
              <ul className="pp-list">
                <li>Pollen counts (tree, grass, and weed) from Google Maps Platform</li>
                <li>Air Quality Index (AQI) and pollutant levels</li>
                <li>Humidity and temperature readings</li>
              </ul>
              <p className="pp-p">
                This data is used solely to identify potential environmental triggers for your symptoms and to
                generate AI-powered insights. It is linked to your account but never used for advertising purposes.
              </p>

              <h3 className="pp-subsection">1.4 Information from Clinicians</h3>
              <p className="pp-p">
                Clinicians may enter or review patient data on behalf of their patients as part of their clinical
                workflow. Clinicians are responsible for ensuring they have appropriate authority to submit patient
                information to the Platform.
              </p>
            </div>
          </article>

          {/* ── §2 How We Use Your Information ── */}
          <article id="section-2" className="pp-section-card">
            <div className="pp-section-header">
              <div className="pp-section-num" aria-hidden="true">2</div>
              <h2 className="pp-section-title">How We Use Your Information</h2>
            </div>
            <div className="pp-section-body">
              <p className="pp-p">We use the information we collect for the following purposes:</p>
              <ul className="pp-list">
                <li>To provide, operate, and maintain the Platform and its features</li>
                <li>To enable symptom tracking, medication adherence monitoring, and AI-driven trend analysis</li>
                <li>To generate nightly flare risk scores and trigger correlation reports for patients and clinicians</li>
                <li>To display environmental data alongside symptom trends to identify personal triggers</li>
                <li>To allow clinicians to monitor their patient cohorts and receive flare risk alerts</li>
                <li>To generate aggregated, de-identified population-level analytics for administrators</li>
                <li>To communicate with you about your account, updates, or support requests</li>
                <li>To detect, investigate, and prevent security incidents and fraudulent activity</li>
                <li>To comply with applicable legal and regulatory obligations, including HIPAA</li>
                <li>To improve the Platform through analysis of usage patterns — using de-identified data only</li>
              </ul>
              <div className="pp-callout pp-callout--info" role="note">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <p>
                  ImmunoTrack does <strong>NOT</strong> diagnose conditions, prescribe medications, or replace clinical
                  judgment. All AI-generated insights are observational risk signals intended to support — not replace
                  — decisions made by a licensed clinician.
                </p>
              </div>
            </div>
          </article>

          {/* ── §3 PHI & HIPAA ── */}
          <article id="section-3" className="pp-section-card">
            <div className="pp-section-header">
              <div className="pp-section-num" aria-hidden="true">3</div>
              <h2 className="pp-section-title">Protected Health Information (PHI) and HIPAA</h2>
            </div>
            <div className="pp-section-body">
              <p className="pp-p">
                Certain information we collect constitutes Protected Health Information (&ldquo;PHI&rdquo;) as defined
                under the Health Insurance Portability and Accountability Act of 1996 (&ldquo;HIPAA&rdquo;) and the
                Health Information Technology for Economic and Clinical Health Act (&ldquo;HITECH&rdquo;). We are
                committed to handling all PHI in compliance with applicable HIPAA requirements.
              </p>

              <h3 className="pp-subsection">3.1 Permitted Uses and Disclosures of PHI</h3>
              <p className="pp-p">We use and disclose PHI only as permitted or required by HIPAA, including:</p>
              <ul className="pp-list">
                <li>For treatment, payment, and healthcare operations</li>
                <li>With your written authorization for any other purpose</li>
                <li>As required by law (e.g., public health reporting, law enforcement)</li>
                <li>To our Business Associates who assist in operating the Platform, pursuant to written Business Associate Agreements (BAAs)</li>
              </ul>

              <h3 className="pp-subsection">3.2 Your HIPAA Rights</h3>
              <p className="pp-p">You have the following rights with respect to your PHI:</p>
              <ul className="pp-list">
                <li><strong>Right of Access:</strong> Request a copy of your PHI held by us</li>
                <li><strong>Right to Amend:</strong> Request correction of inaccurate or incomplete PHI</li>
                <li><strong>Right to an Accounting of Disclosures:</strong> Request a list of certain disclosures of your PHI</li>
                <li><strong>Right to Request Restrictions:</strong> Request restrictions on certain uses or disclosures of your PHI</li>
                <li><strong>Right to Confidential Communications:</strong> Request that we communicate with you through alternative means or locations</li>
                <li><strong>Right to a Paper Copy of this Notice:</strong> Request a paper copy of this Privacy Policy</li>
              </ul>
              <div className="pp-callout pp-callout--cyan" role="note">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <p>
                  To exercise any of these rights, contact us at:{" "}
                  <a href="mailto:privacy@immunotrack.ai">privacy@immunotrack.ai</a>
                </p>
              </div>
            </div>
          </article>

          {/* ── §4 AI & Third-Party Services ── */}
          <article id="section-4" className="pp-section-card">
            <div className="pp-section-header">
              <div className="pp-section-num" aria-hidden="true">4</div>
              <h2 className="pp-section-title">AI Processing and Third-Party Services</h2>
            </div>
            <div className="pp-section-body">
              <p className="pp-p">
                The ImmunoTrack Platform uses third-party AI and cloud services to process your data and generate
                insights. All third-party providers are bound by Business Associate Agreements or Data Processing
                Agreements as applicable.
              </p>
              <div className="pp-table-wrap">
                <table className="pp-table" aria-label="Third-party service providers">
                  <thead>
                    <tr>
                      <th>Service Provider</th>
                      <th>Purpose</th>
                      <th>Data Used</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>AWS Bedrock (AI Processing)</strong></td>
                      <td>Nightly AI insight generation — flare risk scoring and trigger correlation</td>
                      <td>De-identified symptom, medication, and environmental data</td>
                    </tr>
                    <tr>
                      <td><strong>Amazon Web Services</strong></td>
                      <td>Cloud infrastructure — data storage, processing, and delivery</td>
                      <td>All platform data — stored in HIPAA-eligible AWS environment</td>
                    </tr>
                    <tr>
                      <td><strong>Google Maps Platform</strong></td>
                      <td>Environmental data — pollen, AQI, weather by zip code</td>
                      <td>Patient zip code only — no PHI transmitted</td>
                    </tr>
                    <tr>
                      <td><strong>Firebase (Google)</strong></td>
                      <td>Push notifications — flare risk alerts to patients</td>
                      <td>Device token only — no PHI in notification payload</td>
                    </tr>
                    <tr>
                      <td><strong>EMR Integration Partner</strong></td>
                      <td>EMR integration — clinician workflow embedding (planned)</td>
                      <td>Structured clinical data per FHIR R4 standard</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          {/* ── §5 How We Share ── */}
          <article id="section-5" className="pp-section-card">
            <div className="pp-section-header">
              <div className="pp-section-num" aria-hidden="true">5</div>
              <h2 className="pp-section-title">How We Share Your Information</h2>
            </div>
            <div className="pp-section-body">
              <h3 className="pp-subsection">5.1 With Healthcare Providers</h3>
              <p className="pp-p">
                Patient data is shared with the patient&rsquo;s assigned clinician(s) on the Platform as part of
                the core functionality of the service. Clinicians can view symptom trends, medication adherence,
                AI insights, and flare risk scores for their assigned patients only.
              </p>

              <h3 className="pp-subsection">5.2 With Service Providers (Business Associates)</h3>
              <p className="pp-p">
                We share PHI with third-party service providers who assist us in operating the Platform — including
                cloud infrastructure and AI services — each bound by a Business Associate Agreement that requires
                them to protect your PHI in accordance with HIPAA.
              </p>

              <h3 className="pp-subsection">5.3 Aggregated / De-identified Data</h3>
              <p className="pp-p">
                We may use and share de-identified data — data from which all identifying information has been
                removed in accordance with 45 C.F.R. § 164.514 — for analytics, research, and platform improvement
                purposes. De-identified data is not PHI and is not subject to HIPAA restrictions.
              </p>

              <h3 className="pp-subsection">5.4 Legal Requirements</h3>
              <p className="pp-p">
                We may disclose your information if required to do so by law, court order, or governmental authority,
                or if we believe disclosure is necessary to protect the rights, property, or safety of ImmunoTrack,
                our users, or the public.
              </p>

              <h3 className="pp-subsection">5.5 No Sale of Data</h3>
              <div className="pp-callout pp-callout--info" role="note">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <p>
                  We do <strong>not sell, rent, or trade</strong> your personal information or PHI to any third
                  party for their own marketing or commercial purposes — under any circumstances.
                </p>
              </div>
            </div>
          </article>

          {/* ── §6 Data Security ── */}
          <article id="section-6" className="pp-section-card">
            <div className="pp-section-header">
              <div className="pp-section-num" aria-hidden="true">6</div>
              <h2 className="pp-section-title">Data Security</h2>
            </div>
            <div className="pp-section-body">
              <p className="pp-p">
                We implement and maintain industry-standard and HIPAA-required technical, administrative, and
                physical safeguards to protect your information, including:
              </p>
              <ul className="pp-list">
                <li>AES-256 encryption for all data at rest in our databases and file storage</li>
                <li>TLS 1.2 or higher encryption for all data in transit</li>
                <li>Role-based access controls limiting data access to authorized personnel only</li>
                <li>Complete HIPAA audit logging of all PHI access and modifications — retained for minimum 6 years</li>
                <li>JWT-based authentication with secure session management — no localStorage usage</li>
                <li>Encrypted token storage on mobile devices via flutter_secure_storage</li>
                <li>Rate limiting and security headers on all API endpoints</li>
                <li>Regular security risk assessments</li>
              </ul>
              <div className="pp-callout pp-callout--warning" role="note">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" aria-hidden="true">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                  <line x1="12" y1="9" x2="12" y2="13"/>
                  <line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                <p>
                  Despite these measures, no electronic transmission or storage system is 100% secure. In the event
                  of a breach of your unsecured PHI, we will notify you as required by HIPAA&rsquo;s Breach
                  Notification Rule (45 C.F.R. Part 164, Subpart D).
                </p>
              </div>
            </div>
          </article>

          {/* ── §7 Data Retention ── */}
          <article id="section-7" className="pp-section-card">
            <div className="pp-section-header">
              <div className="pp-section-num" aria-hidden="true">7</div>
              <h2 className="pp-section-title">Data Retention</h2>
            </div>
            <div className="pp-section-body">
              <p className="pp-p">
                We retain your personal information and PHI for as long as your account is active, or as necessary
                to provide the Platform services, comply with our legal obligations, resolve disputes, and enforce
                our agreements.
              </p>
              <ul className="pp-list">
                <li><strong>PHI and clinical data:</strong> minimum six (6) years from date of creation or last effective date — as required by HIPAA</li>
                <li><strong>Environmental data:</strong> retained for 3 years to support longitudinal trigger analysis</li>
                <li><strong>Audit logs:</strong> minimum six (6) years — as required by HIPAA</li>
                <li><strong>Session tokens:</strong> automatically cleared when the browser session ends or the app is closed</li>
              </ul>
              <p className="pp-p">
                Upon account closure, we will retain your PHI for the applicable HIPAA retention period. After that
                period, data will be securely destroyed using NIST-compliant data destruction methods.
              </p>
            </div>
          </article>

          {/* ── §8 Children's Privacy ── */}
          <article id="section-8" className="pp-section-card">
            <div className="pp-section-header">
              <div className="pp-section-num" aria-hidden="true">8</div>
              <h2 className="pp-section-title">Children&rsquo;s Privacy</h2>
            </div>
            <div className="pp-section-body">
              <p className="pp-p">
                The Platform is not directed to children under the age of 13, and we do not knowingly collect
                personal information from children under 13 without verifiable parental or guardian consent. If you
                believe we have inadvertently collected such information, please contact us at{" "}
                <a href="mailto:privacy@immunotrack.ai" className="pp-link">privacy@immunotrack.ai</a> and we will
                take steps to delete it promptly.
              </p>
            </div>
          </article>

          {/* ── §9 State Privacy Rights ── */}
          <article id="section-9" className="pp-section-card">
            <div className="pp-section-header">
              <div className="pp-section-num" aria-hidden="true">9</div>
              <h2 className="pp-section-title">State Privacy Rights</h2>
            </div>
            <div className="pp-section-body">
              <h3 className="pp-subsection">9.1 California Residents (CCPA)</h3>
              <p className="pp-p">
                California residents may have additional rights under the California Consumer Privacy Act (CCPA),
                including the right to know what personal information we collect and how it is used, the right to
                delete personal information, and the right to opt out of the sale of personal information. We do
                not sell personal information. To exercise your California privacy rights, contact us at{" "}
                <a href="mailto:privacy@immunotrack.ai" className="pp-link">privacy@immunotrack.ai</a>.
              </p>

              <h3 className="pp-subsection">9.2 Other States</h3>
              <p className="pp-p">
                Residents of other states with applicable privacy laws — including Virginia, Colorado, Connecticut,
                and Texas — may have similar rights. We will honor requests made pursuant to applicable state
                privacy law. Contact us at{" "}
                <a href="mailto:privacy@immunotrack.ai" className="pp-link">privacy@immunotrack.ai</a> to make a
                request.
              </p>
            </div>
          </article>

          {/* ── §10 Cookies ── */}
          <article id="section-10" className="pp-section-card">
            <div className="pp-section-header">
              <div className="pp-section-num" aria-hidden="true">10</div>
              <h2 className="pp-section-title">Cookies and Tracking Technologies</h2>
            </div>
            <div className="pp-section-body">
              <p className="pp-p">
                The web dashboard component of the Platform uses cookies and similar tracking technologies for
                session management, security, and platform functionality only. We do not use third-party advertising
                cookies or any tracking for marketing purposes.
              </p>
              <ul className="pp-list">
                <li><strong>Session cookies:</strong> used for authentication and secure session management — cleared when the browser closes</li>
                <li><strong>Functional cookies:</strong> used to remember your preferences within the Platform</li>
                <li><strong>No advertising cookies:</strong> we do not use Google Analytics, Facebook Pixel, or any third-party advertising trackers</li>
              </ul>
              <p className="pp-p">
                You may configure your browser to refuse cookies; however, some features of the Platform may not
                function correctly without them.
              </p>
              <p className="pp-p">
                For full details, see our{" "}
                <Link href="/cookies" className="pp-link">Cookie Policy</Link>.
              </p>
            </div>
          </article>

          {/* ── §11 Policy Changes ── */}
          <article id="section-11" className="pp-section-card">
            <div className="pp-section-header">
              <div className="pp-section-num" aria-hidden="true">11</div>
              <h2 className="pp-section-title">Changes to This Privacy Policy</h2>
            </div>
            <div className="pp-section-body">
              <p className="pp-p">
                We may update this Privacy Policy from time to time to reflect changes in our practices, the
                Platform, or applicable law. We will notify you of material changes by posting the updated policy
                within the Platform and updating the effective date. Your continued use of the Platform after such
                notice constitutes your acknowledgement of the updated policy. If required by HIPAA, we will provide
                you with a revised Notice of Privacy Practices.
              </p>
            </div>
          </article>

          {/* ── §12 Contact Us ── */}
          <article id="section-12" className="pp-section-card">
            <div className="pp-section-header">
              <div className="pp-section-num" aria-hidden="true">12</div>
              <h2 className="pp-section-title">Contact Us</h2>
            </div>
            <div className="pp-section-body">
              <p className="pp-p">
                If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
                please contact our Privacy Officer at:
              </p>
              <div className="pp-contact-block">
                <p><strong>ImmunoTrack Inc. </strong></p>
                <p>Privacy Officer</p>
                <p>
                  Email:{" "}
                  <a href="mailto:privacy@immunotrack.ai" className="pp-link">privacy@immunotrack.ai</a>
                </p>
                <p>
                  Website:{" "}
                  <a href="https://immunotrack.ai" className="pp-link" target="_blank" rel="noopener noreferrer">
                    immunotrack.ai
                  </a>
                </p>
              </div>

              <div className="pp-callout pp-callout--info" role="note">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <p>
                  You also have the right to file a complaint with the U.S. Department of Health and Human Services
                  Office for Civil Rights if you believe your privacy rights have been violated. You will not be
                  penalized for filing a complaint.{" "}
                  <a href="https://www.hhs.gov/hipaa/filing-a-complaint" className="pp-link"
                    target="_blank" rel="noopener noreferrer">
                    HHS OCR →
                  </a>
                </p>
              </div>
            </div>
          </article>

          {/* ── Version History ── */}
          <div className="pp-version-card" id="version-history">
            <h2 className="pp-version-title">Version History</h2>
            <div className="pp-table-wrap">
              <table className="pp-table" aria-label="Version history">
                <thead>
                  <tr>
                    <th>Version</th>
                    <th>Date</th>
                    <th>Changes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1.0</td>
                    <td>April 1, 2026</td>
                    <td>Initial version</td>
                  </tr>
                  <tr>
                    <td>1.1</td>
                    <td>May 1, 2026</td>
                    <td>
                      Updated entity to ImmunoTrack Inc. Updated email to
                      privacy@immunotrack.ai. Added environmental data section, lab result upload,
                      AI/third-party services table, cookie detail, and security enhancements.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>{/* /pp-content */}

        {/* ─── Sticky Sidebar ─── */}
        <aside className="pp-sidebar" aria-label="Privacy policy summary">

          {/* Section nav */}
          <nav className="pp-nav-card" aria-label="Jump to section">
            <h3 className="pp-nav-title">Jump to Section</h3>
            <ul className="pp-nav-list">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="pp-nav-link">{s.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* At a Glance */}
          <div className="pp-glance-card">
            <h2 className="pp-glance-title">Privacy Policy At a Glance</h2>
            <ul className="pp-glance-list">
              {glanceItems.map((item) => (
                <li key={item.title} className="pp-glance-item">
                  <div className="pp-glance-icon" aria-hidden="true">
                    <Image src={item.icon} alt="" width={20} height={item.iconHeight} className="pp-icon-cyan" />
                  </div>
                  <div>
                    <p className="pp-glance-item-title">{item.title}</p>
                    <p className="pp-glance-item-desc">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Questions */}
          <div className="pp-questions-card">
            <h3 className="pp-questions-title">Questions?</h3>
            <p className="pp-questions-desc">
              If you have any questions about this Privacy Policy or how we handle your data, we&rsquo;re here to help.
            </p>
            <a href="mailto:privacy@immunotrack.ai" className="pp-questions-email" id="privacy-email-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 7l10 7 10-7"/>
              </svg>
              privacy@immunotrack.ai
            </a>
            <p className="pp-questions-sla">We typically respond within 1 business day.</p>
            <Link href="/support" className="pp-questions-link" id="privacy-support-link" scroll={false}>
              Visit our Help &amp; Support Center →
            </Link>
          </div>

        </aside>
      </div>{/* /pp-layout */}

    </main>
  );
}