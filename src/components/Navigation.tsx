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

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`relative font-semibold text-[17px] transition-all duration-300 group ${
            pathname === link.href
              ? "text-[#1D4ED8]"
              : "text-slate-700 hover:text-[#1D4ED8]"
          }`}
        >
          {link.name}

          <span
            className={`absolute left-0 -bottom-2 h-[2px] bg-[#1D4ED8] transition-all duration-300 ${
              pathname === link.href
                ? "w-full"
                : "w-0 group-hover:w-full"
            }`}
          />
        </Link>
      ))}
    </>
  );
}