"use client";

import { useEffect, useState } from "react";

export function StarField() {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    // Generate static stars
    const generatedStars = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      animationDuration: Math.random() * 3 + 2,
    }));
    setStars(generatedStars);

    // Shooting star spawner (Sequential)
    let timeoutId;

    const spawnShootingStar = () => {
      const id = Date.now();
      const newStar = {
        id: id,
        x: Math.random() * 90 + 5,
        y: Math.random() * 50, // Top half
        angle: Math.random() * 30 + 120, // 120-150 degrees
        size: Math.random() * 2 + 1,
      };

      setShootingStars((prev) => {
        // Auto-cleanup phantom stars if list gets too big (safety net)
        if (prev.length > 5) return [newStar];
        return [...prev, newStar];
      });

      // Cleanup fallback in case onAnimationEnd misses
      setTimeout(() => {
        setShootingStars((prev) => prev.filter(s => s.id !== id));
      }, 2000);

      // Schedule next spawn after animation (1.5s) + random delay (0.5 - 2.5s)
      const nextDelay = 1500 + (Math.random() * 2000 + 500);
      timeoutId = setTimeout(spawnShootingStar, nextDelay);
    };

    spawnShootingStar();

    return () => clearTimeout(timeoutId);
  }, []);

  // Handler still used for immediate cleanup if animation works
  const handleAnimationEnd = (id) => {
    setShootingStars((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Static Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${star.animationDuration}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white/80 animate-shooting-star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            transform: `rotate(${star.angle}deg)`,
            boxShadow: `0 0 10px 2px rgba(255, 255, 255, 0.4)`,
          }}
          onAnimationEnd={() => handleAnimationEnd(star.id)}
        >
          {/* Tail */}
          <div
            className="absolute top-1/2 left-0 w-[100px] h-[1px] bg-linear-to-r from-transparent to-white -translate-y-1/2 -translate-x-full origin-right"
          />
        </div>
      ))}
    </div>
  );
}
