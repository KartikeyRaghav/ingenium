"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Lock, Mail, User, Fingerprint, Cpu, ArrowRight } from "lucide-react";

export default function AuthTerminal() {
  const [isLogin, setIsLogin] = useState(true);
  const terminalRef = useRef(null);
  const scanLineRef = useRef(null);

  // Background Scanning Effect
  useEffect(() => {
    if (scanLineRef.current) {
      gsap.to(scanLineRef.current, {
        top: "100%",
        duration: 3,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black/30 flex items-center justify-center overflow-hidden font-mono">
      {/* Background Decorative HUD */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 border border-blue-500/20 rounded-full animate-[spin_60s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 border border-cyan-500/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
      </div>

      <motion.div
        ref={terminalRef}
        initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        className="relative z-10 w-full max-w-md p-1 bg-black/40 backdrop-blur-xl border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.15)]"
      >
        {/* Scanning Line Effect */}
        <div
          ref={scanLineRef}
          className="absolute left-0 right-0 h-0.5 bg-blue-400/50 shadow-[0_0_15px_#3b82f6] z-20 pointer-events-none"
          style={{ top: "0%" }}
        />

        <div className="p-8 border border-white/5 bg-linear-to-b from-blue-500/5 to-transparent">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/40 mb-4 group">
              <Fingerprint className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-[0.2em] uppercase">
              {isLogin ? "Identity Link" : "Neural Archive"}
            </h1>
            <p className="text-[10px] text-blue-400/60 uppercase tracking-widest mt-2">
              Chrono-Secure Protocol v4.0.2
            </p>
          </div>

          {/* Form Content */}
          <AnimatePresence mode="wait">
            <motion.form
              key={isLogin ? "login" : "signup"}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              {!isLogin && (
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
                  <input
                    type="text"
                    placeholder="CITIZEN NAME"
                    className="w-full bg-black/50 border border-blue-500/20 rounded-lg py-3 pl-10 pr-4 text-sm text-blue-100 placeholder:text-blue-900 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
              )}

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
                <input
                  type="email"
                  placeholder="NEURAL-MAIL ID"
                  className="w-full bg-black/50 border border-blue-500/20 rounded-lg py-3 pl-10 pr-4 text-sm text-blue-100 placeholder:text-blue-900 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
                <input
                  type="password"
                  placeholder="ENCRYPTION KEY"
                  className="w-full bg-black/50 border border-blue-500/20 rounded-lg py-3 pl-10 pr-4 text-sm text-blue-100 placeholder:text-blue-900 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              <button className="relative w-full group overflow-hidden py-4 bg-blue-600/20 border border-blue-500/50 rounded-lg text-blue-400 font-bold tracking-widest hover:bg-blue-600/30 transition-all active:scale-95">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isLogin ? "INITIALIZE SESSION" : "RESERVE TIMELINE"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
              </button>
            </motion.form>
          </AnimatePresence>

          {/* Footer Toggle */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-[10px] text-blue-500/60 hover:text-blue-400 transition-colors flex items-center justify-center gap-2 mx-auto uppercase tracking-tighter"
            >
              <Cpu className="w-3 h-3" />
              {isLogin
                ? "Need a Chrono-ID? Register here"
                : "Already registered? Uplink here"}
            </button>
          </div>
        </div>

        {/* Decorative Corner Brackets */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-500/50" />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-blue-500/50" />
      </motion.div>

      {/* System Status HUD (Right Side) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="text-[9px] text-blue-500/40 text-right">
              ENCRYPT_BUFF_{i}
              <br />
              STABLE
            </div>
            <div className="w-12 h-1 bg-blue-900/30 rounded-full overflow-hidden">
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }}
                className="w-full h-full bg-blue-500/60"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
