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
      const duration = Math.random() * 1000 + 2000; // 2000ms - 3000ms

      const newStar = {
        id: id,
        x: Math.random() * 50 + 50, // Start in right half (50-100%)
        y: Math.random() * 50,      // Start in top half (0-50%)
        angle: 135,                 // Fixed diagonal (Top-Right -> Bottom-Left)
        size: Math.random() * 2 + 1,
        duration: duration / 1000 + 's',
      };

      setShootingStars((prev) => {
        if (prev.length > 5) return [newStar];
        return [...prev, newStar];
      });

      // Cleanup
      setTimeout(() => {
        setShootingStars((prev) => prev.filter(s => s.id !== id));
      }, duration + 500);

      // Schedule next
      // Wait for current to finish (duration) + gap (0.5s - 2s)
      const nextDelay = duration + (Math.random() * 1500 + 500);
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
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            transform: `rotate(${star.angle}deg)`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        >
          <div
            className="w-full h-full bg-white/80 animate-shooting-star"
            style={{
              boxShadow: `0 0 10px 2px rgba(255, 255, 255, 0.4)`,
              animationDuration: star.duration,
            }}
            onAnimationEnd={() => handleAnimationEnd(star.id)}
          >
            {/* Tail */}
            <div
              className="absolute top-1/2 left-0 w-125 h-px bg-linear-to-r from-transparent to-white -translate-y-1/2 -translate-x-full origin-right"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
