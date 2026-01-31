"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Timer,
  Binary,
  Trophy,
  Target,
  Sigma,
  Pi,
  ChevronLeft,
  Users,
  Cpu,
  Globe,
  Award,
  BookOpen,
  Terminal,
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
        "Individual participant registration phase. Open to school students (8th standard onwards) and undergraduate students.",
      specs: [
        "Individual participation format.",
        "Targeting 70-100 participants.",
        "Focus on school and UG demographics.",
        "Gateway to Ingenium 3.0 technical events.",
      ],
    },
    {
      id: 2,
      title: "Preliminary Rounds",
      subtitle: "Rapid-Fire Execution",
      icon: <Timer className="w-5 h-5" />,
      context:
        "Rapid-fire questions testing speed and accuracy via the Matiks online portal in an offline setting.",
      specs: [
        "Short, time-bound questions.",
        "Tests numerical intuition & pattern recognition.",
        "Multiple elimination-based rounds.",
        "Conducted in lecture/seminar halls.",
      ],
    },
    {
      id: 3,
      title: "Final Championship",
      subtitle: "Logic Manifold",
      icon: <Sigma className="w-5 h-5" />,
      context:
        "The peak of the tournament featuring advanced logical and visual puzzles to determine the ultimate winners.",
      specs: [
        "Advanced difficulty scaling.",
        "Emphasis on non-routine problem types.",
        "Judging based on consistency across rounds.",
        "Final determination of Matiks Champions.",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen text-rose-100 font-mono p-4 md:p-8">
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
              <div className="bg-rose-500 p-2 rounded-sm">
                <Sigma className="w-8 h-8 text-black" />
              </div>
              <h1 className="text-5xl font-black tracking-tighter text-white uppercase">
                Matiks <span className="text-rose-500 italic">Tournament</span>
              </h1>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 grid grid-cols-2 gap-3">
            <HeaderStat
              icon={<Globe />}
              label="Mode"
              value="Offline (Portal)"
            />
            <HeaderStat icon={<Timer />} label="Duration" value="2 Hours" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- LEFT COLUMN: NAVIGATION & ANALYTICS --- */}
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
                    <div>
                      <h4
                        className={`text-sm font-bold uppercase tracking-tighter ${activePhase === idx ? "text-white" : "text-white/60"}`}
                      >
                        {stage.title}
                      </h4>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Judging Parameters HUD */}
            <div className="p-6 bg-black/60 border border-rose-500/20 rounded-2xl">
              <h4 className="text-[10px] text-rose-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Target className="w-3 h-3" /> Evaluation_Vector
              </h4>
              <div className="space-y-3">
                <EvaluationRow label="Solution Accuracy" value="Primary" />
                <EvaluationRow label="Response Speed" value="Critical" />
                <EvaluationRow label="Logical Reasoning" value="High" />
                <EvaluationRow label="Round Consistency" value="Required" />
              </div>
            </div>

            {/* Logistical Requirements */}
            <div className="p-6 border border-white/5 rounded-2xl bg-white/5">
              <h4 className="text-[10px] text-white/40 uppercase tracking-widest mb-4">
                Logistics_Protocol
              </h4>
              <ul className="text-[11px] space-y-2 text-rose-100/60">
                <li className="flex justify-between">
                  <span>Venue:</span>{" "}
                  <span className="text-white">Lecture Hall</span>
                </li>
                <li className="flex justify-between">
                  <span>Infrastructure:</span>{" "}
                  <span className="text-white">Power/Net</span>
                </li>
                <li className="flex justify-between">
                  <span>System:</span>{" "}
                  <span className="text-white">Matiks Portal</span>
                </li>
              </ul>
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
                className="bg-black/40 border border-rose-500/20 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden"
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
                        className="flex gap-4 p-4 bg-white/5 border border-white/5 rounded-xl"
                      >
                        <Zap className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                        <span className="text-[11px] text-gray-400">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all group overflow-hidden relative">
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 uppercase tracking-[0.2em] text-sm">
                      Initialize Registration Protocol
                    </span>
                    <ChevronLeft className="w-4 h-4 rotate-180 relative z-10" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Outcomes & Rewards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Rewards */}
              <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4 text-rose-500">
                  <Award className="w-5 h-5" />
                  <h3 className="text-xs font-bold uppercase tracking-widest">
                    Bounty_Registry
                  </h3>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-black text-white">
                    ₹10,000
                  </span>
                  <span className="text-[10px] text-rose-500 uppercase pb-2">
                    Cash Prize*
                  </span>
                </div>
                <p className="text-[9px] text-white/40 mt-2 italic">
                  *Total Prize Pool
                </p>
              </div>

              {/* Outcomes */}
              <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4 text-rose-500">
                  <BookOpen className="w-5 h-5" />
                  <h3 className="text-xs font-bold uppercase tracking-widest">
                    Projected_Outcomes
                  </h3>
                </div>
                <ul className="text-[10px] space-y-1 text-white/60">
                  <li>• Improved Speed & Reasoning</li>
                  <li>• Higher Math Engagement</li>
                  <li>• Interactive Discipline Perception</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* --- FOOTER COORDINATOR INFO --- */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center border border-rose-500/40">
              <Cpu className="w-5 h-5 text-rose-500" />
            </div>
            <div>
              <p className="text-[8px] text-white/40 uppercase tracking-[0.2em]">
                Submitted_By
              </p>
              <p className="text-xs font-bold text-white uppercase">
                Infinitrix - The Math Club
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[8px] text-white/40 uppercase tracking-[0.2em]">
              Project_Lead
            </p>
            <p className="text-xs font-bold text-rose-500 uppercase">
              Harshith Jai Surya Ganji
            </p>
            <p className="text-[10px] text-white/60 italic">
              Co-Head, Infinitrix // +91 9014153864
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Manifold Components ---

function HeaderStat({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl">
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
      <span className="text-rose-400 font-bold">{value}</span>
    </div>
  );
}
