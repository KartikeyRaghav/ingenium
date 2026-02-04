"use client";

import api from "@/lib/api";
import { motion } from "framer-motion";
import {
  Shield,
  Settings,
  Database,
  LogOut,
  Terminal,
  Cpu,
  ChevronLeft,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { EVENT_CONFIG } from "@/data/event_config";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

export default function ProfilePage() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { logout, user } = useContext(AuthContext);

  useEffect(() => {
    const fetchRegistrations = async () => {
      if (!user?.email) return;
      try {
        const response = await api.get(
          `http://localhost:5000/api/registration?email=${user.email}`,
        );
        setRegistrations(response.data);
      } catch (error) {
        console.error("Failed to fetch registrations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, [user]);

  const stats = [
    { label: "Identity Status", value: "Verified", color: "text-cyan-400" },
    {
      label: "Active Nodes",
      value: registrations.length,
      color: "text-blue-400",
    },
    {
      label: "Joined",
      value: user ? new Date(user.created_at).toLocaleDateString() : "---",
      color: "text-violet-400",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black/30 text-white font-mono overflow-x-hidden">
      {/* HUD Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0)_0%,rgba(2,4,10,1)_100%)] z-10" />

      <main className="relative z-20 max-w-6xl mx-auto px-6 py-12">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-blue-500 mb-2"
        >
          <ChevronLeft className="w-4 h-4 animate-spin-slow" />
          <span className="text-[10px] tracking-[0.5em] uppercase">Return</span>
        </button>
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
              <div
                className="w-full h-full rounded-full bg-cover border border-blue-500"
                style={{
                  backgroundImage: `url('https://api.dicebear.com/7.x/pixel-art/svg?seed=${user?.name || "Felix"}')`,
                }}
              />
            </div>

            <h2 className="text-xl font-bold text-center tracking-widest uppercase">
              {user?.name || "Unauthorized_User"}
            </h2>
            <p className="text-[10px] text-blue-400/60 text-center mb-6 break-all">
              {user?.email || "NO_UPLINK_FOUND"}
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

          {/* 2. Registration Logs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="p-4 sm:p-8 bg-black/40 border border-blue-500/20 rounded-2xl backdrop-blur-md min-h-100">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                <div className="flex items-center gap-3 mb-2 sm:mb-0">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-sm font-bold tracking-widest uppercase">
                    Active_Event_Registrations
                  </h3>
                </div>
                <div className="text-[10px]  self-end text-cyan-500 animate-pulse">
                  ● {registrations.length} SECTORS_LOCKED
                </div>
              </div>

              <div className="space-y-6 font-mono">
                {loading ? (
                  <div className="text-gray-500 italic animate-pulse">
                    Scanning database...
                  </div>
                ) : registrations.length > 0 ? (
                  registrations.map((reg, i) => {
                    const event = EVENT_CONFIG[reg.ps_name] || {
                      name: reg.ps_name,
                      color: "#fff",
                      sector: "UNK-00",
                    };
                    return (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={i}
                        className="group relative p-4 border border-white/5 bg-white/5 rounded-lg hover:border-blue-500/40 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row flex-wrap sm:justify-between sm:items-start gap-4">
                          <div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                              <span className="text-[10px] px-2 py-0.5 bg-blue-500/20 w-fit text-blue-400 rounded">
                                {event.sector}
                              </span>
                              <h4 className="font-bold text-blue-100 uppercase tracking-tight">
                                {event.name}
                              </h4>
                            </div>
                            <p className="text-xs text-gray-400">
                              Team:{" "}
                              <span className="text-gray-200">
                                {reg.team_name}
                              </span>
                            </p>
                          </div>

                          <div className="text-right self-end">
                            <div className="flex -space-x-2 mb-2 justify-end">
                              {reg.participants.map((p, idx) => (
                                <div
                                  key={idx}
                                  title={p.name}
                                  className="w-6 h-6 rounded-full border border-black bg-blue-900 flex items-center justify-center text-[8px]"
                                >
                                  {p.name[0]}
                                </div>
                              ))}
                            </div>
                            <div className="text-[10px] text-gray-500 uppercase italic">
                              {reg.participants.length} Operative(s)
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })
                ) : (
                  <div className="text-gray-600 text-xs border border-dashed border-gray-800 p-8 text-center rounded-xl">
                    NO_ACTIVE_REGISTRATIONS_DETECTED. <br />{" "}
                    PLEASE_ENROLL_IN_MISSIONS.
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-1 gap-4">
              <button
                onClick={logout}
                className={`p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-blue-500/10 transition-all group flex flex-col items-center gap-2 hover:border-red-500/50 hover:text-red-400`}
              >
                <LogOut className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                <span className="text-[10px] uppercase tracking-tighter">
                  Logout
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Decorative Frame */}
      <div className="fixed inset-4 border border-blue-500/10 pointer-events-none" />
      <div className="fixed top-8 left-8 text-[10px] text-blue-500/20 font-mono tracking-[0.5em] [writing-mode:vertical-lr] rotate-180 uppercase">
        System_Interface_v4.2
      </div>
    </div>
  );
}
