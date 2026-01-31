"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Orbit,
  Cpu,
  Dna,
  Binary,
  Trophy,
  Layers,
  Activity,
  Share2,
  ChevronLeft,
  Terminal,
  Target,
  Zap,
  Globe,
  Award,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function QuantumHackathonPS() {
  const [activeLayer, setActiveLayer] = useState(0);
  const router = useRouter();

  const pipelineStages = [
    {
      id: 1,
      title: "Circuit Architecture",
      sub: "Superposition Encoding",
      icon: <Cpu className="w-5 h-5" />,
      context:
        "Design quantum circuits where qubit connectivity and state preparation encode 'territorial' information into the quantum system.",
      technical: [
        "Define input-output pipelines for map data.",
        "Implement state preparation logic for 'territorial' info.",
        "Innovate on encoding strategies beyond original research.",
        "Synthesize hardware-ready circuits using Qiskit.",
      ],
    },
    {
      id: 2,
      title: "Statistical Measurement",
      sub: "Probabilistic Outcomes",
      icon: <Activity className="w-5 h-5" />,
      context:
        "Execute the circuits to obtain probabilistic measurement statistics that represent the generative landscape.",
      technical: [
        "Obtain measurement outcomes from quantum systems.",
        "Analyze probabilistic distributions as spatial data.",
        "Iterate on circuit structure for non-repetitive terrains.",
        "Minimize noise/decoherence during state measurement.",
      ],
    },
    {
      id: 3,
      title: "Classical Mapping",
      sub: "Procedural Synthesis",
      icon: <Layers className="w-5 h-5" />,
      context:
        "Map the quantum measurement statistics onto a classical 2D grid to visualize a coherent map structure.",
      technical: [
        "Apply classical post-processing algorithms.",
        "Translate statistics to 2D territorial data.",
        "Ensure visual clarity and structure of generated maps.",
        "Develop end-to-end procedural pipelines.",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen text-cyan-100 font-mono p-4 md:p-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- DYNAMIC HEADER SYSTEM --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-cyan-500/30 pb-8 gap-6">
          <div className="space-y-2">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-cyan-400 hover:text-white transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] tracking-[0.6em] uppercase font-bold">
                Return to Events
              </span>
            </button>
            <div className="flex items-center gap-4">
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white">
                Q-<span className="text-cyan-500">MAP</span> GEN
              </h1>
              <div className="px-3 py-1 bg-cyan-500 text-black text-[10px] font-bold -skew-x-12">
                HACKATHON v3.0
              </div>
            </div>
            <p className="text-[11px] text-cyan-500/80 tracking-[0.3em] uppercase flex items-center gap-2">
              <Terminal className="w-3 h-3" /> Quantum Procedural Content
              Generation (Q-PCG)
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <HeaderNode icon={<Orbit />} label="Duration" value="24-48 Hours" />
            <HeaderNode
              icon={<Binary />}
              label="Stack"
              value="Python / Qiskit"
            />
            <HeaderNode icon={<Globe />} label="Mode" value="Online" />
            <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-lg font-black text-xs uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] active:scale-95">
              Register_Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- LEFT COLUMN: INTEL & REQS --- */}
          <div className="lg:col-span-4 space-y-6">
            {/* Background & Objective Module */}
            <div className="p-6 bg-black/40 border border-cyan-500/20 rounded-2xl backdrop-blur-md">
              <h3 className="text-[10px] text-cyan-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Target className="w-4 h-4" /> Operational_Brief
              </h3>
              <p className="text-xs leading-relaxed text-gray-300">
                Bridge the gap between theoretical knowledge and practical
                implementation. Targeting{" "}
                <span className="text-cyan-400">UG/PG Students</span> to explore
                probabilistic outcomes over traditional classical methods.
              </p>
            </div>

            {/* Pipeline Navigation */}
            <div className="space-y-3">
              <h3 className="text-[10px] text-cyan-500 uppercase tracking-widest ml-2 mb-2">
                Technical_Stages
              </h3>
              {pipelineStages.map((stage, idx) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveLayer(idx)}
                  className={`w-full p-5 text-left rounded-xl border transition-all duration-300 group relative ${
                    activeLayer === idx
                      ? "bg-cyan-500/20 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                      : "bg-white/5 border-white/10 hover:border-cyan-500/40"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2 rounded-md ${activeLayer === idx ? "bg-cyan-500 text-black" : "bg-cyan-900/50 text-cyan-500"}`}
                    >
                      {stage.icon}
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold uppercase text-white tracking-tight">
                        {stage.title}
                      </h4>
                      <p className="text-[9px] text-cyan-500/60 uppercase">
                        {stage.sub}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Research Anchor */}
            <div className="p-6 bg-cyan-950/30 border-l-4 border-cyan-500 rounded-r-2xl">
              <h4 className="text-[10px] text-cyan-400 uppercase font-bold mb-2 flex items-center gap-2">
                <Dna className="w-3 h-3" /> Research_Anchor
              </h4>
              <p className="text-[10px] leading-relaxed text-gray-400 italic">
                "A Quantum Procedure for Map Generation" (arXiv: 2005.10327).
                Focus on translating theoretical concepts into complete,
                end-to-end implementations.
              </p>
            </div>
          </div>

          {/* --- RIGHT COLUMN: EXECUTION & REWARDS --- */}
          <div className="lg:col-span-8 space-y-8">
            {/* Main Stage Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-black/60 border border-cyan-500/20 rounded-3xl p-8 backdrop-blur-2xl relative min-h-105"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
                      {pipelineStages[activeLayer].title}
                    </h2>
                    <p className="text-cyan-500 text-[10px] tracking-widest uppercase">
                      System_Logic_Phase_0{activeLayer + 1}
                    </p>
                  </div>
                  <Zap className="text-cyan-500 w-6 h-6 animate-pulse" />
                </div>

                <div className="bg-cyan-500/10 border-l-2 border-cyan-500 p-4 mb-8">
                  <p className="text-sm leading-relaxed text-cyan-50 font-medium">
                    {pipelineStages[activeLayer].context}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pipelineStages[activeLayer].technical.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-cyan-500/5 transition-colors group"
                    >
                      <div className="text-cyan-500 text-[10px] font-bold mt-0.5">
                        0{i + 1}
                      </div>
                      <span className="text-[11px] leading-relaxed text-gray-300 group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Judging & Rewards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-500" /> Evaluation_Metrics
                </h3>
                <ul className="space-y-3">
                  {[
                    {
                      l: "Technical Depth",
                      d: "Understanding of quantum encoding",
                    },
                    {
                      l: "Visualization",
                      d: "Clarity of the final generated map",
                    },
                    {
                      l: "Innovation",
                      d: "Creativity beyond baseline",
                    },
                    {
                      l: "Presentation",
                      d: "Soundness of the generative approach",
                    },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex flex-col border-b border-white/5 pb-2"
                    >
                      <span className="text-[10px] font-bold text-cyan-400 uppercase">
                        {item.l}
                      </span>
                      <span className="text-[9px] text-gray-500 uppercase">
                        {item.d}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bounty Registry  */}
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-10">
                  <Trophy className="w-24 h-24 text-cyan-500" />
                </div>
                <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-cyan-500" /> Bounty_Allocation
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] text-gray-400 uppercase">
                      Prize Pool
                    </span>
                    <span className="text-2xl font-black text-white italic">
                      ₹15,000{" "}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-cyan-500/30">
                    <p className="text-[9px] text-cyan-500/60 leading-tight uppercase">
                      Total event allocation including digital certificates
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <div className="flex justify-between items-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/40">
                  <Share2 className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase">
                    Organizer
                  </p>
                  <p className="text-xs font-bold text-white uppercase tracking-tight">
                    Quantum Computing Club, IIT Indore
                  </p>
                </div>
              </div>
              <button className="bg-white text-black px-8 py-3 rounded-lg font-black text-xs uppercase tracking-tighter hover:bg-cyan-400 transition-all active:scale-95">
                Register_Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderNode({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl backdrop-blur-sm">
      <div className="text-cyan-500 p-1.5 bg-cyan-500/10 rounded-lg">
        {icon}
      </div>
      <div>
        <span className="text-[8px] text-gray-500 uppercase block mb-0.5 tracking-widest font-bold">
          {label}
        </span>
        <span className="text-[10px] font-bold text-white tracking-tighter uppercase">
          {value}
        </span>
      </div>
    </div>
  );
}
