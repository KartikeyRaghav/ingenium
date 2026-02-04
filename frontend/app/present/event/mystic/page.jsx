"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Focus,
  Aperture,
  Image as ImageIcon,
  Eye,
  FileSearch,
  Trophy,
  Ban,
  Maximize2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ShutterUpPS() {
  const [activeTheme, setActiveTheme] = useState(0);
  const router = useRouter();
  const competitionData = {
    title: "Shutter Up",
    category: "Photography",
    mode: "Online Submission",
    participation: "Individual",
    registrationPath: "/present/registration?event=shutter",
    themes: [
      {
        id: "TL-01",
        name: "Parallel Lives",
        icon: <Focus className="w-5 h-5" />,
      },
      {
        id: "TL-02",
        name: "Hope",
        icon: <Eye className="w-5 h-5" />,
      },
      {
        id: "TL-03",
        name: "Order & Chaos",
        icon: <Aperture className="w-5 h-5" />,
      },
    ],
    prizes: {
      first: "5,000",
      second: "3,000",
      third: "2,000",
      total: "10,000",
    },
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-mono p-4 md:p-8 overflow-hidden bg-black/30">
      {/* Viewfinder UI Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-white/20" />
        <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-white/20" />
        <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-white/20" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-white/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-white/40 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- SYSTEM HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 border-b border-white/10 pb-8">
          <div className="space-y-1">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-white/60 mb-4"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[12px] tracking-[0.5em] uppercase font-bold">
                Return to Events
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">
              SHUTTER <span className="text-white/40">UP</span>
            </h1>
            <p className="text-[12px] text-white/50 mt-2 tracking-[0.3em] uppercase">
              Theme-Based Storytelling Competition
            </p>
          </div>

          <div className="mt-6 lg:mt-0 flex flex-col items-end gap-6">
            <div className="flex gap-4">
              <StatusNode label="Category" value={competitionData.category} />
              <StatusNode
                label="Participation"
                value={competitionData.participation}
              />
              <StatusNode label="Mode" value={competitionData.mode} />
            </div>

            {/* Primary Registration Button */}
            <button
              onClick={() => router.push(competitionData.registrationPath)}
              className="group relative px-8 py-3 bg-white hover:bg-white/90 transition-all rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-black/10 -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <div className="relative flex items-center gap-3">
                <span className="text-sm font-black tracking-[0.2em] text-black uppercase">
                  REGISTER
                </span>
                <ExternalLink className="w-4 h-4 text-black" />
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- THEME SELECTOR & DATA --- */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-[12px] text-white/40 uppercase tracking-widest mb-4 font-bold">
              Active_Lenses (Themes)
            </h3>
            <div className="space-y-3">
              {competitionData.themes.map((theme, idx) => (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(idx)}
                  className={`w-full p-4 text-left rounded-xl border transition-all duration-500 group relative overflow-hidden ${
                    activeTheme === idx
                      ? "bg-white/10 border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                      : "bg-black/40 border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div
                      className={`p-2 rounded-lg transition-colors ${activeTheme === idx ? "bg-white text-black" : "bg-white/5 text-white"}`}
                    >
                      {theme.icon}
                    </div>
                    <div>
                      <span className="text-[12px] text-white/40 uppercase font-mono">
                        {theme.id}
                      </span>
                      <h4 className="text-md font-bold uppercase tracking-widest text-white">
                        {theme.name}
                      </h4>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Metadata Requirements */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl mt-8">
              <h4 className="text-[12px] text-white/60 uppercase tracking-widest mb-4 flex items-center gap-2">
                <FileSearch className="w-3 h-3" /> EXIF_Validation_Required
              </h4>
              <div className="space-y-3 mb-4">
                <RequirementRow text="Original (Unedited) Version" />
                <RequirementRow text="Edited Version (Global Only)" />
                <RequirementRow text="Min Res: 1080x1080 Pixels" />
                <RequirementRow text="30-50 Word Concept Story" />
              </div>
              <Link
                href={"/PS/Shutter_Up.pdf"}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Rules
              </Link>
            </div>
          </div>

          {/* --- VIEWPORT: RULES & CRITERIA --- */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative">
              <div className="absolute top-4 right-4 opacity-5">
                <Camera className="w-32 h-32" />
              </div>

              <h3 className="text-xl font-black text-white uppercase tracking-widest mb-8 flex items-center gap-3">
                <Maximize2 className="w-5 h-5" /> Narrative_Capture_Protocol
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-4">
                  <h4 className="text-[12px] text-white/60 uppercase tracking-widest flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />{" "}
                    Authorized_Processing
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {["Cropping", "Brightness", "Contrast", "Saturation"].map(
                      (i) => (
                        <span
                          key={i}
                          className="text-[12px] bg-white/5 p-2 rounded border border-white/5 text-white/70 uppercase font-bold"
                        >
                          {i}
                        </span>
                      ),
                    )}
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-[12px] text-red-400 uppercase tracking-widest flex items-center gap-2 font-bold">
                    <Ban className="w-3 h-3" /> Terminal_Restrictions
                  </h4>
                  <div className="grid grid-cols-1 gap-1 text-[12px] text-red-200/50 uppercase italic font-bold">
                    <p>▪ No Photo-Morphing</p>
                    <p>▪ No Local Editing</p>
                    <p>▪ No AI-Generated Content</p>
                    <p>▪ No Watermarks/Captions</p>
                  </div>
                </div>
              </div>

              {/* Secondary CTA */}
              <button
                onClick={() => router.push(competitionData.registrationPath)}
                className="text-[12px] font-bold text-white uppercase tracking-[0.4em] hover:text-white/60 transition-colors flex items-center gap-2 group mb-8"
              >
                Sync your narrative with the optical registry{" "}
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Judging Matrix */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-5 gap-4">
                <Metric label="Relevance" />
                <Metric label="Composition" />
                <Metric label="Lighting" />
                <Metric label="Creativity" />
                <Metric label="Impact" />
              </div>
            </div>

            {/* --- REWARD ALLOCATION --- */}
            <div className="bg-white/10 border border-white/20 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Trophy className="w-32 h-32" />
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-black text-white uppercase tracking-[0.2em]">
                    Bounty_Allocation
                  </h3>
                  <p className="text-[12px] text-white/50 uppercase tracking-widest italic">
                    Visual_Aesthetics_Incentive
                  </p>
                </div>

                <div className="flex gap-8">
                  <BountyItem
                    rank="ALPHA"
                    amount={competitionData.prizes.first}
                    label="First Prize"
                  />
                  <BountyItem
                    rank="BETA"
                    amount={competitionData.prizes.second}
                    label="Second Prize"
                  />
                  <BountyItem
                    rank="GAMMA"
                    amount={competitionData.prizes.third}
                    label="Third Prize"
                  />
                </div>

                <div className="px-6 py-4 bg-white/10 border border-white/30 rounded-xl text-center">
                  <span className="text-[11px] text-white/60 uppercase block font-bold mb-1">
                    Aggregate Pool
                  </span>
                  <span className="text-2xl font-black text-white italic">
                    ₹10,000
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

// --- Internal Viewport Components ---

function StatusNode({ label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg">
      <div>
        <span className="text-[10px] text-white/40 uppercase block leading-none mb-1 font-bold">
          {label}
        </span>
        <span className="text-sm font-bold text-white tracking-tighter uppercase italic">
          {value}
        </span>
      </div>
    </div>
  );
}

function RequirementRow({ text }) {
  return (
    <div className="flex gap-3 items-center text-[12px] uppercase font-bold text-white/40 group">
      <div className="w-1 h-1 bg-white/60 group-hover:scale-150 transition-transform" />
      <span className="group-hover:text-white transition-colors">{text}</span>
    </div>
  );
}

function Metric({ label }) {
  return (
    <div className="text-center group">
      <div className="text-[11px] text-white/40 font-bold uppercase tracking-tighter leading-tight mb-2 group-hover:text-white transition-colors">
        {label}
      </div>
      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "70%" }}
          className="h-full bg-white/40"
        />
      </div>
    </div>
  );
}

function BountyItem({ rank, amount, label }) {
  return (
    <div className="text-center">
      <div className="text-[10px] text-white/40 uppercase mb-1 font-bold tracking-tighter">
        {rank}_TIER
      </div>
      <div className="text-xl font-black text-white italic leading-none">
        ₹{amount}
      </div>
      <div className="text-[9px] text-white/30 uppercase mt-1 font-bold">
        {label}
      </div>
    </div>
  );
}
