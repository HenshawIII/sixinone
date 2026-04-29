"use client";

import { useState } from "react";

type TabItem = {
  key: string;
  label: string;
  content: string;
};

type LicensingTabsProps = {
  items: TabItem[];
  dark?: boolean;
  accent?: "red" | "purple" | "gold";
  variant?: "default" | "modern";
};

export function LicensingTabs({ items, dark, accent = "red", variant = "default" }: LicensingTabsProps) {
  const [activeKey, setActiveKey] = useState(items[0]?.key ?? "");
  const activeItem = items.find((item) => item.key === activeKey) ?? items[0];
  const isModern = variant === "modern";
  const activeClass =
    accent === "purple"
      ? isModern
        ? "bg-[#864ef5] text-white shadow-[0_10px_24px_rgba(134,78,245,0.35)]"
        : "bg-[#864ef5] text-white"
      : accent === "gold"
        ? isModern
          ? "bg-[#ffb400] text-white shadow-[0_10px_24px_rgba(255,180,0,0.35)]"
          : "bg-[#ffb400] text-white"
        : isModern
          ? "bg-brand-red text-white shadow-[0_10px_24px_rgba(227,67,28,0.35)]"
          : "bg-brand-red text-white";
  const containerClass = isModern
    ? "rounded-3xl border border-black/10 bg-linear-to-br from-[#864ef5]/10 via-white to-white p-4 shadow-[0_14px_36px_rgba(15,23,42,0.1)] sm:p-6"
    : dark
      ? "surface-card-dark"
      : "surface-card";
  const inactiveClass = dark
    ? "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
    : isModern
      ? "bg-white text-site-muted ring-1 ring-black/8 hover:bg-black/3 hover:text-site-text"
      : "bg-black/5 text-site-muted hover:bg-black/10 hover:text-site-text";

  return (
    <div className={containerClass}>
      <div role="tablist" aria-label="Licensing categories" className={`flex flex-wrap gap-2 ${isModern ? "sm:gap-3" : ""}`}>
        {items.map((item) => {
          const active = item.key === activeItem.key;
          return (
            <button
              key={item.key}
              role="tab"
              aria-selected={active}
              aria-controls={`licensing-panel-${item.key}`}
              id={`licensing-tab-${item.key}`}
              className={`px-4 py-2 text-sm transition sm:text-[0.95rem] ${
                isModern ? "rounded-2xl font-semibold" : "rounded-full"
              } ${
                active ? activeClass : inactiveClass
              }`}
              onClick={() => setActiveKey(item.key)}
              type="button"
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`licensing-panel-${activeItem.key}`}
        aria-labelledby={`licensing-tab-${activeItem.key}`}
        key={activeItem.key}
        className={`mt-5 rounded-2xl border p-5 sm:p-6 ${
          dark ? "border-white/15 bg-white/6" : "border-black/8 bg-white"
        }`}
      >
        <p className={`text-xs font-semibold uppercase tracking-[0.08em] ${dark ? "text-white/70" : "text-[#864ef5]"}`}>
          Licensing Focus
        </p>
        <h4 className={`mt-2 font-heading text-2xl ${dark ? "text-white" : "text-site-text"}`}>{activeItem.label}</h4>
        <p className={`mt-3 leading-7 ${dark ? "text-white/75" : "text-site-muted"}`}>{activeItem.content}</p>
      </div>
    </div>
  );
}
