"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import "@/assets/styles/cookie-consent.css";

const CONSENT_COOKIE_NAME = "it_cookie_consent";
const CONSENT_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 365; // 1 year

/**
 * Cookie-consent state is read from an external system (document.cookie),
 * so it's modeled as an external store via useSyncExternalStore rather than
 * "read on mount inside an effect and setState" — that pattern causes an
 * extra render pass and a hydration flash. useSyncExternalStore's
 * getServerSnapshot lets the server (and the first client hydration pass)
 * safely assume consent has already been given, so the banner never flashes
 * on screen for returning visitors; getSnapshot then re-checks the real
 * cookie for the client-only render that follows.
 */
let listeners: Array<() => void> = [];

function hasConsentCookie(): boolean {
  if (typeof document === "undefined") return true;
  return document.cookie
    .split(";")
    .some((entry) => entry.trim().startsWith(`${CONSENT_COOKIE_NAME}=`));
}

function subscribe(callback: () => void) {
  listeners.push(callback);
  return () => {
    listeners = listeners.filter((listener) => listener !== callback);
  };
}

function getSnapshot() {
  return hasConsentCookie();
}

function getServerSnapshot() {
  // Assume consent already recorded until proven otherwise on the client —
  // avoids ever server-rendering the banner for a returning visitor.
  return true;
}

function acknowledgeConsent() {
  document.cookie = `${CONSENT_COOKIE_NAME}=1; max-age=${CONSENT_COOKIE_MAX_AGE_SECONDS}; path=/; SameSite=Lax`;
  listeners.forEach((listener) => listener());
}

export default function CookieConsent() {
  const hasConsent = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  if (hasConsent) return null;

  return (
    <div className="cc-banner" role="region" aria-label="Cookie notice">
      <div className="cc-banner-container">
        <p className="cc-banner-text">
          ImmunoTrack uses only strictly necessary and functional cookies to
          run this site securely — we do not use advertising or tracking
          cookies. See our{" "}
          <Link href="/cookies" className="cc-banner-link">
            Cookie Policy
          </Link>{" "}
          for details.
        </p>
        <button
          type="button"
          className="cc-banner-button"
          onClick={acknowledgeConsent}
        >
          Got it
        </button>
      </div>
    </div>
  );
}
