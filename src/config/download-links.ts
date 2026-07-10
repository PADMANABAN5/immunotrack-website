/**
 * Patient app download links.
 *
 * ImmunoTrack is invitation-only and has not yet submitted the app to the
 * App Store / Google Play. Per the website spec, the `/download` page must
 * route through a URL Genius smart link at go.immunotrack.ai (a Cloudflare
 * CNAME) rather than linking directly to store URLs, so a single link can
 * auto-route iOS/Android and track scans without adding cookies or GA4.
 *
 * Until ImmunoTrack provides that smart link (and a generated QR code image
 * to go with it), all three fields below stay `null` / the placeholder QR,
 * and the download page renders disabled badges. Once ImmunoTrack supplies
 * these values, set them here — no other code changes are needed; the
 * download page will automatically switch the badges from disabled spans to
 * live links.
 */
export const DOWNLOAD_LINKS: {
  /** go.immunotrack.ai smart link (or direct App Store URL once available) */
  appStoreUrl: string | null;
  /** go.immunotrack.ai smart link (or direct Google Play URL once available) */
  googlePlayUrl: string | null;
  /** Static QR code image pointing at the go.immunotrack.ai smart link */
  qrCodeSrc: string;
} = {
  appStoreUrl: null,
  googlePlayUrl: null,
  qrCodeSrc: "/qr-placeholder.png",
};
