"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mountain,
  Droplets,
  Map as MapIcon,
  Construction,
  Layout,
  Users,
  Compass,
  Trophy,
  HardHat,
  ChevronLeft,
} from "lucide-react";
import { StarField } from "@/components/chronoverse";
import { useRouter } from "next/navigation";

export default function ConCastlePS() {
  const [activeProblem, setActiveProblem] = useState(0);
  const router = useRouter();
  const problemStatements = [
    {
      id: 1,
      title: "Monsoon Water Management",
      subtitle: "Hydrological Mobility Planning",
      icon: <Droplets className="w-5 h-5" />,
      context:
        "Analyze surface runoff behavior and drainage efficiency at IIT Indore during high rainfall conditions",
      requirements: [
        "Map campus zones prone to surface water accumulation",
        "Analyze factors like topography, drainage alignment, and rainfall runoff patterns.",
        "Evaluate impact on pedestrian comfort and vehicular movement.",
        "Propose sustainable engineering interventions for stormwater management.",
      ],
      prizes: {
        first: "10,000",
        second: "7,000",
        third: "3,000",
        total: "20,000",
      },
    },
    {
      id: 2,
      title: "Open Ground Utilization",
      subtitle: "Hostel Cluster Strategic Planning",
      icon: <Layout className="w-5 h-5" />,
      context:
        "Envision structured, inclusive, and future-ready utilization of vacant spaces between hostel clusters.",
      requirements: [
        "Analyze existing ground spaces for accessibility and current usage.",
        "Identify social and functional requirements of hostel residents.",
        "Propose comprehensive layouts including green spaces and pathways.",
        "Emphasize sustainability, inclusivity, and adaptability for future needs.",
      ],
      prizes: {
        first: "10,000",
        second: "7,000",
        third: "3,000",
        total: "20,000",
      },
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#02040a] text-emerald-100 font-mono p-4 md:p-8">
      <StarField />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- ARCHITECTURAL HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-emerald-500/20 pb-8">
          <div>
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-emerald-500 mb-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.4em] uppercase">
                Return To Events
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white">
              CON<span className="text-emerald-500">CASTLE</span> 2026
            </h1>
            <p className="text-[10px] text-emerald-500/60 mt-2 tracking-widest uppercase italic">
              Integrating traditional civil fundamentals with computational
              design.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-4">
            <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded text-[10px] uppercase">
              Mode: <span className="text-white">Online</span>
            </div>
            <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded text-[10px] uppercase">
              Audience: <span className="text-white">Open to All</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- MISSION SELECTOR --- */}
          <div className="lg:col-span-4 space-y-4">
            {problemStatements.map((ps, idx) => (
              <button
                key={ps.id}
                onClick={() => setActiveProblem(idx)}
                className={`w-full p-6 text-left rounded-2xl border transition-all duration-500 group relative overflow-hidden ${
                  activeProblem === idx
                    ? "bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                    : "bg-black/40 border-white/5 hover:border-emerald-500/30"
                }`}
              >
                <div
                  className={`absolute top-0 right-0 p-4 transition-transform duration-500 ${activeProblem === idx ? "scale-110 opacity-20" : "opacity-5 group-hover:opacity-10"}`}
                >
                  {ps.icon}
                </div>
                <span className="text-[9px] text-emerald-500/50 uppercase tracking-[0.3em]">
                  Problem_Statement_0{ps.id}
                </span>
                <h3 className="text-lg font-bold text-white mt-1 group-hover:text-emerald-400 transition-colors">
                  {ps.title}
                </h3>
                <p className="text-[10px] text-gray-500 uppercase mt-1">
                  {ps.subtitle}
                </p>
              </button>
            ))}

            {/* Judging Criteria Box */}
            <div className="p-6 bg-black/60 border border-white/5 rounded-2xl mt-8">
              <h4 className="text-[10px] text-emerald-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Compass className="w-3 h-3" /> Evaluation_Metrics
              </h4>
              <ul className="space-y-3">
                <li className="text-[11px] text-gray-400 flex justify-between">
                  <span>Technical Depth</span>
                  <span className="text-emerald-500">CORRECTNESS</span>
                </li>
                <li className="text-[11px] text-gray-400 flex justify-between">
                  <span>Innovation</span>
                  <span className="text-emerald-500">EXECUTION</span>
                </li>
                <li className="text-[11px] text-gray-400 flex justify-between">
                  <span>Presentation</span>
                  <span className="text-emerald-500">IMPACT</span>
                </li>
              </ul>
            </div>
          </div>

          {/* --- MAIN SIMULATION VIEW --- */}
          <div className="lg:col-span-8 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProblem}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-black/40 border border-emerald-500/20 rounded-3xl p-8 backdrop-blur-xl relative"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400">
                    {problemStatements[activeProblem].icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-white uppercase tracking-tighter">
                      {problemStatements[activeProblem].title}
                    </h2>
                    <p className="text-xs text-emerald-500/70 uppercase tracking-widest">
                      Engineering_Briefing_Protocol
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] text-emerald-500 uppercase tracking-widest mb-2 italic underline decoration-emerald-500/30 underline-offset-4">
                      Contextual_Background
                    </h4>
                    <p className="text-sm leading-relaxed text-emerald-100/80 bg-emerald-500/5 p-4 rounded-lg border-l-2 border-emerald-500/50">
                      {problemStatements[activeProblem].context}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[10px] text-emerald-500 uppercase tracking-widest mb-4">
                      Deployment_Requirements
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {problemStatements[activeProblem].requirements.map(
                        (req, i) => (
                          <div
                            key={i}
                            className="flex gap-3 p-4 bg-white/5 border border-white/5 rounded-xl text-[11px] leading-relaxed text-gray-400 group hover:bg-emerald-500/5 transition-colors"
                          >
                            <span className="text-emerald-500 font-bold group-hover:scale-110 transition-transform">
                              0{i + 1}
                            </span>
                            {req}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* --- PRIZE POOL MATRIX --- */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Trophy className="w-32 h-32" />
              </div>

              <div className="flex justify-between items-end mb-8 relative z-10">
                <div>
                  <h3 className="text-lg font-black text-white uppercase tracking-[0.2em]">
                    Reward_Inventory
                  </h3>
                  <p className="text-[10px] text-emerald-500 uppercase">
                    Competitive_Bounty_Distribution
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gray-500 block uppercase">
                    Aggregate Pool
                  </span>
                  <span className="text-3xl font-black text-emerald-400 tracking-tighter italic">
                    ₹{problemStatements[activeProblem].prizes.total}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 relative z-10">
                <PrizeBox
                  rank="ALPHA"
                  amount={problemStatements[activeProblem].prizes.first}
                  label="First Prize"
                />
                <PrizeBox
                  rank="BETA"
                  amount={problemStatements[activeProblem].prizes.second}
                  label="Second Prize"
                />
                <PrizeBox
                  rank="GAMMA"
                  amount={problemStatements[activeProblem].prizes.third}
                  label="Third Prize"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Matrix Components ---

function PrizeBox({ rank, amount, label }) {
  return (
    <div className="p-4 bg-black/40 border border-white/10 rounded-xl text-center hover:border-emerald-500/40 transition-all group">
      <div className="text-[9px] text-emerald-500/60 uppercase tracking-widest mb-1 group-hover:text-emerald-400 transition-colors">
        {rank}
      </div>
      <div className="text-xl font-black text-white mb-1 italic">₹{amount}</div>
      <div className="text-[8px] text-gray-600 uppercase group-hover:text-gray-400">
        {label}
      </div>
    </div>
  );
}
