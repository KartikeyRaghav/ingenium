"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { StarField } from "@/components/chronoverse"; 

// --- Sub-Components ---

// The Rotating Time Rings
const PortalRing = ({ color, size, duration, direction, delay }) => (
  <div
    className={`absolute rounded-full border border-dashed opacity-60 ${direction === 'clock' ? 'animate-[spin_linear_infinite]' : 'animate-[spin_linear_infinite_reverse]'}`}
    style={{
      width: size,
      height: size,
      borderColor: color,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      boxShadow: `0 0 15px ${color}40`,
    }}
  />
);

export default function LandingPage({ onNavigate }) {
  const containerRef = useRef(null);
  const portalRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const tagRef = useRef(null);
  const ctaRef = useRef(null);
  const [isWarping, setIsWarping] = useState(false);

  // Initial Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Portal Expansion
      tl.fromTo(portalRef.current, 
        { scale: 0, opacity: 0, rotate: -90 },
        { scale: 1, opacity: 1, rotate: 0, duration: 2, ease: "elastic.out(1, 0.7)" }
      )
      // 2. Title Reveal (Glitch/Decode effect simulated via stagger)
      .fromTo(".char-reveal", 
        { opacity: 0, y: 20, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.05, duration: 0.8, ease: "power2.out" },
        "-=1.5"
      )
      // 3. Top Tag (IIT Indore)
      .from(tagRef.current, { opacity: 0, y: -20, duration: 1 }, "-=1.0")
      // 4. Subtitle (Chronoverse)
      .from(subtitleRef.current, { opacity: 0, letterSpacing: "1em", duration: 1 }, "-=0.8")
      // 5. Button Fade In
      .from(ctaRef.current, { opacity: 0, y: 20, duration: 1 }, "-=0.5");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Mouse Parallax Effect
  const handleMouseMove = (e) => {
    if (isWarping) return;
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;

    gsap.to(portalRef.current, {
      rotateX: -y,
      rotateY: x,
      duration: 1,
      ease: "power2.out",
    });
  };

  // The "Warp Speed" Exit Sequence
  const handleEnter = () => {
    setIsWarping(true);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
             if (onNavigate) onNavigate();
        }
      });

      // 1. Audio/Visual buildup
      tl.to(ctaRef.current, { opacity: 0, scale: 0.8, duration: 0.3 })
        .to([titleRef.current, subtitleRef.current, tagRef.current], { opacity: 0, duration: 0.3 }, "<")
        
      // 2. The Portal sucks everything in
        .to(portalRef.current, { 
            scale: 50, 
            opacity: 0, 
            duration: 1.5, 
            ease: "expo.in" 
        })
        
      // 3. Flash to white (simulating warp entry)
        .to(".warp-flash", { opacity: 1, duration: 0.1, ease: "power1.in" }, "-=0.5");
        
    }, containerRef);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen bg-[#02040a] overflow-hidden flex items-center justify-center perspective-1000"
    >
      {/* Backgrounds */}
      <StarField />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] opacity-40" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      
      {/* The Hyperspace Flash Overlay */}
      <div className="warp-flash absolute inset-0 bg-white opacity-0 pointer-events-none z-50" />

      {/* --- TOP LEFT HEADING (Event Name) --- */}
      <div className="absolute top-8 left-8 z-30 pointer-events-none mix-blend-screen hidden md:block">
          <h2 className="text-2xl font-bold tracking-widest text-blue-100/80 uppercase" style={{ fontFamily: "Oxanium, sans-serif" }}>
              INGENIUM
          </h2>
      </div>

      {/* --- THE CHRONO GATE (Central 3D Element) --- */}
      <div 
        ref={portalRef}
        className="relative z-10 flex items-center justify-center transform-style-3d will-change-transform"
      >
        {/* Core Glow */}
        <div className="absolute w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[60px] animate-pulse-slow" />
        
        {/* Ring 1: Past (Amber) - Large, Slow */}
        <PortalRing color="#f59e0b" size="500px" duration={40} direction="clock" delay={0} />
        
        {/* Ring 2: Future (Violet) - Medium, Medium */}
        <PortalRing color="#8b5cf6" size="380px" duration={25} direction="counter" delay={-5} />
        
        {/* Ring 3: Present (Cyan) - Small, Fast */}
        <PortalRing color="#06b6d4" size="260px" duration={15} direction="clock" delay={-2} />

        {/* Central Singularity */}
        <div className="absolute w-20 h-20 bg-white rounded-full blur-[2px] shadow-[0_0_40px_rgba(255,255,255,0.8)] animate-pulse" />
        <div className="absolute w-16 h-16 bg-black rounded-full z-10 flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-[conic-gradient(transparent,rgba(59,130,246,1))] animate-[spin_2s_linear_infinite]" />
             <div className="absolute inset-1 bg-black rounded-full" />
        </div>
      </div>

      {/* --- CONTENT OVERLAY --- */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        
        {/* Title Group */}
        <div className="text-center mb-8 mix-blend-screen space-y-4">
          
          {/* Top Tag: IIT Indore */}
          <p ref={tagRef} className="text-xs md:text-sm text-blue-300/60 font-mono tracking-[0.3em] uppercase border-b border-blue-500/20 pb-2 inline-block">
            IIT Indore • Techno-Cultural Fest
          </p>

          {/* Main Title: INGENIUM (Decoded) */}
          <h1 ref={titleRef} className="block text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-900 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]" style={{ fontFamily: "Oxanium, sans-serif" }}>
            {"INGENIUM".split("").map((char, i) => (
              <span key={i} className="char-reveal inline-block">{char}</span>
            ))}
          </h1>
          
          {/* Subtitle: Chronoverse */}
          <div ref={subtitleRef} className="flex items-center justify-center gap-4">
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-blue-500" />
            <span className="text-sm md:text-lg font-light text-blue-200 tracking-[0.2em] uppercase">
              CHRONOVERSE: Past, Present, Future
            </span>
            <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-blue-500" />
          </div>
        </div>

        {/* CTA Interaction Zone */}
        <div ref={ctaRef} className="mt-12 pointer-events-auto">
          <button
            onClick={handleEnter}
            className="group relative px-12 py-5 bg-transparent overflow-hidden"
          >
            {/* Button Borders (Tech Corners) */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-blue-500 transition-all duration-300 group-hover:w-full group-hover:h-full" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-blue-500 transition-all duration-300 group-hover:w-full group-hover:h-full" />
            
            {/* Hover Fill */}
            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300" />
            
            {/* Text & Icon */}
            <div className="relative flex items-center gap-3 text-blue-300 group-hover:text-white transition-colors font-mono text-sm tracking-widest uppercase">
              <span>Navigate Chronoverse</span>
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            
            {/* Scanning Line Effect underneath */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-500/20">
               <div className="h-full w-1/3 bg-blue-400 blur-[2px] animate-[slide_2s_linear_infinite]" />
            </div>
          </button>
        </div>

      </div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        @keyframes pulse-slow {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(1.1); }
        }
        .animate-pulse-slow {
             animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}