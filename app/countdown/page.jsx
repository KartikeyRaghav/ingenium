"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";

export default function CountdownPage() {
  const targetDate = new Date("2026-03-14T18:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour12: false }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="relative min-h-screen">
      <Navigation />

      {/* Background Grid */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(90, 107, 130, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(90, 107, 130, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Countdown Display - MINIMAL NUMERIC */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-12">
            {/* Header */}
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.3em] text-accent">
                Event Countdown
              </div>
              <h1 className="text-5xl md:text-7xl font-medium tracking-tighter">
                Ingenium 2026
              </h1>
              <p className="text-lg text-muted-foreground">
                March 14-16, 2026 • IIT Indore
              </p>
            </div>

            {/* Countdown Boxes - CLEAN & STRUCTURED */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              data-animate="countdown"
            >
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Minutes" },
                { value: timeLeft.seconds, label: "Seconds" },
              ].map((unit, index) => (
                <div
                  key={index}
                  className="p-8 border border-border rounded-sm bg-card/30"
                >
                  <div className="text-6xl md:text-7xl font-medium tracking-tight mb-3 tabular-nums">
                    {String(unit.value).padStart(2, "0")}
                  </div>
                  <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>
            {/* <ArcReactorClock time={time} /> */}
            {/* Event Start Date */}
            <div className="pt-12 space-y-4">
              <div className="inline-block px-6 py-3 border border-border rounded-sm bg-muted/50">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Event Begins
                </div>
                <div className="text-lg font-medium font-mono">
                  14.03.2026 • 18:00 IST
                </div>
              </div>
            </div>

            {/* Registration CTA */}
            <div className="pt-8">
              <button className="px-10 py-4 bg-accent text-accent-foreground rounded-sm hover:bg-accent/90 transition-all">
                <span className="uppercase tracking-wider text-sm font-medium">
                  Pre-Register Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="relative py-24 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-medium tracking-tight mb-12 text-center">
            Important Dates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                date: "Feb 01, 2026",
                event: "Registration Opens",
                status: "Upcoming",
              },
              {
                date: "Mar 01, 2026",
                event: "Registration Closes",
                status: "Upcoming",
              },
              {
                date: "Mar 14, 2026",
                event: "Event Begins",
                status: "Upcoming",
              },
            ].map((milestone, index) => (
              <div
                key={index}
                className="p-6 border border-border rounded-sm bg-card/30 text-center"
              >
                <div className="text-xs uppercase tracking-wider text-accent mb-2">
                  {milestone.status}
                </div>
                <div className="text-lg font-medium mb-1">
                  {milestone.event}
                </div>
                <div className="text-sm text-muted-foreground font-mono">
                  {milestone.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
