"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldAlert,
  Gamepad,
  Orbit,
  Settings,
  Cpu,
  Activity,
  Zap,
  Trophy,
  Wrench,
  Crosshair,
  ChevronLeft,
} from "lucide-react";
import { StarField } from "@/components/chronoverse";
import { useRouter } from "next/navigation";

export default function RoboticsPS() {
  const [activeBattle, setActiveBattle] = useState(0);
  const router = useRouter();
  const combatModules = [
    {
      id: "RW",
      title: "ROBOWARS",
      sub: "Heavy Combat Division",
      icon: <ShieldAlert className="w-6 h-6" />,
      color: "rose",
      objective:
        "To design a combat-capable robot that can withstand physical impacts, effectively disable opponents, and maintain mobility throughout the match duration.",
      constraints: [
        "Weight: Max 10 kg (inc. weapons) ",
        "Dimensions: 500x450x500 mm ",
        "Wireless remote with mandatory fail-safe",
        "Mechanical/Electric/Pneumatic weapons",
      ],
      stages: [
        "Stage 1: Design Proposal & BOM Submission",
        "Stage 2: Safety Scrutiny & Cutoff Check",
        "Stage 3: 1v1 Knockout Battle Rounds",
      ],
      prizes: {
        first: "45,000",
        second: "25,000",
        third: "15,000",
        total: "85,000",
      },
    },
    {
      id: "RS",
      title: "ROBOSOCCER",
      sub: "Tactical Sports Logic",
      icon: <Gamepad className="w-6 h-6" />,
      color: "blue",
      objective:
        "Design a robot to detect the ball, navigate efficiently, and coordinate movements to score goals against an opposing team.",
      constraints: [
        "Weight: Max 4 kg ",
        "Dimensions: 250x200x200 mm",
        "Wheeled-only drive mechanism ",
        "Manual or semi-autonomous control",
      ],
      stages: [
        "Stage 1: System Design & Block Diagram",
        "Stage 2: Mobility & Ball Detection Verification",
        "Stage 3: Team vs Team League/Knockout matches",
      ],
      prizes: {
        first: "20,000",
        second: "10,000",
        third: "5,000",
        total: "35,000",
      },
    },
    {
      id: "LF",
      title: "LINE FOLLOWER",
      sub: "Autonomous Path Precision",
      icon: <Orbit className="w-6 h-6" />,
      color: "emerald",
      objective:
        "Design an autonomous robot capable of accurately following a predefined path with high stability.",
      constraints: [
        "Weight: Max 3 kg",
        "Dimensions: 200x150x150 mm",
        "Fully autonomous control",
        "IR or optical sensors only",
      ],
      stages: [
        "Stage 1: PID/Logic-based Control submission",
        "Stage 2: Sensor Calibration & Inspection",
        "Stage 3: Timed track runs on 3m x 3m arena",
      ],
      prizes: {
        first: "15,000",
        second: "7,000",
        third: "3,000",
        total: "25,000",
      },
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#02040a] text-white font-mono p-4 md:p-8 overflow-hidden">
      <StarField />

      {/* Industrial Warning Overlay */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,#f43f5e,#f43f5e_10px,#000_10px,#000_20px)] opacity-40" />
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,#f43f5e,#f43f5e_10px,#000_10px,#000_20px)] opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- COLISEUM HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-white/10 pb-8">
          <div>
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-rose-500 mb-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.5em] uppercase font-bold">
                Return to Events
              </span>
            </button>
            <h1 className="text-6xl font-black tracking-tighter uppercase italic">
              Steel <span className="text-rose-500">&</span> Silicon
            </h1>
          </div>
          <div className="flex gap-4 mt-6 lg:mt-0">
            {combatModules.map((module, idx) => (
              <button
                key={module.id}
                onClick={() => setActiveBattle(idx)}
                className={`px-8 py-3 border-2 transition-all duration-300 font-black tracking-tighter ${
                  activeBattle === idx
                    ? "bg-rose-500 border-rose-500 text-black -translate-y-1 shadow-[0_8px_0_#9f1239]"
                    : "bg-transparent border-white/20 text-white hover:border-rose-500/50"
                }`}
              >
                {module.id}
              </button>
            ))}
          </div>
        </div>

        {/* --- COMBAT INTERFACE --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBattle}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Left Column: Tech Specs */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 bg-black/60 border-l-4 border-rose-500 rounded-r-2xl backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-rose-500/20 text-rose-500 rounded-lg">
                    {combatModules[activeBattle].icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter leading-none">
                      {combatModules[activeBattle].title}
                    </h2>
                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">
                      {combatModules[activeBattle].sub}
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-400 italic mb-8 border-b border-white/5 pb-8">
                  "{combatModules[activeBattle].objective}"
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {combatModules[activeBattle].constraints.map((c, i) => (
                    <div
                      key={i}
                      className="flex gap-2 items-start text-[10px] uppercase font-bold text-rose-400"
                    >
                      <Settings className="w-3 h-3 mt-0.5 shrink-0" />
                      {c}
                    </div>
                  ))}
                </div>
              </div>

              {/* BOUNTY MODULE */}
              <div className="p-8 bg-rose-500/10 border-2 border-rose-500/20 rounded-2xl relative overflow-hidden">
                <div className="flex justify-between items-end mb-8 relative z-10">
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tighter text-white">
                      Bounty_Pool
                    </h3>
                    <p className="text-[10px] text-rose-500 uppercase tracking-widest italic">
                      Combat_Incentive_Package
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-rose-500 italic">
                      ₹{combatModules[activeBattle].prizes.total}
                    </span>
                  </div>
                </div>
                <div className="space-y-4 relative z-10">
                  <BountyRow
                    rank="01"
                    label="Commander"
                    amount={combatModules[activeBattle].prizes.first}
                  />
                  <BountyRow
                    rank="02"
                    label="Veteran"
                    amount={combatModules[activeBattle].prizes.second}
                  />
                  <BountyRow
                    rank="03"
                    label="Survivor"
                    amount={combatModules[activeBattle].prizes.third}
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Battle Progression */}
            <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                <Crosshair className="w-64 h-64 text-rose-500" />
              </div>

              <h3 className="text-xl font-black uppercase tracking-widest mb-10 flex items-center gap-4">
                <Zap className="text-rose-500" /> Progression_Matrix
              </h3>

              <div className="space-y-8 relative">
                <div className="absolute left-4.75 top-2 bottom-2 w-0.5 bg-rose-500/20" />
                {combatModules[activeBattle].stages.map((stage, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i}
                    className="relative pl-12 group"
                  >
                    <div className="absolute left-0 top-0 w-10 h-10 bg-black border-2 border-rose-500/50 flex items-center justify-center font-black group-hover:bg-rose-500 group-hover:text-black transition-colors">
                      {i + 1}
                    </div>
                    <div className="bg-white/5 border border-white/5 p-4 rounded-xl group-hover:border-rose-500/30 transition-all">
                      <p className="text-sm font-bold uppercase tracking-tight text-white">
                        {stage.split("[")[0]}
                      </p>
                      <span className="text-[9px] text-rose-500/60 uppercase font-mono">
                        Reference_{stage.match(/\[(.*?)\]/)?.[1]}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
                <Metric icon={<Cpu />} label="Processor" value="ARM/AVR" />
                <Metric icon={<Activity />} label="Sync" value="2.4GHz" />
                <Metric icon={<Zap />} label="Power" value="Li-Po" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// --- Coliseum Internal Components ---

function BountyRow({ rank, label, amount }) {
  return (
    <div className="flex justify-between items-center bg-black/40 p-4 border border-white/5 rounded-lg group hover:border-rose-500/30 transition-all">
      <div className="flex items-center gap-4">
        <span className="text-lg font-black text-rose-500 italic">{rank}</span>
        <div className="text-[10px] uppercase font-black text-gray-500 group-hover:text-white transition-colors">
          {label}
        </div>
      </div>
      <div className="text-lg font-black italic text-white">₹{amount}</div>
    </div>
  );
}

function Metric({ icon, label, value }) {
  return (
    <div className="text-center group">
      <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-full bg-rose-500/10 text-rose-500 mb-2 group-hover:scale-110 transition-transform">
        {React.cloneElement(icon, { className: "w-5 h-5" })}
      </div>
      <div className="text-[8px] text-gray-500 uppercase block mb-1 font-bold">
        {label}
      </div>
      <div className="text-xs font-black text-white uppercase italic">
        {value}
      </div>
    </div>
  );
}
