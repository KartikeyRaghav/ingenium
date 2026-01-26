"use client";

import Link from "next/link";
import { useState } from "react";
import { PageTransitionWrapper, StarField } from "@/components/chronoverse";
import {
  culturalEvents,
  technicalEvents,
  flagshipFests,
  legacyHighlights,
} from "@/data/past";

// Amber Tech Corner
const TechCorner = ({ className }) => (
  <svg
    className={`absolute w-3 h-3 text-amber-500/60 ${className}`}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M2 2h20v20"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="square"
      className="opacity-0 group-hover:opacity-100 transition-opacity"
    />
    <path d="M2 2h6M2 2v6" stroke="currentColor" strokeWidth="2.5" />
  </svg>
);

// Scanline Animation for Cards
const ScanOverlay = () => (
  <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(transparent_50%,rgba(245,158,11,0.2)_50%)] bg-size-[100%_4px]" />
);

export default function PastPage() {
  const [activeTab, setActiveTab] = useState("cultural");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (tabId) => {
    if (tabId === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setIsTransitioning(false);
    }, 300);
  };

  const categories = [
    {
      id: "cultural",
      label: "Cultural Archives",
      icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
    },
    {
      id: "technical",
      label: "Tech Logs",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    },
    {
      id: "flagship",
      label: "Flagship Data",
      icon: "M3 21v-8a2 2 0 012-2h14a2 2 0 012 2v8M3 13V6a2 2 0 012-2h14a2 2 0 012 2v7m-6 3a2 2 0 012-2h2a2 2 0 012 2v3h-6v-3z",
    },
    {
      id: "legacy",
      label: "Legacy Core",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    },
  ];

  const getData = () => {
    switch (activeTab) {
      case "cultural":
        return culturalEvents;
      case "technical":
        return technicalEvents;
      case "flagship":
        return flagshipFests;
      case "legacy":
        return legacyHighlights;
      default:
        return [];
    }
  };

  return (
    <PageTransitionWrapper>
      <main className="relative min-h-screen bg-[#080500] overflow-hidden selection:bg-amber-500/30">
        <StarField />

        {/* Background: Amber Noise & Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-size-[30px_30px] opacity-40" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-amber-600/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 px-4 py-8 md:py-16">
          {/* Top Nav */}
          <div className="max-w-7xl mx-auto mb-10 flex justify-between items-center border-b border-amber-500/20 pb-4">
            <Link href="/?state=navigation">
              <button className="group flex items-center gap-3 text-amber-500/70 hover:text-amber-300 transition-colors uppercase text-xs tracking-[0.2em]">
                <div className="w-8 h-8 flex items-center justify-center border border-amber-500/30 rounded-sm group-hover:bg-amber-500/10 transition-all">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                    />
                  </svg>
                </div>
                <span>Rewind to Present</span>
              </button>
            </Link>
            <div className="flex items-center gap-2 text-[10px] font-mono text-amber-500/40">
              <span className="w-2 h-2 bg-amber-600 rounded-sm animate-pulse" />
              ARCHIVE_STATUS: DECRYPTED
            </div>
          </div>

          {/* Hero Section */}
          <header className="max-w-7xl mx-auto mb-16 relative">
            <div className="absolute top-0 right-0 hidden md:block opacity-20">
              <svg width="200" height="100" viewBox="0 0 200 100">
                <path
                  d="M0 0 H200 V100 H180 V20 H0 Z"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="1"
                />
                <text
                  x="120"
                  y="40"
                  className="font-mono text-[10px] fill-amber-500"
                >
                  SYS.LOG.001
                </text>
              </svg>
            </div>

            <div className="pl-4 border-l-2 border-amber-500/30">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 bg-amber-500/10 text-amber-500 text-[10px] font-mono tracking-widest border border-amber-500/20">
                  CLASSIFIED_HISTORY
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-linear-to-r from-amber-100 via-amber-400 to-orange-500 font-sans">
                CHRONICLES{" "}
                <span className="text-amber-500/40 font-mono text-4xl align-top">
                  _EXT
                </span>
              </h1>
              <p className="text-amber-200/50 max-w-xl text-sm md:text-base leading-relaxed font-light">
                Accessing the Ingenium digital archives. These memory modules
                contain the legacy events and milestones that forged our current
                timeline.
              </p>
            </div>
          </header>

          {/* Navigation Deck (Tabs) */}
          <section className="max-w-7xl mx-auto mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-1 bg-amber-950/20 border border-amber-500/20 rounded-lg backdrop-blur-sm">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleTabChange(cat.id)}
                  className={`relative overflow-hidden group px-4 py-4 rounded flex flex-col items-center justify-center gap-2 transition-all duration-300 border ${
                    activeTab === cat.id
                      ? "bg-amber-500/10 border-amber-500 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                      : "border-transparent text-amber-500/40 hover:text-amber-400 hover:bg-amber-500/5"
                  }`}
                >
                  <svg
                    className={`w-5 h-5 ${activeTab === cat.id ? "text-amber-400" : "text-amber-500/40"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={cat.icon}
                    />
                  </svg>
                  <span className="text-[10px] font-bold tracking-widest uppercase">
                    {cat.label}
                  </span>

                  {/* Active Indicator */}
                  {activeTab === cat.id && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-amber-500 shadow-[0_0_10px_#f59e0b]" />
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* Dynamic Content Grid */}
          <section className="max-w-7xl mx-auto min-h-100">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-300 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
            >
              {getData().map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-[#0c0802] border border-amber-900/40 hover:border-amber-500/50 transition-all duration-500 overflow-hidden rounded-sm hover:shadow-[0_4px_20px_rgba(245,158,11,0.1)]"
                >
                  <ScanOverlay />

                  {/* Card Header (Tape Label Style) */}
                  <div className="bg-amber-950/30 border-b border-amber-500/10 p-4 flex justify-between items-center relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-700/50 rounded-full group-hover:bg-amber-500 group-hover:shadow-[0_0_8px_#f59e0b] transition-all" />
                      <span className="text-[10px] font-mono text-amber-500/50">
                        {item.id}
                      </span>
                    </div>
                    <span className="font-mono text-xl font-bold text-amber-500/20 group-hover:text-amber-400 transition-colors">
                      {item.year}
                    </span>
                  </div>

                  <div className="p-6 relative z-10">
                    <TechCorner className="top-0 left-0 rotate-0" />
                    <TechCorner className="bottom-0 right-0 rotate-180" />

                    <h3 className="text-xl font-bold text-amber-100 mb-3 group-hover:text-amber-400 transition-colors font-sans tracking-wide">
                      {item.name}
                    </h3>

                    <p className="text-sm text-amber-200/50 leading-relaxed font-light border-l border-amber-500/20 pl-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Info */}
                  <div className="px-6 py-3 border-t border-amber-500/10 flex justify-between items-center bg-amber-500/5">
                    <span className="text-[9px] uppercase tracking-wider text-amber-600">
                      Archived Memory
                    </span>
                    <svg
                      className="w-4 h-4 text-amber-800 group-hover:text-amber-500 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer Timeline Graphic */}
          <div className="mt-20 border-t border-amber-500/20 pt-8 max-w-7xl mx-auto flex justify-center opacity-60">
            <div className="flex items-end gap-1 h-12">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-amber-500/20 hover:bg-amber-500 transition-colors duration-300"
                  style={{ height: `${Math.random() * 100}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </PageTransitionWrapper>
  );
}
