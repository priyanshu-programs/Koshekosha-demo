"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { navLeft, navRight, site } from "@/data/site";
import type { NavItem } from "@/types";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { Logo } from "./Logo";
import styles from "./SiteHeader.module.css";

/** Scroll past this before the bar is allowed to hide. */
const HIDE_THRESHOLD = 120;

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScroll = useRef(0);

  // The homepage hero is a full-bleed photo, so the bar starts transparent there.
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);

      // Hide on downward travel once clear of the top, reveal on any upward move.
      if (y > HIDE_THRESHOLD && y > lastScroll.current) {
        setHidden(true);
      } else if (y < lastScroll.current) {
        setHidden(false);
      }

      lastScroll.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body-level scroll lock, mirroring the origin's state-- class.
  useEffect(() => {
    document.body.classList.toggle("state--mobile-menu-open", menuOpen);
    return () => document.body.classList.remove("state--mobile-menu-open");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const classes = [
    styles.header,
    scrolled && styles["header--scrolled"],
    hidden && !menuOpen && styles["header--hidden"],
    overHero && !scrolled && !menuOpen && styles["header--transparent"],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={classes}>
      <Link href="/" className={styles.logo} aria-label={site.name}>
        <Logo />
      </Link>

      <button
        type="button"
        className={styles.toggle}
        aria-controls="mobile-menu"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <nav
        id="mobile-menu"
        className={[styles.nav, menuOpen && styles["nav--open"]]
          .filter(Boolean)
          .join(" ")}
      >
        <NavList items={navLeft} onNavigate={closeMenu} />
        <NavList items={navRight} onNavigate={closeMenu} />
        <WaveDivider variant="bottom" color="#fff8e0" stroke="#cb2821" />
      </nav>
    </header>
  );
}

function NavList({
  items,
  onNavigate,
}: {
  items: NavItem[];
  onNavigate: () => void;
}) {
  return (
    <ul className={styles.menu}>
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} onClick={onNavigate}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
