"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { PageTransitionWrapper, StarField } from "@/components/chronoverse";
import gsap from "gsap";
import NeuralLink from "@/components/NeuralLink";

const UniversityNode = ({ cx, cy, delay, name }) => (
  <g className="group cursor-pointer">
    <circle
      cx={cx}
      cy={cy}
      r="4"
      className="fill-violet-500 animate-[pulse_3s_ease-in-out_infinite]"
      style={{ animationDelay: `${delay}s` }}
    />
    <circle
      cx={cx}
      cy={cy}
      r="8"
      className="stroke-violet-400/50 stroke-1 fill-none animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"
      style={{ animationDelay: `${delay}s` }}
    />
    {/* Label on hover */}
    <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <rect
        x={cx + 10}
        y={cy - 10}
        width="120"
        height="24"
        rx="2"
        className="fill-black/80 stroke-violet-500/30"
      />
      <text
        x={cx + 20}
        y={cy + 6}
        className="fill-violet-300 text-[10px] font-mono tracking-wider"
      >
        {name}
      </text>
      <line
        x1={cx}
        y1={cy}
        x2={cx + 10}
        y2={cy}
        className="stroke-violet-500/50"
      />
    </g>
  </g>
);

const ConnectionLine = ({ x1, y1, x2, y2, delay }) => (
  <line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    className="stroke-violet-500/20 stroke-1"
    strokeDasharray="4 4"
  >
    <animate
      attributeName="stroke-opacity"
      values="0.2;1;0.2"
      dur="3s"
      begin={delay}
      repeatCount="indefinite"
    />
  </line>
);

export default function GlobalExpansionPage() {
  const mapRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".map-node", {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "back.out(1.7)",
      });

      gsap.from(".content-block", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        delay: 0.5,
      });
    }, mapRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageTransitionWrapper>
      <main
        ref={mapRef}
        className="relative min-h-screen bg-[#050308] overflow-hidden selection:bg-violet-500/30 font-sans"
      >
        <StarField />
        <NeuralLink />
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-size-[60px_60px] opacity-30" />

        {/* Navigation */}
        <div className="absolute top-8 left-8 z-50">
          <Link href="/future">
            <button className="flex items-center gap-2 text-violet-400/60 hover:text-white transition-colors group">
              <div className="w-8 h-8 border border-violet-500/30 rounded flex items-center justify-center group-hover:bg-violet-500/20">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <span className="text-[10px] font-mono tracking-widest uppercase hidden md:block">
                Return to Roadmap
              </span>
            </button>
          </Link>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/3 content-block">
            <div className="mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
              <span className="text-violet-500/50 font-mono text-xs tracking-[0.2em]">
                VISION 2026
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              GLOBAL <br /> <span className="text-violet-500">EXPANSION</span>
            </h1>
            <p className="text-violet-200/60 leading-relaxed mb-8 border-l-2 border-violet-500/20 pl-4">
              Ingenium escapes the boundaries of the local. By 2026, we
              establish a neural network of innovation across 50+ international
              universities, creating a seamless exchange of ideas, code, and
              culture.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-violet-900/10 border border-violet-500/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-[10px] text-violet-400 uppercase tracking-wider">
                  Partner Unis
                </div>
              </div>
              <div className="bg-violet-900/10 border border-violet-500/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-white mb-1">12</div>
                <div className="text-[10px] text-violet-400 uppercase tracking-wider">
                  Countries
                </div>
              </div>
              <div className="bg-violet-900/10 border border-violet-500/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-[10px] text-violet-400 uppercase tracking-wider">
                  Global Hackathons
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-linear-to-r from-violet-500/50 to-transparent mb-8" />

            <div className="text-xs font-mono text-violet-500/40">
              STATUS: <span className="text-green-400">INITIATED</span>
            </div>
          </div>

          {/* Right Visual: Holographic Map */}
          <div className="w-full md:w-2/3 h-125 relative bg-[#080510] border border-violet-500/20 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.1)] map-node">
            {/* World Map SVG Representation */}
            <div className="absolute inset-0 opacity-20">
              <svg
                viewBox="0 0 800 400"
                className="w-full h-full text-violet-500 fill-current"
              >
                {/* Simplified World Map Path (Low Poly style) */}
                <path d="M150,100 Q180,80 200,110 T250,150 T300,120 T350,180 T200,250 T100,200 Z" />{" "}
                {/* Americas approximation */}
                <path d="M380,80 Q450,50 500,80 T550,150 T500,250 T400,280 T350,200 Z" />{" "}
                {/* Europe/Africa approximation */}
                <path d="M580,80 Q650,60 700,90 T750,180 T700,250 T600,280 T550,200 Z" />{" "}
                {/* Asia/Aus approximation */}
              </svg>
            </div>

            {/* Connection Network Overlay */}
            <svg className="absolute inset-0 w-full h-full">
              <ConnectionLine x1="200" y1="110" x2="450" y2="80" delay="0" />
              <ConnectionLine x1="450" y1="80" x2="650" y2="90" delay="1" />
              <ConnectionLine x1="250" y1="150" x2="500" y2="250" delay="2" />

              <UniversityNode cx="200" cy="110" delay="0.5" name="MIT Node" />
              <UniversityNode cx="450" cy="80" delay="1.2" name="Oxford Hub" />
              <UniversityNode cx="650" cy="90" delay="2.5" name="Tokyo Tech" />
              <UniversityNode
                cx="250"
                cy="150"
                delay="0.8"
                name="Stanford Node"
              />
              <UniversityNode
                cx="500"
                cy="250"
                delay="1.8"
                name="Cape Town Link"
              />
            </svg>

            {/* Scanning Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-violet-500/5 to-transparent pointer-events-none animate-scan-fast" />
          </div>
        </div>
      </main>
    </PageTransitionWrapper>
  );
}
