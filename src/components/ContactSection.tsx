import Image, { StaticImageData } from "next/image";
import "@/assets/styles/ContactSection.css";
import profileIcon   from "@/assets/icons/noun-profile-8205839.svg";
import insightsIcon  from "@/assets/icons/noun-insights-8300657.svg";
import trackingIcon  from "@/assets/icons/noun-tracking-8269731.svg";
import alertIcon     from "@/assets/icons/noun-alert-8253230.svg";
import ContactForm   from "@/components/ContactForm";

interface ContactCard {
  id: string;
  label: string;
  value: string;
  hint?: string;
  href: string;
  iconVariant: "cyan" | "navy";
  icon: StaticImageData;
  iconHeight?: number;
}

interface FooterItem {
  icon: StaticImageData;
  iconVariant: "cyan" | "navy";
  label: string;
  text: React.ReactNode;
  iconHeight?: number;
}

interface ContactSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  cards?: ContactCard[];
  footerItems?: FooterItem[];
  className?: string;
}

/* ── Default cards ──────────────────────────────────────── */
const defaultCards: ContactCard[] = [];

/* ── Default footer items ───────────────────────────────── */
const defaultFooterItems: FooterItem[] = [
  {
    icon: alertIcon,
    iconVariant: "cyan",
    iconHeight: 19,
    label: "HIPAA Complaints",
    text: (
      <>
        You may file a complaint with the U.S. Department of Health &amp; Human Services —{" "}
        <a
          href="https://www.hhs.gov/ocr/privacy/hipaa/complaints/"
          target="_blank"
          rel="noopener noreferrer"
          className="cs-footer-link"
        >
          hhs.gov/ocr
        </a>
      </>
    ),
  },
];

/* ── Shared CSS filter helpers ──────────────────────────── */
const cyanFilter =
  "brightness(0) saturate(100%) invert(75%) sepia(60%) saturate(500%) hue-rotate(160deg) brightness(100%) contrast(95%)";
const navyFilter =
  "brightness(0) saturate(100%) invert(10%) sepia(60%) saturate(900%) hue-rotate(215deg) brightness(75%) contrast(115%)";

/* ── Component ──────────────────────────────────────────── */
export default function ContactSection({
  badge = "Get in Touch",
  title = "Contact Us",
  subtitle = "Have a question about this policy or how ImmunoTrack handles your data? Our team is here to help.",
  cards = defaultCards,
  footerItems = defaultFooterItems,
  className = "",
}: ContactSectionProps) {
  return (
    <section className={`cs-section ${className}`.trim()} aria-label="Contact Us">

      {/* ── Hero banner — Next.js Image fill for guaranteed full coverage ── */}
      <div className="cs-hero">
        {/* Background image layer — absolutely fills the hero div */}
        <Image
          src="/images/iStock-2244690121.jpg"
          alt=""
          fill
          priority
          aria-hidden="true"
          className="cs-hero-bg-img"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Dark gradient overlay for text readability */}
        <div className="cs-hero-overlay" />

        {/* Hero content — sits above image + overlay */}
        <div className="cs-hero-content">
          <div className="cs-hero-badge">{badge}</div>
          <h2 className="cs-hero-title">{title}</h2>
          <p className="cs-hero-sub">{subtitle}</p>
        </div>
      </div>

      {/* ── Contact cards ── */}
      {cards.length > 0 && (
        <div className="cs-cards-grid">
          {cards.map((card) => (
            <a
              key={card.id}
              href={card.href}
              className="cs-card pui-focus"
              id={card.id}
            >
              <div className={`cs-card-icon cs-icon-${card.iconVariant}`}>
                <Image
                  src={card.icon}
                  alt=""
                  width={22}
                  height={card.iconHeight ?? 22}
                  aria-hidden="true"
                  style={{ filter: card.iconVariant === "cyan" ? cyanFilter : navyFilter }}
                />
              </div>
              <div className="cs-card-body">
                <p className="cs-card-label">{card.label}</p>
                <p className="cs-card-value">{card.value}</p>
                {card.hint && <p className="cs-card-hint">{card.hint}</p>}
              </div>
              <div className="cs-card-arrow">→</div>
            </a>
          ))}
        </div>
      )}

      {/* ── Direct Contact Form ── */}
      <ContactForm />

      {/* ── Footer strip ── */}
      <div className={`cs-footer-strip ${footerItems.length === 1 ? "cs-footer-single" : ""}`}>
        {footerItems.map((item, i) => (
          <div key={i} className="cs-footer-item">
            <div className={`cs-footer-icon-wrap cs-icon-${item.iconVariant}`}>
              <Image
                src={item.icon}
                alt=""
                width={20}
                height={item.iconHeight ?? 20}
                aria-hidden="true"
                style={{ filter: item.iconVariant === "cyan" ? cyanFilter : navyFilter }}
              />
            </div>
            <div>
              <p className="cs-footer-label">{item.label}</p>
              <p className="cs-footer-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
