import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import aiInsightsImg from "@/assets/images/ImmunoTrack_AI_Insights.png";
import rtmBillingImg from "@/assets/images/ImmunoTrack_RTM_Billing.png";
import "@/assets/styles/clinicians.css";

export default function CliniciansSection() {
  return (
    <section id="clinicians" className="cl-page" aria-label="Clinicians">
      {/* ── HERO SECTION ──────────────────────────────────────── */}
      <section className="cl-hero" aria-label="Hero">
        <div className="cl-hero-container">
          <div className="cl-hero-content">
            <span className="cl-hero-tag">Built for allergy & immunology</span>
            <h1 className="cl-hero-title">
              Remote therapeutic monitoring — finally built for allergy and immunology.
            </h1>
            <p className="cl-hero-subtitle">
              ImmunoTrack gives allergy and immunology practices the tools to monitor patients remotely, qualify for RTM billing, and catch flares before they become ER visits.
            </p>
            <div className="cl-hero-actions">
              <Link href="/contact" className="cl-btn cl-btn-cyan pui-btn pui-focus">
                Request Access
              </Link>
            </div>
          </div>
          <div className="cl-hero-image">
            <Image
              src="/images/clinician-hero-banner.jpeg"
              alt="Clinician with patient using ImmunoTrack"
              width={600}
              height={420}
              priority
              className="cl-hero-img"
            />
          </div>
        </div>
      </section>

      {/* ── STATS HIGHLIGHTS ─────────────────────────────────── */}
      <section className="cl-stats-section" aria-label="Stats Summary">
        <div className="cl-stats-bar">
          <div className="cl-stats-item">
            <span className="cl-stats-val">2–30</span>
            <span className="cl-stats-label">days per period for RTM billing</span>
          </div>
          <div className="cl-stats-item">
            <span className="cl-stats-val"><AnimatedCounter value={6} /></span>
            <span className="cl-stats-label">RTM CPT codes</span>
          </div>
          <div className="cl-stats-item">
            <span className="cl-stats-val">Nightly</span>
            <span className="cl-stats-label">AI flare risk scores across your panel</span>
          </div>
          <div className="cl-stats-item">
            <span className="cl-stats-val">&lt; 1 day</span>
            <span className="cl-stats-label">onboarding before first patient invite</span>
          </div>
        </div>
      </section>

      {/* ── RTM BILLING SECTION ────────────────────────────────── */}
      <section className="cl-billing-section" aria-label="RTM Billing">
        <div className="cl-container">
          <div className="cl-billing-content">
            <span className="cl-section-tag">RTM Billing</span>
            <h2 className="cl-section-title">Built around RTM — not bolted on.</h2>
            <p className="cl-section-subtitle">
              ImmunoTrack tracks the data that RTM billing requires — symptom scores, medication adherence, and therapy response. The platform shows each patient&apos;s daily logging progress toward RTM billing thresholds (2–15 days or 16–30 days) per 30-day period, and exports the documentation your billing team needs. All 6 RTM CPT codes supported, including the CMS 2026 tiered additions.
            </p>
          </div>

          <Reveal className="cl-cpt-image-container mb-10">
            <Image
              src={rtmBillingImg}
              alt="ImmunoTrack RTM Billing CPT Codes"
              width={1200}
              height={600}
              className="w-full h-auto rounded-2xl shadow-lg border border-slate-200/60 object-contain mx-auto"
            />
          </Reveal>

          <div className="cl-notice-box">
            RTM billing is the clinician&apos;s responsibility. ImmunoTrack provides documentation and tracking support — it does not submit claims. Clinicians should confirm RTM coverage with their payers before enrolling patients.
          </div>
        </div>
      </section>

      {/* ── DASHBOARD PREVIEW SECTION ──────────────────────────── */}
      <section className="cl-dashboard-section" aria-label="Dashboard Preview">
        <div className="cl-container">
          <div className="cl-dashboard-content">
            <span className="cl-section-tag">Dashboard Preview</span>
            <h2 className="cl-section-title">Your patient panel — every morning, updated overnight</h2>
            <p className="cl-section-subtitle">
              Patients sorted by flare risk. RTM logging progress visible at a glance. Nightly AI summaries waiting when you log in. (Sample data shown for illustration — not real patient information.)
            </p>
          </div>

          <Reveal className="cl-dashboard-preview">
            <Image
              src={aiInsightsImg}
              alt="ImmunoTrack Clinician Dashboard AI Insights"
              width={1200}
              height={600}
              className="w-full h-auto rounded-2xl shadow-xl border border-slate-200/60 object-contain mx-auto"
            />
          </Reveal>
        </div>
      </section>

      {/* ── FEATURES HIGHLIGHTS SECTION ───────────────────────── */}
      <section className="cl-features-section" aria-label="Features Grid">
        <div className="cl-container">
          <div className="cl-features-content">
            <span className="cl-section-tag">Features</span>
            <h2 className="cl-section-title">Everything your practice needs between visits</h2>
          </div>

          <div className="cl-features-grid">
            <Reveal className="cl-feature-card">
              <h3 className="cl-feature-title">Patient panel with flare risk scores</h3>
              <p className="cl-feature-desc">
                All patients are automatically sorted by flare risk level and updated nightly, letting you prioritize high-risk patients instantly.
              </p>
            </Reveal>
            <Reveal className="cl-feature-card" delay={1}>
              <h3 className="cl-feature-title">Symptom trend graphs</h3>
              <p className="cl-feature-desc">
                Real-time trend analysis for respiratory, nasal, and skin symptoms over customizable time frames, providing granular between-visit tracking.
              </p>
            </Reveal>
            <Reveal className="cl-feature-card" delay={2}>
              <h3 className="cl-feature-title">Medication adherence tracking</h3>
              <p className="cl-feature-desc">
                Review full patient dose history, missed dose streaks, and rescue inhaler usage patterns directly from your central console.
              </p>
            </Reveal>
            <Reveal className="cl-feature-card" delay={3}>
              <h3 className="cl-feature-title">Environmental trigger correlation</h3>
              <p className="cl-feature-desc">
                Local pollen counts, air quality index (AQI), and weather metrics are automatically pulled by zip code and paired with patient symptom spikes.
              </p>
            </Reveal>
            <Reveal className="cl-feature-card" delay={4}>
              <h3 className="cl-feature-title">RTM progress tracking</h3>
              <p className="cl-feature-desc">
                Keep tabs on logging progress for every patient. Instantly see who has reached the 16-day billing threshold, with exportable summaries.
              </p>
            </Reveal>
            <Reveal className="cl-feature-card" delay={4}>
              <h3 className="cl-feature-title">AI-generated nightly insights</h3>
              <p className="cl-feature-desc">
                ImmunoTrack’s clinical AI engine generates plain-language summaries for each patient every night — what changed, what’s driving risk, what to watch at the next visit.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SPECIALTIES SECTION ────────────────────────────────── */}
      <section className="cl-specialties-section" aria-label="Who we support">
        <div className="cl-container">
          <div className="cl-specialties-content">
            <span className="cl-section-tag">Specialties</span>
            <h2 className="cl-section-title">Who we support</h2>
          </div>

          <div className="cl-specialties-grid">
            <Reveal className="cl-specialty-card">
              <h3 className="cl-specialty-title">Allergy & Immunology</h3>
              <p className="cl-specialty-desc">Primary specialty. Core clinical scales including ACQ-6, SNOT-22, and POEM are fully integrated.</p>
            </Reveal>
            <Reveal className="cl-specialty-card" delay={1}>
              <h3 className="cl-specialty-title">Asthma & Pulmonology</h3>
              <p className="cl-specialty-desc">Rescue inhaler utilization alerts, symptom-based asthma control scoring and standardized asthma control scoring.</p>
            </Reveal>
            <Reveal className="cl-specialty-card" delay={2}>
              <h3 className="cl-specialty-title">Academic / Hospital</h3>
              <p className="cl-specialty-desc">Multi-clinician collaborative workspaces, advanced cohort segmentation, and cohort-level analytics.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── ONBOARDING BANNER CTA SECTION ──────────────────────── */}
      <section className="cl-onboarding-section" aria-label="Onboarding Banner">
        <div className="cl-onboarding-container">
          <div className="cl-onboarding-copy">
            <h2 className="cl-onboarding-title">Onboarding your practice takes less than a day.</h2>
            <p className="cl-onboarding-body">
              ImmunoTrack handles setup. We configure your practice profile, NPI, and RTM billing settings before you log in. On day one you activate your account, verify your profile, and send your first patient invite.
            </p>
          </div>
          <div className="cl-onboarding-action">
            <Link href="/clinicians/onboarding" className="cl-btn cl-btn-outline pui-btn pui-focus">
              See full onboarding flow
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
