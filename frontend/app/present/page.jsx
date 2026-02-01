"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { PageTransitionWrapper } from "@/components/chronoverse";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { events } from "@/data/present";

const NodeCorner = ({ color }) => (
  <div
    className={`absolute w-2 h-2 border-t-2 border-l-2 border-${color}-500 opacity-50 group-hover:opacity-100 transition-opacity`}
  />
);

export default function PresentPage() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <PageTransitionWrapper>
      <div className="max-w-7xl mx-auto py-12 px-6">
        {/* Header HUD */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-blue-500/20 pb-6 gap-4">
          <div>
            <button
              onClick={() => router.push(`/?state=navigation`)}
              className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors mb-4"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.5em] uppercase font-bold">
                Return to Navigation
              </span>
            </button>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic">
              Mission <span className="text-blue-500">Manifest</span>
            </h1>
            <p className="font-mono text-[10px] text-blue-400/60 mt-1 uppercase tracking-widest">
              Select a sector to initialize deep-link protocols
            </p>
          </div>
          <div className="text-right font-mono hidden md:block">
            <div className="text-[10px] text-blue-500/40">SATELLITE_UPLINK</div>
            <div className="text-green-400 text-xs animate-pulse">
              ACTIVE_DATA_STREAM
            </div>
          </div>
        </div>

        {/* Grid of Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {events.map((event) => (
            <Link key={event.id} href={`/present/event/${event.folder}`}>
              <div className="group relative bg-black/60 border border-white/10 p-6 h-48 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:bg-blue-900/10 hover:-translate-y-1">
                {/* Visual Flair */}
                <NodeCorner color={event.color} />
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-[8px] text-white tracking-tighter italic">
                    ID_{event.id.toUpperCase()}
                  </span>
                </div>

                {/* Background "Ghost" Text */}
                <div className="absolute -bottom-2 -right-2 font-black text-6xl text-white/5 pointer-events-none select-none group-hover:text-blue-500/10 transition-colors uppercase italic">
                  {event.tag}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`text-[10px] font-mono text-${event.color}-400 mb-2 flex items-center gap-2`}
                  >
                    <div
                      className={`w-1 h-1 bg-${event.color}-500 rounded-full animate-pulse`}
                    />
                    {event.tag}
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-300 transition-colors">
                    {event.name}
                  </h3>
                </div>

                <div className="relative z-10 flex justify-between items-end">
                  <div className="space-y-1">
                    <div className="w-12 h-0.5 bg-white/10 group-hover:bg-blue-500/50 transition-all group-hover:w-20" />
                    <div className="text-[9px] font-mono text-gray-500">
                      INITIATE_PROTOCOL_V.3
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/20 transition-all">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Scanning Hover Line */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-500/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              </div>
            </Link>
          ))}
        </div>

        {/* Footer HUD */}
        <div className="mt-16 flex justify-center opacity-30">
          <div className="px-6 py-2 border-x border-blue-500/20 flex gap-8 font-mono text-[9px] text-blue-400">
            <span>COORDINATES: 22.52° N, 75.92° E</span>
            <span>INGENIUM_OS</span>
            <span>ENCRYPTION: AES-256</span>
          </div>
        </div>
      </div>
    </PageTransitionWrapper>
  );
}
