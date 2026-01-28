"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PageTransitionWrapper, StarField } from "@/components/chronoverse";

const Orbit = ({ radius, speed, delay, color }) => (
    <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-current opacity-30"
        style={{
            width: radius * 2,
            height: radius * 2,
            color: color
        }}
    >
        <div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-current shadow-[0_0_10px_currentColor] animate-spin-orbit"
            style={{
                animationDuration: `${speed}s`,
                animationDelay: `${delay}s`,
                transformOrigin: `50% ${radius + 6}px` // +6 to account for half dot size
            }}
        />
        <style jsx>{`
            @keyframes spin-orbit {
                from { transform: translate(-50%, -50%) rotate(0deg); }
                to { transform: translate(-50%, -50%) rotate(360deg); }
            }
            .animate-spin-orbit {
                animation: spin-orbit linear infinite;
            }
        `}</style>
    </div>
);

export default function SpacePage() {
    return (
        <PageTransitionWrapper>
            <main className="relative min-h-screen bg-[#000005] overflow-hidden selection:bg-blue-500/30 font-sans">
                <StarField />

                {/* Deep Space Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#0c1220_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1e1b4b_0%,transparent_50%)] opacity-30" />

                {/* Back Link */}
                <div className="absolute top-8 left-8 z-50">
                    <Link href="/future">
                        <button className="flex items-center gap-2 text-blue-400/60 hover:text-white transition-colors group">
                            <div className="w-8 h-8 border border-blue-500/30 rounded flex items-center justify-center group-hover:bg-blue-500/20 bg-black/40 backdrop-blur">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <span className="text-[10px] font-mono tracking-widest uppercase hidden md:block px-2 py-1 rounded bg-black/40">Return to Roadmap</span>
                        </button>
                    </Link>
                </div>

                <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex flex-col md:flex-row items-center gap-12">

                    {/* Left Content */}
                    <div className="w-full md:w-1/2 z-20">
                        <div className="inline-flex items-center gap-2 mb-6 border border-blue-500/30 px-3 py-1 rounded-full bg-blue-950/30 backdrop-blur">
                            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                            <span className="text-[10px] font-mono text-blue-300 uppercase tracking-[0.2em]">Mission Control</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">
                            Space <br /> Technology
                        </h1>

                        <p className="text-blue-200/60 mb-8 leading-relaxed text-lg max-w-xl">
                            Advancing humanity's reach into the cosmos. The ASTRO-X initiative focuses on next-generation propulsion, satellite constellations, and deep space telemetry.
                        </p>

                        <div className="space-y-4 font-mono text-xs text-blue-400">
                            <div className="flex items-center gap-4 p-3 border border-blue-500/20 rounded bg-blue-900/10 hover:bg-blue-900/20 transition-colors cursor-pointer group">
                                <span className="text-white font-bold">01</span>
                                <div className="h-4 w-px bg-blue-500/30" />
                                <span className="flex-1 text-blue-200/80 group-hover:text-white">Orbital Mechanics Sim</span>
                                <span className="text-green-400">ONLINE</span>
                            </div>
                            <div className="flex items-center gap-4 p-3 border border-blue-500/20 rounded bg-blue-900/10 hover:bg-blue-900/20 transition-colors cursor-pointer group">
                                <span className="text-white font-bold">02</span>
                                <div className="h-4 w-px bg-blue-500/30" />
                                <span className="flex-1 text-blue-200/80 group-hover:text-white">Telemetry Downlink</span>
                                <span className="text-yellow-400 flex items-center gap-2">
                                    CONNECTING
                                    <span className="w-1 h-1 bg-yellow-400 rounded-full animate-bounce" />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual: Solar System / Orbit */}
                    <div className="w-full md:w-1/2 h-[500px] relative flex items-center justify-center perspective-[1000px]">

                        {/* 3D Plane Effect */}
                        <div className="relative w-[400px] h-[400px] transform rotate-x-60">
                            {/* Sun/Center */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500 rounded-full blur-[40px] opacity-40 animate-pulse" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-[0_0_50px_#3b82f6]" />

                            {/* Orbits */}
                            <Orbit radius={80} speed={4} delay={0} color="#60a5fa" />
                            <Orbit radius={130} speed={8} delay={1} color="#93c5fd" />
                            <Orbit radius={190} speed={12} delay={2} color="#3b82f6" />
                        </div>

                        <div className="absolute bottom-10 right-10 text-right">
                            <div className="text-[40px] font-bold text-white/10 font-mono">ASTRO-X</div>
                        </div>

                    </div>
                </div>
            </main>
        </PageTransitionWrapper>
    );
}
