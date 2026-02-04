"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Clock, Rocket, Phone, ArrowLeft, Zap, Globe } from "lucide-react";
import { useRouter } from "next/navigation";

// --- Configuration ---
// Added mobileX and mobileY to manually spread icons apart on phone screens
const NODES = [
  {
    id: "heritage",
    location: "past",
    label: "HERITAGE",
    sub: "Origins",
    // Desktop: Bottom Left
    x: 20,
    y: 60,
    // Mobile: Push lower left
    mobileX: 20,
    mobileY: 70,
    icon: <Clock />,
    color: "#f59e0b",
    connections: ["events", "countdown"],
  },
  {
    id: "events",
    location: "present",
    label: "Competitons",
    sub: "Live Ops",
    // Desktop: Center
    x: 50,
    y: 50,
    // Mobile: Center
    mobileX: 50,
    mobileY: 50,
    icon: <Globe />,
    color: "#3b82f6",
    connections: ["future", "contact"],
  },
  {
    id: "future",
    location: "future",
    label: "FUTURE",
    sub: "Vision",
    // Desktop: Right
    x: 80,
    y: 40,
    // Mobile: Push upper right
    mobileX: 80,
    mobileY: 30,
    icon: <Rocket />,
    color: "#8b5cf6",
    connections: [],
  },
  {
    id: "countdown",
    location: "countdown",
    label: "TIME CORE",
    sub: "Reactor",
    // Desktop: Top Center
    x: 50,
    y: 20,
    // Mobile: Top Center (Higher up)
    mobileX: 50,
    mobileY: 10,
    icon: <Zap />,
    color: "#06b6d4",
    connections: ["events"],
  },
  {
    id: "contact",
    location: "contact",
    label: "CONTACT",
    sub: "Uplink",
    // Desktop: Bottom Center
    x: 50,
    y: 80,
    // Mobile: Bottom Center (Lower down)
    mobileX: 50,
    mobileY: 90,
    icon: <Phone />,
    color: "#10b981",
    connections: [],
  },
];

// --- Sub-Components ---

