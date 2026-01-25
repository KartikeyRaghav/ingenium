"use client";

import Link from "next/link";
import {
  PageTransitionWrapper,
  StarField,
  GlassPanel,
  GlowButton,
} from "@/components/chronoverse";

const visionTimeline = [
  {
    year: "2026",
    title: "Global Expansion",
    description:
      "International collaborations with 50+ universities worldwide.",
  },
  {
    year: "2027",
    title: "Innovation District",
    description:
      "Launch of dedicated innovation hub with incubation facilities.",
  },
  {
    year: "2028",
    title: "AI Research Center",
    description: "State-of-the-art AI and robotics research facility.",
  },
  {
    year: "2030",
    title: "Sustainability Campus",
    description: "Carbon-neutral campus with renewable energy systems.",
  },
];

const futureTechnologies = [
  {
    title: "Quantum Computing",
    description:
      "Exploring quantum algorithms and their applications in solving complex problems.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Space Technology",
    description:
      "Satellite development and space exploration research programs.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Biotechnology",
    description:
      "Advancing healthcare through genetic research and bioengineering.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    title: "Clean Energy",
    description:
      "Developing sustainable energy solutions for a greener tomorrow.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

const sponsors = [
  { name: "TechCorp Global", tier: "Platinum" },
  { name: "InnovateLabs", tier: "Platinum" },
  { name: "FutureVentures", tier: "Gold" },
  { name: "QuantumSoft", tier: "Gold" },
  { name: "GreenTech Solutions", tier: "Gold" },
  { name: "AI Dynamics", tier: "Silver" },
  { name: "CloudNine Systems", tier: "Silver" },
  { name: "DataStream Inc", tier: "Silver" },
];

export default function FuturePage() {
  return (
    <PageTransitionWrapper>
      <main className="relative min-h-screen bg-background overflow-hidden">
        <StarField />
        <div className="absolute inset-0 chrono-grid" />

        {/* Violet gradient for Future theme */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15)_0%,transparent_50%)]" />

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
              <span className="px-4 py-1 rounded-full text-sm tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/30">
                Future
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-sans tracking-wider mb-4">
              <span
                className="bg-linear-to-r from-violet-400 via-purple-400 to-violet-500 bg-clip-text text-transparent"
                style={{ fontFamily: "Oxanium, sans-serif" }}
              >
                Vision Beyond Time
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what lies ahead. Our roadmap to becoming a global leader
              in innovation and technology education.
            </p>
          </header>

          {/* Vision Timeline Section */}
          <section className="max-w-7xl mx-auto mb-20">
            <h2 className="text-2xl font-sans tracking-wider text-foreground mb-8 text-center">
              Vision Timeline
            </h2>
            <div className="relative">
              {/* Horizontal line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-violet-500/50 to-transparent -translate-y-1/2" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {visionTimeline.map((item, index) => (
                  <div
                    key={index}
                    className="relative group"
                    style={{
                      animationDelay: `${index * 150}ms`,
                      animation: "fade-in 0.6s ease-out forwards",
                    }}
                  >
                    {/* Node dot */}
                    <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.6)] group-hover:scale-150 transition-transform z-10" />

                    <GlassPanel glowOnHover className="text-center md:mt-8">
                      <span className="text-3xl font-sans text-violet-400 mb-2 block">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-sans tracking-wide text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </GlassPanel>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Future Technologies Section */}
          <section className="max-w-7xl mx-auto mb-20">
            <h2 className="text-2xl font-sans tracking-wider text-foreground mb-8 text-center">
              Future Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {futureTechnologies.map((tech, index) => (
                <GlassPanel
                  key={index}
                  glowOnHover
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 group-hover:bg-violet-500/20 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-sans tracking-wide text-foreground mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tech.description}
                  </p>
                </GlassPanel>
              ))}
            </div>
          </section>

          {/* Sponsors Section */}
          <section className="max-w-7xl mx-auto mb-20">
            <h2 className="text-2xl font-sans tracking-wider text-foreground mb-8 text-center">
              Sponsors & Partners
            </h2>

            {/* Platinum Sponsors */}
            <div className="mb-8">
              <p className="text-center text-sm text-violet-400 tracking-widest uppercase mb-4">
                Platinum Partners
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {sponsors
                  .filter((s) => s.tier === "Platinum")
                  .map((sponsor, index) => (
                    <GlassPanel
                      key={index}
                      glowOnHover
                      className="text-center py-8"
                    >
                      <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-linear-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 flex items-center justify-center">
                        <span className="text-2xl font-sans text-violet-400">
                          {sponsor.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="font-sans tracking-wide text-foreground">
                        {sponsor.name}
                      </h3>
                    </GlassPanel>
                  ))}
              </div>
            </div>

            {/* Gold Sponsors */}
            <div className="mb-8">
              <p className="text-center text-sm text-amber-400 tracking-widest uppercase mb-4">
                Gold Partners
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {sponsors
                  .filter((s) => s.tier === "Gold")
                  .map((sponsor, index) => (
                    <GlassPanel
                      key={index}
                      className="text-center py-6 hover:glow-border transition-all"
                    >
                      <div className="w-14 h-14 mx-auto mb-3 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                        <span className="text-xl font-sans text-amber-400">
                          {sponsor.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="text-sm font-sans tracking-wide text-foreground">
                        {sponsor.name}
                      </h3>
                    </GlassPanel>
                  ))}
              </div>
            </div>

            {/* Silver Sponsors */}
            <div>
              <p className="text-center text-sm text-muted-foreground tracking-widest uppercase mb-4">
                Silver Partners
              </p>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {sponsors
                  .filter((s) => s.tier === "Silver")
                  .map((sponsor, index) => (
                    <GlassPanel key={index} className="text-center py-4 px-6">
                      <h3 className="text-sm font-sans tracking-wide text-muted-foreground">
                        {sponsor.name}
                      </h3>
                    </GlassPanel>
                  ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="max-w-3xl mx-auto text-center">
            <GlassPanel className="py-12">
              <h2 className="text-3xl font-sans tracking-wider text-foreground mb-4">
                Be Part of the Future
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join us in shaping tomorrow. Whether as a sponsor, partner, or
                participant, your contribution helps build the future of
                innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <GlowButton variant="primary" size="lg">
                  Become a Partner
                </GlowButton>
                <GlowButton variant="accent" size="lg">
                  Join Our Mission
                </GlowButton>
              </div>
            </GlassPanel>
          </section>
        </div>
      </main>
    </PageTransitionWrapper>
  );
}
