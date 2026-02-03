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
  FileText,
  AlertTriangle,
  Scale,
  Monitor,
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
        "During monsoon season, IIT Indore experiences temporary surface water accumulation affecting drainage efficiency, pedestrian comfort, and vehicular mobility. Apply civil engineering principles to optimize campus accessibility.",
      tasks: [
        "Identify and map surface water accumulation locations.",
        "Analyze topography, drainage alignment, and runoff patterns.",
        "Evaluate impact on pedestrian and vehicular traffic.",
        "Propose sustainable engineering interventions for management.",
      ],
      rules: [
        "Teams of up to 4 members; individual entry allowed.",
        "Interdisciplinary teams are encouraged.",
        "Non-IIT Indore students will be assigned a campus PoC.",
        "Stage 1: 1-2 page Abstract; Stage 2: Max 15-page PDF report.",
      ],
      prizes: { first: "7000", second: "5000", third: "3000", total: "15,000" },
      scoring: [
        { label: "Technical Depth", val: "20%" },
        { label: "Innovation", val: "15%" },
        { label: "Sustainability", val: "15%" },
        { label: "Problem Understanding", val: "15%" },
        { label: "Cost-Effectiveness", val: "10%" },
        { label: "Practicality & Implementability", val: "10%" },
        { label: "Clarity of Communication", val: "10%" },
      ],
    },
    {
      id: 2,
      title: "Open Ground Utilization",
      subtitle: "Hostel Cluster Strategic Planning",
      icon: <Layout className="w-5 h-5" />,
      context:
        "IIT Indore hostel clusters have open spaces with potential for enhancing student life and sustainability. Focus on scientific planning to create future-ready, functional utilization.",
      tasks: [
        "Analyze ground spaces for area, accessibility, and current usage.",
        "Identify social and recreational needs of residents.",
        "Propose layout including green areas and pathways.",
        "Ensure design adaptability and ease of maintenance.",
      ],
      rules: [
        "Teams of at least two members.",
        "Open to all backgrounds; no prior biology experience required.",
        "Preparation Phase: Internet allowed; Presentation/Q&A: Prohibited.",
        "Plagiarism leads to immediate disqualification.",
      ],
      prizes: { first: "7000", second: "5000", third: "3000", total: "15,000" },
      scoring: [
        { label: "Innovation", val: "25%" },
        { label: "Feasibility", val: "25%" },
        { label: "Problem Understanding", val: "20%" },
        { label: "Teamwork & Q&A", val: "15%" },
        { label: "Presentation", val: "15%" },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-black/30 text-emerald-100 font-mono p-4 md:p-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-b border-emerald-500/20 pb-8">
          <div>
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-emerald-500 mb-4 hover:opacity-70 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.4em] uppercase">
                Return to Events
              </span>
            </button>
            <h1 className="text-6xl font-black tracking-tighter text-white">
              CON<span className="text-emerald-500">CASTLE</span>{" "}
              <span className="text-outline">2026</span>
            </h1>
            <p className="text-[10px] text-emerald-500/60 mt-4 tracking-[0.2em] uppercase italic">
              Official Competition of Concreate Club | Ingenium 3.0 IIT Indore
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex gap-4">
            <StatBox
              label="Format"
              value="Online Competition"
              icon={<Monitor className="w-3 h-3" />}
            />
            <StatBox
              label="Access"
              value="Open to UG/PG"
              icon={<Users className="w-3 h-3" />}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- SIDEBAR --- */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <p className="text-[10px] text-emerald-500/50 uppercase tracking-widest ml-2 italic">
                Select Active Module
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
                    <span className="text-[10px] font-bold text-emerald-500 tracking-tighter">
                      PS_MOD_0{ps.id}
                    </span>
                    <div
                      className={
                        activeProblem === idx
                          ? "text-emerald-400"
                          : "text-emerald-900"
                      }
                    >
                      {ps.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-2 leading-tight uppercase tracking-tighter">
                    {ps.title}
                  </h3>
                </button>
              ))}
            </div>

            {/* Judging Matrix */}
            <div className="p-6 bg-black/60 border-l-2 border-emerald-500 rounded-r-xl">
              <h4 className="text-[10px] text-emerald-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Scale className="w-3 h-3" /> Evaluation_Matrix
              </h4>
              <div className="space-y-3">
                {problemStatements[activeProblem].scoring.map((s, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-[11px]"
                  >
                    <span className="text-gray-400 uppercase">{s.label}</span>
                    <span className="text-emerald-500 font-bold tracking-widest">
                      {s.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Note */}
            <div className="p-5 bg-red-500/5 border border-red-500/20 rounded-xl">
              <h4 className="text-[10px] text-red-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                <AlertTriangle className="w-3 h-3" /> Critical_Compliance
              </h4>
              <p className="text-[9px] text-gray-500 leading-relaxed italic">
                Plagiarism or uncustomized AI-generated content leads to
                immediate disqualification. Late submissions are not accepted.
              </p>
            </div>
          </div>

          {/* --- MAIN CONTENT --- */}
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProblem}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-black/60 border border-emerald-500/20 rounded-3xl overflow-hidden backdrop-blur-md"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                    <div>
                      <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-1 leading-none">
                        {problemStatements[activeProblem].title}
                      </h2>
                      <p className="text-xs text-emerald-500 font-bold tracking-[0.3em] uppercase opacity-70">
                        {problemStatements[activeProblem].subtitle}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        router.push(
                          `/present/registration?event=${activeProblem === 0 ? "monsoon_water" : "open_ground"}`,
                        )
                      }
                      className="flex items-center gap-3 bg-emerald-500 text-black px-6 py-4 font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                    >
                      Register Now
                      <Zap className="w-4 h-4 fill-current" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-8">
                    <section>
                      <label className="text-[10px] text-emerald-500 uppercase font-bold block mb-3 tracking-widest opacity-50">
                        Problem_Briefing
                      </label>
                      <p className="text-sm leading-relaxed text-emerald-50/80 bg-emerald-500/5 p-5 border-l-4 border-emerald-500/50 rounded-r-xl italic">
                        "{problemStatements[activeProblem].context}"
                      </p>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <section>
                        <label className="text-[10px] text-emerald-500 uppercase font-bold block mb-4 tracking-widest opacity-50 items-center gap-2">
                          <Hexagon className="w-3 h-3" /> Tasks_&_Objectives
                        </label>
                        <ul className="space-y-3">
                          {problemStatements[activeProblem].tasks.map(
                            (task, i) => (
                              <li
                                key={i}
                                className="flex gap-3 text-[11px] text-gray-400 leading-snug"
                              >
                                <span className="text-emerald-500 font-black tracking-tighter">
                                  0{i + 1}
                                </span>
                                {task}
                              </li>
                            ),
                          )}
                        </ul>
                      </section>

                      <section>
                        <label className="text-[10px] text-emerald-500 uppercase font-bold block mb-4 tracking-widest opacity-50 items-center gap-2">
                          <FileText className="w-3 h-3" /> Participation_Rules
                        </label>
                        <ul className="space-y-3">
                          {problemStatements[activeProblem].rules.map(
                            (rule, i) => (
                              <li
                                key={i}
                                className="flex gap-3 text-[11px] text-gray-500 italic leading-snug border-b border-white/5 pb-2"
                              >
                                {rule}
                              </li>
                            ),
                          )}
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* PRIZES & CONTACTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-500/10 border border-emerald-500/30 p-8 rounded-3xl relative overflow-hidden group">
                <Trophy className="absolute -right-6 -bottom-6 w-32 h-32 text-emerald-500/5 -rotate-12 group-hover:scale-110 transition-transform duration-700" />
                <h4 className="text-xs font-black text-white uppercase mb-6 tracking-[0.3em]">
                  Reward_Manifest
                </h4>
                <div className="grid grid-cols-3 gap-2 relative z-10">
                  <PrizeTier
                    rank="1ST"
                    amount={problemStatements[activeProblem].prizes.first}
                  />
                  <PrizeTier
                    rank="2ND"
                    amount={problemStatements[activeProblem].prizes.second}
                  />
                  <PrizeTier
                    rank="3RD"
                    amount={problemStatements[activeProblem].prizes.third}
                  />
                </div>
                <div className="mt-6 flex justify-between items-center border-t border-emerald-500/20 pt-4">
                  <span className="text-[10px] text-emerald-500/60 uppercase">
                    Total Pool Allocation
                  </span>
                  <span className="text-2xl font-black text-emerald-400 tracking-tighter">
                    ₹{problemStatements[activeProblem].prizes.total}
                  </span>
                </div>
              </div>

              <div className="bg-black/40 border border-emerald-500/10 p-8 rounded-3xl flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-black text-white uppercase mb-6 tracking-[0.3em] flex items-center gap-2">
                    <Users className="w-4 h-4 text-emerald-500" /> Command_Core
                  </h4>
                  <div className="space-y-3">
                    <ContactInfo name="Rajnish Bairwa" role="Club Head" />
                    <ContactInfo name="Anurag Sinha" role="Finance Head" />
                    <ContactInfo name="Ashutosh Diyewar" role="Co-Head" />
                  </div>
                </div>
                <p className="text-[8px] text-gray-600 mt-6 uppercase tracking-widest text-center border border-white/5 py-2">
                  Rules subject to change at organizers' discretion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatBox({ label, value, icon }) {
  return (
    <div className="px-6 py-3 bg-emerald-500/5 border border-emerald-500/20 rounded-xl flex items-center gap-3">
      <div className="text-emerald-500 opacity-50">{icon}</div>
      <div>
        <span className="block text-[8px] text-emerald-500/50 uppercase font-bold tracking-widest">
          {label}
        </span>
        <span className="text-[10px] text-white font-bold uppercase">
          {value}
        </span>
      </div>
    </div>
  );
}

function PrizeTier({ rank, amount }) {
  return (
    <div className="text-center p-2 bg-black/40 border border-emerald-500/10 rounded-lg">
      <div className="text-[8px] text-emerald-500/50 mb-1">{rank}</div>
      <div className="text-sm font-black text-white">₹{amount}</div>
    </div>
  );
}

function ContactInfo({ name, role }) {
  return (
    <div className="flex justify-between items-center border-b border-white/5 pb-2">
      <span className="text-[10px] text-gray-300 uppercase tracking-tighter">
        {name}
      </span>
      <span className="text-[9px] text-emerald-500/60 font-bold uppercase italic">
        {role}
      </span>
    </div>
  );
}
