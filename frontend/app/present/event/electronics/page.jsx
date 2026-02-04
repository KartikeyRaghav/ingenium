"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ShieldCheck,
  Trophy,
  FileText,
  AlertCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
      href: "/PS/Silicon_Architects.pdf",
      objective:
        "Bridge the gap between theoretical digital logic and physical FPGA implementation, optimizing designs for speed, power, and area.",
      audience:
        "Electrical/Electronics & CS students interested in Computer Architecture.",
      software: [
        "Verilog",
        "VHDL",
        "SystemVerilog",
        "Vivado",
        "Quartus",
        "C (HLS)",
      ],
      rounds: [
        {
          name: "The Soft Core Challenge",
          type: "Online Qualifier",
          task: "Design a processor module with integrated peripherals and a custom application (e.g., RISC-V core).",
          details:
            "Submit synthesizable RTL in a Vivado/Quartus ZIP project. Validate via own testbench and simulation waveforms.",
        },
        {
          name: "The Physical Implementation",
          type: "On-Site Finals",
          task: "The top 10 shortlisted teams synthesize and deploy designs onto physical FPGA hardware.",
          details:
            "Live hardware demonstration of real-time functionality on a board of your choice.",
        },
      ],
      judging: [
        {
          label: "Functionality",
          weight: "40%",
          desc: "Correct operation on real-time hardware.",
        },
        {
          label: "Resource Utilization",
          weight: "20%",
          desc: "Efficiency of LUTs, Flip-Flops, and BRAM.",
        },
        {
          label: "Presentation",
          weight: "20%",
          desc: "Clarity of project and implementation.",
        },
        {
          label: "Innovation",
          weight: "20%",
          desc: "Creativity in architecture design.",
        },
      ],
      prizes: [
        { rank: "Winner", amount: "10,000" },
        { rank: "Runner Up", amount: "5,000" },
        { rank: "Second Runner Up", amount: "3,000" },
      ],
      rules: [
        "Only Vivado or Quartus design tools are supported.",
        "RTL must be synthesizable (Verilog/VHDL/SystemVerilog/HLS).",
        "Peripheral integration must be validated via C code simulation.",
        "Report must include waveforms of simulated results.",
      ],
    },
    {
      id: "AV",
      name: "Analog Verse",
      theme: "The Circuit Design Challenge",
      sub: "Analog Signal Processing, Simulation, and PCB Design",
      icon: <Radio className="w-6 h-6" />,
      href: "/PS/Analog_Verse.pdf",
      objective:
        "Simulate real-world R&D environments where noise performance, signal integrity, and PCB layout critically impact systems.",
      audience:
        "Students interested in Analog Electronics, RF, Instrumentation, and PCB Design.",
      software: [
        "LTspice",
        "Multisim",
        "Cadence PSpice",
        "KiCad",
        "Eagle",
        "Altium Designer",
      ],
      rounds: [
        {
          name: "Design & Simulation",
          type: "Phase 1",
          task: "Perform literature review for topologies (Sallen-Key, MFB) and conduct SPICE simulations.",
          details:
            "Deliverables: Simulation logs for Transient, AC Analysis (Bode Plot), and Noise Analysis.",
        },
        {
          name: "The PCB Layout",
          type: "Phase 2",
          task: "Convert validated schematics into manufacture-ready PCB layouts using industry tools.",
          details:
            "Must implement proper grounding (ground planes/star grounding) and pass DRC clearance.",
        },
      ],
      judging: [
        {
          label: "Simulation Accuracy",
          weight: "30%",
          desc: "Bode plot/Transient compliance with specs.",
        },
        {
          label: "Circuit Justification",
          weight: "20%",
          desc: "Reasoning behind component selection.",
        },
        {
          label: "PCB Layout Quality",
          weight: "30%",
          desc: "EMI/EMC, trace width, and grounding.",
        },
        {
          label: "Manufacturability",
          weight: "20%",
          desc: "Correct footprint usage and BOM generation.",
        },
      ],
      prizes: [
        { rank: "Winner", amount: "10,000" },
        { rank: "Runner Up", amount: "5,000" },
        { rank: "Second Runner Up", amount: "3,000" },
      ],
      rules: [
        "Max board dimensions: 100mm x 100mm.",
        "Use standard component footprints (SMD 0805 or Through-Hole).",
        "Proper grounding techniques (star/ground planes) are mandatory.",
        "PS release is T-7 days before submission.",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-black/30 text-amber-100 font-mono p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* --- NAVIGATION & HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 border-b border-amber-500/30 pb-10">
          <div className="space-y-4">
            <button
              onClick={() => router.back()}
              className="group flex items-center gap-2 text-amber-500/60 hover:text-amber-500 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[12px] tracking-[0.4em] uppercase font-bold">
                Return To Events
              </span>
            </button>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase italic leading-none">
              {events[activeTab].id === "SA" ? "SILICON" : "ANALOG"}{" "}
              <span className="text-amber-500">
                {events[activeTab].id === "SA" ? "ARCHITECTS" : "VERSE"}
              </span>
            </h1>
            <div className="flex items-center gap-4">
              <span className="bg-amber-500 text-black px-2 py-0.5 text-[12px] font-black uppercase">
                Ingenium 2026
              </span>
              <p className="text-amber-500/80 tracking-[0.2em] text-xs font-bold uppercase italic">
                {events[activeTab].theme} // {events[activeTab].sub}
              </p>
            </div>
          </div>

          <div className="flex bg-white/5 p-1 rounded-sm border border-white/10 backdrop-blur-md">
            {events.map((event, idx) => (
              <button
                key={event.id}
                onClick={() => setActiveTab(idx)}
                className={`px-10 py-4 transition-all relative ${
                  activeTab === idx
                    ? "text-black"
                    : "text-amber-500/50 hover:text-amber-500"
                }`}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 bg-amber-500"
                  />
                )}
                <span className="relative z-10 text-sm font-black tracking-widest uppercase">
                  {event.id}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* --- CORE GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: MISSION BRIEF & BOUNTY */}
          <div className="lg:col-span-4 space-y-8">
            <section className="bg-amber-500/5 border-l-4 border-amber-500 p-8 rounded-r-2xl">
              <h3 className="text-sm font-bold text-amber-500 uppercase mb-4 flex items-center gap-2">
                <Globe className="w-4 h-4" /> 01_System_Objective
              </h3>
              <p className="text-sm leading-relaxed text-gray-300 italic mb-6">
                "{events[activeTab].objective}"
              </p>
              <div className="flex items-center gap-2 text-[12px] text-amber-500/60 uppercase tracking-widest">
                Target: {events[activeTab].audience}
              </div>
            </section>

            {/* PRIZE POOL MODULE */}
            <section className="p-6 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Trophy className="w-20 h-20 text-amber-500" />
              </div>
              <h3 className="text-[14px] font-black text-amber-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Zap className="w-3 h-3" /> Bounty_Protocol
              </h3>
              <div className="space-y-4">
                {events[activeTab].prizes.map((p, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-end border-b border-white/5 pb-2"
                  >
                    <span className="text-[13px] text-gray-500 uppercase italic font-bold">
                      {p.rank}
                    </span>
                    <span className="text-xl font-black text-white italic">
                      ₹{p.amount}
                    </span>
                  </div>
                ))}
                <div className="pt-2 flex justify-between items-center text-amber-500">
                  <span className="text-[11px] font-bold uppercase">
                    Combined Allocation
                  </span>
                  <span className="text-md font-black">₹18,000 Total</span>
                </div>
              </div>
            </section>

            <button
              onClick={() =>
                router.push(
                  `/present/registration?event=${activeTab === 0 ? "sa" : "av"}`,
                )
              }
              className="w-full group relative overflow-hidden bg-amber-500 py-6 rounded-sm transition-transform active:scale-95 shadow-[0_0_30px_rgba(245,158,11,0.2)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="relative flex items-center justify-center gap-3 text-black font-black uppercase tracking-[0.4em] text-sm">
                Initiate_Registration <ExternalLink className="w-5 h-5" />
              </div>
            </button>
          </div>

          {/* MIDDLE: DEPLOYMENT PHASES & COMPLIANCE */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative">
              <h3 className="text-xs font-bold text-amber-500 uppercase mb-8 flex items-center gap-2">
                <Settings className="w-4 h-4" /> 02_Execution_Roadmap
              </h3>

              <div className="space-y-12 relative">
                <div className="absolute left-2.75 top-2 bottom-2 w-px bg-amber-500/20 border-dashed border-l" />

                {events[activeTab].rounds.map((round, i) => (
                  <div key={i} className="relative pl-12">
                    <div className="absolute left-0 top-0 w-5.5 h-5.5 bg-black border-2 border-amber-500 rotate-45 flex items-center justify-center z-10">
                      <span className="text-[12px] text-amber-500 -rotate-45 font-black">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[11px] font-bold bg-amber-500/20 text-amber-500 px-2 py-0.5 uppercase tracking-tighter">
                        {round.type}
                      </span>
                      <h4 className="text-white font-black uppercase text-base tracking-tighter">
                        {round.name}
                      </h4>
                    </div>
                    <div className="bg-white/5 border border-white/5 p-6 rounded-br-3xl rounded-tl-xl backdrop-blur-sm group hover:border-amber-500/30 transition-colors">
                      <div className="flex gap-3 mb-4 text-amber-200/90 italic">
                        <FileText className="w-4 h-4 shrink-0" />
                        <p className="text-[11px] uppercase font-bold leading-tight">
                          Task: {round.task}
                        </p>
                      </div>
                      <p className="text-[12px] text-gray-500 leading-relaxed uppercase tracking-wide border-t border-white/5 pt-4">
                        {round.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RULES & COMPLIANCE SECTION */}
            <section className="bg-black/60 border border-amber-500/20 rounded-2xl p-6">
              <h3 className="text-[12px] font-black text-amber-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Compliance_Protocol
              </h3>
              <ul className="grid grid-cols-1 gap-3 mb-4">
                {events[activeTab].rules.map((rule, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[12px] text-gray-400 leading-tight uppercase"
                  >
                    <span className="text-amber-500">▶</span> {rule}
                  </li>
                ))}
              </ul>
              <Link
                href={events[activeTab].href}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Rules
              </Link>
            </section>
          </div>

          {/* RIGHT: SCHEMATICS & TECH STACK */}
          <div className="lg:col-span-3 space-y-6">
            <div className="p-8 bg-black/40 border border-white/10 rounded-3xl h-full flex flex-col relative overflow-hidden">
              <div className="absolute -right-10 top-20 opacity-5 rotate-12">
                <Microchip className="w-64 h-64 text-amber-500" />
              </div>

              <div className="flex items-center gap-2 mb-8 relative">
                <Terminal className="w-5 h-5 text-amber-500" />
                <h3 className="text-xs font-bold text-white uppercase tracking-widest">
                  Compiler_Stack
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-3 relative">
                {events[activeTab].software.map((tech, i) => (
                  <div
                    key={i}
                    className="group flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-amber-500/10 hover:border-amber-500/30 transition-all"
                  >
                    <span className="text-[12px] text-gray-300 font-black uppercase group-hover:text-amber-500 transition-colors">
                      {tech}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                  </div>
                ))}
              </div>

              {/* JUDGING SUMMARY CIRCLE */}
              <div className="mt-12 space-y-4 relative">
                <div className="text-[11px] text-amber-500/60 uppercase font-black border-b border-amber-500/20 pb-2">
                  Scoring_Matrix
                </div>
                <div className="space-y-4">
                  {events[activeTab].judging.map((j, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-[12px] font-bold uppercase">
                        <span className="text-gray-400 tracking-tighter">
                          {j.label}
                        </span>
                        <span className="text-amber-500">{j.weight}</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: j.weight }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="h-full bg-amber-500/60"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-8 flex items-center justify-center">
                <div className="text-center p-4 border border-white/5 rounded-xl bg-white/5 w-full">
                  <div className="text-[9px] text-gray-500 uppercase mb-1 tracking-widest">
                    Deployment_Mode
                  </div>
                  <div className="text-xs text-white font-black uppercase italic">
                    OFFLINE [IIT INDORE]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- DYNAMIC FOOTER --- */}
        <div className="border-t border-amber-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8 text-[10px] text-amber-500/40 font-black uppercase tracking-[0.3em]">
            <span>Status: Optimal</span>
            <span>Latency: 14ms</span>
            <span>Version: Ingenium_OS</span>
          </div>
          <div className="flex gap-4">
            <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-amber-500/40 hover:text-amber-500 transition-colors cursor-pointer">
              <Globe className="w-4 h-4" />
            </div>
            <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-amber-500/40 hover:text-amber-500 transition-colors cursor-pointer">
              <Activity className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Utility icon
function Activity(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
