"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import "@/assets/styles/support.css";



/* ─────────────────────────────────────────────────────────────
   FAQ ACCORDION — 8 items, exact copy from v2 spec
   RTM language in Q2 is final — do NOT change to RPM.
   ───────────────────────────────────────────────────────────── */
const faqItems = [
  {
    id: "faq-1",
    question: "How do I log my daily symptoms?",
    answer:
      "Tap the Log tab in the bottom navigation bar. You will be asked to rate your respiratory, nasal, and skin symptoms on a scale of 0 to 10. You can also record your medication use, peak flow reading, and any triggers you noticed. Try to log every day — each entry counts toward your monthly monitoring record.",
  },
  {
    id: "faq-2",
    question: "Why does it matter how many days I log?",
    answer:
      "If you are enrolled in the Remote Therapeutic Monitoring (RTM) program, your clinician uses your daily logs to monitor your health and may be able to bill your insurance for that care. Logging on at least 16 days in a 30-day period helps ensure your monitoring qualifies. The progress bar on your Home screen shows how many days you have logged this period.",
  },
  {
    id: "faq-3",
    question: "How do I add or update my medications?",
    answer:
      "Go to the Medications tab. Tap Add medication, choose the medication category and name, enter your dose and frequency as prescribed by your clinician, and set your preferred reminder times. If your prescription changes, tap the medication name to edit it.",
  },
  {
    id: "faq-4",
    question: "What are the AI Insights on my home screen?",
    answer:
      "AI Insights are patterns detected from your symptom logs, environmental data, and medication adherence over time. They may highlight a likely trigger (such as high pollen days worsening your breathing) or show a trend in your symptoms. These insights are informational only and are not medical advice. Always follow your clinician’s guidance.",
  },
  {
    id: "faq-5",
    question: "Is my health data private and secure?",
    answer:
      "Yes. ImmunoTrack is built to HIPAA standards. Your health information is encrypted both in transit and at rest. Only your care team can access your clinical data. We do not sell your personal health information to third parties. For full details, see our Privacy Policy in the Profile section.",
  },
  {
    id: "faq-6",
    question: "I forgot my password. How do I reset it?",
    answer:
      "On the sign-in screen, tap Forgot password? Enter the email address associated with your account and we will send you a link to reset your password. The link expires after 24 hours. If you do not receive the email, check your spam folder or contact support at support@immunotrack.ai.",
  },
  {
    id: "faq-7",
    question: "Can I turn off notifications?",
    answer:
      "Yes. Go to Profile and tap Notification settings. You can individually toggle medication reminders, daily logging reminders, and AI insight alerts on or off. You can also adjust the times you receive reminders. We recommend keeping at least daily logging reminders on so you do not miss your monitoring days.",
  },
  {
    id: "faq-8",
    question: "How do I share my data with my clinician?",
    answer:
      "Your clinician already has secure access to your data through their ImmunoTrack dashboard. You do not need to send anything manually. Your symptom logs, medication records, and AI insights are updated in real time and available to your care team whenever they review your case.",
  },
];

/* ─────────────────────────────────────────────────────────────
   ACCORDION ITEM COMPONENT
   ───────────────────────────────────────────────────────────── */
