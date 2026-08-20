"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "@/assets/styles/globals.css";
import footerLogo from "@/assets/images/new-logo-trans.png";
import notificationIcon from "@/assets/icons/noun-notification-3408005.svg";
import profileIcon from "@/assets/icons/noun-profile-8205839.svg";
import timelineIcon from "@/assets/icons/noun-timeline-8109095.svg";

const platformLinks = [
  { href: "/clinicians", label: "For Clinicians" },
  { href: "/patients", label: "For Patients" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Help & Support" },
  { href: "/download", label: "Download the App" },
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
      pathname === href || pathname.startsWith(href + "/");
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
              ImmunoTrack AI-Driven Clinical Intelligence for Allergy &amp; Asthma ©
              2026 ImmunoTrack Inc.
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
                <p>support@immunotrack.ai</p>
              </div>
            </div>

            <div className="support-item">
              <div className="support-icon">
                <Image src={profileIcon} alt="Privacy" width={24} height={24} />
              </div>

              <div>
                <strong>Privacy Questions</strong>
                <p>privacy@immunotrack.ai</p>
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

        {/* COPYRIGHT */}

        <div className="footer-bottom">
          <p>
            ImmunoTrack is not a medical device and is not intended to diagnose,
            treat, cure, or prevent any medical condition. Always follow the
            advice of your licensed healthcare provider.
          </p>
        </div>
      </div>
    </footer>
  );
}
