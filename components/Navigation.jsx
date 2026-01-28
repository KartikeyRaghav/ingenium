"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Clock, Calendar, Rocket, Phone, ArrowLeft, Zap, Globe, Cpu } from "lucide-react";
import { useRouter } from "next/navigation";
import { StarField } from "@/components/chronoverse"; // Assuming existing component

// --- Configuration ---
const NODES = [
  {
    id: "past",
    label: "PAST",
    sub: "Origins",
    x: 20, y: 60,
    icon: <Clock className="w-6 h-6" />,
    color: "#f59e0b", // Amber
    connections: ["present", "countdown"]
  },
  {
    id: "present",
    label: "PRESENT",
    sub: "Live Ops",
    x: 50, y: 50,
    icon: <Globe className="w-6 h-6" />,
    color: "#3b82f6", // Blue
    connections: ["future", "contact"]
  },
  {
    id: "future",
    label: "FUTURE",
    sub: "Vision",
    x: 80, y: 40,
    icon: <Rocket className="w-6 h-6" />,
    color: "#8b5cf6", // Violet
    connections: []
  },
  {
    id: "countdown",
    label: "TIME CORE",
    sub: "Reactor",
    x: 50, y: 20,
    icon: <Zap className="w-6 h-6" />,
    color: "#06b6d4", // Cyan
    connections: ["present"]
  },
  {
    id: "contact",
    label: "CONTACT",
    sub: "Uplink",
    x: 50, y: 80,
    icon: <Phone className="w-6 h-6" />,
    color: "#10b981", // Emerald
    connections: []
  },
];

// --- Sub-Components ---

