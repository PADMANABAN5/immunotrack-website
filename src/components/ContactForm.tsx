"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "General Support",
    subject: "",
    message: "",
    website_hp: "", // Honeypot field
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

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
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit contact form.");
      }

      setStatus({
        type: "success",
        message: "Thank you for reaching out! Your message has been sent successfully. We will get back to you shortly.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        category: "General Support",
        subject: "",
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
    <div className="cs-form-container">
      <div className="cs-form-card">
        <div className="cs-form-header">
          <h3 className="cs-form-title">Send Us a Direct Message</h3>
          <p className="cs-form-subtitle">
            Fill out the form below and our team will respond within 1 business day.
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
                Full Name <span className="cs-form-req">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                className="cs-form-input"
                placeholder="Jane Doe"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="cs-form-group">
              <label htmlFor="contact-email" className="cs-form-label">
                Email Address <span className="cs-form-req">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                className="cs-form-input"
                placeholder="jane@example.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="cs-form-row">
            <div className="cs-form-group">
              <label htmlFor="contact-category" className="cs-form-label">
                Inquiry Topic
              </label>
              <select
                id="contact-category"
                className="cs-form-select"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                <option value="General Support">General Support</option>
                <option value="Privacy & Data Rights">Privacy & Data Rights</option>
                <option value="Clinical Onboarding">Clinical Onboarding</option>
                <option value="Platform / Technical">Platform / Technical</option>
              </select>
            </div>

            <div className="cs-form-group">
              <label htmlFor="contact-subject" className="cs-form-label">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                className="cs-form-input"
                placeholder="Brief summary of your request"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />
            </div>
          </div>

          <div className="cs-form-group">
            <label htmlFor="contact-message" className="cs-form-label">
              Message <span className="cs-form-req">*</span>
            </label>
            <textarea
              id="contact-message"
              className="cs-form-textarea"
              placeholder="How can we help you today?"
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
            {submitting ? "Sending..." : "Send Message →"}
          </button>
        </form>
      </div>
    </div>
  );
}
