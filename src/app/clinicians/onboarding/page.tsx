import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import "@/assets/styles/onboarding.css";

export const metadata: Metadata = {
  title: "Clinician Onboarding Playbook — ImmunoTrack",
  description:
    "Review the step-by-step onboarding process for ImmunoTrack practices. Details on pre-configuration, day-one activation, and default welcome systems.",
};

const phases = [
  {
    phase: "1. Super Admin setup",
    who: "ImmunoTrack Super Admin",
    what: "Creates practice record and provisions clinician seat (name, NPI, email). Triggers activation email.",
    when: "Before clinician Day 1",
  },
  {
    phase: "2. Practice Admin setup",
    who: "Practice Admin",
    what: "Completes clinician profile: mobile, specialty, welcome message. Visible in clinician profile on Day 1.",
    when: "Before or on Day 1",
  },
  {
    phase: "3. Account activation",
    who: "Clinician",
    what: "Clicks activation link. Sets password and MFA. Confirms profile details.",
    when: "Day 1",
  },
  {
    phase: "4. Platform orientation",
    who: "Clinician + ImmunoTrack",
    what: "Clinician reviews dashboard, patient invite flow, RTM consent process (hard opt-in at patient onboarding), and billing panel. Guided by ImmunoTrack onboarding team.",
    when: "Day 1–2",
  },
  {
    phase: "5. First patient invite",
    who: "Clinician",
    what: "Sends first patient invite. Default welcome message pre-filled. Clinician confirms or edits before sending.",
    when: "Day 1–7",
  },
  {
    phase: "6. Ongoing",
    who: "Clinician + ImmunoTrack",
    what: "Clinician manages patient panel, reviews alerts, exports billing reports. Practice Admin manages team. ImmunoTrack support available.",
    when: "Ongoing",
  },
];

