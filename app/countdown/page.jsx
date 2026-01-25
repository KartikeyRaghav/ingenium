"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  PageTransitionWrapper,
  StarField,
  GlowButton,
} from "@/components/chronoverse";

function calculateTimeLeft() {
  // Target date: Feb 15, 2026
  const targetDate = new Date("2026-02-15T00:00:00");
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function CountdownRing({ value, max, label, delay }) {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / max) * circumference;
  const strokeDashoffset = circumference - progress;

  return (
    <div
      className="relative flex flex-col items-center"
      style={{
        animationDelay: `${delay}ms`,
        animation: "fade-in 0.6s ease-out forwards",
      }}
    >
      <div className="relative w-44 h-44 md:w-52 md:h-52">
        {/* Background ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="rgba(59, 130, 246, 0.1)"
            strokeWidth="4"
          />
        </svg>

        {/* Progress ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />

        {/* Value */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl md:text-6xl font-sans tracking-wider text-foreground animate-glow-pulse">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-sm text-muted-foreground tracking-widest uppercase mt-2">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TimeCorePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <PageTransitionWrapper>
      <main className="relative min-h-screen bg-background overflow-hidden flex items-center justify-center">
        <StarField />
        <div className="absolute inset-0 chrono-grid" />

        {/* Multi-color radial gradient for Time Core */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.2)_0%,rgba(59,130,246,0.1)_30%,transparent_60%)]" />

        {/* Pulsing core effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-150 h-150 rounded-full border border-primary/10 animate-[signal-pulse_4s_ease-out_infinite]" />
          <div className="absolute w-100 h-100 rounded-full border border-cyan-500/10 animate-[signal-pulse_4s_ease-out_infinite_1s]" />
          <div className="absolute w-50 h-50 rounded-full border border-violet-500/10 animate-[signal-pulse_4s_ease-out_infinite_2s]" />
        </div>

        <div className="relative z-10 px-4 py-12 w-full max-w-6xl mx-auto">
          {/* Back Navigation */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8">
            <Link href="/?state=navigation">
              <GlowButton variant="secondary" size="sm">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Chronoverse
                </span>
              </GlowButton>
            </Link>
          </div>

          {/* Content */}
          <div className="text-center">
            {/* Title */}
            <div className="mb-12">
              <div className="inline-block mb-4">
                <span className="px-4 py-1 rounded-full text-sm tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  Time Core
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-sans tracking-wider mb-4">
                <span className="bg-linear-to-r from-cyan-400 via-primary to-violet-400 bg-clip-text text-transparent">
                  Countdown to Launch
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground font-sans tracking-wide">
                INGENIUM 2026
              </p>
              <p className="text-muted-foreground mt-2">February 15, 2026</p>
            </div>

            {/* Countdown */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
              <CountdownRing
                value={timeLeft.days}
                max={365}
                label="Days"
                delay={0}
              />
              <CountdownRing
                value={timeLeft.hours}
                max={24}
                label="Hours"
                delay={100}
              />
              <CountdownRing
                value={timeLeft.minutes}
                max={60}
                label="Minutes"
                delay={200}
              />
              <CountdownRing
                value={timeLeft.seconds}
                max={60}
                label="Seconds"
                delay={300}
              />
            </div>

            {/* Status */}
            <div className="glass-panel inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm text-muted-foreground tracking-wider">
                Systems Initializing
              </span>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/present">
                <GlowButton variant="primary" size="lg">
                  View Current Events
                </GlowButton>
              </Link>
              <Link href="/contact">
                <GlowButton variant="accent" size="lg">
                  Get Notified
                </GlowButton>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </PageTransitionWrapper>
  );
}
