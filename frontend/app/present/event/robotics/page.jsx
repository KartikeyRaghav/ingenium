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
  Crosshair,
  ChevronLeft,
  Users,
  Maximize,
  Trophy,
  Info,
  AlertTriangle,
  Target,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function RoboticsPS() {
  const [activeBattle, setActiveBattle] = useState(0);
  const router = useRouter();

  const combatModules = [
    {
      id: "RW",
      title: "ROBOWARS",
      sub: "Heavy Combat Division",
      icon: <ShieldAlert className="w-8 h-8" />,
      color: "rose",
      teamSize: "4-6 members",
      objective:
        "To design a combat-capable robot that can withstand physical impacts, effectively disable opponents, and maintain mobility throughout the match duration.",
      philosophy:
        "Provides hands-on exposure to real-world combat robotics, integrating mechanical design, electronics, and power management under extreme operating conditions.",
      constraints: [
        { label: "Max Weight", val: "10 kg", detail: "Inc. battery/weapons" },
        { label: "Dimensions", val: "500x450x500 mm", detail: "Max limit" },
        { label: "Power", val: "On-board", detail: "Battery only" },
        { label: "Control", val: "Wireless", detail: "Mandatory fail-safe" },
      ],
      weapons: {
        allowed: "Mechanical, Electric, Pneumatic",
        prohibited: "Explosives, Fire, Corrosive liquids",
      },
      arena: {
        size: "4m x 4m",
        type: "Fully Enclosed",
        floor: "Reinforced Metal",
      },
      stages: [
        {
          title: "Design Proposal",
          meta: "Online | Pre-Event",
          details: "Concept, BOM, and safety strategy.",
        },
        {
          title: "Safety Scrutiny",
          meta: "Offline | Pre-Match",
          details: "Mechanical robustness and electrical isolation check.",
        },
        {
          title: "Knockout Battles",
          meta: "Offline | Event Days",
          details: "One-on-one combat with fixed durations.",
        },
      ],
      prizes: [
        { name: "First Prize", amount: "45,000" },
        { name: "Second Prize", amount: "25,000" },
        { name: "Third Prize", amount: "15,000" },
      ],
    },
    {
      id: "RS",
      title: "ROBOSOCCER",
      sub: "Tactical Sports Logic",
      icon: <Gamepad className="w-8 h-8" />,
      color: "blue",
      teamSize: "2-4 members",
      objective:
        "To design a robot that can detect the ball, navigate efficiently, and coordinate movements to score goals.",
      philosophy:
        "Introduces competitive robotics in a strategy-driven environment, strengthening understanding of semi-autonomous systems.",
      constraints: [
        { label: "Max Weight", val: "4 kg", detail: "Total mass" },
        { label: "Dimensions", val: "250x200x200 mm", detail: "Max footprint" },
        { label: "Drive", val: "Wheeled", detail: "Only" },
        { label: "Control", val: "Manual/Semi", detail: "Wireless control" },
      ],
      arena: {
        size: "4m x 6m",
        type: "Flat Surface",
        floor: "Non-reflective",
      },
      stages: [
        {
          title: "System Design",
          meta: "Online | Pre-Event",
          details: "Block diagrams and control strategy.",
        },
        {
          title: "Functional Verification",
          meta: "Offline | Pre-Match",
          details: "Mobility and ball detection testing.",
        },
        {
          title: "Match Rounds",
          meta: "Offline | Event Days",
          details: "League or knockout team matches.",
        },
      ],
      prizes: [
        { name: "First Prize", amount: "20,000" },
        { name: "Second Prize", amount: "10,000" },
        { name: "Third Prize", amount: "5,000" },
      ],
    },
    {
      id: "LF",
      title: "LINE FOLLOWER",
      sub: "Autonomous Path Precision",
      icon: <Orbit className="w-8 h-8" />,
      color: "emerald",
      teamSize: "1-3 members",
      objective:
        "To design an autonomous robot that follows a given line track with high accuracy and stability.",
      philosophy:
        "Serves as a strong foundation for autonomous robotics, focusing on feedback control and precision motion.",
      constraints: [
        { label: "Max Weight", val: "3 kg", detail: "Total mass" },
        { label: "Dimensions", val: "200x150x150 mm", detail: "Compact build" },
        { label: "Sensors", val: "IR/Optical", detail: "Only" },
        { label: "Control", val: "Autonomous", detail: "Fully automated" },
      ],
      arena: {
        size: "3m x 3m",
        type: "Black on White",
        floor: "20-25mm Track Width",
      },
      stages: [
        {
          title: "Logic Submission",
          meta: "Online | Pre-Event",
          details: "Sensor placement and PID/Logic overview.",
        },
        {
          title: "Calibration",
          meta: "Offline | Pre-Run",
          details: "Sensor alignment and logic verification.",
        },
        {
          title: "Timed Track Runs",
          meta: "Offline | Event Days",
          details: "Autonomous run with multiple turns.",
        },
      ],
      prizes: [
        { name: "First Prize", amount: "15,000" },
        { name: "Second Prize", amount: "7,000" },
        { name: "Third Prize", amount: "3,000" },
      ],
    },
  ];

  const active = combatModules[activeBattle];

  return (
    <div className="relative min-h-screen text-white font-mono p-4 md:p-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 border-b border-white/10 pb-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-rose-500 mb-4 group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] tracking-[0.5em] uppercase font-bold">
                Return to Events
              </span>
            </button>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
              {combatModules[activeBattle].title}
            </h1>
          </motion.div>

          <div className="flex flex-wrap gap-3 mt-8 lg:mt-0">
            {combatModules.map((module, idx) => (
              <button
                key={module.id}
                onClick={() => setActiveBattle(idx)}
                className={`relative px-6 py-2 border-2 transition-all duration-300 font-black flex items-center gap-3 ${
                  activeBattle === idx
                    ? "bg-rose-500 border-rose-500 text-black shadow-[4px_4px_0px_white]"
                    : "bg-black/40 border-white/20 text-white hover:border-rose-500/50"
                }`}
              >
                <span className="text-xs">{module.id}</span>
                <span className="text-[10px] hidden md:block">
                  {module.title}
                </span>
              </button>
            ))}
          </div>
        </header>

        {/* --- MAIN TERMINAL --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBattle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* LEFT: CORE SPECS */}
            <div className="lg:col-span-4 space-y-6">
              {/* Objective Card */}
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                  {active.icon}
                </div>
                <h3 className="text-rose-500 text-[10px] font-black tracking-[0.2em] mb-2 uppercase flex items-center gap-2">
                  <Target className="w-3 h-3" /> Mission_Objective
                </h3>
                <p className="text-sm leading-relaxed text-gray-300 italic">
                  "{active.objective}"
                </p>
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 uppercase">
                    Deployment Team
                  </span>
                  <span className="text-xs font-bold text-rose-500 uppercase flex items-center gap-2">
                    <Users className="w-3 h-3" /> {active.teamSize}
                  </span>
                </div>
              </div>

              {/* Technical Grid */}
              <div className="grid grid-cols-2 gap-4">
                {active.constraints.map((c, i) => (
                  <div
                    key={i}
                    className="p-4 bg-black/40 border border-white/5 rounded-lg group hover:border-rose-500/40 transition-all"
                  >
                    <p className="text-[8px] text-gray-500 uppercase font-black mb-1">
                      {c.label}
                    </p>
                    <p className="text-sm font-black text-white">{c.val}</p>
                    <p className="text-[9px] text-rose-400/60 mt-1 italic">
                      {c.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Arena Card */}
              <div className="p-6 bg-black/60 border-l-2 border-rose-500 rounded-r-xl">
                <h3 className="text-[10px] font-black tracking-[0.2em] mb-4 uppercase text-gray-400">
                  Arena_Specifications
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase text-gray-500">
                      Dimensions
                    </span>
                    <span className="text-xs font-bold">
                      {active.arena.size}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase text-gray-500">
                      Environment
                    </span>
                    <span className="text-xs font-bold">
                      {active.arena.type}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase text-gray-500">
                      Surface
                    </span>
                    <span className="text-xs font-bold">
                      {active.arena.floor}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* MIDDLE: PHASES & WEAPONS */}
            <div className="lg:col-span-5 space-y-6">
              {/* Progression Tracker */}
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <h3 className="text-[10px] font-black tracking-[0.2em] mb-6 uppercase flex items-center gap-2">
                  <Activity className="w-3 h-3 text-rose-500" />{" "}
                  Operational_Phases
                </h3>
                <div className="space-y-6">
                  {active.stages.map((stage, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full border border-rose-500 flex items-center justify-center text-[10px] font-black group-hover:bg-rose-500 group-hover:text-black transition-all">
                          {i + 1}
                        </div>
                        {i !== active.stages.length - 1 && (
                          <div className="w-px h-full bg-white/10 my-1" />
                        )}
                      </div>
                      <div className="pb-4">
                        <p className="text-xs font-black uppercase text-white leading-none mb-1">
                          {stage.title}
                        </p>
                        <p className="text-[9px] text-rose-500 font-bold mb-2 uppercase">
                          {stage.meta}
                        </p>
                        <p className="text-[10px] text-gray-400 leading-relaxed">
                          {stage.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prohibited/Allowed (Conditional for Robowars) */}
              {active.id === "RW" && (
                <div className="p-4 bg-rose-500/5 border border-rose-500/20 rounded-xl grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-[9px] font-black text-emerald-500 uppercase mb-2">
                      Approved_Armament
                    </h4>
                    <p className="text-[10px] text-gray-400">
                      {active.weapons.allowed}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black text-rose-500 uppercase mb-2">
                      Illegal_Systems
                    </h4>
                    <p className="text-[10px] text-gray-400">
                      {active.weapons.prohibited}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT: WHY & REGISTER */}
            <div className="lg:col-span-3 space-y-6">
              {/* Why This Event */}
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl relative">
                <div className="absolute -top-3 -right-3">
                  <Info className="w-6 h-6 text-white/10" />
                </div>
                <h3 className="text-[10px] font-black tracking-[0.2em] mb-4 uppercase text-rose-500">
                  Why_{active.id}?
                </h3>
                <p className="text-[11px] text-gray-400 leading-relaxed italic">
                  {active.philosophy}
                </p>
              </div>

              {/* Bounty/Prize Module */}
              <div className="p-6 bg-linear-to-br from-rose-500 to-rose-700 rounded-xl text-black shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="w-5 h-5" />
                  <h3 className="text-sm font-black uppercase italic">
                    Bounty_Rewards
                  </h3>
                </div>
                <div className="space-y-2">
                  {active.prizes.map((p, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b border-black/10 pb-1"
                    >
                      <span className="text-[10px] font-bold uppercase">
                        {p.name}
                      </span>
                      <span className="text-xs font-black italic">
                        ₹{p.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full py-4 bg-white text-black font-black uppercase italic text-sm tracking-tighter hover:bg-rose-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(244,63,94,0.3)] flex items-center justify-center gap-3 group">
                Register_Now
                <Zap className="w-4 h-4 fill-current group-hover:scale-125 transition-transform" />
              </button>

              <div className="p-4 border border-white/5 rounded-xl">
                <div className="flex items-center gap-3 text-gray-500">
                  <AlertTriangle className="w-4 h-4 text-rose-500" />
                  <span className="text-[8px] uppercase font-bold leading-tight">
                    Subject to safety approval and rule compliance verification.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* --- DECORATIVE FOOTER --- */}
        <footer className="mt-12 flex justify-between items-center opacity-20">
          <div className="flex gap-8">
            <Metric icon={<Cpu />} label="System" value="Industrial" />
            <Metric icon={<Maximize />} label="Scale" value="1:1" />
            <Metric icon={<Activity />} label="Status" value="Active" />
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.5em]">
            Ingenium_Secure_Terminal
          </div>
        </footer>
      </div>
    </div>
  );
}

function Metric({ icon, label, value }) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-white">
        {React.cloneElement(icon, { className: "w-3 h-3" })}
      </div>
      <div className="flex flex-col">
        <span className="text-[7px] text-gray-500 uppercase font-black">
          {label}
        </span>
        <span className="text-[9px] font-black text-white uppercase italic">
          {value}
        </span>
      </div>
    </div>
  );
}
