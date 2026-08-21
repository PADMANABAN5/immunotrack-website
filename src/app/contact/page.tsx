import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us — ImmunoTrack",
  description:
    "Get in touch with ImmunoTrack. Contact us for privacy questions, general support, or mailing address information.",
};

export default function Contact() {
  return (
    <main style={{ paddingTop: "60px", minHeight: "80vh" }}>
      <ContactSection
        badge="Contact Us"
        title="We're here to help"
        subtitle="Reach out to ImmunoTrack for privacy inquiries, general support, clinical onboarding, or any questions about our services. We're committed to responding promptly."
      />
    </main>
  );
}