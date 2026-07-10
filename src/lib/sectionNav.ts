/**
 * Shared scroll-spy utilities for the merged Clinicians → Patients → About →
 * Support scrolling experience. Consumed by OneScrollPage (owns the
 * IntersectionObserver + popstate handling) and Navigation (owns click
 * interception + active-link highlighting).
 */

export const SECTION_IDS = ["clinicians", "patients", "about", "support"] as const;
export type SectionId = (typeof SECTION_IDS)[number];

/** window CustomEvent name dispatched whenever the active section changes. */
export const ACTIVE_SECTION_EVENT = "immunotrack:active-section";

export function isSectionId(value: string): value is SectionId {
  return (SECTION_IDS as readonly string[]).includes(value);
}

export function sectionIdFromPathname(pathname: string): SectionId | null {
  const id = pathname.replace(/^\//, "");
  return isSectionId(id) ? id : null;
}

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Scrolls the given section into view if it's present in the DOM (it won't
 * be on pages outside the merged experience, e.g. the homepage). Returns
 * whether the scroll happened, so callers can fall back to a real navigation.
 */
export function scrollToSectionElement(
  id: SectionId,
  { instant = false }: { instant?: boolean } = {}
): boolean {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({
    behavior: instant || prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
  return true;
}

export function dispatchActiveSection(id: SectionId) {
  window.dispatchEvent(new CustomEvent<SectionId>(ACTIVE_SECTION_EVENT, { detail: id }));
}
