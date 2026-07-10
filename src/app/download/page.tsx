import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import "@/assets/styles/download.css";
import alertIcon from "@/assets/icons/noun-alert-8253230.svg";
import { DOWNLOAD_LINKS } from "@/config/download-links";

export const metadata: Metadata = {
  title: "Download the ImmunoTrack App — iOS & Android",
  description:
    "Get the ImmunoTrack patient app on iOS and Android. Log symptoms daily, track medications, and connect securely with your care team.",
};

// Custom App Store Badge SVG Component
function AppStoreBadgeContent() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", textAlign: "left" }}>
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zm3.53-3.257c.837-1.012 1.4-2.42 1.245-3.83-1.207.052-2.662.805-3.532 1.817-.78.888-1.454 2.31-1.271 3.664 1.324.104 2.677-.68 3.558-1.652z" />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
        <span style={{ fontSize: "10px", textTransform: "uppercase", fontWeight: 500, opacity: 0.85 }}>Download on the</span>
        <span style={{ fontSize: "16px", fontWeight: 800, fontFamily: "system-ui, sans-serif" }}>App Store</span>
      </div>
    </div>
  );
}

// Custom Google Play Badge SVG Component
function GooglePlayBadgeContent() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", textAlign: "left" }}>
      <svg viewBox="0 0 512 512" width="22" height="22" fill="currentColor">
        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58-33.3-60.7 60.7 60.7 60.7 58-33.3c15-8.6 24.8-23.7 24.8-40.8s-9.8-32.2-24.8-40.8zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
        <span style={{ fontSize: "10px", textTransform: "uppercase", fontWeight: 500, opacity: 0.85 }}>GET IT ON</span>
        <span style={{ fontSize: "16px", fontWeight: 800, fontFamily: "system-ui, sans-serif" }}>Google Play</span>
      </div>
    </div>
  );
}

/**
 * Renders a store badge as a live link once DOWNLOAD_LINKS provides a URL
 * (see src/config/download-links.ts), and as a disabled, non-interactive
 * badge until then — so this component never needs to change again once
 * ImmunoTrack supplies the go.immunotrack.ai smart link.
 */
function StoreBadge({
  href,
  className,
  label,
  children,
}: {
  href: string | null;
  className: string;
  label: string;
  children: ReactNode;
}) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} pui-focus`}
        aria-label={label}
      >
        {children}
      </a>
    );
  }
  return (
    <span className={className} aria-disabled="true" aria-label={`${label} — coming soon`}>
      {children}
    </span>
  );
}

export default function DownloadPage() {
  return (
    <main className="dl-page">
      {/* ── HERO SECTION ─────────────────────────────────────────── */}
      <section className="dl-hero" aria-label="Get the App Hero">
        <div className="dl-hero-container">
          <div className="dl-hero-content">
            <div className="dl-hero-badge">Download ImmunoTrack</div>
            <h1 className="dl-hero-title">
              Your health.<br />
              In your hands.<br />
              <span>Every day.</span>
            </h1>
            <p className="dl-hero-desc">
              Download the ImmunoTrack app and take control of your health—anytime, anywhere.
            </p>
            <div className="dl-hero-buttons">
              <StoreBadge href={DOWNLOAD_LINKS.appStoreUrl} className="dl-badge-btn hero-btn" label="Download on the App Store">
                <AppStoreBadgeContent />
              </StoreBadge>
              <StoreBadge href={DOWNLOAD_LINKS.googlePlayUrl} className="dl-badge-btn hero-btn" label="Get it on Google Play">
                <GooglePlayBadgeContent />
              </StoreBadge>
            </div>
          </div>
          <div className="dl-hero-img-wrap">
            <Image
              src="/download-mockups.png"
              alt="ImmunoTrack app screens showing daily symptom logging and trends"
              width={540}
              height={380}
              priority
              className="dl-hero-mockups"
            />
          </div>
        </div>
      </section>

      {/* ── MAIN LAYOUT ─────────────────────────────────────────── */}
      <div className="dl-layout">
        {/* Section Title */}
        <div className="dl-section-header">
          <h2 className="dl-section-title">Download the ImmunoTrack App</h2>
          <p className="dl-section-subtitle">
            Get the app on your phone and start managing your health today.
          </p>
        </div>

        {/* Action Grid Card */}
        <div className="dl-card-container">
          <div className="dl-grid">
            {/* iOS Option */}
            <div className="dl-grid-col">
              <StoreBadge href={DOWNLOAD_LINKS.appStoreUrl} className="dl-badge-btn" label="Download on the App Store">
                <AppStoreBadgeContent />
              </StoreBadge>
              <span className="dl-grid-desc">For iPhone and iPad</span>
            </div>

            {/* Android Option */}
            <div className="dl-grid-col">
              <StoreBadge href={DOWNLOAD_LINKS.googlePlayUrl} className="dl-badge-btn" label="Get it on Google Play">
                <GooglePlayBadgeContent />
              </StoreBadge>
              <span className="dl-grid-desc">For Android devices</span>
            </div>

            {/* QR Code Option */}
            <div className="dl-grid-col">
              <div className="dl-qr-box">
                <div className="dl-qr-img-wrap">
                  <Image
                    src={DOWNLOAD_LINKS.qrCodeSrc}
                    alt="ImmunoTrack Download QR Code"
                    width={96}
                    height={96}
                    className="dl-qr-image"
                  />
                </div>
                <div className="dl-qr-info">
                  <h3 className="dl-qr-title">Scan to Download</h3>
                  <p className="dl-qr-text">
                    Open your phone camera and scan the QR code to get the app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Invitation Only Warning Block */}
        <Reveal className="dl-invite-card">
          <div className="dl-invite-icon-wrap">
            <Image
              src={alertIcon}
              alt="Invitation Required"
              width={36}
              height={35}
              aria-hidden="true"
            />
          </div>
          <div className="dl-invite-content">
            <h3 className="dl-invite-title">Invitation Only</h3>
            <p className="dl-invite-text">
              ImmunoTrack is an invite-only app. You&apos;ll need an invitation from your healthcare provider to create your account and get started.
            </p>
            <p className="dl-invite-bold">
              If you don&apos;t have an invitation yet, please contact your doctor.
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}