"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldAlert,
  Gamepad,
  Orbit,
  Cpu,
  Activity,
  Zap,
  ChevronLeft,
  Users,
  Maximize,
  Trophy,
  Info,
  AlertTriangle,
  Target,
  FileText,
  ShieldCheck,
  Scale,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RoboticsPS() {
  const [activeBattle, setActiveBattle] = useState(0);
  const router = useRouter();

  const combatModules = [
    {
      id: "RW",
      title: "ROBOWARS",
      sub: "Combat Robotics Competition",
      icon: <ShieldAlert className="w-8 h-8" />,
      color: "rose",
      href: "/PS/Robowars.pdf",
      teamSize: "4 to 6 members", //
      objective:
        "To design a combat-capable robot that can withstand physical impacts, effectively disable opponents, and maintain mobility throughout the match duration.",
      philosophy:
        "Evaluates mechanical strength, electronics reliability, power management, and strategic control under aggressive real-world combat conditions.",
      constraints: [
        {
          label: "Max Weight",
          val: "10 kg",
          detail: "Including battery & weapons",
        },
        {
          label: "Dimensions",
          val: "500 x 450 x 500 mm",
          detail: "Maximum Volume",
        },
        { label: "Power", val: "On-board", detail: "Battery only" },
        {
          label: "Control",
          val: "Wireless",
          detail: "Mandatory fail-safe required",
        },
      ],
      weapons: {
        allowed: "Mechanical, Electric, or Pneumatic",
        prohibited: "Explosives, fire-based weapons, corrosive liquids",
      },
      arena: {
        size: "4m x 4m",
        type: "Fully enclosed with safety shielding",
        floor: "Reinforced metal or composite", //
      },
      stages: [
        {
          title: "Design Proposal",
          meta: "Online | Pre-Competition",
          details:
            "Submit concept, drive system, weapon mechanism, safety strategy, and preliminary BOM.",
        },
        {
          title: "Safety Scrutiny",
          meta: "Offline | Pre-Match",
          details:
            "Chassis inspection, weapon locking verification, and emergency cutoff checks.",
        },
        {
          title: "Battle Rounds",
          meta: "Offline | Event Days",
          details:
            "1v1 knockout matches with fixed duration leading to finals.",
        },
      ],
      prizes: [
        { name: "First Prize", amount: "45,000" },
        { name: "Second Prize", amount: "25,000" },
        { name: "Third Prize", amount: "15,000" },
      ],
      totalPool: "85,000",
    },
    {
      id: "RS",
      title: "ROBOSOCCER",
      sub: "Autonomous & Semi-Autonomous",
      icon: <Gamepad className="w-8 h-8" />,
      color: "blue",
      href: "/PS/Robosoccer.pdf",
      teamSize: "2 to 4 members", //
      objective:
        "To design a robot capable of detecting the ball, navigating efficiently, and coordinating movements to score goals.",
      philosophy:
        "Emphasizes navigation, sensing, actuation, and real-time control strategies against opposing robots.",
      constraints: [
        { label: "Max Weight", val: "4 kg", detail: "Total robot mass" },
        {
          label: "Dimensions",
          val: "250 x 200 x 200 mm",
          detail: "Max robot size",
        },
        { label: "Drive", val: "Wheeled", detail: "Wheeled mechanisms only" },
        {
          label: "Power",
          val: "Rechargeable",
          detail: "On-board battery only",
        },
      ],
      arena: {
        size: "4m x 6m",
        type: "Controlled Arena",
        floor: "Flat, non-reflective surface with fixed goals",
      },
      stages: [
        {
          title: "System Design",
          meta: "Online | Pre-Competition",
          details:
            "Submit block diagram, sensor/actuation strategy, and power management description.",
        },
        {
          title: "Functional Verification",
          meta: "Offline | Pre-Match",
          details:
            "Mobility testing, ball detection verification, and wireless safety checks.",
        },
        {
          title: "Match Rounds",
          meta: "Offline | Event Days",
          details: "Team-vs-team matches in league or knockout format.",
        },
      ],
      prizes: [
        { name: "First Prize", amount: "20,000" },
        { name: "Second Prize", amount: "10,000" },
        { name: "Third Prize", amount: "5,000" },
      ],
      totalPool: "35,000",
    },
    {
      id: "LF",
      title: "LINE FOLLOWER",
      sub: "Autonomous Robotics Competition",
      icon: <Orbit className="w-8 h-8" />,
      color: "emerald",
      href: "/PS/Line_Follower.pdf",
      teamSize: "1 to 3 members",
      objective:
        "To design an autonomous robot that can follow a given line track with high accuracy, stability, and minimal deviation.",
      philosophy:
        "Challenges participants in sensor integration, control algorithm design, and performance optimization.",
      constraints: [
        { label: "Max Weight", val: "3 kg", detail: "Total robot mass" },
        {
          label: "Dimensions",
          val: "200 x 150 x 150 mm",
          detail: "Compact footprint",
        },
        {
          label: "Sensors",
          val: "IR/Optical",
          detail: "IR or Optical sensors only",
        },
        {
          label: "Control",
          val: "Autonomous",
          detail: "Fully autonomous only",
        },
      ],
      arena: {
        size: "3m x 3m",
        type: "High Contrast Track",
        floor: "Black line (20-25mm) on white background",
      },
      stages: [
        {
          title: "Logic Submission",
          meta: "Online | Pre-Competition",
          details:
            "Submit sensor configuration, control logic (PID/logic), and motor description.",
        },
        {
          title: "Calibration",
          meta: "Offline | Before Runs",
          details:
            "Verification of sensor alignment, control logic, and safety systems.",
        },
        {
          title: "Timed Runs",
          meta: "Offline | Event Days",
          details:
            "Autonomous navigation on predefined track with turns and checkpoints.",
        },
      ],
      prizes: [
        { name: "First Prize", amount: "15,000" },
        { name: "Second Prize", amount: "7,000" },
        { name: "Third Prize", amount: "3,000" },
      ],
      totalPool: "25,000",
    },
  ];

  const active = combatModules[activeBattle];

  return (
    <div className="relative min-h-screen text-white font-mono p-4 md:p-8 bg-black/30">
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
              <span className="text-[12px] tracking-[0.5em] uppercase font-bold">
                Return to Events
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter uppercase italic leading-none">
              {active.title}
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
                <span className="text-sm">{module.id}</span>
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
            {/* LEFT: CORE SPECS & OBJECTIVES */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                  {active.icon}
                </div>
                <h3 className="text-rose-500 text-[14px] font-black tracking-[0.2em] mb-2 uppercase flex items-center gap-2">
                  <Target className="w-3 h-3" /> Mission_Objective
                </h3>
                <p className="text-sm leading-relaxed text-gray-300 italic">
                  "{active.objective}"
                </p>
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[14px] text-gray-500 uppercase font-bold">
                    Team Composition
                  </span>
                  <span className="text-sm font-bold text-rose-500 uppercase flex items-center gap-2">
                    <Users className="w-3 h-3" /> {active.teamSize}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {active.constraints.map((c, i) => (
                  <div
                    key={i}
                    className="p-4 bg-black/40 border border-white/5 rounded-lg group hover:border-rose-500/40 transition-all"
                  >
                    <p className="text-[10px] text-gray-500 uppercase font-black mb-1">
                      {c.label}
                    </p>
                    <p className="text-[15px] font-black text-white">{c.val}</p>
                    <p className="text-[11px] text-rose-400/60 mt-1 italic">
                      {c.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-black/60 border-l-2 border-rose-500 rounded-r-xl">
                <h3 className="text-[14px] font-black tracking-[0.2em] mb-4 uppercase text-gray-400 flex items-center gap-2">
                  <Maximize className="w-3 h-3" /> Arena_Specifications
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-[12px] uppercase text-gray-500">
                      Dimensions
                    </span>
                    <span className="text-xs font-bold">
                      {active.arena.size}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-[12px] uppercase text-gray-500">
                      Environment
                    </span>
                    <span className="text-xs font-bold">
                      {active.arena.type}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[12px] uppercase text-gray-500">
                      Surface Detail
                    </span>
                    <span className="text-[12px] font-bold text-right ml-4">
                      {active.arena.floor}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* MIDDLE: PHASES & COMPLIANCE */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <h3 className="text-[14px] font-black tracking-[0.2em] mb-6 uppercase flex items-center gap-2">
                  <Activity className="w-3 h-3 text-rose-500" />{" "}
                  Operational_Phases
                </h3>
                <div className="space-y-6">
                  {active.stages.map((stage, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full border border-rose-500 flex items-center justify-center text-[12px] font-black group-hover:bg-rose-500 group-hover:text-black transition-all">
                          {i + 1}
                        </div>
                        {i !== active.stages.length - 1 && (
                          <div className="w-px h-full bg-white/10 my-1" />
                        )}
                      </div>
                      <div className="pb-4">
                        <p className="text-sm font-black uppercase text-white leading-none mb-1">
                          {stage.title}
                        </p>
                        <p className="text-[11px] text-rose-500 font-bold mb-2 uppercase italic">
                          {stage.meta}
                        </p>
                        <p className="text-[14px] text-gray-400 leading-relaxed">
                          {stage.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rules & Compliance Section */}
              <div className="p-6 bg-black/40 border border-white/10 rounded-xl">
                <h3 className="text-[14px] font-black tracking-[0.2em] mb-4 uppercase text-gray-400 flex items-center gap-2">
                  <ShieldCheck className="w-3 h-3 text-emerald-500" />{" "}
                  Protocol_Compliance
                </h3>
                <ul className="space-y-2 mb-4">
                  {active.id === "RW" && (
                    <>
                      <li className="text-[14px] text-gray-400 flex items-center gap-2">
                        <div className="w-1 h-1 bg-rose-500 shrink-0" />{" "}
                        Prohibited: {active.weapons.prohibited}
                      </li>
                      <li className="text-[14px] text-gray-400 flex items-center gap-2">
                        <div className="w-1 h-1 bg-rose-500 shrink-0" />{" "}
                        Mandatory weapon locking and emergency cutoffs{" "}
                      </li>
                    </>
                  )}
                  {active.id === "RS" && (
                    <>
                      <li className="text-[14px] text-gray-400 flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-500 shrink-0" />{" "}
                        Wheeled-only drive mechanisms permitted
                      </li>
                      <li className="text-[14px] text-gray-400 flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-500 shrink-0" />{" "}
                        Robot must manage ball detection & scoring autonomously/
                        semi-autonomously
                      </li>
                    </>
                  )}
                  {active.id === "LF" && (
                    <>
                      <li className="text-[14px] text-gray-400 flex items-center gap-2">
                        <div className="w-1 h-1 bg-emerald-500 shrink-0" />{" "}
                        Manual intervention results in penalties{" "}
                      </li>
                      <li className="text-[14px] text-gray-400 flex items-center gap-2">
                        <div className="w-1 h-1 bg-emerald-500 shrink-0" />{" "}
                        Only IR or Optical sensors permitted
                      </li>
                    </>
                  )}
                  <li className="text-[14px] text-rose-500/80 italic flex items-center   gap-2">
                    <Scale className="w-4 h-4 shrink-0" /> Rules are subject to
                    change at organizers' discretion
                  </li>
                </ul>
                <Link
                  href={active.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Rules
                </Link>
              </div>
            </div>

            {/* RIGHT: PRIZES & ACTION */}
            <div className="lg:col-span-3 space-y-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl relative group">
                <h3 className="text-[14px] font-black tracking-[0.2em] mb-4 uppercase text-rose-500 flex items-center gap-2">
                  <Info className="w-3 h-3" /> System_Overview
                </h3>
                <p className="text-[13px] text-gray-400 leading-relaxed italic group-hover:text-gray-200 transition-colors">
                  {active.philosophy}
                </p>
              </div>

              {/* Bounty/Prize Module */}
              <div className="p-6 bg-linear-to-br from-rose-500 to-rose-700 rounded-xl text-black shadow-lg shadow-rose-500/10">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    <h3 className="text-sm font-black uppercase italic">
                      Bounty_Pool
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-[8px] font-black uppercase leading-none">
                      Total Value
                    </p>
                    <p className="text-lg font-black italic">
                      ₹{active.totalPool}
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {active.prizes.map((p, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b border-black/10 pb-1"
                    >
                      <span className="text-[12px] font-bold uppercase">
                        {p.name}
                      </span>
                      <span className="text-sm font-black italic">
                        ₹{p.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() =>
                  router.push(
                    `/present/registration?event=${activeBattle === 0 ? "rw" : activeBattle == 1 ? "rs" : "lf"}`,
                  )
                }
                className="w-full py-4 bg-white text-black font-black uppercase italic text-sm tracking-tighter hover:bg-rose-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(244,63,94,0.3)] flex items-center justify-center gap-3 group"
              >
                Initiate_Registration
                <Zap className="w-4 h-4 fill-current group-hover:scale-125 transition-transform" />
              </button>

              <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                <div className="flex items-center gap-3 text-rose-500">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <span className="text-[10px] uppercase font-bold leading-tight">
                    Safety protocols mandatory. Non-compliance results in
                    immediate disqualification.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* --- DECORATIVE FOOTER --- */}
        <footer className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 border-t border-white/5 pt-8">
          <div className="flex gap-8">
            <Metric icon={<Cpu />} label="Processor" value="Autonomous" />
            <Metric icon={<Maximize />} label="Scale" value="Combat Ready" />
            <Metric icon={<Activity />} label="Sync" value="Real-time" />
          </div>
          <div className="flex items-center gap-4">
            <div className="h-4 w-px bg-white/20" />
            <span className="text-[9px] font-black uppercase tracking-[0.4em]">
              IIT INDORE // ROBOTICS DIVISION
            </span>
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
