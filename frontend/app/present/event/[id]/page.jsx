"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { StarField } from "@/frontend/components/chronoverse";
import {
    ongoingEvents,
    upcomingEvents,
    scheduleData,
    registrations,
} from "@/frontend/data/present";

const themes = {
    cyan: {
        bg: "from-cyan-900/20",
        text: "text-cyan-400",
        border: "border-cyan-500/50",
        glow: "shadow-[0_0_30px_rgba(34,211,238,0.2)]",
        accent: "bg-cyan-500",
    },
    crimson: {
        bg: "from-red-900/20",
        text: "text-red-500",
        border: "border-red-500/50",
        glow: "shadow-[0_0_30px_rgba(239,68,68,0.2)]",
        accent: "bg-red-500",
    },
    violet: {
        bg: "from-violet-900/20",
        text: "text-violet-400",
        border: "border-violet-500/50",
        glow: "shadow-[0_0_30px_rgba(167,139,250,0.2)]",
        accent: "bg-violet-500",
    },
    emerald: {
        bg: "from-emerald-900/20",
        text: "text-emerald-400",
        border: "border-emerald-500/50",
        glow: "shadow-[0_0_30px_rgba(52,211,153,0.2)]",
        accent: "bg-emerald-500",
    },
    amber: {
        bg: "from-amber-900/20",
        text: "text-amber-400",
        border: "border-amber-500/50",
        glow: "shadow-[0_0_30px_rgba(251,191,36,0.2)]",
        accent: "bg-amber-500",
    },
};

export default function EventDynamicPage() {
    const { id } = useParams();
    const router = useRouter();
    const [event, setEvent] = useState(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Lookup event by ID across all lists
        const allEvents = [
            ...ongoingEvents,
            ...upcomingEvents,
            ...scheduleData.flatMap((d) => d.events),
            ...registrations,
        ];
        const found = allEvents.find((e) => e.id === id);
        if (found) {
            setEvent(found);
        } else {
            // router.push("/present"); // Redirect if not found (optional)
        }
    }, [id, router]);

    if (!mounted || !event)
        return (
            <div className="min-h-screen bg-[#030712] flex items-center justify-center text-blue-500 font-mono animate-pulse">
                INITIALIZING DATALINK...
            </div>
        );

    const theme = themes[event.theme || "cyan"];

    return (
        <main className="relative min-h-screen bg-[#030712] overflow-hidden text-white font-mono selection:bg-white/20">
            <StarField />

            {/* Dynamic Background Gradient */}
            <div
                className={`absolute top-0 inset-x-0 h-[50vh] bg-linear-to-b ${theme.bg} to-transparent opacity-50 pointer-events-none transition-colors duration-700`}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 flex flex-col min-h-screen">
                {/* Navigation */}
                <Link href="/present">
                    <button className={`flex items-center gap-2 mb-8 ${theme.text} hover:opacity-80 transition-opacity uppercase text-xs tracking-widest`}>
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
                        Return to Ops Center
                    </button>
                </Link>

                {/* Hero Section */}
                <div className="space-y-4 mb-16 animate-fade-in-up">
                    <div className={`inline-block px-3 py-1 rounded border ${theme.border} bg-black/40 text-[10px] tracking-[0.2em] uppercase ${theme.text}`}>
                        {event.status || "Event Module"}
                    </div>
                    <h1 className={`text-4xl md:text-6xl font-black tracking-tight ${theme.text} drop-shadow-lg`}>
                        {event.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl">
                        {event.details?.tagline || event.description}
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Main Info */}
                    <div className="md:col-span-2 space-y-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                        <div className={`p-6 rounded-xl border ${theme.border} bg-[#050a14]/80 backdrop-blur-sm relative overflow-hidden group`}>
                            <div className={`absolute top-0 left-0 w-1 h-full ${theme.accent}`} />
                            <h2 className={`text-lg font-bold mb-4 uppercase tracking-widest ${theme.text}`}>
                                Mission Briefing
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                {event.details?.fullDescription || event.description}
                            </p>

                            {/* Decorative Scan Line */}
                            <div className={`absolute inset-0 bg-linear-to-b from-transparent via-${theme.text.split('-')[1]}-500/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 pointer-events-none`} />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className={`p-4 rounded-lg border border-white/5 bg-white/5 hover:${theme.border} transition-colors`}>
                                <div className="text-[10px] uppercase text-gray-500 mb-1">Venue</div>
                                <div className="text-lg font-bold">{event.venue}</div>
                            </div>
                            <div className={`p-4 rounded-lg border border-white/5 bg-white/5 hover:${theme.border} transition-colors`}>
                                <div className="text-[10px] uppercase text-gray-500 mb-1">Timeframe</div>
                                <div className="text-lg font-bold">{event.date || event.time || "TBA"}</div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                        {/* Speakers / Key Personnel */}
                        {event.details?.speakers?.length > 0 && (
                            <div className={`p-5 rounded-xl border ${theme.border} bg-black/40`}>
                                <h3 className={`text-xs font-bold uppercase mb-4 ${theme.text}`}>
                                    Key Personnel
                                </h3>
                                <ul className="space-y-3">
                                    {event.details.speakers.map((speaker, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded-full ${theme.accent} flex items-center justify-center text-black font-bold text-xs`}>
                                                {speaker.charAt(0)}
                                            </div>
                                            <span className="text-sm text-gray-300">{speaker}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Schedule / Timeline */}
                        {event.details?.schedule?.length > 0 && (
                            <div className={`p-5 rounded-xl border border-white/10 bg-black/40`}>
                                <h3 className={`text-xs font-bold uppercase mb-4 text-gray-500`}>
                                    Sequence
                                </h3>
                                <ul className="space-y-4">
                                    {event.details.schedule.map((item, i) => (
                                        <li key={i} className="relative pl-4 border-l border-white/20">
                                            <div className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ${theme.accent}`} />
                                            <span className="text-xs text-gray-400 block">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Action Button */}
                        <button className={`w-full py-4 font-bold uppercase tracking-widest rounded transition-all duration-300 ${theme.accent} text-black hover:opacity-90 hover:${theme.glow} active:scale-95`}>
                            {event.id.startsWith("reg") ? "Confirm Registration" : "Join Transmission"}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
