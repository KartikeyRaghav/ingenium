"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  PageTransitionWrapper,
  StarField,
  GlowButton,
} from "@/components/chronoverse";

// --- Time Calculation Logic ---
function calculateTimeLeft() {
  const targetDate = new Date("2026-02-15T00:00:00");
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

// --- Sub-Components for Advanced UI ---

// Tech Corner Bracket (Cyan)
const TechCorner = ({ className }) => (
  <svg className={`absolute w-4 h-4 text-cyan-500/60 ${className}`} viewBox="0 0 24 24" fill="none">
    <path d="M2 2h20v20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <path d="M2 2h8M2 2v8" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// Advanced Reactor Ring Component
function ReactorRing({ value, max, label, delay }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / max) * circumference;
  
  return (
    <div className="relative group flex flex-col items-center justify-center p-4">
      {/* Container Box with Tech Borders */}
      <div className="absolute inset-0 bg-cyan-950/10 border border-cyan-500/20 rounded-xl backdrop-blur-sm -skew-x-3 transform transition-all group-hover:bg-cyan-900/20 group-hover:border-cyan-400/50" />
      
      <TechCorner className="top-2 left-2 rotate-0" />
      <TechCorner className="bottom-2 right-2 rotate-180" />

      {/* The Reactor Visualization */}
      <div className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center z-10">
        
        {/* Outer Rotating Gear (Decorative) */}
        <div className="absolute inset-0 border border-dashed border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
        
        {/* Inner Counter-Rotating Ring */}
        <div className="absolute inset-4 border border-dotted border-blue-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

        {/* Progress SVG */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
          {/* Background Track */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="rgba(6, 182, 212, 0.1)"
            strokeWidth="2"
          />
          {/* Active Progress Bar */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="url(#cyanGradient)"
            strokeWidth="6"
            strokeLinecap="butt" // "Butt" looks more mechanical than "round"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={circumference - progress}
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" /> {/* Cyan-400 */}
              <stop offset="100%" stopColor="#3b82f6" /> {/* Blue-500 */}
            </linearGradient>
          </defs>
        </svg>

        {/* Digital Value Display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl md:text-6xl font-bold font-mono tracking-tighter text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-[10px] md:text-xs text-cyan-400/80 font-mono uppercase tracking-[0.3em] mt-2 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/30">
            {label}
          </span>
        </div>
      </div>
      
      {/* Bottom Status Light */}
      <div className="absolute bottom-3 flex gap-1">
         <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
         <div className="w-1.5 h-1.5 bg-cyan-500/30 rounded-full" />
         <div className="w-1.5 h-1.5 bg-cyan-500/30 rounded-full" />
      </div>
    </div>
  );
}

// Data Panel Component (Fake Telemetry)
const TelemetryPanel = ({ label, value, status, color = "text-cyan-400" }) => (
    <div className="hidden md:flex flex-col p-3 bg-black/40 border-l-2 border-cyan-500/30 backdrop-blur-md">
        <span className="text-[9px] text-cyan-500/50 font-mono uppercase tracking-widest mb-1">{label}</span>
        <div className="flex items-end gap-2">
            <span className={`text-xl font-mono leading-none ${color}`}>{value}</span>
            <span className="text-[9px] text-cyan-500/40 font-mono">{status}</span>
        </div>
    </div>
);

export default function TimeCorePage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <PageTransitionWrapper>
      <main className="relative min-h-screen bg-[#02040a] overflow-hidden flex flex-col items-center justify-center">
        
        {/* --- Background Layers --- */}
        <StarField density={2000} /> {/* Increased density for warp effect */}
        
        {/* Radial Energy Burst */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,transparent_60%)] animate-pulse-slow" />
        
        {/* Cyber Grid Perspective */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />

        {/* Central Rotating Core (Behind Content) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
           <div className="absolute inset-0 border border-cyan-500/10 rounded-full animate-[spin_60s_linear_infinite]" />
           <div className="absolute inset-10 border border-blue-500/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
           <div className="absolute inset-20 border border-cyan-500/10 rounded-full animate-[spin_20s_linear_infinite]" />
        </div>

        {/* --- Main UI Content --- */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
          
          {/* Top Header: Navigation & Status */}
          <div className="absolute top-0 left-0 w-full px-6 py-8 flex justify-between items-start">
             <Link href="/?state=navigation">
              <button className="group flex items-center gap-3 text-cyan-400/70 hover:text-cyan-200 transition-colors uppercase text-xs tracking-[0.2em]">
                <div className="w-8 h-8 rounded-full border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/10 transition-all">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </div>
                <span>Abort to Main</span>
              </button>
            </Link>
            
            <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-500">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                  SEQUENCE: INITIATED
                </div>
                <div className="text-[10px] font-mono text-cyan-500/40">ID: T-MINUS-ACTUAL</div>
            </div>
          </div>

          {/* Title Section */}
          <div className="text-center mb-16 relative">
            <div className="absolute -inset-x-20 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            
            <div className="inline-block relative bg-[#02040a] px-8">
              <span className="block text-cyan-400 text-xs font-mono tracking-[0.5em] mb-2 uppercase">Target Coordinates Locked</span>
              <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                INGENIUM
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"> 26</span>
              </h1>
            </div>
            
            <p className="mt-4 text-cyan-200/60 font-light tracking-widest uppercase text-sm">
              Temporal Synchronization in Progress
            </p>
          </div>

          {/* The Countdown Core */}
          <div className="relative">
            {/* Horizontal Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-cyan-500/20 -z-10 hidden md:block" />
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
              <ReactorRing value={timeLeft.days} max={365} label="Days" delay={0} />
              <ReactorRing value={timeLeft.hours} max={24} label="Hours" delay={100} />
              <ReactorRing value={timeLeft.minutes} max={60} label="Minutes" delay={200} />
              <ReactorRing value={timeLeft.seconds} max={60} label="Seconds" delay={300} />
            </div>
          </div>

          {/* Bottom HUD / Telemetry Deck */}
          <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
             <TelemetryPanel label="Core Temp" value="4,500 K" status="STABLE" />
             <TelemetryPanel label="Flux Capacitor" value="1.21 GW" status="CHARGING" color="text-yellow-400" />
             <TelemetryPanel label="Temporal Drift" value="0.004 ms" status="NOMINAL" />
             <TelemetryPanel label="Participation" value="12,405" status="UNITS" />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-6 relative z-20">
            <Link href="/present">
              <button className="px-8 py-4 bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 font-mono text-sm uppercase tracking-widest clip-path-polygon"
                style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}>
                Access Current Timeline
              </button>
            </Link>
            
            <Link href="/contact">
               <button className="px-8 py-4 bg-transparent border border-cyan-500/20 text-cyan-500/60 hover:text-cyan-400 hover:border-cyan-400 transition-all font-mono text-sm uppercase tracking-widest">
                Establish Comms
              </button>
            </Link>
          </div>

        </div>

        {/* Global Keyframes for Spinning/Pulsing */}
        <style jsx global>{`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(1.1); }
          }
          .animate-pulse-slow {
             animation: pulse-slow 8s ease-in-out infinite;
          }
        `}</style>

      </main>
    </PageTransitionWrapper>
  );
}