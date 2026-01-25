"use client";

import { useState } from "react";
import gsap from "gsap";
import LandingPage from "@/components/LandingPage";
import Navigation from "@/components/Navigation";

export default function App() {
  const [appState, setAppState] = useState("landing");

  const handleNavigateToMap = () => {
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

  const handleNavigateToLanding = () => {
    const tl = gsap.timeline({
      onComplete: () => setAppState("landing"),
    });

    // Fade out and scale down landing page
    tl.to(".navigation-container", {
      opacity: 0,
      scale: 0.95,
      duration: 0.6,
      ease: "power2.in",
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a0e1a]">
      {appState === "landing" && (
        <div className="landing-container">
          <LandingPage onNavigate={handleNavigateToMap} />
        </div>
      )}

      {appState === "navigation" && (
        <div className="navigation-container">
          <Navigation onNavigate={handleNavigateToLanding} />
        </div>
      )}
    </div>
  );
}
