"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Layers,
  Image as ImageIcon,
  Clock,
  AlertTriangle,
  Framer,
  History,
  ChevronLeft,
  FileArchive,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Award,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AlbumCoverPS() {
  const router = useRouter();

  const eventData = {
    title: "Album Cover Design",
    organizer: "Ingenium 3.0 - IIT Indore",
    club: "VLR",
    mode: "Online",
    duration: "3 Hours",
    teamSize: "Max 2 Members",
    specs: [
      { label: "Aspect Ratio", value: "1:1" },
      { label: "Resolution", value: "1080 x 1080 px" },
      { label: "Final Format", value: "PNG Only" },
      { label: "Software", value: "PS, AI, Affinity, etc." },
    ],
    prizes: {
      first: "5,000",
      second: "3,000",
      third: "2,000",
      total: "10,000",
    },
  };

  return (
    <div className="relative min-h-screen text-purple-100 font-mono p-4 md:p-8 bg-black/30 backdrop-blur-sm">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- HEADER BLOCK --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-purple-500/20 pb-8 gap-6">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-purple-400 hover:text-white transition-colors mb-4 group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] tracking-[0.5em] uppercase font-bold">
                Return to Events
              </span>
            </button>
            <div className="flex items-center gap-3">
              <Palette className="w-10 h-10 text-purple-500" />
              <div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic leading-none">
                  {eventData.title}
                </h1>
                <p className="text-[10px] text-purple-500/80 mt-2 tracking-[0.3em] uppercase font-bold">
                  {eventData.organizer} • {eventData.club}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <InfoCard
              icon={<Clock />}
              label="Duration"
              value={eventData.duration}
            />
            <HeaderTag
              icon={<Layers />}
              label="Team Limit"
              value={eventData.teamSize}
            />
            <HeaderTag
              icon={<ImageIcon />}
              label="Format"
              value={eventData.mode}
            />
            <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-black italic tracking-widest flex items-center gap-3 shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all hover:scale-105 active:scale-95">
              <Zap className="w-5 h-5 fill-current" /> REGISTER NOW
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- LEFT SIDEBAR: RULES & COMPLIANCE --- */}
          <div className="lg:col-span-4 space-y-6">
            <section className="bg-purple-950/20 border border-purple-500/10 rounded-2xl p-6">
              <h3 className="text-[10px] text-purple-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Team_Setup
              </h3>
              <div className="space-y-2 text-[11px] text-gray-400">
                <p>
                  • Must choose a unique{" "}
                  <span className="text-white">Team Name</span>
                </p>
              </div>
            </section>

            <section className="bg-black/40 border border-purple-500/10 rounded-2xl p-6">
              <h3 className="text-[10px] text-purple-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Framer className="w-4 h-4" /> Technical_Constraints
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {eventData.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-[10px] border-b border-purple-500/5 pb-2"
                  >
                    <span className="text-gray-500 uppercase">
                      {spec.label}
                    </span>
                    <span className="text-white font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="p-6 bg-red-950/20 border border-red-500/20 rounded-2xl">
              <h4 className="text-[10px] text-red-400 uppercase tracking-widest mb-4 flex items-center gap-2 font-bold">
                <AlertTriangle className="w-4 h-4" /> Critical_Compliances
              </h4>
              <div className="space-y-3">
                <RuleRow label="Generative AI" status="DISQUALIFICATION" />
                <RuleRow label="JPEG Files" status="FORBIDDEN" />
                <RuleRow label="Asset Crediting" status="MANDATORY" />
                <p className="text-[9px] text-red-300/70 leading-relaxed pt-2">
                  Use of Gen-AI in any form results in immediate
                  disqualification. Uncredited external assets will not be
                  considered.
                </p>
              </div>
            </section>
          </div>

          {/* --- MAIN CONTENT: WORKFLOW & PRIZES --- */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-black/40 border border-purple-500/20 rounded-3xl p-8 backdrop-blur-xl relative">
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-3">
                <History className="text-purple-500" /> Chrono-Submission
                Workflow
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Timeline */}
                <div className="space-y-6">
                  <h4 className="text-[10px] text-purple-500 uppercase tracking-widest">
                    Screenshot_Protocol
                  </h4>
                  <div className="space-y-4 relative">
                    <div className="absolute left-3 top-2 bottom-2 w-px bg-purple-500/20" />
                    {[
                      {
                        time: "Every 30 Mins",
                        desc: "Upload full-screen screenshot via Google Form 1",
                      },
                      {
                        time: "2.5 Hours",
                        desc: "Final submission link (Form 2) becomes active",
                      },
                      {
                        time: "System Time",
                        desc: "Must be visible in all progress captures",
                      },
                    ].map((step, i) => (
                      <div key={i} className="flex gap-4 relative z-10">
                        <div className="w-6 h-6 rounded-full bg-black border border-purple-500 flex items-center justify-center text-[10px] font-bold text-purple-500">
                          {i + 1}
                        </div>
                        <div className="text-[11px]">
                          <p className="text-white font-bold uppercase">
                            {step.time}
                          </p>
                          <p className="text-gray-500 uppercase">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                    <p className="text-[9px] text-red-400 font-bold uppercase mb-2">
                      Penalty Matrix{" "}
                    </p>
                    <div className="flex justify-between text-[10px] text-gray-400">
                      <span>Missing 1-3 Screenshots</span>
                      <span className="text-red-400">-5 POINTS</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                      <span>Missing 3+ Screenshots</span>
                      <span className="text-red-400">-10 POINTS</span>
                    </div>
                  </div>
                </div>

                {/* ZIP Pack */}
                <div className="space-y-4">
                  <h4 className="text-[10px] text-purple-500 uppercase tracking-widest">
                    Archive_Structure
                  </h4>
                  <div className="bg-purple-950/20 p-5 rounded-2xl border border-purple-500/10">
                    <div className="flex items-center gap-2 mb-4">
                      <FileArchive className="w-4 h-4 text-purple-400" />
                      <span className="text-[11px] font-bold text-purple-400">
                        TEAMNAME_ID.zip
                      </span>
                    </div>
                    <ul className="space-y-3 text-[10px] uppercase">
                      <li className="flex items-start gap-2 text-gray-400">
                        <CheckCircle2 className="w-3 h-3 text-purple-500 shrink-0" />
                        Final Cover (PNG)
                      </li>
                      <li className="flex items-start gap-2 text-gray-400">
                        <CheckCircle2 className="w-3 h-3 text-purple-500 shrink-0" />
                        Concept Explanation (Concept + Asset Links)
                      </li>
                      <li className="flex items-start gap-2 text-gray-400">
                        <CheckCircle2 className="w-3 h-3 text-purple-500 shrink-0" />
                        Raw Files (PSD/AI)
                      </li>
                      <li className="flex items-start gap-2 text-gray-400">
                        <CheckCircle2 className="w-3 h-3 text-purple-500 shrink-0" />
                        3 Major Stage Screenshots
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <p className="text-[9px] text-gray-500 uppercase leading-relaxed">
                      Theme will be released on the day of the event. A 5-minute
                      buffer is allowed for all uploads.
                    </p>
                  </div>
                </div>
              </div>

              {/* Judging Criteria */}
              <div className="mt-8 pt-8 border-t border-purple-500/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Criterion label="Creative Execution" />
                  <Criterion label="Originality" />
                  <Criterion label="Theme Interpretation" />
                  <Criterion label="Aesthetics/Harmony" />
                </div>
              </div>
            </div>

            {/* --- REWARDS SECTION --- */}
            <div className="bg-purple-600 border border-purple-400 rounded-3xl p-8 relative overflow-hidden">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                <div className="flex items-center gap-4">
                  <Award className="w-12 h-12 text-white" />
                  <div>
                    <h3 className="text-xl font-black text-white uppercase tracking-widest">
                      Bounty_Registry
                    </h3>
                    <p className="text-[10px] text-purple-200 uppercase font-bold tracking-[0.2em]">
                      Total Pool: ₹{eventData.prizes.total}
                    </p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <BountyItem
                    rank="ALPHA"
                    amount={eventData.prizes.first}
                    sub="1st"
                  />
                  <BountyItem
                    rank="BETA"
                    amount={eventData.prizes.second}
                    sub="2nd"
                  />
                  <BountyItem
                    rank="GAMMA"
                    amount={eventData.prizes.third}
                    sub="3rd"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Internal Components ---

function HeaderTag({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl backdrop-blur-sm">
      <div className="text-purple-500">{icon}</div>
      <div>
        <span className="text-[7px] text-gray-500 uppercase block leading-none mb-1">
          {label}
        </span>
        <span className="text-xs font-bold text-white tracking-tighter uppercase">
          {value}
        </span>
      </div>
    </div>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-purple-500/20 border border-purple-500/40 p-3 rounded-xl">
      <div className="text-purple-400">{icon}</div>
      <div>
        <span className="text-[7px] text-purple-400 uppercase block leading-none mb-1">
          {label}
        </span>
        <span className="text-xs font-black text-white uppercase">{value}</span>
      </div>
    </div>
  );
}

function RuleRow({ label, status }) {
  return (
    <div className="flex justify-between items-center text-[10px] border-b border-red-500/10 pb-2">
      <span className="text-gray-500 uppercase">{label}</span>
      <span className="text-red-400 font-bold tracking-tighter">{status}</span>
    </div>
  );
}

function Criterion({ label }) {
  return (
    <div className="text-center group">
      <div className="text-[8px] text-purple-400 font-bold uppercase tracking-tighter mb-2 group-hover:text-white">
        {label}
      </div>
      <div className="h-1 w-full bg-purple-500/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.5 }}
          className="h-full bg-purple-500"
        />
      </div>
    </div>
  );
}

function BountyItem({ rank, amount, sub }) {
  return (
    <div className="text-center">
      <div className="text-[8px] text-purple-200 uppercase mb-1 font-bold">
        {rank} ({sub})
      </div>
      <div className="text-2xl font-black text-white italic">₹{amount}</div>
    </div>
  );
}
