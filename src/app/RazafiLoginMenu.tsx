"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

const OWNER_URL = "https://portal.razafistore.com/admin/login.html";
const CLIENT_URL = "https://portal.razafistore.com/espace-client/";
const MOBILE_QUERY = "(max-width: 720px)";

export default function RazafiLoginMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstItemRef = useRef<HTMLAnchorElement>(null);
  const menuId = useId();

  const closeMenu = (restoreFocus = false) => {
    setIsOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => triggerRef.current?.focus());
    }
  };

  useEffect(() => {
    setIsMounted(true);

    const media = window.matchMedia(MOBILE_QUERY);
    const updateMode = () => setIsMobile(media.matches);
    updateMode();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", updateMode);
      return () => media.removeEventListener("change", updateMode);
    }

    media.addListener(updateMode);
    return () => media.removeListener(updateMode);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const focusTimer = window.setTimeout(() => firstItemRef.current?.focus(), 0);

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;

      const clickedTrigger = rootRef.current?.contains(target) ?? false;
      const clickedPanel = panelRef.current?.contains(target) ?? false;
      if (!clickedTrigger && !clickedPanel) {
        closeMenu(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !isMobile) return;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = Math.max(0, window.innerWidth - document.documentElement.clientWidth);
    const currentPaddingRight = Number.parseFloat(window.getComputedStyle(document.body).paddingRight) || 0;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${currentPaddingRight + scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [isMobile, isOpen]);

  const panel = (
    <div
      ref={panelRef}
      id={menuId}
      className={isMobile ? "rz-login-panel is-mobile" : "rz-login-panel"}
      role="menu"
      aria-label="Choisir un espace RAZAFI"
    >
      <div className="rz-login-mobile-head">
        <strong>Connexion</strong>
        <button
          type="button"
          className="rz-login-close"
          aria-label="Fermer"
          onClick={() => closeMenu(true)}
        >
          ×
        </button>
      </div>

      <a
        ref={firstItemRef}
        className="rz-login-item"
        href={OWNER_URL}
        role="menuitem"
        onClick={() => closeMenu(false)}
      >
        <span className="rz-login-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22">
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5.5 20c.8-4 3-6 6.5-6s5.7 2 6.5 6" />
          </svg>
        </span>
        <span className="rz-login-copy">
          <strong>Espace propriétaire</strong>
          <small>Gérer votre zone WiFi</small>
        </span>
        <span className="rz-login-arrow" aria-hidden="true">›</span>
      </a>

      <a
        className="rz-login-item"
        href={CLIENT_URL}
        role="menuitem"
        onClick={() => closeMenu(false)}
      >
        <span className="rz-login-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path d="M5 10.5a10 10 0 0 1 14 0" />
            <path d="M8 13.5a6 6 0 0 1 8 0" />
            <path d="M11 16.5a2 2 0 0 1 2 0" />
            <circle cx="12" cy="19" r="1" className="rz-login-dot" />
          </svg>
        </span>
        <span className="rz-login-copy">
          <strong>Espace client</strong>
          <small>Suivre votre consommation</small>
        </span>
        <span className="rz-login-arrow" aria-hidden="true">›</span>
      </a>
    </div>
  );

  const mobileLayer = (
    <div className="rz-login-mobile-layer">
      <button
        className="rz-login-backdrop"
        type="button"
        aria-label="Fermer le menu de connexion"
        onClick={() => closeMenu(true)}
      />
      {panel}
    </div>
  );

  return (
    <div className="rz-login-menu" ref={rootRef}>
      <button
        ref={triggerRef}
        className="rz-login-trigger"
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>Connexion</span>
        <svg
          className={isOpen ? "rz-login-chevron is-open" : "rz-login-chevron"}
          viewBox="0 0 20 20"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path d="m5.5 7.5 4.5 4.5 4.5-4.5" />
        </svg>
      </button>

      {isOpen && !isMobile ? panel : null}
      {isOpen && isMobile && isMounted ? createPortal(mobileLayer, document.body) : null}

      <style jsx global>{`
        .rz-login-menu {
          position: relative;
          display: inline-flex;
          z-index: 70;
        }

        .rz-login-trigger {
          height: 40px;
          min-width: 150px;
          padding: 0 18px;
          border: 1px solid #050505;
          border-radius: 999px;
          background: #050505;
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font: inherit;
          font-size: 14px;
          font-weight: 750;
          line-height: 1;
          cursor: pointer;
          transition: transform 160ms ease, background 160ms ease;
          -webkit-tap-highlight-color: transparent;
        }

        .rz-login-trigger:hover {
          background: #1a1a1a;
        }

        .rz-login-trigger:active {
          transform: scale(0.98);
        }

        .rz-login-trigger:focus-visible,
        .rz-login-item:focus-visible,
        .rz-login-close:focus-visible {
          outline: 3px solid rgba(37, 99, 235, 0.35);
          outline-offset: 3px;
        }

        .rz-login-chevron {
          fill: none;
          stroke: currentColor;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: transform 180ms ease;
        }

        .rz-login-chevron.is-open {
          transform: rotate(180deg);
        }

        .rz-login-panel {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          width: min(330px, calc(100vw - 28px));
          padding: 9px;
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 22px 60px rgba(15, 23, 42, 0.18);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          animation: rz-login-pop 150ms ease-out;
        }

        .rz-login-item {
          min-height: 72px;
          padding: 12px;
          border-radius: 14px;
          color: #111827;
          text-decoration: none;
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr) 18px;
          align-items: center;
          gap: 11px;
          transition: background 150ms ease, transform 150ms ease;
        }

        .rz-login-item:hover {
          background: #f4f6f8;
        }

        .rz-login-item:active {
          transform: scale(0.99);
        }

        .rz-login-icon {
          width: 44px;
          height: 44px;
          border-radius: 13px;
          background: #f2f4f7;
          display: grid;
          place-items: center;
          color: #111827;
        }

        .rz-login-icon svg {
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .rz-login-icon .rz-login-dot {
          fill: currentColor;
          stroke: none;
        }

        .rz-login-copy {
          min-width: 0;
          display: grid;
          gap: 4px;
          text-align: left;
        }

        .rz-login-copy strong {
          font-size: 15px;
          font-weight: 760;
          line-height: 1.2;
        }

        .rz-login-copy small {
          color: #667085;
          font-size: 12.5px;
          line-height: 1.35;
        }

        .rz-login-arrow {
          color: #98a2b3;
          font-size: 24px;
          line-height: 1;
        }

        .rz-login-mobile-head,
        .rz-login-backdrop {
          display: none;
        }

        @keyframes rz-login-pop {
          from { opacity: 0; transform: translateY(-5px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 720px) {
          .rz-login-trigger {
            min-width: 126px;
            height: 40px;
            padding-inline: 15px;
          }

          .rz-login-mobile-layer {
            position: fixed;
            inset: 0;
            z-index: 9998;
            isolation: isolate;
          }

          .rz-login-backdrop {
            position: absolute;
            inset: 0;
            z-index: 0;
            display: block;
            width: 100%;
            height: 100%;
            border: 0;
            padding: 0;
            background: rgba(15, 23, 42, 0.34);
            backdrop-filter: blur(2px);
            -webkit-backdrop-filter: blur(2px);
            cursor: default;
          }

          .rz-login-panel.is-mobile {
            position: absolute;
            z-index: 1;
            top: auto;
            right: 12px;
            bottom: calc(12px + env(safe-area-inset-bottom));
            left: 12px;
            width: auto;
            max-height: calc(100dvh - 24px - env(safe-area-inset-top) - env(safe-area-inset-bottom));
            overflow-y: auto;
            overscroll-behavior: contain;
            padding: 10px;
            border-radius: 24px;
            animation: rz-login-sheet 190ms ease-out;
          }

          .rz-login-mobile-head {
            min-height: 46px;
            padding: 4px 5px 7px 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #111827;
          }

          .rz-login-mobile-head strong {
            font-size: 16px;
          }

          .rz-login-close {
            width: 38px;
            height: 38px;
            border: 0;
            border-radius: 999px;
            background: #f2f4f7;
            color: #344054;
            font: inherit;
            font-size: 24px;
            line-height: 1;
            cursor: pointer;
          }

          .rz-login-item {
            min-height: 76px;
          }

          @keyframes rz-login-sheet {
            from { opacity: 0; transform: translateY(18px) scale(0.985); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rz-login-trigger,
          .rz-login-chevron,
          .rz-login-item,
          .rz-login-panel {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
