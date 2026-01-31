"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  BarChart3,
  MessageSquareCode,
  Users,
  TrendingUp,
  Activity,
  Zap,
  ShieldCheck,
  ChevronLeft,
  Globe,
  Cpu,
  Link,
  Target,
  Rocket,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AnalyticXPS() {
  const [activePhase, setActivePhase] = useState(0);
  const router = useRouter();

  const phases = [
    {
      id: "I",
      title: "Data Synthesis",
      icon: <Database className="w-5 h-5" />,
      tagline: "ARCHITECTURAL INTEGRITY",
      task: "Construct a robust ETL pipeline to resolve entity resolution problems and handle the 'messy' reality of enterprise data.",
      details: [
        "Transactional Logs (SQL): Resolve duplicate entries for re-ordered items and heterogeneous time zones.",
        "Restaurant Metadata (JSON): Integrate geographic coordinates, kitchen prep times, and cuisine categories.",
        "Courier Telemetry (CSV): Process high-frequency GPS pings to map to specific order cycles.",
        "Entity Resolution: Synchronize timestamps drifting by up to 180 seconds to create a 'Golden Table'.",
      ],
    },
    {
      id: "II",
      title: "Spatio-Temporal ETA",
      icon: <BarChart3 className="w-5 h-5" />,
      tagline: "HIGH-FIDELITY REGRESSION",
      task: "Build a high-fidelity regression model to predict Total Delivery Duration beyond simple distance-over-speed logic.",
      details: [
        "Operational Engineering: Capture 'Kitchen Lag' (Order vs. Pick-up) and 'Travel Decay' (Peak congestion).",
        "Environmental Context: Integrate Weather and Local Event APIs to account for urban slowdowns.",
        "Success Metric: Minimize Mean Absolute Error (MAE) and reduce 'Extreme Lateness' (outliers > 2 SD).",
      ],
    },
    {
      id: "III",
      title: "Linguistic Intelligence",
      icon: <MessageSquareCode className="w-5 h-5" />,
      tagline: "TOPIC MINING & CAUSALITY",
      task: "Unlock insights from 50,000+ daily text reviews to quantify the impact of service failures.",
      details: [
        "Sentiment Classification: Categorize unstructured data into Satisfied, Neutral, and Dissatisfied tiers.",
        "Topic Modeling (LDA/BERTopic): Automatically identify grievances like Cold Food, Missing Items, or Lateness.",
        "Causal Linkage: Quantify the mathematical relationship between ETA Error and the probability of a 1-star review.",
      ],
    },
    {
      id: "IV",
      title: "Churn Propensity",
      icon: <Users className="w-5 h-5" />,
      tagline: "PREDICTIVE RETENTION",
      task: "Identify users at risk of leaving the platform, noting that retention is 5x more cost-effective than acquisition.",
      details: [
        "Feature Engineering: Analyze historical lateness, review topics, and 90-day order frequency shifts.",
        "Optimization Constraint: Focus on Recall—flagging 'safe' customers is better than missing frustrated ones.",
        "Explainability: Utilize SHAP/LIME to diagnose why specific user segments are churning.",
      ],
    },
    {
      id: "V",
      title: "Economic Optimization",
      icon: <TrendingUp className="w-5 h-5" />,
      tagline: "DYNAMIC SURGE LOGIC",
      task: "Transition from prediction to prescription by designing a Dynamic Surge Pricing Algorithm.",
      details: [
        "Network Balancing: Increase fees during high-demand/low-supply windows to stabilize the platform.",
        "Price Elasticity: Find the 'Sweet Spot' to maximize platform revenue.",
        "Guardrail: Ensure Churn Propensity (Phase IV) does not increase by > 2% for any user segment.",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen text-cyan-100 font-mono p-4 md:p-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-cyan-500/30 pb-8">
          <div>
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-cyan-500 hover:text-cyan-300 transition-colors mb-2 group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] tracking-[0.4em] uppercase">
                Return to Mission Control
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white">
              GLOBAL<span className="text-cyan-500"> GOURMET</span>
            </h1>
            <p className="text-cyan-500/60 text-xs mt-2 tracking-widest uppercase flex items-center gap-2">
              <Globe className="w-3 h-3" /> Operational Excellence Challenge
            </p>{" "}
          </div>
          <div className="mt-6 md:mt-0 flex gap-4">
            <div className="px-6 py-3 bg-cyan-500 text-black font-black text-sm rounded-sm -skew-x-12 hover:bg-white transition-colors cursor-pointer flex items-center gap-2">
              <Rocket className="w-4 h-4" /> REGISTER
            </div>
          </div>
        </div>

        {/* --- MISSION BRIEF --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Target className="w-32 h-32" />
            </div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 italic">
              <Cpu className="w-5 h-5 text-cyan-500" /> MISSION_BRIEF
            </h3>
            <p className="text-sm leading-relaxed text-cyan-100/70">
              Global Gourmet is a multi-billion dollar food-tech aggregator
              operating in{" "}
              <span className="text-cyan-400 font-bold">
                250+ cities globally
              </span>
              . The Lead Data Science Taskforce must resolve critical
              inefficiencies in{" "}
              <span className="text-white font-bold">"Last-Mile" delivery</span>
              . The objective is to stabilize growth by integrating logistics,
              linguistics, and economics into a multi-stage predictive system.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-black/40 p-3 border-l-2 border-red-500">
                <div className="text-[10px] text-red-400 uppercase tracking-tighter">
                  Primary Threat
                </div>
                <div className="text-xs text-white">High Customer Churn</div>
              </div>
              <div className="bg-black/40 p-3 border-l-2 border-cyan-500">
                <div className="text-[10px] text-cyan-400 uppercase tracking-tighter">
                  Root Cause
                </div>
                <div className="text-xs text-white">
                  Inaccurate ETA Estimates
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-center">
            <h4 className="text-[10px] text-cyan-500 uppercase tracking-widest mb-4">
              Live_Stats
            </h4>
            <div className="space-y-6">
              <StatItem
                label="Daily_Text_Reviews"
                value="50,000+"
                icon={<MessageSquareCode className="w-4 h-4" />}
              />
              <StatItem
                label="Retention_Multiplier"
                value="5.0x"
                icon={<Users className="w-4 h-4" />}
              />
              <StatItem
                label="Drift_Tolerance"
                value="180s"
                icon={<Activity className="w-4 h-4" />}
              />
            </div>
          </div>
        </div>

        {/* --- PHASE SELECTOR & CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-[10px] text-cyan-500/50 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
              <Activity className="w-3 h-3" /> PHASE_SEQUENCING
            </h3>
            {phases.map((phase, idx) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(idx)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                  activePhase === idx
                    ? "bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                    : "bg-black/20 border-white/5 hover:border-cyan-500/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`text-xl font-black ${activePhase === idx ? "text-cyan-400" : "text-gray-700"}`}
                  >
                    {phase.id}
                  </span>
                  <div className="text-left">
                    <div
                      className={`text-xs font-bold uppercase tracking-widest ${activePhase === idx ? "text-white" : "text-gray-500"}`}
                    >
                      {phase.title}
                    </div>
                    <div className="text-[9px] text-cyan-500/40 uppercase tracking-tighter">
                      {phase.tagline}
                    </div>
                  </div>
                </div>
                {activePhase === idx && (
                  <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-black/60 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-xl h-full flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-cyan-500/20 rounded-full text-cyan-400 ring-1 ring-cyan-500/50">
                      {phases[activePhase].icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-black uppercase tracking-tighter text-white">
                        Phase_{phases[activePhase].id}
                      </h2>
                      <p className="text-cyan-500 text-[10px] tracking-[0.2em] font-bold uppercase">
                        {phases[activePhase].tagline}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-gray-500 uppercase">
                      Weightage
                    </div>
                    <div className="text-2xl font-black text-cyan-500">
                      {activePhase === 0
                        ? "20%"
                        : activePhase === 1 || activePhase === 3
                          ? "30%"
                          : "25%"}
                    </div>
                  </div>
                </div>

                <div className="mb-8 p-6 bg-cyan-950/30 border-r-4 border-cyan-500 rounded-lg">
                  <p className="text-sm text-cyan-100/90 leading-relaxed italic">
                    "{phases[activePhase].task}"
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 grow">
                  {phases[activePhase].details.map((detail, i) => (
                    <div
                      key={i}
                      className="group flex gap-3 p-4 bg-white/5 border border-white/5 rounded-lg text-[11px] leading-relaxed text-gray-400 hover:border-cyan-500/30 hover:bg-white/10 transition-all"
                    >
                      <Zap className="w-3 h-3 text-cyan-500 shrink-0 mt-1 group-hover:scale-125 transition-transform" />
                      {detail}
                    </div>
                  ))}
                </div>

                <button className="mt-8 w-full py-4 bg-transparent border border-cyan-500/50 text-cyan-400 font-bold text-xs tracking-[0.3em] uppercase hover:bg-cyan-500 hover:text-black transition-all rounded-lg flex items-center justify-center gap-2">
                  <Link className="w-4 h-4" /> Initialize Phase_
                  {phases[activePhase].id} Logic
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- DATASETS & EVALUATION --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-black/40 border border-white/10 rounded-2xl">
            <h4 className="text-[10px] text-cyan-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Activity className="w-3 h-3" /> Evaluation_Scorecard
            </h4>
            <div className="space-y-5">
              <ScoreBar
                label="ETL Resilience"
                percent={20}
                desc="Cleaning & Join Logic"
              />
              <ScoreBar
                label="Predictive Accuracy"
                percent={30}
                desc="ETA & Churn Performance"
              />
              <ScoreBar
                label="Explainability"
                percent={25}
                desc="SHAP/LIME Rigor"
              />
              <ScoreBar
                label="Business Logic"
                percent={25}
                desc="Surge Pricing Math"
              />
            </div>
          </div>

          <div className="p-6 bg-black/40 border border-white/10 rounded-2xl">
            <h4 className="text-[10px] text-cyan-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Link className="w-3 h-3" /> External_Data_Nexus
            </h4>
            <div className="space-y-4">
              <DatasetLink name="Yelp Core Dataset" url="yelp.com/dataset" />
              <DatasetLink name="NYC TLC Logistics" url="nyc.gov/tlc" />
              <DatasetLink name="Open-Meteo Weather" url="open-meteo.com" />
              <div className="mt-4 p-3 bg-yellow-500/5 border border-yellow-500/20 rounded text-[9px] text-yellow-200/60 leading-tight italic">
                Note: Participants are encouraged to source more complex
                datasets for higher creativity scores.
              </div>
            </div>
          </div>

          <div className="p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl relative overflow-hidden flex flex-col justify-between">
            <h4 className="text-[10px] text-cyan-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <ShieldCheck className="w-3 h-3" /> GLOBAL_GOURMET_BOUNTY
            </h4>
            <div className="grid grid-cols-3 gap-2 mb-8">
              <PrizeItem rank="1ST" amount="7,000" />
              <PrizeItem rank="2ND" amount="5,000" />
              <PrizeItem rank="3RD" amount="3,000" />
            </div>
            <div className="pt-6 border-t border-cyan-500/20">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-cyan-500/60 uppercase">
                  Total_Pool
                </span>
                <span className="text-3xl font-black text-white tracking-tighter">
                  ₹15,000
                </span>
              </div>
              <button className="mt-4 w-full py-3 bg-cyan-500 text-black font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all">
                SECURE_GRANT_NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function StatItem({ label, value, icon }) {
  return (
    <div className="flex items-center gap-4">
      <div className="p-2 bg-white/5 rounded-lg text-cyan-500">{icon}</div>
      <div>
        <div className="text-[9px] text-gray-500 uppercase tracking-widest">
          {label}
        </div>
        <div className="text-lg font-black text-white tracking-tighter">
          {value}
        </div>
      </div>
    </div>
  );
}

function ScoreBar({ label, percent, desc }) {
  return (
    <div>
      <div className="flex justify-between text-[10px] mb-1 font-bold">
        <span className="text-gray-300 uppercase">{label}</span>
        <span className="text-cyan-500">{percent}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-linear-to-r from-cyan-600 to-cyan-400"
        />
      </div>
      <p className="text-[8px] text-gray-500 mt-1 uppercase tracking-tighter">
        {desc}
      </p>
    </div>
  );
}

function DatasetLink({ name, url }) {
  return (
    <div className="flex items-center justify-between p-2 bg-white/5 rounded hover:bg-cyan-500/10 transition-colors border border-transparent hover:border-cyan-500/20">
      <div className="flex flex-col">
        <span className="text-[10px] text-white font-bold">{name}</span>
        <span className="text-[8px] text-cyan-500/60 truncate w-32">{url}</span>
      </div>
      <Link className="w-3 h-3 text-cyan-500" />
    </div>
  );
}

function PrizeItem({ rank, amount }) {
  return (
    <div className="text-center p-2 bg-black/40 border border-white/5 rounded-lg group hover:border-cyan-500/40 transition-all">
      <div className="text-[8px] text-cyan-500/60 mb-1 font-bold group-hover:text-cyan-400">
        {rank}
      </div>
      <div className="text-sm font-black text-white italic group-hover:scale-110 transition-transform">
        ₹{amount}
      </div>
    </div>
  );
}
