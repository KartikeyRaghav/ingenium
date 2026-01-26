"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { PageTransitionWrapper, StarField } from "@/components/chronoverse";
import { visionTimeline, futureTechnologies, sponsors } from "@/data/future";

// Violet stylized corner bracket
const TechCorner = ({ className }) => (
  <svg
    className={`absolute w-4 h-4 text-violet-500/50 ${className}`}
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
                {visionTimeline.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Node Point */}
                    <div className="hidden md:flex justify-center mb-8 relative z-10">
                      <div className="w-5 h-5 bg-[#050308] border-2 border-violet-500 rounded-full group-hover:scale-125 group-hover:bg-violet-500 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] transition-all duration-300" />
                    </div>

                    {/* Card */}
                    <div className="h-full bg-violet-900/5 border border-violet-500/10 hover:border-violet-500/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group-hover:bg-violet-900/10">
                      <TechCorner className="top-0 left-0 rotate-0" />
                      <TechCorner className="bottom-0 right-0 rotate-180" />

                      <div className="flex justify-between items-start mb-4">
                        <span className="text-4xl font-bold text-violet-500/20 group-hover:text-violet-400/80 transition-colors font-mono">
                          {item.year}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                            index === 3
                              ? "border-red-500/30 text-red-400"
                              : "border-violet-500/30 text-violet-400"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <h3 className="text-xl text-white font-medium mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-violet-200/50 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
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
              {futureTechnologies.map((tech, index) => (
                <div
                  key={index}
                  className="group relative bg-black/40 border border-violet-500/20 hover:border-violet-400/60 transition-all duration-300 overflow-hidden"
                >
                  <ScannerLine />

                  <div className="p-6 relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-violet-500/10 rounded flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform duration-300 border border-violet-500/20 group-hover:border-violet-400/50 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                        {tech.icon}
                      </div>
                      <div className="text-[10px] font-mono text-violet-600 group-hover:text-violet-400">
                        {tech.code}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                      {tech.title}
                    </h3>
                    <p className="text-xs text-violet-200/50 mb-6 h-10">
                      {tech.description}
                    </p>

                    {/* Tech Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[9px] font-mono text-violet-500/70">
                        <span>LOAD_CAPACITY</span>
                        <span>{tech.progress}%</span>
                      </div>
                      <div className="h-1 w-full bg-violet-900/40 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-violet-500 transition-all duration-1000 ease-out group-hover:animate-pulse"
                          style={{ width: `${tech.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

            {/* Gold & Silver */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Gold */}
              <div>
                <div className="text-center mb-6">
                  <span className="text-[10px] font-mono text-amber-400/80 tracking-[0.2em] border border-amber-500/20 px-2 py-1 bg-amber-500/5">
                    TIER 2 : GOLD
                  </span>
                </div>
                <div className="space-y-3">
                  {sponsors
                    .filter((s) => s.tier === "Gold")
                    .map((sponsor, i) => (
                      <div
                        key={i}
                        className="py-4 border-b border-amber-500/20 text-center hover:bg-amber-500/5 transition-colors cursor-default"
                      >
                        <span className="text-amber-100/80 font-mono text-sm">
                          {sponsor.name}
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Silver */}
              <div>
                <div className="text-center mb-6">
                  <span className="text-[10px] font-mono text-slate-400/80 tracking-[0.2em] border border-slate-500/20 px-2 py-1 bg-slate-500/5">
                    TIER 3 : SILVER
                  </span>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {sponsors
                    .filter((s) => s.tier === "Silver")
                    .map((sponsor, i) => (
                      <div
                        key={i}
                        className="px-4 py-2 border border-slate-500/20 rounded-full text-xs text-slate-400 font-mono hover:border-slate-400 hover:text-white transition-colors"
                      >
                        {sponsor.name}
                      </div>
                    ))}
                </div>
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
                <button
                  className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold tracking-widest uppercase text-xs transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] clip-path-polygon"
                  style={{
                    clipPath:
                      "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                  }}
                >
                  Become a Partner
                </button>
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
        `}</style>
      </main>
    </PageTransitionWrapper>
  );
}
