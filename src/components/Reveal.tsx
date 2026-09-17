"use client";

import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from "react";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  /** Optional stagger step (1-6) for sequential reveal within a group. */
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Element type to render — defaults to "div". Use "form" to wrap a form without an extra wrapper. */
  as?: "div" | "form" | "article" | "li";
}

/**
 * Reveal — fades/slides an element up into view once it enters the
 * viewport. Renders a single element (same DOM footprint as a plain
 * wrapper-less element), so it's safe to drop in place of an existing
 * <div className="..."> without affecting grid/flex layout of siblings.
 *
 * Respects prefers-reduced-motion (shows content immediately, no motion).
 */
export default function Reveal({ children, className = "", delay, as = "div", ...rest }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={`pui-reveal ${visible ? "pui-visible" : ""} ${className}`.trim()}
      data-pui-delay={delay}
      {...rest}
    >
      {children}
    </Tag>
  );
}
