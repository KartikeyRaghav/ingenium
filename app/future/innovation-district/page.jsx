"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PageTransitionWrapper, StarField } from "@/components/chronoverse";

const BlueprintZone = ({ x, y, width, height, title, description, active, onClick }) => (
    <g
        onClick={onClick}
        className="group cursor-pointer transition-all duration-300"
    >
        <rect
            x={x}
            y={y}
            width={width}
            height={height}
            className={`stroke-2 transition-all duration-300 ${active ? 'fill-blue-500/20 stroke-blue-400' : 'fill-transparent stroke-blue-500/30 group-hover:stroke-blue-400 group-hover:fill-blue-500/10'}`}
        />
        {/* Corner marks */}
        <path d={`M${x},${y + 10} V${y} H${x + 10}`} className="stroke-blue-400 fill-none" />
        <path d={`M${x + width},${y + 10} V${y} H${x + width - 10}`} className="stroke-blue-400 fill-none" />
        <path d={`M${x},${y + height - 10} V${y + height} H${x + 10}`} className="stroke-blue-400 fill-none" />
        <path d={`M${x + width},${y + height - 10} V${y + height} H${x + width - 10}`} className="stroke-blue-400 fill-none" />

        <text x={x + 10} y={y + 20} className="fill-blue-300 text-xs font-mono uppercase tracking-widest">{title}</text>
    </g>
);

export default function InnovationDistrictPage() {
    const [activeZone, setActiveZone] = useState(0);

    const zones = [
        { title: "Incubation Hub", desc: "Co-working spaces for student startups.", x: 50, y: 50, w: 200, h: 150 },
        { title: "Fab Lab", desc: "3D printing, laser cutting, and CNC machining center.", x: 280, y: 50, w: 150, h: 100 },
        { title: "VR/AR Zone", desc: "Immersive technology testing grounds.", x: 280, y: 180, w: 150, h: 120 },
        { title: "Data Center", desc: "High-performance computing cluster.", x: 50, y: 230, w: 200, h: 100 },
    ];

    return (
        <PageTransitionWrapper>
            <main className="relative min-h-screen bg-[#02040a] overflow-hidden selection:bg-blue-500/30 font-sans">
                <StarField />

                {/* Blueprint Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-size-[20px_20px] opacity-20" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.2)_1px,transparent_1px)] bg-size-[100px_100px] opacity-20" />

                {/* Back Link */}
                <div className="absolute top-8 left-8 z-50">
                    <Link href="/future">
                        <button className="flex items-center gap-2 text-blue-400/60 hover:text-white transition-colors group">
                            <div className="w-8 h-8 border border-blue-500/30 rounded flex items-center justify-center group-hover:bg-blue-500/20">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                            <span className="text-[10px] font-mono tracking-widest uppercase hidden md:block">Return to Roadmap</span>
                        </button>
                    </Link>
                </div>

                <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col lg:flex-row gap-12">

                    {/* Info Panel */}
                    <div className="lg:w-1/3 order-2 lg:order-1">
                        <div className="mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                            <span className="text-blue-500/50 font-mono text-xs tracking-[0.2em]">VISION 2027</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase">
                            Innovation <br /> <span className="text-blue-500">District</span>
                        </h1>
                        <p className="text-blue-200/60 leading-relaxed mb-8">
                            A dedicated architectural marvel designed to foster creativity.
                            The Innovation District serves as the physical manifestation of Ingenium's spirit.
                        </p>

                        {/* Active Zone Detail */}
                        <div className="bg-blue-950/20 border border-blue-500/30 p-6 rounded-lg backdrop-blur-md transition-all duration-300">
                            <div className="text-xs font-mono text-blue-500 mb-2 uppercase tracking-widest">Selected Sector</div>
                            <h3 className="text-2xl font-bold text-white mb-2">{zones[activeZone].title}</h3>
                            <p className="text-blue-200/50 text-sm mb-4">{zones[activeZone].desc}</p>
                            <div className="h-1 w-full bg-blue-900/50 rounded overflow-hidden">
                                <div className="h-full bg-blue-500 w-2/3 animate-[scan_2s_linear_infinite]" />
                            </div>
                        </div>
                    </div>

                    {/* Interactive Blueprint */}
                    <div className="lg:w-2/3 order-1 lg:order-2 h-[400px] lg:h-[600px] relative bg-[#050a15] border border-blue-500/20 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                        <svg className="w-full h-full" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid meet">
                            <defs>
                                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(59,130,246,0.1)" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />

                            {zones.map((zone, i) => (
                                <BlueprintZone
                                    key={i}
                                    {...zone}
                                    active={activeZone === i}
                                    onClick={() => setActiveZone(i)}
                                />
                            ))}

                            {/* Measurement Lines */}
                            <path d="M50,350 H430" className="stroke-blue-500/30 marker-end-[url(#arrow)]" />
                            <text x="240" y="370" className="fill-blue-500/50 text-[10px] font-mono">125 METERS</text>
                        </svg>

                        <div className="absolute bottom-4 right-4 text-[10px] font-mono text-blue-500/30">
                            SCHEMATIC: BLU-2027-X
                        </div>
                    </div>

                </div>
            </main>
        </PageTransitionWrapper>
    );
}
