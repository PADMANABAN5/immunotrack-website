import type { ReactNode } from "react";
import { DOWNLOAD_LINKS } from "@/config/download-links";

// Official Colorful App Store Badge Content
export function AppStoreBadgeContent() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", textAlign: "left" }}>
      <svg viewBox="0 0 32 32" width="24" height="24">
        <rect width="32" height="32" rx="7" fill="url(#app-store-blue-gradient)" />
        <defs>
          <linearGradient id="app-store-blue-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E9DFB" />
            <stop offset="100%" stopColor="#0066E6" />
          </linearGradient>
        </defs>
        <path
          fill="#FFFFFF"
          d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zm3.53-3.257c.837-1.012 1.4-2.42 1.245-3.83-1.207.052-2.662.805-3.532 1.817-.78.888-1.454 2.31-1.271 3.664 1.324.104 2.677-.68 3.558-1.652z"
          transform="scale(0.85) translate(3, 3)"
        />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
        <span style={{ fontSize: "10px", textTransform: "uppercase", fontWeight: 500, opacity: 0.85 }}>Download on the</span>
        <span style={{ fontSize: "16px", fontWeight: 800, fontFamily: "system-ui, sans-serif" }}>App Store</span>
      </div>
    </div>
  );
}

// Official Colorful Google Play Badge Content
export function GooglePlayBadgeContent() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", textAlign: "left" }}>
      <svg viewBox="0 0 512 512" width="24" height="24">
        <path fill="#00D2FF" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
        <path fill="#00F076" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" />
        <path fill="#FFC107" d="M472.2 225.6l-58-33.3-60.7 60.7 60.7 60.7 58-33.3c15-8.6 24.8-23.7 24.8-40.8s-9.8-32.2-24.8-40.8z" />
        <path fill="#FF3D00" d="M325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}>
        <span style={{ fontSize: "10px", textTransform: "uppercase", fontWeight: 500, opacity: 0.85 }}>GET IT ON</span>
        <span style={{ fontSize: "16px", fontWeight: 800, fontFamily: "system-ui, sans-serif" }}>Google Play</span>
      </div>
    </div>
  );
}

export function StoreBadge({
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
