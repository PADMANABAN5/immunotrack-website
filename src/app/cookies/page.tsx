import type { Metadata } from "next";
import Image from "next/image";
import "@/assets/styles/cookies.css";
import ContactSection from "@/components/ContactSection";

// Icon imports from the icons folder
import cloudSyncIcon  from "@/assets/icons/noun-cloud-sync-8146798.svg";
import realTimeIcon   from "@/assets/icons/noun-real-time-8114634.svg";
import trendingIcon   from "@/assets/icons/noun-trending-7934313.svg";
import settingsIcon   from "@/assets/icons/noun-settings-2650525.svg";
import profileIcon    from "@/assets/icons/noun-profile-8205839.svg";
import insightsIcon   from "@/assets/icons/noun-insights-8300657.svg";
import trackingIcon   from "@/assets/icons/noun-tracking-8269731.svg";
import alertIcon      from "@/assets/icons/noun-alert-8253230.svg";

export const metadata: Metadata = {
  title: "Cookie Policy — ImmunoTrack",
  description:
    "Learn how ImmunoTrack uses cookies, session technologies, and related tools to provide a secure and reliable experience.",
};

export default function CookiesPage() {
  return (
    <main className="ck-page">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="ck-hero" aria-label="Cookie Policy Hero">
        <div className="ck-hero-container">
          <div className="ck-hero-content">
            <p className="ck-hero-label">COOKIE POLICY</p>
            <h1 className="ck-hero-title">
              How we use cookies to serve you better.
            </h1>
            <p className="ck-hero-subtitle">
              ImmunoTrack uses cookies and similar technologies to provide a secure, reliable, and personalized experience. This policy explains what we use and how you can manage them.
            </p>
            <div className="ck-hero-meta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Version 1.0 · Effective May 1, 2026
            </div>
          </div>
          <div className="ck-hero-image">
            <Image
              src="/images/cookie-policy.jpeg"
              alt="Cookie and data privacy policy"
              width={600}
              height={327}
              priority
              className="ck-hero-img"
            />
          </div>
        </div>
      </section>

      {/* ── CONTENT LAYOUT ────────────────────────────────── */}
      <div className="ck-layout">

        {/* Main Content Column */}
        <div className="ck-content">
          {/* Intro Card */}
          <div id="intro" className="ck-lead-card">
            <p className="ck-lead-text">
              This Cookie Policy applies to immunotrack.ai and the ImmunoTrack
              clinician dashboard. It explains what cookies are, how we use
              them, and how you can manage them. This policy does not apply to
              the ImmunoTrack patient mobile app, which does not use browser
              cookies.Questions about this policy should be directed to
              privacy@immunotrack.ai.
            </p>
          </div>

          {/* ── Section 1 ── */}
          <article id="section-1" className="ck-section-card">
            <div className="ck-section-header">
              <div className="ck-section-num" aria-hidden="true">
                1
              </div>
              <h2 className="ck-section-title">What Are Cookies</h2>
            </div>
            <div className="ck-section-body">
              <p className="ck-p">
                Cookies are small text files placed on your device when you
                visit a website or web application. They help a site remember
                your session, keep you logged in, and store preferences between
                visits.
              </p>
              <p className="ck-p">
                Similar technologies include web storage (localStorage and
                sessionStorage), pixel tags, and web beacons. This policy covers
                all of these technologies as they apply to immunotrack.ai and
                the ImmunoTrack clinician web dashboard.
              </p>
              <div className="ck-callout" role="note">
                <div className="ck-callout-header">
                  <Image src={alertIcon} alt="" width={18} height={18} aria-hidden="true" className="ck-svg-icon ck-svg-amber" />
                  <strong>Important Compliance Note</strong>
                </div>
                ImmunoTrack does not use localStorage to store health data. All
                Protected Health Information (PHI) is stored exclusively on
                HIPAA-eligible encrypted servers. Cookies and web storage are
                used only for session management and platform functionality.
              </div>
            </div>
          </article>

          {/* ── Section 2 ── */}
          <article id="section-2" className="ck-section-card">
            <div className="ck-section-header">
              <div className="ck-section-num" aria-hidden="true">
                2
              </div>
              <h2 className="ck-section-title">Cookies We Use</h2>
            </div>
            <div className="ck-section-body">
              <p className="ck-p">
                ImmunoTrack uses only the categories of cookies described below.
                We do not use advertising cookies, social media tracking pixels,
                or any cookie that shares your data with third-party
                advertisers.
              </p>

              {/* 2.1 */}
              <div className="ck-sub-section">
                <h3 className="ck-h3">2.1 Strictly Necessary Cookies</h3>
                <p className="">
                  These cookies are essential for the platform to function. They
                  enable secure login, maintain authenticated sessions, and
                  protect against security threats. They cannot be disabled
                  without breaking core platform functionality.
                </p>
                <ul className="ck-list" role="list">
                  <li className="ck-list-item">
                    <span>
                      <strong>Session token (JWT):</strong> Maintains your
                      authenticated clinician or patient session. Issued by AWS
                      Cognito at login. Cleared on logout or browser close.
                    </span>
                  </li>
                  <li className="ck-list-item">
                    <span>
                      <strong>CSRF protection token:</strong> : Protects against
                      cross-site request forgery attacks on form submissions and
                      API calls. Session duration.
                    </span>
                  </li>
                  <li className="ck-list-item">
                    <span>
                      <strong>Auth state cookie:</strong> Stores the Cognito
                      authentication state required for token refresh. No PHI is
                      stored in this cookie. Duration up to 30 days
                      (configurable).
                    </span>
                  </li>
                  <li className="ck-list-item">
                    <span>
                      <strong>
                        Cloudflare security cookie (
                        <code className="ck-span">__cf_bm</code>):
                      </strong>{" "}
                      Set by Cloudflare infrastructure to manage bot traffic and
                      protect the site from abuse. Required for site
                      availability. Duration 30 minutes.
                    </span>
                  </li>
                </ul>
              </div>

              {/* 2.2 */}
              <div className="ck-sub-section">
                <h3 className="ck-h3">2.2 Functional Cookies</h3>
                <p className="">
                  These cookies remember your preferences and settings within
                  the platform, improving your experience across sessions. They
                  are not required for basic functionality but enhance
                  usability.
                </p>
                <ul className="ck-list" role="list">
                  <li className="ck-list-item">
                    <span>
                      <strong>Dashboard preferences:</strong> Stores your
                      dashboard layout preferences, column visibility settings,
                      and UI configuration. Duration 12 months.
                    </span>
                  </li>
                  <li className="ck-list-item">
                    <span>
                      <strong>Language / locale preference:</strong> Remembers
                      your language or regional format preference if set.
                      Duration 12 months.
                    </span>
                  </li>
                  <li className="ck-list-item">
                    <span>
                      <strong>Cookie consent record:</strong> Records whether
                      you have acknowledged this Cookie Policy, so we do not
                      display the notice on every visit. Duration 12 months.
                    </span>
                  </li>
                </ul>
              </div>

              {/* 2.3 */}
              <div className="ck-sub-section">
                <h3 className="ck-h3">2.3 Analytics Cookies</h3>
                <p className="">
                  As of May 2026, ImmunoTrack does not use analytics cookies on
                  immunotrack.ai or the clinician portal. No Google Analytics,
                  Google Tag Manager, Mixpanel, Amplitude, or equivalent tool is
                  installed.
                </p>
                <p>
                  If analytics are added in a future release, this policy will
                  be updated at least 14 days in advance of the change and the
                  Cookie Policy page at immunotrack.ai/cookies will be updated
                  accordingly.
                </p>
              </div>

              {/* 2.4 */}
              <div className="ck-sub-section">
                <h3 className="ck-h3">2.4 Advertising Cookies</h3>
                <p className="">
                  ImmunoTrack does not use advertising cookies of any kind. No
                  retargeting pixels, ad network trackers, Facebook Pixel,
                  Google Ads tags, or similar technologies are present on
                  immunotrack.ai or the clinician portal. ImmunoTrack products
                  are ad-free. ImmunoTrack does not sell your data to
                  advertisers and does not allow advertisers to target you
                  through this platform.
                </p>
              </div>
            </div>
          </article>

          {/* ── Section 3 ── */}
          <article id="section-3" className="ck-section-card">
            <div className="ck-section-header">
              <div className="ck-section-num" aria-hidden="true">
                3
              </div>
              <h2 className="ck-section-title">Cookies We Do Not Use</h2>
            </div>
            <div className="ck-section-body">
              <p className="ck-p">
                For clarity, ImmunoTrack does not use any of the following on
                immunotrack.ai or the clinician portal:
              </p>
              <div className="ck-exclusion-grid" role="list">
                <div className="ck-exclusion-item" role="listitem">
                  <Image
                    src={settingsIcon}
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="ck-svg-icon ck-svg-red"
                  />
                  Google Analytics or Google Tag Manager
                </div>
                <div className="ck-exclusion-item" role="listitem">
                  <Image
                    src={settingsIcon}
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="ck-svg-icon ck-svg-red"
                  />
                  Facebook Pixel or Meta advertising tags
                </div>
                <div className="ck-exclusion-item" role="listitem">
                  <Image
                    src={settingsIcon}
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="ck-svg-icon ck-svg-red"
                  />
                  LinkedIn Insight Tag or any social media tracking
                </div>
                <div className="ck-exclusion-item" role="listitem">
                  <Image
                    src={settingsIcon}
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="ck-svg-icon ck-svg-red"
                  />
                  Third-party behavioral advertising or retargeting cookies
                </div>
                <div className="ck-exclusion-item" role="listitem">
                  <Image
                    src={settingsIcon}
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="ck-svg-icon ck-svg-red"
                  />
                  Cross-site tracking technologies
                </div>
                <div className="ck-exclusion-item" role="listitem">
                  <Image
                    src={settingsIcon}
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="ck-svg-icon ck-svg-red"
                  />
                  Heat mapping or session recording tools (e.g. Hotjar,
                  FullStory)
                </div>
                <div className="ck-exclusion-item" role="listitem">
                  <Image
                    src={settingsIcon}
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="ck-svg-icon ck-svg-red"
                  />
                  Any cookie that shares your data with advertisers or data
                  brokers
                </div>
              </div>
              <p>
                If any of these are added in a future release, this Cookie
                Policy will be updated with at least 14 days advance notice and
                clinicians and patients will be notified through the platform.
              </p>
            </div>
          </article>

          {/* ── Section 4 ── */}
          <article id="section-4" className="ck-section-card">
            <div className="ck-section-header">
              <div className="ck-section-num" aria-hidden="true">
                4
              </div>
              <h2 className="ck-section-title">Health Data &amp; Cookies</h2>
            </div>
            <div className="ck-section-body">
              <p className="ck-p">
                ImmunoTrack is a HIPAA-covered platform. We handle Protected
                Health Information (PHI) with strict controls.
              </p>

              <div className="ck-health-highlight" role="note">
                <p className="ck-health-text">
                  <strong>No PHI in cookies</strong>
                  We do not store any Protected Health Information in cookies or
                  browser storage. Patient symptom logs, medication records,
                  flare risk scores, and AI insights are stored exclusively on
                  HIPAA-eligible encrypted AWS servers.
                </p>
              </div>

              <div className="ck-health-highlight" role="note">
                <p className="ck-health-text">
                  <strong>No PHI in analytics</strong>
                  If analytics are added in a future release, they will be
                  configured to exclude all PHI and will operate only on
                  de-identified aggregate data.
                </p>
              </div>
              <div className="ck-health-highlight" role="note">
                <p className="ck-health-text">
                  <strong>AWS infrastructure</strong>
                  The ImmunoTrack platform is hosted on HIPAA-eligible AWS
                  infrastructure. An AWS Business Associate Agreement (BAA) is
                  in place. Cloudflare acts as a CDN and DDoS protection layer
                  for the public website only — no PHI passes through
                  Cloudflare.
                </p>
              </div>
              <div className="ck-health-highlight" role="note">
                <p className="ck-health-text">
                  <strong>JWT authentication</strong>
                  Session management uses JSON Web Tokens (JWT) issued by AWS
                  Cognito. These tokens are stored in memory or secure HttpOnly
                  cookies, not in localStorage, consistent with our Privacy
                  Policy.
                </p>
              </div>
            </div>
          </article>

          {/* ── Section 5 ── */}
          <article id="section-5" className="ck-section-card">
            <div className="ck-section-header">
              <div className="ck-section-num" aria-hidden="true">
                5
              </div>
              <h2 className="ck-section-title">Managing Cookies</h2>
            </div>
            <div className="ck-section-body">
              <div className="ck-sub-section">
                <p className="ck-h3">5.1 Browser controls</p>
                <p>
                  You can control, disable, or delete cookies through your
                  browser settings. Note that disabling strictly necessary
                  cookies will prevent you from logging in to the ImmunoTrack
                  clinician portal or using authenticated features on the
                  website.
                </p>
                <p>Most browsers allow you to:</p>
                <ul className="ck-list" role="list">
                  <li className="ck-list-item">
                    <span>View which cookies are stored on your device</span>
                  </li>
                  <li className="ck-list-item">
                    <span>Delete all or specific cookies</span>
                  </li>
                  <li className="ck-list-item">
                    <span>Block cookies from specific sites</span>
                  </li>
                  <li className="ck-list-item">
                    <span>
                      Set your browser to notify you when a cookie is being set
                    </span>
                  </li>
                </ul>
                <p className="">
                  Browser-specific instructions are available at the
                  browser&apos;s support pages. For general information about
                  cookies and how to manage them, visit{" "}
                  <a
                    href="https://www.allaboutcookies.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ck-link"
                  >
                    www.allaboutcookies.org
                  </a>
                  .
                </p>
              </div>
              <div className="ck-sub-section">
                <p className="ck-h3">5.2 Cookie notice on immunotrack.ai</p>
                <p>
                  On your first visit to immunotrack.ai, a cookie notice will be
                  displayed explaining that the site uses strictly necessary and
                  functional cookies only. Because we do not use advertising or
                  analytics cookies, we do not require opt-in consent for our
                  current cookie usage under most jurisdictions. The notice
                  records your acknowledgment.
                </p>
                <p>
                  If ImmunoTrack adds analytics or advertising cookies in a
                  future release, the notice will be updated to include an
                  explicit opt-in mechanism before those cookies are set.
                </p>
              </div>
              <div className="ck-sub-section">
                <p className="ck-h3">5.3 Do Not Track</p>
                <p>
                  Some browsers transmit a &quot;Do Not Track&quot; (DNT)
                  signal. Because ImmunoTrack does not use behavioral tracking
                  or advertising technologies, no additional action is taken in
                  response to a DNT signal — the site already operates at that
                  standard.
                </p>
              </div>
            </div>
          </article>

          {/* ── Section 6 ── */}
          <article id="section-6" className="ck-section-card">
            <div className="ck-section-header">
              <div className="ck-section-num" aria-hidden="true">
                6
              </div>
              <h2 className="ck-section-title">Third-Party Services</h2>
            </div>
            <div className="ck-section-body">
              <p className="ck-p">
                The following third-party services may interact with your
                browser as part of the ImmunoTrack platform. These are
                infrastructure and security providers only — not advertising or
                analytics providers.
              </p>

              <div className="ck-providers">
                <div className="ck-provider-card">
                  <div className="ck-provider-icon">
                    <Image
                      src={cloudSyncIcon}
                      alt=""
                      width={22}
                      height={21}
                      aria-hidden="true"
                      className="ck-svg-icon ck-svg-teal"
                    />
                  </div>
                  <div>
                    <p className="ck-provider-name">AWS Cognito</p>
                    <p className="ck-provider-desc">
                      Purpose:Authentication and session management. Issues JWT
                      tokens for clinician and patient login.
                    </p>
                    <p className="ck-provider-desc">
                      Data set: Authentication tokens stored in HttpOnly cookies
                      or memory. No advertising data collected.
                    </p>
                  </div>
                </div>

                <div className="ck-provider-card">
                  <div className="ck-provider-icon">
                    <Image
                      src={realTimeIcon}
                      alt=""
                      width={22}
                      height={22}
                      aria-hidden="true"
                      className="ck-svg-icon ck-svg-teal"
                    />
                  </div>
                  <div>
                    <p className="ck-provider-name">Cloudflare</p>
                    <p className="ck-provider-desc">
                      Purpose: CDN, DDoS protection, and SSL termination for
                      immunotrack.ai. Cloudflare does not process PHI.
                    </p>
                    <p className="ck-provider-desc">
                      Data set: __cf_bm cookie (bot management, 30 minute
                      duration). No advertising cookies.
                    </p>
                  </div>
                </div>

                <div className="ck-provider-card">
                  <div className="ck-provider-icon">
                    <Image
                      src={trendingIcon}
                      alt=""
                      width={22}
                      height={22}
                      aria-hidden="true"
                      className="ck-svg-icon ck-svg-teal"
                    />
                  </div>
                  <div>
                    <p className="ck-provider-name">Google Fonts</p>
                    <p className="ck-provider-desc">
                      Purpose: Font delivery for immunotrack.ai. No tracking.
                    </p>
                    <p className="ck-provider-desc">
                      Data set: No cookies set. Fonts are loaded via CSS. Google
                      may log the request IP per their standard infrastructure
                      logging.
                    </p>
                  </div>
                </div>
                <p>
                  No other third-party services have access to immunotrack.ai
                  visitor data or the clinician portal at this time. If
                  integrations are added in future releases, this section will
                  be updated.
                </p>
              </div>
            </div>
          </article>

          {/* ── Section 7 ── */}
          <article id="section-7" className="ck-section-card">
            <div className="ck-section-header">
              <div className="ck-section-num" aria-hidden="true">
                7
              </div>
              <h2 className="ck-section-title">Children&apos;s Privacy</h2>
            </div>
            <div className="ck-section-body">
              <p className="ck-p">
                The ImmunoTrack website and clinician portal are not directed at
                children under 13. ImmunoTrack does not knowingly collect
                personal information from children under 13 through its website.
                The patient mobile app may be used by minors with parental
                consent where permitted — the app does not use browser cookies.
              </p>
              <p className="ck-p">
                If you believe a child under 13 has submitted personal
                information through the website, please contact us at
                privacy@immunotrack.ai and we will delete it promptly.
              </p>
            </div>
          </article>

          {/* ── Section 8 ── */}
          <article id="section-8" className="ck-section-card">
            <div className="ck-section-header">
              <div className="ck-section-num" aria-hidden="true">
                8
              </div>
              <h2 className="ck-section-title">
                Changes to This Cookie Policy
              </h2>
            </div>
            <div className="ck-section-body">
              <p className="ck-p">
                We may update this Cookie Policy from time to time. When we do:
              </p>
              <ul className="ck-list" role="list">
                <li className="ck-list-item">
                  <span>
                    We will update the effective date at the top of this page
                  </span>
                </li>
                <li className="ck-list-item">
                  <span>
                    We will post the updated policy at immunotrack.ai/cookies
                  </span>
                </li>
                <li className="ck-list-item">
                  <span>
                    For material changes — particularly the addition of
                    analytics or advertising cookies — we will provide at least
                    14 days advance notice through the platform before the
                    change takes effect
                  </span>
                </li>
                <li className="ck-list-item">
                  <span>
                    Clinicians will be notified via the clinician portal
                  </span>
                </li>
              </ul>
              <p>
                Your continued use of immunotrack.ai or the clinician portal
                after changes take effect constitutes acknowledgment of the
                updated Cookie Policy.
              </p>
            </div>
          </article>

          {/* ── Section 9 — reusable ContactSection component ── */}
          <div id="section-9">
            <ContactSection
             
              title="Contact Us"
              subtitle="If you have questions about this Cookie Policy or how ImmunoTrack uses cookies, please contact us:"
              cards={[
                {
                  id: "contact-privacy-email",
                  label: "Privacy and data questions",
                  value: "privacy@immunotrack.ai",
                  // hint: "HIPAA · Cookie Policy · Data Rights",
                  href: "mailto:privacy@immunotrack.ai",
                  iconVariant: "cyan",
                  icon: profileIcon,
                },
                {
                  id: "contact-support-email",
                  label: "General support",
                  value: "support@immunotrack.ai",
                  // hint: "Platform · Billing · Technical",
                  href: "mailto:support@immunotrack.ai",
                  iconVariant: "cyan",
                  icon: insightsIcon,
                },
              ]}
              footerItems={[
                {
                  icon: trackingIcon,
                  iconVariant: "cyan" as const,
                  label: "Mailing Address",
                  text: "ImmunoTrack Inc. / Aman Medical Consulting LLC, Atlanta, Georgia 30328",
                },
                {
                  icon: alertIcon,
                  iconVariant: "cyan" as const,
                  label: "HIPAA Complaints",
                  text: (
                    <>
                      You may also file a complaint with the U.S. Department of Health and Human
                      Services Office for Civil Rights at{" "}
                      <a
                        href="https://www.hhs.gov/ocr/privacy/hipaa/complaints/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cs-footer-link"
                      >
                        hhs.gov/ocr/privacy/hipaa/complaints/
                      </a>
                    </>
                  ),
                },
              ]}
            />
          </div>



          {/* ── Summary Banner ── */}
          <article id="section-10" className="ck-section-card">
            <div className="ck-section-header">
              <h2 className="ck-section-title">Version History</h2>
            </div>
            <div className="ck-section-body">
              <ul className="ck-list" role="list">
                <li className="ck-list-item">
                  <span>
                    <strong>Version 1.0 — May 1, 2026:</strong> Initial version.
                    Covers immunotrack.ai public website and clinician portal.
                    No analytics or advertising cookies. Cloudflare and AWS
                    Cognito infrastructure cookies documented.
                  </span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
