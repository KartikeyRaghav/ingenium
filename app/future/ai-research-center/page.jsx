"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { PageTransitionWrapper, StarField } from "@/components/chronoverse";

export default function AIResearchPage() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const chars = "INGENIUM01";
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.ceil(columns)).fill(1);

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#0F0";
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                // Gradient color for "Matrix" feel
                const isHead = Math.random() > 0.95;
                ctx.fillStyle = isHead ? "#FFF" : `rgba(0, 255, 65, ${Math.random() * 0.5 + 0.5})`;

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <PageTransitionWrapper>
            <main className="relative min-h-screen bg-black overflow-hidden font-mono selection:bg-green-500/30">

                {/* Canvas Background */}
                <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />

                {/* Navigation */}
                <div className="absolute top-8 left-8 z-50">
                    <Link href="/future">
                        <button className="flex items-center gap-2 text-green-400/60 hover:text-white transition-colors group">
                            <div className="w-8 h-8 border border-green-500/30 rounded flex items-center justify-center group-hover:bg-green-500/20 bg-black/50 backdrop-blur">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <span className="text-[10px] font-mono tracking-widest uppercase hidden md:block bg-black/50 px-2 py-1 rounded">Return to Roadmap</span>
                        </button>
                    </Link>
                </div>

                <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center justify-center">
                    <div className="max-w-4xl w-full bg-black/80 border border-green-500/30 p-8 md:p-12 rounded-xl backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-green-500 shadow-[0_0_20px_#0f0]" />

                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            <div className="flex-1">
                                <div className="inline-block px-3 py-1 border border-green-500/50 rounded text-green-400 text-[10px] tracking-widest uppercase mb-6 bg-green-900/20">
                                    Research Facility 2028
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter">
                                    AI <span className="text-green-500 animate-pulse">Research</span> <br /> Center
                                </h1>
                                <p className="text-green-100/70 mb-8 leading-relaxed">
                                    A sanctuary for synthetic intelligence. We are constructing a GPU-dense cluster dedicated to solving humanity's most complex problems through Deep Learning, Neural Interfaces, and Autonomous Systems.
                                </p>

                                <div className="space-y-4">
                                    {["Neural Networks", "Computer Vision", "Natural Language Processing"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <div className="w-2 h-2 bg-green-500 rounded-sm group-hover:rotate-45 transition-transform" />
                                            <div className="h-px flex-1 bg-green-900 group-hover:bg-green-500/50 transition-colors" />
                                            <span className="text-sm text-green-400 group-hover:text-white transition-colors">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Column: Code/Terminal Visual */}
                            <div className="w-full md:w-80 font-mono text-xs">
                                <div className="bg-[#0a0a0a] border border-green-500/20 p-4 rounded h-64 overflow-hidden relative">
                                    <div className="text-green-500/50 mb-2 border-b border-green-500/10 pb-2">SYS_LOG.txt</div>
                                    <div className="space-y-1 text-green-300/80">
                                        <p>&gt; Initializing core...</p>
                                        <p>&gt; Allocated 4096 TB Volume</p>
                                        <p>&gt; Training model v.4.0.1</p>
                                        <p className="animate-pulse">&gt; ...</p>
                                        <p className="text-green-500">&gt;&gt; OPTIMIZATION COMPLETE</p>
                                    </div>
                                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-green-500 animate-ping" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </PageTransitionWrapper>
    );
}
