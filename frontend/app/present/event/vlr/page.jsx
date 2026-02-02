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
  MousePointer2,
  ChevronLeft,
  FileArchive,
  Cpu,
  CheckCircle2,
  ExternalLink,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AlbumCoverPS() {
  const router = useRouter();

  // Data mapped directly from
  const eventData = {
    title: "Album Cover Making",
    club: "VLR",
    mode: "Online",
    duration: "3 Hours",
    teamSize: "Max 2 Members",
    specs: [
      { label: "Aspect Ratio", value: "1:1" },
      { label: "Resolution", value: "1080 × 1080 px" },
      { label: "Format", value: "PNG Only" },
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
    <div className="relative min-h-screen text-purple-100 font-mono p-4 md:p-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- NAVIGATION & HEADER --- */}
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
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Palette className="w-8 h-8 text-purple-500" />
              </div>
              <h1 className="text-5xl md:text-5xl font-black tracking-tighter text-white uppercase italic">
                {eventData.title.split(" ")[0]}{" "}
                <span className="text-purple-500">
                  {eventData.title.split(" ").slice(1).join(" ")}
                </span>
              </h1>
            </div>
            <p className="text-[10px] text-purple-500/60 mt-2 tracking-[0.3em] uppercase flex items-center gap-2">
              <Cpu className="w-3 h-3" /> Organizing Club: {eventData.club}{" "}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <InfoCard
              icon={<Clock />}
              label="Duration"
              value={eventData.duration}
            />
            <HeaderTag
              icon={<Layers />}
              label="Team Size"
              value={eventData.teamSize}
            />
            <HeaderTag
              icon={<ImageIcon />}
              label="Mode"
              value={eventData.mode}
            />
            <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-black italic tracking-widest flex items-center gap-3 shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all hover:scale-105 active:scale-95">
              <Zap className="w-5 h-5 fill-current" /> REGISTER NOW
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- LEFT COLUMN: SPECS & INTEGRITY --- */}
          <div className="lg:col-span-4 space-y-6">
            <section>
              <h3 className="text-[10px] text-purple-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Framer className="w-3 h-3" /> Technical_Specs
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {eventData.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="p-4 bg-purple-950/20 border border-purple-500/10 rounded-xl flex justify-between items-center group hover:border-purple-500/40 transition-all"
                  >
                    <span className="text-[10px] text-gray-500 uppercase">
                      {spec.label}
                    </span>
                    <span className="text-xs text-white font-bold">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="p-6 bg-red-950/20 border border-red-500/20 rounded-2xl">
              <h4 className="text-[10px] text-red-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <AlertTriangle className="w-3 h-3" /> Disqualification_Protocols
              </h4>
              <div className="space-y-4">
                <RuleRow label="Generative AI" status="STRICTLY FORBIDDEN" />
                <RuleRow label="JPEG Format" status="NOT ALLOWED" />
                <RuleRow label="System Time" status="MUST BE VISIBLE" />
                <div className="mt-4 p-3 bg-red-500/10 rounded-lg">
                  <p className="text-[9px] text-red-300 leading-relaxed uppercase">
                    Uncredited assets will result in immediate zero-score for
                    the asset portion.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* --- RIGHT COLUMN: WORKFLOW & SUBMISSION --- */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-black/40 border border-purple-500/20 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MousePointer2 className="w-24 h-24 text-purple-500" />
              </div>

              <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-3">
                <History className="text-purple-500" /> Submission Workflow
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Milestone System */}
                <div className="space-y-6">
                  <h4 className="text-[10px] text-purple-500 uppercase tracking-widest">
                    Snapshot_Timeline
                  </h4>
                  <div className="space-y-4 relative">
                    <div className="absolute left-2.75 top-2 bottom-2 w-px bg-purple-500/20" />
                    {[
                      {
                        time: "Every 30 Mins",
                        desc: "Full-screen screenshot upload",
                      },
                      {
                        time: "2.5 Hours In",
                        desc: "Final submission link opens",
                      },
                      {
                        time: "5 Min Buffer",
                        desc: "Grace period for uploads",
                      },
                    ].map((step, i) => (
                      <div key={i} className="flex gap-4 relative z-10">
                        <div className="w-6 h-6 rounded-full bg-black border border-purple-500 flex items-center justify-center text-[10px] font-bold text-purple-500">
                          {i + 1}
                        </div>
                        <div>
                          <p className="text-xs text-white font-bold uppercase">
                            {step.time}
                          </p>
                          <p className="text-[10px] text-gray-500 uppercase">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-purple-500/5 border border-dashed border-purple-500/30 rounded-xl">
                    <p className="text-[10px] text-purple-400 font-bold uppercase mb-2">
                      Penalties
                    </p>
                    <div className="flex justify-between text-[10px]">
                      <span>1-3 Missing Logs:</span>
                      <span className="text-red-400">-5 PTS</span>
                    </div>
                    <div className="flex justify-between text-[10px] mt-1">
                      <span>3+ Missing Logs:</span>
                      <span className="text-red-400">-10 PTS</span>
                    </div>
                  </div>
                </div>

                {/* ZIP Structure */}
                <div className="space-y-6">
                  <h4 className="text-[10px] text-purple-500 uppercase tracking-widest">
                    Final_Archive.zip{" "}
                  </h4>
                  <div className="bg-purple-950/30 p-6 rounded-2xl border border-purple-500/10 font-mono text-[11px]">
                    <p className="text-purple-400 mb-4 underline">
                      TEAMNAME_ID.zip
                    </p>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-purple-500" />{" "}
                        Final Cover (PNG Only)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-purple-500" />{" "}
                        Concept Written Explanation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-purple-500" /> Raw
                        Files (PSD/AI/Affinity)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-purple-500" /> 3
                        Stage Progress Screenshots
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Judging Matrix */}
              <div className="mt-12 pt-8 border-t border-purple-500/10">
                <h4 className="text-[10px] text-purple-500 uppercase tracking-widest mb-6 text-center">
                  Evaluation_Matrix
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Criterion label="Creative Execution" />
                  <Criterion label="Originality" />
                  <Criterion label="Theme Story" />
                  <Criterion label="Color Harmony" />
                </div>
              </div>
            </div>

            {/* --- REWARDS SECTION --- */}
            <div className="bg-linear-to-r from-purple-900/20 to-transparent border border-purple-500/20 rounded-3xl p-8 relative overflow-hidden group">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-widest">
                    Bounty_Registry
                  </h3>
                  <p className="text-[10px] text-purple-500 uppercase tracking-[0.3em]">
                    Digital Illustration Rewards
                  </p>
                </div>

                <div className="flex gap-12">
                  <BountyItem
                    rank="1ST"
                    amount={eventData.prizes.first}
                    color="text-yellow-500"
                  />
                  <BountyItem
                    rank="2ND"
                    amount={eventData.prizes.second}
                    color="text-gray-400"
                  />
                  <BountyItem
                    rank="3RD"
                    amount={eventData.prizes.third}
                    color="text-orange-600"
                  />
                </div>

                <div className="px-8 py-5 bg-purple-600 text-white rounded-2xl text-center shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                  <span className="text-[9px] uppercase block font-bold mb-1 opacity-80">
                    Total Pool
                  </span>
                  <span className="text-3xl font-black italic">
                    ₹{eventData.prizes.total}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Helper Components ---

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
      <span className="text-gray-500 uppercase tracking-tighter">{label}</span>
      <span className="text-red-400 font-bold tracking-tighter uppercase">
        {status}
      </span>
    </div>
  );
}

function Criterion({ label }) {
  return (
    <div className="text-center group">
      <div className="text-[9px] text-purple-400 font-bold uppercase tracking-tighter mb-3 group-hover:text-white transition-colors">
        {label}
      </div>
      <div className="h-1 w-full bg-purple-500/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.5 }}
          className="h-full bg-purple-500 shadow-[0_0_10px_#a855f7]"
        />
      </div>
    </div>
  );
}

function BountyItem({ rank, amount, color }) {
  return (
    <div className="text-center">
      <div className={`text-[9px] font-bold uppercase mb-1 ${color}`}>
        {rank} PLACE
      </div>
      <div className="text-2xl font-black text-white italic tracking-tighter">
        ₹{amount}
      </div>
    </div>
  );
}
