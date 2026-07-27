"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import {
  ACTIVE_SECTION_EVENT,
  dispatchActiveSection,
  isSectionId,
  scrollToSectionElement,
  sectionIdFromPathname,
  type SectionId,
} from "@/lib/sectionNav";

const links = [
  {
    name: "For Clinicians",
    href: "/clinicians",
  },
  {
    name: "For Patients",
    href: "/patients",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Help & Support",
    href: "/support",
  },
];

interface NavigationProps {
  /** Called after a click is handled as an in-page scroll (e.g. to close the mobile menu). */
  onNavigate?: () => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState(() => sectionIdFromPathname(pathname));

  // Resync when a real Next.js navigation changes the route (e.g. arriving
  // from the homepage, or Back/Forward leaving the merged experience).
  // Adjusted during render (not in an effect) per React's "adjusting state
  // when a prop changes" pattern — avoids an extra render pass, and doesn't
  // fight the scroll-driven updates below since `pathname` only changes on
  // a real Next.js navigation, never from our own history.pushState/replaceState.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setActiveId(sectionIdFromPathname(pathname));
  }

  // Track the section currently in view while free-scrolling within the
  // merged Clinicians/Patients/About/Support experience.
  useEffect(() => {
    const onActiveSection = (e: Event) => {
      setActiveId((e as CustomEvent<SectionId>).detail);
    };
    window.addEventListener(ACTIVE_SECTION_EVENT, onActiveSection);
    return () => window.removeEventListener(ACTIVE_SECTION_EVENT, onActiveSection);
  }, []);

  function handleClick(e: MouseEvent<HTMLAnchorElement>, href: string) {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return; // let the browser handle new-tab/etc. natively
    }
    const id = href.slice(1);
    if (!isSectionId(id)) return;

    // Only intercept if the target section is already in the DOM (i.e. we're
    // already on one of the merged pages) — otherwise let the Link perform a
    // real Next.js navigation into the merged experience.
    const scrolled = scrollToSectionElement(id);
    if (!scrolled) return;

    e.preventDefault();
    // Re-clicking the already-active section still scrolls (useful to jump
    // back to its top), but shouldn't push a duplicate history entry.
    if (id !== activeId) {
      window.history.pushState(null, "", href);
      setActiveId(id);
      dispatchActiveSection(id);
    }
    onNavigate?.();
  }

  return (
    <>
      {links.map((link) => {
        const isActive = activeId === link.href.slice(1);
        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className={`pui-focus relative font-semibold text-[17px] transition-all duration-300 group ${
              isActive
                ? "text-cyan-d"
                : "text-slate-700 hover:text-cyan-d"
            }`}
          >
            {link.name}

            <span
              className={`absolute left-0 -bottom-2 h-[2px] bg-cyan-d transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        );
      })}
    </>
  );
}
