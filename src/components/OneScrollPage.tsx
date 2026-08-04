"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import CliniciansSection from "@/components/sections/CliniciansSection";
import PatientsSection from "@/components/sections/PatientsSection";
import AboutSection from "@/components/sections/AboutSection";
import SupportSection from "@/components/sections/SupportSection";
import {
  SECTION_IDS,
  type SectionId,
  dispatchActiveSection,
  scrollToSectionElement,
  sectionIdFromPathname,
} from "@/lib/sectionNav";

// Avoids the "useLayoutEffect does nothing on the server" warning while still
// running synchronously pre-paint on the client, so the initial scroll-jump
// to the target section doesn't visibly flash the top of the page.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Renders the Clinicians, Patients, About, and Support sections back to
 * back as one continuously-scrollable experience. All four routes
 * (/clinicians, /patients, /about, /support) render this same component —
 * only the initial scroll target differs, resolved client-side from the URL.
 *
 * Deliberately renders a Fragment, not a <main> — the root layout already
 * provides the app's one <main> landmark.
 */
export default function OneScrollPage() {
  const activeIdRef = useRef<SectionId | null>(null);
  const isNavigatingRef = useRef(true);

  useIsomorphicLayoutEffect(() => {
    window.history.scrollRestoration = "manual";
    const target = sectionIdFromPathname(window.location.pathname);
    if (target) {
      scrollToSectionElement(target, { instant: true });
      activeIdRef.current = target;
      
      // Secondary scroll in case Next.js scroll restoration/reset overrides it
      const timer = setTimeout(() => {
        scrollToSectionElement(target, { instant: true });
        isNavigatingRef.current = false;
      }, 100);
      return () => clearTimeout(timer);
    } else {
      isNavigatingRef.current = false;
    }
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const intersecting = new Map<SectionId, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        if (isNavigatingRef.current) return;

        entries.forEach((entry) => {
          intersecting.set(entry.target.id as SectionId, entry.isIntersecting);
        });

        // Pick the last section (in document order) currently intersecting
        // the detection band — more robust than a thin crossing-line band
        // when sections vary a lot in height.
        const current = SECTION_IDS.filter((id) => intersecting.get(id)).pop();
        if (current && current !== activeIdRef.current) {
          activeIdRef.current = current;
          window.history.replaceState(null, "", `/${current}`);
          dispatchActiveSection(current);
        }
      },
      { rootMargin: "-96px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Raw history.pushState/replaceState never fire popstate — only real
    // Back/Forward (or history.go) does. Because every route here renders
    // this same component type at the same tree position, React reconciles
    // navigation between them as a re-render, not a remount, so the mount
    // effect above won't rerun on Back/Forward — this listener is the
    // scroll/highlight fix for that. It never calls a Next.js router API,
    // so it can't conflict with Next's own popstate handling.
    const onPopState = () => {
      const target = sectionIdFromPathname(window.location.pathname);
      if (!target) return;
      scrollToSectionElement(target, { instant: true });
      activeIdRef.current = target;
      dispatchActiveSection(target);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <>
      <CliniciansSection />
      <PatientsSection />
      <AboutSection />
      <SupportSection />
    </>
  );
}
