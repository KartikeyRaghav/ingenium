"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Clock, Calendar, Rocket, Phone, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Navigation = ({ onNavigate }) => {
  const containerRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const router = useRouter();

  const nodes = [
    {
      id: "past",
      label: "PAST",
      position: { x: 20, y: 50 },
      icon: <Clock className="w-8 h-8" />,
      color: "green",
      description: "Origins & Culture",
    },
    {
      id: "present",
      label: "PRESENT",
      position: { x: 50, y: 50 },
      icon: <Calendar className="w-8 h-8" />,
      color: "cyan",
      description: "Events & Schedule",
    },
    {
      id: "future",
      label: "FUTURE",
      position: { x: 80, y: 50 },
      icon: <Rocket className="w-8 h-8" />,
      color: "cyan",
      description: "Vision & Sponsors",
    },
    {
      id: "countdown",
      label: "TIME CORE",
      position: { x: 50, y: 25 },
      icon: <Clock className="w-8 h-8" />,
      color: "cyan",
      description: "Countdown",
    },
    {
      id: "contact",
      label: "CONTACT",
      position: { x: 50, y: 75 },
      icon: <Phone className="w-8 h-8" />,
      color: "blue",
      description: "Team & Reach",
    },
  ];

  useEffect(() => {
    // GSAP Animation Hook: Navigation map entrance
    const tl = gsap.timeline();

    tl.fromTo(
      containerRef.current,
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power2.out",
      },
      {
        opacity: 1,
        scale: 0.9,
        duration: 0.8,
        ease: "power2.out",
      },
    );

    // Animate nodes in sequence
    nodes.forEach((node, index) => {
      const nodeElement = document.getElementById(`node-${node.id}`);
      if (nodeElement) {
        gsap.fromTo(
          nodeElement,
          {
            opacity: 0,
            scale: 0,
            duration: 0.5,
            delay: index * 0.1,
            ease: "back.out(1.7)",
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: index * 0.1,
            ease: "back.out(1.7)",
          },
        );
      }
    });

    // Animate connection lines
    const lines = document.querySelectorAll(".connection-line");
    lines.forEach((line, index) => {
      gsap.from(line, {
        strokeDashoffset: 1000,
        duration: 1.5,
        delay: 0.5 + index * 0.2,
        ease: "power2.out",
      });
    });
  }, []);

  const handleNodeHover = (nodeId) => {
    setHoveredNode(nodeId);

    const nodeElement = document.getElementById(`node-${nodeId}`);
    if (nodeElement && nodeId) {
      // GSAP Animation Hook: Node hover effect
      gsap.to(nodeElement, {
        scale: 1.15,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleNodeLeave = (nodeId) => {
    const nodeElement = document.getElementById(`node-${nodeId}`);
    if (nodeElement && nodeId !== selectedNode) {
      gsap.to(nodeElement, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleNodeClick = (nodeId) => {
    setSelectedNode(nodeId);

    // GSAP Animation Hook: Node selection with camera pan effect
    const nodeElement = document.getElementById(`node-${nodeId}`);
    if (nodeElement) {
      gsap.to(nodeElement, {
        scale: 1.2,
        duration: 0.4,
        ease: "power2.out",
      });
    }

    // Trigger content panel opening
    setTimeout(() => {
      router.push(`/${nodeId}`);
    }, 400);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-transparent overflow"
    >
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Header */}
      <div className="absolute top-8 left-8 z-20 flex gap-6 justify-center items-center">
        <button className="cursor-pointer" onClick={onNavigate}>
          <ArrowLeft className="w-8 h-8" />
        </button>
        <div>
          <h2
            className="text-4xl bg-linear-to-r from-green-500 via-cyan-400 to-blue-500 font-semibold tracking-wider bg-clip-text text-transparent"
            style={{ fontFamily: "Oxanium, sans-serif" }}
          >
            INGENIUM
          </h2>
          <p className="text-lg text-blue-300/60 tracking-wide">
            CHRONOVERSE NAVIGATION
          </p>
        </div>
      </div>

      {/* SVG Connection Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      >
        {/* Past to Present */}
        <line
          className="connection-line"
          x1="20%"
          y1="50%"
          x2="50%"
          y2="50%"
          stroke="rgba(59, 130, 246, 0.3)"
          strokeWidth="1"
          strokeDasharray="5,5"
          style={{ strokeDashoffset: 0 }}
        />

        {/* Present to Future */}
        <line
          className="connection-line"
          x1="50%"
          y1="50%"
          x2="80%"
          y2="50%"
          stroke="rgba(59, 130, 246, 0.3)"
          strokeWidth="1"
          strokeDasharray="5,5"
          style={{ strokeDashoffset: 0 }}
        />

        {/* Time Core to Present */}
        <line
          className="connection-line"
          x1="50%"
          y1="25%"
          x2="50%"
          y2="50%"
          stroke="rgba(59, 130, 246, 0.2)"
          strokeWidth="1"
          strokeDasharray="5,5"
          style={{ strokeDashoffset: 0 }}
        />

        {/* Present to Contact */}
        <line
          className="connection-line"
          x1="50%"
          y1="50%"
          x2="50%"
          y2="75%"
          stroke="rgba(59, 130, 246, 0.2)"
          strokeWidth="1"
          strokeDasharray="5,5"
          style={{ strokeDashoffset: 0 }}
        />
      </svg>

      {/* Navigation Nodes */}
      <div className="relative w-full h-full">
        {nodes.map((node) => (
          <div
            key={node.id}
            id={`node-${node.id}`}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{
              left: `${node.position.x}%`,
              top: `${node.position.y}%`,
              zIndex: 10,
            }}
            onMouseEnter={() => handleNodeHover(node.id)}
            onMouseLeave={() => handleNodeLeave(node.id)}
            onClick={() => handleNodeClick(node.id)}
          >
            {/* Node Container */}
            <div className="relative flex flex-col items-center">
              {/* Node Circle */}
              <div
                className={`
                  w-25 h-25 border flex items-center justify-center
                  transition-all duration-300
                  ${
                    hoveredNode === node.id || selectedNode === node.id
                      ? "border-blue-400/80 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                      : `border-blue-400/40 bg-blue-500/5 shadow-[0_0_15px_rgba(59,130,246,0.1)]"`
                  }
                `}
                style={{
                  clipPath:
                    "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                }}
              >
                <div className="text-blue-200">{node.icon}</div>
              </div>

              {/* Node Label */}
              <div className="mt-4 text-center">
                <p
                  className="text-md tracking-wider text-blue-100 font-semibold"
                  style={{ fontFamily: "Oxanium, sans-serif" }}
                >
                  {node.label}
                </p>
                <p className="text-md tracking-wide text-blue-400/60 mt-1">
                  {node.description}
                </p>
              </div>

              {/* Glow effect on hover */}
              {hoveredNode === node.id && (
                <div
                  className="absolute inset-0 -z-10"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
                    width: "200%",
                    height: "200%",
                    left: "-50%",
                    top: "-50%",
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Instructions */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-blue-400/40 text-md tracking-wider uppercase">
          Select a node to explore
        </p>
      </div>
    </div>
  );
};

export default Navigation;
