"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplets,
  Layout,
  Trophy,
  ChevronLeft,
  Hexagon,
  Users,
  Zap,
  Calendar,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ConCastlePS() {
  const [activeProblem, setActiveProblem] = useState(0);
  const router = useRouter();

  const problemStatements = [
    {
      id: 1,
      title: "Monsoon Water Management",
      subtitle: "Hydrological Mobility Planning",
      icon: <Droplets className="w-5 h-5" />,
      context:
        "Analyze surface runoff behavior, drainage efficiency, and pedestrian-vehicular movement at IIT Indore during high rainfall conditions.",
      requirements: [
        "Map campus zones with surface water accumulation.",
        "Analyze topography, drainage alignment, and runoff patterns.",
        "Evaluate influence on pedestrian comfort and vehicular movement.",
        "Propose sustainable engineering interventions for stormwater management.",
      ],
      prizes: "Part of 20K Prize Pool",
    },
    {
      id: 2,
      title: "Open Ground Utilization",
      subtitle: "Hostel Cluster Strategic Planning",
      icon: <Layout className="w-5 h-5" />,
      context:
        "Envision structured, inclusive, and future-ready utilization of vacant spaces between hostel clusters at IIT Indore.",
      requirements: [
        "Analyze existing ground spaces for accessibility and usage.",
        "Identify social and functional requirements of residents.",
        "Propose layouts for recreation, green spaces, and pathways.",
        "Ensure design emphasizes sustainability and adaptability.",
      ],
      prizes: "Part of 20K Prize Pool",
    },
  ];

  return (
    <div className="relative min-h-screen text-emerald-100 font-mono p-4 md:p-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- HUD HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-emerald-500/20 pb-8">
          <div>
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-emerald-500 mb-4 hover:bg-emerald-500/10 p-1 rounded transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.4em] uppercase">
                System.Back()
              </span>
            </button>
            <h1 className="text-6xl font-black tracking-tighter text-white">
              CON<span className="text-emerald-500">CASTLE</span>{" "}
              <span className="text-outline">2026</span>
            </h1>
            <p className="text-[10px] text-emerald-500/60 mt-4 tracking-[0.2em] uppercase italic max-w-md">
              Official Technical Event of Concreate Club, Civil Engineering
              Dept, IIT Indore.
            </p>
          </div>

          <div className="mt-8 md:mt-0 grid grid-cols-2 gap-3">
            <StatBox label="Mode" value="Online" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- LEFT NAVIGATION --- */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <p className="text-[10px] text-emerald-500/50 uppercase tracking-widest ml-2">
                Select Objective
              </p>
              {problemStatements.map((ps, idx) => (
                <button
                  key={ps.id}
                  onClick={() => setActiveProblem(idx)}
                  className={`w-full p-5 text-left rounded-br-3xl border transition-all duration-300 group relative ${
                    activeProblem === idx
                      ? "bg-emerald-500/20 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.1)]"
                      : "bg-black/40 border-emerald-500/10 hover:border-emerald-500/40"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-emerald-500">
                      0{ps.id}
                    </span>
                    <div
                      className={`${activeProblem === idx ? "text-emerald-400" : "text-emerald-900"}`}
                    >
                      {ps.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-2 leading-tight uppercase">
                    {ps.title}
                  </h3>
                </button>
              ))}
            </div>

            <div className="p-6 bg-black/60 border-l-2 border-emerald-500 rounded-r-xl">
              <h4 className="text-[10px] text-emerald-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Calendar className="w-3 h-3" /> Operation_Flow
              </h4>
              <div className="space-y-4">
                <TimelineStep step="01" label="Registration" />
                <TimelineStep step="02" label="Problem Release & Abstract" />
                <TimelineStep step="03" label="Final Evaluation" />
              </div>
            </div>

            <div className="p-6 bg-emerald-950/20 border border-emerald-500/10 rounded-xl">
              <h4 className="text-[10px] text-emerald-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <ShieldCheck className="w-3 h-3" /> Judging_Parameters
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Technical Depth",
                  "Innovation",
                  "Execution",
                  "Presentation Impact",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* --- MAIN INTERFACE --- */}
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProblem}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="bg-black/60 border border-emerald-500/20 rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Visual Header */}
                <div className="h-2 bg-linear-to-r from-emerald-600 via-emerald-400 to-transparent" />

                <div className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                    <div>
                      <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-1">
                        {problemStatements[activeProblem].title}
                      </h2>
                      <p className="text-xs text-emerald-500 font-bold tracking-[0.3em] uppercase">
                        {problemStatements[activeProblem].subtitle}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        router.push(
                          `/present/registration?event=${activeProblem == 0 ? "monsoon_water" : "open_ground"}`,
                        )
                      }
                      className="flex items-center gap-3 bg-emerald-500 text-black px-6 py-3 font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors group"
                    >
                      Initialize Registration
                      <Zap className="w-4 h-4 fill-current group-hover:animate-pulse" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-8">
                    <section>
                      <label className="text-[10px] text-emerald-500/50 uppercase font-bold block mb-3 underline decoration-emerald-500/20 underline-offset-8">
                        Operational Context
                      </label>
                      <p className="text-sm leading-relaxed text-emerald-50/70 bg-emerald-500/5 p-4 border-r-2 border-emerald-500/30">
                        {problemStatements[activeProblem].context}
                      </p>
                    </section>

                    <section>
                      <label className="text-[10px] text-emerald-500/50 uppercase font-bold block mb-4">
                        Core Requirements
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {problemStatements[activeProblem].requirements.map(
                          (req, i) => (
                            <div
                              key={i}
                              className="flex gap-3 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-emerald-500/20 transition-all group"
                            >
                              <Hexagon className="w-4 h-4 text-emerald-500 shrink-0 group-hover:rotate-90 transition-transform" />
                              <span className="text-[11px] text-gray-400 leading-snug">
                                {req}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </section>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-2xl relative overflow-hidden">
                <Trophy className="absolute -right-4 -bottom-4 w-24 h-24 text-emerald-500/10 -rotate-12" />
                <h4 className="text-xs font-bold text-white uppercase mb-4 tracking-widest">
                  Bounty Program
                </h4>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-black text-emerald-400">
                    20K
                  </span>
                  <span className="text-[10px] text-emerald-500/60 uppercase mb-1">
                    INR Total Prize Pool
                  </span>
                </div>
                <p className="text-[9px] text-gray-500 mt-2 italic">
                  + E-Certificates
                </p>
              </div>

              <div className="bg-black/40 border border-emerald-500/20 p-6 rounded-2xl">
                <h4 className="text-xs font-bold text-white uppercase mb-4 tracking-widest flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-500" /> Command Chain
                </h4>
                <div className="space-y-2">
                  <ContactInfo name="Rajnish Bairwa" role="Head" />
                  <ContactInfo name="Anurag Sinha" role="Finance Head" />
                  <ContactInfo name="Ashutosh Diyewar" role="Co-Head" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components

function StatBox({ label, value }) {
  return (
    <div className="px-4 py-2 bg-emerald-500/5 border border-emerald-500/20 rounded">
      <span className="block text-[8px] text-emerald-500/50 uppercase font-bold">
        {label}
      </span>
      <span className="text-[10px] text-white font-bold uppercase tracking-tighter">
        {value}
      </span>
    </div>
  );
}

function TimelineStep({ step, label }) {
  return (
    <div className="flex items-center gap-4 group">
      <span className="text-[10px] font-black text-emerald-500/40 group-hover:text-emerald-400 transition-colors">
        {step}
      </span>
      <div className="h-px w-4 bg-emerald-500/20" />
      <span className="text-[11px] text-gray-400 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

function ContactInfo({ name, role }) {
  return (
    <div className="flex justify-between items-center border-b border-white/5 pb-1 group hover:border-emerald-500/30 transition-colors">
      <span className="text-[10px] text-gray-400 uppercase group-hover:text-emerald-200">
        {name}
      </span>
      <span className="text-[9px] text-emerald-500/40 font-bold uppercase italic">
        {role}
      </span>
    </div>
  );
}
