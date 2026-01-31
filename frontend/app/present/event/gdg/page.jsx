"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  BrainCircuit,
  Gamepad2,
  Trophy,
  ChevronLeft,
  Cpu,
  Layers,
  Zap,
  CheckCircle2,
  FileCode2,
  PlayCircle,
  ExternalLink,
  Target,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function FluxusGDGPS() {
  const [activePS, setActivePS] = useState(0);
  const router = useRouter();

  const problemStatements = [
    {
      id: 1,
      type: "Web + ML",
      title: "Scalable Video Streaming",
      sub: "Distributed Systems & Recommendation Logic",
      icon: <Server className="w-6 h-6" />,
      context:
        "Design and implement a highly scalable and highly available video streaming platform that allows users to upload, process, store, and stream videos efficiently.",
      objectives: [
        "Concurrent video uploads & transcoding",
        "Low-latency streaming & high user traffic handling",
        "ML-based personalized recommendations (Watch History/Likes)",
        "Metadata management (likes, comments, views)",
        "Conceptually horizontal scalable architecture ",
      ],
      deliverables: [
        "Working Web App",
        "Architecture Diagram",
        "ML Logic Explanation",
        "Source Code Repo",
      ],
      prizes: {
        first: "7,000",
        second: "5,000",
        third: "3,000",
        total: "15,000",
      },
      color: "cyan",
    },
    {
      id: 2,
      type: "Machine Learning",
      title: "Intelligent Narrative Synthesis",
      sub: "Autonomous Agentic Presentation Engine",
      icon: <BrainCircuit className="w-6 h-6" />,
      context:
        "Build an Autonomous Narrative Engine that functions as a research analyst, copywriter, and visual designer to create professional presentation decks.",
      objectives: [
        "Autonomous research & factual verification via search queries",
        "Context-aware visual generation (charts, diagrams)",
        "Adaptive Layout Engine (Comparison, Timeline, etc.)",
        "Autonomous context retention across 5+ slides",
        "Multi-agent collaboration / Chain-of-thought planning",
      ],
      deliverables: [
        "Repository + README",
        "5+ Slide Deck (PPTX/PDF)",
        "2-3 Min Demo Video",
        "Technical Report",
      ],
      prizes: {
        first: "7,000",
        second: "5,000",
        third: "3,000",
        total: "15,000",
      },
      color: "purple",
    },
    {
      id: 3,
      type: "Game Dev",
      title: "Thematic Game Challenge",
      sub: "Core Mechanical Theme Integration",
      icon: <Gamepad2 className="w-6 h-6" />,
      context:
        "Design and develop a game that meaningfully incorporates any two themes: Lifesteal, Evolution, Decay, or Convergence",
      objectives: [
        "Select exactly two themes from the list",
        "Themes must impact core gameplay, not just cosmetics",
        "Meaningful influence on progression or game logic",
        "Clear explanation of design choices for themes",
        "No restrictions on genre, art style, or engine",
      ],
      deliverables: [
        "Playable Build (ZIP)",
        "3-Min Gameplay Video",
        "README with Setup & Theme Logic",
      ],
      prizes: {
        first: "7,000",
        second: "5,000",
        third: "3,000",
        total: "15,000",
      },
      color: "emerald",
    },
  ];

  return (
    <div className="relative min-h-screen text-slate-200 font-mono p-4 md:p-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- NAVIGATION & HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-6">
          <div className="space-y-2">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] tracking-[0.4em] uppercase font-bold">
                Terminal_Home
              </span>
            </button>
            <h1 className="text-6xl font-black tracking-tighter text-white">
              SYNTHESIS{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-400">
                CORE
              </span>
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            {problemStatements.map((ps, idx) => (
              <button
                key={ps.id}
                onClick={() => setActivePS(idx)}
                className={`flex items-center gap-3 px-6 py-3 border-2 transition-all duration-500 ${
                  activePS === idx
                    ? "bg-purple-500/20 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] text-white"
                    : "border-white/10 bg-white/5 text-slate-500 hover:border-white/30"
                }`}
              >
                {ps.icon}
                <div className="text-left hidden sm:block">
                  <div className="text-[10px] uppercase opacity-60 font-bold">
                    {ps.type}
                  </div>
                  <div className="text-xs font-black">STMT_0{ps.id}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* --- MAIN INTERFACE --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePS}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* LEFT COLUMN: INTEL & REWARDS */}
            <div className="lg:col-span-4 space-y-6">
              {/* Mission Brief */}
              <div className="p-8 bg-black/40 border-t-4 border-purple-500 rounded-b-xl backdrop-blur-md">
                <div className="flex items-center gap-2 mb-4 text-purple-400">
                  <Cpu className="w-4 h-4 animate-pulse" />
                  <span className="text-[10px] tracking-widest font-bold uppercase">
                    Mission_Briefing
                  </span>
                </div>
                <h2 className="text-3xl font-black text-white leading-tight uppercase mb-4">
                  {problemStatements[activePS].title}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed font-sans border-l-2 border-white/10 pl-4 mb-6">
                  {problemStatements[activePS].context}
                </p>
                <button className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-[0_5px_15px_rgba(147,51,234,0.4)]">
                  Register Now <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              {/* Bounty Protocol */}
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:rotate-12 transition-transform">
                  <Trophy size={80} />
                </div>
                <h3 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                  Bounty_Distribution
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      label: "Alpha_Rank",
                      val: problemStatements[activePS].prizes.first,
                      color: "text-yellow-500",
                    },
                    {
                      label: "Beta_Rank",
                      val: problemStatements[activePS].prizes.second,
                      color: "text-slate-300",
                    },
                    {
                      label: "Gamma_Rank",
                      val: problemStatements[activePS].prizes.third,
                      color: "text-orange-400",
                    },
                  ].map((p, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b border-white/5 pb-2"
                    >
                      <span className="text-[10px] text-slate-500 uppercase">
                        {p.label}
                      </span>
                      <span className={`text-xl font-black ${p.color}`}>
                        ₹{p.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: TECHNICAL SPECS */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Functional Specs */}
              <div className="p-8 bg-black/40 border border-white/10 rounded-xl backdrop-blur-md">
                <h3 className="text-[10px] font-bold text-purple-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> System_Objectives
                </h3>
                <div className="space-y-4">
                  {problemStatements[activePS].objectives.map((obj, i) => (
                    <div key={i} className="flex gap-3 group">
                      <Zap className="w-4 h-4 text-purple-500 shrink-0 mt-1 group-hover:animate-bounce" />
                      <p className="text-[11px] leading-relaxed text-slate-300 group-hover:text-white transition-colors uppercase">
                        {obj}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {/* Deliverables */}
                <div className="p-8 bg-white/5 border border-white/10 rounded-xl">
                  <h3 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <FileCode2 className="w-4 h-4" /> Protocol_Deliverables
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {problemStatements[activePS].deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                        <span className="text-[10px] font-bold text-slate-300 uppercase">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Metadata */}
                <div className="p-6 border-2 border-dashed border-white/10 rounded-xl flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-[9px] text-slate-500 uppercase">
                      Submission_Status
                    </div>
                    <div className="text-xs font-bold text-emerald-500 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      SYSTEMS_READY
                    </div>
                  </div>
                  <Target className="w-8 h-8 text-white/10" />
                  <div className="text-right space-y-1">
                    <div className="text-[9px] text-slate-500 uppercase">
                      Total_Pool
                    </div>
                    <div className="text-xs font-black text-white">
                      ₹{problemStatements[activePS].prizes.total}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* --- FOOTER DECOR --- */}
        <div className="mt-12 flex justify-between items-center border-t border-white/10 pt-6">
          <div className="flex gap-8">
            <div className="text-[9px] text-slate-500 uppercase tracking-widest">
              Scale: Conceptually_Horizontal{" "}
            </div>
            <div className="text-[9px] text-slate-500 uppercase tracking-widest hidden sm:block">
              Deployment: Non_Mandatory
            </div>
          </div>
          <div className="text-[9px] font-black text-purple-500 animate-pulse">
            ID: {Math.random().toString(16).slice(2, 10).toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
}
