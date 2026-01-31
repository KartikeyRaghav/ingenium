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
      motivation:
        "Tech giants like NVIDIA use 3D rendering to simulate real-world problems. This enables rapid innovation without high physical prototype costs.",
      problemStatement:
        "Harness the potential of virtual 3D simulation, focusing on converting Point Cloud data into models and implementing point-to-point navigation.",
      tasks: [
        {
          title: "Task A",
          desc: "Convert provided Point Cloud data into accurate 3D models.",
        },
        {
          title: "Task B",
          desc: "Implement point-to-point navigation with local planners for dynamic obstacles.",
        },
      ],
      deliverables: [
        "Complete working pipeline and 3D model output.",
        "Navigation algorithm and SJTU drone integration.",
        "Comprehensive documentation (README/Technical).",
      ],
      specs: {
        hardware: ["GPS", "IMU", "3D-LiDAR"],
        compute: "Limited computation power requirement.",
      },
      evaluation: [
        "Robustness of results (Accuracy of conversion).",
        "Effectiveness of navigation system.",
        "Novelty and creative approaches.",
      ],
    },
    {
      id: 2,
      title: "CV Based Obstacourse",
      theme: "Autonomous Vision Navigation",
      icon: <Eye className="w-6 h-6" />,
      motivation:
        "Building vision-based robots gives practical experience in control algorithms, precise path tracking, and obstacle avoidance at high speeds.",
      problemStatement:
        "Design and build a camera-based robot using computer vision to avoid obstacles and traverse a path autonomously in minimum time.",
      tasks: [
        {
          title: "Hardware",
          desc: "Utilize OBCs like NVIDIA Jetson/Raspberry Pi with USB/RPi cameras.",
        },
        {
          title: "Software",
          desc: "OpenCV-based detection and real-time motor speed adjustment for sharp turns.",
        },
      ],
      deliverables: [
        "Functional robot with onboard processing.",
        "Detailed report on CV techniques and PID/Control tuning.",
        "Autonomous demonstration on the track.",
      ],
      specs: {
        hardware: ["Jetson Nano/Pi", "L298 Motor Driver", "DC Motors"],
        compute: "Onboard computer system (OBC).",
      },
      evaluation: [
        "Completion Time (Total time taken).",
        "Robot Design (Stability & Compactness).",
        "Algorithm Efficiency & Autonomy.",
      ],
    },
    {
      id: 3,
      title: "Biomimetic Jump-Bot",
      theme: "Vertical Kinetic Engineering",
      icon: <ArrowUp className="w-6 h-6" />,
      motivation:
        "Encouraged to take inspiration from the world through biomimicry to find kinetic solutions for vertical movement.",
      problemStatement:
        "Create a robot capable of jumping vertically as high as possible from a standing position within defined boundaries.",
      tasks: [
        {
          title: "Constraint A",
          desc: "Push the ground; no propeller-like systems allowed.",
        },
        {
          title: "Constraint B",
          desc: "Zero mass reduction (unlike rockets) during jump.",
        },
      ],
      deliverables: [
        "Functional jumping robot.",
        "Adherence to the defined 3D boundary dimensions.",
        "Demonstration of maximum vertical height.",
      ],
      specs: {
        hardware: ["Jump Mechanism", "Standing Base", "Height Sensor (below)"],
        compute: "Stationary vertical logic.",
      },
      evaluation: [
        "Height achieved (Measured via sensor).",
        "Boundary adherence (No crossing lines).",
        "Mechanism integrity (No mass reduction).",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen text-blue-100 font-mono p-4 md:p-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- DYNAMIC HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 border-b border-blue-500/30 pb-6">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-blue-400 group mb-2"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] tracking-[0.4em] uppercase">
                System_Back
              </span>
            </button>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic">
              IVDC <span className="text-blue-500"></span>
            </h1>
          </div>

          <div className="flex gap-2 mt-6 lg:mt-0 p-1 bg-blue-950/40 rounded-xl border border-white/5 overflow-x-auto max-w-full">
            {challenges.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveModule(idx)}
                className={`flex-none px-4 py-2 rounded-lg transition-all duration-500 flex items-center gap-3 ${
                  activeModule === idx
                    ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]"
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

        {/* --- MAIN INTERFACE GRID --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* LEFT: MISSION CONTROL */}
            <div className="lg:col-span-4 space-y-6">
              {/* Status & Motivation */}
              <div className="p-6 bg-linear-to-br from-blue-950/40 to-black/40 border border-blue-500/20 rounded-2xl relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  {challenges[activeModule].icon}
                </div>
                <div className="flex items-center gap-2 text-blue-400 text-[10px] uppercase tracking-widest mb-4">
                  <Activity className="w-3 h-3 animate-pulse" /> Mission_Context
                </div>
                <p className="text-sm leading-relaxed text-blue-100/70 italic border-l-2 border-blue-500/50 pl-4">
                  {challenges[activeModule].motivation}
                </p>
                <div className="mt-6 space-y-2">
                  <h4 className="text-[10px] text-blue-500 uppercase font-bold">
                    Problem Statement
                  </h4>
                  <p className="text-xs text-white leading-relaxed">
                    {challenges[activeModule].problemStatement}
                  </p>
                </div>
              </div>

              {/* Hardware Specs */}
              <div className="p-6 bg-black/40 border border-blue-500/20 rounded-2xl">
                <h4 className="text-[10px] text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Cpu className="w-3 h-3" /> System_Specifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {challenges[activeModule].specs.hardware.map((hw, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-[10px] text-blue-300"
                    >
                      {hw}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-[10px] text-blue-500/60 font-mono">
                  LOG: {challenges[activeModule].specs.compute}
                </p>
              </div>

              {/* Action Button */}
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(59,130,246,0.3)] group transition-all">
                Register_Now{" "}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* RIGHT: TASK DEPLOYMENT */}
            <div className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Task Breakdown */}
                <div className="p-6 bg-blue-950/20 border border-blue-500/20 rounded-2xl">
                  <h4 className="text-[10px] text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Target className="w-3 h-3" /> Operational_Tasks
                  </h4>
                  <div className="space-y-4">
                    {challenges[activeModule].tasks.map((task, i) => (
                      <div
                        key={i}
                        className="relative pl-6 before:absolute before:left-0 before:top-1 before:w-1 before:h-4 before:bg-blue-500"
                      >
                        <div className="text-[11px] font-bold text-white uppercase">
                          {task.title}
                        </div>
                        <div className="text-[11px] text-blue-100/60 leading-snug">
                          {task.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Evaluation Logic */}
                <div className="p-6 bg-black/60 border border-blue-500/20 rounded-2xl">
                  <h4 className="text-[10px] text-blue-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Database className="w-3 h-3" /> Evaluation_Parameters
                  </h4>
                  <div className="space-y-3">
                    {challenges[activeModule].evaluation.map((ev, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-[11px]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0 shadow-[0_0_5px_#3b82f6]" />
                        <span className="text-blue-100/80">{ev}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Deliverables / Final Output */}
              <div className="p-8 bg-linear-to-r from-blue-900/20 to-transparent border border-blue-500/10 rounded-3xl relative overflow-hidden">
                <div className="flex flex-col md:flex-row justify-between gap-8 relative z-10">
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-white uppercase mb-4 tracking-tighter">
                      Required Deliverables
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {challenges[activeModule].deliverables.map((del, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors"
                        >
                          <FileText className="w-4 h-4 text-blue-500 shrink-0" />
                          <span className="text-[10px] leading-tight text-blue-200/80">
                            {del}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Prize Tier Mini-Card */}
                  <div className="md:w-48 p-4 bg-blue-500/10 border border-blue-400/30 rounded-2xl flex flex-col justify-center items-center text-center">
                    <Trophy className="w-8 h-8 text-yellow-500 mb-2 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                    <div className="text-[10px] uppercase font-bold text-blue-400">
                      Marking_Schema
                    </div>
                    <div className="text-xs text-white mt-1 italic">
                      Partial Marking Awarded per Task
                    </div>
                  </div>
                </div>

                {/* Background Decor */}
                <div className="absolute bottom-0 right-0 p-4 opacity-5">
                  <Layers className="w-32 h-32 text-white" />
                </div>
              </div>

              {/* Resources Footer */}
              <div className="flex items-center gap-4 text-[9px] text-blue-500/50 uppercase tracking-[0.2em]">
                <span className="flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" /> OpenCV_Docs
                </span>
                <span className="flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" /> ROS_Navigation
                </span>
                <span className="flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" /> PID_Tuning_Guide
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
