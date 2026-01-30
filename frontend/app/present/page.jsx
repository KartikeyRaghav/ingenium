"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { PageTransitionWrapper } from "@/components/chronoverse";
import {
  ongoingEvents,
  upcomingEvents,
  scheduleData,
  registrations,
} from "@/data/present";
import NeuralLink from "@/components/NeuralLink";

// Blue stylized corner for the dashboard feel
const OpsCorner = ({ className }) => (
  <svg
    className={`absolute w-4 h-4 text-blue-500 ${className}`}
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

// Animated Audio Waveform
const AudioWave = () => (
  <div className="flex gap-0.5 items-end h-4">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="w-1 bg-blue-400 animate-music-bar"
        style={{ animationDelay: `${i * 0.1}s` }}
      />
    ))}
  </div>
);

// Live Blinking Indicator
const LiveIndicator = () => (
  <div className="flex items-center gap-2 px-2 py-1 bg-red-500/10 border border-red-500/50 rounded text-red-500 text-[10px] font-bold tracking-widest uppercase">
    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
    LIVE
  </div>
);

export default function PresentPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [currentTime, setCurrentTime] = useState("");
  const [mounted, setMounted] = useState(false);

  // Real-time Clock Effect
  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageTransitionWrapper>
      <main className="relative min-h-screen bg-black/30 overflow-hidden selection:bg-blue-500/30">
        {/* Background: Blue Hex Grid & Radar */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-size-[50px_50px] opacity-40" />
        <div className="absolute top-0 left-0 w-full h-125 bg-linear-to-b from-blue-900/20 to-transparent pointer-events-none" />

        {/* Radar Sweep Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_340deg,rgba(59,130,246,0.1)_360deg)] animate-[spin_10s_linear_infinite] opacity-30" />
        </div>

        <div className="relative z-10 px-4 py-6 md:py-10 flex flex-col min-h-screen">
          {/* --- TOP OPS BAR (HUD) --- */}
          <div className="max-w-7xl mx-auto w-full mb-8 border-b border-blue-500/20 pb-4">
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
              {/* Left: Navigation & Branding */}
              <div className="flex items-center gap-6">
                <Link href="/?state=navigation">
                  <button className="flex items-center gap-2 text-blue-400/60 hover:text-white transition-colors group">
                    <div className="w-6 h-6 border border-blue-500/30 rounded flex items-center justify-center group-hover:bg-blue-500/20">
                      <svg
                        className="w-3 h-3"
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
                    <span className="text-[10px] font-mono tracking-widest uppercase">
                      Ops Center
                    </span>
                  </button>
                </Link>
                <div className="h-4 w-px bg-blue-500/20" />
                <h1 className="text-xl md:text-2xl font-bold text-white tracking-tighter flex items-center gap-2">
                  INGENIUM <span className="text-blue-500">LIVE</span>
                </h1>
              </div>

              {/* Right: System Stats & Clock */}
              <div className="flex items-center gap-6 text-right">
                <div className="hidden md:block">
                  <div className="text-[9px] text-blue-500/50 uppercase tracking-wider font-mono">
                    System Status
                  </div>
                  <div className="text-xs text-green-400 font-mono flex items-center gap-2 justify-end">
                    <span>OPTIMAL</span>
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  </div>
                </div>

                <div className="bg-blue-950/30 border border-blue-500/30 px-4 py-2 rounded">
                  <div className="text-[9px] text-blue-400/60 uppercase tracking-wider font-mono text-center">
                    Local Time
                  </div>
                  <div className="text-xl md:text-2xl font-mono text-white tracking-widest font-bold tabular-nums">
                    {currentTime || "00:00:00"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- DASHBOARD CONTROLS (Tabs) --- */}
          <div className="max-w-7xl mx-auto w-full mb-10">
            <div className="flex-wrap gap-2 p-1 bg-black/40 border border-blue-500/20 rounded-lg backdrop-blur-md inline-flex">
              {["dashboard", "schedule", "access"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded text-xs font-bold uppercase tracking-widest transition-all duration-300 relative overflow-hidden ${
                    activeTab === tab
                      ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                      : "text-blue-500/50 hover:text-blue-300 hover:bg-blue-500/10"
                  }`}
                >
                  {activeTab === tab && (
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-scan-fast" />
                  )}
                  {tab === "access"
                    ? "Registrations"
                    : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* --- MAIN CONTENT AREA --- */}
          <div className="max-w-7xl mx-auto w-full flex-1">
            {/* VIEW 1: LIVE DASHBOARD */}
            {activeTab === "dashboard" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fade-in-up">
                {/* Main Monitor (Left Col) */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-sm font-mono text-blue-400 uppercase tracking-widest flex items-center gap-2">
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
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                      Active Feeds
                    </h2>
                    <span className="text-[10px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded border border-blue-500/20">
                      2 SIGNALS FOUND
                    </span>
                  </div>

                  {/* Live Cards */}
                  {ongoingEvents.map((event, i) => {
                    const themeColors = { cyan: "blue", violet: "purple", crimson: "red", emerald: "green", amber: "yellow" };
                    const color = themeColors[event.theme || "cyan"];
                    return (
                      <Link href={`/present/event/${event.id}`} key={i} className="block w-full">
                        <div
                          className={`group relative bg-[#050a14] border border-${color}-500/30 rounded-lg overflow-hidden hover:border-${color}-400 transition-all duration-300 mb-6`}
                        >
                          {/* Monitor Scan Line */}
                          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.4)_50%)] bg-size-[100%_4px] opacity-20 pointer-events-none z-10" />
                          <div className={`absolute inset-0 bg-linear-to-r from-${color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0`} />

                          <div className="p-6 relative z-20 flex flex-col md:flex-row gap-6">
                            {/* Simulated Video Thumbnail */}
                            <div className={`w-full md:w-48 h-32 bg-${color}-900/20 rounded border border-${color}-500/20 flex items-center justify-center relative overflow-hidden`}>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className={`w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-${color}-400 group-hover:scale-110 transition-all cursor-pointer`}>
                                  <svg
                                    className="w-4 h-4 text-white ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M8 5v14l11-7z" />
                                  </svg>
                                </div>
                              </div>
                              <div className="absolute top-2 left-2">
                                <LiveIndicator />
                              </div>
                            </div>

                            {/* Info */}
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <h3 className={`text-xl font-bold text-white group-hover:text-${color}-300 transition-colors`}>
                                  {event.name}
                                </h3>
                                <AudioWave />
                              </div>

                              <div className={`flex flex-wrap gap-4 text-xs font-mono text-${color}-400/60 mb-4`}>
                                <span className="flex items-center gap-1">
                                  <span className={`w-1.5 h-1.5 bg-${color}-500 rounded-full`} />{" "}
                                  {event.venue}
                                </span>
                                <span className="flex items-center gap-1">
                                  <svg
                                    className="w-3 h-3"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                  </svg>{" "}
                                  {event.viewers}
                                </span>
                              </div>

                              <p className="text-sm text-gray-400 mb-4">
                                {event.description}
                              </p>

                              {/* Bandwidth Bar */}
                              <div className={`w-full h-1 bg-${color}-900/30 rounded-full overflow-hidden flex items-center`}>
                                <div
                                  className={`h-full bg-${color}-500`}
                                  style={{ width: event.bandwidth }}
                                />
                              </div>
                              <div className={`text-[9px] text-right text-${color}-500/40 font-mono mt-1`}>
                                STREAM STABILITY: {event.bandwidth}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>

                {/* Side Panel (Right Col) */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="bg-[#050a14] border border-blue-500/20 rounded-lg p-5">
                    <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4 border-b border-blue-500/20 pb-2">
                      Upcoming Transmissions
                    </h3>
                    <div className="space-y-4">
                      {upcomingEvents.map((ev, i) => {
                        const themeColors = { cyan: "blue", violet: "purple", crimson: "red", emerald: "green", amber: "yellow" };
                        const color = themeColors[ev.theme || "cyan"];
                        return (
                          <Link href={`/present/event/${ev.id}`} key={i} className="block">
                            <div
                              className="flex items-center gap-3 group cursor-pointer hover:bg-blue-500/5 p-2 rounded transition-colors"
                            >
                              <div
                                className={`w-1 h-8 rounded-full ${ev.priority === "MAX" ? "bg-red-500" : ev.priority === "HIGH" ? "bg-orange-500" : "bg-blue-500"} group-hover:h-10 transition-all`}
                              />
                              <div className="flex-1">
                                <div className={`text-sm font-bold text-gray-200 group-hover:text-${color}-300`}>
                                  {ev.name}
                                </div>
                                <div className="text-[10px] font-mono text-blue-500/50">
                                  {ev.time} | {ev.venue}
                                </div>
                              </div>
                              <button className={`text-${color}-500 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] border border-${color}-500 px-2 py-1 rounded hover:bg-${color}-500 hover:text-white`}>
                                VIEW
                              </button>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Fake Terminal */}
                  <div className="bg-black border border-blue-500/30 rounded-lg p-4 font-mono text-[10px] h-40 overflow-hidden relative opacity-70">
                    <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
                    <div className="space-y-1 text-blue-400/80">
                      <p> connecting to server_node_alpha...</p>
                      <p className="text-green-400">
                        {" "}
                        connection established (12ms)
                      </p>
                      <p> fetching event_manifest.json</p>
                      <p> loading assets...</p>
                      <p className="animate-pulse">
                        {" "}
                        monitoring system health...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 2: SCHEDULE (Flight Plan) */}
            {activeTab === "schedule" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
                {scheduleData.map((day, i) => (
                  <div
                    key={i}
                    className={`relative flex flex-col h-full rounded-xl border ${day.active ? "border-blue-400 bg-blue-900/10" : "border-blue-500/20 bg-[#050a14]/50"} overflow-hidden transition-all duration-300 hover:border-blue-500/50`}
                  >
                    {day.active && (
                      <div className="absolute top-0 inset-x-0 h-0.5 bg-blue-400 shadow-[0_0_10px_#3b82f6]" />
                    )}

                    {/* Header */}
                    <div className="p-4 border-b border-blue-500/10 bg-black/20">
                      <div className="flex justify-between items-center">
                        <h3
                          className={`text-lg font-bold ${day.active ? "text-white" : "text-gray-400"}`}
                        >
                          {day.day}
                        </h3>
                        <span className="text-xs font-mono text-blue-500/60">
                          {day.date}
                        </span>
                      </div>
                    </div>

                    {/* Events List */}
                    <div className="p-4 space-y-4 flex-1 relative">
                      {day.active && (
                        /* The "Current Time" Laser Line */
                        <div className="absolute left-0 right-0 top-1/3 h-px bg-red-500 z-10 flex items-center">
                          <div className="w-full h-px bg-red-500 animate-pulse shadow-[0_0_8px_red]" />
                          <span className="absolute right-2 text-[8px] bg-red-500 text-black font-bold px-1 rounded-sm">
                            NOW
                          </span>
                        </div>
                      )}

                      {day.events.map((ev, j) => {
                        const themeColors = { cyan: "blue", violet: "purple", crimson: "red", emerald: "green", amber: "yellow" };
                        const color = themeColors[ev.theme || "cyan"];

                        return (
                          <Link href={`/present/event/${ev.id}`} key={j} className="block mb-4">
                            <div
                              className="flex gap-3 relative z-0 opacity-90 hover:opacity-100 transition-opacity group cursor-pointer"
                            >
                              <div className={`w-12 text-[10px] font-mono text-${color}-400 pt-1 text-right group-hover:text-${color}-300`}>
                                {ev.time}
                              </div>
                              <div className={`relative flex-1 pb-4 border-l border-${color}-500/10 pl-4 group-hover:border-${color}-500/30 transition-colors`}>
                                <div
                                  className={`absolute -left-1.25 top-1.5 w-2.5 h-2.5 rounded-full border-2 ${ev.status === "Live" ? "bg-red-500 border-red-500 animate-pulse" : ev.status === "Done" ? `bg-${color}-900 border-${color}-700` : `bg-black border-${color}-500/30`}`}
                                />
                                <h4
                                  className={`text-sm font-medium ${ev.status === "Live" ? "text-white" : "text-gray-400"} group-hover:text-${color}-200`}
                                >
                                  {ev.name}
                                </h4>
                                <p className={`text-[10px] text-${color}-500/50`}>
                                  {ev.venue}
                                </p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* VIEW 3: REGISTRATIONS (Access Passes) */}
            {activeTab === "access" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
                {registrations.map((reg, i) => {
                  const percent = (reg.spots / reg.total) * 100;
                  const isFull = reg.spots === 0;

                  return (
                    <div
                      key={i}
                      className="group relative bg-[#080c14] border border-blue-500/20 rounded-xl overflow-hidden hover:bg-blue-900/5 transition-all duration-300"
                    >
                      <OpsCorner className="top-0 right-0 rotate-90" />
                      <OpsCorner className="bottom-0 left-0 -rotate-90" />

                      {/* Holographic Sheen */}
                      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                      <div className="p-6 flex flex-col h-full justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 text-blue-400">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0c0 .883-.393 1.627-1.08 1.998"
                                />
                              </svg>
                            </div>
                            <span
                              className={`text-[10px] font-bold px-2 py-1 rounded border uppercase ${isFull ? "border-red-500/30 text-red-500 bg-red-500/5" : "border-green-500/30 text-green-500 bg-green-500/5"}`}
                            >
                              {reg.status}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                            {reg.name}
                          </h3>
                          <p className="text-xs text-blue-500/50 font-mono">
                            ACCESS_ID: REG-{1000 + i}
                          </p>
                        </div>

                        <div className="mt-6">
                          <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-1">
                            <span>CAPACITY</span>
                            <span
                              className={
                                isFull ? "text-red-500" : "text-blue-400"
                              }
                            >
                              {reg.spots === 999
                                ? "UNLIMITED"
                                : `${reg.spots} / ${reg.total}`}
                            </span>
                          </div>

                          {reg.spots !== 999 && (
                            <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${isFull ? "bg-red-500" : "bg-blue-500"}`}
                                style={{
                                  width: `${(reg.spots / reg.total) * 100}%`,
                                }}
                              />
                            </div>
                          )}

                          <Link
                            href={
                              isFull
                                ? "#"
                                : `/present/registration?event=${encodeURIComponent(reg.name)}`
                            }
                          >
                            <button
                              disabled={isFull}
                              className={`w-full mt-4 py-3 text-xs font-bold uppercase tracking-widest transition-all ${isFull ? "bg-gray-800 text-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/50"}`}
                            >
                              {isFull
                                ? "Access Denied"
                                : "Initialize Registration"}
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Custom CSS for Audio Bars */}
        <style jsx global>{`
          @keyframes music-bar {
            0%,
            100% {
              height: 20%;
            }
            50% {
              height: 100%;
            }
          }
          .animate-music-bar {
            animation: music-bar 1s ease-in-out infinite;
          }
          .animate-scan-fast {
            animation: scan 2s linear infinite;
          }
          @keyframes scan {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.5s ease-out forwards;
          }
        `}</style>
      </main>
    </PageTransitionWrapper>
  );
}
