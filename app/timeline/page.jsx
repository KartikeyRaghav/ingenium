"use client";

import Navigation from "@/components/Navigation";
import { Calendar } from "lucide-react";

const timelineData = [
  {
    date: "March 14, 2026",
    day: "Day 01",
    events: [
      {
        time: "09:00 AM",
        name: "Registration & Inauguration",
        venue: "Main Auditorium",
      },
      { time: "10:00 AM", name: "HackIgenium Begins", venue: "LHC" },
      { time: "11:00 AM", name: "Code Sprint Round 1", venue: "Computer Lab" },
      { time: "02:00 PM", name: "UI Battle", venue: "Design Studio" },
      {
        time: "04:00 PM",
        name: "Solo Music Performance",
        venue: "Open Air Theatre",
      },
      { time: "06:00 PM", name: "Chess Championship", venue: "Sports Complex" },
    ],
  },
  {
    date: "March 15, 2026",
    day: "Day 02",
    events: [
      { time: "10:00 AM", name: "HackIgenium Ends", venue: "LHC" },
      { time: "11:00 AM", name: "AI Challenge", venue: "Computer Lab" },
      { time: "02:00 PM", name: "Photo Hunt", venue: "Campus-wide" },
      { time: "04:00 PM", name: "General Quiz", venue: "Seminar Hall" },
      { time: "06:00 PM", name: "Battle of Bands", venue: "Open Air Theatre" },
      { time: "08:00 PM", name: "Valorant Finals", venue: "Gaming Arena" },
    ],
  },
  {
    date: "March 16, 2026",
    day: "Day 03",
    events: [
      { time: "10:00 AM", name: "Debate Competition", venue: "Seminar Hall" },
      { time: "02:00 PM", name: "Drama Competition", venue: "Main Auditorium" },
      {
        time: "04:00 PM",
        name: "Dance Competition",
        venue: "Open Air Theatre",
      },
      {
        time: "06:00 PM",
        name: "Prize Distribution",
        venue: "Main Auditorium",
      },
      { time: "07:30 PM", name: "Closing Ceremony", venue: "Main Auditorium" },
    ],
  },
];

export default function TimelinePage() {
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

      {/* Page Header */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.3em] text-accent">
              Schedule
            </div>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tighter">
              Timeline
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Complete event schedule for Ingenium 2026. All times are in IST.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline - VERTICAL PANELS */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12" data-animate="timeline">
            {timelineData.map((dayData, dayIndex) => (
              <div key={dayIndex} className="relative">
                {/* Day Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="shrink-0 w-32">
                    <div className="text-xs uppercase tracking-wider text-accent mb-1">
                      {dayData.day}
                    </div>
                    <div className="text-2xl font-medium tracking-tight">
                      {dayData.date.split(",")[0]}
                    </div>
                  </div>
                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* Events for the day */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {dayData.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className="group p-6 border border-border rounded-sm bg-card/30 hover:bg-card/60 hover:border-accent/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <span className="text-sm font-mono text-accent">
                            {event.time}
                          </span>
                        </div>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-accent transition-colors">
                        {event.name}
                      </h3>
                      <div className="text-sm text-muted-foreground">
                        {event.venue}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="relative py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <button className="px-8 py-4 border border-border text-foreground rounded-sm hover:bg-muted transition-all">
            <span className="uppercase tracking-wider text-sm font-medium">
              Download Full Schedule
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
