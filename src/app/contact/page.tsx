import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import "@/assets/styles/contact.css";

export const metadata: Metadata = {
  title: "Contact Us — ImmunoTrack",
  description:
    "Get in touch with ImmunoTrack. Contact us for privacy questions, general support, or mailing address information.",
};

export default function Contact() {
  return (
    <main className="ct-page-main">
      <div className="ct-page-container">
        <ContactSection
          badge="Contact Us"
          title="We're here to help"
          subtitle="Reach out to ImmunoTrack for privacy inquiries, general support, clinical onboarding, or any questions about our services. We're committed to responding promptly."
        />
      </div>
    </main>
  );
}