const ConnectionLine = ({ start, end, active }) => {
  // Calculate length and angle for the SVG line
  const x1 = start.x;
  const y1 = start.y;
  const x2 = end.x;
  const y2 = end.y;

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
      <defs>
        <linearGradient id={`grad-${start.id}-${end.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={start.color} stopOpacity="0.1" />
          <stop offset="50%" stopColor="white" stopOpacity={active ? 0.8 : 0.2} />
          <stop offset="100%" stopColor={end.color} stopOpacity="0.1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Base Line */}
      <line
        x1={`${x1}%`} y1={`${y1}%`}
        x2={`${x2}%`} y2={`${y2}%`}
        stroke={`url(#grad-${start.id}-${end.id})`}
        strokeWidth={active ? 2 : 1}
        className="transition-all duration-500"
      />

      {/* Data Packet Animation */}
      <circle r={active ? 3 : 2} fill="white" filter="url(#glow)">
        <animateMotion 
          dur={active ? "1.5s" : "4s"} 
          repeatCount="indefinite"
          path={`M${x1 * window.innerWidth / 100},${y1 * window.innerHeight / 100} L${x2 * window.innerWidth / 100},${y2 * window.innerHeight / 100}`} 
          calcMode="linear"
        />
      </circle>
    </svg>
  );
};

const NavNode = ({ node, isHovered, onHover, onLeave, onClick }) => {
  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {/* The 3D Orb Structure */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        
        {/* Outer Rotating Ring (Dashed) */}
        <div 
          className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-[spin_10s_linear_infinite]"
          style={{ borderColor: isHovered ? node.color : 'rgba(255,255,255,0.1)' }}
        />
        
        {/* Inner Counter-Rotating Ring */}
        <div 
          className="absolute inset-2 rounded-full border border-dotted border-white/30 animate-[spin_15s_linear_infinite_reverse]"
          style={{ borderColor: isHovered ? node.color : 'rgba(255,255,255,0.15)' }}
        />

        {/* Core Glow */}
        <div 
          className="absolute inset-6 rounded-full blur-md transition-all duration-500"
          style={{ 
            backgroundColor: node.color, 
            opacity: isHovered ? 0.4 : 0.1,
            transform: isHovered ? 'scale(1.5)' : 'scale(1)'
          }}
        />

        {/* Central Icon Hexagon */}
        <div 
          className="relative z-10 w-12 h-12 bg-black/80 backdrop-blur-md flex items-center justify-center clip-path-hexagon border transition-all duration-300 group-hover:scale-110"
          style={{ 
            borderColor: isHovered ? node.color : 'rgba(255,255,255,0.2)',
            borderWidth: '1px',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
        >
          <div className="text-white transition-transform duration-300 group-hover:text-white" style={{ color: isHovered ? '#fff' : node.color }}>
            {node.icon}
          </div>
        </div>
      </div>

      {/* Holographic Label */}
      <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 text-center transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-2'}`}>
        <div className="text-sm font-bold tracking-[0.2em] text-white font-mono whitespace-nowrap bg-black/50 px-2 py-1 rounded border border-white/10 backdrop-blur-sm">
          {node.label}
        </div>
        <div className="text-[10px] text-white/50 tracking-widest uppercase mt-1 font-mono">
          {node.sub}
        </div>
        {/* Decorative Line connecting label to orb */}
        <div className="absolute -top-4 left-1/2 w-px h-4 bg-linear-to-b from-transparent to-white/20" />
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
  const router = useRouter();

  // Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Map tilts into view
      gsap.fromTo(mapRef.current,
        { rotateX: 60, scale: 0.5, opacity: 0 },
        { rotateX: 0, scale: 1, opacity: 1, duration: 1.5, ease: "expo.out" }
      );

      // 2. Nodes pop in randomly
      gsap.from(".nav-node-container", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        stagger: { amount: 0.5, from: "center" },
        ease: "back.out(1.7)",
        delay: 0.5
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 3D Tilt Effect on Mouse Move
  const handleMouseMove = (e) => {
    if (!mapRef.current) return;
    
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Normalize coordinates -1 to 1
    const xPct = (clientX / width - 0.5) * 2;
    const yPct = (clientY / height - 0.5) * 2;

    setMousePos({ x: clientX, y: clientY });

    // Tilt the map
    gsap.to(mapRef.current, {
      rotateY: xPct * 5, // Tilt X
      rotateX: -yPct * 5, // Tilt Y
      duration: 1,
      ease: "power2.out"
    });

    // Move the cursor label
    if (cursorLabelRef.current) {
        gsap.to(cursorLabelRef.current, {
            x: clientX + 20,
            y: clientY + 20,
            duration: 0.2
        });
    }
  };

  const handleNodeClick = (nodeId) => {
    // Zoom out effect
    // gsap.to(mapRef.current, {
    //   scale: 3,
    //   opacity: 0,
    //   duration: 0.8,
    //   ease: "power2.in",
    //   onComplete: () => {
    //   }
    // });
    router.push(`/${nodeId}`);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen bg-[#02040a] overflow-hidden flex items-center justify-center perspective-1000"
    >
      {/* <StarField /> */}
      
      {/* Background Grid (Floor) */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-size-[100px_100px] opacity-20 pointer-events-none" 
        style={{ transform: 'perspective(500px) rotateX(60deg) translateY(100px) scale(2)' }} 
      />

      {/* Custom Cursor Data Follower */}
      <div ref={cursorLabelRef} className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block">
        <div className="bg-blue-500/10 border border-blue-500/30 backdrop-blur-md px-2 py-1 rounded text-[9px] font-mono text-blue-300">
           X: {mousePos.x.toFixed(0)} <br/> Y: {mousePos.y.toFixed(0)} <br/> Z: 0
        </div>
      </div>

      {/* --- HEADER --- */}
      <div className="absolute top-8 left-0 w-full z-40 px-8 flex justify-between items-start pointer-events-none">
         <div className="pointer-events-auto">
             <button onClick={onNavigate} className="group flex items-center gap-2 text-blue-400 hover:text-white transition-colors">
                <div className="w-10 h-10 border border-blue-500/30 rounded-full flex items-center justify-center group-hover:bg-blue-500/10 transition-all">
                    <ArrowLeft className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono tracking-widest uppercase">Abort Navigation</span>
             </button>
         </div>
         <div className="text-right">
             <h2 className="text-3xl font-bold text-white tracking-tighter" style={{ fontFamily: "Oxanium, sans-serif" }}>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">NAVIGATOR</span> SYSTEM
             </h2>
             <p className="text-[10px] text-blue-500/50 font-mono tracking-[0.3em] uppercase mt-1">
                Ingenium Chronoverse v2.0
             </p>
         </div>
      </div>

      {/* --- THE 3D MAP PLANE --- */}
      <div 
        ref={mapRef}
        className="relative w-full max-w-5xl aspect-video transform-style-3d will-change-transform"
      >
        {/* Render Connections first (so they are behind nodes) */}
        {NODES.map(node => (
            node.connections.map(targetId => {
                const targetNode = NODES.find(n => n.id === targetId);
                if(!targetNode) return null;
                
                // Check if this connection should be highlighted
                const isActive = hoveredNode === node.id || hoveredNode === targetId;
                
                return (
                    <ConnectionLine 
                        key={`${node.id}-${targetId}`}
                        start={node}
                        end={targetNode}
                        active={isActive}
                    />
                );
            })
        ))}

        {/* Render Nodes */}
        {NODES.map((node) => (
            <NavNode 
                key={node.id}
                node={node}
                isHovered={hoveredNode === node.id}
                onHover={() => setHoveredNode(node.id)}
                onLeave={() => setHoveredNode(null)}
                onClick={() => handleNodeClick(node.id)}
            />
        ))}

        {/* Decorative "Scanner" Line */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl border border-white/5">
             <div className="w-full h-0.5 bg-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.5)] absolute top-0 animate-[scan_4s_linear_infinite]" />
        </div>

      </div>
      
      {/* HUD Corners */}
      <div className="absolute bottom-8 left-8 w-32 h-32 border-l border-b border-blue-500/20 rounded-bl-3xl pointer-events-none" />
      <div className="absolute top-8 right-8 w-32 h-32 border-r border-t border-blue-500/20 rounded-tr-3xl pointer-events-none" />

      <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        @keyframes scan {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}