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
  Link as LinkIcon,
  Target,
  Rocket,
  Scale,
  FileWarning,
} from "lucide-react";
import Link from "next/link";
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
        "Kitchen Lag: Calculate the exact difference between order placement and driver pickup time.",
        "Travel Decay: Engineer features to capture the impact of peak-hour congestion.",
        "External Context: Integrate Weather data and local environmental disruptions (Open-Meteo).",
        "Success Metric: Minimize Mean Absolute Error (MAE) and reduce 'Extreme Lateness' (outliers > 2 SD).",
      ],
    },
    {
      id: "III",
      title: "Linguistic Intelligence",
      icon: <MessageSquareCode className="w-5 h-5" />,
      tagline: "TOPIC MINING & CAUSALITY",
      task: "Unlock insights from thousands of daily text reviews to identify service failure points.",
      details: [
        "Sentiment Classification: Categorize reviews into Satisfied, Neutral, and Dissatisfied tiers.",
        "Topic Modeling: Use LDA or BERTopic to identify grievances like Cold Food, Missing Items, or Professionalism.",
        "Causal Linkage: Quantify the relationship between ETA prediction error and 1-star review probability.",
      ],
    },
    {
      id: "IV",
      title: "Churn Propensity",
      icon: <Users className="w-5 h-5" />,
      tagline: "PREDICTIVE RETENTION",
      task: "Build a binary classification model to identify users at risk of leaving the platform.",
      details: [
        "Feature Set: Analyze historical lateness, negative review topics, and 90-day frequency shifts.",
        "Primary Constraint: Prioritize Recall to ensure at-risk users are not missed by the system.",
        "Explainability: Use SHAP or LIME to justify and explain specific churn predictions.",
      ],
    },
    {
      id: "V",
      title: "Economic Optimization",
      icon: <TrendingUp className="w-5 h-5" />,
      tagline: "DYNAMIC SURGE LOGIC",
      task: "Transition from prediction to prescription by designing a Dynamic Surge Pricing Algorithm.",
      details: [
        "Network Balancing: Design a surge algorithm to balance platform demand and supply.",
        "Revenue Optimization: Utilize Price Elasticity of Demand to maximize total platform revenue.",
        "Churn Guardrail: Ensure churn propensity does not increase by more than 2% for any user segment.",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen text-cyan-100 font-mono p-4 md:p-8 bg-black/30">
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
                Return to Events
              </span>
            </button>
            <h1 className="text-5xl font-black tracking-tighter text-white">
              ANALYTIC<span className="text-cyan-500">X</span>
            </h1>
            <p className="text-cyan-500/60 text-xs mt-2 tracking-widest uppercase flex items-center gap-2">
              <Globe className="w-3 h-3" /> Global Gourmet Operational Challenge
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <button
              onClick={() =>
                router.push(`/present/registration?event=analytic_x`)
              }
              className="px-8 py-4 bg-cyan-500 text-black font-black text-sm rounded-sm -skew-x-12 hover:bg-white transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2"
            >
              <Rocket className="w-4 h-4" /> REGISTER_NOW
            </button>
          </div>
        </div>

        {/* --- MISSION BRIEF & COMPLIANCE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 backdrop-blur-md relative overflow-hidden">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 italic">
              <Cpu className="w-5 h-5 text-cyan-500" /> MISSION_OVERVIEW
            </h3>
            <p className="text-sm leading-relaxed text-cyan-100/70">
              Global Gourmet is a multi-billion-dollar food-tech aggregator
              facing efficiencies in last-mile delivery. As the Lead Data
              Science Taskforce, your mission is to design a multi-stage
              predictive system integrating logistics, NLP, and economics to
              stabilize platform growth.
            </p>
            <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
              <div className="bg-black/40 p-3 border-l-2 border-red-500 min-w-35">
                <div className="text-[9px] text-red-400 uppercase font-bold">
                  Churn Risk
                </div>
                <div className="text-xs text-white">Critical Retention</div>
              </div>
              <div className="bg-black/40 p-3 border-l-2 border-cyan-500 min-w-35">
                <div className="text-[9px] text-cyan-400 uppercase font-bold">
                  Data Lake
                </div>
                <div className="text-xs text-white">Heterogeneous</div>
              </div>
              <div className="bg-black/40 p-3 border-l-2 border-yellow-500 min-w-35">
                <div className="text-[9px] text-yellow-400 uppercase font-bold">
                  Mode
                </div>
                <div className="text-xs text-white">Online</div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20 flex flex-col">
            <h4 className="text-[10px] text-red-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <FileWarning className="w-3 h-3" /> RULES_&_COMPLIANCE
            </h4>
            <ul className="text-[10px] space-y-2 text-red-100/60 uppercase mb-4">
              <li className="flex gap-2">
                <Zap className="w-2 h-2 mt-1 shrink-0" /> Rule changes are
                subject to organizer discretion.
              </li>
              <li className="flex gap-2">
                <Zap className="w-2 h-2 mt-1 shrink-0" /> Decisions in
                eligibility and judgment are final.
              </li>
              <li className="flex gap-2">
                <Zap className="w-2 h-2 mt-1 shrink-0" /> Adhere strictly to
                format requirements.
              </li>
            </ul>
            <Link
              href={"/PS/AnalyticX.pdf"}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Rules
            </Link>
          </div>
        </div>

        {/* --- PHASE SELECTOR & CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-[10px] text-cyan-500/50 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
              <Activity className="w-3 h-3" /> PROBLEM_STAGES
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
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-white">
                      Phase_{phases[activePhase].id}
                    </h2>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-gray-500 uppercase">
                      Success_Metric
                    </div>
                    <div className="text-xl font-black text-cyan-500 uppercase">
                      {activePhase === 1
                        ? "MAE"
                        : activePhase === 3
                          ? "Recall"
                          : "Rigor"}
                    </div>
                  </div>
                </div>

                <div className="mb-8 p-6 bg-cyan-950/30 border-r-4 border-cyan-500 rounded-lg">
                  <p className="text-sm text-cyan-100/90 leading-relaxed italic">
                    {phases[activePhase].task}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 grow">
                  {phases[activePhase].details.map((detail, i) => (
                    <div
                      key={i}
                      className="group flex gap-3 p-4 bg-white/5 border border-white/5 rounded-lg text-[10px] leading-relaxed text-gray-400"
                    >
                      <Zap className="w-3 h-3 text-cyan-500 shrink-0 mt-1" />
                      {detail}
                    </div>
                  ))}
                </div>
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
                desc="Surge Pricing Strategy"
              />
            </div>
          </div>

          <div className="p-6 bg-black/40 border border-white/10 rounded-2xl">
            <h4 className="text-[10px] text-cyan-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <LinkIcon className="w-3 h-3" /> REFERENCE_DATASETS
            </h4>
            <div className="space-y-4">
              <DatasetLink
                name="Yelp Core (NLP)"
                url="https://yelp.com/dataset"
              />
              <DatasetLink
                name="NYC TLC (Logistics)"
                url="https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page"
              />
              <DatasetLink
                name="Open-Meteo (Weather)"
                url="https://open-meteo.com/"
              />
              <p className="text-[9px] text-cyan-500/40 leading-tight italic mt-2">
                Note: Greater complexity and creative data sourcing are
                encouraged for higher scores.
              </p>
            </div>
          </div>

          <div className="p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl relative overflow-hidden flex flex-col justify-between shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            <h4 className="text-[10px] text-cyan-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <ShieldCheck className="w-3 h-3" /> COMPETITION_BOUNTY
            </h4>
            <div className="grid grid-cols-3 gap-2 mb-8">
              <PrizeItem rank="1ST" amount="7,000" />
              <PrizeItem rank="2ND" amount="5,000" />
              <PrizeItem rank="3RD" amount="3,000" />
            </div>
            <div className="pt-6 border-t border-cyan-500/20">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-cyan-500/60 uppercase">
                  Total_Allocation
                </span>
                <span className="text-3xl font-black text-white tracking-tighter">
                  ₹15,000
                </span>
              </div>
              <button
                onClick={() =>
                  router.push(`/present/registration?event=analytic_x`)
                }
                className="mt-4 w-full py-3 bg-cyan-500 text-black font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all"
              >
                APPLY_FOR_BOUNTY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function ScoreBar({ label, percent, desc }) {
  return (
    <div>
      <div className="flex justify-between text-[10px] mb-1 font-bold">
        <span className="text-gray-300 uppercase">{label}</span>
        <span className="text-cyan-500">{percent}%</span>
      </div>
      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          className="h-full bg-cyan-500"
        />
      </div>
      <p className="text-[8px] text-gray-600 mt-1 uppercase">{desc}</p>
    </div>
  );
}

function DatasetLink({ name, url }) {
  return (
    <Link
      href={url}
      target="_blank"
      className="flex items-center justify-between p-2 bg-white/5 rounded hover:bg-cyan-500/10 transition-colors border border-transparent hover:border-cyan-500/20"
    >
      <div className="flex flex-col">
        <span className="text-[10px] text-white font-bold truncate w-40">
          {name}
        </span>
        <span className="text-[8px] text-cyan-500/60 truncate w-32">{url}</span>
      </div>
      <LinkIcon className="w-3 h-3 text-cyan-500" />
    </Link>
  );
}

function PrizeItem({ rank, amount }) {
  return (
    <div className="text-center p-2 bg-black/40 border border-white/5 rounded-lg">
      <div className="text-[8px] text-cyan-500/60 mb-1 font-bold">{rank}</div>
      <div className="text-sm font-black text-white italic">₹{amount}</div>
    </div>
  );
}
