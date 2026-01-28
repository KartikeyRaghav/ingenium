"use client";

import Link from "next/link";
import { PageTransitionWrapper, StarField } from "@/components/chronoverse";
import NeuralLink from "@/components/NeuralLink";

const PlasmaFlow = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
    <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,cyan_360deg)] animate-[spin_20s_linear_infinite] blur-[100px] opacity-20" />
    <div className="absolute top-[20%] left-[20%] w-75 h-75 bg-cyan-400 rounded-full mix-blend-screen filter blur-[80px] animate-blob" />
    <div className="absolute top-[60%] right-[20%] w-62.5 h-62.5 bg-blue-500 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000" />
    <div className="absolute bottom-[20%] left-[40%] w-87.5 h-87.5 bg-white rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />

    <style jsx>{`
      @keyframes blob {
        0% {
          transform: translate(0px, 0px) scale(1);
        }
        33% {
          transform: translate(30px, -50px) scale(1.1);
        }
        66% {
          transform: translate(-20px, 20px) scale(0.9);
        }
        100% {
          transform: translate(0px, 0px) scale(1);
        }
      }
      .animate-blob {
        animation: blob 7s infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      .animation-delay-4000 {
        animation-delay: 4s;
      }
    `}</style>
  </div>
);

export default function CleanEnergyPage() {
  return (
    <PageTransitionWrapper>
      <main className="relative min-h-screen bg-[#000810] overflow-hidden selection:bg-cyan-500/30 font-sans">
        <StarField />
        <PlasmaFlow />
        <NeuralLink />
        {/* Back Link */}
        <div className="absolute top-8 left-8 z-50">
          <Link href="/future">
            <button className="flex items-center gap-2 text-cyan-400/60 hover:text-white transition-colors group">
              <div className="w-8 h-8 border border-cyan-500/30 rounded flex items-center justify-center group-hover:bg-cyan-500/20 bg-black/40 backdrop-blur">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <span className="text-[10px] font-mono tracking-widest uppercase hidden md:block px-2 py-1 rounded bg-black/40">
                Return to Roadmap
              </span>
            </button>
          </Link>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center justify-center">
          <div className="w-full max-w-5xl bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(34,211,238,0.1)]">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_cyan]" />
                  <span className="text-cyan-200/60 text-xs font-mono tracking-[0.2em] uppercase">
                    Fusion Core Active
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
                  Clean{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-white">
                    Energy
                  </span>
                </h1>

                <p className="text-cyan-100/70 mb-8 leading-relaxed text-lg">
                  ECO-CORE is pioneering micro-fusion reactors and next-gen
                  solar filaments. Our goal is unlimited, zero-emission energy
                  for the entire Ingenium network.
                </p>

                {/* Interactive Sliders (Visual Only) */}
                <div className="space-y-6 bg-black/30 p-6 rounded-xl border border-white/5">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-cyan-400">
                      <span>PLASMA_DENSITY</span>
                      <span>98%</span>
                    </div>
                    <div className="h-2 w-full bg-cyan-950 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 w-[98%] shadow-[0_0_10px_cyan]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-blue-400">
                      <span>CORE_TEMP</span>
                      <span>150 MK</span>
                    </div>
                    <div className="h-2 w-full bg-blue-950 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[75%] shadow-[0_0_10px_blue]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Visual: Reactor Core */}
              <div className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-spin-slow-reverse" />
                <div className="absolute inset-4 border border-cyan-400/30 rounded-full animate-spin-slow" />

                {/* Core */}
                <div className="w-32 h-32 bg-white rounded-full shadow-[0_0_60px_cyan] animate-pulse relative z-10 flex items-center justify-center">
                  <div className="w-20 h-20 bg-cyan-100 rounded-full blur-md" />
                </div>

                <style jsx>{`
                  @keyframes spin-slow {
                    from {
                      transform: rotate(0deg);
                    }
                    to {
                      transform: rotate(360deg);
                    }
                  }
                  @keyframes spin-slow-reverse {
                    from {
                      transform: rotate(360deg);
                    }
                    to {
                      transform: rotate(0deg);
                    }
                  }
                  .animate-spin-slow {
                    animation: spin-slow 10s linear infinite;
                  }
                  .animate-spin-slow-reverse {
                    animation: spin-slow-reverse 15s linear infinite;
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransitionWrapper>
  );
}
