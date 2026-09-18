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
import {
  AppStoreBadgeContent,
  GooglePlayBadgeContent,
  StoreBadge,
} from "@/components/StoreBadges";

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
              unoptimized
              quality={100}
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
              ImmunoTrack is an invite-only app. You&apos;ll need an invitation from your healthcare provider
              <br />
              to create your account and get started.
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