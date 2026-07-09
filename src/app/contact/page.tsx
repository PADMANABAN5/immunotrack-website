import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "@/assets/styles/contact.css";

export const metadata: Metadata = {
  title:
    "Request Access — ImmunoTrack for Clinicians ",
  description:
    "Request access to ImmunoTrack for your allergy or immunology practice. We respond within 1 business day.",
};

export default function Contact() {
  return (
    <main className="ct-page">
      {/* ── HERO SECTION ──────────────────────────────────────── */}
      <section className="ct-hero" aria-label="Contact Hero">
        <div className="ct-hero-container">
          <div className="ct-hero-content">
            <span className="ct-hero-tag">Request Access</span>
            <h1 className="ct-hero-title">
              Ready to transform your practice?
            </h1>
            <p className="ct-hero-subtitle">
              Join leading allergy and immunology practices using ImmunoTrack to monitor patients remotely, qualify for RTM billing, and improve outcomes. We'll get back to you within 1 business day.
            </p>
            <div className="ct-hero-actions">
              <a href="#contact-form" className="ct-btn ct-btn-cyan">
                Get Started
              </a>
            </div>
          </div>
          <div className="ct-hero-image">
            <Image
              src="/images/contact.jpeg"
              alt="Healthcare professional using ImmunoTrack"
              width={600}
              height={500}
              priority
              className="ct-hero-img"
            />
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM SECTION ──────────────────────────────── */}
      <section className="ct-contact" id="contact-form" aria-label="Contact Form">
        <div className="ct-contact-container">
          <div className="ct-contact-header">
            <h2 className="ct-contact-title">Tell us about your practice</h2>
            <p className="ct-contact-subtitle">
              Fill out the form below and our team will reach out to discuss how ImmunoTrack can benefit your practice.
            </p>
          </div>
          
          <form className="ct-form">
            <div className="ct-form-grid">
              <div className="ct-form-group">
                <label htmlFor="name" className="ct-form-label">Name</label>
                <input type="text" id="name" name="name" className="ct-form-input" required />
              </div>
              <div className="ct-form-group">
                <label htmlFor="email" className="ct-form-label">Email</label>
                <input type="email" id="email" name="email" className="ct-form-input" required />
              </div>
              <div className="ct-form-group">
                <label htmlFor="phone" className="ct-form-label">Phone</label>
                <input type="tel" id="phone" name="phone" className="ct-form-input" />
              </div>
              <div className="ct-form-group">
                <label htmlFor="practice" className="ct-form-label">Practice Name</label>
                <input type="text" id="practice" name="practice" className="ct-form-input" required />
              </div>
              <div className="ct-form-group ct-form-group-full">
                <label htmlFor="message" className="ct-form-label">Tell us about your practice</label>
                <textarea id="message" name="message" rows={4} className="ct-form-textarea" required></textarea>
              </div>
            </div>
            <button type="submit" className="ct-btn ct-btn-cyan">
              Request Access
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}