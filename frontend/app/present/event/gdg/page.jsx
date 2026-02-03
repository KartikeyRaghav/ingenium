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
  ExternalLink,
  Target,
  ShieldAlert,
  Info,
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
        "Design and implement a highly available platform for concurrent video uploads, transcoding, and low-latency delivery. Architecture must prioritize distributed design and cost-efficient storage.",
      objectives: [
        "Concurrent uploads from multiple users",
        "Transcoding into streamable formats",
        "Personalized ML-based recommendations (Watch history/Engagement)",
        "High traffic handling without system failure",
        "Metadata management (likes, comments, views)",
      ],
      deliverables: [
        "Working Web Application",
        "Full System Architecture Diagram",
        "Scalability & Cost Optimization Strategy",
        "ML Recommendation Approach Document",
        "Source Code with README",
      ],
      rules: [
        "Live streaming is not required",
        "Rule-based recommendation logic is insufficient",
        "Mock/synthetic data is permissible",
        "Architecture must conceptually support horizontal scalability",
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
        "Build an Autonomous Narrative Engine functioning as a researcher, copywriter, and visual designer to transform vague topics into professional decks.",
      objectives: [
        "Autonomous research using live/up-to-date info",
        "Context-aware visual generation (no generic stock imagery)",
        "Adaptive Layout Engine (Timeline, Hero, Comparison)",
        "Autonomous context retention across all slides",
        "Multi-agent orchestration and error handling",
      ],
      deliverables: [
        "Complete Source Code & README",
        "Final Presentation (Min 5 slides - PPTX/PDF/Web)",
        "2-3 Min Demo Video (Prompt to Render)",
        "Technical Report on Agentic Workflow 257]",
      ],
      rules: [
        "Content must be factual and grounded in reality",
        "Citations or verifiable data points are mandatory",
        "Visual consistency (style/color/typography) must be maintained",
        "Zero-shot reliability: usability without human hand-holding",
      ],
      prizes: {
        first: "5,000",
        second: "3,000",
        third: "2,000",
        total: "10,000",
      },
      color: "purple",
    },
    {
      id: 3,
      type: "Game Dev",
      title: "Thematic Game Challenge",
      sub: "Gameplay Systems & Creative Design",
      icon: <Gamepad2 className="w-6 h-6" />,
      context:
        "Develop a game expressing abstract themes through systemic design where mechanics actively influence player experience.",
      objectives: [
        "Select exactly two themes: Lifesteal, Evolution, Decay, Convergence",
        "Themes must impact core mechanics and progression",
        "Meaningful systemic integration (not just cosmetic)",
        "Clear design choice justification",
        "Coherent and consistent gameplay flow",
      ],
      deliverables: [
        "Final Playable Build (ZIP)",
        "3-Min Gameplay Walkthrough Video",
        "README (Setup + Theme Implementation explanation)",
      ],
      rules: [
        "Must use exactly two themes from the provided list",
        "No restrictions on genre, engine, or platform",
        "Third-party assets must be licensed and credited",
        "Purely cosmetic or narrative-only interpretations will be penalized",
      ],
      prizes: {
        first: "5,000",
        second: "3,000",
        third: "2,000",
        total: "10,000",
      },
      color: "emerald",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black/30 text-slate-200 font-mono p-4 md:p-8">
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
                Return to Events
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
                  <div className="text-xs font-black uppercase">
                    STMT_0{ps.id}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* --- MAIN INTERFACE --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePS}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* LEFT COLUMN: INTEL, REWARDS & RULES */}
            <div className="lg:col-span-4 space-y-6">
              {/* Mission Brief */}
              <div className="p-8 bg-black/60 border-t-4 border-purple-500 rounded-b-xl backdrop-blur-md">
                <div className="flex items-center gap-2 mb-4 text-purple-400">
                  <Cpu className="w-4 h-4 animate-pulse" />
                  <span className="text-[10px] tracking-widest font-bold uppercase">
                    Mission_Briefing
                  </span>
                </div>
                <h2 className="text-3xl font-black text-white leading-tight uppercase mb-4">
                  {problemStatements[activePS].title}
                </h2>
                <p className="text-xs text-slate-400 leading-relaxed font-sans border-l-2 border-white/10 pl-4 mb-6 italic">
                  "{problemStatements[activePS].context}"
                </p>
                <button
                  onClick={() => router.push(`/registration?ps=${activePS}`)}
                  className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-[0_5px_15px_rgba(147,51,234,0.4)]"
                >
                  Register Now <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              {/* Bounty Protocol */}
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
                  <Trophy size={100} />
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

              {/* Rules & Compliances */}
              <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
                <h3 className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" /> Compliance_Protocols
                </h3>
                <div className="space-y-3">
                  {problemStatements[activePS].rules.map((rule, i) => (
                    <div
                      key={i}
                      className="flex gap-2 text-[10px] text-slate-400 leading-tight"
                    >
                      <span className="text-red-500">»</span> {rule}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: TECHNICAL SPECS & DELIVERABLES */}
            <div className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <span className="text-[10px] font-bold text-slate-300 uppercase leading-tight">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="p-6 bg-black/40 border-2 border-dashed border-white/10 rounded-xl flex flex-wrap items-center justify-between gap-6">
                <div className="flex gap-8">
                  <div className="space-y-1">
                    <div className="text-[9px] text-slate-500 uppercase">
                      Submission_Mode
                    </div>
                    <div className="text-xs font-bold text-white uppercase flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />{" "}
                      Online_Portal
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[9px] text-slate-500 uppercase">
                      Evaluation_Phase
                    </div>
                    <div className="text-xs font-bold text-white uppercase flex items-center gap-2">
                      <Target className="w-3 h-3 text-purple-500" />{" "}
                      Peer_Review_Ready
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="text-[9px] text-slate-500 uppercase">
                    Total_Bounty_Pool
                  </span>
                  <span className="text-2xl font-black text-white tracking-tighter">
                    ₹{problemStatements[activePS].prizes.total}
                  </span>
                </div>
              </div>

              {/* Judging Weights (Document Logic) */}
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center gap-4">
                <Info className="w-4 h-4 text-purple-400 shrink-0" />
                <p className="text-[9px] text-slate-500 uppercase tracking-widest">
                  Evaluation: Complexity (30%) • Quality (30%) • Innovation
                  (20%) • Automation (20%)
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* --- FOOTER DECOR --- */}
        <div className="mt-12 flex justify-between items-center border-t border-white/10 pt-6">
          <div className="flex gap-8">
            <div className="text-[9px] text-slate-500 uppercase tracking-widest">
              Organized by: Ingenium_IIT_Indore
            </div>
            <div className="text-[9px] text-slate-500 uppercase tracking-widest hidden sm:block">
              Rules subject to organizer discretion
            </div>
          </div>
          <div className="text-[9px] font-black text-purple-500 animate-pulse">
            SESSION_ID: {Math.random().toString(16).slice(2, 12).toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
}
