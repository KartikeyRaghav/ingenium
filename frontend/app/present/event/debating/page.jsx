"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Users,
  Scale,
  Mic2,
  BookOpen,
  ShieldCheck,
  Trophy,
  Activity,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AsianParliamentaryDebatePS() {
  const [activePhase, setActivePhase] = useState(0);
  const router = useRouter();

  const competitionData = {
    title: "Asian Parliamentary Debate",
    org: "Debating Society, IIT Indore",
    format: "Asian Parliamentary (3v3)",
    mode: "Offline",
    prizes: {
      first: "10,000",
      second: "5,000",
      third: "3,000",
      total: "18,000",
    },
    phases: [
      {
        id: "PRELIM",
        title: "Preliminary Rounds",
        detail: "16-team competition across four distinct rounds of debating.",
      },
      {
        id: "SEMI",
        title: "Semi-Finals",
        detail:
          "Top four teams qualify based on total wins and speaker scores.",
      },
      {
        id: "FINAL",
        title: "Grand Finals",
        detail:
          "The ultimate clash between semi-final winners to declare the Champion.",
      },
    ],
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-mono p-4 md:p-8 overflow-hidden bg-black/30">
      {/* Legislative Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-blue-500" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-blue-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- DIPLOMATIC HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-blue-500/20 pb-8">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-blue-400 mb-4"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.5em] uppercase font-bold">
                Return to Events
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">
              ASIAN <span className="text-blue-500">PARLIAMENTARY</span> DEBATE
            </h1>
            <p className="text-[10px] text-blue-400/60 mt-2 tracking-[0.3em] uppercase">
              Intellectual & Cultural Synthesis
            </p>
          </div>

          <div className="mt-6 lg:mt-0 flex flex-col items-end gap-6">
            <div className="flex gap-4">
              <StatNode
                icon={<Users />}
                label="Team Structure"
                value="3 Speakers"
              />
              <StatNode icon={<Mic2 />} label="Format" value="APD (3v3)" />
              <StatNode icon={<Activity />} label="Status" value="Offline" />
            </div>
            {/* Primary Registration Button */}
            <button
              onClick={() => router.push(`/present/registration?event=apd`)}
              className="group relative px-8 py-3 bg-blue-600 hover:bg-blue-500 transition-all rounded-sm overflow-hidden"
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
          {/* --- MISSION BRIEFING --- */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-[10px] text-blue-500 uppercase tracking-widest mb-4 font-bold">
              Operational_Context
            </h3>
            <div className="p-6 bg-blue-900/10 border border-blue-500/20 rounded-2xl backdrop-blur-md">
              <p className="text-sm leading-relaxed text-blue-100/80 mb-6 italic border-l-2 border-blue-500 pl-4">
                "Fostering critical thinking and structured argumentation
                through collaborative reasoning and policy analysis."
              </p>
              <div className="space-y-4">
                <ObjectiveItem text="Promote analytical reasoning" />
                <ObjectiveItem text="Structured articulation" />
                <ObjectiveItem text="Inter-institution collaboration" />
              </div>
            </div>

            {/* Motion Domains */}
            <div className="p-6 bg-black/40 border border-white/5 rounded-2xl">
              <h4 className="text-[10px] text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
                <BookOpen className="w-3 h-3" /> Motion_Spectrum
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Public Policy",
                  "Ethics",
                  "Technology",
                  "Socio-Political",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] bg-white/5 px-2 py-1 rounded border border-white/10 text-blue-300 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={"/PS/APD.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Rules
              </Link>
            </div>
          </div>

          {/* --- TOURNAMENT MATRIX --- */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Scale className="w-48 h-48" />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-black text-white uppercase tracking-widest mb-10 flex items-center gap-3">
                  <MessageSquare className="text-blue-500" /> Progression_Stages
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                  {competitionData.phases.map((phase, idx) => (
                    <button
                      key={phase.id}
                      onClick={() => setActivePhase(idx)}
                      className={`p-4 text-left border rounded-xl transition-all ${activePhase === idx ? "bg-blue-500/10 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]" : "bg-black/20 border-white/5 hover:border-white/20"}`}
                    >
                      <div className="text-[8px] text-blue-500 mb-1 font-bold">
                        PHASE_0{idx + 1}
                      </div>
                      <div className="text-xs font-bold text-white uppercase">
                        {phase.title}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="p-6 bg-blue-500/5 border-l-2 border-blue-500 rounded-r-xl">
                  <p className="text-sm text-blue-100/80 leading-relaxed italic">
                    {competitionData.phases[activePhase].detail}
                  </p>
                </div>
              </div>

              {/* Compliance & Adjudication */}
              <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                  <ShieldCheck className="w-8 h-8 text-blue-500/40" />
                  <div>
                    <div className="text-[10px] text-blue-500 uppercase font-bold tracking-widest">
                      Adjudication_Standard
                    </div>
                    <div className="text-[11px] text-white uppercase italic">
                      UADC 2025 Handbook
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  <EvaluationMetric label="Logical Consistency" />
                  <EvaluationMetric label="Strategic Teamwork" />
                  <EvaluationMetric label="Rebuttal Impact" />
                  <EvaluationMetric label="Argument Depth" />
                </div>
              </div>
            </div>

            {/* --- BOUNTY REGISTRY --- */}
            <div className="bg-blue-500/5 border border-blue-500/20 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Trophy className="w-32 h-32" />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-black text-white uppercase tracking-[0.2em]">
                    Bounty_Registry
                  </h3>
                  <p className="text-[10px] text-blue-500 uppercase tracking-widest italic font-bold">
                    Intellectual_Synthesis_Rewards
                  </p>
                </div>

                <div className="flex gap-8">
                  <BountyNode
                    rank="ALPHA"
                    amount={competitionData.prizes.first}
                    label="Champions"
                  />
                  <BountyNode
                    rank="BETA"
                    amount={competitionData.prizes.second}
                    label="Runners Up"
                  />
                  <BountyNode
                    rank="GAMMA"
                    amount={competitionData.prizes.third}
                    label="Finalists"
                  />
                </div>

                <div className="px-6 py-4 bg-blue-500/10 border border-blue-500/30 rounded-xl text-center min-w-35">
                  <span className="text-[9px] text-blue-500 uppercase block font-bold mb-1">
                    Aggregate Pool
                  </span>
                  <span className="text-2xl font-black text-blue-400 italic">
                    ₹18,000
                  </span>
                </div>
              </div>
            </div>

            {/* Secondary CTA */}
            <div className="flex justify-center pt-4">
              <button
                onClick={() => router.push(`/present/registration?event=apd`)}
                className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.4em] hover:text-white transition-colors flex items-center gap-2 group"
              >
                Secure your slot in the registry{" "}
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Internal Logic Components ---

function StatNode({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg">
      <div className="text-blue-500">{icon}</div>
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
      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
      <span className="group-hover:text-white transition-colors">{text}</span>
      <span className="text-[7px] text-blue-500/30 font-mono"></span>
    </div>
  );
}

function EvaluationMetric({ label }) {
  return (
    <div className="flex items-center gap-2 text-[9px] text-white/40 uppercase font-bold group">
      <ChevronRight className="w-2 h-2 text-blue-500 group-hover:translate-x-1 transition-transform" />
      <span className="group-hover:text-white transition-colors">{label}</span>
      <span className="text-[7px] text-blue-500/30"></span>
    </div>
  );
}

function BountyNode({ rank, amount, label }) {
  return (
    <div className="text-center group">
      <div className="text-[8px] text-blue-500 uppercase mb-1 font-bold tracking-tighter">
        {rank}_TIER
      </div>
      <div className="text-xl font-black text-white italic group-hover:scale-110 transition-transform">
        ₹{amount}
      </div>
      <div className="text-[7px] text-blue-400/40 uppercase mt-1 font-bold">
        {label}
      </div>
    </div>
  );
}
