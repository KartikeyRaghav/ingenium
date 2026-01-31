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
  ShieldAlert,
  Target,
  Cpu,
  Boxes,
  Microscope,
  Globe,
  ArrowRight,
} from "lucide-react";
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
      background:
        "In resource-limited settings like rural clinics and ambulances, expensive monitoring systems are restricted. There is a critical need for frugal solutions that do not compromise accuracy.",
      challenge:
        "Design a portable, multi-parameter device measuring at least three physiological parameters simultaneously.",
      vitals: ["Heart Rate", "SpO2", "Blood Pressure", "Temperature"],
      requirements: [
        {
          label: "Affordability",
          desc: "Utilize cost-effective sensors and materials.",
        },
        {
          label: "Portability",
          desc: "Compact, battery-operated, or low power consumption.",
        },
        {
          label: "Interface",
          desc: "LCD screen, mobile app, or LED indicators.",
        },
        {
          label: "Feasibility",
          desc: "Theoretically sound circuitry and viable build.",
        },
      ],
      deliverables: [
        "Block diagram/schematic of the device.",
        "Component list (sensors/microcontrollers) with cost estimation.",
        "Justification of accuracy vs. cost.",
      ],
    },
    {
      id: 2,
      title: "Screen Addiction Mitigation",
      theme: "Health-Tech Behavioral Intervention",
      icon: <Smartphone className="w-6 h-6" />,
      background:
        "Excessive screen time leads to mental health issues and sleep disorders. Existing software gaps require interventions combining psychology with biomedical tech.",
      challenge:
        "Propose an innovative solution (wearable or bio-feedback) to detect, monitor, and mitigate mobile addiction.",
      vitals: [
        "Eye Strain",
        "Stress Levels",
        "Posture Tracking",
        "Usage Patterns",
      ],
      requirements: [
        {
          label: "Mechanism",
          desc: "How it detects addiction (Screen time vs. Stress).",
        },
        {
          label: "Intervention",
          desc: "Haptic feedback, gamification, or blue-light modulation.",
        },
        {
          label: "User Centricity",
          desc: "Non-intrusive but effective behavior alteration.",
        },
        {
          label: "Tech Stack",
          desc: "Integration of software and hardware components.",
        },
      ],
      deliverables: [
        "Concept note explaining the tech stack.",
        "User workflow (Interaction mapping).",
        "Impact analysis on mental/physical health.",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen text-emerald-100 font-mono p-4 md:p-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- DYNAMIC HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-emerald-500/30 pb-8 gap-6">
          <div className="space-y-2">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-emerald-400 hover:text-white transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] tracking-[0.4em] uppercase font-bold">
                Return to Events
              </span>
            </button>
            <h1 className="text-6xl font-black tracking-tighter text-white uppercase italic">
              SolveX<span className="text-emerald-500 animate-pulse">Bio</span>
            </h1>
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-emerald-500"></span>
              <p className="text-[10px] text-emerald-500/80 tracking-[0.3em] uppercase">
                Biocrats Club • IIT Indore
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto">
            <HeaderTag
              icon={<Boxes size={14} />}
              label="Structure"
              value="Teams (Min 2)"
            />
            <HeaderTag
              icon={<Globe size={14} />}
              label="Access"
              value="Open to All"
            />
            <HeaderTag
              icon={<Target size={14} />}
              label="Format"
              value="Competitive"
            />
            <HeaderTag
              icon={<ShieldAlert size={14} />}
              label="Security"
              value="Plagiarism Check"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- LEFT COLUMN: NAVIGATION & RULES --- */}
          <div className="lg:col-span-4 space-y-6">
            <section>
              <h3 className="text-[10px] text-emerald-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Microscope className="w-3 h-3" /> Select_Objective
              </h3>
              <div className="space-y-3">
                {medicalBriefs.map((brief, idx) => (
                  <button
                    key={brief.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full p-5 text-left rounded-xl border transition-all duration-300 relative overflow-hidden ${
                      activeTab === idx
                        ? "bg-emerald-500/20 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                        : "bg-black/20 border-emerald-500/10 hover:border-emerald-500/40"
                    }`}
                  >
                    <div className="flex items-center gap-4 relative z-10">
                      <div
                        className={`p-2 rounded-lg ${activeTab === idx ? "bg-emerald-500 text-black" : "bg-emerald-950 text-emerald-500"}`}
                      >
                        {brief.icon}
                      </div>
                      <div>
                        <p className="text-[9px] text-emerald-500/50 uppercase font-bold tracking-tighter">
                          Mission_0{brief.id}
                        </p>
                        <h4 className="text-sm font-bold text-white uppercase">
                          {brief.title}
                        </h4>
                      </div>
                    </div>
                    {activeTab === idx && (
                      <motion.div
                        layoutId="tab-indicator"
                        className="absolute inset-0 bg-linear-to-r from-emerald-500/10 to-transparent"
                      />
                    )}
                  </button>
                ))}
              </div>
            </section>

            {/* Protocol Module */}
            <div className="p-6 bg-black/40 border border-emerald-500/20 rounded-2xl space-y-4">
              <h4 className="text-[10px] text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                <Zap className="w-3 h-3" /> Event_Protocols
              </h4>
              <ul className="space-y-3">
                <ProtocolItem
                  label="Prep Phase"
                  desc="Internet access permitted for research."
                  color="text-emerald-400"
                />
                <ProtocolItem
                  label="Presentation"
                  desc="No internet access allowed."
                  color="text-red-400"
                />
                <ProtocolItem
                  label="Q&A Session"
                  desc="Conceptual clarity defense required."
                  color="text-blue-400"
                />
              </ul>
            </div>

            {/* Evaluation Matrix */}
            <div className="p-6 bg-emerald-950/10 border border-emerald-500/10 rounded-2xl">
              <h4 className="text-[10px] text-emerald-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <ClipboardCheck className="w-3 h-3" /> Scoring_Rubric
              </h4>
              <div className="space-y-2">
                <RubricRow label="Problem Understanding" marks="20" />
                <RubricRow label="Innovation & Novelty" marks="25" />
                <RubricRow label="Feasibility" marks="25" />
                <RubricRow label="Presentation" marks="15" />
                <RubricRow label="Teamwork & Q&A" marks="15" />
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: MISSION DATA --- */}
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-black/40 border border-emerald-500/20 rounded-3xl p-8 backdrop-blur-md"
              >
                {/* Background & Challenge */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <h5 className="text-[10px] text-emerald-500 uppercase tracking-widest border-b border-emerald-500/20 pb-2">
                      01_Background
                    </h5>
                    <p className="text-xs leading-relaxed text-gray-400 italic">
                      "{medicalBriefs[activeTab].background}"
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h5 className="text-[10px] text-emerald-500 uppercase tracking-widest border-b border-emerald-500/20 pb-2">
                      02_The_Challenge
                    </h5>
                    <p className="text-xs leading-relaxed text-emerald-50">
                      {medicalBriefs[activeTab].challenge}
                    </p>
                  </div>
                </div>

                {/* Requirements Grid */}
                <div className="mb-8">
                  <h5 className="text-[10px] text-emerald-500 uppercase tracking-widest mb-4">
                    03_Technical_Requirements
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {medicalBriefs[activeTab].requirements.map((req, i) => (
                      <div
                        key={i}
                        className="flex flex-col p-4 bg-emerald-500/5 border border-white/5 rounded-xl hover:border-emerald-500/30 transition-colors"
                      >
                        <span className="text-[10px] font-bold text-emerald-400 uppercase mb-1">
                          {req.label}
                        </span>
                        <span className="text-[11px] text-gray-400 leading-tight">
                          {req.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables & Actions */}
                <div className="flex flex-col md:flex-row gap-6 items-center border-t border-emerald-500/20 pt-8">
                  <div className="flex-1 space-y-3 w-full">
                    <h5 className="text-[10px] text-emerald-500 uppercase tracking-widest">
                      Required_Deliverables
                    </h5>
                    {medicalBriefs[activeTab].deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-[11px] text-gray-300"
                      >
                        <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="shrink-0 w-full md:w-auto">
                    <button className="w-full md:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                      <Cpu size={18} />
                      INITIALIZE REGISTRATION
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Footer Prize Pool */}
            <div className="bg-linear-to-r from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-2xl p-6 flex flex-wrap justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-500/20 rounded-full">
                  <Activity className="w-6 h-6 text-emerald-400 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-widest">
                    Incentive Registry
                  </h3>
                  <p className="text-[9px] text-emerald-500/60 uppercase">
                    Performance-based awards
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <BountyNode rank="ALPHA" amount="7K" />
                <BountyNode rank="BETA" amount="5K" />
                <BountyNode rank="GAMMA" amount="3K" />
              </div>

              <div className="h-10 w-px bg-emerald-500/20 hidden md:block" />

              <div className="text-right">
                <span className="text-[9px] text-emerald-500 uppercase block font-bold">
                  Total Pool
                </span>
                <span className="text-2xl font-black text-white tracking-tighter">
                  ₹15,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Internal Augmented Components ---

function HeaderTag({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-emerald-500/5 border border-emerald-500/10 p-3 rounded-xl">
      <div className="text-emerald-500">{icon}</div>
      <div>
        <span className="text-[7px] text-gray-500 uppercase block leading-none mb-1 tracking-widest">
          {label}
        </span>
        <span className="text-[10px] font-bold text-white uppercase whitespace-nowrap">
          {value}
        </span>
      </div>
    </div>
  );
}

function ProtocolItem({ label, desc, color }) {
  return (
    <li className="flex flex-col gap-1">
      <span className={`text-[9px] font-bold uppercase ${color}`}>{label}</span>
      <span className="text-[10px] text-gray-500 leading-none">{desc}</span>
    </li>
  );
}

function RubricRow({ label, marks }) {
  return (
    <div className="flex justify-between items-center text-[10px] group border-b border-white/5 pb-1">
      <span className="text-gray-500 group-hover:text-emerald-300 transition-colors uppercase">
        {label}
      </span>
      <span className="text-emerald-500 font-bold">{marks}</span>
    </div>
  );
}

function BountyNode({ rank, amount }) {
  return (
    <div className="text-center">
      <div className="text-[7px] text-emerald-500/70 uppercase mb-1 font-bold tracking-tighter">
        {rank}
      </div>
      <div className="text-lg font-black text-white italic">₹{amount}</div>
    </div>
  );
}
