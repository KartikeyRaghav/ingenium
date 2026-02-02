"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Radio,
  Zap,
  Microchip,
  Globe,
  Settings,
  Terminal,
  ExternalLink,
  ChevronLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ElectronicsPS() {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const events = [
    {
      id: "SA",
      name: "Silicon Architects",
      theme: "The HDL Hackathon",
      sub: "Digital Design, Computer Architecture, and FPGA Prototyping",
      icon: <Cpu className="w-6 h-6" />,
      objective:
        "Bridge the gap between theoretical digital logic and physical FPGA implementation, encouraging participants to optimize for speed, power, and area.",
      audience:
        "Electrical/Electronics Engineering students & CS students interested in Computer Architecture.",
      software: ["Vivado", "Quartus", "SystemVerilog", "HLS"],
      rounds: [
        {
          name: "The Soft Core Challenge",
          type: "Online Qualifier",
          task: "Design a processor module (e.g., RISC-V core) with integrated peripherals. Submit synthesizable RTL code in a Vivado/Quartus zip format.",
          details:
            "Must validate simulation with own Testbench and C code for peripheral integration.",
        },
        {
          name: "The Physical Implementation",
          type: "On-Site Finals",
          task: "The top 10 teams synthesize Round 1 designs onto physical FPGA boards for a live demonstration.",
          details:
            "Deployment on FPGA board of choice (e.g., Basys 3 or DE10-Lite) with a presentation.",
        },
      ],
      judging: [
        {
          label: "Functionality",
          weight: "40%",
          desc: "Processor/module pass all test cases on real-time.",
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
          desc: "Creativity in architecture and application.",
        },
      ],
      logistics:
        "Budget allocated for 10x FPGA Boards (Basys 3 / DE10-Lite) up to 10k cost.",
    },
    {
      id: "AV",
      name: "Analog Verse",
      theme: "The Circuit Design Challenge",
      sub: "Analog Signal Processing, Simulation, and PCB Design",
      icon: <Radio className="w-6 h-6" />,
      objective:
        "Simulate real-world R&D environments where noise, signal integrity, and layout matter. Move beyond breadboarding to professional engineering.",
      audience:
        "Students interested in Analog Electronics, RF, Instrumentation, and PCB Design.",
      software: ["LTspice", "Multisim", "Cadence PSpice", "KiCad", "Altium"],
      rounds: [
        {
          name: "Design & Simulation",
          type: "Phase 1",
          task: "Literature review for op-amp topologies (Sallen-Key, MFB) and simulation for specific applications (ECG AFE or Audio Crossover).",
          details:
            "Deliverables: Simulation logs (Transient, AC Bode Plot, and Noise Analysis).",
        },
        {
          name: "The PCB Layout",
          type: "Phase 2",
          task: "Convert schematics into manufacture-ready PCB layouts with proper grounding (star grounding, ground planes).",
          details:
            "Constraints: 100mm x 100mm max, standard footprints (SMD 0805/THT), EMI/EMC considerations.",
        },
      ],
      judging: [
        {
          label: "Simulation Accuracy",
          weight: "30%",
          desc: "Bode plot/Transient response meeting specs.",
        },
        {
          label: "Circuit Justification",
          weight: "20%",
          desc: "Literature review quality and component selection.",
        },
        {
          label: "PCB Layout Quality",
          weight: "30%",
          desc: "Trace width, EMI/EMC, and ground pour usage.",
        },
        {
          label: "Manufacturability",
          weight: "20%",
          desc: "DRC clearance, footprint assignment, and BOM generation.",
        },
      ],
      logistics:
        "Can be fully online or include a presentation with a soldered PCB demonstration.",
    },
  ];

  return (
    <div className="relative min-h-screen text-amber-100 font-mono p-2 md:p-6 lg:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* --- DYNAMIC HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6 border-b border-amber-500/30 pb-8">
          <div className="space-y-2">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-amber-500/60 mb-4"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.4em] uppercase">
                Return To Events
              </span>
            </button>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic leading-none">
              {events[activeTab].id === "SA" ? "SILICON" : "ANALOG"}{" "}
              <span className="text-amber-500">
                {events[activeTab].id === "SA" ? "ARCHITECTS" : "VERSE"}
              </span>
            </h1>
            <p className="text-amber-500/80 tracking-widest text-xs font-bold uppercase">
              {events[activeTab].theme} // {events[activeTab].sub}
            </p>
          </div>

          <div className="flex bg-amber-500/5 p-1 rounded-sm border border-amber-500/20">
            {events.map((event, idx) => (
              <button
                key={event.id}
                onClick={() => setActiveTab(idx)}
                className={`px-8 py-3 transition-all relative ${
                  activeTab === idx
                    ? "text-black"
                    : "text-amber-500 hover:bg-amber-500/10"
                }`}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="tab"
                    className="absolute inset-0 bg-amber-500"
                  />
                )}
                <span className="relative z-10 text-xs font-black tracking-widest uppercase">
                  {event.id}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT: OBJECTIVE & JUDGING */}
          <div className="lg:col-span-4 space-y-6">
            <section className="bg-amber-500/5 border-l-4 border-amber-500 p-6">
              <h3 className="text-xs font-bold text-amber-500 uppercase mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4" /> 01_Core_Objective
              </h3>
              <p className="text-sm leading-relaxed text-gray-300 italic">
                "{events[activeTab].objective}"
              </p>
            </section>

            <section className="grid grid-cols-1 gap-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <h4 className="text-[10px] text-amber-500/60 uppercase mb-2">
                  Target_Audience
                </h4>
                <p className="text-[11px] text-gray-300 leading-tight uppercase tracking-tight">
                  {events[activeTab].audience}
                </p>
              </div>

              <div className="border border-amber-500/20 rounded-lg overflow-hidden">
                <div className="bg-amber-500/10 p-2 text-[10px] font-bold text-center uppercase tracking-widest border-b border-amber-500/20">
                  Evaluation_Parameters
                </div>
                {events[activeTab].judging.map((j, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 border-b border-white/5 last:border-0 bg-black/20"
                  >
                    <div className="flex flex-col">
                      <span className="text-[10px] text-white font-bold uppercase">
                        {j.label}
                      </span>
                      <span className="text-[9px] text-gray-500 uppercase">
                        {j.desc}
                      </span>
                    </div>
                    <span className="text-amber-500 font-black text-sm">
                      {j.weight}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <button
              onClick={() =>
                router.push(
                  `/present/registration?event=${activeTab == 0 ? "sa" : "av"}`,
                )
              }
              className="w-full group relative overflow-hidden bg-amber-500 py-4 rounded-sm transition-transform active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="relative flex items-center justify-center gap-2 text-black font-black uppercase tracking-[0.3em] text-sm">
                Register_Now <ExternalLink className="w-4 h-4" />
              </div>
            </button>
          </div>

          {/* MIDDLE: PHASES & TASKS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              <div className="absolute -left-2 top-0 bottom-0 w-px bg-linear-to-b from-amber-500/50 via-transparent to-amber-500/50" />
              <h3 className="text-xs font-bold text-amber-500 uppercase mb-6 px-4">
                02_Execution_Roadmap
              </h3>

              <div className="space-y-10 px-4">
                {events[activeTab].rounds.map((round, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-5.25 top-1 w-2.5 h-2.5 bg-amber-500 rotate-45" />
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-bold bg-amber-500 text-black px-1.5 py-0.5 uppercase">
                        Round_0{i + 1}
                      </span>
                      <span className="text-white font-bold uppercase text-sm tracking-tighter">
                        {round.name}
                      </span>
                    </div>
                    <div className="bg-white/5 border border-white/5 p-4 rounded-br-2xl">
                      <p className="text-[11px] text-amber-200/80 uppercase font-bold mb-2">
                        Task: {round.task}
                      </p>
                      <p className="text-[10px] text-gray-400 leading-relaxed italic border-t border-white/5 pt-2">
                        {round.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: TECH STACK & REQUIREMENTS */}
          <div className="lg:col-span-3 space-y-4">
            <div className="p-6 bg-black/40 border border-white/10 rounded-2xl h-full">
              <div className="flex items-center gap-2 mb-6">
                <Microchip className="w-5 h-5 text-amber-500" />
                <h3 className="text-xs font-bold text-white uppercase tracking-widest">
                  Tech_Stack
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {events[activeTab].software.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-2 bg-white/5 rounded border border-white/5 hover:border-amber-500/30 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    <span className="text-[10px] text-gray-300 font-bold uppercase">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>

              {events[activeTab].id === "AV" && (
                <div className="mt-8 space-y-4">
                  <div className="text-[9px] text-amber-500/60 uppercase font-black border-b border-amber-500/20 pb-2">
                    Layout_Constraints
                  </div>
                  <ul className="space-y-2">
                    <li className="text-[10px] text-gray-400 flex justify-between">
                      <span>Max Dims:</span>{" "}
                      <span className="text-white">100x100mm</span>
                    </li>
                    <li className="text-[10px] text-gray-400 flex justify-between">
                      <span>Footprints:</span>{" "}
                      <span className="text-white">SMD 0805 / THT</span>
                    </li>
                    <li className="text-[10px] text-gray-400 flex justify-between">
                      <span>Standards:</span>{" "}
                      <span className="text-white">EMI / EMC</span>
                    </li>
                  </ul>
                </div>
              )}

              {events[activeTab].id === "SA" && (
                <div className="mt-8 p-4 bg-amber-500/10 rounded-lg border border-amber-500/20">
                  <span className="text-[9px] font-black text-amber-500 uppercase block mb-2">
                    Round 1 Deliverables:
                  </span>
                  <p className="text-[10px] text-gray-300 uppercase leading-tight italic">
                    Synthesizable RTL (Verilog/VHDL) packaged as Vivado/Quartus
                    zip project.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FOOTER STATUS BAR */}
        <div className="flex justify-between items-center text-[9px] text-amber-500/40 uppercase tracking-[0.5em] pt-4">
          <span>Electronics Club // IIT Indore</span>
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3" /> System_Active
            </span>
            <span>Est. 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
