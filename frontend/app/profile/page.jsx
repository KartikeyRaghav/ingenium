"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Settings,
  Zap,
  Database,
  LogOut,
  Terminal,
} from "lucide-react";

export default function ProfilePage() {
  const stats = [
    { label: "Sync Rate", value: "98.4%", color: "text-cyan-400" },
    { label: "Temporal Depth", value: "Level 14", color: "text-blue-400" },
    { label: "Memory Load", value: "2.4 TB", color: "text-violet-400" },
  ];

  return (
    <div className="relative min-h-screen bg-black/30 text-white font-mono overflow-hidden">
      {/* HUD Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0)_0%,rgba(2,4,10,1)_100%)] z-10" />

      <main className="relative z-20 max-w-6xl mx-auto px-6 py-12">
        {/* Profile Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* 1. Biometric Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 p-6 bg-black/40 border border-blue-500/20 rounded-2xl backdrop-blur-md relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
              <Shield className="w-12 h-12 text-blue-500" />
            </div>

            <div className="w-32 h-32 mx-auto rounded-full border-2 border-dashed border-blue-500/50 p-2 mb-6">
              <div className="w-full h-full rounded-full bg-[url('https://api.dicebear.com/7.x/pixel-art/svg?seed=Felix')] bg-cover border border-blue-500" />
            </div>

            <h2 className="text-xl font-bold text-center tracking-widest uppercase">
              Citizen_X-99
            </h2>
            <p className="text-[10px] text-blue-400/60 text-center mb-6">
              UID: CHRONO-772-ALPHA
            </p>

            <div className="space-y-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 p-3 rounded-lg border border-white/5"
                >
                  <div className="text-[10px] text-gray-500 uppercase">
                    {stat.label}
                  </div>
                  <div className={`text-lg font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 2. Main System Logs / Activity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="p-8 bg-black/40 border border-blue-500/20 rounded-2xl backdrop-blur-md">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-sm font-bold tracking-widest uppercase">
                    System_Activity_Logs
                  </h3>
                </div>
                <div className="text-[10px] text-cyan-500 animate-pulse">
                  ● LIVE_FEED
                </div>
              </div>

              <div className="space-y-4 font-mono text-xs">
                {[
                  "Successfully localized in Timeline_B-12",
                  "Neural link established with Chrono-Core",
                  "Identity verified via Biometric Uplink",
                  "Resource cache cleared (0.4s)",
                ].map((log, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-3 border-l-2 border-blue-500/30 bg-blue-500/5"
                  >
                    <span className="text-blue-500/50">[14:02:2{i}]</span>
                    <span className="text-gray-300">{log}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Settings, label: "Core" },
                { icon: Zap, label: "Power" },
                { icon: Database, label: "Data" },
                { icon: LogOut, label: "Sever" },
              ].map((action, i) => (
                <button
                  key={i}
                  className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-blue-500/10 hover:border-blue-500/50 transition-all group flex flex-col items-center gap-2"
                >
                  <action.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                  <span className="text-[10px] uppercase tracking-tighter">
                    {action.label}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Decorative Frame */}
      <div className="fixed inset-4 border border-blue-500/10 pointer-events-none" />
      <div className="fixed top-8 left-8 text-[10px] text-blue-500/20 font-mono tracking-[0.5em] vertical-text">
        INGENIUM_OS_v3.0.4
      </div>
    </div>
  );
}
