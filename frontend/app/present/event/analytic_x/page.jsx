"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  BarChart3,
  MessageSquareCode,
  Users,
  TrendingUp,
  Search,
  Activity,
  Zap,
  ShieldCheck,
  ChevronLeft,
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
      task: "Construct a robust ETL pipeline to resolve entity resolution problems.",
      details: [
        "Handle SQL Transactional Logs with drifting timestamps.",
        "Map courier telemetry to order cycles (180s drift resolution).",
        "Generate a 'Golden Table' of delivery lifecycles.",
      ],
    },
    {
      id: "II",
      title: "Spatio-Temporal ETA",
      icon: <BarChart3 className="w-5 h-5" />,
      task: "Build a high-fidelity regression model for Total Delivery Duration.",
      details: [
        "Engineer features for 'Kitchen Lag' and 'Travel Decay'.",
        "Integrate Weather/Local Event APIs for environmental context.",
        "Minimize MAE and reduce 'Extreme Lateness' outliers.",
      ],
    },
    {
      id: "III",
      title: "Linguistic Intelligence",
      icon: <MessageSquareCode className="w-5 h-5" />,
      task: "Unlock insights from 50,000+ daily unstructured text reviews.",
      details: [
        "Classify reviews into Satisfied, Neutral, and Dissatisfied.",
        "Use LDA/BERTopic to identify grievances like 'Cold Food'.",
        "Quantify causal linkage between ETA error and 1-star reviews.",
      ],
    },
    {
      id: "IV",
      title: "Churn Propensity",
      icon: <Users className="w-5 h-5" />,
      task: "Identify users at risk of leaving using binary classification.",
      details: [
        "Feature Set: Historical lateness and 90-day frequency shifts.",
        "Maximize Recall to ensure no frustrated customer is ignored.",
        "Analyze why specific users are churning via SHAP/LIME.",
      ],
    },
    {
      id: "V",
      title: "Economic Optimization",
      icon: <TrendingUp className="w-5 h-5" />,
      task: "Design a Prescriptive Dynamic Surge Pricing Algorithm.",
      details: [
        "Balance high-demand/low-supply windows via delivery fees.",
        "Optimize Price Elasticity of Demand for platform revenue.",
        "Constraint: Churn propensity must not increase > 2%.",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-black/30 text-cyan-100 font-mono p-4 md:p-8">

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- TOP HUD BAR --- */}
        <div className="flex justify-between items-center mb-12 border-b border-cyan-500/20 pb-6">
          <div>
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-cyan-500 mb-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-[10px] tracking-[0.4em] uppercase">
                Return to Events
              </span>
            </button>
            <h1 className="text-4xl font-black tracking-tighter text-white">
              ANALYTIC<span className="text-cyan-500">X</span>
            </h1>
          </div>
          <div className="hidden md:flex gap-8">
            <StatItem label="Daily_Logs" value="50K+" />
            <StatItem label="Global_Cities" value="250+" />
            <StatItem label="Taskforce_Status" value="Ready" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- PHASE SELECTOR (Left) --- */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-[10px] text-cyan-500/50 uppercase tracking-[0.3em] mb-4">
              Mission_Phases
            </h3>
            {phases.map((phase, idx) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(idx)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                  activePhase === idx
                    ? "bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                    : "bg-black/20 border-white/5 hover:border-cyan-500/30"
                }`}
              >
                <span
                  className={`text-lg font-bold ${activePhase === idx ? "text-cyan-400" : "text-gray-600"}`}
                >
                  {phase.id}
                </span>
                <div className="text-left">
                  <div className="text-xs font-bold uppercase tracking-widest">
                    {phase.title}
                  </div>
                  <div className="text-[9px] text-gray-500 uppercase">
                    Module_Ready
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* --- OPERATIONAL VIEW (Right) --- */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-black/40 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-xl h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400">
                    {phases[activePhase].icon}
                  </div>
                  <h2 className="text-2xl font-bold uppercase tracking-tighter text-white">
                    Phase_{phases[activePhase].id}: {phases[activePhase].title}
                  </h2>
                </div>

                <p className="text-sm text-cyan-100/80 leading-relaxed mb-8 p-4 bg-cyan-500/5 border-l-2 border-cyan-500">
                  {phases[activePhase].task}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {phases[activePhase].details.map((detail, i) => (
                    <div
                      key={i}
                      className="flex gap-3 p-4 bg-white/5 border border-white/5 rounded-lg text-[11px] leading-relaxed text-gray-400"
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

        {/* --- DATASET SOURCES & EVALUATION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="p-6 bg-black/40 border border-white/10 rounded-2xl">
            <h4 className="text-[10px] text-cyan-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Activity className="w-3 h-3" /> Evaluation_Scorecard
            </h4>
            <div className="space-y-4">
              <ScoreBar
                label="ETL Resilience"
                percent={20}
                details="Cleaning and join logic"
              />
              <ScoreBar
                label="Predictive Accuracy"
                percent={30}
                details="ETA & Churn performance"
              />
              <ScoreBar
                label="Explainability"
                percent={25}
                details="SHAP/LIME logic"
              />
              <ScoreBar
                label="Business Logic"
                percent={25}
                details="Surge Pricing rigor"
              />
            </div>
          </div>

          {/* PRIZE POOL SECTION */}
          <div className="p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <TrendingUp className="w-24 h-24" />
            </div>
            <h4 className="text-[10px] text-cyan-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <ShieldCheck className="w-3 h-3" /> Global_Gourmet_Bounty
            </h4>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <PrizeItem rank="1ST" amount="7,000" />
              <PrizeItem rank="2ND" amount="5,000" />
              <PrizeItem rank="3RD" amount="3,000" />
            </div>
            <div className="pt-4 border-t border-cyan-500/20 flex justify-between items-center">
              <span className="text-[10px] text-gray-500 uppercase">
                Total_Allocation
              </span>
              <span className="text-xl font-black text-cyan-400">₹15,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Helper Components ---

function StatItem({ label, value }) {
  return (
    <div className="text-right">
      <div className="text-[9px] text-gray-500 uppercase tracking-widest">
        {label}
      </div>
      <div className="text-sm font-bold text-cyan-400">{value}</div>
    </div>
  );
}

function ScoreBar({ label, percent, details }) {
  return (
    <div>
      <div className="flex justify-between text-[10px] mb-1">
        <span className="text-gray-300 uppercase">{label}</span>
        <span className="text-cyan-500">{percent}%</span>
      </div>
      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          className="h-full bg-cyan-500"
        />
      </div>
      <p className="text-[8px] text-gray-600 mt-1 uppercase italic">
        {details}
      </p>
    </div>
  );
}

function PrizeItem({ rank, amount }) {
  return (
    <div className="text-center">
      <div className="text-[9px] text-gray-500 mb-1">{rank}</div>
      <div className="text-lg font-black text-white italic">₹{amount}</div>
    </div>
  );
}
