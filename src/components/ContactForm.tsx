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

const SPECIALTY_OPTIONS = [
  "Allergy & Immunology",
  "Pediatric Allergy",
  "ENT / Otolaryngology",
  "Sleep Medicine",
  "Dermatology",
  "Asthma & Pulmonology",
  "General Pediatrics",
  "Internal Medicine",
  "Family Medicine / Primary Care",
  "Other",
];

const INSTITUTION_TYPE_OPTIONS = [
  "Private Practice — Single Clinician",
  "Private Practice — Group / Multi-Clinician",
  "Hospital / Health System",
  "Academic Medical Center",
  "Federally Qualified Health Center (FQHC)",
  "Other",
];

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    practice: "",
    email: "",
    phone: "",
    specialty: "",
    otherSpecialty: "",
    institutionType: "",
    otherInstitutionType: "",
    state: "",
    message: "",
    website_hp: "", // Honeypot field
  });

  const [fieldErrors, setFieldErrors] = useState<FormErrors>({});
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

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Full name is required.";
    } else if (formData.name.trim().length < 3) {
      errors.name = "Full name must be at least 3 characters.";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address (e.g. name@example.com).";
    }

    // Phone validation (optional field, validate format if filled)
    if (formData.phone.trim() && !/^[\d\s()+-]{7,20}$/.test(formData.phone.trim())) {
      errors.phone = "Please enter a valid phone number.";
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message or questions is required.";
    } else if (formData.message.trim().length < 5) {
      errors.message = "Message must be at least 5 characters.";
    }

    return errors;
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for field as user types
    if (fieldErrors[field as keyof FormErrors]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleBlur = (field: keyof FormErrors) => {
    const errors = validateForm();
    if (errors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: errors[field] }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      setStatus({
        type: "error",
        message: "Please fix the errors below before submitting your request.",
      });
      return;
    }

    setFieldErrors({});
    setSubmitting(true);

    try {
      const effectiveSpecialty =
        formData.specialty === "Other" && formData.otherSpecialty.trim()
          ? `Other: ${formData.otherSpecialty.trim()}`
          : formData.specialty;

      const effectiveInstitution =
        formData.institutionType === "Other" && formData.otherInstitutionType.trim()
          ? `Other: ${formData.otherInstitutionType.trim()}`
          : formData.institutionType;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          category: effectiveSpecialty ? `Specialty: ${effectiveSpecialty}` : undefined,
          subject: formData.practice ? `Practice: ${formData.practice} (${formData.state})` : undefined,
          message: [
            formData.practice ? `Practice: ${formData.practice}` : null,
            formData.phone ? `Phone: ${formData.phone}` : null,
            effectiveSpecialty ? `Specialty: ${effectiveSpecialty}` : null,
            effectiveInstitution ? `Institution / Practice Type: ${effectiveInstitution}` : null,
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
        otherSpecialty: "",
        institutionType: "",
        otherInstitutionType: "",
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
            className={`cs-form-status ${
              status.type === "success" ? "cs-form-status-success" : "cs-form-status-error"
            }`}
            role="alert"
          >
            {status.type === "success" ? "✓" : "⚠"} {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="cs-form-body" noValidate>
          {/* Honeypot field for spam prevention */}
          <div className="cs-form-hp" aria-hidden="true">
            <label htmlFor="contact-hp">Leave this field blank</label>
            <input
              type="text"
              id="contact-hp"
              name="website_hp"
              value={formData.website_hp}
              onChange={(e) => handleInputChange("website_hp", e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="cs-form-row">
            <div className="cs-form-group">
              <label htmlFor="contact-name" className="cs-form-label">
                Full name <span className="cs-form-req">*</span>
              </label>
              <input
                type="text"
                id="contact-name"
                className={`cs-form-input ${fieldErrors.name ? "cs-form-input-error" : ""}`}
                placeholder="Dr. Jane Smith"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                onBlur={() => handleBlur("name")}
                aria-invalid={!!fieldErrors.name}
              />
              {fieldErrors.name && (
                <span className="cs-form-field-error" role="alert">
                  ⚠ {fieldErrors.name}
                </span>
              )}
            </div>

            <div className="cs-form-group">
              <label htmlFor="contact-practice" className="cs-form-label">
                Practice / Clinic name
              </label>
              <input
                type="text"
                id="contact-practice"
                className="cs-form-input"
                placeholder="Metropolitan Allergy Clinic"
                value={formData.practice}
                onChange={(e) => handleInputChange("practice", e.target.value)}
              />
            </div>
          </div>

          <div className="cs-form-row">
            <div className="cs-form-group">
              <label htmlFor="contact-email" className="cs-form-label">
                Email address <span className="cs-form-req">*</span>
              </label>
              <input
                type="email"
                id="contact-email"
                className={`cs-form-input ${fieldErrors.email ? "cs-form-input-error" : ""}`}
                placeholder="jsmith@clinic.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                aria-invalid={!!fieldErrors.email}
              />
              {fieldErrors.email && (
                <span className="cs-form-field-error" role="alert">
                  ⚠ {fieldErrors.email}
                </span>
              )}
            </div>

            <div className="cs-form-group">
              <label htmlFor="contact-phone" className="cs-form-label">
                Phone number
              </label>
              <input
                type="tel"
                id="contact-phone"
                className={`cs-form-input ${fieldErrors.phone ? "cs-form-input-error" : ""}`}
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                onBlur={() => handleBlur("phone")}
                aria-invalid={!!fieldErrors.phone}
              />
              {fieldErrors.phone && (
                <span className="cs-form-field-error" role="alert">
                  ⚠ {fieldErrors.phone}
                </span>
              )}
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
                onChange={(e) => handleInputChange("specialty", e.target.value)}
              >
                <option value="">Select specialty</option>
                {SPECIALTY_OPTIONS.map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>

            <div className="cs-form-group">
              <label htmlFor="contact-institution" className="cs-form-label">
                Institution / Practice Type
              </label>
              <select
                id="contact-institution"
                className="cs-form-select"
                value={formData.institutionType}
                onChange={(e) => handleInputChange("institutionType", e.target.value)}
              >
                <option value="">Select institution / practice type</option>
                {INSTITUTION_TYPE_OPTIONS.map((inst) => (
                  <option key={inst} value={inst}>
                    {inst}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {(formData.specialty === "Other" || formData.institutionType === "Other") && (
            <div className="cs-form-row">
              {formData.specialty === "Other" && (
                <div className="cs-form-group">
                  <label htmlFor="contact-other-specialty" className="cs-form-label">
                    Specify Specialty
                  </label>
                  <input
                    type="text"
                    id="contact-other-specialty"
                    className="cs-form-input"
                    placeholder="e.g. Immunodermatology"
                    value={formData.otherSpecialty}
                    onChange={(e) => handleInputChange("otherSpecialty", e.target.value)}
                  />
                </div>
              )}

              {formData.institutionType === "Other" && (
                <div className="cs-form-group">
                  <label htmlFor="contact-other-institution" className="cs-form-label">
                    Specify Institution Type
                  </label>
                  <input
                    type="text"
                    id="contact-other-institution"
                    className="cs-form-input"
                    placeholder="e.g. Multi-specialty Clinic Network"
                    value={formData.otherInstitutionType}
                    onChange={(e) => handleInputChange("otherInstitutionType", e.target.value)}
                  />
                </div>
              )}
            </div>
          )}

          <div className="cs-form-row">
            <div className="cs-form-group">
              <label htmlFor="contact-state" className="cs-form-label">
                State
              </label>
              <select
                id="contact-state"
                className="cs-form-select"
                value={formData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
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
              className={`cs-form-textarea ${fieldErrors.message ? "cs-form-textarea-error" : ""}`}
              placeholder="Tell us about your patient panel size, EHR system, or anything else we should know..."
              rows={4}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              onBlur={() => handleBlur("message")}
              aria-invalid={!!fieldErrors.message}
            />
            {fieldErrors.message && (
              <span className="cs-form-field-error" role="alert">
                ⚠ {fieldErrors.message}
              </span>
            )}
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
