"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  Smartphone,
  ClipboardCheck,
  ChevronLeft,
  ShieldAlert,
  Target,
  Cpu,
  Boxes,
  Microscope,
  Globe,
  ArrowRight,
  AlertTriangle,
  FileText,
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
        "In resource-limited environments like rural clinics and ambulances, access to advanced monitoring is restricted by cost and portability constraints.",
      challenge:
        "Design a frugal, portable, and accurate multi-parameter solution capable of measuring at least three physiological parameters simultaneously.",
      vitals: ["Heart Rate", "SpO2", "Blood Pressure", "Temperature"],
      requirements: [
        {
          label: "Affordability",
          desc: "Use cost-effective sensors.",
        },
        {
          label: "Portability",
          desc: "Low-power or battery operation.",
        },
        {
          label: "Interface",
          desc: "Simple data display via LCD, App, or LEDs.",
        },
        {
          label: "Feasibility",
          desc: "Must be theoretically and practically sound.",
        },
      ],
      deliverables: [
        "Block diagram or schematic",
        "Component list with cost estimation",
        "Design justification (Accuracy vs. Cost)",
      ],
    },
    {
      id: 2,
      title: "Screen Addiction Mitigation",
      theme: "Health-Tech Behavioral Intervention",
      icon: <Smartphone className="w-6 h-6" />,
      background:
        "Excessive screen time contributes to mental health issues and sleep disorders. Current tools lack active intervention.",
      challenge:
        "Combine behavioural psychology with physiological sensing (eye strain, stress, posture) to actively influence user behaviour.",
      vitals: [
        "Eye Strain",
        "Stress Levels",
        "Posture Tracking",
        "Usage Patterns",
      ],
      requirements: [
        {
          label: "Mechanism",
          desc: "Clear explanation of detection logic.",
        },
        {
          label: "Intervention",
          desc: "Haptic feedback, gamification, or blue-light modulation.",
        },
        {
          label: "User Centricity",
          desc: "Non-intrusive long-term modification.",
        },
        {
          label: "Tech Stack",
          desc: "Defined software/hardware integration.",
        },
      ],
      deliverables: [
        "Concept note of the technology stack ",
        "User workflow detailing system interaction ",
        "Impact analysis on mental/physical health ",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-black/30 text-emerald-100 font-mono p-4 md:p-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-emerald-500/30 pb-8 gap-6">
          <div className="space-y-2">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-emerald-400 hover:text-white transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-emerald-500/80">
                Return to Events
              </span>
            </button>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white uppercase italic">
              SolveX<span className="text-emerald-500">Bio</span>
            </h1>
            <p className="text-[10px] text-emerald-500/60 tracking-[0.3em] uppercase">
              Biotech & Biomedical Problem-Solving Challenge
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto">
            <HeaderTag
              icon={<Boxes size={14} />}
              label="Structure"
              value="Teams (Min 2)"
            />
            <HeaderTag
              icon={<Globe size={14} />}
              label="Eligibility"
              value="Open to All"
            />
            <HeaderTag
              icon={<Target size={14} />}
              label="Format"
              value="Competitive"
            />
            <HeaderTag
              icon={<ShieldAlert size={14} />}
              label="Integrity"
              value="No Plagiarism"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- SIDEBAR: NAVIGATION & SCORING --- */}
          <div className="lg:col-span-4 space-y-6">
            <section>
              <h3 className="text-[10px] text-emerald-500 uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
                <Microscope className="w-3 h-3" /> Select_Problem_Statement
              </h3>
              <div className="space-y-3">
                {medicalBriefs.map((brief, idx) => (
                  <button
                    key={brief.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full p-5 text-left rounded-xl border transition-all duration-300 relative overflow-hidden ${
                      activeTab === idx
                        ? "bg-emerald-500/10 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                        : "bg-black/40 border-emerald-500/10 hover:border-emerald-500/40"
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
                          PS_0{brief.id}
                        </p>
                        <h4 className="text-sm font-bold text-white uppercase">
                          {brief.title}
                        </h4>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Judging Criteria Table */}
            <div className="p-6 bg-black/40 border border-emerald-500/20 rounded-2xl">
              <h4 className="text-[10px] text-emerald-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <ClipboardCheck className="w-3 h-3" /> Evaluation_Matrix (100
                Marks)
              </h4>
              <div className="space-y-3">
                <RubricRow
                  label="Problem Understanding"
                  marks="20"
                  desc="Clarity of core issue"
                />
                <RubricRow
                  label="Innovation"
                  marks="25"
                  desc="Novelty/Creativity"
                />
                <RubricRow
                  label="Feasibility"
                  marks="25"
                  desc="Practical implementability"
                />
                <RubricRow
                  label="Presentation"
                  marks="15"
                  desc="Communication style"
                />
                <RubricRow
                  label="Teamwork & Q&A"
                  marks="15"
                  desc="Idea defense"
                />
              </div>
            </div>

            {/* Rules Module */}
            <div className="p-6 bg-emerald-950/20 border border-emerald-500/10 rounded-2xl space-y-4">
              <h4 className="text-[10px] text-red-400 uppercase tracking-widest flex items-center gap-2 font-bold">
                <AlertTriangle className="w-3 h-3" /> Compliance_Protocols
              </h4>
              <ul className="space-y-3 text-[10px]">
                <li className="text-gray-400">
                  <span className="text-emerald-400 font-bold">
                    PREP PHASE:
                  </span>{" "}
                  Internet access allowed for research.
                </li>
                <li className="text-gray-400">
                  <span className="text-red-500 font-bold">LIVE SESSIONS:</span>{" "}
                  Internet access strictly prohibited.
                </li>
                <li className="text-gray-400">
                  <span className="text-emerald-400 font-bold">
                    REGISTRATION:
                  </span>{" "}
                  Mandatory via Google Form before deadline.
                </li>
              </ul>
            </div>
          </div>

          {/* --- MAIN CONTENT: PS DETAILS --- */}
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-black/40 border border-emerald-500/20 rounded-3xl p-8 backdrop-blur-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <h5 className="text-[10px] text-emerald-500 uppercase tracking-widest border-b border-emerald-500/20 pb-2">
                      Contextual_Background
                    </h5>
                    <p className="text-xs leading-relaxed text-gray-400 italic">
                      "{medicalBriefs[activeTab].background}"
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h5 className="text-[10px] text-emerald-500 uppercase tracking-widest border-b border-emerald-500/20 pb-2">
                      The_Challenge
                    </h5>
                    <p className="text-xs leading-relaxed text-emerald-50">
                      {medicalBriefs[activeTab].challenge}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h5 className="text-[10px] text-emerald-500 uppercase tracking-widest mb-4">
                    Technical_Specs & Requirements
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {medicalBriefs[activeTab].requirements.map((req, i) => (
                      <div
                        key={i}
                        className="flex flex-col p-4 bg-emerald-500/5 border border-white/5 rounded-xl"
                      >
                        <span className="text-[10px] font-bold text-emerald-400 uppercase mb-1">
                          {req.label}
                        </span>
                        <span className="text-[11px] text-gray-400">
                          {req.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-center border-t border-emerald-500/20 pt-8">
                  <div className="flex-1 space-y-3 w-full">
                    <h5 className="text-[10px] text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                      <FileText className="w-3 h-3" /> Required_Deliverables
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
                    <button className="w-full md:w-auto px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-black rounded-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                      <Cpu size={18} />
                      INITIALIZE REGISTRATION
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Prize Pool & Incentives */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                  <h3 className="text-sm font-black text-white uppercase tracking-[0.2em]">
                    SolveX_Bounty_Registry
                  </h3>
                  <p className="text-[9px] text-emerald-500/60 uppercase">
                    Reward Distribution per PS
                  </p>
                </div>

                <div className="flex gap-10">
                  <BountyNode rank="ALPHA" amount="7,000" color="text-white" />
                  <BountyNode
                    rank="BETA"
                    amount="5,000"
                    color="text-gray-300"
                  />
                  <BountyNode
                    rank="GAMMA"
                    amount="3,000"
                    color="text-gray-400"
                  />
                </div>

                <div className="px-6 py-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center">
                  <span className="text-[9px] text-emerald-500 uppercase block font-bold mb-1">
                    Total Pool
                  </span>
                  <span className="text-2xl font-black text-emerald-400 italic font-mono">
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

function HeaderTag({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl">
      <div className="text-emerald-500">{icon}</div>
      <div>
        <span className="text-[7px] text-gray-500 uppercase block leading-none mb-1">
          {label}
        </span>
        <span className="text-[10px] font-bold text-white uppercase whitespace-nowrap">
          {value}
        </span>
      </div>
    </div>
  );
}

function RubricRow({ label, marks, desc }) {
  return (
    <div className="group space-y-1">
      <div className="flex justify-between items-center text-[10px] border-b border-white/5 pb-1">
        <span className="text-gray-400 uppercase font-bold">{label}</span>
        <span className="text-emerald-500 font-bold">{marks} Marks</span>
      </div>
      <p className="text-[9px] text-gray-500 italic hidden group-hover:block transition-all">
        {desc}
      </p>
    </div>
  );
}

function BountyNode({ rank, amount, color }) {
  return (
    <div className="text-center">
      <div className="text-[8px] text-emerald-500/70 uppercase mb-1 font-bold">
        {rank}_Tier
      </div>
      <div className={`text-xl font-black ${color} italic font-mono`}>
        ₹{amount}
      </div>
    </div>
  );
}
