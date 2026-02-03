"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PenTool,
  Mic2,
  BookCopy,
  ScrollText,
  Quote,
  Trophy,
  MapPin,
  Sparkles,
  Terminal,
  ChevronLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function LiteraryCompetitionsPS() {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const literaryData = [
    {
      id: "PS",
      title: "Poetry Slam",
      sub: "Spoken Word Synthesis",
      icon: <Mic2 className="w-5 h-5" />,
      description:
        "A competitive performance-based event where poets recite original work focused on rhythm and delivery.",
      prizes: {
        first: "5,000",
        second: "3,000",
        third: "2,000",
        total: "10,000",
      },
    },
    {
      id: "FR",
      title: "Fiction Relay",
      sub: "Collaborative Narrative",
      icon: <BookCopy className="w-5 h-5" />,
      description:
        "A multi-stage storytelling relay where participants build upon preceding narrative fragments.",
      prizes: {
        first: "5,000",
        second: "3,000",
        third: "2,000",
        total: "10,000",
      },
    },
    {
      id: "PW",
      title: "Poetry Writing",
      sub: "Pure Lexical Artistry",
      icon: <PenTool className="w-5 h-5" />,
      description:
        "A traditional writing competition focusing on structural integrity, imagery, and thematic depth.",
      prizes: {
        first: "5,000",
        second: "3,000",
        third: "2,000",
        total: "10,000",
      },
    },
  ];

  return (
    <div className="relative min-h-screen text-amber-50 font-mono p-4 md:p-8 overflow-hidden bg-black/30">
      {/* Ink-Drip Decoration */}
      <div className="absolute top-0 left-1/4 w-px h-64 bg-linear-to-b from-amber-500/50 to-transparent opacity-20" />
      <div className="absolute top-20 right-1/3 w-px h-48 bg-linear-to-b from-amber-500/50 to-transparent opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- LEXICON HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-amber-500/20 pb-8">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-amber-500/60"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.5em] uppercase font-bold">
                Return to Events
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">
              LITERARY <span className="text-amber-500/40">COMPETITIONS</span>
            </h1>
            <p className="text-[10px] text-amber-200/50 mt-2 tracking-[0.3em] uppercase">
              Encouraging Creativity & Literary Expression
            </p>
          </div>
          <div className="mt-6 lg:mt-0 flex gap-4">
            <StatusNode
              icon={<MapPin />}
              label="Deployment"
              value="Offline Mode"
            />
            <StatusNode
              icon={<Sparkles />}
              label="Objective"
              value="Active Participation"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- COMPETITION SELECTOR --- */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-[10px] text-amber-500/50 uppercase tracking-widest mb-4 font-bold italic">
              Active_Manuscripts
            </h3>
            {literaryData.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full p-6 text-left rounded-2xl border transition-all duration-500 relative group overflow-hidden ${
                  activeTab === idx
                    ? "bg-amber-500/10 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.1)]"
                    : "bg-black/40 border-white/5 hover:border-amber-500/30"
                }`}
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div
                    className={`p-3 rounded-xl transition-colors ${activeTab === idx ? "bg-amber-500 text-black" : "bg-white/5 text-amber-500"}`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white uppercase tracking-tighter group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[10px] text-amber-500/40 uppercase font-bold tracking-widest">
                      {item.sub}
                    </p>
                  </div>
                </div>
              </button>
            ))}

            {/* System Integrity */}
            <div className="p-6 bg-amber-950/20 border border-amber-500/10 rounded-2xl mt-8">
              <h4 className="text-[10px] text-amber-500/60 uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
                <Terminal className="w-3 h-3" /> Core_Compliance
              </h4>
              <div className="space-y-2">
                <p className="text-[11px] text-amber-100/40 uppercase leading-tight font-bold">
                  All protocols will be strictly offline.
                </p>
                <p className="text-[11px] text-amber-100/40 uppercase leading-tight font-bold">
                  Originality of script is mandatory.
                </p>
              </div>
            </div>
          </div>

          {/* --- MANUSCRIPT VIEWPORT --- */}
          <div className="lg:col-span-8 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-black/40 border border-amber-500/20 rounded-3xl p-10 backdrop-blur-xl relative"
              >
                <div className="absolute top-4 right-6 text-amber-500/10">
                  <Quote className="w-24 h-24" />
                </div>

                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
                  Module_{literaryData[activeTab].id}:{" "}
                  {literaryData[activeTab].title}
                </h2>

                <p className="text-sm leading-relaxed text-amber-100/70 mb-12 p-6 bg-amber-500/5 border-l-2 border-amber-500 italic max-w-2xl">
                  "{literaryData[activeTab].description}"
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-[10px] text-amber-500 uppercase tracking-[0.2em] font-bold">
                      Lexical_Focus
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Conceptual Creativity",
                        "Linguistic Flow",
                        "Performance Impact",
                        "Thematic Unity",
                      ].map((focus) => (
                        <li
                          key={focus}
                          className="text-[11px] text-gray-400 flex items-center gap-3"
                        >
                          <div className="w-1 h-1 bg-amber-500" /> {focus}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-amber-500/5 rounded-2xl border border-amber-500/10 flex flex-col justify-center">
                    <ScrollText className="w-8 h-8 text-amber-500/30 mb-2" />
                    <span className="text-[10px] text-amber-500/60 uppercase font-bold">
                      Submission Method
                    </span>
                    <span className="text-xs text-white uppercase font-black">
                      Offline Manifest
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* --- BOUNTY REGISTRY --- */}
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Trophy className="w-32 h-32" />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-black text-white uppercase tracking-[0.2em]">
                    Bounty_Registry
                  </h3>
                  <p className="text-[10px] text-amber-500 uppercase tracking-widest italic font-bold">
                    Creative_Lexicon_Rewards
                  </p>
                </div>

                <div className="flex gap-8">
                  <BountyNode
                    rank="ALPHA"
                    amount={literaryData[activeTab].prizes.first}
                  />
                  <BountyNode
                    rank="BETA"
                    amount={literaryData[activeTab].prizes.second}
                  />
                  <BountyNode
                    rank="GAMMA"
                    amount={literaryData[activeTab].prizes.third}
                  />
                </div>

                <div className="px-6 py-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-center min-w-35">
                  <span className="text-[9px] text-amber-500 uppercase block font-bold mb-1">
                    Total Pool
                  </span>
                  <span className="text-2xl font-black text-amber-400 italic leading-none">
                    ₹10,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Internal Scriptorium Components ---

function StatusNode({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg">
      <div className="text-amber-500">{icon}</div>
      <div>
        <span className="text-[8px] text-gray-500 uppercase block leading-none mb-1 font-bold">
          {label}
        </span>
        <span className="text-xs font-bold text-white tracking-tighter uppercase italic">
          {value}
        </span>
        <span className="text-[7px] text-amber-500/40 ml-1 italic"></span>
      </div>
    </div>
  );
}

function BountyNode({ rank, amount }) {
  return (
    <div className="text-center group">
      <div className={`text-[8px] font-bold uppercase mb-1 text-amber-500/60`}>
        {rank}_ACCESS
      </div>
      <div className="text-xl font-black text-white italic group-hover:scale-110 transition-transform">
        ₹{amount}
      </div>
    </div>
  );
}
