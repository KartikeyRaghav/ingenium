"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { StarField } from "./chronoverse";

export default function TerminalTransition({ children }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayPath, setDisplayPath] = useState(pathname);

  useEffect(() => {
    // Trigger "Glitch" on route change
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      setDisplayPath(pathname);
    }, 1200); // Duration of the "Sync"

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-999 bg-black flex flex-col items-center justify-center font-mono pointer-events-none"
          >
            <StarField />
            {/* Horizontal Scan Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%] pointer-events-none" />

            <div className="relative w-full max-w-lg px-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-1 w-12 bg-blue-500 animate-pulse" />
                <span className="text-blue-400 text-[12px] tracking-[0.3em] uppercase">
                  Recalibrating Neural Link
                </span>
              </div>

              {/* Fake Terminal Logs */}
              <div className="space-y-1 text-blue-500/60 text-[11px] uppercase">
                <p className="animate-pulse"> {`> AUTH_KEY: VALIDATED`}</p>
                <p className="opacity-40">
                  {" "}
                  {`> TARGET_COORDINATES: ${pathname.toUpperCase()}`}
                </p>
                <p className="opacity-70">
                  {" "}
                  {`> BUFFER_STATUS: SYNCHRONIZING...`}
                </p>
                <div className="w-full h-1 bg-blue-900/30 mt-4 overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="h-full bg-blue-400 shadow-[0_0_10px_#60a5fa]"
                  />
                </div>
              </div>
            </div>

            {/* Glitch Overlay Effect */}
            <motion.div
              animate={{
                opacity: [0, 0.2, 0, 0.3, 0],
                backgroundColor: ["transparent", "#3b82f6", "transparent"],
              }}
              transition={{ duration: 0.2, repeat: Infinity }}
              className="absolute inset-0 z-50 mix-blend-overlay"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Actual Page Content */}
      <motion.div
        key={pathname}
        initial={{ filter: "blur(10px) brightness(0)", scale: 1.1 }}
        animate={{ filter: "blur(0px) brightness(1)", scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
}
