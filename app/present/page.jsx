"use client";

import Link from "next/link";
import {
  PageTransitionWrapper,
  StarField,
  ChronoTabs,
  ChronoCard,
  TimelineItem,
  GlowButton,
} from "@/components/chronoverse";

const ongoingEvents = [
  {
    name: "Code Marathon 2026",
    status: "live",
    date: "Jan 25-26, 2026",
    time: "Ongoing",
    venue: "Innovation Hub",
    description:
      "48-hour coding challenge with real-world problem statements from industry partners.",
  },
  {
    name: "Tech Talks Series",
    status: "live",
    date: "Jan 25, 2026",
    time: "2:00 PM - 5:00 PM",
    venue: "Auditorium A",
    description:
      "Industry experts sharing insights on emerging technologies and career paths.",
  },
];

const upcomingEvents = [
  {
    name: "Robo Championship",
    status: "upcoming",
    date: "Jan 27, 2026",
    time: "10:00 AM",
    venue: "Tech Arena",
    description:
      "Battle of autonomous and manual robots in various challenges.",
  },
  {
    name: "AI Workshop",
    status: "upcoming",
    date: "Jan 28, 2026",
    time: "9:00 AM - 4:00 PM",
    venue: "Lab Complex",
    description: "Hands-on workshop on building and deploying ML models.",
  },
  {
    name: "Cultural Night",
    status: "upcoming",
    date: "Jan 29, 2026",
    time: "6:00 PM",
    venue: "Open Air Theatre",
    description:
      "Grand finale celebration with performances and awards ceremony.",
  },
];

const scheduleData = [
  {
    day: "Day 1 - Jan 25",
    events: [
      { time: "9:00 AM", name: "Opening Ceremony", venue: "Main Stage" },
      {
        time: "10:30 AM",
        name: "Code Marathon Kickoff",
        venue: "Innovation Hub",
      },
      { time: "2:00 PM", name: "Tech Talks - AI & ML", venue: "Auditorium A" },
      {
        time: "4:00 PM",
        name: "Workshop Registration",
        venue: "Registration Desk",
      },
      { time: "7:00 PM", name: "Networking Dinner", venue: "Central Lawn" },
    ],
  },
  {
    day: "Day 2 - Jan 26",
    events: [
      {
        time: "9:00 AM",
        name: "Workshop Sessions Begin",
        venue: "Lab Complex",
      },
      {
        time: "11:00 AM",
        name: "Tech Talks - Blockchain",
        venue: "Auditorium B",
      },
      { time: "2:00 PM", name: "Robo Trials", venue: "Tech Arena" },
      {
        time: "5:00 PM",
        name: "Code Marathon Midpoint",
        venue: "Innovation Hub",
      },
      { time: "8:00 PM", name: "Gaming Tournament", venue: "E-Sports Zone" },
    ],
  },
  {
    day: "Day 3 - Jan 27",
    events: [
      {
        time: "10:00 AM",
        name: "Robo Championship Finals",
        venue: "Tech Arena",
      },
      {
        time: "1:00 PM",
        name: "Code Marathon Presentations",
        venue: "Main Stage",
      },
      { time: "4:00 PM", name: "Prize Distribution", venue: "Main Stage" },
      { time: "6:00 PM", name: "Cultural Night", venue: "Open Air Theatre" },
      { time: "9:00 PM", name: "Closing Ceremony", venue: "Main Stage" },
    ],
  },
];

const registrations = [
  {
    name: "Code Marathon",
    spots: "45/100",
    status: "Open",
    deadline: "Jan 24, 2026",
  },
  {
    name: "Robo Championship",
    spots: "28/50",
    status: "Open",
    deadline: "Jan 25, 2026",
  },
  { name: "AI Workshop", spots: "FULL", status: "Closed", deadline: "Ended" },
  {
    name: "Cultural Night",
    spots: "Free Entry",
    status: "Open",
    deadline: "Jan 28, 2026",
  },
];

export default function PresentPage() {
  const tabs = [
    {
      id: "ongoing",
      label: "Ongoing Events",
      content: (
        <div className="space-y-6">
          {ongoingEvents.map((event, index) => (
            <TimelineItem
              key={index}
              title={event.name}
              date={event.date}
              time={event.time}
              venue={event.venue}
              description={event.description}
              status={event.status}
              isLast={index === ongoingEvents.length - 1}
            >
              <div className="mt-4">
                <GlowButton variant="primary" size="sm">
                  Watch Live
                </GlowButton>
              </div>
            </TimelineItem>
          ))}
        </div>
      ),
    },
    {
      id: "upcoming",
      label: "Upcoming Events",
      content: (
        <div className="space-y-6">
          {upcomingEvents.map((event, index) => (
            <TimelineItem
              key={index}
              title={event.name}
              date={event.date}
              time={event.time}
              venue={event.venue}
              description={event.description}
              status={event.status}
              isLast={index === upcomingEvents.length - 1}
            >
              <div className="mt-4">
                <GlowButton variant="accent" size="sm">
                  Set Reminder
                </GlowButton>
              </div>
            </TimelineItem>
          ))}
        </div>
      ),
    },
    {
      id: "schedule",
      label: "Event Schedule",
      content: (
        <div className="space-y-8">
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex} className="glass-panel rounded-xl p-6">
              <h3 className="text-xl font-sans tracking-wider text-primary mb-6">
                {day.day}
              </h3>
              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 md:w-32">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="font-mono text-sm text-primary">
                        {event.time}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-sans tracking-wide text-foreground">
                        {event.name}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {event.venue}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "registrations",
      label: "Registrations",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {registrations.map((reg, index) => (
            <ChronoCard
              key={index}
              title={reg.name}
              badge={reg.status}
              badgeVariant={reg.status === "Open" ? "upcoming" : "completed"}
            >
              <div className="mt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Available Spots</span>
                  <span
                    className={
                      reg.spots === "FULL" ? "text-destructive" : "text-primary"
                    }
                  >
                    {reg.spots}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Deadline</span>
                  <span className="text-foreground">{reg.deadline}</span>
                </div>
                {reg.status === "Open" && (
                  <GlowButton
                    variant="primary"
                    size="sm"
                    className="w-full mt-4"
                  >
                    Register Now
                  </GlowButton>
                )}
              </div>
            </ChronoCard>
          ))}
        </div>
      ),
    },
  ];

  return (
    <PageTransitionWrapper>
      <main className="relative min-h-screen bg-background">
        <StarField />
        <div className="absolute inset-0 chrono-grid" />

        {/* Blue/Cyan gradient for Present theme */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15)_0%,transparent_50%)]" />

        <div className="relative z-10 px-4 py-12 md:py-20">
          {/* Back Navigation */}
          <div className="max-w-7xl mx-auto mb-8">
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

          {/* Hero Section */}
          <header className="max-w-7xl mx-auto text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-1 rounded-full text-sm tracking-widest uppercase bg-primary/10 text-primary border border-primary/30 animate-pulse">
                Present
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-sans tracking-wider mb-4">
              <span className="bg-linear-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                Live Timeline
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience INGENIUM 2026 as it unfolds. Track ongoing events, plan
              your schedule, and never miss a moment.
            </p>

            {/* Live indicator */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-green-400 tracking-wider uppercase">
                System Active
              </span>
            </div>
          </header>

          {/* Content */}
          <section className="max-w-7xl mx-auto">
            <ChronoTabs tabs={tabs} />
          </section>
        </div>
      </main>
    </PageTransitionWrapper>
  );
}
