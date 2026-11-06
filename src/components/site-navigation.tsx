"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { motionTokens } from "@/lib/motion-tokens";

const links = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteNavigation() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const duration = reducedMotion ? 0.01 : motionTokens.duration.fast;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <nav className="site-navigation" aria-label="Main navigation">
      <div className="desktop-nav">
        {links.map(({ label, href }) => {
          const active = pathname === href;
          return (
            <Link className="nav-link" href={href} key={href} aria-current={active ? "page" : undefined}>
              {label}
              {active && (
                <motion.span
                  className="nav-active-indicator"
                  layoutId="sparrow-nav-indicator"
                  transition={{ duration, ease: motionTokens.easing }}
                  aria-hidden="true"
                />
              )}
            </Link>
          );
        })}
        <Link className="btn nav-cta" href="/#waitlist">Join waitlist</Link>
      </div>

      <button
        className="mobile-nav-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation-panel"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={`menu-glyph${menuOpen ? " is-open" : ""}`} aria-hidden="true"><span /><span /></span>
      </button>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            className="mobile-navigation-panel"
            id="mobile-navigation-panel"
            initial={{ opacity: 0, y: reducedMotion ? 0 : -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reducedMotion ? 0 : -6 }}
            transition={{ duration, ease: motionTokens.easing }}
          >
            {links.map(({ label, href }) => (
              <Link href={href} key={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            ))}
            <Link className="btn" href="/#waitlist" onClick={() => setMenuOpen(false)}>Join waitlist</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
