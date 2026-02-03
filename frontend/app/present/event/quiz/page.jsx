"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Zap,
  HelpCircle,
  Users,
  Timer,
  Globe2,
  Trophy,
  Activity,
  Network,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function QuizPS() {
  const router = useRouter();

  const competitionData = {
    title: "Ingenius Quiz '26",
    sub: "Quizzing Faceoff @ Ingenium 3.0",
    org: "Quiz Club, IIT Indore",
    participation: "Open-for-all",
    mode: "Offline",
    prizes: {
      first: "10,000",
      second: "5,000",
      third: "3,000",
      total: "18,000",
    },
  };

  const knowledgeDomains = [
    "Current Affairs",
    "History",
    "Science",
    "Culture",
    "Sports",
    "Arts",
  ];

  return (
    <div className="relative min-h-screen text-amber-100 font-mono p-4 md:p-8 overflow-hidden bg-black/30">
      {/* Neural Network Background Decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full">
          <motion.circle
            cx="50%"
            cy="50%"
            r="200"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1"
            strokeDasharray="5,5"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="50%"
            cy="50%"
            r="300"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1"
            strokeDasharray="10,5"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- INTELLECTUAL HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-amber-500/20 pb-8">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-amber-500 mb-4"
            >
              <ChevronLeft className="w-4 h-4 animate-pulse" />
              <span className="text-[10px] tracking-[0.5em] uppercase font-bold">
                Return to Events
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">
              INGENIUS <span className="text-amber-500">QUIZ</span> '26
            </h1>
            <p className="text-[10px] text-amber-500/60 mt-2 tracking-[0.3em] uppercase">
              {competitionData.sub}
            </p>
          </div>

          <div className="mt-6 lg:mt-0 flex flex-col items-end gap-6">
            <div className="flex gap-4">
              <StatNode
                icon={<Users />}
                label="Audience"
                value={competitionData.participation}
              />
              <StatNode
                icon={<Globe2 />}
                label="Host"
                value="Renowned Quizmaster"
              />
              <StatNode
                icon={<Activity />}
                label="Mode"
                value={competitionData.mode}
              />
            </div>
            {/* Primary Registration Button */}
            <button
              onClick={() => router.push(`/present/registration?event=quiz`)}
              className="group relative px-8 py-3 bg-amber-600 hover:bg-amber-500 transition-all rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-white/10 -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <div className="relative flex items-center gap-3">
                <span className="text-xs font-black tracking-[0.2em] text-white uppercase">
                  Register
                </span>
                <ExternalLink className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- COMPETITION BRIEFING --- */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-[10px] text-amber-500 uppercase tracking-widest mb-4 font-bold">
              Cognitive_Context
            </h3>
            <div className="p-6 bg-amber-900/10 border border-amber-500/20 rounded-2xl backdrop-blur-xl">
              <p className="text-sm leading-relaxed text-amber-100/80 mb-6 italic border-l-2 border-amber-500 pl-4">
                "Beyond factual recall, emphasizing logical thinking, lateral
                connections, and informed engagement with the world."
              </p>
              <div className="space-y-4">
                <ObjectiveItem text="Competitive intellectual activity" />
                <ObjectiveItem text="Tests lateral connections & speed" />
                <ObjectiveItem text="Fosters curiosity & teamwork" />
              </div>
            </div>

            {/* Knowledge Spectrum */}
            <div className="p-6 bg-black/40 border border-white/5 rounded-2xl">
              <h4 className="text-[10px] text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
                <Network className="w-3 h-3" /> Data_Sectors
              </h4>
              <div className="flex flex-wrap gap-2">
                {knowledgeDomains.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] bg-white/5 px-2 py-1 rounded border border-white/10 text-amber-300 uppercase"
                  >
                    {" "}
                    {tag}
                  </span>
                ))}
                <span className="text-[9px] bg-white/5 px-2 py-1 rounded border border-white/10 text-amber-300 uppercase">
                  General Knowledge
                </span>
              </div>
              <div className="mt-4 text-[7px] text-amber-500/40 italic uppercase tracking-tighter"></div>
            </div>
          </div>

          {/* --- SYSTEM LOGIC --- */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <HelpCircle className="w-48 h-48" />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-black text-white uppercase tracking-widest mb-8 flex items-center gap-3">
                  <Zap className="text-amber-500" /> Operational_Parameters
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="p-5 bg-amber-500/5 border-l-2 border-amber-500 rounded-r-xl">
                    <h4 className="text-[10px] text-amber-500 uppercase font-bold mb-2">
                      Protocol_Status
                    </h4>
                    <p className="text-xs text-amber-100/70 leading-relaxed italic">
                      Specific rules, format, and structure will be communicated
                      to registered units via encrypted channels.
                    </p>
                  </div>
                  <div className="flex flex-col justify-center gap-4">
                    <MetricNode
                      icon={<Timer />}
                      label="Speed"
                      value="Optimized"
                    />
                    <MetricNode
                      icon={<Lightbulb />}
                      label="Teamwork"
                      value="Mandatory"
                    />
                  </div>
                </div>
              </div>

              {/* Event Metadata */}
              <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                  <Zap className="w-8 h-8 text-amber-500/40 animate-pulse" />
                  <div>
                    <div className="text-[10px] text-amber-500 uppercase font-bold tracking-widest">
                      Logic_Framework
                    </div>
                    <div className="text-[11px] text-white uppercase italic">
                      Lateral Connections & Recall
                    </div>
                  </div>
                </div>
                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter max-w-xs text-right">
                  Hosted by a renowned Indian Quizmaster closer to the event
                  launch.
                </div>
              </div>
            </div>

            {/* --- BOUNTY REGISTRY --- */}
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Trophy className="w-32 h-32" />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-black text-white uppercase tracking-[0.2em]">
                    Bounty_Registry
                  </h3>
                  <p className="text-[10px] text-amber-500 uppercase tracking-widest italic font-bold">
                    Synaptic_Excellence_Rewards
                  </p>
                </div>

                <div className="flex gap-8">
                  <BountyNode
                    rank="ALPHA"
                    amount={competitionData.prizes.first}
                    label="Grand Winner"
                  />
                  <BountyNode
                    rank="BETA"
                    amount={competitionData.prizes.second}
                    label="Runner Up"
                  />
                  <BountyNode
                    rank="GAMMA"
                    amount={competitionData.prizes.third}
                    label="Second Runner Up"
                  />
                </div>

                <div className="px-6 py-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-center min-w-35">
                  <span className="text-[9px] text-amber-500 uppercase block font-bold mb-1">
                    Aggregate Pool
                  </span>
                  <span className="text-2xl font-black text-amber-400 italic">
                    ₹18,000
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary CTA */}
            <div className="flex justify-center pt-4">
              <button
                onClick={() => router.push(`/present/registration?event=quiz`)}
                className="text-[10px] font-bold text-amber-400 uppercase tracking-[0.4em] hover:text-white transition-colors flex items-center gap-2 group"
              >
                Sync your unit with the neural registry{" "}
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Internal Viewport Components ---

