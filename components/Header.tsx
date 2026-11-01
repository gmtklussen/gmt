"use client";

import { useEffect, useState } from "react";

export function Brand() {
  return (
    <>
      <span className="brand-mark" aria-hidden="true">
        G
      </span>
      <span className="brand-text">
        GMT<span className="brand-accent"> Klussen</span>
      </span>
    </>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} id="top">
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="GMT Klussen home" onClick={close}>
          <Brand />
        </a>

        <nav className={`main-nav${open ? " open" : ""}`} aria-label="Hoofdmenu">
          <a href="#diensten" onClick={close}>Diensten</a>
          <a href="#over" onClick={close}>Over ons</a>
          <a href="#werkwijze" onClick={close}>Werkwijze</a>
          <a href="#faq" onClick={close}>Vragen</a>
          <a href="#contact" className="nav-cta" onClick={close}>
            Offerte aanvragen
          </a>
        </nav>

        <button
          className={`nav-toggle${open ? " open" : ""}`}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
