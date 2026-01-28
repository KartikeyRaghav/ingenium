"use client";

import { motion } from "framer-motion";
import { User, Fingerprint } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NeuralLink({ isLoggedIn = false }) {
  const router = useRouter();

  return (
    <div className="fixed bottom-8 right-8 z-100 group">
      {/* Decorative Outer Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 border border-blue-500/20 rounded-full animate-[spin_8s_linear_infinite]" />
        <div className="absolute w-20 h-20 border-t border-b border-cyan-500/30 rounded-full animate-[spin_4s_linear_infinite_reverse]" />
      </div>

      {/* Main Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => router.push(isLoggedIn ? "/profile" : "/auth")}
        className="relative w-14 h-14 bg-black/80 backdrop-blur-xl border border-blue-400/50 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] overflow-hidden"
      >
        {/* Status Light */}
        <div
          className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full ${isLoggedIn ? "bg-emerald-500 shadow-[0_0_8px_#10b981]" : "bg-blue-500 shadow-[0_0_8px_#3b82f6]"} animate-pulse`}
        />

        {isLoggedIn ? (
          <User className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
        ) : (
          <Fingerprint className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
        )}

        {/* Scanning Effect Overlay */}
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-linear-to-b from-transparent via-blue-500/20 to-transparent w-full h-1/2"
        />
      </motion.button>

      {/* Label (Reveals on hover) */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-black/80 border border-blue-500/30 px-3 py-1 rounded text-[10px] font-mono text-blue-400 whitespace-nowrap tracking-widest uppercase">
          {isLoggedIn ? "Access_Profile" : "Initialize_Uplink"}
        </div>
      </div>
    </div>
  );
}
