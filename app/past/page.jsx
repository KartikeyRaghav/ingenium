"use client";

import Link from "next/link";
import {
  PageTransitionWrapper,
  StarField,
  ChronoTabs,
  ChronoCard,
  GlowButton,
} from "@/components/chronoverse";

const culturalEvents = [
  {
    name: "Rhythm of Souls",
    year: "2024",
    description:
      "A mesmerizing dance competition featuring classical and contemporary styles from across India.",
  },
  {
    name: "Melody Nights",
    year: "2024",
    description:
      "Musical extravaganza showcasing talented vocalists and instrumentalists.",
  },
  {
    name: "Drama Fest",
    year: "2023",
    description:
      "Theatre competition exploring social themes through powerful performances.",
  },
  {
    name: "Art Canvas",
    year: "2023",
    description:
      "Exhibition of student artworks including paintings, sculptures, and digital art.",
  },
  {
    name: "Fashion Forward",
    year: "2022",
    description:
      "Annual fashion show celebrating creativity and sustainable fashion.",
  },
  {
    name: "Literary League",
    year: "2022",
    description: "Debates, poetry slams, and creative writing competitions.",
  },
];

const technicalEvents = [
  {
    name: "Code Storm",
    year: "2024",
    description:
      "24-hour hackathon challenging participants to build innovative solutions.",
  },
  {
    name: "Robo Wars",
    year: "2024",
    description: "Intense robot combat competition with custom-built machines.",
  },
  {
    name: "AI Summit",
    year: "2023",
    description:
      "Workshop and competition focused on machine learning applications.",
  },
  {
    name: "Circuit Breaker",
    year: "2023",
    description:
      "Electronics design challenge pushing the boundaries of innovation.",
  },
  {
    name: "Web Wizards",
    year: "2022",
    description:
      "Full-stack web development competition with real-world problems.",
  },
  {
    name: "Cyber Quest",
    year: "2022",
    description: "Capture the flag cybersecurity competition.",
  },
];

const flagshipFests = [
  {
    name: "INGENIUM 2024",
    year: "2024",
    description:
      "The grandest edition yet with over 10,000 participants from 200+ colleges.",
  },
  {
    name: "INGENIUM 2023",
    year: "2023",
    description:
      "Post-pandemic revival bringing back the spirit of innovation.",
  },
  {
    name: "INGENIUM 2022",
    year: "2022",
    description: "Virtual edition connecting students across the globe.",
  },
  {
    name: "INGENIUM 2019",
    year: "2019",
    description:
      "Record-breaking participation with international collaborations.",
  },
];

const legacyHighlights = [
  {
    name: "Industry Connect Program",
    year: "2024",
    description:
      "Partnership with Fortune 500 companies for mentorship and internships.",
  },
  {
    name: "Innovation Award",
    year: "2023",
    description: "Student project recognized at National Technology Summit.",
  },
  {
    name: "Alumni Network Launch",
    year: "2022",
    description: "Establishing connections with 5000+ alumni worldwide.",
  },
  {
    name: "Research Excellence",
    year: "2021",
    description: "Student papers published in international journals.",
  },
];

export default function PastPage() {
  const tabs = [
    {
      id: "cultural",
      label: "Cultural Events",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {culturalEvents.map((event, index) => (
            <ChronoCard
              key={index}
              title={event.name}
              year={event.year}
              description={event.description}
              image="placeholder"
            />
          ))}
        </div>
      ),
    },
    {
      id: "technical",
      label: "Technical Events",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalEvents.map((event, index) => (
            <ChronoCard
              key={index}
              title={event.name}
              year={event.year}
              description={event.description}
              image="placeholder"
            />
          ))}
        </div>
      ),
    },
    {
      id: "flagship",
      label: "Flagship Fests",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {flagshipFests.map((event, index) => (
            <ChronoCard
              key={index}
              title={event.name}
              year={event.year}
              description={event.description}
              className="md:last:col-span-2 md:last:max-w-xl md:last:mx-auto"
            />
          ))}
        </div>
      ),
    },
    {
      id: "legacy",
      label: "Legacy Highlights",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {legacyHighlights.map((event, index) => (
            <ChronoCard
              key={index}
              title={event.name}
              year={event.year}
              description={event.description}
            />
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

        {/* Amber/Orange gradient for Past theme */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.1)_0%,transparent_50%)]" />

        <div className="relative z-10 px-4 py-12 md:py-20">
          {/* Back Navigation */}
          <div className="max-w-7xl mx-auto mb-8">
            <Link href="/">
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
              <span className="px-4 py-1 rounded-full text-sm tracking-widest uppercase bg-amber-500/10 text-amber-400 border border-amber-500/30">
                Past
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-sans tracking-wider mb-4">
              <span className="bg-linear-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Chronicles of Innovation
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the legacy of events that shaped INGENIUM into what it is
              today. Every moment, a milestone in our journey through time.
            </p>

            {/* Decorative timeline */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-linear-to-r from-transparent to-amber-500/50" />
              <div className="w-3 h-3 rounded-full bg-amber-500/50 animate-pulse" />
              <div className="h-px w-32 bg-amber-500/30" />
              <div className="w-2 h-2 rounded-full bg-amber-500/30" />
              <div className="h-px w-20 bg-linear-to-l from-transparent to-amber-500/50" />
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
