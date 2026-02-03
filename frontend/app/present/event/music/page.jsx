"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Music,
  Users,
  Radio,
  Volume2,
  Speaker,
  Zap,
  Trophy,
  Activity,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function BattleOfBandsPS() {
  const [activePhase, setActivePhase] = useState(0);
  const router = useRouter();
  const competitionData = {
    title: "Battle of Bands",
    org: "Music Club, IIT Indore",
    participation: "Team (Bands)",
    teamSize: "10-12 Members",
    duration: "15-20 Minutes",
    mode: "Offline (Live Performance)",
    prizes: {
      first: "20,000",
      second: "12,000",
      third: "8,000",
      total: "40,000",
    },
    phases: [
      {
        id: "REG",
        title: "Registration & Shortlisting",
        detail:
          "Online registration followed by shortlisting based on submitted audio or video samples.",
      },
      {
        id: "LIVE",
        title: "Final Competition",
        detail:
          "Live performances by shortlisted bands on a professional stage with judge evaluation.",
      },
    ],
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-mono p-4 md:p-8 overflow-hidden bg-black/30">
      {/* Audio Waveform Background Decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="flex items-end justify-center gap-1 h-full pb-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-4 bg-purple-500 rounded-t-full"
              animate={{ height: ["10%", "60%", "20%", "80%", "10%"] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- AMPLIFIED HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-purple-500/20 pb-8">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-purple-400"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.5em] uppercase font-bold">
                Return to Events
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">
              BATTLE <span className="text-purple-500">OF</span> BANDS
            </h1>
            <p className="text-[10px] text-purple-400/60 mt-2 tracking-[0.3em] uppercase">
              Live Musical Expression & Strategic Synergy
            </p>
          </div>
          <div className="mt-6 lg:mt-0 flex gap-4">
            <StatNode
              icon={<Users />}
              label="Team Size"
              value={competitionData.teamSize}
            />
            <StatNode
              icon={<Volume2 />}
              label="Performance"
              value={competitionData.duration}
            />
            <StatNode
              icon={<Activity />}
              label="Mode"
              value={competitionData.mode}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- MISSION BRIEFING --- */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-[10px] text-purple-500 uppercase tracking-widest mb-4 font-bold">
              Sonic_Context
            </h3>
            <div className="p-6 bg-purple-900/10 border border-purple-500/20 rounded-2xl backdrop-blur-xl">
              <p className="text-sm leading-relaxed text-purple-100/80 mb-6 italic border-l-2 border-purple-500 pl-4">
                "Nurturing musical talent across genres, providing a platform
                for creative expression and live exploration."
              </p>
              <div className="space-y-4">
                <ObjectiveItem text="Musical expression & stage presence" />
                <ObjectiveItem text="Originality and coordination" />
                <ObjectiveItem text="Inter-college live band culture" />
              </div>
            </div>

            {/* Genre Spectrum */}
            <div className="p-6 bg-black/40 border border-white/5 rounded-2xl">
              <h4 className="text-[10px] text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
                <Radio className="w-3 h-3" /> Frequency_Bands (Genres)
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Rock",
                  "Indie",
                  "Fusion",
                  "Pop",
                  "Alternative",
                  "Experimental",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] bg-white/5 px-2 py-1 rounded border border-white/10 text-purple-300 uppercase"
                  >
                    {" "}
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* --- PERFORMANCE MATRIX --- */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Speaker className="w-48 h-48" />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-black text-white uppercase tracking-widest mb-10 flex items-center gap-3">
                  <Music className="text-purple-500" /> Operational_Phases
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {competitionData.phases.map((phase, idx) => (
                    <button
                      key={phase.id}
                      onClick={() => setActivePhase(idx)}
                      className={`p-4 text-left border rounded-xl transition-all ${activePhase === idx ? "bg-purple-500/10 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]" : "bg-black/20 border-white/5 hover:border-white/20"}`}
                    >
                      <div className="text-[8px] text-purple-500 mb-1 font-bold">
                        PHASE_0{idx + 1}
                      </div>
                      <div className="text-xs font-bold text-white uppercase">
                        {phase.title}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="p-6 bg-purple-500/5 border-l-2 border-purple-500 rounded-r-xl">
                  <p className="text-sm text-purple-100/80 leading-relaxed italic">
                    {competitionData.phases[activePhase].detail}
                  </p>
                </div>
              </div>

              {/* Judging Criteria Matrix */}
              <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                  <Zap className="w-8 h-8 text-purple-500/40 animate-pulse" />
                  <div>
                    <div className="text-[10px] text-purple-500 uppercase font-bold tracking-widest">
                      Evaluation_Logic
                    </div>
                    <div className="text-[11px] text-white uppercase italic">
                      Stage & Audio Synergy
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  <EvaluationMetric label="Musicality & Coordination" />
                  <EvaluationMetric label="Originality & Arrangement" />
                  <EvaluationMetric label="Stage Presence" />
                  <EvaluationMetric label="Audience Engagement" />
                </div>
              </div>
            </div>

            {/* --- BOUNTY REGISTRY --- */}
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Trophy className="w-32 h-32" />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-black text-white uppercase tracking-[0.2em]">
                    Bounty_Registry
                  </h3>
                  <p className="text-[10px] text-purple-500 uppercase tracking-widest italic font-bold">
                    Sonic_Excellence_Rewards
                  </p>
                </div>

                <div className="flex gap-8">
                  <BountyNode
                    rank="ALPHA"
                    amount={competitionData.prizes.first}
                    label="First Prize"
                  />
                  <BountyNode
                    rank="BETA"
                    amount={competitionData.prizes.second}
                    label="Second Prize"
                  />
                  <BountyNode
                    rank="GAMMA"
                    amount={competitionData.prizes.third}
                    label="Third Prize"
                  />
                </div>

                <div className="px-6 py-4 bg-purple-500/10 border border-purple-500/30 rounded-xl text-center min-w-35">
                  <span className="text-[9px] text-purple-500 uppercase block font-bold mb-1">
                    Total Pool
                  </span>
                  <span className="text-2xl font-black text-purple-400 italic">
                    ₹40,000
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

// --- Internal Logic Components ---

function StatNode({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg">
      <div className="text-purple-500">{icon}</div>
      <div>
        <span className="text-[8px] text-gray-500 uppercase block leading-none mb-1 font-bold">
          {label}
        </span>
        <span className="text-xs font-bold text-white tracking-tighter uppercase">
          {value}
        </span>
      </div>
    </div>
  );
}

function ObjectiveItem({ text }) {
  return (
    <div className="flex gap-3 items-center text-[10px] uppercase font-bold text-gray-400 group">
      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform" />
      <span className="group-hover:text-white transition-colors">{text}</span>
      <span className="text-[7px] text-purple-500/30 font-mono"></span>
    </div>
  );
}

function EvaluationMetric({ label }) {
  return (
    <div className="flex items-center gap-2 text-[9px] text-white/40 uppercase font-bold group">
      <ChevronRight className="w-2 h-2 text-purple-500 group-hover:translate-x-1 transition-transform" />
      <span className="group-hover:text-white transition-colors">{label}</span>
      <span className="text-[7px] text-purple-500/30"></span>
    </div>
  );
}

function BountyNode({ rank, amount, label }) {
  return (
    <div className="text-center group">
      <div className="text-[8px] text-purple-500 uppercase mb-1 font-bold tracking-tighter">
        {rank}_TIER
      </div>
      <div className="text-xl font-black text-white italic group-hover:scale-110 transition-transform">
        ₹{amount}
      </div>
      <div className="text-[7px] text-purple-400/40 uppercase mt-1 font-bold">
        {label}
      </div>
    </div>
  );
}
