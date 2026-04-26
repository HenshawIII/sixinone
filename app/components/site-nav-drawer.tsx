"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useId } from "react";
import { createPortal } from "react-dom";
import { useMounted } from "./use-mounted";

type NavItem = { readonly href: string; readonly label: string };

type SiteNavDrawerProps = {
  open: boolean;
  onClose: () => void;
  items: readonly NavItem[];
};

export function SiteNavDrawer({ open, onClose, items }: SiteNavDrawerProps) {
  const mounted = useMounted();
  const sidebarRingId = `${useId().replace(/:/g, "")}-drawer-ring`;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!mounted) return null;

  return createPortal(
    <>
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-100 bg-black/10 transition-opacity duration-300 ease-out ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        role="presentation"
      />
      <aside
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-110 flex h-dvh w-[min(100%,420px)] flex-col bg-black/20 backdrop-blur-lg shadow-[-12px_0_40px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] will-change-transform ${
          open ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
        id="site-nav-sidebar"
      >
        <div className="flex items-center justify-between border-b border-white/30 px-6 py-5">
          <button
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-primary/45 text-brand-primary transition hover:bg-brand-primary/15"
            onClick={onClose}
            type="button"
          >
            <X className="h-10 w-10 text-white" strokeWidth={2.2} />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="space-y-0">
            {items.map((item) => (
              <li key={item.href} className="border-b border-white/25">
                <Link
                  className="block py-5 font-heading text-lg uppercase tracking-[0.05em] text-white transition hover:text-brand-red"
                  href={item.href}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-end justify-between gap-4 border-t border-white/30 px-6 py-6">
          <div className="flex gap-4 text-white">
            <a href="https://instagram.com/" rel="noopener noreferrer" target="_blank" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://facebook.com/" rel="noopener noreferrer" target="_blank" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://tiktok.com/" rel="noopener noreferrer" target="_blank" aria-label="TikTok">
              <TikTokIcon />
            </a>
          </div>
          <div className=" hidden relative h-16 w-16 shrink-0 text-white/85">
            <svg className="h-full w-full" viewBox="0 0 100 100">
              <defs>
                <path
                  d="M 50,50 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"
                  fill="none"
                  id={sidebarRingId}
                />
              </defs>
              <text className="fill-current" style={{ fontSize: "6.5px" }}>
                <textPath href={`#${sidebarRingId}`} startOffset="0%">
                  6in1 · Group ·
                </textPath>
              </text>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-white">
              <ChevronDownIcon className="h-4 w-4" />
            </span>
          </div>
        </div>
      </aside>
    </>,
    document.body
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" height="20" viewBox="0 0 24 24" width="20">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg fill="none" height="22" viewBox="0 0 24 24" width="22" stroke="currentColor" strokeWidth="1.6">
      <rect height="18" rx="4" width="18" x="3" y="3" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" fill="currentColor" r="1.2" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg fill="currentColor" height="22" viewBox="0 0 24 24" width="22">
      <path d="M14 13.5h3l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C16.524 2.1 15.67 2 14.64 2 12.52 2 11 3.47 11 6.3v3.2H8v4h3V22h4v-8.5z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg fill="currentColor" height="22" viewBox="0 0 24 24" width="22">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64v-3.5a6.33 6.33 0 0 0-1-.05A6.34 6.34 0 0 0 5 20.66a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.05z" />
    </svg>
  );
}
