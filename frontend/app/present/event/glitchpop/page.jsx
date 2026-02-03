"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Target,
  Cpu,
  Network,
  Swords,
  Zap,
  Monitor,
  Activity,
  Layers,
  ChevronLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function GlitchpopEsportsPS() {
  const [activeGame, setActiveGame] = useState(0);
  const router = useRouter();
  const esportsData = [
    {
      id: "VAL",
      title: "VALORANT",
      sub: "Tactical Ability Shooter",
      icon: <Target className="w-6 h-6" />,
      teamSize: "5 (+1 Substitute)",
      mode: "Online Prelims & Offline LAN",
      format: "Bo1 Prelims -> Group Stage (RR) -> Bo3 Semi/Finals",
      objective:
        "Filter top 8/16 teams via online knockout for a 3-day LAN final at IIT Indore.",
      prizes: "Part of 100K Cumulative Pool",
    },
    {
      id: "BGMI",
      title: "BGMI",
      sub: "Battle Royale Protocol",
      icon: <Swords className="w-6 h-6" />,
      teamSize: "4 (+1 Substitute)",
      mode: "Online Prelims & Offline LAN",
      format: "Online Knockout -> Multi-Match Point System Finals",
      objective:
        "Point-based final standings for the top 8-16 teams following online qualification.",
      prizes: "Part of 100K Cumulative Pool",
    },
    {
      id: "EAFC",
      title: "EAFC",
      sub: "Virtual Pitch Synthesis",
      icon: <Activity className="w-6 h-6" />,
      teamSize: "1 (Solo)",
      mode: "Offline Matches (IIT Indore)",
      format: "Group Stage (Bo1) -> Double Elimination Finale (Bo3/Bo5)",
      objective:
        "Intense offline brackets starting with a 2-day group stage followed by a Bo5 finale.",
      prizes: "Part of 100K Cumulative Pool",
    },
    {
      id: "ML",
      title: "MOBA LEGENDS",
      sub: "Strategic Lane Combat",
      icon: <Layers className="w-6 h-6" />,
      teamSize: "5 (+1 Substitute)",
      mode: "Online Prelims & Offline LAN",
      format: "Bo1 Knockout -> Group Stage -> Single Elimination Finals",
      objective:
        "Orchestrated group league format leading to a grand final on Day 3.",
      prizes: "Part of 100K Cumulative Pool",
    },
  ];

  return (
    <div className="relative min-h-screen text-cyan-100 font-mono p-4 md:p-8 overflow-hidden bg-black/30">
      {/* Glitch Overlay Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-500 animate-[glitch_2s_infinite]" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-magenta-500 opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- SYSTEM HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-cyan-500/20 pb-8">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-cyan-400"
            >
              <ChevronLeft className="w-4 h-4 animate-pulse" />
              <span className="text-[10px] tracking-[0.5em] uppercase font-bold">
                Return to Events
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">
              GLITCH<span className="text-cyan-500 italic">POP</span> X INGENIUM
            </h1>
            <p className="text-[10px] text-cyan-500/60 mt-2 tracking-[0.3em] uppercase">
              Pro-Level Gaming Collaboration
            </p>
          </div>
          <div className="mt-6 lg:mt-0 flex gap-4">
            <StatNode
              icon={<Zap />}
              label="Status"
              value="Online/Offline Hybrid"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- MISSION SELECTOR --- */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-[10px] text-cyan-500 uppercase tracking-widest mb-4 font-bold">
              Title_Registry
            </h3>
            {esportsData.map((game, idx) => (
              <button
                key={game.id}
                onClick={() => setActiveGame(idx)}
                className={`w-full p-6 text-left rounded-2xl border transition-all duration-500 relative overflow-hidden group ${
                  activeGame === idx
                    ? "bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_25px_rgba(6,182,212,0.2)]"
                    : "bg-black/40 border-white/5 hover:border-cyan-500/30"
                }`}
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div
                    className={`p-3 rounded-lg transition-colors ${activeGame === idx ? "bg-cyan-500 text-black" : "bg-white/5 text-cyan-500"}`}
                  >
                    {game.icon}
                  </div>
                  <div>
                    <span className="text-[9px] text-cyan-500/50 uppercase font-bold">
                      {game.id}_MODULE
                    </span>
                    <h4 className="text-lg font-black text-white uppercase tracking-tighter group-hover:text-cyan-400 transition-colors">
                      {game.title}
                    </h4>
                    <p className="text-[8px] text-gray-500 uppercase">
                      {game.sub}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* --- TOURNAMENT BRACKET VIEW --- */}
          <div className="lg:col-span-8 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGame}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-black/40 border border-cyan-500/20 rounded-3xl p-8 backdrop-blur-xl relative"
              >
                <div className="relative z-10">
                  <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">
                    Briefing: {esportsData[activeGame].title}
                  </h2>
                  <p className="text-sm leading-relaxed text-cyan-100/70 mb-8 border-l-2 border-cyan-500 pl-6 italic">
                    "{esportsData[activeGame].objective}"
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <RequirementCard
                      label="Participants"
                      value={esportsData[activeGame].teamSize}
                    />
                    <RequirementCard
                      label="Mode"
                      value={esportsData[activeGame].mode}
                    />
                    <RequirementCard
                      label="Format"
                      value={esportsData[activeGame].format}
                      full
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* --- BOUNTY REGISTRY --- */}
            <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Trophy className="w-32 h-32" />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-black text-white uppercase tracking-[0.2em]">
                    Bounty_Registry
                  </h3>
                  <p className="text-[10px] text-cyan-500 uppercase tracking-widest italic font-bold">
                    Sponsor_Allocated_Pool
                  </p>
                </div>

                <div className="flex gap-12">
                  <div className="text-center">
                    <span className="text-[10px] text-gray-500 uppercase block mb-1">
                      Total Pool
                    </span>
                    <span className="text-2xl font-black text-cyan-400 italic">
                      ₹1,00,000
                    </span>
                    <span className="text-[8px] text-cyan-500/50 block mt-1">
                      (Tentative)
                    </span>
                  </div>
                  <div className="text-center border-l border-white/10 pl-12">
                    <span className="text-[10px] text-gray-500 uppercase block mb-1">
                      Distribution
                    </span>
                    <span className="text-xl font-black text-white italic underline underline-offset-4 decoration-cyan-500">
                      Cumulative
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes glitch {
          0% {
            transform: translateY(0);
          }
          10% {
            transform: translateY(-2px);
          }
          20% {
            transform: translateY(2px);
          }
          30% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

// --- Internal Logistics Components ---

function StatNode({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg">
      <div className="text-cyan-500">{icon}</div>
      <div>
        <span className="text-[8px] text-gray-500 uppercase block leading-none mb-1 font-bold">
          {label}
        </span>
        <span className="text-xs font-bold text-white tracking-tighter uppercase italic">
          {value}
        </span>
      </div>
    </div>
  );
}

function RequirementCard({ label, value, full }) {
  return (
    <div
      className={`p-5 bg-white/5 border border-white/5 rounded-2xl group hover:border-cyan-500/50 transition-all ${full ? "md:col-span-2" : ""}`}
    >
      <span className="text-[9px] text-cyan-500 uppercase font-bold block mb-1">
        {label}
      </span>
      <p className="text-[11px] text-gray-400 group-hover:text-white transition-colors leading-relaxed">
        {value} <span className="text-[7px] text-cyan-500/30 italic"></span>
      </p>
    </div>
  );
}
