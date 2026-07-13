import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import "@/assets/styles/contact.css";

export const metadata: Metadata = {
  title:
    "Contact Us — ImmunoTrack",
  description:
    "Get in touch with ImmunoTrack. Contact us for privacy questions, general support, or mailing address information.",
};

export default function Contact() {
  return (
    <main className="ct-page">
      {/* ── HERO SECTION ──────────────────────────────────────── */}
      <section className="ct-hero" aria-label="Contact Hero">
        <div className="ct-hero-container">
          <div className="ct-hero-content">
            <span className="ct-hero-tag">Contact Us</span>
            <h1 className="ct-hero-title">
              We&apos;re here to help
            </h1>
            <p className="ct-hero-subtitle">
              Reach out to ImmunoTrack for privacy inquiries, general support, or any questions about our services. We&apos;re committed to responding promptly.
            </p>
          </div>
          <div className="ct-hero-image">
            <Image
              src="/images/contact.jpeg"
              alt="ImmunoTrack support team"
              width={600}
              height={400}
              priority
              className="ct-hero-img"
            />
          </div>
        </div>
      </section>

      {/* ── CONTACT DETAILS SECTION ────────────────────────────── */}
      <section className="ct-contact" id="contact-info" aria-label="Contact Information">
        <div className="ct-contact-container">
          <div className="ct-contact-header">
            <h2 className="ct-contact-title">Contact Details</h2>
            <p className="ct-contact-subtitle">
              Find the right contact for your inquiry
            </p>
          </div>
          
          <Reveal as="div" className="ct-details-grid">
            <div className="ct-detail-card">
              <h3 className="ct-detail-title">Privacy Questions</h3>
              <p className="ct-detail-value">
                <a href="mailto:privacy@immunotrack.ai" className="ct-detail-link">
                  privacy@immunotrack.ai
                </a>
              </p>
            </div>

            <div className="ct-detail-card">
              <h3 className="ct-detail-title">General Support</h3>
              <p className="ct-detail-value">
                <a href="mailto:support@immunotrack.ai" className="ct-detail-link">
                  support@immunotrack.ai
                </a>
              </p>
            </div>

            <div className="ct-detail-card">
              <h3 className="ct-detail-title">Mailing Address</h3>
              <p className="ct-detail-value">
                ImmunoTrack Inc. · Aman Medical Consulting LLC · Atlanta, Georgia
              </p>
            </div>

            <div className="ct-detail-card">
              <h3 className="ct-detail-title">Response Time</h3>
              <p className="ct-detail-value">
                Within 30 days for privacy requests; within 1 business day for general support
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}