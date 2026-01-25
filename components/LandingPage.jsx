"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const LandingPage = ({ onNavigate }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const dateRef = useRef(null);
  const buttonRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power2.out",
      })
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.6",
        )
        .from(
          dateRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.4",
        )
        .fromTo(
          buttonRef.current,
          {
            opacity: 0,
            scale: 0.95,
            duration: 0.8,
          },
          { opacity: 1, scale: 1, duration: 0.5 },
          "-=0.4",
        );
    }, containerRef);

    // Particle background animation
    if (particlesRef.current) {
      const particles = particlesRef.current.children;
      Array.from(particles).forEach((particle, i) => {
        gsap.to(particle, {
          y: "random(-20, 20)",
          x: "random(-20, 20)",
          duration: "random(3, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.1,
        });
      });
    }

    return () => ctx.revert(); // 🔥 THIS LINE FIXES IT
  }, []);

  const handleButtonHover = (isHovering) => {
    // GSAP Animation Hook: Button hover micro-interaction
    gsap.to(buttonRef.current, {
      scale: isHovering ? 1.05 : 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-[#0a0e1a] overflow-hidden flex items-center justify-center"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            animation: "gridDrift 20s linear infinite",
          }}
        />
      </div>

      {/* Slow Moving Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Time Line Sweep Effect */}
      <div
        className="absolute left-0 top-0 h-full w-px bg-linear-to-b from-transparent via-blue-500/40 to-transparent"
        style={{
          animation: "sweep 8s ease-in-out infinite",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl px-8">
        <h1
          ref={titleRef}
          className="text-7xl md:text-8xl font-light tracking-wider text-blue-50 mb-6"
          style={{ fontFamily: "system-ui, sans-serif" }}
        >
          INGENIUM
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-blue-200/80 font-light tracking-wide mb-3"
        >
          CHRONOVERSE: Past, Present, Future
        </p>

        <p
          ref={dateRef}
          className="text-sm md:text-base text-blue-300/60 font-light tracking-widest mb-16 uppercase"
        >
          IIT Indore • Techno-Cultural Fest
        </p>

        {/* CTA Button */}
        <button
          ref={buttonRef}
          onClick={onNavigate}
          onMouseEnter={() => handleButtonHover(true)}
          onMouseLeave={() => handleButtonHover(false)}
          className="group relative px-12 py-4 bg-transparent border border-blue-400/40 text-blue-100 
                     tracking-wider text-sm font-light transition-all duration-300 cursor-pointer
                     hover:border-blue-400/70 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
        >
          <span className="relative z-10">NAVIGATE CHRONOVERSE</span>
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Subtle hint text */}
        <p className="mt-8 text-blue-400/40 text-xs tracking-wider uppercase">
          Click to explore the timeline
        </p>
      </div>

      <style>{`
        @keyframes gridDrift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        
        @keyframes sweep {
          0% { transform: translateX(0); opacity: 0; }
          50% { transform: translateX(50vw); opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
