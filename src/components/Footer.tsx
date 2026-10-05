"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "@/assets/styles/globals.css";
import "@/assets/styles/download.css";
import footerLogo from "@/assets/images/new-logo-trans.png";
import notificationIcon from "@/assets/icons/noun-notification-3408005.svg";
import profileIcon from "@/assets/icons/noun-profile-8205839.svg";
import timelineIcon from "@/assets/icons/noun-timeline-8109095.svg";
import alertIcon from "@/assets/icons/noun-alert-8253230.svg";
import { DOWNLOAD_LINKS } from "@/config/download-links";
import {
  AppStoreBadgeContent,
  GooglePlayBadgeContent,
  StoreBadge,
} from "@/components/StoreBadges";

const platformLinks = [
  { href: "/", label: "Home" },
  { href: "/clinicians", label: "For Clinicians" },
  { href: "/patients", label: "For Patients" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Help & Support" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Policy" },
];

export default function Footer() {
  const pathname = usePathname();

  function linkClass(href: string) {
    const isActive =
      href === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(href + "/");
    return isActive ? "footer-link-active" : undefined;
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* TOP SECTION */}

        <div className="footer-top">
          {/* LOGO SECTION */}

          <div className="footer-brand footer-divider">
            <Link href="/">
              <Image
                src={footerLogo}
                alt="ImmunoTrack"
                width={1135}
                height={1101}
                className="footer-logo"
              />
            </Link>

            <p>
              ImmunoTrack AI-Driven Clinical Intelligence
              <br />
              for Allergy &amp; Asthma
              <br />
              <span className="inline-block mt-2">© 2026 ImmunoTrack Inc.</span>
            </p>
          </div>

          {/* PLATFORM */}

          <div className="footer-column footer-divider">
            <h3>PLATFORM</h3>

            <ul>
              {platformLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass(href)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}

          <div className="footer-column footer-divider">
            <h3>LEGAL</h3>

            <ul>
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={linkClass(href)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}

          <div className="footer-column">
            <h3>CONTACT</h3>

            <div className="support-item">
              <div className="support-icon">
                <Image
                  src={notificationIcon}
                  alt="General Inquiries"
                  width={24}
                  height={21}
                />
              </div>

              <div>
                <strong>General Inquiries</strong>
                <p>
                  <a href="mailto:support@immunotrack.ai" className="footer-email-link">
                    support@immunotrack.ai
                  </a>
                </p>
              </div>
            </div>

            <div className="support-item">
              <div className="support-icon">
                <Image src={profileIcon} alt="Privacy" width={24} height={24} />
              </div>

              <div>
                <strong>Privacy Questions</strong>
                <p>
                  <a href="mailto:privacy@immunotrack.ai" className="footer-email-link">
                    privacy@immunotrack.ai
                  </a>
                </p>
              </div>
            </div>

            <div className="support-item">
              <div className="support-icon">
                <Image
                  src={timelineIcon}
                  alt="Technical Support"
                  width={24}
                  height={19}
                />
              </div>

              <div>
                <p>
                  Within 30 days for privacy requests; within 1 business day for general support
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DOWNLOAD APP SECTION */}
        <div id="download-app" className="footer-download-section mt-4 pt-4 border-t border-white/15">
          <div className="dl-new-grid">
            {/* Col 1: Title + Subtitle */}
            <div className="dl-new-col dl-new-col--title">
              <h2 className="dl-new-title">
                Download the{" "}
                <span className="dl-new-title-accent">ImmunoTrack App</span>
              </h2>
              <p className="dl-new-subtitle">
                Get the app on your phone and start managing your health today.
              </p>
            </div>

            {/* Col 2: App Store + Google Play stacked */}
            <div className="dl-new-col dl-new-col--badges">
              <div className="dl-new-badges-stack">
                <StoreBadge href={DOWNLOAD_LINKS.appStoreUrl} className="dl-badge-btn hero-btn" label="Download on the App Store">
                  <AppStoreBadgeContent />
                </StoreBadge>
                <StoreBadge href={DOWNLOAD_LINKS.googlePlayUrl} className="dl-badge-btn hero-btn" label="Get it on Google Play">
                  <GooglePlayBadgeContent />
                </StoreBadge>
              </div>
              <div className="dl-new-badge-labels">
                <span>For iPhone and iPad</span>
                <span>|</span>
                <span>For Android devices</span>
              </div>
            </div>

            {/* Col 3: QR Code */}
            <div className="dl-new-col dl-new-col--qr">
              <div className="dl-new-qr-wrap">
                <Image
                  src={DOWNLOAD_LINKS.qrCodeSrc}
                  alt="ImmunoTrack Download QR Code"
                  width={110}
                  height={110}
                  className="dl-qr-image"
                />
              </div>
              <h3 className="dl-new-qr-title">Scan to Download</h3>
              <p className="dl-new-qr-text">
                Open your phone camera and scan the <br />
                QR code to get the app.
              </p>
            </div>

            {/* Col 4: Invitation Only */}
            <div className="dl-new-col dl-new-col--invite">
              <div className="dl-new-invite-icon">
                <Image
                  src={alertIcon}
                  alt="Invitation Required"
                  width={24}
                  height={24}
                  aria-hidden="true"
                />
              </div>
              <h3 className="dl-new-invite-title">Invitation Only</h3>
              <p className="dl-new-invite-text">
                ImmunoTrack is an invite-only app. You&apos;ll need an invitation from your healthcare provider to create your account and get started.
              </p>
              <p className="dl-new-invite-bold">
                If you don&apos;t have an invitation yet, please contact your doctor.
              </p>
            </div>
          </div>
        </div>

        {/* DISCLAIMER / COPYRIGHT */}

        <div className="footer-bottom">
          <p>
            ImmunoTrack is not a medical device and is not intended to diagnose,
            treat, cure, or prevent any medical condition. 
            <br />
            Always follow the advice of your licensed healthcare provider.
          </p>
        </div>
      </div>
    </footer>
  );
}
