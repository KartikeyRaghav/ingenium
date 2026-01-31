"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import {
  Plane,
  Target,
  Wind,
  Layers,
  Box,
  Trophy,
  ChevronRight,
  ChevronLeft,
  Cpu,
  Zap,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AeroAirtistryPS() {
  const [activeCategory, setActiveCategory] = useState(1); // 1: Glider, 2: Payload
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -30,
        filter: "blur(10px)",
        duration: 1,
        ease: "expo.out",
      });

      gsap.to(".scan-line", {
        top: "100%",
        duration: 4,
        repeat: -1,
        ease: "none",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen text-blue-100 font-mono p-4 md:p-8"
    >
      {/* HUD Corner Accents */}
      <div className="fixed top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-500/30 rounded-tl-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-500/30 rounded-br-3xl pointer-events-none" />

      <button
        onClick={() => router.back()}
        className="relative z-50 flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full hover:bg-blue-500/20 transition-all mb-8 group"
      >
        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] uppercase tracking-[0.3em]">
          System_Return
        </span>
      </button>

      <main className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header ref={headerRef} className="mb-16 relative">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-500 mb-2">
                <Cpu className="w-4 h-4 animate-spin-slow" />
                <span className="text-[10px] tracking-[0.5em] uppercase">
                  Aerospace_Division_2026
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase italic leading-none">
                AERO<span className="text-blue-500">.</span>AIR
              </h1>
              <p className="max-w-xl text-xs md:text-sm text-blue-400/70 leading-relaxed uppercase tracking-widest">
                Fixed-wing RC aircraft competition blending
                engineering precision with piloting skill. Testing aerodynamics,
                structural integrity, and flight performance.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <CategoryBtn
                active={activeCategory === 1}
                onClick={() => setActiveCategory(1)}
                label="01. GLIDER_SOAR"
                icon={<Wind className="w-4 h-4" />}
              />
              <CategoryBtn
                active={activeCategory === 2}
                onClick={() => setActiveCategory(2)}
                label="02. PAYLOAD_DROP"
                icon={<Target className="w-4 h-4" />}
              />
            </div>
          </div>
        </header>

        {/* Dynamic Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(20px)" }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              <SectionBox title="Mission_Parameters">
                <p className="text-xs md:text-sm leading-relaxed text-blue-200/90 italic">
                  {activeCategory === 1
                    ? "Optimize fixed-wing aircraft for maximum gliding efficiency and energy management through aerodynamic excellence."
                    : "Design a fixed-wing RC aircraft capable of carrying, sustaining, and accurately dropping payloads with precision."}
                </p>
              </SectionBox>

              <div className="grid grid-cols-2 gap-4">
                <StatCard label="Phase_Count" value="03" sub="Sequential" />
                <StatCard label="Airframe" value="Fixed" sub="Wing_RC" />
              </div>

              {activeCategory === 2 && (
                <div className="p-6 bg-blue-900/20 border border-blue-500/40 rounded-2xl relative overflow-hidden group">
                  <div className="scan-line absolute left-0 top-0 w-full h-1 bg-blue-400/30 blur-sm pointer-events-none" />
                  <h4 className="text-[10px] text-blue-400 uppercase mb-4 flex items-center gap-2">
                    <Box className="w-3 h-3" /> Payload_Intel
                  </h4>
                  <ul className="space-y-2 text-[11px] text-blue-200/70">
                    <li className="flex justify-between">
                      <span>Object:</span>{" "}
                      <span className="text-white">Golf Ball</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Mass:</span> <span className="text-white">45g</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Radius:</span>{" "}
                      <span className="text-white">42mm</span>
                    </li>
                  </ul>
                </div>
              )}

              <button className="w-full py-6 bg-blue-600 text-white rounded-2xl font-black italic tracking-widest flex items-center justify-center gap-3 hover:bg-blue-500 transition-all group overflow-hidden relative">
                <span className="relative z-10 uppercase">
                  Initiate_Registration
                </span>
                <ExternalLink className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>

            {/* Main Content Column */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white/5 border border-blue-500/20 rounded-3xl p-8 backdrop-blur-md relative">
                <div className="absolute top-8 right-8 text-blue-500/20">
                  <Navigation className="w-24 h-24 rotate-45" />
                </div>

                <h3 className="text-xl font-bold tracking-[0.4em] uppercase mb-12 flex items-center gap-4 text-white">
                  <Layers className="text-blue-500 w-5 h-5" />{" "}
                  Operational_Stages
                </h3>

                <div className="space-y-12">
                  {getStages(activeCategory).map((stage, idx) => (
                    <div key={idx} className="relative pl-16 group">
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                        <span className="text-sm font-bold text-blue-400">
                          0{idx + 1}
                        </span>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <h4 className="text-white font-bold uppercase tracking-widest text-base">
                          {stage.title}
                        </h4>
                        <span className="text-[9px] px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/20 self-start">
                          {stage.meta}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        {stage.details.map((detail, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 text-[11px] text-blue-200/60 uppercase group-hover:text-blue-100 transition-colors"
                          >
                            <Zap className="w-2.5 h-2.5 text-blue-500" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prize Pool Integration */}
              <PrizeSection />
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

// --- Specialized UI Components ---

function CategoryBtn({ active, onClick, label, icon }) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 rounded-2xl flex items-center gap-4 border-2 transition-all duration-500 relative overflow-hidden ${
        active
          ? "border-blue-500 bg-blue-500/10 text-white"
          : "border-blue-500/20 text-blue-500/50 hover:border-blue-500/50"
      }`}
    >
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-blue-500/10"
          initial={false}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-10">{icon}</span>
      <span className="text-[10px] font-black tracking-[0.3em] relative z-10">
        {label}
      </span>
    </button>
  );
}

function SectionBox({ title, children }) {
  return (
    <div className="p-8 bg-white/5 border border-white/10 rounded-3xl relative group overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="text-[9px] text-blue-500 uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        {title}
      </div>
      {children}
    </div>
  );
}

function StatCard({ label, value, sub }) {
  return (
    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
      <div className="text-[8px] text-blue-500/60 uppercase tracking-widest mb-1">
        {label}
      </div>
      <div className="text-2xl font-black text-white italic leading-none">
        {value}
      </div>
      <div className="text-[8px] text-gray-500 uppercase mt-1">{sub}</div>
    </div>
  );
}

function PrizeSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        {
          rank: "ALPHA",
          prize: "15,000",
          label: "First Place",
          color: "from-yellow-400/20",
        },
        {
          rank: "BETA",
          prize: "7,000",
          label: "Second Place",
          color: "from-gray-400/20",
        },
        {
          rank: "GAMMA",
          prize: "3,000",
          label: "Third Place",
          color: "from-orange-400/20",
        },
      ].map((p, i) => (
        <div
          key={i}
          className={`p-6 bg-linear-to-br ${p.color} to-transparent border border-white/10 rounded-2xl hover:border-blue-500/40 transition-all`}
        >
          <Trophy className="w-4 h-4 text-blue-400 mb-4" />
          <div className="text-[10px] text-blue-500 uppercase tracking-tighter mb-1">
            {p.rank}_STATUS
          </div>
          <div className="text-3xl font-black text-white italic tracking-tighter">
            ₹{p.prize}
          </div>
          <div className="text-[9px] text-gray-400 uppercase mt-2">
            {p.label}
          </div>
        </div>
      ))}
    </div>
  );
}

const getStages = (cat) => {
  if (cat === 1)
    return [
      {
        title: "Design & Analysis",
        meta: "Deadline: Feb End",
        details: [
          "Materials & Configuration",
          "Structural/Aero Analysis",
          "Dimensional Constraints",
          "Bill of Materials (BOM)",
        ],
      },
      {
        title: "Qualifying Flight",
        meta: "Offline | Ingenium",
        details: [
          "2 Official Attempts",
          "3min Flight Window",
          "45s Min. Airborne",
          "Pass/Fail Evaluation",
        ],
      },
      {
        title: "Final Soaring",
        meta: "Offline | Main Event",
        details: [
          "30s Powered Flight",
          "Total Throttle Cut",
          "Pure Gliding Phase",
          "Duration-Based Scoring",
        ],
      },
    ];
  return [
    {
      title: "Payload Strategy",
      meta: "Deadline: Feb End",
      details: [
        "Dropping Mechanism",
        "Strength Analysis",
        "T/W Ratio Compliance",
        "Integration Strategy",
      ],
    },
    {
      title: "Carrying Quals",
      meta: "Offline | Ingenium",
      details: [
        "30s Weighted Flight",
        "Mechanism Inspection",
        "Zero Drop Protocol",
        "Weight/Count Scoring",
      ],
    },
    {
      title: "Precision Drop",
      meta: "Offline |  Main Event",
      details: [
        "10m Target Arena",
        "Valid Arena Landing",
        "No-Drop First 30s",
        "Accuracy Rules Apply",
      ],
    },
  ];
};


// Could you please upgrade the ui of this page according to the document provided. Try to keep as much info provided in the document on the page. Keep the theme same and don't add any background as I already have background set in the parent component. Make it as futuristic as possible. Also try to add a register now button for each PS.