function StatNode({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg">
      <div className="text-amber-500">{icon}</div>
      <div>
        <span className="text-[8px] text-gray-500 uppercase block leading-none mb-1 font-bold">
          {label}
        </span>
        <span className="text-xs font-bold text-white tracking-tighter uppercase">
          {value}
        </span>
      </div>
    </div>
  );
}

function ObjectiveItem({ text }) {
  return (
    <div className="flex gap-3 items-center text-[10px] uppercase font-bold text-gray-400 group">
      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 group-hover:scale-150 transition-transform" />
      <span className="group-hover:text-white transition-colors">{text}</span>
      <span className="text-[7px] text-amber-500/30 font-mono"></span>
    </div>
  );
}

function MetricNode({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="text-amber-500 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <span className="text-[8px] text-gray-500 uppercase block font-bold">
          {label}
        </span>
        <span className="text-xs font-black text-white uppercase italic">
          {value}
        </span>
      </div>
    </div>
  );
}

function BountyNode({ rank, amount, label }) {
  return (
    <div className="text-center group">
      <div className="text-[8px] text-amber-500 uppercase mb-1 font-bold tracking-tighter">
        {rank}_TIER
      </div>
      <div className="text-xl font-black text-white italic group-hover:scale-110 transition-transform">
        ₹{amount}
      </div>
      <div className="text-[7px] text-amber-400/40 uppercase mt-1 font-bold">
        {label}
      </div>
    </div>
  );
}
