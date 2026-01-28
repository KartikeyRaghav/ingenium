"use client";

import Link from "next/link";
import { PageTransitionWrapper, StarField } from "@/components/chronoverse";

const DNAStrand = () => (
    <div className="flex items-center gap-2 h-[400px] animate-fade-in">
        {[...Array(20)].map((_, i) => (
            <div
                key={i}
                className="flex flex-col items-center gap-1 animate-dna-spin"
                style={{
                    animationDelay: `${i * 0.1}s`,
                    opacity: 0.8
                }}
            >
                <div className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_10px_#f43f5e]" />
                <div className="w-px h-20 bg-linear-to-b from-rose-500 to-cyan-400 opacity-50" />
                <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
            </div>
        ))}
        <style jsx>{`
            @keyframes dna-spin {
                0% { transform: translateY(0) scale(1); opacity: 1; }
                50% { transform: translateY(20px) scale(0.6); opacity: 0.4; }
                100% { transform: translateY(0) scale(1); opacity: 1; }
            }
            .animate-dna-spin {
                animation: dna-spin 3s ease-in-out infinite;
            }
        `}</style>
    </div>
);

export default function BioTechPage() {
    return (
        <PageTransitionWrapper>
            <main className="relative min-h-screen bg-[#050002] overflow-hidden selection:bg-rose-500/30 font-sans">
                <StarField />

                {/* Background Gradients */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.1),transparent_70%)] pointer-events-none" />

                {/* Genetic Code Background Overlay */}
                <div className="absolute inset-0 opacity-10 font-mono text-[10px] text-rose-500 overflow-hidden pointer-events-none whitespace-pre-wrap p-4 break-all">
                    {Array(500).fill("A T G C ").join("")}
                </div>

                {/* Back Link */}
                <div className="absolute top-8 left-8 z-50">
                    <Link href="/future">
                        <button className="flex items-center gap-2 text-rose-400/60 hover:text-white transition-colors group">
                            <div className="w-8 h-8 border border-rose-500/30 rounded flex items-center justify-center group-hover:bg-rose-500/20 bg-black/40 backdrop-blur">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <span className="text-[10px] font-mono tracking-widest uppercase hidden md:block px-2 py-1 rounded bg-black/40">Return to Roadmap</span>
                        </button>
                    </Link>
                </div>

                <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex flex-col items-center justify-center">

                    <div className="mb-8 relative">
                        <div className="absolute -inset-10 bg-rose-500/20 blur-[50px] rounded-full" />
                        <DNAStrand />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-rose-200 via-rose-500 to-cyan-500 mb-6 uppercase tracking-tight text-center relative z-10">
                        Bio-Technology
                    </h1>

                    <div className="max-w-2xl text-center relative z-10">
                        <p className="text-rose-100/70 mb-8 leading-relaxed text-lg">
                            Decoding the fabric of life itself. The HELIX-V project explores genetic engineering, bio-informatics, and synthetic biology to redefine healthcare and longevity.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="px-4 py-2 rounded-full border border-rose-500/30 bg-rose-950/30 text-rose-300 text-xs font-mono uppercase tracking-wider">
                                CRISPR-Cas9
                            </span>
                            <span className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
                                Neural Lace
                            </span>
                            <span className="px-4 py-2 rounded-full border border-purple-500/30 bg-purple-950/30 text-purple-300 text-xs font-mono uppercase tracking-wider">
                                Xeno-Transplant
                            </span>
                        </div>
                    </div>

                    {/* Scanning Bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-rose-500/50 shadow-[0_0_20px_#f43f5e] animate-scan-screen pointer-events-none" />
                    <style jsx global>{`
                @keyframes scan-screen {
                    0% { top: 0%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                .animate-scan-screen {
                    animation: scan-screen 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                }
            `}</style>
                </div>
            </main>
        </PageTransitionWrapper>
    );
}
