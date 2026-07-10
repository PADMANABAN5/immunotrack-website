import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import "@/assets/styles/patients.css";

export default function PatientsSection() {
  return (
    <section id="patients" className="pt-page" aria-label="Patients">
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
              <Link href="/download" className="pt-btn pt-btn-cyan pui-btn pui-focus">
                Download the App
              </Link>
              <Link href="/contact" className="pt-btn pt-btn-outline pui-btn pui-focus">
                Request Patient Access
              </Link>
            </div>
          </div>
          <div className="pt-hero-image">
            <Image
              src="/images/patient-hero-banner.jpeg"
              alt="Patient using ImmunoTrack app"
              width={600}
              height={330}
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
            <span className="pt-section-tag">What you can do</span>
            <h2 className="pt-section-title">Everything you need, in one simple app</h2>
          </div>

          <div className="pt-features-grid">
            <Reveal className="pt-feature-card">
              <div className="pt-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3 className="pt-feature-title">Daily symptom logging</h3>
              <p className="pt-feature-desc">
                Log respiratory, nasal, and skin symptoms in under a minute a day, right from your phone.
              </p>
            </Reveal>

            <Reveal className="pt-feature-card" delay={1}>
              <div className="pt-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10.5 20.5 3.5 13.5a4.95 4.95 0 1 1 7-7l7 7a4.95 4.95 0 1 1-7 7Z"></path>
                  <line x1="8.5" y1="8.5" x2="15.5" y2="15.5"></line>
                </svg>
              </div>
              <h3 className="pt-feature-title">Medication tracking</h3>
              <p className="pt-feature-desc">
                Keep a record of every dose and get reminders so you never lose track of your treatment plan.
              </p>
            </Reveal>

            <Reveal className="pt-feature-card" delay={2}>
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
              <p className="pt-feature-desc">
                Get plain-language patterns in your symptoms over time. AI Insights are informational only — not medical advice — and never replace your clinician&rsquo;s guidance.
              </p>
            </Reveal>

            <Reveal className="pt-feature-card" delay={3}>
              <div className="pt-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="pt-feature-title">Secure connection to your care team</h3>
              <p className="pt-feature-desc">
                Your logs and trends are shared securely with your clinician so they can review your progress between visits.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── RTM EXPLAINED SIMPLY ──────────────────────────────── */}
      <section className="pt-rtm-section" aria-label="RTM Explained Simply">
        <div className="pt-container">
          <div className="pt-rtm-grid">
            <div className="pt-rtm-copy">
              <span className="pt-section-tag">RTM Explained Simply</span>
              <h2 className="pt-section-title">What is Remote Therapeutic Monitoring?</h2>
              <p className="pt-rtm-desc">
                Remote Therapeutic Monitoring, or RTM, just means your clinician can keep an eye on how you&rsquo;re doing between appointments using the symptom logs you enter in the app. If your clinician has enrolled you in RTM, logging on most days during each 30-day period — generally at least 16 days — helps them monitor your care and may allow your insurance to be billed for that monitoring service. The app always shows your progress toward that goal, and you can ask your clinician any questions about RTM coverage or costs at any time.
              </p>
            </div>
            <Reveal className="pt-rtm-stat-card">
              <span className="pt-rtm-stat-val"><AnimatedCounter value={16} /><span className="pt-rtm-stat-of">/30</span></span>
              <span className="pt-rtm-stat-label">days of logging per monitoring period</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PRIVACY REASSURANCE ───────────────────────────────── */}
      <section className="pt-privacy-section" aria-label="Your privacy, protected">
        <div className="pt-container">
          <div className="pt-privacy-content">
            <span className="pt-section-tag">Your Privacy</span>
            <h2 className="pt-section-title">Your health data stays protected</h2>
          </div>

          <div className="pt-privacy-grid">
            <div className="pt-privacy-item">
              <span className="pt-privacy-check" aria-hidden="true">&#10003;</span>
              <span>HIPAA-compliant</span>
            </div>
            <div className="pt-privacy-item">
              <span className="pt-privacy-check" aria-hidden="true">&#10003;</span>
              <span>Encrypted, always</span>
            </div>
            <div className="pt-privacy-item">
              <span className="pt-privacy-check" aria-hidden="true">&#10003;</span>
              <span>Never sold</span>
            </div>
            <div className="pt-privacy-item">
              <span className="pt-privacy-check" aria-hidden="true">&#10003;</span>
              <span>Only your care team can see your data</span>
            </div>
          </div>

          <p className="pt-privacy-link-row">
            Read our full <Link href="/privacy" className="pt-inline-link">Privacy Policy</Link> for details on how your information is collected, used, and protected.
          </p>
        </div>
      </section>

      {/* ── FOOTER CTA BAND ───────────────────────────────────── */}
      <section className="pt-cta-section" aria-label="Get started">
        <div className="pt-cta-container">
          <h2 className="pt-cta-title">Ready to start tracking your health?</h2>
          <p className="pt-cta-desc">ImmunoTrack is invitation-only. Ask your clinician for an invite, or download the app if you already have one.</p>
          <div className="pt-cta-actions">
            <Link href="/download" className="pt-btn pt-btn-cyan pui-btn pui-focus">
              Download the App
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
