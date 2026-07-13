import Link from "next/link";
import Image from "next/image";
import "@/assets/styles/globals.css";
import footerLogo from "@/assets/images/new-logo-trans.png";
import notificationIcon from "@/assets/icons/noun-notification-3408005.svg";
import profileIcon from "@/assets/icons/noun-profile-8205839.svg";
import timelineIcon from "@/assets/icons/noun-timeline-8109095.svg";

export default function Footer() {
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
              ImmunoTrack AI-Driven Clinical Intelligence for Allergy & Asthma ©
              2026 ImmunoTrack Inc. Aman Medical Consulting LLC Atlanta,
              Georgia.
            </p>
          </div>

          {/* PLATFORM */}

          <div className="footer-column footer-divider">
            <h3>PLATFORM</h3>

            <ul>
              <li>
                <Link href="/clinicians">For Clinicians</Link>
              </li>
              <li>
                <Link href="/patients">For Patients</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>

              <li>
                <Link href="/download">Download the App</Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}

          <div className="footer-column footer-divider">
            <h3>LEGAL</h3>

            <ul>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/cookies">Cookie Policy</Link>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}

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
