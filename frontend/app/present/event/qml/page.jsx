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
  Maximize2,
  Share2,
  Atom,
  ChevronLeft,
} from "lucide-react";
import { StarField } from "@/components/chronoverse";
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
        "Design quantum circuits where qubit connectivity and state preparation encode 'territorial' information into the system.",
      technical: [
        "Define input-output pipelines.",
        "Implement state preparation logic.",
        "Explore creative circuit structures.",
        "Handle Qiskit-based hardware synthesis.",
      ],
    },
    {
      id: 2,
      title: "Statistical Measurement",
      sub: "Probabilistic Outcomes",
      icon: <Activity className="w-5 h-5" />,
      context:
        "Execute circuits to obtain measurement statistics that represent the generative landscape.",
      technical: [
        "Obtain measurement outcomes.",
        "Analyze probabilistic distributions.",
        "Iterate on encoding strategies.",
        "Minimize decoherence in simulation.",
      ],
    },
    {
      id: 3,
      title: "Classical Mapping",
      sub: "Procedural Synthesis",
      icon: <Layers className="w-5 h-5" />,
      context:
        "Map quantum measurement statistics onto a classical 2D grid to visualize coherent map structures.",
      technical: [
        "Apply post-processing algorithms.",
        "Translate statistics to territorial data.",
        "Generate 2D spatial representations.",
        "Ensure visual clarity and structure.",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#02040a] text-cyan-100 font-mono p-4 md:p-8 overflow-hidden">
      <StarField />

      {/* Bloch Sphere Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 opacity-10 pointer-events-none">
        <motion.div
          animate={{ rotateY: 360, rotateX: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-full h-full border border-cyan-500 rounded-full border-dashed flex items-center justify-center"
        >
          <div className="w-[70%] h-[70%] border border-cyan-400 rounded-full" />
          <div className="absolute w-full h-px bg-cyan-500/50" />
          <div className="absolute h-full w-px bg-cyan-500/50" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- QUANTUM HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-cyan-500/20 pb-8">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-cyan-400"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.6em] uppercase font-bold">
                Return to Events
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white">
              QUANTUM <span className="text-cyan-500 italic">MAP_GEN</span>
            </h1>
            <p className="text-[10px] text-cyan-500/60 mt-2 tracking-[0.3em] uppercase">
              Procedural Content Generation (Q-PCG)
            </p>
          </div>
          <div className="mt-6 lg:mt-0 flex gap-4">
            <HeaderNode icon={<Orbit />} label="Duration" value="24-48 Hours" />
            <HeaderNode
              icon={<Binary />}
              label="Language"
              value="Python / Qiskit "
            />
            <HeaderNode
              icon={<Share2 />}
              label="Format"
              value="Online Hackathon"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- PIPELINE NAVIGATOR --- */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-[10px] text-cyan-500 uppercase tracking-widest mb-4">
              Synthesis_Pipeline
            </h3>
            {pipelineStages.map((stage, idx) => (
              <button
                key={stage.id}
                onClick={() => setActiveLayer(idx)}
                className={`w-full p-6 text-left rounded-2xl border transition-all duration-500 relative overflow-hidden group ${
                  activeLayer === idx
                    ? "bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_25px_rgba(6,182,212,0.2)]"
                    : "bg-black/40 border-white/5 hover:border-cyan-500/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-lg transition-colors ${activeLayer === idx ? "bg-cyan-500 text-black" : "bg-white/5 text-cyan-500"}`}
                  >
                    {stage.icon}
                  </div>
                  <div>
                    <span className="text-[9px] text-cyan-500/50 uppercase tracking-widest font-bold">
                      Stage_0{stage.id}
                    </span>
                    <h4 className="text-white font-bold uppercase tracking-tighter group-hover:text-cyan-400 transition-colors">
                      {stage.title}
                    </h4>
                    <p className="text-[8px] text-gray-500 uppercase tracking-tighter">
                      {stage.sub}
                    </p>
                  </div>
                </div>
              </button>
            ))}

            {/* Research Basis */}
            <div className="p-6 bg-cyan-950/20 border border-cyan-500/10 rounded-2xl mt-8 relative">
              <div className="absolute top-2 right-2">
                {/* <Maximize2 className="w-3 h-3 text-cyan-800" /> */}
              </div>
              <h4 className="text-[10px] text-cyan-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Dna className="w-3 h-3" /> Research_Anchor
              </h4>
              <p className="text-[10px] leading-relaxed text-gray-400 italic">
                Inspired by "A Quantum Procedure for Map Generation". Focus on probabilistic outcomes over
                rule-based random methods.
              </p>
            </div>
          </div>

          {/* --- DYNAMIC LOGIC VIEW --- */}
          <div className="lg:col-span-8 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-black/40 border border-cyan-500/20 rounded-3xl p-8 backdrop-blur-xl relative min-h-100"
              >
                <div className="relative z-10">
                  <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">
                    {pipelineStages[activeLayer].title}
                  </h2>
                  <p className="text-sm leading-relaxed text-cyan-100/70 mb-8 p-4 bg-cyan-500/5 border-l-2 border-cyan-500">
                    {pipelineStages[activeLayer].context}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pipelineStages[activeLayer].technical.map((item, i) => (
                      <div
                        key={i}
                        className="flex gap-4 p-4 bg-white/5 border border-white/5 rounded-xl group hover:bg-cyan-500/5 transition-all"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="text-[11px] leading-relaxed text-gray-400 group-hover:text-white transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* --- BOUNTY CORE --- */}
            <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Trophy className="w-32 h-32" />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-black text-white uppercase tracking-[0.2em]">
                    Bounty_Registry
                  </h3>
                  <p className="text-[10px] text-cyan-500 uppercase tracking-widest italic">
                    QML_Track_Allocation
                  </p>
                </div>

                <div className="flex gap-8">
                  <PrizeBox rank="01" amount="7,000" label="Primary Rank" />
                  <PrizeBox rank="02" amount="5,000" label="Secondary Rank" />
                  <PrizeBox rank="03" amount="3,000" label="Tertiary Rank" />
                </div>

                <div className="px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-center">
                  <span className="text-[9px] text-cyan-500 uppercase block mb-1">
                    Total Pool
                  </span>
                  <span className="text-2xl font-black text-cyan-400 italic">
                    ₹15,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

// --- Internal Components ---

function HeaderNode({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg">
      <div className="text-cyan-500">{icon}</div>
      <div>
        <span className="text-[8px] text-gray-500 uppercase block mb-0.5">
          {label}
        </span>
        <span className="text-xs font-bold text-white tracking-tighter uppercase">
          {value}
        </span>
      </div>
    </div>
  );
}

function PrizeBox({ rank, amount, label }) {
  return (
    <div className="text-center">
      <div className="text-[8px] text-cyan-500 uppercase mb-1 font-bold tracking-widest">
        {rank}_Access
      </div>
      <div className="text-xl font-black text-white italic">₹{amount}</div>
      <div className="text-[8px] text-gray-600 uppercase mt-1">{label}</div>
    </div>
  );
}
