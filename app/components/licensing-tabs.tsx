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
};

export function LicensingTabs({ items, dark }: LicensingTabsProps) {
  const [activeKey, setActiveKey] = useState(items[0]?.key ?? "");
  const activeItem = items.find((item) => item.key === activeKey) ?? items[0];

  return (
    <div className={dark ? "surface-card-dark" : "surface-card"}>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const active = item.key === activeItem.key;
          return (
            <button
              key={item.key}
              className={`rounded-full px-4 py-2 text-sm transition ${
                active
                  ? "bg-brand-red text-white"
                  : dark
                    ? "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                    : "bg-black/5 text-site-muted hover:bg-black/10 hover:text-site-text"
              }`}
              onClick={() => setActiveKey(item.key)}
              type="button"
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <p className={`mt-5 leading-7 ${dark ? "text-white/75" : "text-site-muted"}`}>{activeItem.content}</p>
    </div>
  );
}