const NavNode = ({ node, isHovered, onHover, onLeave, onClick, isMobile }) => {
  // Use mobile coordinates if on mobile
  const finalX = isMobile ? node.mobileX : node.x;
  const finalY = isMobile ? node.mobileY : node.y;

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-40 transition-[top,left] duration-500 ease-in-out"
      style={{ left: `${finalX}%`, top: `${finalY}%` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {/* 3D Orb Structure */}
      <div className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
        {/* Outer Rotating Ring */}
        <div
          className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-[spin_10s_linear_infinite]"
          style={{
            borderColor: isHovered ? node.color : "rgba(255,255,255,0.1)",
          }}
        />

        {/* Inner Counter-Rotating Ring */}
        <div
          className="absolute inset-1 md:inset-2 rounded-full border border-dotted border-white/30 animate-[spin_15s_linear_infinite_reverse]"
          style={{
            borderColor: isHovered ? node.color : "rgba(255,255,255,0.15)",
          }}
        />

        {/* Core Glow */}
        <div
          className="absolute inset-4 md:inset-6 rounded-full blur-md transition-all duration-500"
          style={{
            backgroundColor: node.color,
            opacity: isHovered ? 0.4 : 0.1,
            transform: isHovered ? "scale(1.5)" : "scale(1)",
          }}
        />

        {/* Icon Hexagon */}
        <div
          className="relative z-10 w-8 h-8 md:w-12 md:h-12 bg-black/80 backdrop-blur-md flex items-center justify-center clip-path-hexagon border transition-all duration-300 group-hover:scale-110"
          style={{
            borderColor: isHovered ? node.color : "rgba(255,255,255,0.2)",
            borderWidth: "1px",
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          <div
            className="text-white transition-transform duration-300 group-hover:text-white [&>svg]:w-4 [&>svg]:h-4 md:[&>svg]:w-6 md:[&>svg]:h-6"
            style={{ color: isHovered ? "#fff" : node.color }}
          >
            {node.icon}
          </div>
        </div>
      </div>

      {/* Label */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 text-center transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-60 translate-y-2"}`}
      >
        <div className="text-[10px] md:text-sm font-bold tracking-[0.2em] text-white font-mono whitespace-nowrap bg-black/50 px-1.5 py-0.5 md:px-2 md:py-1 rounded border border-white/10 backdrop-blur-sm">
          {node.label}
        </div>
        <div className="hidden md:block text-[8px] md:text-[10px] text-white/50 tracking-widest uppercase mt-1 font-mono">
          {node.sub}
        </div>
        <div className="absolute -top-2 md:-top-4 left-1/2 w-px h-2 md:h-4 bg-linear-to-b from-transparent to-white/20" />
      </div>
    </div>
  );
};

export default function Navigation({ onNavigate }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const cursorLabelRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  // Screen Size Detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    // Initial check
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        mapRef.current,
        { rotateX: 60, scale: 0.5, opacity: 0 },
        { rotateX: 0, scale: 1, opacity: 1, duration: 1.5, ease: "expo.out" }
      );

      gsap.from(".nav-node-container", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: { amount: 0.5, from: "center" },
        ease: "back.out(1.7)",
        delay: 0.5,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    if (!mapRef.current) return;
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const xPct = (clientX / width - 0.5) * 2;
    const yPct = (clientY / height - 0.5) * 2;

    setMousePos({ x: clientX, y: clientY });

    gsap.to(mapRef.current, {
      rotateY: xPct * 5,
      rotateX: -yPct * 5,
      duration: 1,
      ease: "power2.out",
    });

    if (cursorLabelRef.current) {
      gsap.to(cursorLabelRef.current, {
        x: clientX + 20,
        y: clientY + 20,
        duration: 0.2,
      });
    }
  };

  const handleNodeClick = (nodeId) => {
    router.push(`/${nodeId}`);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen bg-black/30 overflow-hidden flex items-center justify-center perspective-1000"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-size-[60px_60px] md:bg-size-[100px_100px] opacity-20 pointer-events-none"
        style={{
          transform:
            "perspective(500px) rotateX(60deg) translateY(100px) scale(2)",
        }}
      />

      {/* Desktop Cursor Label */}
      <div
        ref={cursorLabelRef}
        className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block"
      >
        <div className="bg-blue-500/10 border border-blue-500/30 backdrop-blur-md px-2 py-1 rounded text-[9px] font-mono text-blue-300">
          X: {mousePos.x.toFixed(0)} <br /> Y: {mousePos.y.toFixed(0)} <br /> Z:
          0
        </div>
      </div>

      {/* Header */}
      <div className="absolute top-4 left-0 w-full z-40 px-4 md:px-8 flex justify-between items-start pointer-events-none">
        <div className="pointer-events-auto">
          <button
            onClick={onNavigate}
            className="group flex items-center gap-2 text-blue-400 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 border border-blue-500/30 rounded-full flex items-center justify-center group-hover:bg-blue-500/10 transition-all">
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="hidden sm:inline text-xs font-mono tracking-widest uppercase">
              Abort Navigation
            </span>
            <span className="sm:hidden text-[10px] font-mono tracking-widest uppercase">
              BACK
            </span>
          </button>
        </div>
        <div className="text-right">
          <h2
            className="text-xl md:text-3xl font-bold text-white tracking-tighter"
            style={{ fontFamily: "Oxanium, sans-serif" }}
          >
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
              NAVIGATOR
            </span>{" "}
            SYSTEM
          </h2>
          <p className="text-[8px] md:text-[10px] text-blue-500/50 font-mono tracking-[0.3em] uppercase mt-1">
            Ingenium Chronoverse
          </p>
        </div>
      </div>

      {/* Main Map Container 
          - Mobile: h-[70vh] (tall) to allow vertical spacing
          - Desktop: aspect-video (wide) for cinematic look
      */}
      <div
        ref={mapRef}
        className="relative w-full max-w-[95vw] md:max-w-5xl h-[70vh] md:h-auto md:aspect-video transform-style-3d will-change-transform"
      >
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {NODES.map((node) =>
            node.connections.map((targetId) => {
              const targetNode = NODES.find((n) => n.id === targetId);
              if (!targetNode) return null;
              const isActive =
                hoveredNode === node.id || hoveredNode === targetId;

              // Determine start/end coordinates based on isMobile
              const startX = isMobile ? node.mobileX : node.x;
              const startY = isMobile ? node.mobileY : node.y;
              const endX = isMobile ? targetNode.mobileX : targetNode.x;
              const endY = isMobile ? targetNode.mobileY : targetNode.y;

              const gradId = `grad-${node.id}-${targetId}`;

              return (
                <g key={`${node.id}-${targetId}`}>
                  <defs>
                    <linearGradient
                      id={gradId}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0%"
                        stopColor={node.color}
                        stopOpacity="0.1"
                      />
                      <stop
                        offset="50%"
                        stopColor="white"
                        stopOpacity={isActive ? 0.8 : 0.2}
                      />
                      <stop
                        offset="100%"
                        stopColor={targetNode.color}
                        stopOpacity="0.1"
                      />
                    </linearGradient>
                  </defs>

                  <line
                    x1={startX}
                    y1={startY}
                    x2={endX}
                    y2={endY}
                    stroke={`url(#${gradId})`}
                    strokeWidth={isActive ? 0.5 : 0.2}
                    vectorEffect="non-scaling-stroke"
                    className="transition-all duration-500"
                  />

                  <circle r={isActive ? 1 : 0.5} fill="white">
                    <animateMotion
                      dur={isActive ? "1.5s" : "4s"}
                      repeatCount="indefinite"
                      path={`M${startX},${startY} L${endX},${endY}`}
                    />
                  </circle>
                </g>
              );
            })
          )}
        </svg>

        {NODES.map((node) => (
          <NavNode
            key={node.id}
            node={node}
            isMobile={isMobile}
            isHovered={hoveredNode === node.id}
            onHover={() => setHoveredNode(node.id)}
            onLeave={() => setHoveredNode(null)}
            onClick={() => handleNodeClick(node.location)}
          />
        ))}

        {/* Scanner Line */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl border border-white/5">
          <div className="w-full h-0.5 bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.5)] absolute top-0 animate-[scan_4s_linear_infinite]" />
        </div>
      </div>

      {/* HUD Corners - Hidden on mobile to save space */}
      <div className="hidden md:block absolute bottom-8 left-8 w-32 h-32 border-l border-b border-blue-500/20 rounded-bl-3xl pointer-events-none" />
      <div className="hidden md:block absolute top-8 right-8 w-32 h-32 border-r border-t border-blue-500/20 rounded-tr-3xl pointer-events-none" />

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        @keyframes scan {
          0% {
            top: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}