"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import LandingPage from "@/components/LandingPage";
import Navigation from "@/components/Navigation";
import ContentPanel from "@/components/ContentPanel";

export default function App() {
  const [appState, setAppState] = useState("landing");
  const [selectedNode, setSelectedNode] = useState(null);
  const transitionRef = useRef(null);

  const handleNavigateToMap = () => {
    // GSAP Animation Hook: Transition from landing to navigation
    const tl = gsap.timeline({
      onComplete: () => setAppState("navigation"),
    });

    // Fade out and scale down landing page
    tl.to(".landing-container", {
      opacity: 0,
      scale: 0.95,
      duration: 0.6,
      ease: "power2.in",
    });
  };

  const handleNodeSelect = (nodeId) => {
    setSelectedNode(nodeId);
    setAppState("content");
  };

  const handleCloseContent = () => {
    setSelectedNode(null);
    setAppState("navigation");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a0e1a]">
      {/* Landing Page */}
      {appState === "landing" && (
        <div className="landing-container">
          <LandingPage onNavigate={handleNavigateToMap} />
        </div>
      )}

      {/* Chronoverse Navigation Map */}
      {(appState === "navigation" || appState === "content") && (
        <Navigation onNodeSelect={handleNodeSelect} />
      )}

      {/* Content Panel Overlay */}
      {appState === "content" && selectedNode && (
        <ContentPanel nodeId={selectedNode} onClose={handleCloseContent} />
      )}
    </div>
  );
}
