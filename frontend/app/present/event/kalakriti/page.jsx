"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Brush,
  User,
  Clock,
  AlertCircle,
  Trophy,
  Wifi,
  ChevronLeft,
  Layers,
  Ban,
  Gamepad2,
  Zap,
  Info,
  ShieldAlert,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function KalakritiPS() {
  const router = useRouter();

  const eventData = {
    name: "Canvas Painting",
    org: "Ingenium 3.0 IIT Indore",
    teamSize: "Individual",
    duration: "4 Hours",
    format: "Single Round (Offline Finals)",
    prizes: {
      first: "7,000",
      second: "5,000",
      third: "3,000",
      total: "15,000",
    },
  };

  return (
    <div className="relative min-h-screen bg-black/30 text-orange-100 font-mono p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* --- DYNAMIC HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 border-b border-orange-500/20 pb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-2"
          >
            <button
              onClick={() => router.back()}
              className="group flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors mb-4"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] tracking-[0.4em] uppercase font-bold">
                Return to Events
              </span>
            </button>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic leading-none">
              {eventData.name.split(" ")[0]}{" "}
              <span className="text-orange-500">
                {eventData.name.split(" ")[1]}
              </span>
            </h1>
            <p className="text-xs text-orange-500/80 tracking-[0.3em] uppercase font-bold">
              {eventData.org} // PROTOCOL: ART_SYNTHESIS
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-wrap gap-3"
          >
            <HeaderStat
              icon={<Clock className="w-4 h-4" />}
              label="Window"
              value={eventData.duration}
            />{" "}
            {/*  */}
            <HeaderStat
              icon={<User className="w-4 h-4" />}
              label="Entity"
              value={eventData.teamSize}
            />{" "}
            {/*  */}
            <HeaderStat
              icon={<Layers className="w-4 h-4" />}
              label="Phase"
              value={eventData.format}
            />{" "}
            {/*  */}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* --- LEFT COLUMN: MISSION LOGISTICS --- */}
          <div className="lg:col-span-4 space-y-6">
            <section className="bg-black/40 backdrop-blur-xl border border-orange-500/30 p-6 rounded-2xl relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div>
                  <h3 className="text-[10px] text-orange-500 uppercase tracking-widest mb-3 font-bold flex items-center gap-2">
                    <Info className="w-3 h-3" /> Mission_Description
                  </h3>
                  <p className="text-sm leading-relaxed text-orange-100/70 italic border-l-2 border-orange-500 pl-4">
                    "Individual competition where participants create artwork on
                    a given theme using paints. Theme provided on-site."{" "}
                    {/*  */}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-[10px] text-orange-500 uppercase tracking-widest font-bold">
                    Standard_Operating_Rules
                  </h3>
                  <div className="grid gap-3">
                    <RuleItem text="A3-sized canvas provided by HQ" /> {/*  */}
                    <RuleItem text="BYO paints, brushes, & palettes" /> {/*  */}
                    <RuleItem text="Network data (Internet) allowed for ref" />{" "}
                    {/*  */}
                    <RuleItem
                      text="Manual scales strictly prohibited"
                      prohibited
                    />{" "}
                    {/*  */}
                  </div>
                </div>
              </div>
            </section>

            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(249,115,22,0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-orange-600 text-black font-black uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-orange-900/20"
            >
              <Gamepad2 className="w-5 h-5" />
              Register for Synthesis
            </motion.button>

            <div className="p-4 bg-red-950/30 border border-red-500/40 rounded-xl flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-red-500 shrink-0" />
              <div>
                <p className="text-[10px] text-red-400 uppercase font-black tracking-tighter">
                  Content_Security_Protocol
                </p>
                <p className="text-[9px] text-red-400/70 uppercase leading-tight mt-1">
                  Explicit content = Immediate Terminal Shutdown
                  (Disqualification).
                </p>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: EVALUATION & REWARDS --- */}
          <div className="lg:col-span-8 space-y-8">
            {/* EVALUATION MATRIX */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]" />

              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter flex items-center gap-3 mb-10">
                  <Brush className="text-orange-500 w-8 h-8" />
                  Judging_Criteria_Weights
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <ScoreCard label="Technical Skill" weight="40%" />{" "}
                  <ThemeCard label="Depiction of Theme" weight="40%" />{" "}
                  <ScoreCard label="Overall Neatness" weight="20%" />{" "}
                </div>

                <div className="mt-10 flex items-center gap-4 p-4 bg-orange-500/5 border border-orange-500/10 rounded-2xl">
                  <Wifi className="w-6 h-6 text-orange-500 animate-pulse" />
                  <p className="text-[10px] text-gray-400 uppercase leading-relaxed tracking-widest">
                    External Reference Uplink:{" "}
                    <span className="text-orange-500">Authorized</span>.{" "}
                    {/*  */}
                  </p>
                </div>
              </div>
            </div>

            {/* PRIZE POOL TERMINAL */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-3 bg-linear-to-r from-orange-600/10 to-transparent border border-orange-500/20 rounded-2xl p-6 flex flex-col md:flex-row justify-around items-center gap-6">
                <PrizeSlot
                  rank="01"
                  amount={eventData.prizes.first}
                  label="Alpha Unit"
                />
                <div className="h-12 w-px bg-orange-500/20 hidden md:block" />
                <PrizeSlot
                  rank="02"
                  amount={eventData.prizes.second}
                  label="Beta Unit"
                />
                <div className="h-12 w-px bg-orange-500/20 hidden md:block" />
                <PrizeSlot
                  rank="03"
                  amount={eventData.prizes.third}
                  label="Gamma Unit"
                />
              </div>

              <div className="bg-orange-500 p-6 rounded-2xl flex flex-col justify-center items-center shadow-xl shadow-orange-950/40">
                <Trophy className="w-6 h-6 text-black mb-2" />
                <span className="text-[9px] text-black font-black uppercase mb-1">
                  Total Bounty
                </span>
                <span className="text-2xl font-black text-black italic">
                  ₹{eventData.prizes.total}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function HeaderStat({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
      <div className="text-orange-500">{icon}</div>
      <div className="flex flex-col">
        <span className="text-[7px] text-gray-500 uppercase font-black leading-none mb-1">
          {label}
        </span>
        <span className="text-[10px] font-bold text-white uppercase tracking-tight">
          {value}
        </span>
      </div>
    </div>
  );
}

function RuleItem({ text, prohibited = false }) {
  return (
    <div
      className={`flex gap-3 items-center text-[10px] uppercase font-bold p-2.5 rounded-lg border ${prohibited ? "border-red-500/20 bg-red-500/5" : "border-white/5 bg-white/5"}`}
    >
      {prohibited ? (
        <Ban className="w-3 h-3 text-red-500" />
      ) : (
        <Zap className="w-3 h-3 text-orange-500" />
      )}
      <span className={prohibited ? "text-red-400" : "text-gray-300"}>
        {text}
      </span>
    </div>
  );
}

function ScoreCard({ label, weight }) {
  return (
    <div className="p-6 bg-black/40 border border-white/5 rounded-2xl text-center group hover:border-orange-500/30 transition-all">
      <div className="text-4xl font-black text-orange-500 mb-1 group-hover:scale-110 transition-transform">
        {weight}
      </div>
      <div className="text-[10px] text-white/60 uppercase font-bold tracking-[0.2em]">
        {label}
      </div>
    </div>
  );
}

function ThemeCard({ label, weight }) {
  return (
    <div className="p-6 bg-orange-500/10 border border-orange-500/40 rounded-2xl text-center shadow-lg shadow-orange-500/5">
      <div className="text-4xl font-black text-orange-500 mb-1">{weight}</div>
      <div className="text-[10px] text-white uppercase font-black tracking-[0.2em]">
        {label}
      </div>
    </div>
  );
}

function PrizeSlot({ rank, amount, label }) {
  return (
    <div className="text-center">
      <div className="text-[8px] text-orange-500 uppercase font-black tracking-widest mb-1">
        {rank}_{label}
      </div>
      <div className="text-2xl font-black text-white italic tracking-tighter">
        ₹{amount}
      </div>
    </div>
  );
}
