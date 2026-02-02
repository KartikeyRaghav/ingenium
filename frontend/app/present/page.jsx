"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { PageTransitionWrapper } from "@/components/chronoverse";
import { useRouter } from "next/navigation";
import { ChevronLeft, Zap, Music } from "lucide-react";
import { tech_events, cult_events } from "@/data/present";

const NodeCorner = ({ color }) => (
  <div
    className={`absolute w-2 h-2 border-t-2 border-l-2 border-${color}-500 opacity-50 group-hover:opacity-100 transition-opacity`}
  />
);

export default function PresentPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("tech");
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const filteredEvents = activeTab == "tech" ? tech_events : cult_events;

  return (
    <PageTransitionWrapper>
      <div className="max-w-7xl mx-auto py-12 px-6">
        {/* --- HEADER HUD --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-blue-500/20 pb-6 gap-4">
          <div>
            <button
              onClick={() => router.push(`/?state=navigation`)}
              className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors mb-4 group"
            >
              <div className="p-1 border border-blue-500/30 rounded group-hover:bg-blue-500/10">
                <ChevronLeft className="w-3 h-3" />
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold font-mono">
                Back to Core
              </span>
            </button>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic flex items-center gap-3">
              Mission <span className="text-blue-500">Manifest</span>
              <span className="text-[10px] not-italic font-mono text-blue-500/40 border border-blue-500/20 px-2 py-1 rounded">
                v3.0.1
              </span>
            </h1>
          </div>
          <div className="text-right font-mono hidden md:block">
            <div className="text-[10px] text-blue-500/40">SIGNAL_STRENGTH</div>
            <div className="flex gap-1 justify-end mt-1">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-1 bg-blue-500 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* --- SECTOR SELECTOR (TABS) --- */}
        <div className="flex gap-4 mb-10">
          {[
            { id: "tech", label: "Technical Sectors", icon: Zap },
            { id: "cult", label: "Cultural Sectors", icon: Music },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-3 px-6 py-3 border transition-all duration-300 overflow-hidden group ${
                activeTab === tab.id
                  ? "border-blue-500 bg-blue-500/10 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                  : "border-white/10 text-white/40 hover:border-white/30"
              }`}
            >
              {activeTab === tab.id && (
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent animate-scan-fast" />
              )}
              <tab.icon
                className={`w-4 h-4 ${activeTab === tab.id ? "text-blue-400" : "text-white/20"}`}
              />
              <span className="text-xs font-bold uppercase tracking-widest font-mono">
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* --- GRID OF NODES --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 min-h-100">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <Link key={event.id} href={`/present/event/${event.folder}`}>
                <div className="group relative bg-black/60 border border-white/10 p-6 h-48 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:bg-blue-900/10 hover:-translate-y-1">
                  <NodeCorner color={event.color} />

                  <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
                    <span className="font-mono text-[8px] text-white tracking-tighter italic uppercase">
                      REF_{event.id.slice(0, 8)}
                    </span>
                  </div>

                  <div className="absolute -bottom-2 -right-2 font-black text-6xl text-white/5 pointer-events-none select-none group-hover:text-blue-500/10 transition-colors uppercase italic whitespace-nowrap">
                    {event.tag}
                  </div>

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
                      <div className="text-[9px] font-mono text-gray-500 uppercase">
                        Accessing Protocol...
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/20 transition-all">
                      <ChevronLeft className="w-4 h-4 text-white rotate-180" />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-500/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center border border-dashed border-white/10 rounded-xl h-48 opacity-50">
              <p className="font-mono text-xs text-blue-500 uppercase tracking-widest">
                No active sectors found in this category
              </p>
            </div>
          )}
        </div>

        {/* --- FOOTER HUD --- */}
        <div className="mt-16 flex flex-col items-center gap-4 opacity-30">
          <div className="w-full h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />
          <div className="px-6 py-2 flex flex-wrap justify-center gap-8 font-mono text-[9px] text-blue-400">
            <span>COORD: 22.5248° N, 75.9207° E</span>
            <span>OS: INGENIUM_KERNEL_3.0</span>
            <span>SEC: AES-256-GCM</span>
            <span>STATUS: {filteredEvents.length} NODES_ONLINE</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan-fast {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-scan-fast {
          animation: scan-fast 1.5s linear infinite;
        }
      `}</style>
    </PageTransitionWrapper>
  );
}
