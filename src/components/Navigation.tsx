"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  /** Called after a nav link is clicked (e.g. to close the mobile menu). */
  onNavigate?: () => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => onNavigate?.()}
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
