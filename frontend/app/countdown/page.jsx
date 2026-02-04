"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { PageTransitionWrapper } from "@/components/chronoverse";
import gsap from "gsap";

// --- Time Calculation Logic ---
function calculateTimeLeft() {
  const targetDate = new Date("2026-03-14T18:00:00");
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    expired: false,
  };
}

// --- Sub-Components for Advanced UI ---
const EventHorizon = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(containerRef.current, { opacity: 1, duration: 1 })
      .fromTo(
        ".glitch-text",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "expo.out" }
      )
      .to(".energy-beam", {
        height: "100vh",
        opacity: 0.5,
        stagger: 0.1,
        duration: 0.8,
        ease: "power4.inOut",
      });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black/30 opacity-0 px-4 md:px-0"
    >
      <Link href="/?state=navigation" className="z-20 mb-10 self-start absolute top-6 left-6 md:relative md:top-auto md:left-auto">
        <button className="group flex items-center gap-3 text-cyan-400/70 hover:text-cyan-200 transition-colors uppercase text-xs tracking-[0.2em]">
          <div className="w-8 h-8 rounded-full border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/10 transition-all">
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </div>
          <span className="hidden sm:inline">Return to Chronoverse</span>
          <span className="sm:hidden">Back</span>
        </button>
      </Link>
      <div className="relative text-center z-10 w-full max-w-4xl">
        <div className="absolute -inset-10 bg-cyan-500/20 blur-[100px] animate-pulse" />
        <h2 className="glitch-text text-4xl sm:text-6xl md:text-9xl font-black text-white tracking-widest mb-4 break-words">
          INGENIUM <span className="text-cyan-400 block sm:inline">ONLINE</span>
        </h2>
        <div className="h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent mb-8" />
        <p className="text-cyan-400 font-mono text-xs sm:text-base tracking-[0.2em] sm:tracking-[0.5em] animate-bounce px-2">
          TEMPORAL ANOMALY DETECTED // PROTOCOL ACTIVATED
        </p>
      </div>
      <Link href="/present" className="z-20">
        <button className="mt-12 px-8 py-3 sm:px-12 sm:py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-500 font-mono uppercase text-sm sm:text-base tracking-[0.3em] shadow-[0_0_20px_rgba(6,182,212,0.4)]">
          Enter the Event
        </button>
      </Link>
    </div>
  );
};

