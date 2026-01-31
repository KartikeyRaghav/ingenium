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
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AeroAirtistryPS() {
  const [activeCategory, setActiveCategory] = useState(1); // 1: Glider, 2: Payload
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance "Flicker" Animation
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -50,
        filter: "blur(10px)",
        duration: 1,
        ease: "power4.out",
      });

      // Periodic "Scanning" light on the dashboard
      gsap.to(".scan-beam", {
        left: "100%",
        duration: 3,
        repeat: -1,
        ease: "none",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black/30 text-blue-100 font-mono overflow-hidden"
    >

      {/* HUD Overlay Elements */}
      <div className="absolute inset-0 pointer-events-none border border-blue-500/10 m-4 z-50 rounded-3xl" />
      <button
        onClick={() => router.back()}
        className="absolute top-10 left-10 z-50 flex items-center gap-2"
      >
        <ChevronLeft className="w-6 h-6 rounded-full animate-pulse" />
        <span className="text-sm uppercase text-blue-500/70">
          RETURN TO EVENTS
        </span>
      </button>

      <main className="relative z-10 max-w-7xl mx-auto px-8 pt-24 pb-12">
        {/* Header Section */}
        <header
          ref={headerRef}
          className="mb-12 border-b border-blue-500/20 pb-8 relative"
        >
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h1 className="text-5xl font-black tracking-tighter text-white uppercase italic">
                Aero <span className="text-blue-500">-</span> Airtistry
              </h1>
              <p className="mt-4 max-w-2xl text-sm text-blue-400/80 leading-relaxed uppercase tracking-wider">
                A fixed-wing RC aircraft competition testing aerodynamics,
                structural integrity, and real-world flight performance.
              </p>
            </div>
            <div className="flex gap-4">
              <CategoryBtn
                active={activeCategory === 1}
                onClick={() => setActiveCategory(1)}
                label="RC GLIDER"
                icon={<Wind />}
              />
              <CategoryBtn
                active={activeCategory === 2}
                onClick={() => setActiveCategory(2)}
                label="PAYLOAD DROP"
                icon={<Target />}
              />
            </div>
          </div>
          <div className="scan-beam absolute bottom-0 left-0 w-24 h-0.5 bg-blue-400 shadow-[0_0_15px_#3b82f6]" />
        </header>

        {/* Dynamic Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Left Column: Objective & Stats */}
            <div className="lg:col-span-4 space-y-6">
              <SectionBox title="Mission_Objective">
                <p className="text-sm leading-relaxed text-blue-200">
                  {activeCategory === 1
                    ? "Optimize fixed-wing aircraft for maximum gliding efficiency and energy management."
                    : "Design an aircraft capable of carrying, sustaining, and accurately dropping payloads."}
                </p>
              </SectionBox>

              <SectionBox title="Hardware_Specs">
                <div className="space-y-3">
                  <SpecRow
                    label="Category"
                    value={
                      activeCategory === 1
                        ? "Soaring Challenge"
                        : "Precision Drop"
                    }
                  />
                  <SpecRow label="System" value="Fixed-Wing RC " />
                  <SpecRow label="Evaluation" value="Multi-Stage " />
                </div>
              </SectionBox>

              {activeCategory === 2 && (
                <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                  <h4 className="text-[10px] text-blue-400 uppercase mb-2 flex items-center gap-2">
                    <Box className="w-3 h-3" /> Payload_Intel
                  </h4>
                  <p className="text-xs text-blue-200/80">
                    Organizers provide golf balls (45g, 42mm radius). Only arena
                    landings count.
                  </p>
                </div>
              )}
            </div>

            {/* Right Column: Stage Timeline */}
            <div className="lg:col-span-8">
              <div className="bg-black/40 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Plane className="w-32 h-32 rotate-12" />
                </div>

                <h3 className="text-lg font-bold tracking-[0.3em] uppercase mb-8 flex items-center gap-3">
                  <Layers className="text-blue-500" /> Operational_Stages
                </h3>

                <div className="space-y-12 relative">
                  <div className="absolute left-3.75 top-2 bottom-2 w-px bg-blue-500/20" />

                  {getStages(activeCategory).map((stage, idx) => (
                    <div key={idx} className="relative pl-12 group">
                      <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-black border border-blue-500/50 flex items-center justify-center z-10 group-hover:border-blue-400 transition-colors">
                        <span className="text-[10px] text-blue-400">
                          {idx + 1}
                        </span>
                      </div>
                      <h4 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-1">
                        {stage.title}
                      </h4>
                      <p className="text-[10px] text-blue-500/50 uppercase mb-3">
                        {stage.meta}
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {stage.details.map((detail, i) => (
                          <li
                            key={i}
                            className="text-[11px] text-blue-100/60 flex items-start gap-2"
                          >
                            <span className="text-blue-500 mt-1">▪</span>{" "}
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <PrizePool activeCategory={activeCategory} />
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
      className={`px-6 py-3 rounded-xl flex items-center gap-3 border transition-all duration-300 ${
        active
          ? "bg-blue-600/20 border-blue-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          : "border-blue-500/20 text-blue-500 hover:border-blue-500/50"
      }`}
    >
      {React.cloneElement(icon, { className: "w-4 h-4" })}
      <span className="text-xs font-bold tracking-widest uppercase">
        {label}
      </span>
    </button>
  );
}

function SectionBox({ title, children }) {
  return (
    <div className="p-6 bg-black/40 border border-blue-500/20 rounded-2xl backdrop-blur-md relative group">
      <div className="absolute -top-px left-4 px-2 bg-[#02040a] text-[9px] text-blue-500 uppercase tracking-[0.2em]">
        {title}
      </div>
      {children}
    </div>
  );
}

function SpecRow({ label, value }) {
  return (
    <div className="flex justify-between items-center text-[11px] border-b border-white/5 pb-2">
      <span className="text-blue-500/60 uppercase">{label}</span>
      <span className="text-blue-200 font-bold">{value}</span>
    </div>
  );
}

// Data Mapping from source
const getStages = (cat) => {
  if (cat === 1)
    return [
      {
        title: "Design & Analysis",
        meta: "Online | Before Feb End",
        details: [
          "Aircraft configuration",
          "Materials selection",
          "Propulsion system",
          "Structural analysis",
          "BOM & Cost",
        ],
      },
      {
        title: "Qualifying Flight",
        meta: "Offline | Ingenium Day Time",
        details: [
          "2 attempts per team ",
          "3min max flight window ",
          "Min 45s airborne time ",
          "No marks (Qualifying only)",
        ],
      },
      {
        title: "Final Gliding Round",
        meta: "Offline | Ingenium Day Time",
        details: [
          "Motor ON for 30s",
          "Complete throttle cut",
          "Pure gliding phase",
          "Duration is primary score",
        ],
      },
    ];
  return [
    {
      title: "Mechanism Submission",
      meta: "Online | Before Feb End",
      details: [
        "Payload integration",
        "Dropping mechanism",
        "Structural strength",
        "Compliance & Size",
        "Cost Analysis",
      ],
    },
    {
      title: "Carrying Qualification",
      meta: "Offline | Ingenium Day Time",
      details: [
        "30s flight with payload",
        "Mechanism inspection",
        "No drop allowed yet",
        "Higher weight = Higher score",
      ],
    },
    {
      title: "Final Precision Drop",
      meta: "Offline | Ingenium Day Time",
      details: [
        "30s initial flight",
        "10m diameter target",
        "Arena landing required",
        "No drops in first 30s",
      ],
    },
  ];
};

function PrizePool({ activeCategory }) {
  // Prize data from your specifications
  const prizeData = {
    1: { first: "15,000", second: "7,000", third: "3,000", total: "25,000" }, // RC Glider
    2: { first: "15,000", second: "7,000", third: "3,000", total: "25,000" }, // Payload Drop
  };

  const currentPrizes = prizeData[activeCategory];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-12 p-8 bg-black/40 border border-cyan-500/20 rounded-2xl backdrop-blur-xl relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] -mr-32 -mt-32" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
              <Trophy className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-[0.3em] uppercase text-white">
                Reward_Allocation
              </h3>
              <p className="text-[10px] text-cyan-500/60 uppercase tracking-widest">
                Temporal_Bounty_Distribution
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-gray-500 uppercase block">
              Total Pool
            </span>
            <span className="text-2xl font-black text-cyan-400 tracking-tighter">
              ₹{currentPrizes.total}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PrizeCard
            rank="01"
            amount={currentPrizes.first}
            label="First Prize"
            color="text-yellow-400"
          />
          <PrizeCard
            rank="02"
            amount={currentPrizes.second}
            label="Second Prize"
            color="text-gray-300"
          />
          <PrizeCard
            rank="03"
            amount={currentPrizes.third}
            label="Third Prize"
            color="text-orange-400"
          />
        </div>
      </div>
    </motion.div>
  );
}

function PrizeCard({ rank, amount, label, color }) {
  return (
    <div className="group relative p-6 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/40 transition-all duration-500">
      <div
        className={`text-[10px] font-bold mb-1 tracking-widest uppercase ${color}`}
      >
        {rank}_Rank
      </div>
      <div className="flex items-end gap-2 mb-4">
        <span className="text-2xl font-black text-white italic">₹{amount}</span>
        <span className="text-[10px] text-gray-500 mb-1">INR</span>
      </div>
      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          className={`h-full bg-linear-to-r from-transparent to-cyan-500/50`}
        />
      </div>
      <div className="mt-4 flex items-center justify-between text-[10px] text-gray-400 uppercase tracking-tighter group-hover:text-white transition-colors">
        <span>{label}</span>
        <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}
