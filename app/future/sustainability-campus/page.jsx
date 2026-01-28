"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PageTransitionWrapper, StarField } from "@/components/chronoverse";

const Particles = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const particles = [];
        const particleCount = 30;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.color = `rgba(16, 185, 129, ${this.opacity})`; // Emerald green
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                else if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                else if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
};

const EnergyChart = () => {
    // Simulated SVG Chart
    const points = 20;
    const height = 100;
    const width = 300;
    const [data, setData] = useState(Array.from({ length: points }, () => Math.random() * 40 + 30));

    useEffect(() => {
        const interval = setInterval(() => {
            setData(prev => {
                const newData = [...prev.slice(1), Math.random() * 40 + 30]; // Moving window
                return newData;
            });
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const pathD = `M 0 ${height} ` + data.map((val, i) => `L ${(i / (points - 1)) * width} ${height - val}`).join(" ") + ` L ${width} ${height} Z`;
    const lineD = data.map((val, i) => `${i === 0 ? 'M' : 'L'} ${(i / (points - 1)) * width} ${height - val}`).join(" ");

    return (
        <div className="w-full h-32 bg-[#051505] border border-emerald-500/30 rounded-lg overflow-hidden relative">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(16,185,129,0.4)" />
                        <stop offset="100%" stopColor="rgba(16,185,129,0)" />
                    </linearGradient>
                </defs>
                <path d={pathD} fill="url(#chartFill)" />
                <path d={lineD} fill="none" stroke="#10b981" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            </svg>
            <div className="absolute top-2 left-2 text-[8px] font-mono text-emerald-500">REAL-TIME ENERGY OUTPUT</div>
            <div className="absolute bottom-2 right-2 text-[8px] font-mono text-emerald-400 animate-pulse">LIVE</div>
        </div>
    );
};

export default function SustainabilityPage() {
    const [isCycled, setIsCycled] = useState(false);

    return (
        <PageTransitionWrapper>
            <main className={`relative min-h-screen overflow-hidden selection:bg-emerald-500/30 font-sans transition-colors duration-1000 ${isCycled ? 'bg-[#020502]' : 'bg-[#051005]'}`}>
                <StarField />
                <Particles />

                {/* Organic Gradient Background */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ${isCycled ? 'opacity-40' : 'opacity-100'} bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_60%)] pointer-events-none`} />

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

                    <button
                        onClick={() => setIsCycled(!isCycled)}
                        className="mb-6 inline-flex overflow-hidden rounded-full border border-emerald-500/30 p-1 bg-emerald-950/30 hover:border-emerald-400 cursor-pointer transition-colors"
                        title="Toggle Cycle"
                    >
                        <span className={`px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase transition-colors ${isCycled ? 'text-emerald-500' : 'bg-emerald-500/10 text-emerald-300'}`}>
                            TARGET 2030 {isCycled ? '(NIGHT MODE)' : '(DAY MODE)'}
                        </span>
                    </button>

                    <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-200 via-emerald-400 to-cyan-400 mb-8 tracking-tight">
                        SUSTAINABILITY <br /> CAMPUS
                    </h1>

                    <p className="max-w-2xl mx-auto text-emerald-100/70 text-lg mb-12 leading-relaxed">
                        A net-zero ecosystem powered by renewable energy and integrated with nature.
                        Where technology meets biology to create a regenerative future for Ingenium.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl items-center">
                        {/* Chart Card (Takes up 2 slots on larger screens) */}
                        <div className="md:col-span-2 lg:col-span-2">
                            <EnergyChart />
                        </div>

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
                    </div>

                </div>
            </main>
        </PageTransitionWrapper>
    );
}