// Tech Corner Bracket (Cyan)
const TechCorner = ({ className }) => (
  <svg
    className={`absolute w-4 h-4 text-cyan-500/60 ${className}`}
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
    <path d="M2 2h8M2 2v8" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// Advanced Reactor Ring Component
function ReactorRing({ value, max, label, delay }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / max) * circumference;

  return (
    <div className="relative group flex flex-col items-center justify-center p-2 sm:p-4">
      {/* Container Box with Tech Borders */}
      <div className="absolute inset-0 bg-cyan-950/10 border border-cyan-500/20 rounded-xl backdrop-blur-sm -skew-x-3 transform transition-all group-hover:bg-cyan-900/20 group-hover:border-cyan-400/50" />

      <TechCorner className="top-2 left-2 rotate-0" />
      <TechCorner className="bottom-2 right-2 rotate-180" />

      {/* The Reactor Visualization */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center z-10">
        {/* Outer Rotating Gear (Decorative) */}
        <div className="absolute inset-0 border border-dashed border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]" />

        {/* Inner Counter-Rotating Ring */}
        <div className="absolute inset-4 border border-dotted border-blue-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

        {/* Progress SVG */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
          viewBox="0 0 160 160" // Explicit viewBox to ensure scaling works
        >
          {/* Background Track */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="rgba(6, 182, 212, 0.1)"
            strokeWidth="2"
          />
          {/* Active Progress Bar */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke="url(#cyanGradient)"
            strokeWidth="6"
            strokeLinecap="butt"
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
          <span className="text-3xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tighter text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-[9px] sm:text-[10px] md:text-xs text-cyan-400/80 font-mono uppercase tracking-[0.3em] mt-1 sm:mt-2 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/30">
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
  // Removed 'hidden' to make it responsive (show on mobile in grid)
  <div className="flex flex-col p-2 sm:p-3 bg-black/40 border-l-2 border-cyan-500/30 backdrop-blur-md min-w-[120px]">
    <span className="text-[8px] sm:text-[9px] text-cyan-500/50 font-mono uppercase tracking-widest mb-1">
      {label}
    </span>
    <div className="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-2">
      <span className={`text-base sm:text-xl font-mono leading-none ${color}`}>
        {value}
      </span>
      <span className="text-[8px] sm:text-[9px] text-cyan-500/40 font-mono">
        {status}
      </span>
    </div>
  </div>
);

export default function TimeCorePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });
  const [mounted, setMounted] = useState(false);
  const mainContentRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const initialTime = calculateTimeLeft();
    setTimeLeft(initialTime);

    const timer = setInterval(() => {
      const time = calculateTimeLeft();
      setTimeLeft(time);

      // TRIGGER GSAP SHAKE if seconds < 5
      if (
        !time.expired &&
        time.days === 0 &&
        time.hours === 0 &&
        time.minutes === 0 &&
        time.seconds < 10
      ) {
        gsap.to(mainContentRef.current, {
          x: "+=2",
          yoyo: true,
          repeat: 5,
          duration: 0.05,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <PageTransitionWrapper>
      <main
        ref={mainContentRef}
        className="relative min-h-screen bg-black/30 overflow-x-hidden flex flex-col items-center justify-center py-10 md:py-0"
      >
        {/* If expired, show the EventHorizon overlay */}
        {timeLeft.expired ? (
          <EventHorizon />
        ) : (
          <>
            {/* Existing Backgrounds */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,transparent_60%)] animate-pulse-slow" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-size-[60px_60px] opacity-30 mask-[radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />

            {/* Main Content */}
            <div
              className={`relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center transition-opacity duration-1000 ${timeLeft.expired ? "opacity-0 scale-95" : "opacity-100"}`}
            >
              {/* Top Header */}
              <div className="absolute top-0 left-0 w-full px-4 sm:px-6 py-4 sm:py-8 flex justify-between items-start z-50">
                <Link href="/?state=navigation">
                  <button className="group flex items-center gap-3 text-cyan-400/70 hover:text-cyan-200 transition-colors uppercase text-xs tracking-[0.2em]">
                    <div className="w-8 h-8 rounded-full border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/10 transition-all">
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
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                    </div>
                    <span className="hidden sm:inline">
                      Return to Chronoverse
                    </span>
                    <span className="sm:hidden">Back</span>
                  </button>
                </Link>

                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-2 text-[8px] sm:text-[10px] font-mono text-cyan-500">
                    <span
                      className={`w-2 h-2 rounded-full ${timeLeft.expired ? "bg-red-500" : "bg-cyan-400 animate-ping"}`}
                    />
                    {timeLeft.expired
                      ? "CRITICAL: BREACH"
                      : "SEQUENCE: INITIATED"}
                  </div>
                </div>
              </div>

              {/* Title Section */}
              <div className="text-center mt-12 sm:mt-0 mb-8 sm:mb-16 relative w-full">
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                  INGENIUM
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600 block sm:inline sm:ml-4">
                    26
                  </span>
                </h1>
              </div>

              {/* Reactor Rings */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-12 mb-8 sm:mb-16 w-full max-w-[340px] sm:max-w-none">
                <ReactorRing
                  value={timeLeft.days}
                  max={365}
                  label="Days"
                  delay={0}
                />
                <ReactorRing
                  value={timeLeft.hours}
                  max={24}
                  label="Hours"
                  delay={100}
                />
                <ReactorRing
                  value={timeLeft.minutes}
                  max={60}
                  label="Minutes"
                  delay={200}
                />
                <ReactorRing
                  value={timeLeft.seconds}
                  max={60}
                  label="Seconds"
                  delay={300}
                />
              </div>

              {/* Telemetry Deck */}
              <div className="w-full max-w-[90%] md:max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 sm:mb-12">
                <TelemetryPanel
                  label="Core Temp"
                  value={timeLeft.expired ? "OVERHEAT" : "4,500 K"}
                  status={timeLeft.expired ? "CRITICAL" : "STABLE"}
                  color={
                    timeLeft.expired ? "text-red-500" : "text-cyan-400"
                  }
                />
                <TelemetryPanel
                  label="Flux Capacitor"
                  value="1.21 GW"
                  status="CHARGING"
                  color="text-yellow-400"
                />
                <TelemetryPanel
                  label="Temporal Drift"
                  value="0.004 ms"
                  status="NOMINAL"
                />
                <TelemetryPanel
                  label="Participation"
                  value="12,405"
                  status="UNITS"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 relative z-20 w-full max-w-md sm:max-w-none px-6 sm:px-0">
                <Link href="/present" className="w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300 font-mono text-xs sm:text-sm uppercase tracking-widest clip-path-polygon"
                    style={{
                      clipPath:
                        "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                    }}
                  >
                    Access Current Timeline
                  </button>
                </Link>

                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-transparent border border-cyan-500/20 text-cyan-500/60 hover:text-cyan-400 hover:border-cyan-400 transition-all font-mono text-xs sm:text-sm uppercase tracking-widest">
                    Establish Comms
                  </button>
                </Link>
              </div>
            </div>

            {/* Global Keyframes */}
            <style jsx global>{`
              @keyframes pulse-slow {
                0%,
                100% {
                  opacity: 0.1;
                  transform: scale(1);
                }
                50% {
                  opacity: 0.3;
                  transform: scale(1.1);
                }
              }
              .animate-pulse-slow {
                animation: pulse-slow 8s ease-in-out infinite;
              }
            `}</style>
          </>
        )}
      </main>
    </PageTransitionWrapper>
  );
}