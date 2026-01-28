"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { PageTransitionWrapper, StarField } from "@/components/chronoverse";
import { visionTimeline, futureTechnologies, sponsors } from "@/data/future";

// Violet stylized corner bracket (Defaults to Violet, but customizable)
const TechCorner = ({ className, color = "text-violet-500/50" }) => (
  <svg
    className={`absolute w-4 h-4 ${color} ${className}`}
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

// Animated Scanning Line (Violet Variant)
const ScannerLine = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
    <div className="w-full h-0.5 bg-linear-to-r from-transparent via-violet-400/50 to-transparent absolute top-0 -translate-y-full animate-scan-fast" />
  </div>
);

export default function FuturePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <PageTransitionWrapper>
      <main className="relative min-h-screen bg-[#050308] overflow-hidden selection:bg-violet-500/30">
        <StarField />

        {/* Advanced Background Grid: Perspective Plane (Violet) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-50" />

        {/* Ambient Glow */}
        <div className="absolute bottom-0 right-0 w-150 h-150 bg-violet-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="relative z-10 px-4 py-8 md:py-16">
          {/* Top Navigation Bar */}
          <div className="max-w-7xl mx-auto mb-12 flex justify-between items-center border-b border-violet-500/20 pb-4">
            <Link href="/?state=navigation">
              <button className="group flex items-center gap-3 text-violet-400/80 hover:text-violet-300 transition-colors uppercase text-xs tracking-[0.2em]">
                <div className="w-8 h-8 rounded-full border border-violet-500/30 flex items-center justify-center group-hover:bg-violet-500/10 transition-all">
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
            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-violet-500/40">
              <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
              TEMPORAL SIMULATION: ACTIVE
            </div>
          </div>

          {/* Hero Section: Glitch & Terminal Style */}
          <header className="max-w-7xl mx-auto mb-24 relative text-center md:text-left">
            <div className="md:pl-10 relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-transparent via-violet-500/50 to-transparent hidden md:block" />

              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded border border-violet-500/30 bg-violet-500/5 backdrop-blur-sm">
                <span className="text-[10px] font-mono text-violet-300 tracking-widest uppercase">
                  Target: Future_Horizon
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-linear-to-r from-violet-100 via-violet-400 to-fuchsia-500 font-sans">
                PROJECT <span className="text-violet-500/50">VISION</span>
              </h1>

              <p className="text-lg text-violet-100/60 max-w-2xl font-light tracking-wide md:border-l-2 md:border-transparent md:pl-0">
                Initializing predictive models. The following data represents
                our calculated trajectory towards becoming a global nexus of
                innovation.
              </p>
            </div>
          </header>

          {/* SECTION 1: TIMELINE (The Trajectory) */}
          <section className="max-w-7xl mx-auto mb-32">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-sm font-mono text-violet-400 tracking-[0.3em] uppercase">
                Temporal Roadmap
              </h2>
              <div className="h-px flex-1 bg-linear-to-r from-violet-500/30 to-transparent" />
            </div>

            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-10 left-0 right-0 h-0.5 bg-violet-900/50 hidden md:block">
                <div className="h-full bg-violet-500/30 w-3/4 blur-[1px]" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {visionTimeline.map((item, index) => {
                  // Define unique themes for each roadmap item to match their sub-pages
                  const themes = [
                    { // Global Expansion (Violet)
                      node: "border-violet-500 group-hover:bg-violet-500 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.8)]",
                      card: "bg-violet-900/5 border-violet-500/10 hover:border-violet-500/40 group-hover:bg-violet-900/10",
                      corner: "text-violet-500/50",
                      year: "text-violet-500/20 group-hover:text-violet-400/80",
                      statusBadge: "border-violet-500/30 text-violet-400",
                      titleGroup: "group-hover:text-violet-300",
                      desc: "text-violet-200/50"
                    },
                    { // Innovation District (Blue)
                      node: "border-blue-500 group-hover:bg-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]",
                      card: "bg-blue-900/5 border-blue-500/10 hover:border-blue-500/40 group-hover:bg-blue-900/10",
                      corner: "text-blue-500/50",
                      year: "text-blue-500/20 group-hover:text-blue-400/80",
                      statusBadge: "border-blue-500/30 text-blue-400",
                      titleGroup: "group-hover:text-blue-300",
                      desc: "text-blue-200/50"
                    },
                    { // AI Research Center (Green)
                      node: "border-green-500 group-hover:bg-green-500 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.8)]",
                      card: "bg-green-900/5 border-green-500/10 hover:border-green-500/40 group-hover:bg-green-900/10",
                      corner: "text-green-500/50",
                      year: "text-green-500/20 group-hover:text-green-400/80",
                      statusBadge: "border-green-500/30 text-green-400",
                      titleGroup: "group-hover:text-green-300",
                      desc: "text-green-200/50"
                    },
                    { // Sustainability Campus (Emerald)
                      node: "border-emerald-500 group-hover:bg-emerald-500 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.8)]",
                      card: "bg-emerald-900/5 border-emerald-500/10 hover:border-emerald-500/40 group-hover:bg-emerald-900/10",
                      corner: "text-emerald-500/50",
                      year: "text-emerald-500/20 group-hover:text-emerald-400/80",
                      statusBadge: "border-emerald-500/30 text-emerald-400",
                      titleGroup: "group-hover:text-emerald-300",
                      desc: "text-emerald-200/50"
                    }
                  ];
                  const theme = themes[index] || themes[0];

                  // Violet/Globe Animation
                  const CardVisual = ({ index }) => {
                    if (index === 0) { // Global Expansion
                      return (
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                          <div className="absolute -right-10 -top-10 w-40 h-40 border border-violet-500/30 rounded-full animate-[spin_10s_linear_infinite]">
                            {/* Satellites */}
                            <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-violet-400 rounded-full shadow-[0_0_5px_#8b5cf6]" />
                            <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-violet-400 rounded-full shadow-[0_0_5px_#8b5cf6]" />
                          </div>
                          <div className="absolute -right-16 -top-16 w-52 h-52 border border-violet-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse] rotate-45">
                            <div className="absolute top-1/2 left-0 w-1 h-1 bg-violet-300 rounded-full" />
                          </div>
                          <div className="absolute -right-6 -top-6 w-32 h-32 border border-violet-400/20 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
                          {/* Core Pulse */}
                          <div className="absolute right-8 top-8 w-4 h-4 bg-violet-500/50 rounded-full blur-md animate-pulse" />
                        </div>
                      );
                    }
                    if (index === 1) { // Innovation District
                      return (
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.2)_1px,transparent_1px)] bg-size-[20px_20px]" />
                          {/* Radar Sweep */}
                          <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(59,130,246,0.1)_60deg,transparent_60deg)] animate-[spin_4s_linear_infinite]" />
                          {/* Blinking Data Points */}
                          <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping" />
                          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-700" />
                          <div className="absolute top-0 left-0 w-full h-1 bg-blue-400/50 shadow-[0_0_10px_#60a5fa] animate-[scan-fast_2s_linear_infinite]" />
                        </div>
                      );
                    }
                    if (index === 2) { // AI Research
                      // Matrix Rain Effect - Client Side Only to fix hydration mismatch
                      const [matrixChars, setMatrixChars] = useState([]);

                      useEffect(() => {
                        // Generate random characters only on the client
                        const chars = Array.from({ length: 120 }).map(() =>
                          String.fromCharCode(0x30A0 + Math.random() * 96)
                        );
                        setMatrixChars(chars);
                      }, []);

                      return (
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-50 transition-opacity font-mono text-[8px] text-green-500 leading-none select-none mask-gradient">
                          <div className="flex justify-between">
                            {/* Falling Columns */}
                            {[...Array(6)].map((_, i) => (
                              <div key={i} className="flex flex-col animate-matrix-rain" style={{ animationDuration: `${2 + i * 0.5}s`, animationDelay: `-${i}s` }}>
                                {Array.from({ length: 20 }).map((_, j) => (
                                  <span key={j} className={j % 5 === 0 ? "text-green-300 font-bold" : "opacity-60"}>
                                    {matrixChars[i * 20 + j] || ""}
                                  </span>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    if (index === 3) { // Sustainability
                      // Firefly Effect - Client Side Only to fix hydration mismatch
                      const [fireflies, setFireflies] = useState([]);

                      useEffect(() => {
                        const flies = Array.from({ length: 8 }).map(() => ({
                          width: Math.random() * 3 + 1 + 'px',
                          height: Math.random() * 3 + 1 + 'px',
                          top: Math.random() * 100 + '%',
                          left: Math.random() * 100 + '%',
                          animationDuration: (Math.random() * 5 + 5) + 's',
                          animationDelay: (Math.random() * 5) + 's',
                          opacity: Math.random() * 0.5 + 0.3
                        }));
                        setFireflies(flies);
                      }, []);

                      return (
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity">
                          {/* Firefly Swarm */}
                          {fireflies.map((style, i) => (
                            <div
                              key={i}
                              className="absolute bg-emerald-400 rounded-full blur-[1px] animate-firefly"
                              style={style}
                            />
                          ))}
                          {/* Breathing Glow */}
                          <div className="absolute inset-0 bg-emerald-500/10 animate-pulse" />
                        </div>
                      );
                    }
                    return null;
                  };

                  return (
                    <div key={index} className="relative group">
                      {/* Node Point */}
                      <div className="hidden md:flex justify-center mb-8 relative z-10">
                        <div className={`w-5 h-5 bg-[#050308] border-2 rounded-full transition-all duration-300 ${theme.node}`} />
                      </div>

                      {/* Card */}
                      <Link href={`/future/${["global-expansion", "innovation-district", "ai-research-center", "sustainability-campus"][index]}`}>
                        <div className={`h-full p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 relative overflow-hidden cursor-pointer ${theme.card}`}>
                          <CardVisual index={index} />
                          <TechCorner className="top-0 left-0 rotate-0" color={theme.corner} />
                          <TechCorner className="bottom-0 right-0 rotate-180" color={theme.corner} />

                          <div className="flex justify-between items-start mb-4 relative z-10">
                            <span className={`text-4xl font-bold transition-colors font-mono ${theme.year}`}>
                              {item.year}
                            </span>
                            <span
                              className={`text-[10px] font-mono px-2 py-0.5 rounded border ${theme.statusBadge}`}
                            >
                              {item.status}
                            </span>
                          </div>

                          <h3 className={`text-xl text-white font-medium mb-2 transition-colors relative z-10 ${theme.titleGroup}`}>
                            {item.title} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                          </h3>
                          <p className={`text-sm leading-relaxed relative z-10 ${theme.desc}`}>
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* SECTION 2: FUTURE TECH (Research Modules) */}
          <section className="max-w-7xl mx-auto mb-32">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-sans text-white tracking-wide flex items-center gap-3">
                <span className="w-1 h-8 bg-violet-500"></span>
                Active Research Modules
              </h2>
              <span className="text-xs font-mono text-violet-500/50 border border-violet-500/20 px-3 py-1 rounded-full">
                SECURE ACCESS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {futureTechnologies.map((tech, index) => {

                // Define unique themes for each research module
                const themes = [
                  { // Quantum Computing (Violet)
                    border: "border-violet-500/20 hover:border-violet-400/60",
                    iconBox: "bg-violet-500/10 border-violet-500/20 group-hover:border-violet-400/50 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]",
                    iconColor: "text-violet-400",
                    codeText: "text-violet-600 group-hover:text-violet-400",
                    titleHover: "group-hover:text-violet-300",
                    desc: "text-violet-200/50",
                    loadLabel: "text-violet-500/70",
                    barBg: "bg-violet-900/40",
                    barFill: "bg-violet-500"
                  },
                  { // Space Technology (Blue)
                    border: "border-blue-500/20 hover:border-blue-400/60",
                    iconBox: "bg-blue-500/10 border-blue-500/20 group-hover:border-blue-400/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]",
                    iconColor: "text-blue-400",
                    codeText: "text-blue-600 group-hover:text-blue-400",
                    titleHover: "group-hover:text-blue-300",
                    desc: "text-blue-200/50",
                    loadLabel: "text-blue-500/70",
                    barBg: "bg-blue-900/40",
                    barFill: "bg-blue-500"
                  },
                  { // Biotechnology (Rose)
                    border: "border-rose-500/20 hover:border-rose-400/60",
                    iconBox: "bg-rose-500/10 border-rose-500/20 group-hover:border-rose-400/50 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.2)]",
                    iconColor: "text-rose-400",
                    codeText: "text-rose-600 group-hover:text-rose-400",
                    titleHover: "group-hover:text-rose-300",
                    desc: "text-rose-200/50",
                    loadLabel: "text-rose-500/70",
                    barBg: "bg-rose-900/40",
                    barFill: "bg-rose-500"
                  },
                  { // Clean Energy (Cyan)
                    border: "border-cyan-500/20 hover:border-cyan-400/60",
                    iconBox: "bg-cyan-500/10 border-cyan-500/20 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]",
                    iconColor: "text-cyan-400",
                    codeText: "text-cyan-600 group-hover:text-cyan-400",
                    titleHover: "group-hover:text-cyan-300",
                    desc: "text-cyan-200/50",
                    loadLabel: "text-cyan-500/70",
                    barBg: "bg-cyan-900/40",
                    barFill: "bg-cyan-500"
                  }
                ];
                const theme = themes[index] || themes[0];

                // Research Module Animations
                const ResearchVisual = ({ index }) => {
                  if (index === 0) { // Quantum
                    return (
                      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                        {/* Superposition Field */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-violet-400/30 rounded-full animate-[spin_4s_linear_infinite]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-violet-400/30 rounded-full animate-[spin_4s_linear_infinite_reverse] rotate-90" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-violet-500/50 rounded-full blur-md animate-pulse" />
                      </div>
                    );
                  }
                  if (index === 1) { // Space
                    return (
                      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                        {/* Orbital Trajectories */}
                        <div className="absolute -right-20 -top-20 w-60 h-60 border border-blue-400/20 rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="absolute -right-10 -top-10 w-40 h-40 border-t border-r border-blue-400/40 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute top-10 right-10 w-2 h-2 bg-blue-300 rounded-full animate-ping" />
                      </div>
                    );
                  }
                  if (index === 2) { // Bio
                    return (
                      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                        {/* Floating Cells */}
                        <div className="absolute top-1/4 left-1/4 w-8 h-8 border border-rose-400/30 rounded-full animate-[bounce_6s_infinite]" />
                        <div className="absolute top-3/4 right-1/4 w-6 h-6 border border-cyan-400/30 rounded-full animate-[bounce_8s_infinite_reverse]" />
                        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-rose-400/20 rounded-full blur-[2px] animate-pulse" />
                      </div>
                    );
                  }
                  if (index === 3) { // Clean Energy
                    return (
                      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                        {/* Energy Waves */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_bottom,rgba(6,182,212,0.2),transparent_70%)] animate-pulse" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 border-t-2 border-cyan-400/30 rounded-full animate-[spin_3s_linear_infinite_reverse]" />
                      </div>
                    );
                  }
                  return null;
                };

                return (
                  <Link
                    key={index}
                    href={`/future/${[
                      "quantum-computing",
                      "space-technology",
                      "biotechnology",
                      "clean-energy",
                    ][index]}`}
                  >
                    <div className={`group relative bg-black/40 border transition-all duration-300 overflow-hidden cursor-pointer h-full ${theme.border}`}>
                      <ScannerLine />
                      <ResearchVisual index={index} />

                      <div className="p-6 relative z-10 w-full h-full flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                          <div className={`w-12 h-12 rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border ${theme.iconBox} ${theme.iconColor}`}>
                            {tech.icon}
                          </div>
                          <div className={`text-[10px] font-mono ${theme.codeText}`}>
                            {tech.code}
                          </div>
                        </div>

                        <h3 className={`text-lg font-bold text-white mb-2 transition-colors ${theme.titleHover}`}>
                          {tech.title} <span className="inline-block opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
                        </h3>
                        <p className={`text-xs mb-6 flex-grow ${theme.desc}`}>
                          {tech.description}
                        </p>

                        {/* Tech Bar */}
                        <div className="space-y-1 mt-auto">
                          <div className={`flex justify-between text-[9px] font-mono ${theme.loadLabel}`}>
                            <span>LOAD_CAPACITY</span>
                            <span>{tech.progress}%</span>
                          </div>
                          <div className={`h-1 w-full rounded-full overflow-hidden ${theme.barBg}`}>
                            <div
                              className={`h-full transition-all duration-1000 ease-out group-hover:animate-pulse ${theme.barFill}`}
                              style={{ width: `${tech.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* SECTION 3: ALLIANCES (Sponsors) */}
          <section className="max-w-7xl mx-auto mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
                Strategic Alliances
              </h2>
              <div className="w-24 h-1 bg-linear-to-r from-transparent via-violet-500 to-transparent mx-auto" />
            </div>

            {/* Platinum Grid */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12 bg-violet-500/30" />
                <span className="text-xs font-mono text-violet-300 tracking-[0.2em]">
                  TIER 1 : PLATINUM
                </span>
                <div className="h-px w-12 bg-violet-500/30" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {sponsors
                  .filter((s) => s.tier === "Platinum")
                  .map((sponsor, i) => (
                    <div
                      key={i}
                      className="group relative h-32 bg-violet-950/10 border border-violet-500/20 flex items-center justify-center overflow-hidden hover:bg-violet-500/5 transition-colors"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <TechCorner className="top-0 right-0 rotate-90" />
                      <TechCorner className="bottom-0 left-0 -rotate-90" />

                      <span className="text-2xl font-bold text-white tracking-widest group-hover:scale-110 transition-transform duration-300 font-sans z-10">
                        {sponsor.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Gold Grid */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12 bg-amber-500/30" />
                <span className="text-xs font-mono text-amber-300 tracking-[0.2em]">
                  TIER 2 : GOLD
                </span>
                <div className="h-px w-12 bg-amber-500/30" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {sponsors
                  .filter((s) => s.tier === "Gold")
                  .map((sponsor, i) => (
                    <div
                      key={i}
                      className="group relative h-24 bg-amber-950/10 border border-amber-500/20 flex items-center justify-center overflow-hidden hover:bg-amber-500/5 transition-colors"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <TechCorner className="top-0 right-0 rotate-90 !border-amber-500/30" color="text-amber-500/50" />
                      <TechCorner className="bottom-0 left-0 -rotate-90 !border-amber-500/30" color="text-amber-500/50" />

                      <span className="text-xl font-bold text-amber-100 tracking-widest group-hover:scale-110 transition-transform duration-300 font-sans z-10">
                        {sponsor.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Silver Grid */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12 bg-slate-500/30" />
                <span className="text-xs font-mono text-slate-300 tracking-[0.2em]">
                  TIER 3 : SILVER
                </span>
                <div className="h-px w-12 bg-slate-500/30" />
              </div>

              <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
                {sponsors
                  .filter((s) => s.tier === "Silver")
                  .map((sponsor, i) => (
                    <div
                      key={i}
                      className="group relative h-20 w-full md:w-64 bg-slate-950/10 border border-slate-500/20 flex items-center justify-center overflow-hidden hover:bg-slate-500/5 transition-colors"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <TechCorner className="top-0 right-0 rotate-90 !border-slate-500/30" color="text-slate-500/50" />
                      <TechCorner className="bottom-0 left-0 -rotate-90 !border-slate-500/30" color="text-slate-500/50" />

                      <span className="text-sm font-bold text-slate-300 tracking-widest group-hover:scale-110 transition-transform duration-300 font-mono z-10">
                        {sponsor.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </section>

          {/* CTA: Mission Uplink */}
          <section className="max-w-4xl mx-auto mt-32">
            <div className="relative border border-violet-500/30 bg-black/60 overflow-hidden rounded-2xl p-8 md:p-12 text-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-violet-500 to-transparent" />
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-violet-500/20 blur-[50px] rounded-full" />

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Initialize Partnership Protocol
              </h2>
              <p className="text-violet-200/60 mb-8 max-w-xl mx-auto text-lg">
                Join the trajectory. Contribute to the future of innovation and
                secure your coordinates in the next era.
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-6">
                <Link href="/future/partner">
                  <button
                    className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold tracking-widest uppercase text-xs transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] clip-path-polygon"
                    style={{
                      clipPath:
                        "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                    }}
                  >
                    Become a Partner
                  </button>
                </Link>
                <button className="px-8 py-4 bg-transparent border border-violet-500/50 text-violet-400 hover:text-white hover:border-violet-400 font-bold tracking-widest uppercase text-xs transition-all">
                  View Prospectus
                </button>
              </div>
            </div>
          </section>
        </div>

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
          @keyframes matrix-rain {
            0% { transform: translateY(-100%); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
          }
          .animate-matrix-rain {
            animation: matrix-rain 5s linear infinite;
          }
           @keyframes firefly {
            0%, 100% { transform: translate(0, 0); opacity: 0; }
            20% { opacity: 1; }
            50% { transform: translate(20px, -20px); }
            80% { opacity: 0.8; }
          }
          .animate-firefly {
            animation: firefly 10s ease-in-out infinite alternate;
          }
          .mask-gradient {
            mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
          }
        `}</style>
      </main>
    </PageTransitionWrapper>
  );
}
