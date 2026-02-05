"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { PageTransitionWrapper, GlassPanel } from "@/components/chronoverse";
import { coreTeam, team, socialLinks } from "@/data/contact";

// A tech-styled corner bracket for cards
const TechCorner = ({ className }) => (
  <svg
    className={`absolute w-4 h-4 text-emerald-500/50 ${className}`}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M2 2h20v20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />
    <path d="M2 2h10M2 2v10" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const ScannerLine = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
    <div className="w-full h-0.5 bg-linear-to-r from-transparent via-emerald-400/50 to-transparent absolute top-0 -translate-y-full animate-scan-fast" />
  </div>
);

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("All");

  // Get unique team names for filtering
  const categories = useMemo(
    () => ["All", ...new Set(team.map((m) => m.team))],
    [],
  );

  const filteredTeam = useMemo(() => {
    return activeTab === "All"
      ? team
      : team.filter((m) => m.team === activeTab);
  }, [activeTab]);

  return (
    <PageTransitionWrapper>
      <main className="relative min-h-screen bg-black/30 overflow-x-hidden selection:bg-emerald-500/30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="relative z-10 px-4 py-8 md:py-16">
          {/* Nav */}
          <div className="max-w-7xl mx-auto mb-12 flex flex-col sm:flex-row justify-between items-center border-b border-emerald-500/20 pb-4 gap-4">
            <Link href="/?state=navigation">
              <button className="group flex items-center gap-3 text-emerald-400/80 hover:text-emerald-300 transition-colors uppercase text-sm tracking-[0.2em]">
                <div className="w-8 h-8 rounded-full border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/10 transition-all">
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </div>
                <span>Return to Chronoverse</span>
              </button>
            </Link>
            <div className="hidden md:flex items-center gap-2 text-sm font-mono text-emerald-500/40">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              SYSTEM_UPLINK: ACTIVE
            </div>
          </div>

          {/* Hero Section: Glitch & Terminal Style */}
          <header className="max-w-7xl mx-auto mb-16 md:mb-20 relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-transparent via-emerald-500/50 to-transparent" />

            <div className="pl-4 md:pl-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-sm">
                <span className="text-[10px] font-mono text-emerald-300 tracking-widest uppercase">
                  Channel: Secure_Uplink
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-linear-to-r from-emerald-100 via-emerald-400 to-teal-500 font-sans wrap-break-word">
                TRANSMISSION <span className="text-emerald-500/50">HUB</span>
              </h1>

              <p className="text-sm md:text-lg text-emerald-100/60 max-w-2xl font-light tracking-wide border-l-2 border-emerald-500/20 pl-4 py-2">
                Initiating connection protocols. Select a frequency below to
                establish communication with the{" "}
                <span className="text-emerald-400 font-medium">INGENIUM</span>{" "}
                command center.
              </p>
            </div>
          </header>

          {/* SECTION 1: CORE COMMAND (The Core Team) */}
          <section className="max-w-7xl mx-auto mb-20 md:mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-emerald-500/30 to-transparent" />
              <h2 className="text-sm md:text-sm font-mono text-emerald-400 tracking-[0.3em] uppercase text-center">
                Core Command Manifest
              </h2>
              <div className="h-px flex-1 bg-linear-to-r from-emerald-500/30 to-transparent" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreTeam.map((member, index) => (
                <div key={index} className="group relative">
                  <div
                    className="absolute inset-0 bg-emerald-900/10 backdrop-blur-md border border-emerald-500/20"
                    style={{
                      clipPath:
                        "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
                    }}
                  />
                  <div className="relative p-8 flex flex-col items-center text-center z-10">
                    <div className="relative mb-6">
                      <div
                        className="w-28 h-28 bg-emerald-950 clip-path-hexagon flex items-center justify-center relative z-10 border-2 border-emerald-500/30 overflow-hidden"
                        style={{
                          clipPath:
                            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        }}
                      >
                        <img
                          src={`/members/${member.name}.jpg`}
                          alt={member.name}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=064e3b&color=34d399`;
                          }}
                        />
                      </div>
                      <div className="absolute -inset-2 border border-dashed border-emerald-500/40 rounded-full animate-[spin_15s_linear_infinite]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <div className="text-[12px] font-mono text-emerald-400 mb-4 uppercase tracking-tighter px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded">
                      {member.role}
                    </div>
                    <div className="flex gap-4 mt-2">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          className="text-emerald-500/50 hover:text-emerald-400 transition-colors text-sm font-mono"
                        >
                          LINKEDIN
                        </a>
                      )}
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          className="text-emerald-500/50 hover:text-emerald-400 transition-colors text-sm font-mono"
                        >
                          INSTA
                        </a>
                      )}
                    </div>
                  </div>
                  <ScannerLine />
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2: FIELD OPERATIVES WITH FILTER */}
          <section className="max-w-7xl mx-auto mb-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-2xl font-sans text-white tracking-wide mb-2 flex items-center gap-3">
                  <span className="w-1 h-8 bg-emerald-500"></span> Field
                  Operatives
                </h2>
                <p className="text-sm font-mono text-emerald-500/50 uppercase">
                  {team.length} units detected in sector
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-end">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-3 py-1 text-[12px] font-mono border transition-all ${
                      activeTab === cat
                        ? "bg-emerald-500 text-black border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                        : "text-emerald-500/60 border-emerald-500/20 hover:border-emerald-500/50"
                    }`}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredTeam.map((co, index) => (
                <div
                  key={index}
                  className="group relative bg-black/40 border border-emerald-500/10 hover:border-emerald-500/40 transition-all p-4 rounded-lg overflow-hidden"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 shrink-0 rounded border border-emerald-500/20 overflow-hidden bg-emerald-950">
                      <img
                        src={`/members/${co.name}.jpg`}
                        alt={co.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${co.name}&background=022c22&color=10b981`;
                        }}
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-white text-sm font-medium truncate group-hover:text-emerald-400 transition-colors">
                        {co.name}
                      </h4>
                      <p className="text-[12px] text-emerald-500/50 font-mono uppercase truncate">
                        {co.team}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center border-t border-emerald-500/5 pt-3">
                    <a
                      href={`mailto:${co.email}`}
                      className="text-[12px] text-emerald-500/70 hover:text-emerald-400 font-mono flex items-center gap-1"
                    >
                      <span className="opacity-50">@</span> SEND_SIGNAL
                    </a>
                    {co.linkedin && (
                      <a
                        href={co.linkedin}
                        target="_blank"
                        className="w-5 h-5 flex items-center justify-center border border-emerald-500/20 rounded hover:bg-emerald-500/10"
                      >
                        <svg
                          className="w-3 h-3 text-emerald-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Info & Footer Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
            {/* [Keep your existing SECTION 3: DATA UPLINK here] */}
          </div>
        </div>
      </main>
    </PageTransitionWrapper>
  );
}