function AccordionItem({
  item,
}: {
  item: { id: string; question: string; answer: string };
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`sp-accordion-item${open ? " open" : ""}`}
      id={item.id}
    >
      <button
        className="sp-accordion-btn"
        aria-expanded={open}
        aria-controls={`${item.id}-body`}
        onClick={() => setOpen(!open)}
      >
        <span className="sp-accordion-question">{item.question}</span>
        <span className="sp-accordion-chevron" aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div
          className="sp-accordion-body"
          id={`${item.id}-body`}
          role="region"
          aria-label={item.question}
        >
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION COMPONENT
   ───────────────────────────────────────────────────────────── */
export default function SupportSection() {
  return (
    <section id="support" className="sp-page" aria-label="Help & Support">

      {/* ════════════════════════════════════════════════════
          §5.1  HERO / PAGE HEADER
          ════════════════════════════════════════════════════ */}
      <section className="sp-hero" aria-label="Help and Support hero">
        <div className="sp-hero-container">
          <div className="sp-hero-content">
            <p className="sp-hero-label">HELP &amp; SUPPORT</p>
            <h1 className="sp-hero-title">How can we help?</h1>
            <p className="sp-hero-subtitle">
              Our support team is here to help with account access, onboarding, technical support, and general questions. Reach out and we&apos;ll get back to you as soon as possible.
            </p>
            <div className="sp-hero-actions">
              <Link href="/contact" className="sp-btn sp-btn-cyan pui-btn pui-focus">
                Contact Support
              </Link>
            </div>
            <p className="sp-hero-sla">
              ⓘ We typically respond within 1 business day.
            </p>
          </div>
          <div className="sp-hero-image">
            <Image
              src="/images/help-and-support.jpeg"
              alt="Help and support team"
              width={600}
              height={322}
              priority
              className="sp-hero-img"
            />
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          §5.2  CONTACT US
          One channel only in v1.1: email at support@immunotrack.ai
          SLA: "Our support team typically responds within one business day."
          Urgent notice: visually distinct, NOT buried in the SLA box.
          ════════════════════════════════════════════════════ */}
      <section className="sp-contact-strip" aria-labelledby="contact-us-title">
        <div className="sp-contact-inner">
          <h2 className="sp-contact-title" id="contact-us-title">
            Contact Us
          </h2>
          <div className="sp-contact-divider" />

          <div className="sp-contact-grid">

            {/* — Email card -------------------------------- */}
            <Reveal className="sp-email-card" id="email-support">
              <div className="sp-email-icon-wrap" aria-hidden="true">
                <svg
                  width="28" height="28" viewBox="0 0 24 24"
                  fill="none" stroke="#2dd6e5"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
              </div>
              <div className="sp-email-body">
                <p className="sp-email-card-label">Email support</p>
                <a
                  href="mailto:support@immunotrack.ai"
                  className="sp-email-address"
                  id="support-email-link"
                >
                  support@immunotrack.ai
                </a>
                {/* SLA — exact approved language from v2 */}
                <p className="sp-sla-text">
                  Our support team typically responds
                 within one business day.
                </p>

              </div>
            </Reveal>
            <Reveal className="sp-email-card" id="urgent-medical-notice" delay={1}>
              <div className="sp-email-icon-wrap" aria-hidden="true">
               <svg
                  width="26" height="26" viewBox="0 0 24 24"
                  fill="none" stroke="#c0392b"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div className="sp-email-body">
                <p className="sp-email-card-label">For urgent medical concerns</p>
                <p className="sp-sla-text">
                 For urgent medical concerns, please contact your clinician
                  directly or call 911.
                </p>

              </div>
            </Reveal>
          </div>{/* /sp-contact-grid */}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          §5.3  FREQUENTLY ASKED QUESTIONS
          8 topics (icon grid) + 8 accordion items — exact v2 copy
          ════════════════════════════════════════════════════ */}
      <section
        className="sp-faq-section"
        aria-labelledby="faq-section-title"
      >
        <div className="sp-section">
          <h2 className="sp-section-title" id="faq-section-title">
            Frequently Asked Questions
          </h2>
          <div className="sp-section-divider" />

          {/* Accordion — 8 questions, exact v2 copy */}
          <div className="sp-accordion-wrap" id="faq-accordion">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          §5.4  LEGAL LINKS — 2-column premium cards
          ════════════════════════════════════════════════════ */}
      <section className="sp-legal-section" aria-labelledby="legal-links-title">
        <div className="sp-legal-inner">
          <p className="sp-legal-eyebrow">LEGAL</p>
          <h2 className="sp-legal-title" id="legal-links-title">
            Your rights &amp; privacy
          </h2>
          <p className="sp-legal-subtitle">
            We are committed to transparency. Review these documents to understand
            how ImmunoTrack works for you.
          </p>

          <div className="sp-legal-cards">

            {/* ── Terms of Service ── */}
            <Link href="/terms" className="sp-legal-card pui-focus" id="terms-link">
              <div className="sp-legal-card-top sp-legal-card-top--cyan">
                <div className="sp-legal-card-icon sp-legal-card-icon--cyan">
                  <svg
                    width="26" height="26" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
              </div>
              <div className="sp-legal-card-body">
                <h3 className="sp-legal-card-title">Terms of Service</h3>
                <p className="sp-legal-card-desc">
                  Your rights and responsibilities when using the ImmunoTrack
                  platform and mobile application.
                </p>
                <span className="sp-legal-card-cta">
                  Read Terms
                  <svg
                    width="14" height="14" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* ── Privacy Policy ── */}
            <Link href="/privacy" className="sp-legal-card pui-focus" id="privacy-link">
              <div className="sp-legal-card-top sp-legal-card-top--navy">
                <div className="sp-legal-card-icon sp-legal-card-icon--navy">
                  <svg
                    width="26" height="26" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
              </div>
              <div className="sp-legal-card-body">
                <h3 className="sp-legal-card-title">Privacy Policy</h3>
                <p className="sp-legal-card-desc">
                  How we collect, protect, and handle your health data in
                  compliance with HIPAA standards.
                </p>
                <span className="sp-legal-card-cta">
                  Read Policy
                  <svg
                    width="14" height="14" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
              </div>
            </Link>

          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          §5.5  PAGE FOOTER — emergency lines + app version
          Visually separate from all other content (§5.6).
          ════════════════════════════════════════════════════ */}
      <section
        className="sp-emergency-footer"
        aria-label="Emergency notice"
        role="note"
        id="emergency-footer"
      >
        <div className="sp-emergency-footer-inner">
          <div className="sp-emergency-footer-icon" aria-hidden="true">
            <svg
              width="22" height="22" viewBox="0 0 24 24"
              fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <div>
            <p className="sp-emergency-line">
              This app is not intended for emergency medical situations.
            </p>
            <p className="sp-emergency-line">
              If you are experiencing a medical emergency,{" "}
              <a href="tel:911" className="sp-emergency-911" id="footer-911-link">
                call 911
              </a>
              .
            </p>
          </div>
        </div>
        <p className="sp-app-version">
          ImmunoTrack v1.1 &middot; &copy; 
        </p>
      </section>

    </section>
  );
}
