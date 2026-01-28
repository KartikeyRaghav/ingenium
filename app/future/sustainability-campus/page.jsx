"use client";

import Link from "next/link";
import { PageTransitionWrapper, StarField } from "@/components/chronoverse";

export default function SustainabilityPage() {
    return (
        <PageTransitionWrapper>
            <main className="relative min-h-screen bg-[#051005] overflow-hidden selection:bg-emerald-500/30 font-sans">
                <StarField />

                {/* Organic Gradient Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_60%)] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-emerald-900/20 to-transparent pointer-events-none" />

                {/* Back Link */}
                <div className="absolute top-8 left-8 z-50">
                    <Link href="/future">
                        <button className="flex items-center gap-2 text-emerald-400/60 hover:text-white transition-colors group">
                            <div className="w-8 h-8 border border-emerald-500/30 rounded flex items-center justify-center group-hover:bg-emerald-500/20 bg-black/40 backdrop-blur">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <span className="text-[10px] font-mono tracking-widest uppercase hidden md:block px-2 py-1 rounded bg-black/40">Return to Roadmap</span>
                        </button>
                    </Link>
                </div>

                <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center text-center">

                    <div className="mb-6 inline-flex overflow-hidden rounded-full border border-emerald-500/30 p-1 bg-emerald-950/30">
                        <span className="px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-[10px] font-bold tracking-widest uppercase">
                            TARGET 2030
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-200 via-emerald-400 to-cyan-400 mb-8 tracking-tight">
                        SUSTAINABILITY <br /> CAMPUS
                    </h1>

                    <p className="max-w-2xl mx-auto text-emerald-100/70 text-lg mb-12 leading-relaxed">
                        A net-zero ecosystem powered by renewable energy and integrated with nature.
                        Where technology meets biology to create a regenerative future for Ingenium.
                    </p>

                    {/* Energy Dashboard Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                        {/* Solar Card */}
                        <div className="bg-[#0a1a0a]/80 border border-emerald-500/20 p-6 rounded-2xl backdrop-blur-sm group hover:border-emerald-400/50 transition-all">
                            <div className="w-12 h-12 mb-4 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <div className="text-3xl font-mono font-bold text-white mb-1">100%</div>
                            <div className="text-xs text-emerald-400/60 uppercase tracking-wider">Renewable Energy</div>
                        </div>

                        {/* Carbon Card */}
                        <div className="bg-[#0a1a0a]/80 border border-emerald-500/20 p-6 rounded-2xl backdrop-blur-sm group hover:border-emerald-400/50 transition-all">
                            <div className="w-12 h-12 mb-4 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="text-3xl font-mono font-bold text-white mb-1">Zero</div>
                            <div className="text-xs text-emerald-400/60 uppercase tracking-wider">Carbon Footprint</div>
                        </div>

                        {/* Waste Card */}
                        <div className="bg-[#0a1a0a]/80 border border-emerald-500/20 p-6 rounded-2xl backdrop-blur-sm group hover:border-emerald-400/50 transition-all">
                            <div className="w-12 h-12 mb-4 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                            <div className="text-3xl font-mono font-bold text-white mb-1">Circular</div>
                            <div className="text-xs text-emerald-400/60 uppercase tracking-wider">Waste Economy</div>
                        </div>
                    </div>

                    {/* Leaf Particles Simulation (CSS only) */}
                    <div className="absolute inset-0 pointer-events-none opacity-20">
                        {[...Array(10)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-2 h-2 bg-emerald-500 rounded-full animate-float"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    animationDuration: `${5 + Math.random() * 5}s`
                                }}
                            />
                        ))}
                    </div>

                </div>
            </main>
        </PageTransitionWrapper>
    );
}
