"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import LandingPage from "@/components/LandingPage";
import Navigation from "@/components/Navigation";
import { StarField } from "@/components/chronoverse";
import { useSearchParams } from "next/navigation";

export default function MainPage() {
  const [appState, setAppState] = useState("landing");
  const searchParams = useSearchParams();

  const stateChange = () => {
    if (!searchParams) return null;
    const state = searchParams.get("state");
    if (state && state == "navigation") {
      setAppState("navigation");
    }
  };

  useEffect(() => {
    stateChange();
  }, []);

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
      <StarField />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />
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
