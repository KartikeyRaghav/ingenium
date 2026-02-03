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
  ChevronRight,
  Database,
  Target,
  FileText,
  Activity,
  ExternalLink,
  ShieldCheck,
  Search,
  AlertCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function IVDCPS() {
  const [activeModule, setActiveModule] = useState(0);
  const router = useRouter();

  const challenges = [
    {
      id: 1,
      title: "3D Reconstruction: IITI CDF",
      theme: "Simulation & Autonomous Navigation",
      icon: <Box className="w-6 h-6" />,
      href: "/PS/3D_Design_IVDC.pdf",
      motivation:
        "Modern technology leaders use high-fidelity 3D reconstruction and virtual simulation to experiment without the cost of physical prototypes. Virtual environments enable rapid iteration and robust validation of real-world systems.",
      problemStatement:
        "Convert real-world Point Cloud scan data into accurate 3D models and enable autonomous point-to-point navigation within that generated environment.",
      tasks: [
        {
          title: "Task A: Reconstruction",
          desc: "Construct an accurate 3D model from provided scan data ensuring geometric consistency and structural correctness.",
        },
        {
          title: "Task B: Navigation",
          desc: "Design a navigation pipeline for a drone within the model, implementing local planners for dynamic obstacles.",
        },
      ],
      rules: [
        "Completion of Task A is mandatory to qualify for Task B.",
        "The entire solution must run on limited computational resources.",
        "Specific start and end points will be provided only on competition day.",
        "Solution must be iteratively refined for robustness and accuracy.",
      ],
      deliverables: [
        "Complete working pipeline",
        "Generated 3D model output",
        "Navigation algorithm implementation",
        "Comprehensive README/Technical documentation",
      ],
      specs: {
        hardware: ["GPS", "IMU", "3D-LiDAR"],
        compute: "Constrained Computational Resources",
      },
      evaluation: [
        "Robustness: Accuracy of reconstruction and navigation effectiveness.",
        "Documentation: Clarity of pipeline and reference explanation.",
        "Novelty: Innovation in efficiency or navigation performance.",
      ],
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
      href: "/PS/CV_Obstacourse.pdf",
      motivation:
        "This competition integrates image processing and sensor-driven navigation, emphasizing precise path tracking and obstacle avoidance at high speeds.",
      problemStatement:
        "Design and build a camera-based robot that uses computer vision to detect obstacles and traverse a defined path autonomously in minimum time.",
      tasks: [
        {
          title: "CV Pipeline",
          desc: "Implement obstacle detection and path traversal using libraries like OpenCV.",
        },
        {
          title: "Control Logic",
          desc: "Use control algorithms to compute motion corrections and dynamically adjust motor speeds 99].",
        },
      ],
      rules: [
        "Must use an Onboard Computer (NVIDIA Jetson/Raspberry Pi).",
        "Must use motor drivers (L298) to control standard DC motors.",
        "The robot must handle sharp turns, intersections, and varying widths.",
        "A live demonstration of autonomous completion is required.",
      ],
      deliverables: [
        "Functional autonomous robot with onboard processing",
        "Hardware design and component selection report",
        "CV methodology and algorithm development process",
        "Control algorithm design and tuning approach",
      ],
      specs: {
        hardware: ["Jetson/Pi", "L298 Driver", "USB/Pi Camera", "DC Motors"],
        compute: "Onboard Image Processing",
      },
      evaluation: [
        "Completion Time: Total time taken to finish the course.",
        "Robot Design: Stability, compactness, and effective motor control.",
        "Algorithm Efficiency: Effectiveness of CV and control systems.",
        "Autonomy: Accuracy of detection and path traversal.",
      ],
      prizes: {
        first: "10,000",
        second: "5,000",
        third: "3,000",
        total: "18,000",
      },
    },
  ];

  return (
    <div className="relative min-h-screen bg-black/30 text-blue-100 font-mono p-4 md:p-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 border-b border-blue-500/30 pb-6">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-blue-400 group mb-2"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] tracking-[0.4em] uppercase">
                Return to Events
              </span>
            </button>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic">
              IVDC <span className="text-blue-500">KINETIC</span>
            </h1>
          </div>

          <div className="flex gap-2 mt-6 lg:mt-0 p-1 bg-blue-950/40 rounded-xl border border-white/5 overflow-x-auto max-w-full">
            {challenges.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveModule(idx)}
                className={`flex-none px-4 py-2 rounded-lg transition-all duration-500 flex items-center gap-3 ${
                  activeModule === idx
                    ? "bg-blue-600 text-white shadow-[0_0_20px_#3b82f6]"
                    : "hover:bg-blue-500/10 text-blue-400/60"
                }`}
              >
                <span className="text-xs font-bold tracking-widest">
                  0{item.id}
                </span>
                <span className="hidden md:block text-[10px] font-bold uppercase tracking-tighter">
                  {item.title.split(":")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* --- MAIN INTERFACE --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* COLUMN 1: MISSION CONTEXT & PRIZES */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 bg-blue-950/20 border border-blue-500/20 rounded-2xl relative group">
                <div className="flex items-center gap-2 text-blue-400 text-[10px] uppercase tracking-widest mb-4">
                  <Activity className="w-3 h-3 animate-pulse" /> Mission_Core
                </div>
                <p className="text-sm leading-relaxed text-blue-100/70 italic mb-6">
                  {challenges[activeModule].motivation}
                </p>
                <div className="space-y-2 p-4 bg-blue-500/5 rounded-xl border border-blue-500/10">
                  <h4 className="text-[10px] text-blue-400 uppercase font-bold flex items-center gap-2">
                    <Search className="w-3 h-3" /> Objective
                  </h4>
                  <p className="text-xs text-white leading-relaxed">
                    {challenges[activeModule].problemStatement}
                  </p>
                </div>
              </div>

              {/* PRIZE POOL CARD */}
              <div className="p-6 bg-linear-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-[10px] text-yellow-500 uppercase tracking-widest font-bold">
                    Bounty_Pool
                  </h4>
                  <Trophy className="w-5 h-5 text-yellow-500 shadow-[0_0_10px_#eab308]" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-blue-400/60">Rank_01</span>
                    <span className="text-white font-black">
                      ₹{challenges[activeModule].prizes.first}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-blue-400/60">Rank_02</span>
                    <span className="text-white font-black">
                      ₹{challenges[activeModule].prizes.second}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs font-mono pb-2 border-b border-white/5">
                    <span className="text-blue-400/60">Rank_03</span>
                    <span className="text-white font-black">
                      ₹{challenges[activeModule].prizes.third}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-black text-yellow-500 pt-1">
                    <span>TOTAL</span>
                    <span>₹{challenges[activeModule].prizes.total}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() =>
                  router.push(
                    `/present/registration?event=${activeModule === 0 ? "3d" : "cv"}`,
                  )
                }
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all"
              >
                INITIATE_ENTRY <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* COLUMN 2: RULES, TASKS & SPECS */}
            <div className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* COMPLIANCE & RULES */}
                <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-2xl">
                  <h4 className="text-[10px] text-red-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-3 h-3" /> Rules_&_Compliance
                  </h4>
                  <ul className="space-y-3 mb-4">
                    {challenges[activeModule].rules.map((rule, i) => (
                      <li
                        key={i}
                        className="text-[11px] text-blue-100/60 flex items-start gap-2"
                      >
                        <AlertCircle className="w-3 h-3 text-red-400 shrink-0 mt-0.5" />{" "}
                        {rule}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={challenges[activeModule].href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Rules
                  </Link>
                </div>

                {/* TASKS */}
                <div className="p-6 bg-blue-950/20 border border-blue-500/20 rounded-2xl">
                  <h4 className="text-[10px] text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Target className="w-3 h-3" /> Operation_Workflow
                  </h4>
                  <div className="space-y-4">
                    {challenges[activeModule].tasks.map((task, i) => (
                      <div key={i} className="pl-4 border-l-2 border-blue-500">
                        <div className="text-[11px] font-bold text-white uppercase">
                          {task.title}
                        </div>
                        <div className="text-[10px] text-blue-100/50 leading-tight">
                          {task.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* EVALUATION PARAMETERS */}
              <div className="p-6 bg-black/40 border border-blue-500/10 rounded-2xl">
                <h4 className="text-[10px] text-blue-400 uppercase tracking-widest mb-4">
                  Evaluation_Logic
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {challenges[activeModule].evaluation.map((ev, i) => (
                    <div
                      key={i}
                      className="p-3 bg-white/5 rounded-lg border border-white/5 text-[10px] text-blue-100/70"
                    >
                      {ev}
                    </div>
                  ))}
                </div>
              </div>

              {/* HARDWARE & ASSETS */}
              <div className="p-8 bg-linear-to-r from-blue-900/10 to-transparent border border-blue-500/10 rounded-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-lg font-black text-white uppercase mb-4">
                      Required Deliverables
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {challenges[activeModule].deliverables.map((del, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-[10px] text-blue-300"
                        >
                          <FileText className="w-3 h-3" /> {del}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 bg-black/60 border border-blue-500/30 rounded-xl">
                    <div className="text-[10px] text-blue-400 uppercase mb-3">
                      Hardware_Inventory
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {challenges[activeModule].specs.hardware.map((hw, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-500/20 rounded text-[9px] text-white border border-blue-500/30"
                        >
                          {hw}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] text-blue-500/50 uppercase">
                      <ExternalLink className="w-3 h-3" /> Ref: OpenCV / PID
                      MATLAB / LIDAR API
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
