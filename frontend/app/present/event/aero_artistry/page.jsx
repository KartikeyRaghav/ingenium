"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import {
  Target,
  Wind,
  Layers,
  Box,
  Trophy,
  ChevronLeft,
  Cpu,
  Zap,
  Navigation,
  ExternalLink,
  ShieldAlert,
  Ruler,
  Weight,
  AlertTriangle,
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
      className="relative min-h-screen text-blue-100 font-mono p-4 md:p-8 bg-black/30"
    >
      {/* HUD Corner Accents */}
      <div className="fixed top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-blue-500/30 rounded-tl-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-500/30 rounded-br-3xl pointer-events-none" />

      <main className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header ref={headerRef} className="mb-16 relative">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <div className="space-y-2">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-blue-500 mb-2"
              >
                <ChevronLeft className="w-4 h-4 animate-spin-slow" />
                <span className="text-[10px] tracking-[0.5em] uppercase">
                  Return to Events
                </span>
              </button>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase italic leading-none">
                AERO<span className="text-blue-500">.</span>AIR
              </h1>
              <p className="max-w-2xl text-xs md:text-sm text-blue-400/70 leading-relaxed uppercase tracking-widest mt-4">
                {activeCategory === 1
                  ? "Aerial Design & Endurance: Fabricate a lightweight, electric RC aircraft optimized for maximum glide time and gentle landings."
                  : "Precision Payload Challenge: Design a fixed-wing RC aircraft capable of carrying, sustaining, and accurately dropping payloads."}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <CategoryBtn
                active={activeCategory === 1}
                onClick={() => setActiveCategory(1)}
                label="01. RC_GLIDER"
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
            {/* Left Sidebar: Constraints & Rules */}
            <div className="lg:col-span-4 space-y-6">
              <SectionBox title="Technical_Constraints">
                <div className="space-y-4">
                  <ConstraintRow
                    icon={<Ruler className="w-4 h-4" />}
                    label="Max Wingspan"
                    value={activeCategory === 1 ? "120 cm" : "Compliance Req"}
                  />
                  <ConstraintRow
                    icon={<Weight className="w-4 h-4" />}
                    label="Max Weight"
                    value={activeCategory === 1 ? "1000g" : "T/W Compliance"}
                  />
                  <ConstraintRow
                    icon={<Zap className="w-4 h-4" />}
                    label="Propulsion"
                    value="Electric Only"
                  />
                  <ConstraintRow
                    icon={<ShieldAlert className="w-4 h-4" />}
                    label="Prohibited"
                    value="Metal Airframe/Gyros"
                  />
                </div>
              </SectionBox>

              <SectionBox title="Scoring_Algorithm">
                <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl">
                  <code className="text-[10px] text-blue-300 wrap-break-word leading-loose">
                    {activeCategory === 1
                      ? "TOTAL = (Round_1_Pts) + [(Glide_Time_R3 * 2) - Penalties]"
                      : "TOTAL = Stage_1 + Stage_2 + Stage_3"}
                  </code>
                </div>
              </SectionBox>

              {activeCategory === 1 && (
                <div className="p-6 bg-red-900/10 border border-red-500/30 rounded-2xl">
                  <h4 className="text-[10px] text-red-400 uppercase mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-3 h-3" /> Critical_Penalties
                  </h4>
                  <ul className="text-[9px] space-y-2 text-red-200/60 uppercase">
                    <li>▪ Nose-first crash (-20 pts)</li>
                    <li>▪ Structural failure on landing (-20 pts)</li>
                    <li>▪ Battery/Motor thermal event (-20 pts)</li>
                  </ul>
                </div>
              )}

              <button
                onClick={() =>
                  router.push(
                    `/present/registration?event=${activeCategory === 1 ? "glider" : "payload"}`,
                  )
                }
                className="w-full py-6 bg-blue-600 text-white rounded-2xl font-black italic tracking-widest flex items-center justify-center gap-3 hover:bg-blue-500 transition-all group overflow-hidden relative"
              >
                <span className="relative z-10 uppercase">
                  Initiate_Registration
                </span>
                <ExternalLink className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>

            {/* Right Main Column: Stages & Prizes */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white/5 border border-blue-500/20 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-8 right-8 text-blue-500/10">
                  <Navigation className="w-32 h-32 rotate-45" />
                </div>

                <h3 className="text-xl font-bold tracking-[0.4em] uppercase mb-12 flex items-center gap-4 text-white">
                  <Layers className="text-blue-500 w-5 h-5" /> Operational_Flow
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
                        <span className="text-[9px] px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/20 self-start uppercase">
                          {stage.meta}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        {stage.details.map((detail, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 text-[11px] text-blue-200/60 uppercase"
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

              {/* Prize Pool Section */}
              <PrizeSection />
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

// --- Helper Components ---

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
      <span className="relative z-10">{icon}</span>
      <span className="text-[10px] font-black tracking-[0.3em] relative z-10">
        {label}
      </span>
    </button>
  );
}

function SectionBox({ title, children }) {
  return (
    <div className="p-8 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden">
      <div className="text-[9px] text-blue-500 uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
        {title}
      </div>
      {children}
    </div>
  );
}

function ConstraintRow({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-white/5">
      <div className="flex items-center gap-3 text-blue-400">
        {icon}
        <span className="text-[10px] uppercase text-blue-200/50">{label}</span>
      </div>
      <span className="text-[10px] text-white font-bold">{value}</span>
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
          className={`p-6 bg-linear-to-br ${p.color} to-transparent border border-white/10 rounded-2xl`}
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
        title: "Technical Abstract",
        meta: "Online | Round 1",
        details: [
          "Technical Report (Max 5 pages)",
          "Construction Images/2D Photos",
          "Component Analysis",
          "Evaluation: Creativity/Efficiency",
        ],
      },
      {
        title: "Qualification Flight",
        meta: "Offline | Round 2",
        details: [
          "Min 30s Flight duration",
          "Max 3min total window",
          "2 attempts permitted",
          "Zero points round",
        ],
      },
      {
        title: "Final Glide Round",
        meta: "Offline | Round 3",
        details: [
          "60s Max climb to height",
          "Propeller cut within 10s",
          "Glide with motors OFF",
          "Gentle landing required",
        ],
      },
    ];
  return [
    {
      title: "Design & Mechanism",
      meta: "Online | Stage 1",
      details: [
        "Integration Strategy",
        "Release Mechanism Design",
        "Structural/Strength Analysis",
        "Detailed BOM submission",
      ],
    },
    {
      title: "Carrying Qualification",
      meta: "Offline | Stage 2",
      details: [
        "30s flight with payload",
        "Zero drop allowed in this stage",
        "Golf ball payloads (45g) 191]",
        "Scoring: Higher weight/count",
      ],
    },
    {
      title: "Final Precision Drop",
      meta: "Offline | Stage 3",
      details: [
        "30s initial stability flight",
        "10m diameter target arena",
        "Valid arena landing only",
        "Penalty: Drop < 30s flight",
      ],
    },
  ];
};
