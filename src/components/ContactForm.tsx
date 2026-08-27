"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import Link from "next/link";

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia",
  "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

export default function ContactForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    practice: "",
    email: "",
    phone: "",
    specialty: "",
    state: "",
    message: "",
    website_hp: "", // Honeypot field
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    if (status) {
      containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [status]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          category: formData.specialty ? `Specialty: ${formData.specialty}` : undefined,
          subject: formData.practice ? `Practice: ${formData.practice} (${formData.state})` : undefined,
          message: [
            formData.practice ? `Practice: ${formData.practice}` : null,
            formData.phone ? `Phone: ${formData.phone}` : null,
            formData.specialty ? `Specialty: ${formData.specialty}` : null,
            formData.state ? `State: ${formData.state}` : null,
            formData.message ? `Message: ${formData.message}` : null,
          ].filter(Boolean).join("\n"),
          website_hp: formData.website_hp,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setStatus({
        type: "success",
        message: "Thank you for reaching out! Your request has been submitted successfully. We will be in touch within one business day.",
      });

      // Reset form
      setFormData({
        name: "",
        practice: "",
        email: "",
        phone: "",
        specialty: "",
        state: "",
        message: "",
        website_hp: "",
      });
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setStatus({
        type: "error",
        message: errorMsg,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="cs-form-container" ref={containerRef}>
      <div className="cs-form-card">
        <div className="cs-form-header">
          <h3 className="cs-form-title">Get started with ImmunoTrack</h3>
          <p className="cs-form-subtitle">
            Tell us about your practice and we will be in touch within one business day to get you set up.
          </p>
        </div>

        {status && (
          <div
            className={`cs-form-alert ${
              status.type === "success"
                ? "cs-form-alert-success"
                : "cs-form-alert-error"
            }`}
            role="alert"
          >
            <span>{status.type === "success" ? "✓" : "⚠️"}</span>
            <span>{status.message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* Honeypot field for bot protection */}
          <div className="cs-form-hp" aria-hidden="true">
            <input
              type="text"
              name="website_hp"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website_hp}
              onChange={(e) =>
                setFormData({ ...formData, website_hp: e.target.value })
              }
            />
          </div>

          <div className="cs-form-row">
            <div className="cs-form-group">
              <label htmlFor="contact-name" className="cs-form-label">
                Full name <span className="cs-form-req">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                className="cs-form-input"
                placeholder="Dr. Meera Patel"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="cs-form-group">
              <label htmlFor="contact-practice" className="cs-form-label">
                Practice / clinic name
              </label>
              <input
                id="contact-practice"
                type="text"
                className="cs-form-input"
                placeholder="City Allergy Clinic"
                value={formData.practice}
                onChange={(e) =>
                  setFormData({ ...formData, practice: e.target.value })
                }
              />
            </div>
          </div>

          <div className="cs-form-row">
            <div className="cs-form-group">
              <label htmlFor="contact-email" className="cs-form-label">
                Email address <span className="cs-form-req">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                className="cs-form-input"
                placeholder="mpatel@cityallergy.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="cs-form-group">
              <label htmlFor="contact-phone" className="cs-form-label">
                Phone number
              </label>
              <input
                id="contact-phone"
                type="tel"
                className="cs-form-input"
                placeholder="(404) 555-0100"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
          </div>

          <div className="cs-form-row">
            <div className="cs-form-group">
              <label htmlFor="contact-specialty" className="cs-form-label">
                Specialty
              </label>
              <select
                id="contact-specialty"
                className="cs-form-select"
                value={formData.specialty}
                onChange={(e) =>
                  setFormData({ ...formData, specialty: e.target.value })
                }
              >
                <option value="">Select specialty</option>
                <option value="Allergy & Immunology">Allergy &amp; Immunology</option>
                <option value="Pediatric Allergy">Pediatric Allergy</option>
                <option value="Asthma & Pulmonology">Asthma &amp; Pulmonology</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="cs-form-group">
              <label htmlFor="contact-state" className="cs-form-label">
                State
              </label>
              <select
                id="contact-state"
                className="cs-form-select"
                value={formData.state}
                onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })
                }
              >
                <option value="">Select state</option>
                {US_STATES.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="cs-form-group">
            <label htmlFor="contact-message" className="cs-form-label">
              Message or questions <span className="cs-form-req">*</span>
            </label>
            <textarea
              id="contact-message"
              className="cs-form-textarea"
              placeholder="Tell us about your patient panel size, EHR system, or anything else we should know..."
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="cs-form-btn pui-focus"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit request"}
          </button>

          <p className="cs-form-disclaimer">
            By submitting this form you agree to be contacted by ImmunoTrack about your request. We will never share your information with third parties. See our{" "}
            <Link href="/privacy" className="cs-form-link">
              Privacy Policy
            </Link>.
          </p>
        </form>
      </div>
    </div>
  );
}
