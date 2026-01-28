"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  PageTransitionWrapper,
  StarField,
  GlassPanel,
} from "@/components/chronoverse";
import { coreTeam, coordinators, socialLinks } from "@/data/contact";
import NeuralLink from "@/components/NeuralLink";

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
      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />
    <path d="M2 2h10M2 2v10" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// Animated Scanning Line
const ScannerLine = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
    <div className="w-full h-0.5 bg-linear-to-r from-transparent via-emerald-400/50 to-transparent absolute top-0 -translate-y-full animate-scan-fast" />
  </div>
);

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <PageTransitionWrapper>
      <main className="relative min-h-screen bg-[#050505] overflow-hidden selection:bg-emerald-500/30">
        <StarField />
        <NeuralLink />
        {/* Advanced Background Grid: Perspective Plane */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-50" />

        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="relative z-10 px-4 py-8 md:py-16">
          {/* Top Navigation Bar */}
          <div className="max-w-7xl mx-auto mb-12 flex justify-between items-center border-b border-emerald-500/20 pb-4">
            <Link href="/?state=navigation">
              <button className="group flex items-center gap-3 text-emerald-400/80 hover:text-emerald-300 transition-colors uppercase text-xs tracking-[0.2em]">
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
            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-emerald-500/40">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              SYSTEM STATUS: ONLINE
            </div>
          </div>

          {/* Hero Section: Glitch & Terminal Style */}
          <header className="max-w-7xl mx-auto mb-20 relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-transparent via-emerald-500/50 to-transparent" />

            <div className="pl-6 md:pl-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-sm">
                <span className="text-[10px] font-mono text-emerald-300 tracking-widest uppercase">
                  Channel: Secure_Uplink
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-transparent bg-clip-text bg-linear-to-r from-emerald-100 via-emerald-400 to-teal-500 font-sans">
                TRANSMISSION <span className="text-emerald-500/50">HUB</span>
              </h1>

              <p className="text-lg text-emerald-100/60 max-w-2xl font-light tracking-wide border-l-2 border-emerald-500/20 pl-4 py-2">
                Initiating connection protocols. Select a frequency below to
                establish communication with the{" "}
                <span className="text-emerald-400 font-medium">INGENIUM</span>{" "}
                command center.
              </p>
            </div>
          </header>

          {/* SECTION 1: CORE COMMAND (The Core Team) */}
          <section className="max-w-7xl mx-auto mb-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-emerald-500/30 to-transparent" />
              <h2 className="text-sm font-mono text-emerald-400 tracking-[0.3em] uppercase">
                Core Command Manifest
              </h2>
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-emerald-500/30 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreTeam.map((member, index) => (
                <div key={index} className="group relative">
                  {/* Holographic Card Background */}
                  <div
                    className="absolute inset-0 bg-emerald-900/10 backdrop-blur-sm border border-emerald-500/20 clip-path-polygon"
                    style={{
                      clipPath:
                        "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                    }}
                  ></div>

                  {/* Hover Glow Effect */}
                  <div
                    className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      clipPath:
                        "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                    }}
                  />

                  <div className="relative p-6 flex flex-col items-center text-center z-10">
                    <TechCorner className="top-0 left-0 rotate-0" />
                    <TechCorner className="top-0 right-0 rotate-90" />
                    <TechCorner className="bottom-0 right-0 rotate-180" />
                    <TechCorner className="bottom-0 left-0 -rotate-90" />

                    {/* Hexagon Avatar */}
                    <div className="relative mb-6">
                      <div
                        className="w-28 h-28 bg-emerald-950 clip-path-hexagon flex items-center justify-center relative z-10 border-2 border-emerald-500/30 group-hover:border-emerald-400 transition-colors"
                        style={{
                          clipPath:
                            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        }}
                      >
                        <span className="text-3xl font-bold text-emerald-400">
                          {member.name[0]}
                        </span>
                      </div>
                      {/* Rotating Ring */}
                      <div className="absolute -inset-1 border border-dashed border-emerald-500/40 rounded-full animate-[spin_10s_linear_infinite]" />
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-wide mb-1 group-hover:text-emerald-300 transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-mono text-emerald-500 mb-4 px-2 py-0.5 bg-emerald-500/10 rounded border border-emerald-500/20">
                      {member.role}
                    </div>

                    {/* Fake Data Metrics */}
                    <div className="w-full space-y-2 mt-2">
                      <div className="flex justify-between text-[10px] text-emerald-500/60 font-mono">
                        <span>ID: {member.id}</span>
                        <span>CLR: {member.clearance}</span>
                      </div>
                      <div className="h-1 w-full bg-emerald-900/50 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[85%] group-hover:animate-pulse" />
                      </div>
                    </div>
                  </div>
                  <ScannerLine />
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2: FIELD OPERATIVES (Coordinators) */}
          <section className="max-w-7xl mx-auto mb-24">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-sans text-white tracking-wide flex items-center gap-3">
                <span className="w-1 h-8 bg-emerald-500"></span>
                Field Operatives
              </h2>
              <span className="text-xs font-mono text-emerald-500/50 border border-emerald-500/20 px-3 py-1 rounded-full">
                {coordinators.length} UNITS ACTIVE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {coordinators.map((co, index) => (
                <div
                  key={index}
                  className="group relative bg-black/40 border border-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300 overflow-hidden rounded-lg"
                >
                  <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-ping" />
                  </div>

                  <div className="p-5 flex items-start gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-emerald-500/20 to-transparent rounded flex items-center justify-center font-mono text-emerald-400 text-lg border border-emerald-500/20">
                      {co.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium truncate group-hover:text-emerald-300 transition-colors">
                        {co.name}
                      </h3>
                      <p className="text-xs text-emerald-500/70 uppercase tracking-wider mb-2">
                        {co.role}
                      </p>

                      <div className="flex items-center gap-2 mt-3">
                        <a
                          href={`mailto:${co.contact}`}
                          className="text-xs flex items-center gap-2 px-3 py-1.5 bg-emerald-500/5 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-md text-emerald-400 transition-all group-hover:w-full justify-center"
                        >
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span>Connect</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Bottom Tech Bar */}
                  <div className="h-0.5 w-0 group-hover:w-full bg-emerald-500 transition-all duration-500 ease-out" />
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: DATA UPLINK (Form & Info) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
            {/* Left: Interactive Info Panel */}
            <div className="lg:col-span-5 space-y-6">
              <GlassPanel className="p-8 border-l-4 border-l-emerald-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-emerald-500/20 blur-xl rounded-full" />

                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  H.Q. Coordinates
                </h3>

                <div className="space-y-6 font-mono text-sm">
                  <div className="group flex items-start gap-4 p-3 hover:bg-emerald-500/5 rounded transition-colors cursor-crosshair">
                    <span className="text-emerald-500/50">LOC:</span>
                    <div>
                      <p className="text-emerald-300">IIT Indore, Simrol</p>
                      <p className="text-emerald-500/60">
                        Sector 453552, MP, Earth
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-3 hover:bg-emerald-500/5 rounded transition-colors cursor-pointer">
                    <span className="text-emerald-500/50">COM:</span>
                    <div>
                      <p className="text-emerald-300">contact@ingenium.in</p>
                      <p className="text-emerald-500/60">Encrypted Channel</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-emerald-500/20">
                  <p className="text-xs text-emerald-500/40 mb-4 uppercase tracking-widest">
                    Secure Frequencies
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        className="w-10 h-10 rounded border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-black hover:shadow-[0_0_15px_rgba(16,185,129,0.6)] transition-all duration-300"
                      >
                        <span className="font-bold text-xs">
                          {link.name[0]}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </GlassPanel>
            </div>

            {/* Right: The Terminal Form */}
            <div className="lg:col-span-7">
              <div className="relative bg-black/80 border border-emerald-500/30 rounded-xl p-1 overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-emerald-500/10 px-4 py-2 flex items-center justify-between border-b border-emerald-500/20">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                  </div>
                  <div className="text-[10px] font-mono text-emerald-500/60">
                    bash --login
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-emerald-400 font-mono mb-6 text-sm">
                    <span className="text-emerald-600 mr-2">$</span>
                    initiate_newsletter_sequence.exe
                  </h3>

                  <div className="space-y-4">
                    <p className="text-emerald-500/60 text-sm font-mono">
                      // Enter your designation to receive updates...
                    </p>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-emerald-500/50 font-mono">
                        {">"}
                      </div>
                      <input
                        type="email"
                        className="w-full bg-emerald-950/30 border border-emerald-500/30 rounded-none py-4 pl-10 pr-32 text-emerald-300 placeholder-emerald-800 font-mono focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 transition-all"
                        placeholder="email_address..."
                      />
                      <button className="absolute right-2 top-2 bottom-2 px-6 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs tracking-wider uppercase transition-colors">
                        Execute
                      </button>
                    </div>
                    <div className="flex justify-between text-[10px] text-emerald-700 font-mono pt-2">
                      <span>STATUS: WAITING FOR INPUT</span>
                      <span>LATENCY: 12ms</span>
                    </div>
                  </div>
                </div>

                {/* Scan line overlay for terminal */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-size-[100%_2px,3px_100%] opacity-20" />
              </div>
            </div>
          </div>
        </div>

        {/* Inline Styles for Custom Keyframes that Tailwind might miss */}
        <style jsx global>{`
          @keyframes scan-fast {
            0% {
              top: 0%;
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              top: 100%;
              opacity: 0;
            }
          }
          .animate-scan-fast {
            animation: scan-fast 3s linear infinite;
          }
        `}</style>
      </main>
    </PageTransitionWrapper>
  );
}
