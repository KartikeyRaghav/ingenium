"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  BrainCircuit,
  Gamepad2,
  Database,
  Network,
  Trophy,
  Share2,
  ChevronLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function FluxusGDGPS() {
  const [activePS, setActivePS] = useState(0);
  const router = useRouter();
  const problemStatements = [
    {
      id: 1,
      type: "Web + ML",
      title: "Scalable Video Service",
      sub: "Distributed Systems & Recommendation Engine",
      icon: <Server className="w-6 h-6" />,
      context:
        "Design and implement a highly available platform for concurrent video uploads, transcoding, and low-latency streaming.",
      requirements: [
        "Concurrent multi-user video uploads.",
        "Video transcoding into streamable formats.",
        "ML-based personalized recommendations based on watch history.",
        "Low latency delivery and fault-tolerant architecture.",
      ],
      prizes: {
        first: "7,000",
        second: "5,000",
        third: "3,000",
        total: "15,000",
      },
    },
    {
      id: 2,
      type: "Machine Learning",
      title: "Intelligent Narrative Synthesis",
      sub: "Autonomous Agentic Presentation Engine",
      icon: <BrainCircuit className="w-6 h-6" />,
      context:
        "Build an Autonomous Narrative Engine that acts as a researcher, writer, and designer to generate professional presentation decks.",
      requirements: [
        "Autonomous research and factual verification of live data.",
        "Context-aware visual generation (charts, diagrams).",
        "Adaptive layout engine for optimal content flow.",
        "Zero-shot reliability across 5+ slides.",
      ],
      prizes: {
        first: "7,000",
        second: "5,000",
        third: "3,000",
        total: "15,000",
      },
    },
    {
      id: 3,
      type: "Game Dev",
      title: "Thematic Game Challenge",
      sub: "Core Mechanical Theme Integration",
      icon: <Gamepad2 className="w-6 h-6" />,
      context:
        "Develop a game meaningfully incorporating two themes from: Lifesteal, Evolution, Decay, or Convergence.",
      requirements: [
        "Meaningful impact of themes on gameplay behavior.",
        "Themes must influence progression or game logic.",
        "Deep mechanical and systemic integration (not just cosmetic).",
        "Complete playable build and gameplay walkthrough video.",
      ],
      prizes: {
        first: "7,000",
        second: "5,000",
        third: "3,000",
        total: "15,000",
      },
    },
  ];

  return (
    <div className="relative min-h-screen bg-black/30 text-purple-100 font-mono p-4 md:p-8 overflow-hidden">
      {/* Glitchy Data Stream Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-purple-500/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.5)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- DYNAMIC HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-purple-500/30 pb-8">
          <div>
            <button
              onClick={() => {
                router.back();
              }}
              className="flex items-center gap-2 text-purple-500 mb-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.6em] uppercase">
                Return To Events
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase">
              SYNTHESIS <span className="text-purple-500">CORE</span>
            </h1>
            <p className="text-[10px] text-purple-500/60 mt-2 tracking-widest uppercase">
              Orchestrating the next generation of scalable intelligence.
            </p>
          </div>
          <div className="flex gap-3 mt-6 md:mt-0">
            {problemStatements.map((ps, idx) => (
              <button
                key={ps.id}
                onClick={() => setActivePS(idx)}
                className={`p-3 border transition-all duration-300 relative group ${
                  activePS === idx
                    ? "bg-purple-500/20 border-purple-500 text-white"
                    : "border-purple-500/10 text-purple-500/50 hover:border-purple-500/40"
                }`}
              >
                <div className="relative z-10">{ps.icon}</div>
                {activePS === idx && (
                  <motion.div
                    layoutId="activeBG"
                    className="absolute inset-0 bg-purple-500/10"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* --- CONTENT MATRIX --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePS}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Left Wing: Module Intel */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 bg-black/60 border border-purple-500/20 rounded-3xl relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
                <span className="text-[10px] text-purple-500 uppercase tracking-widest mb-2 block">
                  [{problemStatements[activePS].type}]
                </span>
                <h2 className="text-3xl font-black text-white uppercase mb-2">
                  {problemStatements[activePS].title}
                </h2>
                <p className="text-[11px] text-purple-400/80 uppercase mb-6 tracking-tighter">
                  {problemStatements[activePS].sub}
                </p>
                <div className="p-4 bg-purple-500/5 border-l-2 border-purple-500 text-sm leading-relaxed italic">
                  "{problemStatements[activePS].context}"
                </div>
              </div>

              {/* Prize Module */}
              <div className="p-8 bg-purple-500/5 border border-purple-500/20 rounded-3xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xs font-bold text-white uppercase tracking-widest">
                    Bounty_Protocol
                  </h3>
                  <Trophy className="w-5 h-5 text-purple-500" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <BountyCard
                    rank="1ST"
                    amount={problemStatements[activePS].prizes.first}
                  />
                  <BountyCard
                    rank="2ND"
                    amount={problemStatements[activePS].prizes.second}
                  />
                  <BountyCard
                    rank="3RD"
                    amount={problemStatements[activePS].prizes.third}
                  />
                </div>
                <div className="mt-6 pt-4 border-t border-purple-500/10 flex justify-between items-center">
                  <span className="text-[10px] text-gray-500 uppercase font-mono">
                    Total Distribution
                  </span>
                  <span className="text-lg font-black text-purple-400">
                    ₹{problemStatements[activePS].prizes.total}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Wing: Logic Gates (Requirements) */}
            <div className="lg:col-span-7 bg-black/40 border border-purple-500/20 rounded-3xl p-8 backdrop-blur-xl">
              <h3 className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-8 flex items-center gap-2">
                <Share2 className="w-4 h-4" /> Functional_Logic_Gates
              </h3>

              <div className="space-y-4">
                {problemStatements[activePS].requirements.map((req, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i}
                    className="group flex gap-4 p-5 bg-white/5 border border-white/5 rounded-2xl hover:border-purple-500/40 transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center shrink-0 group-hover:bg-purple-500/30 transition-colors">
                      <span className="text-[10px] font-bold text-purple-400">
                        0{i + 1}
                      </span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-gray-400 group-hover:text-purple-100 transition-colors">
                      {req}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Meta Data */}
              <div className="mt-8 flex justify-between items-center px-2">
                <div className="flex gap-4">
                  <MetaTag
                    icon={<Database />}
                    text="Storage: Conceptually Scalable"
                  />
                  <MetaTag icon={<Network />} text="Mode: Online" />
                </div>
                <span className="text-[9px] text-purple-500/40 animate-pulse uppercase tracking-widest">
                  Ready_For_Deployment
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// --- Synthesis Components ---

function BountyCard({ rank, amount }) {
  return (
    <div className="text-center p-3 bg-black/40 border border-white/5 rounded-xl">
      <div className="text-[9px] text-purple-500/60 mb-1">{rank}</div>
      <div className="text-lg font-black text-white">₹{amount}</div>
    </div>
  );
}

function MetaTag({ icon, text }) {
  return (
    <div className="flex items-center gap-2 text-[9px] text-gray-500 uppercase">
      {React.cloneElement(icon, { className: "w-3 h-3" })}
      {text}
    </div>
  );
}
