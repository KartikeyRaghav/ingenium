"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Activity,
  CircuitBoard,
  Radio,
  Trophy,
  ChevronLeft,
} from "lucide-react";
import { StarField } from "@/components/chronoverse";
import { useRouter } from "next/navigation";

export default function ElectronicsPS() {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const events = [
    {
      id: "SA",
      name: "Silicon Architects",
      theme: "HDL Hackathon",
      sub: "Digital Design & FPGA Prototyping",
      icon: <Cpu className="w-6 h-6" />,
      objective:
        "Bridge the gap between theoretical digital logic and physical FPGA implementation, optimizing for speed, power, and area.",
      rounds: [
        {
          name: "Soft Core Challenge",
          type: "Online Qualifier",
          task: "Design a processor module with integrated peripherals using Verilog/VHDL.",
        },
        {
          name: "Physical Implementation",
          type: "On-Site Finals",
          task: "Synthesize Round 1 design onto a physical FPGA board with a live demonstration.",
        },
      ],
      judging: [
        {
          label: "Functionality",
          weight: "40%",
          desc: "Real-time test case validation.",
        },
        {
          label: "Resource Utilization",
          weight: "20%",
          desc: "Efficiency of LUTs, Flip-Flops, and BRAM.",
        },
        {
          label: "Presentation",
          weight: "20%",
          desc: "Overall understanding of project statement.",
        },
        {
          label: "Innovation",
          weight: "20%",
          desc: "Architectural creativity.",
        },
      ],
      prizes: {
        first: "10,000",
        second: "5,000",
        third: "3,000",
        total: "18,000",
      },
    },
    {
      id: "AV",
      name: "Analog Verse",
      theme: "Circuit Design Challenge",
      sub: "Signal Processing & PCB Artistry",
      icon: <Radio className="w-6 h-6" />,
      objective:
        "Simulate real-world R&D environments focusing on noise, signal integrity, and professional PCB layout.",
      rounds: [
        {
          name: "Design & Simulation",
          type: "SPICE Phase",
          task: "Perform literature review and simulate topologies (Sallen-Key, MFB) using LTspice/PSpice.",
        },
        {
          name: "PCB Layout",
          type: "Manufacturing Phase",
          task: "Convert schematics to manufacture-ready layouts using KiCad/Altium with proper grounding.",
        },
      ],
      judging: [
        {
          label: "Simulation Accuracy",
          weight: "30%",
          desc: "Bode plot and Transient response specs.",
        },
        {
          label: "Circuit Justification",
          weight: "20%",
          desc: "Quality of literature review and component selection reasoning.",
        },
        {
          label: "PCB Layout Quality",
          weight: "30%",
          desc: "Trace width, EMI/EMC, and ground pours.",
        },
        {
          label: "Manufacturability",
          weight: "20%",
          desc: "DRC clearance and BOM generation.",
        },
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
    <div className="relative min-h-screen bg-[#02040a] text-amber-100 font-mono p-4 md:p-8 overflow-hidden">
      <StarField />

      {/* Background Oscilloscope Animation */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full">
          <motion.path
            d="M 0 500 Q 250 400 500 500 T 1000 500"
            stroke="#f59e0b"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, x: [0, 100, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-amber-500/30 pb-6">
          <div>
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-amber-500 mb-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.5em] uppercase">
                Return to Events
              </span>
            </button>
            <h1 className="text-4xl font-black tracking-tighter text-white uppercase italic">
              Hardware <span className="text-amber-500">Synthesis</span> Core
            </h1>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            {events.map((event, idx) => (
              <button
                key={event.id}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-2 border transition-all ${
                  activeTab === idx
                    ? "bg-amber-500/20 border-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                    : "border-amber-500/10 text-amber-500/50 hover:border-amber-500/40"
                }`}
              >
                <span className="text-xs font-bold tracking-widest">
                  {event.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Left Column: Specs & Logic */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 bg-black/60 border border-amber-500/20 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-amber-500/50 to-transparent" />
                <h3 className="text-[10px] text-amber-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Activity className="w-3 h-3" /> System_Objective
                </h3>
                <p className="text-sm leading-relaxed text-amber-100/80">
                  {events[activeTab].objective}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {events[activeTab].judging.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white/5 border border-white/5 rounded-xl"
                  >
                    <div className="text-xl font-black text-amber-500">
                      {item.weight}
                    </div>
                    <div className="text-[9px] uppercase text-white tracking-tighter mt-1">
                      {item.label}
                    </div>
                    <div className="text-[8px] text-gray-500 mt-1 uppercase leading-tight">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Prize Pool */}
              <div className="p-6 bg-amber-500/10 border border-amber-500/30 rounded-2xl relative overflow-hidden">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-[10px] text-amber-400 uppercase tracking-[0.2em] font-bold">
                    Bounty_Protocol
                  </h4>
                  <Trophy className="w-4 h-4 text-amber-500" />
                </div>
                <div className="space-y-3">
                  <PrizeRow
                    rank="1st"
                    amount={events[activeTab].prizes.first}
                  />
                  <PrizeRow
                    rank="2nd"
                    amount={events[activeTab].prizes.second}
                  />
                  <PrizeRow
                    rank="3rd"
                    amount={events[activeTab].prizes.third}
                  />
                  <div className="pt-3 border-t border-amber-500/20 flex justify-between font-bold">
                    <span className="text-[10px] text-gray-500 uppercase">
                      Total Allocation
                    </span>
                    <span className="text-amber-400">
                      ₹{events[activeTab].prizes.total}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Timeline & Hardware */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-black/40 border border-amber-500/20 rounded-3xl p-8 backdrop-blur-xl relative">
                <div className="absolute -top-3 -right-3 w-24 h-24 border border-amber-500/10 rounded-full flex items-center justify-center">
                  {events[activeTab].icon}
                </div>

                <h3 className="text-lg font-black text-white uppercase tracking-[0.3em] mb-8">
                  Deployment_Phases
                </h3>

                <div className="space-y-8 relative">
                  <div className="absolute left-4.75 top-2 bottom-2 w-px bg-amber-500/20 border-dashed border-l" />
                  {events[activeTab].rounds.map((round, i) => (
                    <div key={i} className="relative pl-12">
                      <div className="absolute left-0 top-0 w-10 h-10 rounded bg-[#02040a] border border-amber-500/40 flex items-center justify-center z-10">
                        <span className="text-[10px] text-amber-500">
                          0{i + 1}
                        </span>
                      </div>
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-amber-400 font-bold uppercase text-sm tracking-widest">
                          {round.name}
                        </h4>
                        <span className="text-[8px] bg-amber-500/20 text-amber-200 px-2 py-0.5 rounded uppercase">
                          {round.type}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-400 leading-relaxed uppercase">
                        {round.task}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hardware Requirements/Context */}
              <div className="p-6 border border-white/5 rounded-2xl flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-4">
                  <CircuitBoard className="w-8 h-8 text-amber-500/40" />
                  <div>
                    <div className="text-[10px] text-amber-500 uppercase">
                      Standard_Compliance
                    </div>
                    <div className="text-[11px] text-gray-300 uppercase">
                      Vivado | Quartus | LTspice | KiCad
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-amber-500 uppercase">
                    Format
                  </div>
                  <div className="text-[11px] text-gray-300 uppercase italic">
                    Offline [IIT Indore]
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

function PrizeRow({ rank, amount }) {
  return (
    <div className="flex justify-between items-center text-[11px]">
      <span className="text-gray-500 uppercase italic">{rank}_Access_Key</span>
      <span className="text-white font-black italic">₹{amount}</span>
    </div>
  );
}
