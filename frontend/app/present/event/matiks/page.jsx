"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Timer,
  Target,
  Sigma,
  ChevronLeft,
  Users,
  Globe,
  Award,
  BookOpen,
  Terminal,
  ShieldAlert,
  HardDrive,
  Layout,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function MatiksPS() {
  const [activePhase, setActivePhase] = useState(0);
  const router = useRouter();

  const eventStages = [
    {
      id: 1,
      title: "Registration Phase",
      subtitle: "Entry Protocol",
      icon: <Users className="w-5 h-5" />,
      context:
        "Initial intake for individual participants. Open to School Students (8th standard onwards) and Undergraduate students.",
      specs: [
        "Individual participation required.",
        // "Target audience: 8th grade through UG.",
        // "Expected footfall: 70-100 participants.",
        "Registration via portal interface.",
      ],
    },
    {
      id: 2,
      title: "Preliminary Rounds",
      subtitle: "Brain Blitz Phase",
      icon: <Timer className="w-5 h-5" />,
      context:
        "A fast-paced knockout stage conducted via the Matiks online portal in an offline setting. Focuses on speed and numerical intuition.",
      specs: [
        "Rapid-fire questions.",
        "Tests pattern recognition & intuition.",
        "Multiple elimination rounds.",
        "Portal-based offline execution.",
      ],
    },
    {
      id: 3,
      title: "Final Championship",
      subtitle: "Logic Manifold",
      icon: <Sigma className="w-5 h-5" />,
      context:
        "The ultimate tier featuring advanced logical and visual puzzles to determine the tournament champions.",
      specs: [
        "Advanced difficulty scaling.",
        "Non-routine problem archetypes.",
        "Visual puzzle solving.",
        "Real-time reasoning assessment.",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen text-rose-100 font-mono p-4 md:p-8 bg-black/30">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- TACTICAL HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-rose-500/30 pb-8">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-rose-500 hover:text-rose-400 transition-colors mb-4"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.5em] uppercase font-bold">
                Return to Events
              </span>
            </button>
            <div className="flex items-center gap-3">
              <div className="bg-rose-500 p-2 rounded-sm shadow-[0_0_15px_rgba(244,63,94,0.5)]">
                <Sigma className="w-8 h-8 text-black" />
              </div>
              <h1 className="text-5xl font-black tracking-tighter text-white uppercase">
                Matiks <span className="text-rose-500 italic">Tournament</span>
              </h1>
            </div>
            <p className="text-[10px] text-rose-500/80 mt-4 tracking-[0.4em] uppercase font-bold">
              Infinitrix - The Math Club // Ingenium 3.0
            </p>
          </div>

          <div className="mt-6 lg:mt-0 grid grid-cols-2 gap-3">
            <HeaderStat icon={<Globe />} label="Mode" value="Offline Portal" />
            <HeaderStat icon={<Timer />} label="Duration" value="2 Hours" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- LEFT COLUMN: INTEL & REQS --- */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <h3 className="text-[10px] text-rose-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Terminal className="w-3 h-3" /> Event_Sequence
              </h3>
              {eventStages.map((stage, idx) => (
                <button
                  key={stage.id}
                  onClick={() => setActivePhase(idx)}
                  className={`w-full p-4 text-left rounded-xl border transition-all duration-300 group ${
                    activePhase === idx
                      ? "bg-rose-500/20 border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.15)]"
                      : "bg-black/40 border-white/10 hover:border-rose-500/40"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-bold ${activePhase === idx ? "text-rose-500" : "text-white/20"}`}
                    >
                      0{stage.id}
                    </span>
                    <h4
                      className={`text-sm font-bold uppercase tracking-tighter ${activePhase === idx ? "text-white" : "text-white/60"}`}
                    >
                      {stage.title}
                    </h4>
                  </div>
                </button>
              ))}
            </div>

            {/* Judging Criteria */}
            <div className="p-6 bg-black/60 border border-rose-500/20 rounded-2xl">
              <h4 className="text-[10px] text-rose-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Layout className="w-3 h-3" /> Evaluation_Vector
              </h4>
              <div className="space-y-3">
                <EvaluationRow label="Solution Accuracy" value="Primary" />
                <EvaluationRow label="Response Speed" value="Critical" />
                <EvaluationRow label="Logical Reasoning" value="High" />
                <EvaluationRow label="Consistency" value="Required" />
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: DYNAMIC CONTENT --- */}
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-black/60 border border-rose-500/20 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[10px] bg-rose-500 text-black px-2 py-0.5 font-bold uppercase mb-2 inline-block">
                        Active_Phase: 0{eventStages[activePhase].id}
                      </span>
                      <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
                        {eventStages[activePhase].subtitle}
                      </h2>
                    </div>
                    <div className="text-rose-500 opacity-20">
                      {React.cloneElement(eventStages[activePhase].icon, {
                        size: 48,
                      })}
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-rose-100/70 mb-8 max-w-2xl border-l-2 border-rose-500 pl-6 italic">
                    {eventStages[activePhase].context}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {eventStages[activePhase].specs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex gap-4 p-4 bg-white/5 border border-white/5 rounded-xl hover:border-rose-500/30 transition-colors"
                      >
                        <Zap className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                        <span className="text-[11px] text-gray-400">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() =>
                      router.push(`/present/registration?event=matiks`)
                    }
                    className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all group overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 uppercase tracking-[0.2em] text-sm">
                      Initialize Registration Protocol
                    </span>
                    <ChevronLeft className="w-4 h-4 rotate-180 relative z-10" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Prizes & Rules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bounty Registry */}
              <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="flex items-center gap-3 mb-4 text-rose-500">
                  <Award className="w-5 h-5" />
                  <h3 className="text-xs font-bold uppercase tracking-widest">
                    Bounty_Registry
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <PrizeStat label="Winner" value="₹5,000" />
                  <PrizeStat label="Runner Up" value="₹3,000" />
                  <PrizeStat label="3rd Place" value="₹2,000" />
                  <PrizeStat label="Total Pool" value="₹10,000" highlight />
                </div>
              </div>

              {/* Rules & Compliance */}
              <div className="bg-black/60 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4 text-rose-500">
                  <ShieldAlert className="w-5 h-5" />
                  <h3 className="text-xs font-bold uppercase tracking-widest">
                    Rules_Compliance
                  </h3>
                </div>
                <ul className="text-[10px] space-y-2 text-white/60">
                  <li className="flex gap-2">
                    <span>•</span>{" "}
                    <span>Individual participation is mandatory.</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>{" "}
                    <span>Rules subject to organizer discretion.</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> <span>Must use provided Matiks portal.</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>{" "}
                    <span>Focus on intuition over lengthy calculation.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Outcomes Block */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4 text-rose-500">
                <BookOpen className="w-5 h-5" />
                <h3 className="text-xs font-bold uppercase tracking-widest">
                  Strategic_Impact
                </h3>
              </div>
              <p className="text-[11px] text-white/60 leading-relaxed">
                MATIKS aims to break the stereotype of rigid mathematical
                methods by emphasizing speed and practical reasoning. Expected
                outcomes include improved logical reasoning skills, enhanced
                student engagement with technical events, and fostering a
                competitive spirit aligned with Ingenium 3.0.
              </p>
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
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl backdrop-blur-sm">
      <div className="text-rose-500 w-4 h-4">{icon}</div>
      <div>
        <span className="text-[8px] text-gray-500 uppercase block leading-none mb-1">
          {label}
        </span>
        <span className="text-[10px] font-bold text-white uppercase tracking-tighter">
          {value}
        </span>
      </div>
    </div>
  );
}

function EvaluationRow({ label, value }) {
  return (
    <div className="flex justify-between items-center text-[10px] border-b border-white/5 pb-2">
      <span className="text-gray-500 uppercase tracking-tighter">{label}</span>
      <span className="text-rose-400 font-bold italic">{value}</span>
    </div>
  );
}

function PrizeStat({ label, value, highlight = false }) {
  return (
    <div
      className={`p-2 rounded-lg ${highlight ? "bg-rose-500/20 border border-rose-500/40" : "bg-white/5"}`}
    >
      <span className="text-[8px] text-gray-500 uppercase block">{label}</span>
      <span
        className={`text-sm font-black ${highlight ? "text-rose-400" : "text-white"}`}
      >
        {value}
      </span>
    </div>
  );
}
