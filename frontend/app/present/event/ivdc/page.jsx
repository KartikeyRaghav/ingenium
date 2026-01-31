"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Eye,
  ArrowUp,
  Zap,
  Cpu,
  Navigation,
  Layers,
  Trophy,
  Maximize,
  ChevronLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function IVDCPS() {
  const [activeModule, setActiveModule] = useState(0);
  const router = useRouter();
  const challenges = [
    {
      id: 1,
      title: "3D Reconstruction: IITI CDF",
      theme: "Point Cloud & Drone Navigation",
      icon: <Box className="w-6 h-6" />,
      context:
        "Harness virtual 3D simulation to convert Point Cloud data into accurate models and implement drone navigation pipelines.",
      objectives: [
        "Task A: Convert scan data into high-fidelity 3D architectural models.",
        "Task B: Implement point-to-point navigation with dynamic local planners.",
        "Pipeline must run on limited computation power.",
        "Navigate an SJTU drone using GPS, IMU, and 3D-LiDAR data.",
      ],
      marks: "Partial marking awarded for task completion.",
      prizes: {
        first: "10,000",
        second: "5,000",
        third: "3,000",
        total: "18,000",
      },
    },
    {
      id: 2,
      title: "CV Based Obstacourse",
      theme: "Autonomous Vision Navigation",
      icon: <Eye className="w-6 h-6" />,
      context:
        "Design and build a camera-based robot that utilizes computer vision to traverse a path and avoid obstacles autonomously.",
      objectives: [
        "Use OBCs (NVIDIA Jetson/Raspberry Pi) for real-time video processing.",
        "Implement OpenCV-based detection and control algorithms.",
        "Optimize for high-speed precision using PID-style motor control.",
        "Handle sharp turns, intersections, and varying track widths.",
      ],
      marks: "Judged on completion time, algorithm efficiency, and autonomy.",
      prizes: {
        first: "10,000",
        second: "5,000",
        third: "3,000",
        total: "18,000",
      },
    },
    {
      id: 3,
      title: "Biomimetic Jump-Bot",
      theme: "Vertical Kinetic Engineering",
      icon: <ArrowUp className="w-6 h-6" />,
      context:
        "Create a stationary robot inspired by nature (biomimicry) capable of jumping vertically within defined boundaries.",
      objectives: [
        "Jumping mechanism must 'push the ground' (no propellers allowed).",
        "Zero mass reduction during jump (no rocket-style propulsion).",
        "Robot must remain within defined square boundaries.",
        "Goal: Achieve maximum possible vertical height.",
      ],
      marks: "Graded on achieved height and adherence to jump constraints.",
      prizes: {
        first: "N/A",
        second: "N/A",
        third: "N/A",
        total: "Skill-Based",
      },
    },
  ];

  return (
    <div className="relative min-h-screen bg-black/30 text-blue-100 font-mono p-4 md:p-8 overflow-hidden">

      {/* Real-time Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-size-[50px_50px] mask-[radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- HUD HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-blue-500/20 pb-6">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-blue-400"
            >
              <ChevronLeft className="w-4 h-4 animate-pulse" />
              <span className="text-[10px] tracking-[0.5em] uppercase">
                Return to Events
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white">
              KINETIC <span className="text-blue-500">INTELLIGENCE</span>
            </h1>
          </div>
          <div className="flex gap-4 mt-6 lg:mt-0 overflow-x-auto pb-2 w-full lg:w-auto">
            {challenges.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveModule(idx)}
                className={`flex-none px-6 py-2 rounded-lg border transition-all duration-300 ${
                  activeModule === idx
                    ? "bg-blue-600/20 border-blue-400 text-white shadow-[0_0_15px_#3b82f6]"
                    : "bg-black/40 border-blue-900/40 text-blue-500/50 hover:border-blue-500"
                }`}
              >
                <span className="text-[10px] font-bold tracking-widest uppercase italic">
                  Module_0{item.id}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* --- MAIN INTERFACE --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Left Column: Telemetry & Rules */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 bg-blue-950/20 border border-blue-500/20 rounded-2xl backdrop-blur-xl relative group">
                <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-100 transition-opacity">
                  <Maximize className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-[10px] text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Navigation className="w-3 h-3" /> Mission_Parameters
                </h3>
                <p className="text-sm leading-relaxed text-blue-100/80 mb-6 italic border-l-2 border-blue-500 pl-4">
                  {challenges[activeModule].context}
                </p>
                <div className="text-[9px] text-blue-500/60 uppercase p-2 bg-blue-500/5 rounded">
                  Status: {challenges[activeModule].marks}
                </div>
              </div>

              {/* Prize Module */}
              <div className="p-6 bg-black/40 border border-blue-500/20 rounded-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-[10px] text-blue-500 uppercase tracking-[0.2em] font-bold">
                    Bounty_Registry
                  </h4>
                  <Trophy className="w-5 h-5 text-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                </div>
                {challenges[activeModule].id < 3 ? (
                  <div className="space-y-4">
                    <PrizeRow
                      rank="A"
                      amount={challenges[activeModule].prizes.first}
                    />
                    <PrizeRow
                      rank="B"
                      amount={challenges[activeModule].prizes.second}
                    />
                    <PrizeRow
                      rank="C"
                      amount={challenges[activeModule].prizes.third}
                    />
                    <div className="pt-4 border-t border-blue-500/10 flex justify-between font-black text-blue-400">
                      <span className="text-[10px] uppercase">
                        Aggregate Pool
                      </span>
                      <span>₹{challenges[activeModule].prizes.total}</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-[10px] text-blue-400/60 uppercase italic">
                      Competitive Ranking Only
                    </p>
                    <div className="text-xs text-white mt-2">
                      Maximum Height Challenge
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Requirements & Hardware */}
            <div className="lg:col-span-8 bg-black/40 border border-blue-500/10 rounded-3xl p-8 backdrop-blur-md">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-lg font-black text-white uppercase tracking-widest">
                  {challenges[activeModule].title}
                </h3>
                <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-[9px] text-blue-400 rounded-full">
                  {challenges[activeModule].theme}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {challenges[activeModule].objectives.map((obj, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-5 bg-blue-500/5 border border-white/5 rounded-2xl group hover:border-blue-500/50 transition-all"
                  >
                    <div className="w-8 h-8 bg-blue-500/10 rounded border border-blue-500/30 flex items-center justify-center shrink-0">
                      <Layers className="w-4 h-4 text-blue-400" />
                    </div>
                    <p className="text-[11px] leading-relaxed text-blue-200/70 group-hover:text-white transition-colors">
                      {obj}
                    </p>
                  </div>
                ))}
              </div>

              {/* Hardware Icons Display */}
              <div className="mt-12 pt-8 border-t border-blue-500/10 flex justify-center gap-12">
                <HardwareIcon icon={<Cpu />} label="Onboard Proc" />
                <HardwareIcon icon={<Zap />} label="Motor Logic" />
                <HardwareIcon icon={<Eye />} label="Lidar/Vis" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// --- Utility Components ---

function PrizeRow({ rank, amount }) {
  return (
    <div className="flex justify-between items-center text-sm font-bold">
      <span className="text-[10px] text-blue-500/60 uppercase">
        Rank_Tier_{rank}
      </span>
      <span className="text-white italic">₹{amount}</span>
    </div>
  );
}

function HardwareIcon({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
      <div className="p-3 bg-blue-500/10 rounded-full text-blue-400 border border-blue-500/20">
        {React.cloneElement(icon, { className: "w-5 h-5" })}
      </div>
      <span className="text-[9px] uppercase tracking-tighter text-blue-500">
        {label}
      </span>
    </div>
  );
}
