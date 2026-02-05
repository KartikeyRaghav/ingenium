"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageTransitionWrapper } from "@/components/chronoverse";
import { coreTeam, team } from "@/data/contact";
import { ChevronLeft, Instagram, Linkedin, Mail } from "lucide-react";

const HexFrame = ({ src, name }) => (
  <div className="relative w-64 h-64 group">
    <div className="absolute inset-0 bg-emerald-500/20 rotate-45 animate-pulse blur-xl group-hover:bg-emerald-500/40 transition-all" />
    <div
      className="relative w-full h-full bg-emerald-900/40 border-2 border-emerald-500/50 overflow-hidden"
      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
    >
      <img
        src={`/members/${name}.jpg`}
        alt={name}
        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
        onError={(e) => {
          e.target.src = `https://ui-avatars.com/api/?name=${name}&background=064e3b&color=34d399`;
        }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-emerald-900/80 to-transparent opacity-40" />
    </div>
  </div>
);

// --- Main Page ---

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("All");
  const categories = useMemo(
    () => ["All", ...new Set(team.map((m) => m.team))],
    [],
  );

  const filteredTeam = useMemo(() => {
    return activeTab === "All"
      ? team
      : team.filter((m) => m.team === activeTab);
  }, [activeTab]);

  return (
    <PageTransitionWrapper>
      <main className="relative min-h-screen bg-black/30 text-slate-200 selection:bg-emerald-500/40 overflow-x-hidden font-sans">
        {/* BACKGROUND ARCHITECTURE */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-size-[60px_60px] mask-[radial-gradient(ellipse_at_center,black,transparent_80%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          {/* TOP NAV BAR */}
          <nav className="flex flex-col md:flex-row justify-between items-center mb-20 pb-6 border-b border-emerald-500/10">
            <Link href="/?state=navigation" className="group">
              <div className="flex items-center gap-4 text-emerald-500/60 group-hover:text-emerald-400 transition-all">
                <ChevronLeft />
                <span className="text-[12px] font-bold tracking-[0.3em] uppercase">
                  Return to Chronoverse
                </span>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-6 font-mono text-[12px]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                LINK_STABLE
              </span>
              <span className="text-emerald-500/30">|</span>
              <span className="text-emerald-500/40 uppercase">
                Lat: 40.7128° N, Lon: 74.0060° W
              </span>
            </div>
          </nav>

          {/* HERO HEADER */}
          <header className="mb-16 relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                CONTACT <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-600 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  DIRECTORY
                </span>
              </h1>
              <div className="max-w-xl p-4 border-l-2 border-emerald-500/50 bg-emerald-500/5 backdrop-blur-sm">
                <p className="text-slate-400 font-mono text-sm leading-relaxed">
                  Accessing encrypted database... <br />
                  Authorized personnel listed below. Use high-frequency channels
                  for urgent deployment requests.
                </p>
              </div>
            </motion.div>
          </header>

          {/* SECTION: CORE COMMAND */}
          <section className="mb-40">
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-sm font-mono text-emerald-400 tracking-[0.5em] uppercase whitespace-nowrap">
                Core_Leadership
              </h2>
              <div className="h-px w-full bg-linear-to-r from-emerald-500/50 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {coreTeam.map((member, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="relative p-8 bg-slate-950/50 border border-emerald-500/10 hover:border-emerald-500/40 transition-all rounded-2xl group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
                    <span className="font-mono text-[40px] leading-none">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <HexFrame name={member.name} />
                    <h3 className="mt-6 text-2xl font-bold text-white tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-emerald-500 font-mono text-[12px] tracking-widest uppercase mb-6">
                      {member.role}
                    </p>

                    <div className="flex gap-4">
                      {member.email && (
                        <a
                          href={"mailto:" + member.email}
                          target="_blank"
                          className="text-sm font-mono text-slate-500 hover:text-emerald-400 transition-colors uppercase border-b border-transparent hover:border-emerald-400"
                        >
                          <Mail />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          className="text-sm font-mono text-slate-500 hover:text-emerald-400 transition-colors uppercase border-b border-transparent hover:border-emerald-400"
                        >
                          <Linkedin />
                        </a>
                      )}
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          className="text-sm font-mono text-slate-500 hover:text-emerald-400 transition-colors uppercase border-b border-transparent hover:border-emerald-400"
                        >
                          <Instagram />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* SECTION: FIELD OPERATIVES */}
          <section>
            <div className="flex flex-col mb-16 gap-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">
                  Field Operatives
                </h2>
                <p className="text-emerald-500/50 font-mono text-sm uppercase tracking-tighter">
                  Status: {filteredTeam.length} Active Nodes detected
                </p>
              </div>

              {/* FILTER UI */}
              <div className="flex flex-wrap justify-evenly p-1 bg-emerald-950/20 border border-emerald-500/10 backdrop-blur-md rounded-lg">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-4 py-2 text-[12px] font-mono rounded transition-all ${
                      activeTab === cat
                        ? "bg-emerald-500 text-black font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                        : "text-emerald-500/60 hover:text-emerald-400"
                    }`}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredTeam.map((co, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    key={co.name}
                    className="group relative aspect-3/4 bg-slate-900/40 rounded-xl overflow-hidden border border-white/5 hover:border-emerald-500/50 transition-all duration-500"
                  >
                    <img
                      src={`/members/${co.name}.jpg`}
                      alt={co.name}
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    />

                    {/* Glass Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="mb-2">
                        <span className="text-[12px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">
                          {co.team}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white leading-tight mb-4">
                        {co.name}
                      </h3>

                      <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <a
                          href={`mailto:${co.email}`}
                          className="p-2 bg-white/5 hover:bg-emerald-500/20 rounded-full border border-white/10 transition-colors"
                        >
                          <svg
                            className="w-4 h-4 text-emerald-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </a>
                        {co.linkedin && (
                          <a
                            href={co.linkedin}
                            target="_blank"
                            className="p-2 bg-white/5 hover:bg-emerald-500/20 rounded-full border border-white/10 transition-colors"
                          >
                            <svg
                              className="w-4 h-4 text-emerald-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </a>
                        )}
                        {co.instagram && (
                          <a
                            href={co.instagram}
                            target="_blank"
                            className="p-2 bg-white/5 hover:bg-emerald-500/20 rounded-full border border-white/10 transition-colors"
                          >
                            <svg
                              className="w-4 h-4 text-emerald-400"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Scanning Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/40 blur-sm -translate-y-full group-hover:animate-scan-fast" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>
        </div>
      </main>
    </PageTransitionWrapper>
  );
}
