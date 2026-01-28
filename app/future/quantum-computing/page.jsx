"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PageTransitionWrapper, StarField } from "@/components/chronoverse";
import NeuralLink from "@/components/NeuralLink";

const QBitVisualization = () => {
  const canvasRef = useRef(null);
  const [state, setState] = useState("SUPERPOSITION");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.02;
      ctx.fillStyle = "rgba(5, 3, 10, 0.2)"; // Trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 150;

      // Draw concentric orbits
      ctx.strokeStyle = "rgba(139, 92, 246, 0.1)";
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Q-bit particles
      const particleCount = 20;
      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2 + time;

        // Complex movement for "Superposition" feel
        const x =
          centerX + Math.cos(angle) * (radius * Math.sin(time * 0.5 + i));
        const y =
          centerY + Math.sin(angle * 1.5) * (radius * Math.cos(time * 0.3 + i));

        ctx.fillStyle = `hsl(${260 + Math.sin(time + i) * 40}, 80%, 60%)`;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();

        // Connecting lines
        if (i % 2 === 0) {
          ctx.strokeStyle = `rgba(139, 92, 246, 0.1)`;
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
      }

      // Central Core
      const corePulse = Math.sin(time * 2) * 5;
      ctx.fillStyle = "rgba(139, 92, 246, 0.8)";
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#8b5cf6";
      ctx.beginPath();
      ctx.arc(centerX, centerY, 10 + corePulse, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center">
        <div className="inline-block px-4 py-1 border border-violet-500/30 rounded-full bg-violet-950/30 backdrop-blur text-violet-300 text-[10px] font-mono tracking-widest animate-pulse">
          STATE: {state}
        </div>
      </div>
    </div>
  );
};

export default function QuantumPage() {
  return (
    <PageTransitionWrapper>
      <main className="relative min-h-screen bg-[#05030a] overflow-hidden selection:bg-violet-500/30 font-sans">
        <StarField />
        <QBitVisualization />
        <NeuralLink />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#05030a_90%)] pointer-events-none" />

        {/* Back Link */}
        <div className="absolute top-8 left-8 z-50">
          <Link href="/future">
            <button className="flex items-center gap-2 text-violet-400/60 hover:text-white transition-colors group">
              <div className="w-8 h-8 border border-violet-500/30 rounded flex items-center justify-center group-hover:bg-violet-500/20 bg-black/40 backdrop-blur">
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
          <div className="max-w-xl text-center">
            <div className="mb-4 inline-block">
              <div className="h-px w-20 bg-linear-to-r from-transparent via-violet-500 to-transparent mx-auto mb-1" />
              <span className="text-[10px] font-mono text-violet-300 uppercase tracking-[0.3em]">
                Research Module
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight text-shadow-glow">
              Quantum <br /> Computing
            </h1>

            <p className="text-violet-200/60 mb-8 leading-relaxed text-lg backdrop-blur-sm bg-black/20 p-4 rounded-xl border border-violet-500/10">
              Harnessing the laws of quantum mechanics to solve problems beyond
              the reach of classical computers. Our Q-BIT-99 algorithm is
              optimizing complex logistical networks in real-time.
            </p>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-violet-900/10 border border-violet-500/20">
                <div className="text-2xl font-bold text-white mb-1">99</div>
                <div className="text-[9px] text-violet-400 uppercase tracking-wider">
                  Qubits
                </div>
              </div>
              <div className="p-4 rounded-lg bg-violet-900/10 border border-violet-500/20">
                <div className="text-2xl font-bold text-white mb-1">0.02ms</div>
                <div className="text-[9px] text-violet-400 uppercase tracking-wider">
                  Coherence
                </div>
              </div>
              <div className="p-4 rounded-lg bg-violet-900/10 border border-violet-500/20">
                <div className="text-2xl font-bold text-white mb-1">99%</div>
                <div className="text-[9px] text-violet-400 uppercase tracking-wider">
                  Fidelity
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransitionWrapper>
  );
}
