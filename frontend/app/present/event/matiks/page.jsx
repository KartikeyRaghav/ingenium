"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Infinity as InfinityIcon,
  Zap,
  Timer,
  Hash,
  Binary,
  Trophy,
  BarChart,
  Target,
  Sigma,
  Pi,
  ChevronLeft,
} from "lucide-react";
import { StarField } from "@/components/chronoverse";
import { useRouter } from "next/navigation";

export default function MatiksPS() {
  const [activePhase, setActivePhase] = useState(0);
  const router = useRouter();
  const eventStages = [
    {
      id: 1,
      title: "Preliminary Rounds",
      subtitle: "Brain Blitz Phase",
      icon: <Timer className="w-5 h-5" />,
      context:
        "Rapid-fire mathematical challenges designed to test numerical intuition and reaction speed under pressure.",
      specs: [
        "Focus on speed and immediate accuracy.",
        "Time-bound non-routine problem types.",
        "Elimination-based knockout logic.",
        "Conducted via the dedicated Matiks online portal.",
      ],
    },
    {
      id: 2,
      title: "Final Championship",
      subtitle: "Advanced Logic Manifold",
      icon: <Sigma className="w-5 h-5" />,
      context:
        "A high-stakes arena for the top finalists to solve complex visual puzzles and logical paradoxes.",
      specs: [
        "Advanced logical and visual puzzle sets.",
        "Increased difficulty scaling across tiers.",
        "Evaluation of pattern recognition and consistency.",
        "Real-time determination of the Matiks Champion.",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#02040a] text-rose-100 font-mono p-4 md:p-8 overflow-hidden">
      <StarField />

      {/* Fractal Geometry Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-250 h-250 opacity-10 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="w-full h-full border border-rose-500 rounded-full flex items-center justify-center p-20"
        >
          <div className="w-full h-full border border-rose-400 border-dashed rounded-full flex items-center justify-center p-20">
            <Sigma className="w-32 h-32 text-rose-500 animate-pulse" />
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- MATHEMATICAL HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-rose-500/20 pb-8">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-rose-500"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.5em] uppercase font-bold">
                Return to Events
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white">
              MATIKS{" "}
              <span className="text-rose-500 italic">TOURNAMENT</span>{" "}
            </h1>
            <p className="text-[10px] text-rose-500/60 mt-2 tracking-[0.3em] uppercase italic">
              Speed. Intuition. Practical Reasoning.
            </p>
          </div>
          <div className="mt-6 lg:mt-0 flex gap-4">
            <HeaderStat
              icon={<Pi />}
              label="Mode"
              value="Offline Portal"
            />{" "}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- PHASE NAVIGATOR --- */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-[10px] text-rose-500 uppercase tracking-widest mb-4">
              Elimination_Tiers
            </h3>
            {eventStages.map((stage, idx) => (
              <button
                key={stage.id}
                onClick={() => setActivePhase(idx)}
                className={`w-full p-6 text-left rounded-2xl border transition-all duration-500 relative overflow-hidden group ${
                  activePhase === idx
                    ? "bg-rose-500/10 border-rose-500/50 shadow-[0_0_25px_rgba(244,63,94,0.2)]"
                    : "bg-black/40 border-white/5 hover:border-rose-500/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg transition-colors ${activePhase === idx ? "bg-rose-500 text-white" : "bg-white/5 text-rose-500"}`}
                  >
                    {stage.icon}
                  </div>
                  <div>
                    <span className="text-[9px] text-rose-500/50 uppercase tracking-widest font-bold italic">
                      Phase_0{stage.id}
                    </span>
                    <h4 className="text-white font-bold uppercase tracking-tighter group-hover:text-rose-400 transition-colors">
                      {stage.title}
                    </h4>
                  </div>
                </div>
              </button>
            ))}

            {/* Logic Parameters */}
            <div className="p-6 bg-rose-950/20 border border-rose-500/10 rounded-2xl mt-8">
              <h4 className="text-[10px] text-rose-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Target className="w-3 h-3" /> Evaluation_Vector
              </h4>
              <div className="space-y-3">
                <EvaluationRow label="Numerical Intuition" value="CRITICAL" />
                <EvaluationRow label="Response Speed" value="RAPID" />
                <EvaluationRow label="Logical Reasoning" value="ANALYTICAL" />
                <EvaluationRow label="Solution Accuracy" value="PRECISION" />
              </div>
            </div>
          </div>

          {/* --- PHASE DATA STREAM --- */}
          <div className="lg:col-span-8 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="bg-black/40 border border-rose-500/20 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden min-h-87.5"
              >
                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                  <Binary className="w-48 h-48" />
                </div>

                <div className="relative z-10">
                  <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">
                    {eventStages[activePhase].subtitle}
                  </h2>
                  <p className="text-sm leading-relaxed text-rose-100/70 mb-8 max-w-2xl border-l-2 border-rose-500 pl-6 italic">
                    {eventStages[activePhase].context}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {eventStages[activePhase].specs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex gap-4 p-5 bg-white/5 border border-white/5 rounded-2xl group hover:bg-rose-500/5 transition-all"
                      >
                        <Zap className="w-4 h-4 text-rose-500 mt-1 shrink-0 group-hover:animate-pulse" />
                        <span className="text-[11px] leading-relaxed text-gray-400 group-hover:text-white transition-colors">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* --- BOUNTY REGISTRY --- */}
            <div className="bg-rose-500/5 border border-rose-500/20 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Trophy className="w-32 h-32" />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-black text-white uppercase tracking-[0.2em]">
                    Bounty_Registry
                  </h3>
                  <p className="text-[10px] text-rose-500 uppercase tracking-widest italic">
                    Brain_Blitz_Rewards_Allocation
                  </p>
                </div>

                <div className="flex gap-4">
                  <PrizeNode
                    rank="ALPHA"
                    amount="5,000"
                    label="Winner"
                    color="rose-400"
                  />
                  <PrizeNode
                    rank="BETA"
                    amount="3,000"
                    label="Runner Up"
                    color="gray-300"
                  />
                  <PrizeNode
                    rank="GAMMA"
                    amount="2,000"
                    label="Finalist"
                    color="orange-400"
                  />
                </div>

                <div className="bg-rose-500/10 border border-rose-500/30 p-4 rounded-xl text-center">
                  <span className="text-[9px] text-rose-500 uppercase block font-bold mb-1">
                    Aggregate Pool
                  </span>
                  <span className="text-2xl font-black text-rose-400 italic">
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

// --- Manifold Components ---

function HeaderStat({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg">
      <div className="text-rose-500">{icon}</div>
      <div>
        <span className="text-[8px] text-gray-500 uppercase block leading-none mb-1">
          {label}
        </span>
        <span className="text-xs font-bold text-white uppercase tracking-tighter">
          {value}
        </span>
      </div>
    </div>
  );
}

function EvaluationRow({ label, value }) {
  return (
    <div className="flex justify-between items-center text-[10px] border-b border-white/5 pb-2">
      <span className="text-gray-500 uppercase">{label}</span>
      <span className="text-rose-400 font-bold">{value}</span>
    </div>
  );
}

function PrizeNode({ rank, amount, label, color }) {
  return (
    <div className="text-center group">
      <div className={`text-[8px] font-bold uppercase mb-1 text-${color}`}>
        {rank}
      </div>
      <div className="text-xl font-black text-white mb-0 italic leading-none group-hover:scale-110 transition-transform">
        ₹{amount}
      </div>
      <div className="text-[8px] text-gray-600 uppercase mt-1 italic tracking-widest font-bold">
        {label}
      </div>
    </div>
  );
}