export default function ClinicianOnboarding() {
  return (
    <main className="ob-page">
      {/* ── HERO SECTION ──────────────────────────────────────── */}
      <section className="ob-hero" aria-label="Hero">
        <div className="ob-hero-container">
          <span className="ob-hero-tag">Playbook & Guide</span>
          <h1 className="ob-hero-title">Clinician Onboarding Playbook</h1>
          <p className="ob-hero-subtitle">
            This playbook outlines the complete onboarding flow for practices enrolling in the ImmunoTrack remote therapeutic monitoring program.
          </p>
          <div className="ob-hero-meta">
            <span>Living Document</span>
            <span>&bull;</span>
            <span>v1.3</span>
            <span>&bull;</span>
            <span>June 2026</span>
          </div>
        </div>
      </section>

      {/* ── PHASE TABLE SECTION ────────────────────────────────── */}
      <section className="ob-table-section" aria-label="Onboarding Phases">
        <div className="ob-table-wrapper">
          <table className="ob-table">
            <thead>
              <tr>
                <th style={{ width: "20%" }}>Phase</th>
                <th style={{ width: "25%" }}>Responsibility</th>
                <th style={{ width: "40%" }}>What Happens</th>
                <th style={{ width: "15%" }}>When</th>
              </tr>
            </thead>
            <tbody>
              {phases.map((p, idx) => (
                <tr key={idx}>
                  <td className="ob-table-phase">{p.phase}</td>
                  <td>
                    <span className="ob-table-who">{p.who}</span>
                  </td>
                  <td>{p.what}</td>
                  <td style={{ fontWeight: 600 }}>{p.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── PRE-CONFIG VS DAY ONE CONFIG ──────────────────────── */}
      <section className="ob-config-section" aria-label="Setup Details">
        <div className="ob-container">
          <div className="ob-section-content text-center">
            <span className="ob-section-tag">Responsibility Split</span>
            <h2 className="ob-section-title">Practice Setup & Account Activation</h2>
            <p className="ob-section-subtitle margin-auto">
              ImmunoTrack handles administrative configuration beforehand so that clinicians can focus on patient care from day one.
            </p>
          </div>

          <div className="ob-grid ob-grid-2col">
            {/* Left Column: What ImmunoTrack Configures */}
            <Reveal className="ob-split-card">
              <div className="ob-split-card-header">
                <h3 className="ob-split-card-title">1. What ImmunoTrack Configures (Before Login)</h3>
              </div>
              <ul className="ob-list">
                <li className="ob-list-item">
                  <div className="ob-list-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2dd6e5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <div className="ob-list-item-title">Practice Profile</div>
                    <div className="ob-list-item-desc">Clinic Name, Specialties, Address, and Phone numbers are pre-loaded for regulatory compliance.</div>
                  </div>
                </li>
                <li className="ob-list-item">
                  <div className="ob-list-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2dd6e5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <div className="ob-list-item-title">Clinician Seat Provisioning</div>
                    <div className="ob-list-item-desc">Core identifiers (Clinician Name, Email, Individual NPI) are locked in to establish billable seats.</div>
                  </div>
                </li>
                <li className="ob-list-item">
                  <div className="ob-list-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2dd6e5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <div className="ob-list-item-title">RTM Billing Mode</div>
                    <div className="ob-list-item-desc">Configured to reset on a rolling 30 days from enrollment (rather than calendar months) to fit remote monitoring codes.</div>
                  </div>
                </li>
              </ul>
            </Reveal>

            {/* Right Column: What You Do on Day One */}
            <Reveal className="ob-split-card" delay={1} style={{ borderTop: "4px solid var(--ob-cyan)" }}>
              <div className="ob-split-card-header">
                <h3 className="ob-split-card-title">2. What You Do (Day One Activation)</h3>
              </div>
              <ul className="ob-list">
                <li className="ob-list-item">
                  <div className="ob-list-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1bb8c7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </div>
                  <div>
                    <div className="ob-list-item-title">Secure Password & MFA Setup</div>
                    <div className="ob-list-item-desc">Set up your password (minimum 12 characters) and configure required Multi-Factor Authentication (MFA).</div>
                  </div>
                </li>
                <li className="ob-list-item">
                  <div className="ob-list-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1bb8c7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </div>
                  <div>
                    <div className="ob-list-item-title">Profile & NPI Verification</div>
                    <div className="ob-list-item-desc">Confirm pre-filled details (NPI is critical as it auto-populates RTM consent forms).</div>
                  </div>
                </li>
                <li className="ob-list-item">
                  <div className="ob-list-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1bb8c7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                  </div>
                  <div>
                    <div className="ob-list-item-title">Invite Your First Patient</div>
                    <div className="ob-list-item-desc">Send the initial enrollment link. The practice&apos;s default welcome message pre-fills, ready to send.</div>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WELCOME SYSTEM SECTION ─────────────────────────────── */}
      <section className="ob-tier-section" aria-label="Invite System">
        <div className="ob-container">
          <div className="ob-section-content text-center">
            <span className="ob-section-tag">Communication</span>
            <h2 className="ob-section-title">The Three-Tier Default System</h2>
            <p className="ob-section-subtitle margin-auto">
              Every patient invite pre-fills a personal note, ensuring clinicians never have to type from scratch while allowing full customization.
            </p>
          </div>

          <div className="ob-tier-grid">
            {/* Tier 1 */}
            <Reveal className="ob-tier-card">
              <span className="ob-tier-label">Tier 1</span>
              <h3 className="ob-tier-title">System Default</h3>
              <p className="ob-tier-desc">
                Platform config fallback used if no custom welcome message is defined. Stored globally and always active.
              </p>
              <div className="ob-system-quote">
                &ldquo;Welcome to our monitoring program. Your clinician uses ImmunoTrack to keep track of your health between visits. We look forward to supporting you.&rdquo;
              </div>
            </Reveal>

            {/* Tier 2 */}
            <Reveal className="ob-tier-card" delay={1}>
              <span className="ob-tier-label">Tier 2</span>
              <h3 className="ob-tier-title">Practice Default</h3>
              <p className="ob-tier-desc">
                Customized by the Practice Admin to align with the clinic&apos;s specific workflow, patient panel, or specialty style.
              </p>
            </Reveal>

            {/* Tier 3 */}
            <Reveal className="ob-tier-card" delay={2}>
              <span className="ob-tier-label">Tier 3</span>
              <h3 className="ob-tier-title">Clinician Edit</h3>
              <p className="ob-tier-desc">
                Clinicians can review and perform a one-time edit on the note immediately before sending an individual patient invitation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PRACTICE EXAMPLES SECTION ──────────────────────────── */}
      <section className="ob-examples-section" aria-label="Practice Examples">
        <div className="ob-container">
          <div className="ob-section-content text-center">
            <span className="ob-section-tag">Examples</span>
            <h2 className="ob-section-title">Practice Welcome Messages</h2>
            <p className="ob-section-subtitle margin-auto">
              Standard clinical templates designed for specific allergy and immunology sub-practices.
            </p>
          </div>

          <div className="ob-examples-grid">
            <Reveal className="ob-example-card">
              <div className="ob-example-type">General Allergy & Immunology</div>
              <p className="ob-example-text">
                &ldquo;Welcome to our monitoring program. We look forward to tracking your progress and keeping your care on track between visits.&rdquo;
              </p>
            </Reveal>
            <Reveal className="ob-example-card" delay={1}>
              <div className="ob-example-type">Pediatric Allergy</div>
              <p className="ob-example-text">
                &ldquo;Welcome to our monitoring program. We&apos;re glad to have you with us. Daily logging helps us understand your child&apos;s symptoms and adjust their care plan.&rdquo;
              </p>
            </Reveal>
            <Reveal className="ob-example-card" delay={2}>
              <div className="ob-example-type">Asthma Clinic</div>
              <p className="ob-example-text">
                &ldquo;Welcome to ImmunoTrack. Tracking your daily symptoms helps us keep your asthma well-controlled and catch any changes early.&rdquo;
              </p>
            </Reveal>
            <Reveal className="ob-example-card" delay={3}>
              <div className="ob-example-type">Academic / Hospital Practice</div>
              <p className="ob-example-text">
                &ldquo;Welcome. Your clinician at [Practice name] has enrolled you in a remote monitoring program. This helps us monitor your condition between appointments.&rdquo;
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── ONBOARDING BANNER CTA SECTION ──────────────────────── */}
      <section className="ob-onboarding-section" aria-label="Onboarding Banner">
        <div className="ob-onboarding-container">
          <div className="ob-onboarding-copy">
            <h2 className="ob-onboarding-title">Ready to get started?</h2>
            <p className="ob-onboarding-body">
              Request access to the ImmunoTrack platform to begin provisioning clinican seats for your practice.
            </p>
          </div>
          <div className="ob-onboarding-action">
            <Link href="/contact" className="ob-btn ob-btn-outline pui-btn pui-focus">
              Request Access
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}