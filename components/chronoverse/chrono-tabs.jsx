"use client";

import { useState } from "react";

export function ChronoTabs({ tabs, className }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Headers */}
      <div className="flex flex-wrap gap-2 mb-8 p-2 glass-panel rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-sans text-sm tracking-wider uppercase transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-primary/20 text-primary border border-primary/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="relative">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`transition-all duration-500 ${
              activeTab === tab.id
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
            }`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
