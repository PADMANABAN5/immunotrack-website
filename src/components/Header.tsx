"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import shieldIcon from "@/assets/images/new-logo-trans.png";
import Navigation from "./Navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`pui-header fixed top-0 left-0 w-full z-50 bg-slate-50 backdrop-blur-xl border-b border-slate-200 ${
        scrolled ? "pui-header--scrolled" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 pui-focus rounded-lg">
            <Image
              src={shieldIcon}
              alt=""
              width={40}
              height={40}
              priority
              aria-hidden="true"
              className="h-9 w-9 object-contain xl:h-10 xl:w-10"
            />
            <span className="text-lg font-bold tracking-tight text-navy xl:text-xl">
              Immuno<span className="text-cyan">Track</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <Navigation onNavigate={closeMenu} />
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="pui-btn pui-focus bg-navy hover:bg-navy-mid text-white px-7 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Request Access
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="pui-focus lg:hidden transition-transform duration-200 active:scale-90"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t bg-white">
            <div className="flex flex-col gap-6">
              <Navigation onNavigate={closeMenu} />

              <Link
                href="/contact"
                onClick={closeMenu}
                className="pui-btn pui-focus bg-navy text-white rounded-full py-3 text-center font-semibold"
              >
                Request Access
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
