"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  Smartphone,
  Activity,
  Dna,
  ClipboardCheck,
  Zap,
  ChevronLeft,
} from "lucide-react";
import { StarField } from "@/components/chronoverse";
import { useRouter } from "next/navigation";

export default function SolveXBioPS() {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const medicalBriefs = [
    {
      id: 1,
      title: "Low-Cost Patient Monitor",
      theme: "Frugal Biomedical Engineering",
      icon: <HeartPulse className="w-6 h-6" />,
      context:
        "Conceptualize a portable, battery-operated device for resource-limited settings capable of simultaneous vitals tracking.",
      vitals: ["Heart Rate", "SpO2", "Blood Pressure", "Temperature"],
      requirements: [
        "Affordability via cost-effective sensors.",
        "High portability for field use (Ambulances/Rural Clinics).",
        "Simple interface (LCD/Mobile App) for data visualization.",
        "Theoretically sound and viable circuitry design.",
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
      title: "Screen Addiction Mitigation",
      theme: "Health-Tech Behavioral Intervention",
      icon: <Smartphone className="w-6 h-6" />,
      context:
        "Bridge the gap between psychology and technology with a system that detects and activeley mitigates mobile addiction.",
      vitals: [
        "Eye Strain",
        "Stress Levels",
        "Posture Tracking",
        "Usage Patterns",
      ],
      requirements: [
        "Physiological stress-based addiction detection.",
        "Haptic or gamified intervention strategies.",
        "Non-intrusive yet effective behavior alteration.",
        "Impact analysis on long-term cognitive health.",
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
    <div className="relative min-h-screen bg-[#02040a] text-emerald-100 font-mono p-4 md:p-8 overflow-hidden">
      <StarField />

      {/* Bio-Waveform Animation Background */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-20 pointer-events-none">
        <svg viewBox="0 0 1000 100" className="w-full h-full">
          <motion.path
            d="M0 50 L100 50 L120 20 L140 80 L160 50 L300 50 L320 10 L340 90 L360 50 L1000 50"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- CLINICAL HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-emerald-500/20 pb-8">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-emerald-400"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.4em] uppercase font-bold">
                Return to Events
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">
              SolveX<span className="text-emerald-500">Bio</span>
            </h1>
            <p className="text-[10px] text-emerald-500/60 mt-2 tracking-[0.2em] uppercase">
              Biotech & Biomedical Problem-Solving Challenge
            </p>
          </div>
          <div className="flex gap-4 mt-6 lg:mt-0">
            <HeaderTag
              icon={<Activity />}
              label="Teams"
              value="Min 2 Members "
            />
            <HeaderTag
              icon={<Dna />}
              label="Eligibility"
              value="Open to All "
            />
            <HeaderTag icon={<Zap />} label="Policy" value="Web Permitted" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- CHALLENGE NAVIGATOR --- */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-[10px] text-emerald-500 uppercase tracking-widest mb-4">
              Diagnostic_Selectors
            </h3>
            {medicalBriefs.map((brief, idx) => (
              <button
                key={brief.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full p-6 text-left rounded-2xl border transition-all duration-500 relative group overflow-hidden ${
                  activeTab === idx
                    ? "bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                    : "bg-black/40 border-white/5 hover:border-emerald-500/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl transition-colors ${activeTab === idx ? "bg-emerald-500 text-black" : "bg-white/5 text-emerald-500"}`}
                  >
                    {brief.icon}
                  </div>
                  <div>
                    <span className="text-[9px] text-emerald-500/50 uppercase font-bold">
                      Problem_0{brief.id}
                    </span>
                    <h4 className="text-white font-bold uppercase tracking-tighter group-hover:text-emerald-400 transition-colors">
                      {brief.title}
                    </h4>
                    <p className="text-[8px] text-gray-500 uppercase">
                      {brief.theme}
                    </p>
                  </div>
                </div>
              </button>
            ))}

            {/* Rubric Module */}
            <div className="p-6 bg-emerald-950/20 border border-emerald-500/10 rounded-2xl mt-8">
              <h4 className="text-[10px] text-emerald-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <ClipboardCheck className="w-3 h-3" /> Evaluation_Matrix
              </h4>
              <div className="space-y-3">
                <RubricRow label="Problem Understanding" marks="20" />
                <RubricRow label="Innovation" marks="25" />
                <RubricRow label="Feasibility" marks="25" />
                <RubricRow label="Presentation/Q&A" marks="30" />
              </div>
            </div>
          </div>

          {/* --- LAB VIEWPORT --- */}
          <div className="lg:col-span-8 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-black/40 border border-emerald-500/20 rounded-3xl p-8 backdrop-blur-xl relative"
              >
                <div className="relative z-10">
                  <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">
                    Briefing: {medicalBriefs[activeTab].title}
                  </h2>
                  <p className="text-sm leading-relaxed text-emerald-100/70 mb-8 border-l-2 border-emerald-500 pl-6 italic">
                    "{medicalBriefs[activeTab].context}"
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {medicalBriefs[activeTab].requirements.map((req, i) => (
                      <div
                        key={i}
                        className="flex gap-4 p-5 bg-white/5 border border-white/5 rounded-2xl group hover:bg-emerald-500/5 transition-all"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span className="text-[11px] leading-relaxed text-gray-400 group-hover:text-white transition-colors">
                          {req}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* --- BOUNTY REGISTRY --- */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Activity className="w-32 h-32" />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-black text-white uppercase tracking-[0.2em]">
                    Bounty_Registry
                  </h3>
                  <p className="text-[10px] text-emerald-500 uppercase tracking-widest italic">
                    SolveX_Incentive_Package
                  </p>
                </div>

                <div className="flex gap-6">
                  <BountyNode
                    rank="ALPHA"
                    amount={medicalBriefs[activeTab].prizes.first}
                  />
                  <BountyNode
                    rank="BETA"
                    amount={medicalBriefs[activeTab].prizes.second}
                  />
                  <BountyNode
                    rank="GAMMA"
                    amount={medicalBriefs[activeTab].prizes.third}
                  />
                </div>

                <div className="px-6 py-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center">
                  <span className="text-[9px] text-emerald-500 uppercase block font-bold mb-1">
                    Total Pool
                  </span>
                  <span className="text-2xl font-black text-emerald-400 italic">
                    ₹15,000
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

// --- Internal Lab Components ---

function HeaderTag({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg">
      <div className="text-emerald-500">{icon}</div>
      <div>
        <span className="text-[8px] text-gray-500 uppercase block leading-none mb-1">
          {label}
        </span>
        <span className="text-xs font-bold text-white tracking-tighter uppercase">
          {value}
        </span>
      </div>
    </div>
  );
}

function RubricRow({ label, marks }) {
  return (
    <div className="flex justify-between items-center text-[10px] border-b border-white/5 pb-2">
      <span className="text-gray-500 uppercase">{label}</span>
      <span className="text-emerald-400 font-bold">{marks} Marks</span>
    </div>
  );
}

function BountyNode({ rank, amount }) {
  return (
    <div className="text-center">
      <div className="text-[8px] text-emerald-500 uppercase mb-1 font-bold">
        {rank}_Tier
      </div>
      <div className="text-xl font-black text-white italic">₹{amount}</div>
    </div>
  );
}
